    function validation (){

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
            alert("veuillez remplir tous les champs")
        } else {
            $('#myModal').modal("show");
            $(".modal-body").html('Vous etes '
            +$("#genre ").val()+' '
            +$("#firstname ").val()+' '
            +$("#name").val()
            +' né le '
            +$("#date").val()
            +'<br/>'
            +'Vous etes '
            +$("#poste").val()
            +' au '
            +$("#club").val()
            +'<br/>'
            +'Vous êtes de nationalite '
            +$("#nationalite").val()
            +' et vous habitez au '+$("#adresse").val()
            +'<br/>'
            +'Vous êtes joueur '+$("#statut").val()
            +'<br/>'
            +"<img src='https://maps.googleapis.com/maps/api/staticmap?center="
            +$("#adresse").val() 
            +"&markers="
            +$("#adresse").val()
            +"&size=300x300'/>"); 

            $('#myModal').modal("show")



            
  
        }
    };