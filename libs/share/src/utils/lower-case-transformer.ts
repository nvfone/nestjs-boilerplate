import { TransformFnParams } from 'class-transformer';
import { Maybe } from '@lib/share/ts/maybe';

export const lowerCaseTransformer = (
  params: TransformFnParams,
): Maybe<string> => params.value?.toLowerCase().trim();
