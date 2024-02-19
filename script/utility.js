function getInnerText(element){
    const text = document.getElementById(element);
    const textValue = text.innerText;
    const textNum = parseInt(textValue);
    return textNum;
}
function setInnerText(element,value){
    const text = document.getElementById(element);
    text.innerText = value;
}
function createTableElement(element){
    const tBody = document.getElementById('tbody');
    const tRow = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerText = element;
    const td2 = document.createElement('td');
    td2.innerText = 'Economy';
    const td3 = document.createElement('td');
    td3.innerText = 550;
    tRow.appendChild(td1);
    tRow.appendChild(td2);
    tRow.appendChild(td3);
    tBody.appendChild(tRow);

}
function hideElment(element){
    const name = document.getElementById(element);
    name.classList.add('hidden');
}
function showElement(element){
    const name = document.getElementById(element);
    name.classList.remove('hidden');
}