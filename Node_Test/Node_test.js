

document.getElementById("Eingabefeld").addEventListener("submit", function(event) {
event.preventDefault();

const Notiz = document.getElementById("EingabeText").value;


if(Notiz.trim() !== "") {
    const ListElement = document.createElement("li");
    ListElement.textContent = Notiz;

    const loeschen = document.createElement("button");
    loeschen.textContent = "X";
    loeschen.style.marginLeft = "10px";

    
    loeschen.addEventListener("click", function(){  
      ListElement.remove();
    }); 
    ListElement.appendChild(loeschen);
    document.getElementById("Liste").appendChild(ListElement);
    document.getElementById("EingabeText").value = "";
 }
else {
    alert("Bitte eine Notiz eingeben!");
}

document.querySelector("#allesLoeschen").addEventListener("click", function() {
    const geloeschteListe = document.getElementById("Liste");
    geloeschteListe.innerHTML = "";
});

});