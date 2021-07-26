import { fakeDb } from '../db/fakeDb'
import { BadRequest } from '../utils/Errors'

class BurgersService {
  getById(id) {
    const burger = fakeDb.burgers.find(b => b.id.toString() === id)
    if (!burger) {
      throw new BadRequest('Invalid Burger ID')
    }
    return burger
  }

  getAll() {
    return fakeDb.burgers
  }

  create(body) {
    fakeDb.burgers.push(body)
    return (body)
  }

  delete(id) {
    const index = fakeDb.burgers.findIndex(b => b.id.toString() === id)
    if (index == -1) {
      throw new BadRequest('Invalid Burger ID')
    }
    fakeDb.burgers.splice(index, 1)
  }
}

export const burgersService = new BurgersService()
