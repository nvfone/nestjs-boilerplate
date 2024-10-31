import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { ShareModule } from '@lib/share';

@Module({
  imports: [ShareModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
