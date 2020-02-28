$(document).ready(function() { 
$("#header").css("color","white");



    $("#body_container").css("display", "block");
    $("#image_container").css("display", "none");
    $("#form_content").css("display", "none");

    $("#header").css("background", "black");
    $("#header").css("width", "100%");
    $("#header").css("height", "20%");


    $("#body").css("width", "100%");
    $("#body").css("height", "75%");
    
  
    $("#footer").css("width", "100%");
    $("#footer").css("height", "5%");

    $("#navigation_header").css("padding-top", "20px");
    $("#navigation_header").css("padding-bottom", "20px");

  

    $("#personal_photo").css("height", "250px");
    $("#personal_photo").css("width", "250px");
    
    $("#body_content").css("padding-top", "150px");
    $(".magic-image").css("height", "350px")
    $(".magic-image").css("width", "350px")

    $("#image_content").css("padding-top", "100px");
    $("#form_content").css("padding-top", "100px");

    $(".navigacijas-poga").click(function() {
        var text = $(this).text();

            if(text == "Par mani") {

                $("#body_container").css("display", "block");
                $("#image_container").css("display", "none");
                $("#form_content").css("display", "none");

            }

            if(text == "Mani darbi") {

                $("#body_container").css("display", "none");
                $("#image_container").css("display", "block");
                $("#form_content").css("display", "none");
                
            }

            if(text == "Kontaktinformācija") {
                
                $("#body_container").css("display", "none");
                $("#image_container").css("display", "none");
                $("#form_content").css("display", "block");
            }

    });

});