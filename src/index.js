import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import registerServiceWorker from './common/registerServiceWorker';
import configureStore from './common/configureStore';
import reducer from './redux/reducers';
import RootRouter from './common/rootRouter';
import _config from './config';

const store = configureStore(reducer);
const { title, titleSuffix } = _config;
document.title = title ? `${title + (titleSuffix ? ` - ${titleSuffix}` : '')}` : document.title;

ReactDOM.render(
<HashRouter>
  <App />
</HashRouter>, 
document.getElementById('root')
);


// ReactDOM.render(
//   <Provider store={store}>
//     <RootRouter />
//   </Provider>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
if (_config.isUseServiceWorker) registerServiceWorker()

