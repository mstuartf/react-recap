import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"/>
        <Route exact path="/characters" component={CharacterList}/>
        <Route path="/characters/:id" component={CharacterDetail}/>
      </Switch>
    </div>
  );
};

export default App;
