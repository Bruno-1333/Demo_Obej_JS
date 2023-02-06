class Employe {

    constructor(nom = "Nom", prenom ="Prenom", age = 20, dateNaissance = "2000-02-02") {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.dateNaissance = dateNaissance;
    }

    toString() {
        return this.prenom + " " + this.nom + "\n" + this.dateNaissance + " " + this.age + " ans."
    }
}

function creerEmployer(){

    //const emp2 = new Employe();
    //document.getElementById("employe").innerText = emp2

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let age = document.getElementById("age").value;
    let date = document.getElementById("date").value;

    const employe = new Employe(nom, prenom, age, date);
    let newSpan = document.createElement("p");
    newSpan.innerText = employe;
    document.getElementById("employe").append(newSpan);
}
