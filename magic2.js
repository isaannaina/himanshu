var form = document.getElementById('calltime')

// Form submit event
form.addEventListener('submit', addItem);
function addItem(e){
    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('calltime').value;
  
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'form-control';
    // Add text node with input value
    ///li.appendChild(document.createTextNode(newItem))      background-image: url('https://media.istockphoto.com/id/1432854572/photo/young-superman-looking-and-contemplating-towards-salt-lake.jpg?s=612x612&w=is&k=20&c=PrMoWnKNDbToXrTyjdY986naFQCpdsxCpmOZ874Bd18=')

}    //  background-image: url('https://media.istockphoto.com/id/1432854572/photo/young-superman-looking-and-contemplating-towards-salt-lake.jpg?s=612x612&w=is&k=20&c=PrMoWnKNDbToXrTyjdY986naFQCpdsxCpmOZ874Bd18=')
