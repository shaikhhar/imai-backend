import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DictModule } from './dict/dict.module';
import { ConfigModule } from '@nestjs/config';
import { RawModule } from './raw/raw.module';

@Module({
  imports: [ConfigModule.forRoot(), DictModule, RawModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
