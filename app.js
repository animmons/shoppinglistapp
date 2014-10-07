$(document).ready(function(){

	var addItem= function(){
		var input = $("#myInput").val() 
		$("#list").append("<li class='item'>"+input+"</li>");
			$("#myInput").val(""); 
	}

	$("#myButton").click(addItem);
	$(document).keydown(function(k) {
		if (k.keyCode == 13){
			addItem();
		}
	});

$("ol").on('click', '.item', function(){
	$(this).toggleClass("checked-off");
})


$('ol').on('dblclick', '.item', function(){
	$(this).remove();
})

})