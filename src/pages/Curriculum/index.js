import React from 'react';

import {
    Container,
    CurriculumForms,
    Form,
    FormGroup,
    FieldSet
} from './style';

import ProgressBar from '../../components/ProgressBar';
import Input from '../../components/Input';

export default () => {
    return(
        <Container>
            <ProgressBar/>
            <CurriculumForms>
                <Form>
                    <FieldSet>
                        <legend>Informações Básicas</legend>
                        <Input name="Nome"/>
                        <Input name="Nacionalidade"/>
                        <FormGroup>
                            <Input name="Estado Civil"/>
                            <Input name="Idade" type="number"/>
                        </FormGroup>
                    </FieldSet>
                    <FieldSet>
                        <legend>Endereço</legend>
                        <FormGroup>
                            <Input name="Estado"/>
                            <Input name="Cidade"/>
                        </FormGroup>
                        <FormGroup>
                            <Input name="Logadouro"/>
                            <Input name="Número" type="number"/>
                        </FormGroup>
                        <Input name="Bairro"/>  
                    </FieldSet>
                    <FieldSet>
                        <legend>Contato</legend>
                        <FormGroup>
                            <Input name="Telefone"/>
                            <Input name="Email" type="email"/>
                        </FormGroup>
                    </FieldSet>
                </Form>
            </CurriculumForms>
        </Container>
    );
}