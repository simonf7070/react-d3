import React from 'react';
import { string } from 'prop-types';

const Hello = ({ greeting, name }) => 
    <React.Fragment>
        {greeting} {name}
    </React.Fragment>;

Hello.defaultProps = {
    greeting: 'Hello'
}

Hello.propTypes = {
    greeting: string,
    name: string
}

export default Hello;