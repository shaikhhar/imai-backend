import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Query,
} from '@nestjs/common';
import { DictService } from './dict.service';
import { UserQueryDTO } from './user-query.dto';

@Controller('dict')
export class DictController {
  constructor(private dictService: DictService) {}

  @Get('users')
  async findUsers(@Query() userQueryDTO: UserQueryDTO) {
    try {
      return await this.dictService.findUsers(userQueryDTO);
    } catch (error) {
      throw new HttpException(
        error.response.data.message,
        error.response.status,
      );
    }
  }
}
