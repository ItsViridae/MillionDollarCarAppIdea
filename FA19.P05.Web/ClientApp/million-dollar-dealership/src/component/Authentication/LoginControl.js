import React from 'react';

function LoginControl(props) {
    
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <SignedInLinks />;

    }
    return <SignedOutLinks />;
}

export default LoginControl;