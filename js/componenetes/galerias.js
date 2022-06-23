/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function CloneVideo(elem) {
    //var elem = document.getElementById(id);
    //console.log(elem.id);
    var strid = elem.id.toString();
    var idelem = strid.replace("btn_", "");
    //console.log(idelem);
    var elemClon = document.getElementById(idelem);
    var clonedTable = elemClon.cloneNode(true);
    var containerClone = document.getElementById("containerClone");
    document.getElementById("containerClone").innerHTML = "";
    clonedTable.setAttribute("width", 1300);
    clonedTable.setAttribute("height", 500);
    //elem.className = dots[i].className.replace("w3-opacity-off", "");
    document.getElementById("containerClone").appendChild(clonedTable);
}

function CloneImagen(elem) {
    //console.log(select_id);
    //var elem = document.getElementById("select_id");
    //console.log(elem);
    var clonedTable = elem.cloneNode(true);
    var containerCloneImg = document.getElementById("containerCloneImg");
    document.getElementById("containerCloneImg").innerHTML = "";
    //elem.className = dots[i].className.replace("w3-opacity-off", "");
    clonedTable.setAttribute("width", 1300);
    clonedTable.setAttribute("height", 500);
    document.getElementById("containerCloneImg").appendChild(clonedTable);
}

