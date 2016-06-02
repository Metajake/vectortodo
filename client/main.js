//Site wide Javascript not relating to a specific template or section
import '../imports/ui/body.js'; //this begins the page construction

$(document).ready(function(){
    // Filter Task List results
    $('#filter').click(function(event){ //On Dropdown Click, activate .change() (this allows us to get the filter value even if the dropdown does not change
        $(this).change(); //trigger this .change() event
    }).change(function(){
        const value = $('#filter').val(); //Get Filter dropdown result
        switch(value){ //Use Jquery to show and hide Tasks depending on filter
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

    //DRAWER (show/hide the additional Task List functions)
    var drawerOpen = true;
    function getDrawerHeight(){ //Set the height of the "drawer area" just in case they resized the browser while the drawer was closed
        if (window.innerWidth <= 600){
            drawerHeight = 155
        }else{ drawerHeight = 110}
        return drawerHeight
    }
    //Drawer "icon" click event shows/hides Drawer
    $('img.drawerIcon').click(function(){
        if(drawerOpen == true){
            $('.drawer').animate({height:0},800);
            drawerOpen = false
        }else if (drawerOpen == false){
            $('.drawer').animate({height:getDrawerHeight()},800,function(){
                console.log("drawwer opening done")
                drawerOpen = true;
            });

        }
    });

    //If drawer is closed on window resize, get the new "height" of the drawer area, but don't open the Drawer
    $(window).resize(function(){
        if(drawerOpen == true){
            $('.drawer').height(getDrawerHeight())
        }
    });

});