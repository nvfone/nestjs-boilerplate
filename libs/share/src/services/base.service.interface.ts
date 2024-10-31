import { HydratedDocument, UpdateWriteOpResult } from 'mongoose';
import { PaginatedResultType } from '../serializers/paginated-response.serializer';
import { QueryOptions } from '@lib/share/ts/query-options';

export interface Write<T> {
  create(item: Partial<T> | T | any): Promise<T>;

  //bulkInsert(models: Array<T> | any): Promise<Array<T>>;
  updateById(id: string, item: any): Promise<T>;

  updateOne(filter: any, data: any): Promise<UpdateWriteOpResult>;

  updateMany(filter: any, data: any): Promise<UpdateWriteOpResult>;

  //softDelete(id: any): Promise<UpdateWriteOpResult>;
}

export interface Read<T> {
  findOne(query: QueryOptions): Promise<HydratedDocument<T>>;

  findById(id: string): Promise<HydratedDocument<T>>;

  find(query: QueryOptions);

  findWithPagination(
    query: QueryOptions,
  ): Promise<PaginatedResultType<HydratedDocument<T>>>;

  count(query: QueryOptions): Promise<number>;
}

export interface BaseServiceInterface<T> extends Write<T>, Read<T> {}
