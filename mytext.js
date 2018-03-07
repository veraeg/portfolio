
//typing text function 
setTimeout(function(){
var show = function(id, msg, position, interval) {
if(position<msg.length) {
$(id).append(msg[position++]);

setTimeout(function() {show(id,msg,position,interval);},interval); 

} }
$(function() {

	show("#console","Welcome to my Portfolio" ,0,150)
});

// blinking console

$(document).ready(function blink_text() {
$("#console").append($("#line"));
$("#line").fadeOut(300).fadeIn(200);

var begin = setInterval(blink_text,300);
setTimeOut(clearInterval(begin),1000);

}); 
},4000);

$(document).ready(setTimeout( function(){

$("#first").addClass("newBG"); 

},2000)); 

setTimeout(function(){
for (var i = 1; i < 99999; i++)
        window.clearInterval(i);},7500);
// Show components
$(document).ready(function(){
	$(document).scroll(function() {
		$(".hidden").show("slow");
	})

});

// button gsm display
$(document).ready(function(){
	$(".btns").click(function(){

		if ($("#screen1").is(":visible")) {
	$("#screen1").hide(); 

	$("#screen2").removeAttr("hidden");
	$("#screen2").show();
}	
	else if ($("#screen2").is(":visible")) {
		$("#screen2").hide(); 

	$("#screen3").removeAttr("hidden");
	$("#screen3").show();

	}
	else if ($("#screen3").is(":visible")) {
		$("#screen3").hide(); 

	$("#screen1").show();
	}
	
})
})

$(document).ready(function(){
var para=$(".text p"); 
para.addClass("hidden");
para.each(function(index){
	$(this).delay(800*index).fadeTo(1000,1);
})
})