import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import withRedux from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import reducer from '../reducers';

const NodeBird = ({ Component, store }) => {
    return (
        <Provider store={store}>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.3/antd.css"></link>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.3/antd.js"></script>
            </Head>
            <AppLayout>
                <Component/>
            </AppLayout>
        </Provider>
    );
};

NodeBird.protoTypes = {
    Component: PropTypes.elementType,
    store: PropTypes.object
};

export default withRedux((initialState, options) => {
    const middlewares = [];
    const enhancer = compose(applyMiddleware(...middlewares),
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    );
    const store = createStore(reducer, initialState, enhancer);
    return store;
})(NodeBird);