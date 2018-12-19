/*
 *  Andrés Alzate Echeverry (AAE) - prototype 1.0
 *  
 *  https://alzatee.github.io/AAE-PORTAFOLIO/index.html
 *  andresalzatee@hotmail.com
 *  
 *  Last update on: 2018/11/08
 *  ©2018 Andrés Alzate (AAE) all rights reserved.
 */

 //Al ser una aplicación angular hay que inicializar cada función
$(document).ready(function(){
    //SECTION INICIO
    //BUCLE PARA LA FUNCIONALIDAD DEL MENÚ HAMBURGUESA
    $(document).ready(function(){
      var size = screen.width
        if(size > '768'){
          $(".open-close-nav").click(function(){//Boton Cerrar menú
            $(".aae-menu-hide").hide()//Ocultando menú
            $("#absoluting").addClass("col-md-12")//La zona de videos se expande
            $(".open-close-nav").hide()//Quitando este botón de cerrar 
            $(".open-nav-show").addClass("open-nav-show-d-block")//Habilitando el botón nuevo para abrir
          });

          $(".open-nav-show").click(function(){ //Boton Abrir menú
            $(".aae-menu-hide").show() //Mostrando menú
            $("#absoluting").removeClass("col-md-12")//La zona de videos se vuelve a contraer
            $(".open-nav-show").removeClass("open-nav-show-d-block")//Desabilitando este botón para habrir
            $(".open-close-nav").show()//Habilitando el botón inicial de cerrar
          });

          $(".active-nocturne-mode").click(function(){
            $(".AAE-container-header").addClass("AAE-container-header-add")
            $(".AAE-section-principal").addClass("AAE-section-principal-add")
          });
        }
    });
    
    //MENU HAMBURGUESA RESPONSIVE
    $(document).ready(function(){
      var size = screen.width
      if(size <= '768'){
        $(".open-close-nav").hide()//Quitando este botón de cerrar 
        $(".open-nav-show").addClass("open-nav-show-d-block")//Habilitando el botón nuevo para abrir

        $(".open-nav-show").click(function(){ //Boton Abrir menú
          $(".aae-menu-hide").animate({width:'toggle'},250);//Mostrando menú
          $(".group-style").fadeIn(650)
          $("#absoluting").removeClass("col-md-12")//La zona de videos se vuelve a contraer
          $(".open-nav-show").removeClass("open-nav-show-d-block")//Desabilitando este botón para habrir
          $(".open-close-nav").show()//Habilitando el botón inicial de cerrar
        });
        $(".open-close-nav").click(function(){//Boton Cerrar menú
          $(".group-style").fadeOut(100)
          $(".aae-menu-hide").animate({width:'toggle'},250);//Ocultando menú
          $("#absoluting").addClass("col-md-12")//La zona de videos se expande
          $(".open-close-nav").hide()//Quitando este botón de cerrar 
          $(".open-nav-show").addClass("open-nav-show-d-block")//Habilitando el botón nuevo para abrir
        });

        $(".active-nocturne-mode").click(function(){
          $(".AAE-container-header").addClass("AAE-container-header-add")
          $(".AAE-section-principal").addClass("AAE-section-principal-add")
        });
      }
    });

    //ACTIVE NAV ITEMS
    $(document).ready(function(){
        $('li').click(function(){
          $('li').removeClass("active");
          $(this).addClass("active");
        });
      });


    //LOGIN HIDE, SHOW, 
    //DESPLEGATE LOGIN
      $("#AAE-login-desplegate").click(function(){
        $(".video-background").show(700)
        $(".AAE-headerPage").animate({
            marginLeft: "-0.1px"
        });
      });
      //CLOSE NAV
      $("#AAE-close-login").click(function(){
        $(".video-background").hide(50)
        $(".AAE-headerPage").animate({
            marginLeft: "100%"
        });
      });
    
      //SECTION LOGIN
    //ICON EYE, FORM, PASSWORD
    $(".toggle-password").click(function() {
        $(this).toggleClass("fa-eye fa-eye-slash");
            var input = $($(this).attr("toggle"));
            if (input.attr("type") == "password") {
            input.attr("type", "text");
            } else {
            input.attr("type", "password");
            }
      });     
            
});