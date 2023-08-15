
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

}
