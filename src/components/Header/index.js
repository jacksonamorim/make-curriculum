import React from 'react';
import {Link} from 'react-router-dom';

import {
    Container,
    HeaderItem
} from './style';

export default () => {
    return(
        <Container>
            <HeaderItem><Link to="/">Logo</Link></HeaderItem>
            <HeaderItem>Github</HeaderItem>
        </Container>
    );
}