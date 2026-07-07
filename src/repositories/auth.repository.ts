import User from "../models/user.model";
import { IUser } from "../interfaces/user.interface";

class AuthRepository {
  async findUserByEmail(email: string) {
    return await User.findOne({ email }).select("+password");
  }

  async findUserById(id: string) {
    return await User.findById(id);
  }

  async createUser(userData: IUser) {
    return await User.create(userData);
  }
}

export default new AuthRepository();