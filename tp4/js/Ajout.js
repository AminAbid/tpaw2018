 function ajout (){
    if ($("#genre").val() == ""
    || $("#name").val() == ""
    || $("#firstname").val() == ""
    || $("#date").val() == ""
    || $("#poste").val() == ""
    || $("#nationalite").val() == ""
    || $("#statut").val() == ""
    || $("#club").val() == ""
    || $("#niveau").val() == ""
    || $("#adresse").val() == ""
    || $("#mail").val() == "") {
    alert("certaines informations sont manquantes !! veuillez les completer, merci ")
} else {

 document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
 '<tr><td>'+$("#genre").val()
 +'</td><td>'+$("#name").val()
 +'</td><td>'+$("#firstname").val()
 +'</td><td>'+$("#date").val()
 +'</td><td>'+$("#poste").val()
 +'</td><td>'+$("#nationalite").val()
 +'</td><td>'+$("#statut").val()
 +'</td><td>'+$("#club").val()
 +'</td><td>'+$("#niveau").val()
 +'</td><td> <a href="https://www.google.fr/maps/place/">'+$("#adresse").val()
 +'</a></td><td><a href="https://www.google.fr/maps/place/">'+$("#mail").val()+'</a></td></tr>'
 
 
 document.getElementById("confirmation").removeAttribute("hidden");
 document.getElementById("confirmation").innerHTML = " Bravo le formulaire est sauvgardé ";


 };
};