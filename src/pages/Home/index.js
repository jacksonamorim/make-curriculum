import React from 'react';
import {Link} from 'react-router-dom';

import {
    Container,
    HomeInfo,
    HomeImg
} from './style';

export default () => {
    return(
        <Container>
            <HomeInfo>
                <p>
                    O currículo serve para descrever a 
                    sua trajetória, seus estudos e 
                    conhecimentos, e todos os dados 
                    que ajudam a entender sua 
                    experiência profissional. 
                </p>
                <Link to="/make-curriculum">Make Curriculum</Link>
            </HomeInfo>
            <HomeImg src="./assets/profile-detail.svg"/>
        </Container>
    );
}