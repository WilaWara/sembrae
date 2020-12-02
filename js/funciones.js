function enviar_email(){
    var nombre = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("message").value;

    if(nombre != "" && email != "" && mensaje != ""){
        var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
        if (filtro.test(email)){
            $.ajax({
                type: 'POST',
                url: '../config/email.php',
                data: {
                    nombre: nombre,
                    email: email,
                    mensaje: mensaje
                },

                success: function (response) {
                    if(response.includes("Mensaje correctamente enviado, nos comunicaremos con usted") == true){
                        document.getElementById("fname").value = "";
                        document.getElementById("email").value = "";
                        document.getElementById("message").value = "";
                        alert(response);
                    }else{
                        alert("Hubo un problema, por favor intente mas tarde: " + response);
                    }
                },

                error: function() { 
                    alert("Hubo un problema, por favor intente mas tarde"); 
                } 
            }); 
            return false;
        }else{
            alert("Formato de email equivocado");
            return;
        }
    }else{
        alert("todos los campos son obligatorios");
    }
}

function cerrar_modal(){
    let ventanaModal = document.getElementById("ventana_modal").style;
    ventanaModal.zIndex = "-1";
    ventanaModal.visibility = "hidden";
}