import React, { Component } from 'react';
import './App.scss';
import { Content, Theme } from '@carbon/react';
import TutorialHeader from './Components/TutorialHeader/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Content/LandingPage';
import RepoPage from './Content/RepoPage';

class App extends Component {
  render() {
    return (
      <>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
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
