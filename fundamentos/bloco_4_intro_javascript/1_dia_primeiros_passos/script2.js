let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos'}

const patientEmail = 'ana@email.com';
console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);


const base= 5;
const altura= 8;
const area= base * altura;
console.log(area);
const perimetro= 2 * (base + altura);
console.log(perimetro);


const nota= 87;
if (nota >= 80){
  console.log("Parabéns, vc foi aprovado(a)");
}
else if(nota <80 && nota >= 60){
  console.log("Você está na lista de espera");
}
else{
  console.log("Você foi reprovado(a)");
}

const currentHour= 4;
let message;
 
if (currentHour >=22){
  message = "Não deveríamos comer nada, é hora de dormir";
}
else if(currentHour >=18 && currentHour< 22){
  message= "Rango da noite, vamos jantar" ;
}
else if(currentHour>=14 && currentHour<18){
  message="Vamos fazer um bolo pro café da tarde?";
}
else if(currentHour >=11 && currentHour< 14){
  message="Hora do almoço";
}
else if (currentHour>=4 && currentHour<11){
  message= "Hmmm, cheiro de café recém passado";
}
console.log(message);

let weekDay= "domingo";

if(weekDay== "sábado" || weekDay== "domingo"){
  console.log("FINALMENTE, descanso merecido");
}
else{
  console.log("Oba, mais um dia de aprendizado na TRYBE >:D");
}

let statusCandidato= "nao sei"

switch(statusCandidato){
  case "aprovado";
  console.log("aprovado");
  break;

case "lista";
  console.log("lista");
  break;

case "reprovada":
  console.log("reprovada");

  break;

default:
console.log("Não se aplica");

}

