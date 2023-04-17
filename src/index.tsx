import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/store/store";
import { persistor } from "@/store/store";
import {PersistGate} from 'redux-persist/lib/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
    <Router>
      <App/>
    </Router>
    </PersistGate>

  </Provider>
);

reportWebVitals();
