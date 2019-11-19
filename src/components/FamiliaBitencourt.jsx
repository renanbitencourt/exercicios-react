import React from 'react';
import Membro from './Membro';

export default props =>
    <div>
        <Membro nome="Renan" sobrenome="Bitencourt"></Membro>
        <Membro nome="Zézin" sobrenome="Bitencourt"></Membro>
        <Membro nome="Teste" sobrenome={props.teste}></Membro>
    </div>