import { fn } from '@storybook/test';

// This export won't exist in Next.js 14 but it's safe because we ignore it in Webpack when applicable
import { draftMode as originalDraftMode } from 'next/dist/server/request/draft-mode';
import * as headers from 'next/dist/server/request/headers';

// re-exports of the actual module
export * from 'next/dist/server/request/headers';

// mock utilities/overrides (as of Next v14.2.0)
export { headers } from './headers';
export { cookies } from './cookies';

// passthrough mocks - keep original implementation but allow for spying
const draftMode = fn(originalDraftMode ?? (headers as any).draftMode).mockName('draftMode');
export { draftMode };
