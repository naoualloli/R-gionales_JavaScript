class Achat{
    constructor(code,titre,prix,description,categorie){
        this.code = code,
        this.titre = titre,
        this.prix = prix,
        this.description = description,
        this.categorie = categorie
    }
}
let achat1 = new Achat("b2365","mouse",2000,"mouse_move","materielle")
let achat2 = new Achat("n3365","kebord",1000,"kebord_move","materielle")
console.log(achat1)
console.log(achat2)

let Achats=[]

document.getElementById("sauvegarder").addEventListener("click",function(e){
    e.preventDefault();
    let code = document.getElementById("code").value;
    let titre = document.getElementById("titre").value;
    let prix = document.getElementById("prix").value;
    let description = document.getElementById("description").value;
    let categorie = document.getElementById("categorie").value;

    let achat3 = new Achat(code,titre,prix,description,categorie)
    Achats.push(achat3)
    console.log(achat3)

})

document.getElementById("vider").addEventListener("click",function(e){
    e.preventDefault();
    let code = document.getElementById("code").value="";
    let titre = document.getElementById("titre").value="";
    let prix = document.getElementById("prix").value="";
    let description = document.getElementById("description").value="";
    let categorie = document.getElementById("categorie").value="";


})
let curentAchat;  
document.getElementById("afficher-data").addEventListener("click",function(e){
    e.preventDefault();
    let content = "";
    for(i=0;i< Achats.length;i++){
        content += `<tr>
                        <td>${Achats[i].code}</td>
                        <td>${Achats[i].titre}</td>
                        <td>${Achats[i].description}</td>
                        <td>${Achats[i].prix}</td>
                        <td>${Achats[i].categorie}</td>
        
                   </tr>`;        
    }
    document.getElementById("data").innerHTML = content;


    let activite_html = document.getElementById("achats-table");
    for(let j=0;j< activite_html.rows.length;j++){
        activite_html.rows[j].addEventListener("click",function(e){

            for(let r=0;r<activite_html.rows.length;r++){
                activite_html.rows[r].classList.remove("table-success")
            }
            activite_html.rows[j].classList.add("table-success");

            curentAchat = e.currentTarget.getElementByTageName("td")[0].innerHTML;
        })
           
        
        
    }
})
document.getElementById("supprimer").addEventListener("click",function(e){
    e.preventDefault();
    Achats = Achats.filter((item)=>{
        return item.code != curentAchat;
    })
})

document.addEventListener("DOMContentLoaded",function(){
    let request = new XMLHttpRequest();
    request.open("GET","categories.json",true);
    request.onreadystatechange = function(){
        if(this.readyState==4 && this.status ==200){
            let reponseData = JSON.parse(this.responseText)
            categorie = reponseData.categorie
            let categorie_content = ""
            for(let i=0;i<categorie.length;i++){
                categorie_content += `<option value="${categorie[i].libelle}">
                                            ${categorie[i].libelle}
                                     </option>`
            }
            document.getElementById("form-select").innerHTML = categorie_content;
        }
    }
    request.send()
})
















