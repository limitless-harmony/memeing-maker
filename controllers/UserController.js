import User from '../models/User';
import { ResponseError, ResponseSuccess } from '../helpers/Responses';

/**
 * [UserController description]
 */
class UserController {
  /**
   * [getUsers description]
   * @param  {[type]}  req [description]
   * @param  {[type]}  res [description]
   * @return {Promise}     [description]
   */
  static async getUsers(req, res) {
    let users = [];
    try {
      users = await User.find();
    } catch (error) {
      return res.status(400).json(ResponseError(400, error, 'Could not fetch users'));
    }
    return res.status(200).json(ResponseSuccess(200, users, 'users found'));
  }
}


export default UserController;
