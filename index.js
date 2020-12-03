// single-spa-config.js
import { registerApplication, start } from './single-spa.esm.js';
// Simple usage
registerApplication(
  'app2',
  () => import('/src/app2/main.js'),
  (location) => location.pathname.startsWith('/app2'),
  { some: 'value for app1' }
);

// Config with more expressive API
registerApplication({
  name: 'app1',
  app: () => import('/src/app1/main.js'),
  activeWhen: '/app1',
  customProps: {
    some: 'value for app2',
  }
});

start();