import { setupWorker } from 'msw/browser';
import { authHandlers } from './handlers/auth';
import { adminHandlers } from './handlers/admin';
import { analyticsHandlers } from './handlers/analytics';

export const worker = setupWorker(...authHandlers, ...adminHandlers, ...analyticsHandlers);