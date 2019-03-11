import User from '../models/User';
import { ResponseError, ResponseSuccess } from '../helpers/Responses';

class UserController {
  static async getUsers(req, res){
    let users = [];
    try{
      users = await User.find();
    } catch(error){
      return res.status(400).json(ResponseError(400,err,'Could not fetch users'))
    }
    return return res.status(200).json(ResponseSuccess(200,users,'No users found'))
  }
}


export default UserController;
