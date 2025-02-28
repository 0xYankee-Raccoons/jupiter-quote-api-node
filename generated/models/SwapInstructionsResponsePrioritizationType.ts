/* tslint:disable */
/* eslint-disable */
/**
 * Swap API
 * The heart and soul of Jupiter lies in the Quote and Swap API.  ### API Rate Limit Since 1 December 2024, we have updated our API structure. Please refer to [Station](https://station.jup.ag/docs/) for further details on usage and rate limits.  ### API Usage - API Wrapper Typescript [@jup-ag/api](https://github.com/jup-ag/jupiter-quote-api-node)  ### Data Types To Note - Public keys are base58 encoded strings - Raw data such as Vec<u8\\> are base64 encoded strings 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * The type of prioritization used for the swap, either Jito or ComputeBudget.
 * @export
 * @interface SwapInstructionsResponsePrioritizationType
 */
export interface SwapInstructionsResponsePrioritizationType {
    /**
     * 
     * @type {object}
     * @memberof SwapInstructionsResponsePrioritizationType
     */
    jito?: object;
}

/**
 * Check if a given object implements the SwapInstructionsResponsePrioritizationType interface.
 */
export function instanceOfSwapInstructionsResponsePrioritizationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SwapInstructionsResponsePrioritizationTypeFromJSON(json: any): SwapInstructionsResponsePrioritizationType {
    return SwapInstructionsResponsePrioritizationTypeFromJSONTyped(json, false);
}

export function SwapInstructionsResponsePrioritizationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SwapInstructionsResponsePrioritizationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'jito': !exists(json, 'jito') ? undefined : json['jito'],
    };
}

export function SwapInstructionsResponsePrioritizationTypeToJSON(value?: SwapInstructionsResponsePrioritizationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'jito': value.jito,
    };
}

