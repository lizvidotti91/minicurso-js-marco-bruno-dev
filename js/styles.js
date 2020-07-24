const style = `
    <style>
        *{
            background-color: #005C69;
            border: none;
            margin: 0;
            padding: 0;
        }

        #root{
            align-items: center;
            display: flex;
            flex-direction: column;
            height: 100vh;
            justify-content: center;
        }
    </style>
`
const head = window.document.querySelector('head');
head.insertAdjacentHTML('beforeend',style);