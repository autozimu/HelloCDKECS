#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { HelloCdkecsStack } from '../lib/hello_cdkecs-stack';

const app = new cdk.App();
new HelloCdkecsStack(app, 'HelloCdkecsStack');
