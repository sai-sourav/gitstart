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
// var li = document.getElementsByTagName('li');
// // console.log(li);
// // console.log(li[1]);
// // li[1].textcontent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[2].style.backgroundColor = 'green';

// // to change styles of all items

// for(let i=0; i<li.length; i++){
//     li[i].style.fontWeight = 'bold';
// }

// QUERYSELECTOR //
// var header = documrnt.querySelector('#main-header'); //using id
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input'); //first input field
// input.value = 'Hello world'

// var submit = document.querySelector('input[type="submit"]'); //first input field type submit
// submit.value = "SEND"

// var item = document.querySelector(".list-group-item");
// item.style.color = 'red';

// var lastitem = document.querySelector(".list-group-item:last-child");
// lastitem.style.color = 'blue';

// var seconditem = document.querySelector(".list-group-item:nth-child(2)");
// seconditem.style.backgroundColor = 'green'

// or

// var item = document.querySelector('#items');
// item.children[1].style.backgroundColor = 'green'

// item.children[2].style.display = 'none'

// queryselector all //

// var items = document.querySelectorAll('.list-group-item');
// items[1].style.color = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(let i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
// }

// query selector brings single item while queryselector all brings multiple items //

// Traversing the DOM //
// var itemlist = document.querySelector("#items");
// parent node
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = "yellow";
// console.log(itemlist.parentNode.parentNode.parentNode);

// parent element
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = "yellow";
// console.log(itemlist.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemlist.children);
// console.log(itemlist.children[1]);

// //firstChild
// console.log(itemList.firstchild); // brings line breaks also

// //first element child
// console.log(itemlist.firstElementChild);

// //lastChild
// console.log(itemList.lastchild); // brings line breaks also

// //last element child
// console.log(itemlist.lastElementChild);

// // nextSibling
// console.log(itemlist.nextSibling); // brings line breaks also

// // nextElementSibling
// console.log(itemlist.nextElementSibling);


// // previousSibling
// console.log(itemList.previousSibling);
// // previousElementSibling
// console.log(itemList.previousElementSibling);


// createElement


// create a div
var newDiv = document.createElement('div');

// add class
newDiv.classname = 'hello'

// add id
newDiv.id = 'hello1'

// add attr
newDiv.setAttribute('title', 'hello Div');

// create text node
var newDivText = document.createTextNode('Hello world');

// add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

// console.log(newDiv);

newDiv.style.fontsize = '30px';

container.insertBefore(newDiv, h1);



var newDiv1 = document.createElement('div');

newDiv1.innerHTML = newDiv.innerHTML

// console.log(newDiv1)

var items = document.querySelector('.list-group');

var i1 = document.querySelector('li');

items.insertBefore(newDiv1, i1);