const a= 4;
const b= 8;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
 
if(a > b){
    console.log(a)
}
else{
    console.log(b)
}

const c= 8;
const d= 4;
const e= 41;

if(c > d && c > e){
    console.log(c);
}
if(d > c && d > e){
    console.log(d);
}
else {
    console.log(e)
}

const r= 78;
if(r > 0){
    console.log("positive");
}
else{
    console.log("negative");
}

const angulo_a= 90;
const angulo_b= 45;
const angulo_c= 45;
let soma= 458;

if(soma= 180){
    console.log(true);
    }
    else{
        console.log(false);
    }


 let pecaDeXadrez= "bispo";
 switch(pecaDeXadrez){
     case "rei":
         console.log("horizontal, vertical e diagonal");
         break;
         case "dama":
            console.log("ao longo da horizontal, vertical e diagonais");
            break;
            case "bispo":
                console.log("ao longo da diagonal");
                break;
                case "cavalo":
                    console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”");
                    break;
                    case "torre":
                        console.log("movimenta-se pela vertical ou horizontal");
                        break;
                        case "peão":
                            console.log("horizontal, vertical e diagmovimenta-se apenas uma casa para frente e somente captura outras peças na diagonal");
                            break;
                            default:
                                console.log("não sei");
 }  
 
 





let nota= 87;

if(nota>= 90){
    console.log("A");
}
if(nota>= 80 && nota<90){
    console.log("B");
}if(nota>= 70 && nota<80){
    console.log("C");
}if(nota>= 60 && nota<70){
    console.log("D");
}
if(nota>= 50 && nota<60){
    console.log("E");
}
else{
    console.log("F");
}


const t= 7;
const g= 4;
const w= 65;

if(t%2==0|| g%2==0 || w%2==0){
    console.log(true);
}
else{
    console.log(false);
}

const p= 7;
const o= 4;
const x= 68;

if(!p%2==0|| !o%2==0 || !x%2==0){
    console.log(true);
}
else{
    console.log(false);
}


const custoDoProduto= 60;
const valorVenda= 120;
let numeroDeVendas= 7;
const custoTotal = custoDoProduto + (custoDoProduto * 0,2);
let lucro= numeroDeVendas * (valorVenda - custoTotal);

console.log(lucro)



let salarioBruto= 5000;
let inss;
let ir;
let salarioLiquido;

salarioLiquido= salarioBruto- inss - ir;

if(salarioBruto<= 1556,94){
    inss= salarioBruto * 0,08;
}
if(salarioBruto> 1556,95 && salarioBruto<= 2594,92){
    inss= salarioBruto * 0,09;
}
if(salarioBruto> 2594,92&& salarioBruto<= 5189,82){
    inss= salarioBruto * 0,11;
}
else{
    inss= 570,88;
}


if(salarioBruto<= 1903,98)[
    ir= 0,
]
if(salarioBruto> 1903,98 && salarioBruto<= 2826,65){
    ir= (salarioBruto*0,075) +142,80;
    }
    if(salarioBruto> 2826,65 && salarioBruto<= 3751,05){
        ir= (salarioBruto*0,15) +354,80;
        }
        if(salarioBruto> 3751,05 && salarioBruto<= 4664,68){
            ir= (salarioBruto*0,225) +636,13;
            }
            else{
                ir= (salarioBruto*0,275) +869,36;
            }

            console.log(inss);



