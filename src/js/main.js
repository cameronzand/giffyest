import angular from 'angular';

import { GifController } from './controllers/gif';

angular
  .module('app', [])
  .controller('GifController', GifController);
