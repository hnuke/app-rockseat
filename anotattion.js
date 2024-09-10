// hello world

let msg = "Hello, world!" // a variavel de tipo let permite o dado da variavel trocar de tipo
msg = 1023;

const msg1 = 10; // o tipo de variavel Const não permite a variavel o dado trocar de tipoter seu valor trocado

console.log(msg);


// arrays, objetos

let metas = ["aluno", "prof"];

console.log(metas[0]);

// objetos

let meta = {
    value:"Ler um livro por mês",
    checked: false,
    isChecked: () => {}, // método
    print: () => {
        console.log(this);
    }
}

console.log(meta.value + " , checado: " + meta.checked);


// function  
                    // array function
const criarMeta = () => {}


function criarMeta(){

}