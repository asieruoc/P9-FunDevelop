/*Definimos que el maximo de jugadores por sala es de 4*/
const MAX_PLAYERS = 4;

const dragstart = event => {
  let text = event.srcElement.textContent;
  /*Establecemos la información que queremos compartir
  * Tenemos dos parametros, formato de la información y donde esta la información
  parentId selecciona el nodo padre del elemento arrastrado, nodo id es el propio elemento arrastrado
  usamos parentId para identificar en que contenedor se realiza el evento*/
  event.dataTransfer.setData("parentId", event.currentTarget.parentElement.id);
  event.dataTransfer.setData("elementId", event.currentTarget.id);
  console.log(text);
};

const drop = event => {
  /*Eventos - Método donde reseteamos el comportamiento por defecto de los navegadores para que nos permita arrastrar los objetos
* de tal forma que nos deja libertad para que nosotros seamos los que le decimos como comportarse al arrastrar
* el objeto*/
  event.preventDefault();
  /*Recuperamos el id Padre*/
  let parentId = event.dataTransfer.getData('parentId');
  /*destList es el nodo destino*/
  let destList = event.currentTarget;
  if(destList && destList.id !== parentId && destList.childElementCount < MAX_PLAYERS) {
    let elementId = event.dataTransfer.getData("elementId");
    let li = document.getElementById(elementId);
    document.getElementById("playerList").removeChild(li);
    /*Se deshabilita la ocpión de poder arrastrar*/
    li.draggable = false;
    /*Se añade la lista al elemento destList (lista donde se muestran todos los jugadores de la sala)*/
    destList.appendChild(li);
  /*Controlamos posibles errores*/
  } else if(destList.id === parentId){
    alert("Error: El jugador ya está en la sala");
  } else {
    alert("Error: La sala está llena");
  }
};
/*Eventos - Método donde reseteamos el comportamiento por defecto de los navegadores para que nos permita arrastrar los objetos
* de tal forma que nos deja libertad para que nosotros seamos los que le decimos como comportarse al arrastrar
* el objeto*/
const dragover = event => {
  event.preventDefault();
};