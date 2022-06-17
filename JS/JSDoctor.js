var boton_encabezado_inicio=document.getElementById("boton-encabezado-inicio");
var boton_encabezado_estado=document.getElementById("boton-encabezado-estado");
var boton_encabezado_configuracion=document.getElementById("boton-encabezado-configuracion");

function inicio_html(){
    if(document.getElementById("boton-encabezado-inicio").click)
    {
        // ESCONDE LOS HTML DEL BOTON INICIO
        document.getElementById(id="cuadricula1_html_inicio1").style.display="flex";
        document.getElementById(id="cuadricula1_html_inicio2").style.display="flex";
        document.getElementById(id="cuadricula1_html_inicio3").style.display="flex";

        // botones encabezado
        boton_encabezado_inicio.style.background="white";
        boton_encabezado_inicio.style.color="black";
        boton_encabezado_inicio.style.border="none";

        boton_encabezado_estado.style.background="rgb(37, 37, 37)";
        boton_encabezado_estado.style.color="white";
        boton_encabezado_estado.style.border="solid 1px black";

        boton_encabezado_configuracion.style.background="rgb(37, 37, 37)";
        boton_encabezado_configuracion.style.color="white";
        boton_encabezado_configuracion.style.border="solid 1px black";
    }
}
function estado_html(){
    if(document.getElementById("boton-encabezado-estado").click)
    {
        // ESCONDE LOS HTML DEL BOTON INICIO
        document.getElementById(id="cuadricula1_html_inicio1").style.display="none";
        document.getElementById(id="cuadricula1_html_inicio2").style.display="none";
        document.getElementById(id="cuadricula1_html_inicio3").style.display="none";

        // botones encabezado
        boton_encabezado_estado.style.background="white";
        boton_encabezado_estado.style.color="black";
        boton_encabezado_estado.style.border="none";

        boton_encabezado_inicio.style.background="rgb(37, 37, 37)";
        boton_encabezado_inicio.style.color="white";
        boton_encabezado_inicio.style.border="solid 1px black";

        boton_encabezado_configuracion.style.background="rgb(37, 37, 37)";
        boton_encabezado_configuracion.style.color="white";
        boton_encabezado_configuracion.style.border="solid 1px black";
    }
}
function configuracion_html(){
    if(document.getElementById("boton-encabezado-configuracion").click)
    {
        // ESCONDE LOS HTML DEL BOTON INICIO
        document.getElementById(id="cuadricula1_html_inicio1").style.display="none";
        document.getElementById(id="cuadricula1_html_inicio2").style.display="none";
        document.getElementById(id="cuadricula1_html_inicio3").style.display="none";

        // botones encabezado
        boton_encabezado_configuracion.style.background="white";
        boton_encabezado_configuracion.style.color="black";
        boton_encabezado_configuracion.style.border="none";

        boton_encabezado_estado.style.background="rgb(37, 37, 37)";
        boton_encabezado_estado.style.color="white";
        boton_encabezado_estado.style.border="solid 1px black";

        boton_encabezado_inicio.style.background="rgb(37, 37, 37)";
        boton_encabezado_inicio.style.color="white";
        boton_encabezado_inicio.style.border="solid 1px black";
    }
}