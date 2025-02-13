import { Construct, IConstruct } from "constructs";

export class App extends Construct {
    constructor() {
        super(undefined as any, '');
    }
    public static of(c: IConstruct): App {
        const scope = c.node.scope;
        if (!scope) {
            return c as App;
        }
        return App.of(scope);
    }
    public synth(): void {}
}
