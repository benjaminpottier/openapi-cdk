import { Construct } from "constructs";
import { IApiOperation } from "./operations";

export interface ApiPathBindOptions { }
export interface ApiPathBindConfig { }
export interface IApiPath {
    bind(scope: Construct): ApiPathBindConfig;
}
export interface ApiPathProps {
    path: string;
}

export class ApiPath extends Construct implements IApiPath {
    constructor(scope: Construct, id: string, props: ApiPathProps) {
        super(scope, id);
    }

    bind(scope: Construct): ApiPathBindConfig { 
        return {}
    }
    addOperation(operation: IApiOperation) { 
        operation.bind(this);
    }

}
