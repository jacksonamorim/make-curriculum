import styled from 'styled-components'

export const Container = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-weight: 500;
    background-color: #6C63FF;
    color: #FFFFFF;
`;

export const HeaderItem = styled.a`
    font-size: 24px;
    text-transform: uppercase;
    cursor: pointer;
    
    > a {
        text-decoration: none;
        color: #FFFFFF;
    }

    :last-child{
        font-size: 16px;
        color: #E2E2E2;

        &:hover {
            color: #FFFFFF;
        }
    }
`;