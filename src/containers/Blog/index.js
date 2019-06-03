import React, { Component } from 'react';
import RootRouter from '../../common/rootRouter.jsx';

import configureStore from '../../common/configureStore';
import reducer from '../../redux/reducers';
import _config from '../../config';
import { Provider } from 'react-redux';




const store = configureStore(reducer);
const { title, titleSuffix } = _config;
document.title = title ? `${title + (titleSuffix ? ` - ${titleSuffix}` : '')}` : document.title;


class Blog extends Component {
  render () {
    return (
      <Provider store={store}>
<RootRouter />
</Provider>
    )
  }
}

export default Blog;