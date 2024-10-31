import { Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from '@lib/share/services/base.service.abstract';
import { UserModel } from './user.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersDataService extends BaseServiceAbstract<UserModel> {
  constructor(private usersRepository: UsersRepository) {
    super(usersRepository);
  }
}
