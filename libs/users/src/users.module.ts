import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from './user.schema';
import { UsersDataService } from './users.service';
import { UsersRepository } from './users.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserModel.name,
        schema: UserSchema,
        collection: 'users',
      },
    ]),
  ],
  providers: [UsersRepository, UsersDataService],
  exports: [UsersDataService],
})
export class UsersModule {}
