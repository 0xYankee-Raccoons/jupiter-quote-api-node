/* tslint:disable */
/* eslint-disable */
/**
 * Jupiter API v6
 * The core of [jup.ag](https://jup.ag). Easily get a quote and swap through Jupiter API.  ### Rate Limit We update our rate limit from time to time depending on the load of our servers. We recommend running your own instance of the API if you want to have high rate limit, here to learn how to run the [self-hosted API](https://station.jup.ag/docs/apis/self-hosted).  ### API Wrapper - Typescript [@jup-ag/api](https://github.com/jup-ag/jupiter-quote-api-node)  ### Data types - Public keys are base58 encoded strings - raw data such as Vec<u8\\> are base64 encoded strings 
 *
 * The version of the OpenAPI document: 6.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SwapResponseDynamicSlippageReport } from './SwapResponseDynamicSlippageReport';
import {
    SwapResponseDynamicSlippageReportFromJSON,
    SwapResponseDynamicSlippageReportFromJSONTyped,
    SwapResponseDynamicSlippageReportToJSON,
} from './SwapResponseDynamicSlippageReport';

/**
 * 
 * @export
 * @interface SwapResponse
 */
export interface SwapResponse {
    /**
     * 
     * @type {string}
     * @memberof SwapResponse
     */
    swapTransaction: string;
    /**
     * 
     * @type {number}
     * @memberof SwapResponse
     */
    lastValidBlockHeight: number;
    /**
     * 
     * @type {number}
     * @memberof SwapResponse
     */
    prioritizationFeeLamports?: number;
    /**
     * 
     * @type {SwapResponseDynamicSlippageReport}
     * @memberof SwapResponse
     */
    dynamicSlippageReport?: SwapResponseDynamicSlippageReport;
}

/**
 * Check if a given object implements the SwapResponse interface.
 */
export function instanceOfSwapResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "swapTransaction" in value;
    isInstance = isInstance && "lastValidBlockHeight" in value;

    return isInstance;
}

export function SwapResponseFromJSON(json: any): SwapResponse {
    return SwapResponseFromJSONTyped(json, false);
}

export function SwapResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SwapResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'swapTransaction': json['swapTransaction'],
        'lastValidBlockHeight': json['lastValidBlockHeight'],
        'prioritizationFeeLamports': !exists(json, 'prioritizationFeeLamports') ? undefined : json['prioritizationFeeLamports'],
        'dynamicSlippageReport': !exists(json, 'dynamicSlippageReport') ? undefined : SwapResponseDynamicSlippageReportFromJSON(json['dynamicSlippageReport']),
    };
}

export function SwapResponseToJSON(value?: SwapResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'swapTransaction': value.swapTransaction,
        'lastValidBlockHeight': value.lastValidBlockHeight,
        'prioritizationFeeLamports': value.prioritizationFeeLamports,
        'dynamicSlippageReport': SwapResponseDynamicSlippageReportToJSON(value.dynamicSlippageReport),
    };
}

