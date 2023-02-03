class Employe {
    constructor(nom, prenom, age, dateNaissance) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.dateNaissance = dateNaissance;
    }

    toString() {
        return this.prenom + " " + this.nom + "\n" + this.dateNaissance + " " + this.age + "ans " + this.dateNaissance;
    }
}

function creerEmployer(){
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let age = document.getElementById("age").value;
    let dateNaissance = document.getElementById("date").value;

    const employe = new Employe(nom,prenom,age,dateNaissance)
    let nweSpan = document.createElement("p");
    newSpan.innerText = employe;
    document.getElementById("employe").append(newSpan);

}
