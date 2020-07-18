import { API } from "homebridge";

import { PLATFORM_NAME } from './settings';
import { CallSchedulerPlatform } from './platform';

/**
 * Register the CallScheduler platform with HomeKit
 */
export = (api: API) => {
  api.registerPlatform(PLATFORM_NAME, CallSchedulerPlatform);
}
