function dodavanje() {

    let new_item = document.createElement('li');
    let input = document.querySelector('#input').value;
    new_item.innerText = input;
    document.querySelector('.myList').appendChild(new_item);

    document.querySelector('#input').value = '';

}