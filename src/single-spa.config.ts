import { registerApplication, start } from 'single-spa';

registerApplication(
  'comments-app',
  () => import('./lifecycle'),
  (location) => {
    // We need to show the app on all pages as long as container is present
    return true;
  }
);

start();
