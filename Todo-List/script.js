const lista = [];
const inputEntrada = document.getElementById('entrada');
const btn = document.getElementById('btn');
const btnClean = document.getElementById('btnClean');
const ul = document.getElementById('imprimir');
const inputFiltro = document.getElementById('filtro');
const btnFilter = document.getElementById('btnFilter');
const ulFiltro = document.getElementById('imprimirFiltro');
let filtro = [];

// Adiciona tarefa
const adicionarTarefa = function(tarefa){
    lista.push(tarefa);
}

// Exibe lista principal
const Exibirlista = function(){
    ul.innerHTML = "";

    lista.forEach((item, index) => {
        //criando elementos html para gerar a lista e não ter que recarregar toda vez que esse lop for iniciado
        let li = document.createElement('li');
        let button = document.createElement('button');

        button.innerText = '❌';
        button.classList.add("excluir");
        button.setAttribute("data-index",index);
        // fazendo li receber o botão de excluir item
        li.innerText = item;

        //criando botão e li
        li.appendChild(button);
        ul.appendChild(li);
    });

    excluirItem();
}


// Filtra tarefas
const filtrandoTarefas = function(tarefa){
    filtro = lista.map((item, index) => ({ item, index }))
        .filter(obj => obj.item.toLowerCase().includes(tarefa.toLowerCase()));
}


// Exibe lista filtrada
const ExibirlistaFiltrada = function () {
    ulFiltro.innerHTML = "";
    
    filtro.forEach((obj) => {
        let li = document.createElement('li');
        let button = document.createElement('button');

        button.innerText = '❌';
        button.classList.add("excluir");
        button.setAttribute("data-index", obj.index);
        li.innerText = obj.item;

        li.appendChild(button);
        ulFiltro.appendChild(li);

    });
    
    excluirItem();
}

const excluirItem = function(){
    // Botões de excluir da lista principal
    ul.querySelectorAll('.excluir').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');

            lista.splice(index,1);

            Exibirlista();

            // Atualiza o filtro (se estiver ativo)
            if(inputFiltro.value.trim() !== ""){
                filtrandoTarefas(inputFiltro.value.trim());
                ExibirlistaFiltrada();
            }
            else{
                ulFiltro.innerHTML = ""; 
            }
        });
    });

    // Botões de excluir da lista filtrada
    ulFiltro.querySelectorAll('.excluir').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');

            lista.splice(index, 1);

            Exibirlista()

            if(inputFiltro.value.trim() !== ""){
                filtrandoTarefas(inputFiltro.value.trim());
                ExibirlistaFiltrada();
            } else {
                ulFiltro.innerHTML = "";
            }
        });
    });
}


// Eventos
btn.addEventListener('click', () => {
    let tarefa = inputEntrada.value.trim();

    if(tarefa){
        adicionarTarefa(tarefa);
    }

    Exibirlista();

    inputEntrada.value = "";
    inputEntrada.focus();
});

btnClean.addEventListener('click', () => {
    lista.length = 0;
    Exibirlista();
    ulFiltro.innerHTML = ""; // limpa também o filtro
});

btnFilter.addEventListener('click', () => {
    let filtro = inputFiltro.value.trim();

    if(filtro){
        filtrandoTarefas(filtro);
        ExibirlistaFiltrada();
    } else {
        ulFiltro.innerHTML = "<li><strong>Digite algo para filtrar</strong></li>";
    }

    inputFiltro.focus();
});
