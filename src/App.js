import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/characters" component={CharacterList}/>
        <Route path="/characters/:id" component={CharacterDetail}/>
        <Route path="*" render={() => <Redirect to="/characters"/>}/>
      </Switch>
    </div>
  );
};

export default App;
