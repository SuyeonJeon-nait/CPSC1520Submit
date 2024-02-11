//Writing A Function
function updateInnerHTML (selector, string){
    document.querySelector(selector).innerHTML = string;
}

//Calling the function
updateInnerHTML('h1', "New Topic");

//Creating a function with a return value
function strong(string){
    return `<strong>${string}</strong>`;
}

const template = strong('making things useful');
console.log(template);

//Adding text using insertAdjacentHTML()
const updateInnerHTMLAdjacent = function (selector, htmlString){
    document.querySelector(selector).insertAdjacentHTML('beforeend', htmlString);
}

updateInnerHTMLAdjacent('section',template);