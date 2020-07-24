const root = window.document.querySelector('#root');
const textTitle = 'Dificuldade';
const smallContent = 'Animação usando JavaScript puro';

// Tagged Template String
const title = Title`
    ${textTitle};
    ${smallContent};
    color: #FDFDFF;
    font-family: 'Major Mono Display', monospace;
    font-size: 1.3rem;
    letter-spacing: 2.5px;
`

root.insertAdjacentHTML('beforeend',title);