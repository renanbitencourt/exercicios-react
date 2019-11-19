import React from 'react';

export default () => {
    const nomes = ['Joaquina', 'Silvaldês', 'Prozélito'];
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>);
    };

    return (
        <ul>
            {gerarItens(nomes)}
        </ul>
    );
}