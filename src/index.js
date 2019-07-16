import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import registerServiceWorker from './common/registerServiceWorker'
import configureStore from './common/configureStore';
import reducer from './redux/reducers';
import _config from './config';
import { Provider } from 'react-redux';
import './index.scss';

const store = configureStore(reducer);
const { title, titleSuffix } = _config;
document.title = title ? `${title + (titleSuffix ? ` - ${titleSuffix}` : '')}` : document.title;

// class Blog extends Component {
//   render () {
//     return (
//       <Provider store={store}>
//         <RootRouter />
//       </Provider>
//     );
//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
if (_config.isUseServiceWorker) registerServiceWorker()