import { BaseRepositoryAbstract } from '@lib/share/database/base.repository.abstract';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from './user.schema';
import { BaseRepositoryInterface } from '@lib/share/database/base.repository.interface';

@Injectable()
export class UsersRepository
  extends BaseRepositoryAbstract<UserModel>
  implements BaseRepositoryInterface<UserModel> {
  constructor(
    @InjectModel(UserModel.name)
    private readonly userModel: Model<UserModel>,
  ) {
    super(userModel);
  }
}
