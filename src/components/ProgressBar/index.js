import React from 'react';

import {
    Container,
    Dot,
    Line
} from './style';

export default () => {
    return (
        <Container>
            <Dot>
                <span>1</span>
            </Dot>
            <Line></Line>
            <Dot>
                <span>2</span>
            </Dot>
            <Line></Line>
            <Dot>
                <span>3</span>
            </Dot>
            <Line></Line>
            <Dot>
                <span>4</span>
            </Dot>
            <Line></Line>
            <Dot>
                <span>5</span>
            </Dot>
        </Container>
    );
}