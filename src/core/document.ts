import { Construct } from "constructs";


export interface ApiDocumentProps {}

export class ApiDocument extends Construct {
    constructor(scope: Construct, id: string, props: ApiDocumentProps) {
        super(scope, id);
    }
}