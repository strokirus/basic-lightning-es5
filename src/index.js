import 'core-js';

import { Launch } from '@lightningjs/sdk'

import App from './App.js'

export default function() {
  return Launch(App, ...arguments)
}
