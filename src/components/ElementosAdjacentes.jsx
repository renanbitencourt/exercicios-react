import React from 'react';

export default () =>
    <React.Fragment>
        <h1>Parte 1</h1>
        <h2>Adjacente do Parte 1</h2>
    </React.Fragment>

// Também é possível envolver os elementos em uma div. Ex.:
// export default () =>
//     <div>
//         <h1>Parte 1</h1>
//         <h2>Adjacente do Parte 1</h2>
//     </div>

// Alternativa trabalhando com array:
// export default () => [
//     <h1>Parte 1</h1>,
//     <h2>Adjacente do Parte 1</h2>
// ]