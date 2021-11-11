// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

const Name = prompt(`Digita il tuo nome`);
console.log(Name);
const lastname = prompt(`Digita il tuo cognome`);
console.log(lastname)
const color = prompt(`Digita il tuo colore preferito`);
console.log(color)

const Password =`${Name}  ${lastname} ${color} 21`;
console.log(Password);

document.getElementById(`user-password`).innerHTML = Password;