$(document).ready(function() {
	$('.navbutton3Menu').hover(function() {
		$('.navbutton3Menu')
			.append($('<br /><a href="#" class="navlink"><span class="subNavbox">Person 1</span></a>').fadeIn('slow'))
			.append($('<br /><a href="#" class="navlink"><span class="subNavbox">Person 2</span></a>').fadeIn('slow'))
			.append($('<br /><a href="#" class="navlink"><span class="subNavbox">Person 3</span></a>').fadeIn('slow'));
	}, function() {
		$('.navbutton3Menu')
			.empty()
			.append('<a href="#" class="navlink"><span class="navbox navbutton3">Contact</span></a>');
	});
	$('.navbutton5Menu').hover(function() {
		$('.navbutton5Menu')
			.append($('<br /><a href="#" class="navlink"><span class="subNavbox" style="width: 200px;">Info Link 1</span></a>').fadeIn('slow'))
			.append($('<br /><a href="#" class="navlink"><span class="subNavbox" style="width: 200px;">Info Link 2</span></a>').fadeIn('slow'))
			.append($('<br /><a href="#" class="navlink"><span class="subNavbox" style="width: 200px;">Info Link 3</span></a>').fadeIn('slow'))
			.append($('<br /><a href="#" class="navlink"><span class="subNavbox" style="width: 200px;">Info Link 4</span></a>').fadeIn('slow'))
			.append($('<br /><a href="#" class="navlink"><span class="subNavbox" style="width: 200px;">Info Link 5</span></a>').fadeIn('slow'));
	}, function() {
		$('.navbutton5Menu')
			.empty()
			.append('<a href="#" class="navlink"><span class="navbox navbutton5" style="width: 200px;">Important Information</span></a>');
	});
    	$('#content').css("display", "none");
 
	$('#content').fadeIn(2000);
 
    	$('a').click(function(event){
        	event.preventDefault();
        	linkLocation = this.href;
        	$('#content').fadeOut(1000, redirectPage);      
    	});
         
    	function redirectPage() {
        	window.location = linkLocation;
    	}
});