import React from 'react';
import ReactDOM from 'react-dom';
import PrimeiroComponente from './components/PrimeiroComponente';
import { CompA, CompB } from './components/DoisComponentes';
import ElementosAdjacentes from './components/ElementosAdjacentes';
import FamiliaBitencourt from './components/FamiliaBitencourt';
import Familia from './components/Familia';
import Membro from './components/Membro';
import ComponenteComFuncao from './components/ComponenteComFuncao';
import Pai from './components/Pai';
import ComponenteClasse from './components/ComponenteClasse';
import Contador from './components/Contador';
import Hooks from './components/Hooks';

const elemento = document.getElementById('root');
ReactDOM.render(
    <div>
        <PrimeiroComponente valor="Bom dia!"></PrimeiroComponente>
        <CompA valor="Componente A!"></CompA>
        <CompB valor="Componente B!"></CompB>
        <ElementosAdjacentes></ElementosAdjacentes>
        <FamiliaBitencourt teste="Sobrenome Teste"></FamiliaBitencourt>
        <Familia sobrenome="Ribeiro">
            <Membro nome="Maria"></Membro>
            <Membro nome="Maylson"></Membro>
        </Familia>
        <ComponenteComFuncao></ComponenteComFuncao>
        <Pai></Pai>
        <ComponenteClasse valor="Classe: Valor passado por props"></ComponenteClasse>
        <ComponenteClasse></ComponenteClasse>
        <Contador numeroInicial={100}></Contador>
        <Hooks></Hooks>
    </div>
, elemento);