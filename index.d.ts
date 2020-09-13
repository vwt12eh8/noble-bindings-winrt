import { EventEmitter } from "events";

declare class NobleWinrt extends EventEmitter {
    public cleanUp(): void;
    public connect(uuid: string): void;
    public disconnect(uuid: string): void;
    public discoverCharacteristics(uuid: string, service: string): void;
    public discoverDescriptors(uuid: string, service: string, characteristic: string): void;
    public discoverIncludedServices(uuid: string, service: string): void;
    public discoverServices(uuid: string, uuids: readonly string[]): void;
    public init(): void;
    public notify(uuid: string, service: string, characteristic: string, on: boolean): void;
    public read(uuid: string, service: string, characteristic: string): void;
    public readHandle(uuid: string, handle: number): void;
    public readValue(uuid: string, service: string, characteristic: string, descriptor: string): void;
    public startScanning(vector: readonly string[], duplicates?: boolean): void;
    public stopScanning(): void;
    public updateRssi(uuid: string): void;
    public write(uuid: string, service: string, characteristic: string, data: Buffer, withoutResponse: boolean): void;
    public writeHandle(uuid: string, handle: number, data: Buffer): void;
    public writeValue(uuid: string, service: string, characteristic: string, descriptor: string, data: Buffer): void;
}

export { NobleWinrt };
