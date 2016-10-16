
	$(function(){
		  $(".blink").typed({
			strings: ["Enter your todo", "Enter your Todo."],
			typeSpeed: 0
		  });
	  });
	  
$(document).ready(function(){
	var add = $('#add');
	var removeAll = $('#removeall');
	var list = $('#list');

	//remove all button
	removeAll.on('click',function(){
		list.html('');
	});

	//adding a new list item
	add.on('click',function(){
		addlis(list);
		$('#userinput').val('');
		$('#userinput').focus();
	});
	
	function addlis(targetUl){
		var inputText = $('#userinput').val();
		var li = $('<li></li>');
		var textNode = document.createTextNode(inputText + ' ');
		var removeButton = $('<button></button>');
		
		if(inputText !== ''){
			removeButton.addClass('btn btn-xs btn-danger me');
			removeButton.html(' &times; ');
			removeButton.attr('id','aa');
			li.append(textNode);
			li.append(removeButton);
			targetUl.append(li);
		}
		else {
			alert('please ente... ');
		}
		
		$('[class~="me"]').click(function(){
			$(this).parent().remove();
		});
	};
	

  
});


