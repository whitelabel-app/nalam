import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import initApp from '../../redux/actions/init-app';
import AuthLoading from '../Loading';

function InitApp(props) {
    useEffect(() => {
        props.initApp(props.navigation);
    }, [props]);

    return <AuthLoading title="Initializing App" />;
}

const stateToProps = () => {
    return {};
};

const dispatchToProps = dispatch => {
    return bindActionCreators(
        {
            initApp,
        },
        dispatch,
    );
};

export default connect(stateToProps, dispatchToProps)(InitApp);
