declare module 'ethjs-abi' {
    import { AbiFunction, AbiEvent, Primitive } from 'ethjs-shared';
    export function encodeMethod(abi: AbiFunction, parameters: Array<any>): string;
    export function decodeMethod(abi: AbiFunction, encoded: string): Array<any>;
    export function encodeEvent(abi: AbiEvent, parameters: Array<any>): string;
    export function decodeEvent(abi: AbiEvent, encoded: string): Array<any>;
    export function encodeParams(types: Array<Primitive>, values: Array<any>);
    export function decodeParams(names: Array<string>, types: Array<Primitive>, encoded: string): Array<any>;
    export function decodeParams(types: Array<Primitive>, encoded: string): Array<any>;
}
