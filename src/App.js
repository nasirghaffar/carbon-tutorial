import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import HeaderFile from './components/header';
import LandingPage from './components/content/LandingPage';
import RepoPage from './components/content/RepoPage/RepoPage';
import { Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <>
        <HeaderFile />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
