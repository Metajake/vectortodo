import '../imports/ui/body.js';

$(document).ready(function(){
    $('#filter').change(function(event){
        console.log($('#filter').val())
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
            default:
                console.log("defaiult")
        }

        //$('.checked').toggle()
    });

});
//console.log($('#hideCompleted'))
//$('.checked').css({visibility:'none'})