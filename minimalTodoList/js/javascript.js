
var mini = mini || {};
var data = JSON.parse(localStorage.getItem("miniData"));
data = data || {};
var news = $('#news');
 
(function(mini, data, $){

	
	var codes = {
		'1': 'div',
		'2': 's'
	};
	var check = {
		'1': '',
		'2': 'checked'
	};
	
	mini.init = function(){
		
		
		
		//Add element
		var generateElement = function(params){
		
			let str = '<div class="alert alert-none" code="' + params.code + '" id=' + params.id +'>\
					<a href="#" class="close delete">&times;</a>\
					<input type="checkbox" '+ check[params.code] + '>\
					<div class="content"><'+codes[params.code] +'>' + params.content+ '</'+codes[params.code] +'></div></div>';
		
			
			let $container = $('#main');
			$container.append(str);
		
		}
		
		$.each(data, function (index, params){
			generateElement(params);
		});
		
		//Enter to add note
		news.keypress(function(evt){
			let content = news.val();
			if(content !== ""){
				if(evt.which == 13) {
					mini.add(content);
					news.val('');
				}
			}
			
		});
		
		//add to storage and display
		mini.add = function(content) {
			let temp;
			let id = new Date().getTime();
			temp = {
				id: id,
				code: '1',
				content: content
			};
			
			data[id] = temp;
			localStorage.setItem("miniData", JSON.stringify(data));
			
			generateElement(temp);
		}
		
		//remove note on display
		var removeElement = function(id){
			$('#'+id).remove();
		}
		
		$(document).on('click', function(evt){
			let me = $(evt.target);
			let target = evt.target;
			if( me.hasClass('delete')){
				let parents = me.parent();
				let id = parents.attr('id');
				
				removeElement(id);
				//delete and update storage
				delete data[id];
				localStorage.setItem("miniData", JSON.stringify(data));
			}
			
			//checkbox change
			else if(target.type === 'checkbox'){
				let parents = me.parent();
				let id = parents.attr('id');
				let object = data[id];
				let $content = parents.find('.content');
				let txt = $content.text();
				
				if(target.checked){
					object.code = '2';
					$content.html('<s>' + txt + '</s>');
				}
				else {
					object.code = '1';
					$content.html(txt);
				}
				
				//generateElement(object);
				data[id] = object;
				localStorage.setItem("miniData", JSON.stringify(data));
			
			}
		});
		

		
	}
	
	
	
})(mini, data, jQuery);



