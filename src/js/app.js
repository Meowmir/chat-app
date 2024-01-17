import React from "react";
import {Provider} from 'react-redux'

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ConfigureStore from "./store";

import RegisterView from "./views/register.view";
import ChatView from "./views/chat.view";
import SettingsView from "./views/settings.view";
import LoginView from "./views/login.view";
import HomeView from "./views/home.view";

export default function App() {
  const store = ConfigureStore()

  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <Switch>
          <Route path="/login" exact>
            {<LoginView />}
          </Route>
          <Route path="/settings">
            <SettingsView />
          </Route>
          <Route path="/chat/:id">
            {<ChatView />}
          </Route>
          <Route path="/">
            <HomeView />
          </Route>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}
