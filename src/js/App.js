import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import ChatView from "./views/chatView";
import SettingsView from "./views/settingsView";
import WelcomeView from "./views/welcomeView";
import HomeView from "./views/homeView";
import ChatCreateView from "./views/chatCreateView";

import { listenToAuthChanges } from "./actions/auth";
import StoreProvider from "./store/storeProvider";
import LoadingView from "./components/shared/loadingView";

function AuthRoute({children, ...rest}){
  const user = useSelector(({auth}) => auth.user)
  const onlyChild = React.Children.only(children)

  return (
    <Route
      {...rest}
      render={props =>
      user
        ? React.cloneElement(onlyChild, {...rest, ...props})
        : <Redirect to="/" />
    }/>
  )
}

const ContentWrapper = ({children}) =>  <div className="content-wrapper">{children}</div>

function ChatApp() {
  const dispatch = useDispatch()
  const isFetching = useSelector(({ auth }) => auth.isFetching)

  useEffect(() => {
    dispatch(listenToAuthChanges())
  }, [dispatch]);

  if (isFetching) {
    return <LoadingView/>
  }

  return (
    <Router>
      <ContentWrapper>
        <Switch>
          <Route path="/" exact>
            <WelcomeView />
          </Route>
          <AuthRoute path="/home">
            <HomeView />
          </AuthRoute>
          <AuthRoute path="/chat-create">
            <ChatCreateView />
          </AuthRoute>
          <AuthRoute path="/chat/:id">
            <ChatView />
          </AuthRoute>
          <AuthRoute path="/settings">
            <SettingsView />
          </AuthRoute>
        </Switch>
      </ContentWrapper>
    </Router>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <ChatApp />
    </StoreProvider>
    )
}
