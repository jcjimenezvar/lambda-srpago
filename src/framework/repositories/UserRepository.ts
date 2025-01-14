import { IUserRepository } from "./../../core/interfaces/IUserRepository";
import { inject, injectable } from "tsyringe";
import { IDBHelper } from "../../core/interfaces/IDBHelper";
import { User } from "../../core/types/User";

@injectable()
export class UserRepository implements IUserRepository {
  constructor(@inject("IDBHelper") private dbHelper: IDBHelper) {}

  createUser = async (user: User) => {
    await this.dbHelper.put("User", user);
  };

  updateUser = async (user: User) => {
    await this.dbHelper.put("User", user);
  };
}
