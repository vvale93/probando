
const elementoNombre = document.querySelector('input[name="nombre"]');
const elementoApellido = document.querySelector('input[name="apellido"]');
const elementoEmail = document.querySelector('input[name="email"]');
const elementoTlf = document.querySelector('input[name="email"]');
const elementoComentario = document.querySelector('textarea[name="comentario"]');
const elementoGenero = document.querySelectorAll('input[name="genero[]"]');

function onSubmit() 
{
    let valido = true;
    if(!elementoNombre.value)
    {
        valido = false;
    }
    else
    {
        console.log(elementoNombre.value);
    }

    if(!elementoApellido.value)
    {
        valido = false;
    }
    else
    {
        console.log(elementoApellido.value);
    }

    if(!elementoTlf.value)
    {
        valido = false;
    }
    else
    {
        console.log(elementoTlf.value);
    }

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(elementoEmail.value)) 
    {
        valido = true;
        console.log(elementoEmail.value);
    } 
    else 
    {
        valido= false;
    }

    if(!elementoComentario.value)
    {
        valido = false;
    }
    else
    {
        console.log(elementoComentario.value);
    }
    if(!elementoGenero[0].checked && !elementoGenero[1].checked && !elementoGenero[2].checked)
    {
        valido=false
    }
    else
    {
        console.log("success");
    }
    console.log(valido);
    return false;
}