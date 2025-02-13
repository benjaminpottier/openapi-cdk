import { Construct } from "constructs";

export interface SchemaCompontentProps {}

export class SchemaCompontent extends Construct {
    constructor(scope: Construct, id: string, props: SchemaCompontentProps) {
        super(scope, id);
    }
}