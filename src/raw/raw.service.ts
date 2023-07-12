import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { QueryUserFeedDTO } from './query-user-feed.dto';
import { catchError, lastValueFrom, map, throwError } from 'rxjs';

@Injectable()
export class RawService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}
  async getIGUserFeed(queryUserFeedDTO: QueryUserFeedDTO) {
    const apiURL =
      this.configService.get('IMAI_API_BASE_URL') + '/raw/ig/user/feed';
    const { url, after } = queryUserFeedDTO;
    try {
      const userFeeds = await lastValueFrom(
        this.httpService
          .get(apiURL, {
            params: {
              url,
              after,
            },
          })
          .pipe(
            map((res) => res.data),
            catchError((err) => {
              return throwError(err);
            }),
          ),
      );
      return userFeeds;
    } catch (error) {
      throw error;
    }
  }
}
