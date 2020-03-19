import * as React from 'react';
import {Store} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Main} from './components/Main';

import '../styles/base.scss';

export interface AppProps {
  store: Store;
}

export class App extends React.PureComponent<AppProps, {}> {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <Route path="/" component={Main} />
        </Router>
      </Provider>
    );
  }
}
