//Nocturne Mode Activate
$(document).ready(function(){
    $('.toggle-switch').on('click', function() {
        //Button active nightMode
        if ( $('.toggle-switch').attr('checked', true) ) {
        $('#icon-sun').toggleClass('active');
        $('#icon-moon').toggleClass('active');

        //Active header nightMode
        $('.AAE-container-header').toggleClass('AAE-container-header-night-mode');
        //Active section principal nightMode (De esta sección se puede llamar el resto de los módulos)
        $('.AAE-section-principal').toggleClass('AAE-section-principal-night-mode');
        } 
        //Reviertiendo el nightmode a LightMode
        else if ( $('.toggle-switch').attr('checked', false) ) {
        $('#icon-moon').toggleClass('active');
        $('#icon-sun').toggleClass('active');

        $('.AAE-container-header').toggleClass('AAE-container-header-night-mode');
        $('.AAE-section-principal').toggleClass('AAE-section-principal-night-mode');
        }
    }); 
});
