const style = `
    <style>
        *{
            border: none;
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
        }

        .icon{
            background-color: #326911;
            border-radius: 50%;
            height: 8rem;
            width: 10rem;
        }

        .eyes{
            align-items: center;
            display: flex;
            justify-content: space-around;
        }

        .eye{
            background-color: white;
            border-radius: 50%;
            height: 5rem;
            position: relative;
            width: 5rem;
        }

        .eye::after{
            background-color: black;
            border-radius: 50%;
            content: '';
            height: 2rem;
            left: 1.5rem;
            position: absolute;
            top: 1.8rem;
            width: 2rem;
        }
    </style>
`

const head = window.document.querySelector('head');
head.insertAdjacentHTML('beforeend',style);