import { App } from "./core/app";
import { ApiDocument } from "./core/document";
import { ApiOperation } from "./core/operations";
import { ApiPath } from "./core/path";

const app = new App();
const document = new ApiDocument(app, 'MyDocument', {});

const petPath = new ApiPath(document, 'Pet', {
    path: '/pet'
});

const getPet = new ApiOperation(document, 'GetPet', {});
petPath.addOperation(getPet);