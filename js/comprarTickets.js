 /*   
  const $totalAPagar=document.getElementById("totalAPagar");

  const $submit=document.getElementById("submit"),
  $cantidad=document.getElementById("cantidad"),
  $form=document.getElementById("form"),
  $categoriaSelect=document.getElementById("categoriaSelect");



 function precioFinal(){
    
    

    const precioBase=200;
    let descuento;

    //capturo los valores ingresados de cantidad y categoría
    let cantidad=$cantidad.value;
   // let categoria=$selectCategoria.options[$selectCategoria.selectedIndex].value;
  let categoria=$categoriaSelect.value;
    //asigno descuento según la categoría ingresada

    switch (categoria) {
        case "0":
            descuento=0;
            break;
        case "1":
            descuento=80;
            break;
            case "2":
               descuento=50;
                break;
                case "3":
                 descuento=15;
                    break;
    
        default:
            break;
    }


    //hago los cálculos del precio
    let precio=(cantidad * precioBase) - (cantidad * precioBase * descuento / 100);

    return precio;

    
} 

document.addEventListener("submit", (e)=>{


$totalAPagar.outerHTML=precioFinal();
$form.reset();

}
);

 */


const d=document,
$nombre=d.getElementById("nombre"),
$apellido=d.getElementById("apellido"),
$email=d.getElementById("email"),
$totalAPagar=d.getElementById("totalAPagar"),
$submit=d.getElementById("submit"),
$borrar=d.getElementById("borrar"),
$cantidad=d.getElementById("cantidad"),
$form=d.getElementById("form"),
$categoriaSelect=d.getElementById("categoriaSelect"),
$errorNombre=d.getElementById("errorNombre"),
$errorApellido=d.getElementById("errorApellido"),
$errorEmail=d.getElementById("errorEmail"),
$errorCantidad=d.getElementById("errorCantidad"),
$errorCategoria=d.getElementById("errorCategoria");



//FUNCIÓN QUE ACTÚA SOBRE TODOS LOS INPUTS ELIMINANDO EL ESTILO CSS 
//QUE DENOTA QUE LOS DATOS INGRESADOS SON INVÁLIDOS

const eliminaEstiloInvalidoMjeError=()=>{
    //elimina estilo CSS para input con datos inválidos
   let $inputsTotales=d.querySelectorAll(".selectorGeneral");
   for (let i = 0; i < $inputsTotales.length; i++) {
       $inputsTotales[i].classList.remove("is-invalid");
       $inputsTotales[i].classList.remove("is-valid");
       }

       //oculta mensajes de Error
    let $todosLosMensajesError=d.querySelectorAll(".error");
    for (let i = 0; i < $todosLosMensajesError.length; i++) {
        $todosLosMensajesError[i].classList.remove("opacity-1");
        
    }   

}




const precioBase=200;
let descuento;


function precioFinal(){



    eliminaEstiloInvalidoMjeError();





    //VALIDACIÓN DE DATOS INGRESADOS EN FORMULARIO
    
   if ($nombre.value ==="") {

     $nombre.classList.add("is-invalid");
     $errorNombre.classList.add("opacity-1");
     $nombre.focus();
     return;
   }else{
    $nombre.classList.add("is-valid");
   }



   
   if ($apellido.value ==="") {

    $apellido.classList.add("is-invalid");
    $errorApellido.classList.add("opacity-1");
    $apellido.focus();
    return;
  }else{
    $apellido.classList.add("is-valid");
   }





//validación de formato de email

const emailValido=(mail)=>{
     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail); 
   
}

   //.............................................

  if ( ($email.value ==="")  ||  (!emailValido($email.value))) {

    $email.classList.add("is-invalid");
    $errorEmail.classList.add("opacity-1");
    $email.focus();
    return;
  }else{
    $email.classList.add("is-valid");
   }




   
  if (($cantidad.value == 0)  || (isNaN($cantidad.value)) ) {

    $cantidad.classList.add("is-invalid");
    $errorCantidad.classList.add("opacity-1");
    $cantidad.focus();
    return;
  }else{
    $cantidad.classList.add("is-valid");
   }

     
  if ($categoriaSelect.value == "") {

    $categoriaSelect.classList.add("is-invalid");
    $errorCategoria.classList.add("opacity-1");
    $categoriaSelect.focus();
    return;
  }else{
    $categoriaSelect.classList.add("is-valid");
   }





    switch ($categoriaSelect.value) {
        case "0":
            descuento=0;
            break;
        case "1":
            descuento=80;
            break;
            case "2":
               descuento=50;
                break;
                case "3":
                 descuento=15;
                    break;
    
        default:
            break;
    }


    //hago los cálculos del precio
    let precio=($cantidad.value * precioBase) - ($cantidad.value * precioBase * descuento / 100);

     
    $totalAPagar.outerHTML=precio;

    preventDefault();
    
}

/* document.addEventListener("submit", (e)=>{


    $totalAPagar.outerHTML=precioFinal();
    
    
    }
    ); */

  
 $submit.addEventListener("click", precioFinal);  

 const resetFormulario=()=>{
    eliminaEstiloInvalidoMjeError();

    $totalAPagar.outerHTML="";
 }

 $borrar.addEventListener("click", resetFormulario);