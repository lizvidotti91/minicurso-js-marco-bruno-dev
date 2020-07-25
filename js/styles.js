const style = `
    <style>
        *{
            border: none;
            list-style: none;
            margin: 0;
            padding: 0;
        }

        body{
            background-color: #005C69;
        }

        #root{
            align-items: center;
            display: flex;
            flex-direction: column;
            height: 100vh;
            justify-content: center;
            text-align: center;
            width: 100vw;
        }
    </style>
`

const head = window.document.querySelector('head');
head.insertAdjacentHTML('beforeend',style);