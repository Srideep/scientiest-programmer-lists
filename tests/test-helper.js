import Application from 'scientist-programmer-lists/app';
import config from 'scientist-programmer-lists/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
