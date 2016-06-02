import '../imports/ui/body.js';

$(document).ready(function(){
    $('#filter').click(function(event){
        $(this).change();
    }).change(function(){
        const value = $('#filter').val();
        switch(value){
            case("all"):
                $('.task').show();
                break;
            case('active'):
                $('.checked').hide();
                $('.task:not(.checked)').show();
                break;
            case('completed'):
                $('.checked').show();
                $('.task:not(.checked)').hide();
                break;
            default:
        }
    });

});