import React from 'react';
import {Container,InputName, Input} from './style';

export default ({name, type}) => {
    return (
        <Container>
            <InputName name={name}>{name}</InputName>
            <Input type={type} placeholder='Digite'/>
        </Container>
    );
}