(function($) {
    "use strict";
	
	 var options = { success: showResponse, beforeSubmit: showRequest}; 
    $('#reservation-form').submit(function() { 
        $(this).ajaxSubmit(options); 
        return false; 
    });
	
})(jQuery);

function showResponse(responseText, statusText)  { 
	if (statusText == 'success') {
		jQuery('.reservation_txt').html('<h4>Mensaje enviado</h4>'); 
		jQuery('#output').html('<p>Gracias por contactar con nosotros. En breve confirmaremos su reserva.</p>'); 
	} else {
		alert('status: ' + statusText + '\n\nError aquí');
	}
}

function showRequest(formData, jqForm, options) { 
	var form = jqForm[0];
	var validRegExp = /^[^@]+@[^@]+.[a-z]{2,}$/i;
	
	if (!form.author.value) {
		jQuery('#output').html('<div class="output2">Debe rellenar el campo de Nombre!</div>'); 
		return false; 
	} else if (!form.email.value) {
		jQuery('#output').html('<div class="output2">Debe rellenar el campo de Correo electrónico!</div>'); 
		return false; 
	} else if (form.email.value.search(validRegExp) == -1) {
		jQuery('#output').html('<div class="output2">Rellene un correo electrónico válido!</div>'); 
		return false; 
	}
	else if (!form.phone.value) {
		jQuery('#output').html('<div class="output2">Rellene un número de teléfono válido!</div>'); 
		return false; 
	} else if ( isNaN(form.phone.value)) {
		jQuery('#output').html('<div class="output2">Rellene un número de teléfono válido!</div>'); 
		return false; 
	} 
	else if (!form.datepicker.value) { 
		jQuery('#output').html('<div class="output2">Debe rellenar el campo de Fecha!</div>'); 
		return false; 
	} else if (!form.time.value) {
		jQuery('#output').html('<div class="output2">Debe rellenar el campo de Hora!</div>'); 
		return false; 
	} else if (!form.persons.value) {
		jQuery('#output').html('<div class="output2">Debe rellenar el campo de Número de personas!</div>'); 
		return false; 
	} else if ( isNaN(form.persons.value)) {
		jQuery('#output').html('<div class="output2">Rellene un número de personas válido!</div>'); 
		return false; 
	}
	else {	   
	 jQuery('#output').html('Enviando el mensaje...!');  		
		return true;
	}
}