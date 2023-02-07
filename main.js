class Employe {
    // Construtor da classe Employe
    // Os valores padrão são definidos para os atributos

    constructor(nom = "Nom", prenom ="Prenom", age = 20, dateNaissance = "2000-02-02") {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.dateNaissance = dateNaissance;
    }

    // Método toString retorna uma string formatada com os atributos do objeto
    toString() {
        return this.prenom + " " + this.nom + "\n" + this.dateNaissance + " " + this.age + " ans."
    }
}
// Função creerEmployer cria um novo objeto Employe
// com base em valores inseridos no HTML
function creerEmployer(){

    // Obtém os valores do formulário HTML usando document.getElementById e .value
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let age = document.getElementById("age").value;
    let date = document.getElementById("date").value;
    // Cria um novo objeto Employe com os valores obtidos do formulário
    const employe = new Employe(nom, prenom, age, date);

    // Cria uma nova tag <p> e define seu conteúdo como a string retornada pelo método toString
    let newSpan = document.createElement("p");
    newSpan.innerText = employe;

    // Adiciona a nova tag <p> ao elemento HTML com o ID "employe"
    document.getElementById("employe").append(newSpan);
}
