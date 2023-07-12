import { Module } from '@nestjs/common';
import { RawService } from './raw.service';
import { RawController } from './raw.controller';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule.register({ headers: { authKey: process.env.API_KEY } }),
  ],
  providers: [RawService],
  controllers: [RawController],
})
export class RawModule {}
