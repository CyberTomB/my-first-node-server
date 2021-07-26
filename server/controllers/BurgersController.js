import BaseController from '../utils/BaseController'

export class BurgersController extends BaseController {
   constructor() {
      super('api/burgers')
      this.router
         .get('', this.getAll)
   }
   getAll(req, res, next) {
      try {
         const burgers = burgersService.getAll()
      } catch (error) {
         next(error)
      }
   }
}