import { addTask, getAllTasks} from "./utils/domFuncions.js";


// exemplo de array
// const frutas =['maça', 'banana', 'abacaxi',"abacate"];

// // frutas[3]
// // frutas.length ***para vê a quantidade de elementos que eu tenho na matriz
// // frutas[frutas.length -1]; ***para vê qual a ultimo elemento da array
// // console.log(frutas.at(-1)); ***para vê qual a ultimo elemento da array

// console.log(frutas.at(-1));

// // Criando um objeto é um conjunto de atributos/propriedade/valores e metodos/açoes/funções
// criando um objeto literal é uma estrutura, instancia de um objeto é tipo JS.. e sempre vai ser **chaveado** assim dentro um objeto podemos temos sempre a probriedade + valor, e essas probriedades podem ter arrays dentro de um objeto.

// const dados = {
//         nome: "Isadora Roddrigues"
//        idade: 36;
//        programador: true,
//        acao: () => {
//            console.log("Executando uma aççao")
//        },
//     }
// // }

const db = [
    {
        id:1,
        title: 'concluir App Conexão Arte',
        steps: [
            { step: "Ajustar textos"},
            { step: "Trocar imagens para imagens públicas"},
            { step: "Publicar no Expo"},
            { step: "Publicar no Expo Store Connect"},
        ],
        done: false,
        dueDate: "2022-05-06",
        reminder: "2022-05-02 10:00",
    },

    {
        id:2,
        title: 'Aula 4- Fiap - Avanade',
        steps: [{ step: "Atributos Globais"}, { step: "Estrutura CSS"}],
        done: false,
        dueDate: "2022-05-06",
        reminder: "2022-05-02 10:00",
    },
];
getAllTasks(db);

// console.log(db[0].title);

// DOM - Document Object Model - É o JavaScript acessando o HTML e manipulando ele.
// HTML ele é compilado pelo navegador em uma árvore de comandos, chamada DOM.
// a tag newtask procura um id ou classe no arquivo html. para procurar id é para ser usado um "#" e uma classe usa "."
const newTask = document.querySelector("#inputTxtNewTask");
const form = document.querySelector("#addNewTask");
form.addEventListener("submit", (e) => {
    e.preventDefault();
});
newTask.addEventListener("keyup", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.key == "Enter") {
        // Se new.Task.value for ao contrário de true. Ou seja, se for falso estará vazio.
        if (!newTask.value) {
            alert("Digite uma nova tarefa, para adicionar.");
        } else {
        // alert(newTask.value);
        // .push >>> tras as informações em forma de objeto para aparecer na tela. 
        // colocar a data do dia vamos utilizar uma constante 

        const d = new Date();
        const today = `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`
        db.push({
             id: Number(db.length) +1,
             title: newTask.value, 
             done:false,
             dueDate: today,
            });
// para somente adicionar o que foi selecionado vc tem que chamar a funsção no JS e não adicionar nenhum item no html.
            document.querySelector(".tasks").innerHTML ="";
            getAllTasks(db);
        
        newTask.value = "";
        console.log(db);
     }
    }
});




