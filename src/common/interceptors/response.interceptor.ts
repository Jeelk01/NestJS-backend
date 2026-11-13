
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

import { Reflector } from '@nestjs/core';
import { Observable, map } from 'rxjs';

import { APISuccessResponse } from '../interfaces/api-response.interface';
import { ApiResult } from '../utils/api-result';

import {
  RESPONSE_MESSAGE_KEY,
} from '../decorators/response-message.decorator';

import {
  SKIP_RESPONSE_TRANSFORM_KEY,
} from '../decorators/skip-response-transform.decorator';

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, APISuccessResponse<T> | T>
{
  constructor(private readonly reflector: Reflector) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<APISuccessResponse<T> | T> {

    const skipTransform = this.reflector.getAllAndOverride<boolean>(
      SKIP_RESPONSE_TRANSFORM_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (skipTransform) {
      return next.handle();
    }

    const response = context.switchToHttp().getResponse<{
      statusCode: number;
    }>();

    const message =
      this.reflector.getAllAndOverride<string>(
        RESPONSE_MESSAGE_KEY,
        [context.getHandler(), context.getClass()],
      ) ?? 'Request successful';

    return next.handle().pipe(
      map((result) => {
        if (response.statusCode === 204) {
          return result;
        }

        const payload =
          result instanceof ApiResult
            ? result.payload
            : { data: result };

        return {
          code: response.statusCode,
          success: true,
          message,
          payload,
        };
      }),
    );
  }
}

