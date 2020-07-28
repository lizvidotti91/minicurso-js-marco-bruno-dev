const states = [true, false, false];

function showItems(stateItems){
    const item = (pos) => Item`
        .item{
            background-color: #DD99BB;
            border-radius: 50%;
            cursor: pointer;
            height: 2rem;
            transition: transform 1s linear;
            width: 2rem;
        }
        ${`pos-${pos}`};
    `

    const itemActive = (pos) => Item`
        .item.active{
            height: 5rem;
            width: 5rem;
        }
        ${`active pos-${pos}`};
    `

    const items = stateItems.map((state,index) =>{
        if(state){
            return itemActive(index + 1);
        }
        return item(index + 1);
    })

    return items.join('');
}

function clearAction(action){
    action.classList.remove('second');
    action.classList.remove('third');
}

function handleClick(event){
    const {target} = event;
    const allItems = window.document.querySelectorAll('.item');
    const action = window.document.querySelector('.action');

    allItems.forEach(item => item.classList.remove('active'));
    target.classList.add('active');

    clearAction(action)
    if(target.classList.contains('pos-1')){
        window.document.querySelector('div.box').innerHTML = character;
        window.document.querySelector('p.level').innerHTML = 'Easy';
    }

    if(target.classList.contains('pos-2')){
        action.classList.add('second');
        window.document.querySelector('div.box').innerHTML = character;
        window.document.querySelector('div.box').innerHTML += character;
        window.document.querySelector('p.level').innerHTML = 'Medium';
    }
    if(target.classList.contains('pos-3')){
        action.classList.add('third');
        window.document.querySelector('div.box').innerHTML = character;
        window.document.querySelector('div.box').innerHTML += character;
        window.document.querySelector('div.box').innerHTML += character;
        window.document.querySelector('p.level').innerHTML = 'Hard';
    }
}

function createStyle(css){
    const head = window.document.querySelector('head');
    const style = `
        <style>
            ${css};
        </style>
    `
    head.insertAdjacentHTML('beforeend',style);
}

const Action = (css) => {
    createStyle(css);
    return (
        `<li class = "action"></li>`
    );
}

const Item = (css, className) => {
    createStyle(css);
    return (
        `<li class = "item ${className}" onclick = "handleClick(event)"></li>
    `);
}

const Slide = (css,content) => (
    `<ul style = "${css}">${content}</ul>`
)

const Content = (css,content) => {
    createStyle(css);
    return (
        `<p class = "level">${content}</p>`
    )
}

const action = Action`
    .action{
        background-color: #78CAD2;
        border-radius: 50%;
        height: 3rem;
        left: 1rem;
        position: absolute;
        transition: transform 0.8s linear;
        width: 3rem;
    }

    .action.second {
        transform: translateX(calc(80vw / 2 - 2.5rem));
    }

    .action.third{
        transform: translateX(calc(80vw - 5rem));
    }
`

const slide = Slide` 
    align-items: center;
    box-sizing: content-box;
    background-color: #DD99BB;
    display: flex;
    height: 0.5rem;
    justify-content: space-between;
    margin-top: 4rem;
    position: relative;
    width: 80vw;
    ${showItems(states) + action};
`

const content = Content`
    .level{
        color: #C6C5B9;
        font-family: 'Major Mono Display', monospace;
        font-size: 1.5rem;
        margin-top: 10vh;
        text-align = center;
    }
    ${'Easy'};
`