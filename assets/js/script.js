$(document).ready(function () {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

    $("#enviarCorreo").click(function () { 
        alert(this.hash='Su correo ha sido enviado')
    });

    $("#t-ingredientes").dblclick(function (){
        $(this).css("color","red");
    })

    $("#t-preparacion").dblclick(function (){
        $(this).css("color","red");
    })
    
    $(".card-body > h5").click(
        function(){$(".card").css({"display": "none"})
    })   

  
  
})
