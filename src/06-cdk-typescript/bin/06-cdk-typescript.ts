#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkTypescriptStack } from '../lib/06-cdk-typescript-stack';

const app = new cdk.App();
new CdkTypescriptStack(app, 'CdkTypescriptStack');
