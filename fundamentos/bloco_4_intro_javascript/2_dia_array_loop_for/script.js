let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);




/* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.IndexOf('Portifólio');

console.log(indexOfPortfolio);
  */



let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push("contato");

console.log(menu);




/* let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(index =0; index < groceryList.length; index++){
    console.log(groceryList[index]);
} */
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let List of groceryList){
    List+=" feijão preto"
    console.log(List);
}


let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let nomes of names){
    console.log(nomes)
}


