import { Body, Controller, Get, HttpException, Query } from '@nestjs/common';
import { RawService } from './raw.service';
import { QueryUserFeedDTO } from './query-user-feed.dto';

@Controller('raw')
export class RawController {
  constructor(private rawService: RawService) {}

  @Get('ig/user/feed')
  async findIGUserFeed(@Query() queryUserFeedDTO: QueryUserFeedDTO) {
    try {
      return await this.rawService.getIGUserFeed(queryUserFeedDTO);
    } catch (error) {
      throw new HttpException(
        error.response.data.message,
        error.response.status,
      );
    }
  }
}
