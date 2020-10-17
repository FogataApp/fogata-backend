const MongoLib = require('../lib/mongo')

class PlacesService {
  constructor() {
    this.collection = 'places'
    this.mongoDB = new MongoLib()
  }

  async getPlaces({ tags }) {
    const query = tags && { tags: { $in: tags } }
    const places = await this.mongoDB.getAll(this.collection, query)
    return places || []
  }

  async getPlace({ placeId }) {
    const place = await this.mongoDB.get(this.collection, placeId)
    return place || {}
  }

  async createPlace({ place }) {
    const createPlaceId = await this.mongoDB.create(this.collection, place)
    return createPlaceId
  }

  async updatePlace({ placeId, place } = {}) {
    const updatedPlaceId = await this.mongoDB.update(
      this.collection,
      placeId,
      place
    )
    return updatedPlaceId
  }

  async deletePlace({ placeId }) {
    const deletedPlaceId = await this.mongoDB.delete(this.collection, placeId)
    return deletedPlaceId
  }
}

module.exports = PlacesService
