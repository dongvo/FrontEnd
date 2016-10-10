
$(document).ready(function(){
	
	var max = 10;
	
	var Input = {
		init: function(){
			$('#area').on('keydown', function(){
				max -= 1;
				Input.check();
				
			});
		},
		check: function(){
			if(max <0){
				$('.modal').show();
				$('#area').attr('disabled','disabled');
			}
			else {
				$('.modal').hide();
			}
		}
	};
	
	$('.close').off('click').click(function(){
		$('.modal').hide();
	});
	$(document).off('click').on('click',function(evt){
		if(evt.target.className == 'modal'){
			$('.modal').hide();
		}
	});
	
	function Start(){
		Input.init();
	}
	Start();
	
	
});


