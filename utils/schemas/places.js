const joi = require('@hapi/joi')

const placeIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/)
const placeTitleSchema = joi.string().max(80)
const placeImageSchema = joi.string().uri()
const placeDescriptionSchema = joi.string().max(300)
const placeLocationSchema = joi.string().max(100)
const placePositionSchema = joi.object()
const placeCategorySchema = joi.string().max(100)

const createPlaceSchema = {
  title: placeTitleSchema.required(),
  description: placeDescriptionSchema.required(),
  image: placeImageSchema.required(),
  location: placeLocationSchema.required(),
  position: placePositionSchema.required(),
  category: placeCategorySchema.required(),
}

const updatePlaceSchema = {
  title: placeTitleSchema,
  description: placeDescriptionSchema,
  image: placeImageSchema,
  location: placeLocationSchema,
  position: placePositionSchema,
  category: placeCategorySchema,
}

module.exports = {
  placeIdSchema,
  createPlaceSchema,
  updatePlaceSchema,
}
