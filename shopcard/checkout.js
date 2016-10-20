
var check = check || {},
	data = JSON.parse(localStorage.getItem("data"));

data = data || {};

(function(check, data, $){
	
	
	check.init = function(){
		
		
		$.each(data, function(index, params){
			generateElement(params);
		});
		
	}
	 /*generateElement({
            id: "123",
            name: "xedap",
            price: "asd",
            number: "2",
        });*/

	
	var generateElement = function(params){
		
		let $info = $('#info');
		let $table = $info.find('>table');
		let $tbody = $table.find('>tbody');
		
		var content = '<tr><td id='+ params.id +'>' + params.id + '</td>\
					<td>' + params.name + '</td>\
					<td>' + params.price + '</td>\
					<td id='+ params.number + '>' + params.number + '</td></tr>';
		
		$tbody.append(content);
		
		
		
	}
	
	$('.btn-order').on('click', function(){
		var me = $(this).parents('.item');
		var stt = new Date().getTime();
		var id = me.find('.btn-order').attr('ms');
		var name = me.find('img').attr('name');
		var price = me.find('.price').attr('price');
		var number = 1;
		console.log(stt + '---' +id + '---' + name+ '---' + price+'---'+number);
		check.add(stt,id, name, price, number);
	})
	check.add = function(stt, id, name, price, number){
		var tempdata;
		tempdata = {
			stt: stt,
			id: id,
			name: name,
			price: price,
			number: number
		};
		
		data[stt] = tempdata;
		localStorage.setItem('data', JSON.stringify(data));
		
		generateElement(tempdata);
	}
	
	
	
})(check, data, jQuery);



