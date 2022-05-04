// Solid 
// principior de boas práticas de programação
//  s- SRP - Single Responsibilit principle
// Funções bem escritas, devem ser mantidas simples, curtas e realizando um objetivo.

// Quando precisamos acessar uma função em outro arquivo, é necessário exportá-la.

// CRUD - CREATE READ Update Delete
export function addTask(db, title ="") {
    // criando uma nova tarefa
    const task = document.createElement("div");
    // const id = Number(db.lengt) + 1;
    task.classList.add("task");
    task.setAttribute("id", db.id);
    
    const taskBody = `
    <div> <input type="checkbox" id="check_${db.id}"/> </div>
    <div>
         <div><span class="title -task">
         ${
        // Operador Ternário >> If ? true : false
        //  condição ? verdadeiro : falso
            title ? title : db.title}
         </span></div>
    </div>
    <div>Star</div>
    `;

    task.innerHTML = taskBody;
    document.querySelector(".tasks").appendChild(task);
}
export function removeTask() {
    alert ("Removendo uma nova tarefa");
}

export function updateTask() {
    alert ("Alterando uma nova tarefa");
}
// colocamos o "chocolate" para explicar que pode ser qualquer nome
export function getAllTasks(chocolate) {
    chocolate.forEach((item) => {
        addTask(item);        
    });
}
export function getTaskByID() {
    alert ("Exibindo uma nova tarefa");
}