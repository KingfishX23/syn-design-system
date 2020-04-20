import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//REDUX
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import rootReducers from "./rootReducers";
//FIREBASE CONFIG
import firebaseConfig from "./services/Firebase";
import * as serviceWorker from './serviceWorker';

console.warn = console.error = () => { };

const createStoreWithFirebase = compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig, {
        useFirestoreForProfile: true,
        userProfile: "users",
        attachAuthIsReady: true
    })
)(createStore)

const store = createStoreWithFirebase(rootReducers);

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    );
});

process.env.NODE_ENV === 'production' ? serviceWorker.register() : serviceWorker.unregister();

setTimeout(() => {
    let viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute(
        "content",
        `height=${window.innerHeight}, width=${window.innerWidth}, initial-scale=1.0`
    );
}, 200);

