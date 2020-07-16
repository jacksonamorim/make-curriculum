import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
`;

export const Dot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-color: #6C66FF;

    > span {
        font-size: 18px;
        font-weight: 700;
        color: #FFFFFF;
    }
`;

export const Line = styled.div`
    flex: 1;
    height: 2px;
    background-color: #6C66FF;
`;