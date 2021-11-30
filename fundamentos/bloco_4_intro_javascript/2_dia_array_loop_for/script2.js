let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for( let numeros of numbers){
    console.log(numeros);
       
}

for(let index= 0; index < numbers.length; index++){
    soma += numbers[index];
    }console.log(soma);
     
    let media = soma/numbers.length ;
    console.log(media);

    if(soma >20){
        console.log("valor maior que vinte")
    }
    else{
        console.log("valor menor que vinte")
    }
   
 console.log(Math.max(...numbers))   ;
 console.log(Math.min(...numbers))   ;

let impar= 0;
 for(let index= 0; index < numbers.length; index++){
     if(numbers[index] %2 !== 0){
         impar += 1
     }
    }
     if(impar %2 ===0){
         console.log("Não tem valor ímpar");
     }
     else{
         console.log(impar);
     }


     let umAoVinteCinco= [];
     
     for(let index = 1; index <= 25; index+= 1){
         umAoVinteCinco.push(index)
     }
 
console.log(umAoVinteCinco);



let numeros= [];

for(let index =1; index <=100; index +=1){
    numeros.push(index);
}
console.log(numeros);

for(let index=0; index < umAoVinteCinco.length; index+=1){
    console.log(umAoVinteCinco[index]/ 2)
}
