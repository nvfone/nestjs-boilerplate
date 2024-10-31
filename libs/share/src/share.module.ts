import { Module } from '@nestjs/common';
import { ShareService } from './share.service';
import { DatabaseModule } from './database/database.module';
import { ConfigurationModule } from './configuration/configuration.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule],
  providers: [ShareService],
  exports: [ShareService],
})
export class ShareModule { }
