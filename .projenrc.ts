import { typescript } from 'projen';
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'openapi-cdk',
  projenrcTs: true,
  deps: [
    'constructs',
    'aws-cdk-lib'
  ],
});
project.synth();