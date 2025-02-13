import { Construct } from "constructs";
import {IApiPath } from "./path";

export interface ApiOperationProps { }
export interface ApiOperationBindOptions { }
export interface ApiOperationBindConfig { }
export interface IApiOperation {
    bind(scope: IApiPath): void;
}

export class ApiOperation extends Construct implements IApiOperation {
    constructor(scope: Construct, id: string, props: ApiOperationProps) {
        super(scope, id);
    }

    bind(path: IApiPath) {
        path.bind(this);
    }

}