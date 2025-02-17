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
import type { QuoteResponse } from './QuoteResponse';
import {
    QuoteResponseFromJSON,
    QuoteResponseFromJSONTyped,
    QuoteResponseToJSON,
} from './QuoteResponse';
import type { SwapRequestComputeUnitPriceMicroLamports } from './SwapRequestComputeUnitPriceMicroLamports';
import {
    SwapRequestComputeUnitPriceMicroLamportsFromJSON,
    SwapRequestComputeUnitPriceMicroLamportsFromJSONTyped,
    SwapRequestComputeUnitPriceMicroLamportsToJSON,
} from './SwapRequestComputeUnitPriceMicroLamports';
import type { SwapRequestPrioritizationFeeLamports } from './SwapRequestPrioritizationFeeLamports';
import {
    SwapRequestPrioritizationFeeLamportsFromJSON,
    SwapRequestPrioritizationFeeLamportsFromJSONTyped,
    SwapRequestPrioritizationFeeLamportsToJSON,
} from './SwapRequestPrioritizationFeeLamports';

/**
 * 
 * @export
 * @interface SwapRequest
 */
export interface SwapRequest {
    /**
     * The user public key.
     * @type {string}
     * @memberof SwapRequest
     */
    userPublicKey: string;
    /**
     * Allow a custom payer to pay for the transaction.
     * @type {string}
     * @memberof SwapRequest
     */
    payer?: string;
    /**
     * Default is true. If true, will automatically wrap/unwrap SOL. If false, it will use wSOL token account.  Will be ignored if `destinationTokenAccount` is set because the `destinationTokenAccount` may belong to a different user that we have no authority to close.
     * @type {boolean}
     * @memberof SwapRequest
     */
    wrapAndUnwrapSol?: boolean;
    /**
     * Default is true. This enables the usage of shared program accountns. That means no intermediate token accounts or open orders accounts need to be created for the users. But it also means that the likelihood of hot accounts is higher.
     * @type {boolean}
     * @memberof SwapRequest
     */
    useSharedAccounts?: boolean;
    /**
     * Fee token account, same as the output token for ExactIn and as the input token for ExactOut, it is derived using the seeds = ["referral_ata", referral_account, mint] and the `REFER4ZgmyYx9c6He5XfaTMiGfdLwRnkV4RPp9t9iF3` referral contract (only pass in if you set a feeBps and make sure that the feeAccount has been created).
     * @type {string}
     * @memberof SwapRequest
     */
    feeAccount?: string;
    /**
     * 
     * @type {SwapRequestComputeUnitPriceMicroLamports}
     * @memberof SwapRequest
     */
    computeUnitPriceMicroLamports?: SwapRequestComputeUnitPriceMicroLamports;
    /**
     * 
     * @type {SwapRequestPrioritizationFeeLamports}
     * @memberof SwapRequest
     */
    prioritizationFeeLamports?: SwapRequestPrioritizationFeeLamports;
    /**
     * Default is false. Request a legacy transaction rather than the default versioned transaction, needs to be paired with a quote using asLegacyTransaction otherwise the transaction might be too large.
     * @type {boolean}
     * @memberof SwapRequest
     */
    asLegacyTransaction?: boolean;
    /**
     * Default is false. This is useful when the instruction before the swap has a transfer that increases the input token amount. Then, the swap will just use the difference between the token ledger token amount and post token amount.
     * @type {boolean}
     * @memberof SwapRequest
     */
    destinationTokenAccount?: string;
    /**
     * When enabled, it will do a swap simulation to get the compute unit used and set it in ComputeBudget's compute unit limit. This will increase latency slightly since there will be one extra RPC call to simulate this. Default is `false`.
     * @type {boolean}
     * @memberof SwapRequest
     */
    dynamicComputeUnitLimit?: boolean;
    /**
     * When enabled, it will not do any rpc calls check on user's accounts. Enable it only when you already setup all the accounts needed for the trasaction, like wrapping or unwrapping sol, destination account is already created.
     * @type {boolean}
     * @memberof SwapRequest
     */
    skipUserAccountsRpcCalls?: boolean;
    /**
     * The program authority id [0;7], load balanced across the available set by default
     * @type {number}
     * @memberof SwapRequest
     */
    programAuthorityId?: number;
    /**
     * Default is false. Enabling it would reduce use an optimized way to open WSOL that reduce compute unit.
     * @type {boolean}
     * @memberof SwapRequest
     */
    allowOptimizedWrappedSolTokenAccount?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SwapRequest
     */
    dynamicSlippage?: boolean;
    /**
     * Optional. When passed in, Swap object will be returned with your desired slots to epxiry.
     * @type {number}
     * @memberof SwapRequest
     */
    blockhashSlotsToExpiry?: number;
    /**
     * Optional. Default to false. Request Swap object to be returned with the correct blockhash prior to Agave 2.0.
     * @type {boolean}
     * @memberof SwapRequest
     */
    correctLastValidBlockHeight?: boolean;
    /**
     * Optional. Default to false. Add consensus account to (hopefully) prevent MEV attacks
     * @type {boolean}
     * @memberof SwapRequest
     */
    addConsensusAccount?: boolean;
    /**
     * 
     * @type {QuoteResponse}
     * @memberof SwapRequest
     */
    quoteResponse: QuoteResponse;
}

