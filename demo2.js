//for the html given document stays at first level.
// on 2nd level of tree head will be on left and body on the right.
// on third level head has h1 node and body has two inputs, each input contains type and name attributes.

// EXAMINE THE DOCUMENT OBJECT //
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
//GET ELEMENT ID

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title')
// // console.log(headerTitle);

// // headerTitle.textContent = 'Hello';
// // headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText)
// console.log(headerTitle.textContent)
//headerTitle.innerHTML = '<h3>Hello</h3>';

// text content will show everithing including text display set to none
// innerText will show only that is showing in website

//headerTitle.style.borderBottom = 'solid 3px #000';

// const additems = document.querySelector('h2');
// console.log(additems.innerText);
// additems.style.color = "green"
// //additems.style.fontWeight = 'bold';
// additems.innerHTML = '<b> Add items </b>';

// getelementsby class name//
// var items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[1]);
// // items[1].textcontent = 'Hello 2';
// // items[1].style.fontweight = 'bold';
// items[2].style.backgroundColor = 'green';

// // to change styles of all items

// for(let i=0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold';
// }
// get element by tagname//
var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textcontent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[2].style.backgroundColor = 'green';

// to change styles of all items

for(let i=0; i<li.length; i++){
    li[i].style.fontWeight = 'bold';
}