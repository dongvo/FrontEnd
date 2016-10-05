
	
	
		if(number.test(evt.target.className) && !point.test(evt.target.className)) {
			
			
			if(done == 1 ){
				a = parseFloat(document.getElementById('screen').value);
				pnt = 0;
			}
			if(done == 2) {
				a  = parseFloat(document.getElementById('screen').value);
				document.getElementById('screen').value ="";
			}
			
			
			var tar = evt.target.innerHTML;
			var val = document.getElementById('screen').value;
			if (val== "0"){
				document.getElementById('screen').value = "";
				val = "";
			}
			document.getElementById('screen').value = CONCAT(val,tar);
			console.log(pnt);
		}
		if(zero.test(evt.target.className)) {
			
		}
		if(point.test(evt.target.className) && pnt == 0) {
			var input = document.getElementById('screen').value;
			input = CONCAT(input,".");
			document.getElementById('screen').value = input;
			pnt = 1;
		}
		if(opera.test(evt.target.className)) {
			
			var operation = evt.target.id;
			switch(operation){
				case 'sub':  done = 2;
							 a = 0;
							 temp = a;
						break;
				case 'ac': reset();
						break;
			}
			
			if(operation == "result" ) {
			console.log(temp);
			console.log(a);
				console.log(pnt);
				result = Operation(temp, a,'sub');
				document.getElementById('screen').value = result;
				done =0;
				pnt =0;a = result; b =0;
			}
		}