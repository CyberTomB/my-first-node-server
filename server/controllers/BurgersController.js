import BaseController from '../utils/BaseController'
import { burgersService } from '../services/BurgersService'

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
  }

  getAll(req, res, next) {
    try {
      const burgers = burgersService.getAll()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  getById(req, res, next) {
    try {
      const burger = burgersService.getById(req.params.id)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  create(req, res, next) {
    try {
      const burger = burgersService.create(req.body)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }
}
