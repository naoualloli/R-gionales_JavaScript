document.getElementById("vider").addEventListener("click",function(e){
    e.preventDefault();
    let code = document.getElementById('code').value="";
    let titre = document.getElementById('titre').value="";
    let description =document.getElementById('description').value="";
    let Prix =document.getElementById('prix').value="";
    let categorie =document.getElementById('categorie').value="";
})
const produits = [];
document.getElementById("sauvegarder").addEventListener("click",(e)=>{
    e.preventDefault();
    let produit = {code:"",titre:"",description:"",Prix:null,categorie:""}
    
    let code = document.getElementById('code').value;
    let titre = document.getElementById('titre').value;
    let description =document.getElementById('description').value;
    let Prix =Number(document.getElementById("prix").value);
    let categorie =document.getElementById('categorie').value;

    produit.code = code;
    produit.titre = titre;
    produit.description = description;
    produit.Prix = Prix;
    produit.categorie = categorie;

    produits.push(produit);
    console.log(produits)
})
document.getElementById("afficher-data").addEventListener("click",function(e){
    e.preventDefault();

        produits.map((produit)=>{
            let ligne = document.createElement("tr");
            document.getElementById("data").append(ligne);
            let td_code = document.createElement("td");
            td_code.innerHTML = produit.code;
            ligne.append(td_code);
            let td_titre = document.createElement("td");
            td_titre.innerHTML = produit.titre;
            ligne.append(td_titre);
            let td_description = document.createElement("td");
            td_description.innerHTML = produit.description;
            ligne.append(td_description);
            let td_Prix = document.createElement("td");
            td_Prix.innerHTML = produit.Prix;
            ligne.append(td_Prix);
            let td_categorie = document.createElement("td");
            td_categorie.innerHTML = produit.categorie;
            ligne.append(td_categorie);


        })
        

    console.log(produits)

    
     
})
document.getElementById("supprimer").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("data").remove()
})
