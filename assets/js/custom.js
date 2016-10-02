$( document ).ready(function() {
    $('.maintenance > tr > th').each(function(index){
    	if(index != 6){
	    	var tableDetails = $('.details[data-target=' + index + ']');
    	}
    });

    $('.accordion-toggle').on('click', function(){
        var row = $(this);
        var idsArray = row.data('target').split(",");

        $.each( idsArray, function( key, value ) {
            if($(value).hasClass('in')){
                window.setTimeout(function(){
                  $(value).parent().css('border-right', '0px');
                }, 200);
            } else {
              $(value).parent().css('border-right', '1px solid #ddd');;
            }
        });
    });
    
    // Write your custom Javascript codes here...
});