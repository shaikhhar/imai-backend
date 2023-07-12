import { Module } from '@nestjs/common';
import { DictController } from './dict.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { DictService } from './dict.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule.register({ headers: { authKey: process.env.API_KEY } }),
  ],
  controllers: [DictController],
  providers: [DictService],
})
export class DictModule {}
