// CREO DELLE COSTANTI CON I VALORI DELL'INPUT

const inputName = document.getElementById("inputName");
const inputOwner = document.getElementById("inputOwner");
const inputSpecies = document.getElementById("inputSpecies");
const inputBreed = document.getElementById("inputBreed");
// e il BOTTONE
const submitButton = document.querySelector("form button");

// CREO UN ARRAY DI OGGETTI ALL'INIZIO VUOTO PER SALVARE I DATI DEL FORM IN MEMORIA

const petData = [];

// INIZIALIZZO UNA CLASSE PET CHE RACCOLGA I DATI RECUPERATI DAL FORM
class Pets {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  hasSameOwner(anotherPet) {
    return this.ownerName.toLowerCase() === anotherPet.ownerName.toLowerCase();
  }
}

// CREO LE CARD

const petCard = function () {
  const row = document.getElementById("pet-card");
  row.innerHTML = "";

  petData.forEach((pet) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col");

    newCol.innerHTML = `<div class="card">
    <div class="card-body">
      <h5 class="card-title">Pet Name</h5>
      <p class="card-text" id="pet-name">${pet.petName}</p>
      <h5 class="card-title">Owner Name</h5>
      <p class="card-text" id="owner-name">${pet.ownerName}</p>
      <h5 class="card-title">Species</h5>
      <p class="card-text" id="pet-species">${pet.species}</p>
      <h5 class="card-title">Breed</h5>
      <p class="card-text" id="pet-breed">${pet.breed}</p>
    </div>
  </div>`;
    row.appendChild(newCol);
  });
  // svuoto il form
  inputName.value = "";
  inputOwner.value = "";
  inputSpecies.value = "";
  inputBreed.value = "";
};

// ASSEGNO COMPORTAMENTO AL SUBMIT DEL FORM
const petForm = document.getElementById("form");
petForm.addEventListener("submit", function (e) {
  e.preventDefault(); //ferma la pagina dal refresh

  const newPet = new Pets(
    inputName.value,
    inputOwner.value,
    inputSpecies.value,
    inputBreed.value
  );

  // Verifica se esiste già un animale con lo stesso padrone
  const hasSameOwner = petData.some((pet) => newPet.hasSameOwner(pet));

  if (!hasSameOwner) {
    petData.push(newPet);
    petCard();
  } else {
    alert("Un animale con lo stesso padrone esiste già!");
  }

  petData.push(newPet);
  petCard();
});
