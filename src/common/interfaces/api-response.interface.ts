
import type { APIError } from './api-error.interface';
import type { PaginationMeta } from './pagination.response';

export interface APIPayload<T> {
     data: T;
     pagination?: PaginationMeta;
     filters?: Record<string, unknown> | null;
}

export interface APISuccessResponse<T> {
     code: number;
     success: true;
     message: string;
     payload: APIPayload<T>;
     errors?: never;
}

export interface APIErrorResponse {
     code: number;
     success: false;
     message: string;
     errors: APIError[];
     payload?: never;
}

export type APIResponse<T> =
     | APISuccessResponse<T>
     | APIErrorResponse;
