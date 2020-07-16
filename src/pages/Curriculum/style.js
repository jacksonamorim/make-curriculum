import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
`;

export const FormName = styled.p`
    font-size: 28px;
    margin-bottom: 10px;
`;

export const CurriculumForms = styled.div`

`;

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const FormGroup = styled.div`
    display: flex;
    width: 400px;
    
    > div:last-child {
        margin-left: 10px;
    }
`;

export const FieldSet = styled.fieldset`
    flex: 1;
    padding: 0 10px 10px 10px;
    border: 1px solid #DDD;
    border-radius: 10px;

    > legend {
        font-size: 28px;
    }
    
    :nth-child(2){
        margin-left: 20px;
    }
    :nth-child(3){
        div {
            width: 490px;
        }
    }

`;