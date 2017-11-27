function anis(){

           // Check browser support
if (typeof(Storage) !== "undefined") {

        localStorage.setItem("genre", $("#genre").val());
        document.getElementById("ici").innerHTML = localStorage.getItem("genre");
        
        localStorage.setItem("nom", $("#name").val());
        document.getElementById("ici").innerHTML = localStorage.getItem("nom");

        localStorage.setItem("prenom", $("#firstname").val());
        document.getElementById("ici").innerHTML = localStorage.getItem("prenom");

        localStorage.setItem("date", $("#date").val());
        document.getElementById("ici").innerHTML = localStorage.getItem("date");
        
         localStorage.setItem("poste", $("#poste").val());
        document.getElementById("ici").innerHTML = localStorage.getItem("poste");
        
         localStorage.setItem("nationalite", $("#nationalite").val());
        document.getElementById("ici").innerHTML = localStorage.getItem("nationalite");
        
        localStorage.setItem("statut", $("#statut").val());
        document.getElementById("ici").innerHTML = localStorage.getItem("statut");
        
        localStorage.setItem("club", $("#club").val());
        document.getElementById("ici").innerHTML = localStorage.getItem("club");
        
        localStorage.setItem("niveau", $("#niveau").val());
        document.getElementById("ici").innerHTML = localStorage.getItem("niveau");

        localStorage.setItem("adresse", $("#adresse").val());
        document.getElementById("ici").innerHTML = localStorage.getItem("adresse");

        localStorage.setItem("mail", $("#mail").val());
        document.getElementById("ici").innerHTML = localStorage.getItem("mail");
 } else {
        document.getElementById("ici").innerHTML = "Sorry, your browser does not support Web Storage...";

 }};