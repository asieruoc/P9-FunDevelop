/*Definimos que el maximo de jugadores por sala es de 4*/
const MAX_PLAYERS = 4;

const dragstart = event => {
  let text = event.srcElement.textContent;
  event.dataTransfer.setData("parentId", event.currentTarget.parentElement.id);
  event.dataTransfer.setData("elementId", event.currentTarget.id);
  console.log(text);
};

const drop = event => {
  event.preventDefault();
  let parentId = event.dataTransfer.getData('parentId');
  let destList = event.currentTarget;
  if(destList && destList.id !== parentId && destList.childElementCount < MAX_PLAYERS) {
    let elementId = event.dataTransfer.getData("elementId");
    let li = document.getElementById(elementId);
    document.getElementById("playerList").removeChild(li);
    li.draggable = false;
    destList.appendChild(li);
  } else if(destList.id === parentId){
    alert("Error: El jugador ya está en la sala");
  } else {
    alert("Error: La sala está llena");
  }
};

const dragover = event => {
  event.preventDefault();
};