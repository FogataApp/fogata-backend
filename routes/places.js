const express = require('express')
const PlacesService = require('../services/places')

const {
  placeIdSchema,
  createPlaceSchema,
  updatePlaceSchema,
} = require('../utils/schemas/places')

const validationHandler = require('../utils/middleware/validationHandler')

function placesAPI(app) {
  const router = express.Router()
  app.use('/api/places', router)

  const placesService = new PlacesService()

  router.get('/', async function (req, res, next) {
    const { tags } = req.query
    try {
      const places = await placesService.getPlaces({ tags })

      res.status(200).json({
        data: places,
        message: 'places listed',
      })
    } catch (error) {
      next(error)
    }
  })

  router.get(
    '/:placeId',
    validationHandler({ placeId: placeIdSchema }, 'params'),
    async function (req, res, next) {
      const { placeId } = req.params
      try {
        const places = await placesService.getPlace({ placeId })

        res.status(200).json({
          data: places,
          message: 'place retrieve',
        })
      } catch (error) {
        next(error)
      }
    }
  )

  router.post('/', validationHandler(createPlaceSchema), async function (
    req,
    res,
    next
  ) {
    const { body: place } = req
    try {
      const createPlaceId = await placesService.createPlace({ place })

      res.status(201).json({
        data: createPlaceId,
        message: 'places created',
      })
    } catch (err) {
      next(err)
    }
  })

  router.put(
    '/:placeId',
    validationHandler({ placeId: placeIdSchema }, 'params'),
    validationHandler(updatePlaceSchema),
    async function (req, res, next) {
      const { placeId } = req.params
      const { body: place } = req
      try {
        const updatedPlaceId = await placesService.updatePlace({
          placeId,
          place,
        })

        res.status(200).json({
          data: updatedPlaceId,
          message: 'place updated',
        })
      } catch (error) {
        next(error)
      }
    }
  )

  router.delete(
    '/:placeId',
    validationHandler({ placeId: placeIdSchema }, 'params'),
    async function (req, res, next) {
      const { placeId } = req.params
      try {
        const deletedPlaceId = await placesService.deletePlace({ placeId })

        res.status(200).json({
          data: deletedPlaceId,
          message: 'place deleted',
        })
      } catch (error) {
        next(error)
      }
    }
  )
}

module.exports = placesAPI
