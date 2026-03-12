import { AppRegistry } from 'react-native';
import App from './App';

// 1. We registered the application using the React Native standard.
AppRegistry.registerComponent('App', () => App);

// 2. We mount it in the DOM (this only runs in the browser)
if (typeof document !== 'undefined') {
  AppRegistry.runApplication('App', {
    initialProps: {},
    rootTag: document.getElementById('root'),
  });
}