/**
 * Check if a given object implements the SwapRequest interface.
 */
export function instanceOfSwapRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userPublicKey" in value;
    isInstance = isInstance && "quoteResponse" in value;

    return isInstance;
}

export function SwapRequestFromJSON(json: any): SwapRequest {
    return SwapRequestFromJSONTyped(json, false);
}

export function SwapRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SwapRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userPublicKey': json['userPublicKey'],
        'payer': !exists(json, 'payer') ? undefined : json['payer'],
        'wrapAndUnwrapSol': !exists(json, 'wrapAndUnwrapSol') ? undefined : json['wrapAndUnwrapSol'],
        'useSharedAccounts': !exists(json, 'useSharedAccounts') ? undefined : json['useSharedAccounts'],
        'feeAccount': !exists(json, 'feeAccount') ? undefined : json['feeAccount'],
        'computeUnitPriceMicroLamports': !exists(json, 'computeUnitPriceMicroLamports') ? undefined : SwapRequestComputeUnitPriceMicroLamportsFromJSON(json['computeUnitPriceMicroLamports']),
        'prioritizationFeeLamports': !exists(json, 'prioritizationFeeLamports') ? undefined : SwapRequestPrioritizationFeeLamportsFromJSON(json['prioritizationFeeLamports']),
        'asLegacyTransaction': !exists(json, 'asLegacyTransaction') ? undefined : json['asLegacyTransaction'],
        'destinationTokenAccount': !exists(json, 'destinationTokenAccount') ? undefined : json['destinationTokenAccount'],
        'dynamicComputeUnitLimit': !exists(json, 'dynamicComputeUnitLimit') ? undefined : json['dynamicComputeUnitLimit'],
        'skipUserAccountsRpcCalls': !exists(json, 'skipUserAccountsRpcCalls') ? undefined : json['skipUserAccountsRpcCalls'],
        'programAuthorityId': !exists(json, 'programAuthorityId') ? undefined : json['programAuthorityId'],
        'allowOptimizedWrappedSolTokenAccount': !exists(json, 'allowOptimizedWrappedSolTokenAccount') ? undefined : json['allowOptimizedWrappedSolTokenAccount'],
        'dynamicSlippage': !exists(json, 'dynamicSlippage') ? undefined : json['dynamicSlippage'],
        'blockhashSlotsToExpiry': !exists(json, 'blockhashSlotsToExpiry') ? undefined : json['blockhashSlotsToExpiry'],
        'correctLastValidBlockHeight': !exists(json, 'correctLastValidBlockHeight') ? undefined : json['correctLastValidBlockHeight'],
        'addConsensusAccount': !exists(json, 'addConsensusAccount') ? undefined : json['addConsensusAccount'],
        'quoteResponse': QuoteResponseFromJSON(json['quoteResponse']),
    };
}

export function SwapRequestToJSON(value?: SwapRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userPublicKey': value.userPublicKey,
        'payer': value.payer,
        'wrapAndUnwrapSol': value.wrapAndUnwrapSol,
        'useSharedAccounts': value.useSharedAccounts,
        'feeAccount': value.feeAccount,
        'computeUnitPriceMicroLamports': SwapRequestComputeUnitPriceMicroLamportsToJSON(value.computeUnitPriceMicroLamports),
        'prioritizationFeeLamports': SwapRequestPrioritizationFeeLamportsToJSON(value.prioritizationFeeLamports),
        'asLegacyTransaction': value.asLegacyTransaction,
        'destinationTokenAccount': value.destinationTokenAccount,
        'dynamicComputeUnitLimit': value.dynamicComputeUnitLimit,
        'skipUserAccountsRpcCalls': value.skipUserAccountsRpcCalls,
        'programAuthorityId': value.programAuthorityId,
        'allowOptimizedWrappedSolTokenAccount': value.allowOptimizedWrappedSolTokenAccount,
        'dynamicSlippage': value.dynamicSlippage,
        'blockhashSlotsToExpiry': value.blockhashSlotsToExpiry,
        'correctLastValidBlockHeight': value.correctLastValidBlockHeight,
        'addConsensusAccount': value.addConsensusAccount,
        'quoteResponse': QuoteResponseToJSON(value.quoteResponse),
    };
}

