/*
   Andrés Alzate Echeverry (AAE) - prototype 1.0
  
   https://alzatee.github.io/AAE-PORTAFOLIO/index.html
   andresalzatee@hotmail.com
 
   Last update on: 2018/11/08
   ©2018 Andrés Alzate (AAE) all rights reserved.
 */

/*Información en la Consola Web
console.info("%cAutor: Andrés Alzate Echeverry (AAE)" + " " +
"Hotmail: andresalzatee@hotmail.com" + " " +
"Linkeding: www.linkedin.com/in/andr%C3%A9s-alzate-echeverry-3147a7170",
"color:#555;font-size: 16px;background:#eee;font-weight: 300;border-radius:8px;padding:1px");*/


//Al ser una aplicación angular hay que inicializar cada función
$(document).ready(function () {
  //SECTION INICIO
  //BUCLE PARA LA FUNCIONALIDAD DEL MENÚ HAMBURGUESA
  var size = screen.width
  if (size > '768') {
    $(".open-close-nav").click(function () {//Boton Cerrar menú
      $(".aae-menu-hide").hide()//Ocultando menú
      $("#absoluting").addClass("col-md-12")//La zona de videos se expande
      $(".open-close-nav").hide()//Quitando este botón de cerrar 
      $(".open-nav-show").addClass("open-nav-show-d-block")//Habilitando el botón nuevo para abrir
    });

    $(".open-nav-show").click(function () { //Boton Abrir menú
      $(".aae-menu-hide").show() //Mostrando menú
      $("#absoluting").removeClass("col-md-12")//La zona de videos se vuelve a contraer
      $(".open-nav-show").removeClass("open-nav-show-d-block")//Desabilitando este botón para habrir
      $(".open-close-nav").show()//Habilitando el botón inicial de cerrar
    });

    $(".active-nocturne-mode").click(function () {
      $(".AAE-container-header").addClass("AAE-container-header-add")
      $(".AAE-section-principal").addClass("AAE-section-principal-add")
    });
  }

  //MENU HAMBURGUESA RESPONSIVE
  var size = screen.width
  if (size <= '768') {
    $("#absoluting").addClass("col-md-12")
    $(".open-close-nav").hide()//Quitando este botón de cerrar 
    $(".open-nav-show").addClass("open-nav-show-d-block")//Habilitando el botón nuevo para abrir

    $(".open-nav-show").click(function () { //Boton Abrir menú
      $(".aae-menu-hide").animate({ width: 'toggle' }, 250);//Mostrando menú
      $(".group-style").fadeIn(650)
      $("#absoluting").removeClass("col-md-12")//La zona de videos se vuelve a contraer
      $(".open-nav-show").removeClass("open-nav-show-d-block")//Desabilitando este botón para habrir
      $(".open-close-nav").show()//Habilitando el botón inicial de cerrar
    });
    $(".open-close-nav").click(function () {//Boton Cerrar menú
      $(".group-style").fadeOut(100)
      $(".aae-menu-hide").animate({ width: 'toggle' }, 250);//Ocultando menú
      $("#absoluting").addClass("col-md-12")//La zona de videos se expande
      $(".open-close-nav").hide()//Quitando este botón de cerrar 
      $(".open-nav-show").addClass("open-nav-show-d-block")//Habilitando el botón nuevo para abrir
    });

    $(".active-nocturne-mode").click(function () {
      $(".AAE-container-header").addClass("AAE-container-header-add")
      $(".AAE-section-principal").addClass("AAE-section-principal-add")
    });
  }
  //ACTIVE NAV ITEMS
  $('li').click(function () {
    $('li').removeClass("active");
    $(this).addClass("active");
  });

  //SECCIÓN LOGIN HIDE, SHOW, 
  //DESPLEGATE LOGIN
  $("#AAE-login-desplegate").click(function () {
    $(".video-background").show(700)
    $(".AAE-headerPage").animate({
      marginLeft: "-0.1px"
    });
  });
  //CLOSE NAV
  $("#AAE-close-login,#AAE-close-login-mobile").click(function () {
    $(".video-background").hide(50)
    $(".AAE-headerPage").animate({
      marginLeft: "100%"
    });
  });

  //SECTION LOGIN
  //ICON EYE, FORM, PASSWORD
  $(".toggle-password").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  //MENÚ PARA APP Y CÉLULARES
  var size = screen.width
  if (size <= '474') {
    $("#container-app-mobile").addClass("container-app-mobile");
    $("#content-menu-mobile").addClass("content-page-mobile");
    $("#buton-toggle-menu-mobile").addClass("button-menu-mobile");
    $("#menu-toggle-mobile").addClass("menu-mobile");
  
    /*Definiendo el momento click*/
    if( 'ontouchstart' in window ){ var click = 'touchstart'; }
    else { var click = 'click'; }
    /*	Reveelando menu-mobile */
    $('div.button-menu-mobile').on(click, function(){
      if( !$('div.content-page-mobile').hasClass('inactive') ){
        // Desliza y escala contenido-página-móvil
        $('div.content-page-mobile').addClass('inactive');
        setTimeout(function(){ $('div.content-page-mobile').addClass('flag'); }, 100);
        // Deslizar en el menú de enlaces móviles
        var timer = 0;
        $.each($('li'), function(i,v){
          timer = 40 * i;
          setTimeout(function(){
            $(v).addClass('visible');
          }, timer);
        });
      }
    });
    /*Close menu-mobile*/
    function closeMenu() {		
      // Slide and scale content-page-mobile
      $('div.content-page-mobile').removeClass('inactive flag');
      //Reset menu-mobile
      setTimeout(function(){
        $('li').removeClass('visible');
      }, 300);
    }
    $('div.content-page-mobile').on(click, function(){
      if( $('div.content-page-mobile').hasClass('flag') ){
        closeMenu();
      }
    });
    $('li a').on(click, function(e){
      e.preventDefault();
      closeMenu();
    });
  }

});
