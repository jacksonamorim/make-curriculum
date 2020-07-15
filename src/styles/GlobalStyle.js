import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
   
    height: 100%;
    width: 100%;
}
`;