import authRepository from "../repositories/auth.repository";
import ApiError from "../utils/ApiError";
import { comparePassword } from "../utils/password";
import { generateAccessToken } from "../utils/jwt";

class AuthService {
  async login(email: string, password: string) {
    const user = await authRepository.findUserByEmail(email);

    if (!user) {
      throw new ApiError(401, "Invalid email or password");
    }

    const isPasswordMatched = await comparePassword(
      password,
      user.password
    );

    if (!isPasswordMatched) {
      throw new ApiError(401, "Invalid email or password");
    }

    const token = generateAccessToken({
      id: user._id.toString(),
      role: user.role,
    });

    return {
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }
}

export default new AuthService();