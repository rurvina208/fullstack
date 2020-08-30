$(function () {
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    
    $("#contacto").on('show.bs.modal', function (e) {
        console.log("el modal se esta mostrando");
        $("#contactobtn").removeClass('btn-outline-success');
        $("#contactobtn").addClass('btn-primary');
        $("#contactobtn").prop('disabled',true);
    });
    $("#contacto").on('shown.bs.modal', function (e) {
        console.log("el modal contacto se mostro despues");
    });
    $("#contacto").on('hide.bs.modal', function (e) {
        console.log("el modal se oculto");
    });
    $("#contacto").on('hidden.bs.modal', function (e) {
        console.log("el modal se esta ocultando");
        $("#contactobtn").prop('disabled',false);
    });
    });
//funcion de javascrip que permite cambiar el tiempo de transicion del carousel
$( document ).ready(function(){
$('.carousel').carousel({
  interval: 2000
});
});