import configureStore from "../store";
import { Provider } from "react-redux";
import React from "react";

const store = configureStore()

export default function StoreProvider({children}) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
