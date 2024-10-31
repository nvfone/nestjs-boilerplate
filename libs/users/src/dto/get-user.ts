import { IsString } from 'class-validator';

export class GetUserDto {
  @IsString()
  uid: string;
}
