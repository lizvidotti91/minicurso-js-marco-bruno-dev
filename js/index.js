const root = window.document.querySelector('#root');
const textTitle = 'Dificuldade';
const smallContent = 'Animação usando JavaScript puro';

// Tagged Template String
const title = Title`
    ${textTitle};
    ${smallContent};
    color: purple;
    font-family: monospace;
    margin: 5px;
    text-align: center;
`

root.insertAdjacentHTML('beforeend',title);