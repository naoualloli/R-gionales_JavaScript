
document.getElementById("enregistrer").addEventListener("click",function(e){
    e.preventDefault();
    let  matricule = document.getElementById("matricule").value;
    let matricules = /[1-8]{1,8}-[A-Z]-[0-9]{1,2}ig/
    if(matricule !== matricules){
        document.querySelector(".span-class1").innerText="le matricules est incorrect"
        document.querySelector(".span-class1").classList.remove("span-class1")
    }
    else{
        document.getElementById("span-id1").classList.add("span-class1")  
    }
    
    let marque = document.getElementById("marque").value;
    let marques=/[a-zA-Z]{4,14}/
    if(marque !== marques){
        document.querySelector(".span-class2").innerText="il faut saisie des caracteres entre 4 et 14"
        document.querySelector(".span-class2").classList.remove("span-class2")
    }
    else{
        document.getElementById("span-id2").classList.add("span-class2")  
    }
    let carburant = document.getElementById("carburant").value;

})
function vider(){
     matricule = document.getElementById("matricule").value="";
     marque = document.getElementById("marque").value="";
     modele = document.getElementById("modele").value="";
     AnnePro = document.getElementById("AnnePro").value="";
     carburant = document.getElementById("carburant").value="";
     prix = document.getElementById("prix").value="";
    
}


















