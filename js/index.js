const root = window.document.querySelector('#root');

const textTitle = 'Dificuldade';
const smallContent = 'Mini-curso feliz de JavaScript';

// Tagged Template String
const title = Title`
    ${textTitle};
    ${smallContent};
    color: #C6C5B9;
    font-family: 'Major Mono Display', monospace;
    font-size: 1.3rem;
    letter-spacing: 2.5px;
    margin-bottom: 1rem;
`

root.insertAdjacentHTML('beforeend',title);
root.insertAdjacentHTML('beforeend',box);
root.insertAdjacentHTML('beforeend',slide);