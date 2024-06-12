class Panier{}
document.getElementById("ajouter").addEventListener("click",function(e){
    e.preventDefault();
    let quantite = document.getElementById("quantite").value;
    if(quantite===""){
        document.getElementById("quantite").classList.add("error")
    }
    else if(quantite.length>1 && quantite.length< 10){
        document.querySelector(".span-class").innerText="il faut entrer un entier entre 1 et 10"
        document.querySelector(".span-class").classList.remove("span-class")
    }
    else{
        document.getElementById("quantite").classList.remove("error") 
        document.getElementById("span-id").classList.add("span-class")
    }
})

// document.addEventListener("DOMContentLoaded",function remplirTvs(){
    
//     let request = new XMLHttpRequest();
//     request.open("GET","index.json",true);
//     request.onreadystatechange=function(){
//         if(this.readyState==4 && this.status==200){
//            let reponseData = JSON.parse(this.responseText); 
//            let Tvs = reponseData.Tvs
//            let tvs_content = ""
//            for(let i=0;i<Tvs.length;i++){
//                 tvs_content+=`<option value="${Tvs[i].nom}">
//                                     ${Tvs[i].nom}
//                              </option>`
//            }
//            document.getElementById("tv").innerHTML=tvs_content;
//         }
            

//     }
//     request.send()
// })
function ajouterPanier(){

}