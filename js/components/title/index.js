function Title(css, ...value){
    return `
    <h1 style="${css}">${value[0]}</h1>
    <p style="${css}">${value[1]}</p>
    `;
}