
function newItem(){

    // #1
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
    

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        $('#list').append(li);
    }

    // #2
    function crossOut() {
        li.toggleClass('strike');
    }

    li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});
    
    // #3 1
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    // #3 2
    function deleteListItem(){
        li.addClass('delete');
    }

    // #4
    $('#list').sortable();
}
