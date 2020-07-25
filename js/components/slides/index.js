const item = Item`
    background-color: #DD99BB;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
`

function Item(css,content = ''){
    return `
        <li style = "${css}">${content}</li>
    `
}

const slide = Slide`
    ${item};
    align-items: center;
    background-color: #DD99BB;
    border-radius: 0.5rem;
    display: flex;
    height: 0.5rem;
    justify-content: space-between;
    margin-top: 4rem;
    width: 80%;
`
function Slide(css,content){
    return `
        <ul style = "${css}">${item + item + item}</ul>
    `
}