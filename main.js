const taskForm = document.getElementById('todoForm');
const taskList = document.getElementById('listaTarefas');

taskForm.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nomeTarefa = document.getElementById('nomeTarefa').value;
    const descricaoTarefa = document.getElementById('descricaoTarefa').value;
    const novaTarefa = { nome: nomeTarefa, descricao: descricaoTarefa };
    salvarTarefa(novaTarefa);
    taskForm.reset();
});

const salvarTarefa = (tarefa) => {
    const tarefa = JSON.parse(localStorage.getItem('tarefa')) || [];
    tarefa.push(tarefa);
    localStorage.setItem('tarefa', JSON.stringify(tarefa));
    carregarTarefas();
};