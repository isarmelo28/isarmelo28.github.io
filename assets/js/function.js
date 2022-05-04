// Função nominal com parametro obrigatorio

// underfined é um tipo de valor que não existe
// null é um tipo de valor inválido

// function escreve (nome, sobrenome) {
//     const a = sobrenome;
//     if (a == null) {    usar dois iguais pode dá coeção e tipo
//         console.log ("a é nulo");
//         console.log("Valor de a", a, "\n");
//         console.log("Valor de sobrenome", sobrenome, "\n");
//     }
//     console.log(`${nome} ${sobrenome}`)
// }


// ua função sem return é uma subortina.
function escreve (nome, sobrenome) {
    const a = sobrenome;
    if (a === undefined) {
        console.log ("a é underfined");
        console.log("Valor de a", a, "\n");
        console.log("Valor de sobrenome", sobrenome, "\n");
    }
    console.log(`${nome} ${sobrenome}`)
}

escreve ("Isadora");

// uma função sem return é retorna valor
function soma(a,b) {
    return Number(a) + Number(b);
}

const resultado = soma(1,2);

console.log(soma(3,5));
// OUTRA FORMA DE DETERMINAR UMA FUNÇÃO 
// expressão de função = uma função é atribuida a um contexto por exemplo uma variável
const exibe = function(x) {
    return `Exebindo parâmetro ${x}`;
};

console.log(exibe("chocolate"));














// O java todo ano tem versões diferentes
// function andar(){ this.valocidade = 1;}


// this. variável interna do JavaScript
// this ele tem comportamentos diferentes dependendo de onde ele está sendo usado
// refere-se a um objeto

// objeto global
let empresa = this; // quando eu coloco o this em um let, ele representa um obejto global que nesse caso do navegador o objeto globar será o window

// quando eu uso o estrito sempre será undefined (não existe).
console.log("Quem é o this no contexto global", empresa);

// this dentro de uma função - também é um objeto global.
function globalobj() {
    // "use strict" ; quando usa strict o this vira o undefined
    return this;
}
document.write("<h2>escrevendo no console</h2>"); // essa linha só para mostrar que 
document.write(globalobj());

// globalobj().alert("vai corinthias");

// quando eu crio o this dentro de um objeto, o this é o obejto
const aluno ={
    nome: "Isadora",
    matricula: 123,
    executar: function() {
        return this.nome;
    }
};

console.log(aluno.executar());

// o this tambem pode ser um evento, quando ele é um evento ele retorna no console o ELEMENTO ESTÁ NA FUNCTION HTML (H1)




// Arrow Function -Função de seta, ela é mais curta, não tem o próprio contexto.

const novaFunção = (a, b) => {
    console.log("Chamando de dentro de um arrow function")
    // Interpolação de variáveis é chamar uma variável dentro de uma string; Template String.
    
    console.log(`Exibindo o valor de ${a}`);
    // concatenação de variáveis.

    console.log("Exibindo o total de alunas" + b.length);
     // identação é um codigo escrito de forma legível, que respeita hieraquia { dá um espaço, para facilitar a leitura do código. Um código identado é uma das maneiras de manter um cofigo limpo.}

};

// const funcao3 = (a) =>
//     console.log(`Exebindo o total de ${b}`)

//     funcao3 ("Isadora Rodrigues")



const carros = (primeiro, segundo, ...restante) => {
    console.log(
        `Os carros informados foram: ${primeiro}, ${segundo} - ${restante}. Todos os demais são ${restante.join( ", " )}`
    );
};

carros (
    "isadora",
    "heitor",
    "DelREI",
    "Monza",
    "Fiar 147",
    "BMW"
);

const frutas = ["Guaraná", "Cupuaçu", "Açai" ];
const todasFrutas = [...frutas, "banana", "abacaxi"];

console.log("Todas as frutas", todasFrutas);

// Const{password, ...result} = await user.findyById(50)
// password
// name, email, id, salary

// destructuring assignment
// Atribuição por desestruturação.

let a = 50;
let b = 100;

const [primeiro, segundo, terceiro, ...resto] = [a, b, 200, 1000, 5000];
console.log("Exibindo o primeiro: ", primeiro);
console.log("Exibindo o resto: ", resto);

const meuArray = [10, 20, 30, 40];
console.log(meuArray, meuArray.join("-"));

// const [p, s, t, q] = meuArray;
// console.log("Exibindo o quarto elemento", q);

const [q, ...p] = meuArray.reverse();
console.log(p.reverse)








/*


// // Onde o JavaScript está sendo executado? Qual é o contexto?
// // Contexto: Navegador. This depende do contexto
// // no navegador o this é a window

// // mas se vc estiver usando a versão escrita do javasripit o this não será a window.

// function quemEoThis() {
//     console.log(this === window);
// }

// function quemEoThisEscrito() {
//         // quando queremos usar o javaScript na versão mais polida, o use strict deve ser informado no início.
//     "use scrict";
//     console.log("Scrict");
//     console.log(this === window);
// }

// quemEoThis();
// quemEoThisEscrito();

// function Exibe2() {
//     this.a =50;
// }

// const novoObjeto = new Exibe2();
// console.log(novoObjeto.a)
*/