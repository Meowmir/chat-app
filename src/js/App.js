import React, { useEffect } from "react";
import { Provider } from "react-redux";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ConfigureStore from "./store";

import ChatView from "./views/chatView";
import SettingsView from "./views/settingsView";
import WelcomeView from "./views/welcomeView";
import HomeView from "./views/homeView";
import { listenToAuthChanges } from "./actions/auth";

const store = ConfigureStore()

export default function App() {

  useEffect(() => {
    store.dispatch(listenToAuthChanges())
  }, []);

  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <Switch>
          <Route path="/" exact>
            <WelcomeView />
          </Route>
          <Route path="/settings">
            <SettingsView />
          </Route>
          <Route path="/chat/:id">
            <ChatView />
          </Route>
          <Route path="/home">
            <HomeView />
          </Route>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}
