import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import PropTypes from 'prop-types';

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.3/antd.css"></link>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.20.3/antd.js"></script>
            </Head>
            <AppLayout>
                <Component/>
            </AppLayout>
        </>
    );
};

NodeBird.protoTypes = {
    Component: PropTypes.elementType
}
export default NodeBird;