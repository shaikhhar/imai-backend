import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { catchError, lastValueFrom, map, of, throwError } from 'rxjs';
import { UserQueryDTO } from './user-query.dto';

@Injectable()
export class DictService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}
  async findUsers(userQueryDTO: UserQueryDTO) {
    try {
      const url = this.configService.get('IMAI_API_BASE_URL') + '/dict/users';
      const { q, type, limit, platform } = userQueryDTO;
      const users = await // eslint-disable-next-line prettier/prettier
      this.httpService
        .get(url, {
          params: {
            q,
            type,
            limit,
            platform,
          },
        })
        .pipe(
          map((res) => res.data),
          catchError((err) => {
            return throwError(err);
          }),
        )
        .toPromise();
      return users;
    } catch (error) {
      throw error;
    }
  }
}
