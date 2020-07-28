const img = './img/image.svg';

function createStyle(css){
    const head = window.document.querySelector('head');
    const style = `
        <style>
            ${css};
        </style>
    `
    head.insertAdjacentHTML('beforeend',style);
}

const Character = (css,value) => {
    createStyle(css);
    return(
        `<img class = "character" src = "${img}">`
    )
}

const Box = (css,content) => {
    createStyle(css);
    return(
        `<div class = "box"> ${content} </div>`
    )
}

const character = Character`
    .character{
        height: 30vh;
        width: 30vh;
    }
    ${img};
`

const box = Box`
    .box{
        display: flex;
    }
    ${character};
`