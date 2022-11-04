var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);
// edit event
itemList.addEventListener('click', editItem);

showlist();
// get data from local storage
function showlist(){
  itemList.innerHTML = ""
  Object.keys(localStorage).forEach((key)=>{

    var user_serialized = localStorage.getItem(key);
    var user_deserialized = JSON.parse(user_serialized);

    appendlist(user_deserialized.name + " " + user_deserialized.desc); 
 });

}

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItem1 = document.getElementById('item2').value;
  // adding details to local storage
  //localStorage.setItem(newItem,newItem1);

  // adding details as object to local storage
    let myobj = {
      name : newItem ,
      desc : newItem1
    }
    let myobj_serialized = JSON.stringify(myobj);
    localStorage.setItem("user"+myobj.name,myobj_serialized);

    showlist();

  // clear input field
  document.getElementById('item').value = '';
  document.getElementById('item2').value = '';
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      let arr = li.innerText
      arr = arr.split(' ')
      itemList.removeChild(li);
      localStorage.removeItem("user"+arr[0])
    }
  }
}

// Edit item
function editItem(e){
  if(e.target.classList.contains('edit')){
      var li = e.target.parentElement;
      let arr = li.innerText
      arr = arr.split('\n')
      arr = arr[0].split(' ')
      console.log(arr)
      document.getElementById('item').value = arr[0];
      document.getElementById('item2').value = arr[1];
  }
}

// Filter Items
function filterItems(e){
  e.preventDefault();
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.innerText;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
  }

// append list
function appendlist(text){  
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(text));
  ///

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);
  
  ///

  // create edit button element
  var editBtn = document.createElement('button');

  // Add classes to edit button
  editBtn.className = 'btn btn-default btn-sm float-right edit';

   // Append text node
   editBtn.appendChild(document.createTextNode('Edit'));

   // Append button to li
  li.appendChild(editBtn);


  ///

  // Append li to list
  itemList.appendChild(li);

}