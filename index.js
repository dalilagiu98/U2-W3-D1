// CREO UNA CLASSE COSTRUTTORE USER

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  // generazione funzione
  compareAges(user2) {
    if (this.age > user2.age) {
      return `${this.firstName} is older than ${user2.firstName}`;
    } else {
      return `${user2.firstName} is older than ${this.firstName}`;
    }
  }
}

// creazione di due utenti

const user1 = new User("dalila", "giurgola", 25, "Cellino");
const user2 = new User("pippo", "rossi", 23, "Roma");
console.log(user1);
console.log(user2);

// utilizzo del metodo compareAges
const risultatoConfronto = user1.compareAges(user2);

// Log del risultato del confronto
console.log(risultatoConfronto);
