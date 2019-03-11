import UserController from '../controllers/UserController';

export default (app) => {
  //TODO: FLESH THIS OUT
  app.get('/user', UserController.getUsers);
};
