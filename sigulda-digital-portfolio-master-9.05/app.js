$(document).ready(function() { 
$("#header").css("color","white");



    $("#body_container").css("display", "block");
    $("#image_container").css("display", "none");
    $("#form_content").css("display", "none");

    $("#header").css("background", "Black");
    $("#header").css("width", "100%");
    $("#header").css("height", "10%");


    $("#body").css("width", "100%");
    $("#body").css("height", "80%");
    
  
    $("#footer").css("width", "100%");
    $("#footer").css("height", "10%");

    $("#navigation_header").css("padding-top", "2px");
    $("#navigation_header").css("padding-bottom", "2px");

  

    $("#personal_photo").css("height", "300px");
    $("#personal_photo").css("width", "400px");
    
    $("#body_content").css("padding-top", "100px");
    $(".magic-image").css("height", "280px")
    $(".magic-image").css("width", "280px")

    $("#image_content").css("padding-top", "100px");
    $("#form_content").css("padding-top", "350px");

    $(".navigacijas-poga").click(function() {
        var text = $(this).text();

            if(text == "Par mani") {

                $("#body_container").css("display", "block");
                $("#image_container").css("display", "none");
                $("#form_content").css("display", "none");
                $("#main-body").css("background","url('george-mastro-fBt9h-mP0_o-unsplash.jpg')");
                $("#header").css("background", "Black");
                
            }

            if(text == "Mani darbi") {

                $("#body_container").css("display", "none");
                $("#image_container").css("display", "block");
                $("#form_content").css("display", "none");
                $("#main-body").css("background","url('TEJA.jpg')");
                $("#header").css("background", "slategray");
                
            }

            if(text == "Kontaktinformācija") {
                
                $("#body_container").css("display", "none");
                $("#image_container").css("display", "none");
                $("#form_content").css("display", "block");
                $("#main-body").css("background","url('anas-alshanti-feXpdV001o4-unsplash.jpg')");
                $("#header").css("background", "indigo");
                
            }

    });

});