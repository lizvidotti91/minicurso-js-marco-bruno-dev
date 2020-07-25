const img = './img/image.svg'; 

function Character(css,value){
    return `
        <img src = "${img}" style = "${css}">
    `
}

const character = Character`
    ${img};
    height: 30vh;
    width: 30vh;
`

function Box(css,children){
    return `
        <div class = "${css}">
            ${children};
        </div>
    `
}

const box = Box`
    ${character + character + character};
    display: flex;
`