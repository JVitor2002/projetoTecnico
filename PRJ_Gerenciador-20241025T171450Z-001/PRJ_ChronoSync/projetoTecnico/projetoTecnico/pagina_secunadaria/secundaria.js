
    // Função para adicionar uma nova tarefa
    document.querySelector('.task-input button').addEventListener('click', () => {
        const taskName = document.querySelector('.task-input input[type="text"]').value;
        const taskDate = document.querySelector('.task-input input[type="date"]').value;
        const taskTime = document.querySelector('.task-input input[type="time"]').value;

        if (taskName) {
            const taskList = document.querySelector('.task-list ul');

            // Criar um novo item de lista
            const newTask = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            const label = document.createElement('label');
            label.textContent = `${taskName} - ${taskDate} ${taskTime}`;

            // Adicionar checkbox e label ao item de lista
            newTask.appendChild(checkbox);
            newTask.appendChild(label);

            // Adicionar nova tarefa à lista
            taskList.appendChild(newTask);

            // Limpar os campos de entrada
            document.querySelector('.task-input input[type="text"]').value = '';
            document.querySelector('.task-input input[type="date"]').value = '';
            document.querySelector('.task-input input[type="time"]').value = '';
        } else {
            alert("Por favor, insira um nome para a tarefa.");
        }
    });

