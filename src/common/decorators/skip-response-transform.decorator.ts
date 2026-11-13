
import { SetMetadata } from '@nestjs/common';

export const SKIP_RESPONSE_TRANSFORM_KEY =
     'skip_response_transform';

export const SkipResponseTransform = () =>
     SetMetadata(SKIP_RESPONSE_TRANSFORM_KEY, true);
