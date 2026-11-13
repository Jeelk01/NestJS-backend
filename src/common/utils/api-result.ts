
import type { APIPayload } from '../interfaces/api-response.interface';
import type { PaginationMeta } from '../interfaces/pagination.response';

export class ApiResult<T> {
     private constructor(
          public readonly payload: APIPayload<T>,
     ) { }

     static data<T>(data: T): ApiResult<T> {
          return new ApiResult({ data });
     }

     static paginated<T>(
          data: T,
          pagination: PaginationMeta,
          filters?: Record<string, unknown> | null,
     ): ApiResult<T> {
          return new ApiResult({
               data,
               pagination,
               filters,
          });
     }
}
