// pegar os valores dos input
let nome_cli=document.getElementById("nome_cli");
let cnpj=document.getElementById("cnpj");
let quant_pecas=document.getElementById("quantp");
let v_unitario=document.getElementById("quant_u");
let data_e=document.getElementById("data1");
let data_f=document.getElementById("data2");
// botao enviar
let btnEnviar = document.getElementById("btnenviar");
// botão calcular
let btncalc = document.getElementById('calc')

// div res
let divres = document.getElementById("res")

let tot = parseInt(quant_pecas.value) * parseInt(v_unitario.value);

// divtot
let divtot = document.getElementById('tot');

//div calcdata

const inputstart = document.querySelector("#data1");
const inputend = document.querySelector("#data2");
let divcalcdata = document.querySelector("#calcdata")
let btntotdias =document.querySelector("#totdias")
    

function calcula_valor(){
    let tot = parseInt(quant_pecas.value) * parseInt(v_unitario.value);
    divtot.innerText = `valor total:R${tot},00`

    
}

function CalcDate(){
    let btntotdias =document.querySelector("#totdias")
    console.log('clicou')
    let start = inputstart.value;
    let end = inputend .value;

    start = new Date(start)
    end = new Date(end)

    let difIntime = Math.abs(end-start)
    let timeInoneday = 1000 * 60 * 60* 24
    let diffinDays = difIntime/timeInoneday

    return divcalcdata = diffinDays

}


function enviar_info(tot){
    divres = document.getElementById("res")
    divres.innerText = "Nome do cliente: " + nome_cli.value + "\n" + "CNPJ: " + cnpj.value  + "\n" + "Quantidade de peças: " + quant_pecas.value +  "\n" 
    + "Valor unitário: " + v_unitario.value + "\n"  + "Data Entrada: " + data_e.value + "\n" + "Data_saída: " + data_f.value 
   divres.style.color = "blue";
   divtot.style.color = "blue";
}

// function calcula_valor(){
//     let tot = parseInt(quant_pecas.value) * parseInt(v_unitario.value);
//     divres.innerText = tot
//     console.log(tot)
// }
