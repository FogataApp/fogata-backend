const { placesMock } = require('../utils/mocks/places')

class PlacesService {
  async getPlaces() {
    const places = await Promise.resolve(placesMock)
    return places || []
  }

  async getPlace() {
    const place = await Promise.resolve(placesMock[0])
    return place || {}
  }

  async createPlace() {
    const createPlaceId = await Promise.resolve(placesMock[0].id)
    return createPlaceId
  }

  async updatePlace() {
    const updatedPlaceId = await Promise.resolve(placesMock[0].id)
    return updatedPlaceId
  }

  async deletePlace() {
    const deletedPlaceId = await Promise.resolve(placesMock[0].id)
    return deletedPlaceId
  }
}

module.exports = PlacesService
