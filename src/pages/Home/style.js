import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: inherit;
    margin-top: 50px;
`;

export const HomeInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    height: 400px;
    font-size: 28px;
    font-weight: 500;
    color: #3e3e3e;    

    > a {
        padding: 5px 10px;
        font-size: 20px;
        text-align: center;
        text-decoration: none;
        color: #FFFFFF;
        background-color: #6C63FF;
        border: 0;
        border-radius: 10px;
    }
`;

export const HomeImg = styled.img`
    flex: 1;
    height: 400px;
`;


