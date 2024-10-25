
document.querySelector('.task-input button').addEventListener('click', () => {
    const taskName = document.querySelector('.task-input input[name="taskName"]').value;
    const taskDate = document.querySelector('.task-input input[type="date"]').value;
    const taskTime = document.querySelector('.task-input input[type="time"]').value;
    const taskDescricao = document.querySelector('.task-input input[name="taskDescricao"]').value;
    
    if (taskName && taskDate && taskTime && taskDescricao) {
        const taskList = document.querySelector('.task-list ul');

        const newTask = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const label = document.createElement('label');
        label.innerHTML = `<h4>${taskName}</h4>
        <p>${taskTime} - ${taskDate}</p>
        <p>${taskDescricao}</p>`;

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                Swal.fire({
                    title: "Tem certeza?",
                    text: "Você não poderá reverter isso!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Sim, concluir isso!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        taskList.removeChild(newTask);
                        Swal.fire(
                            'Deletado!',
                            'Sua tarefa foi concluída.',
                            'success'
                        );
                    } else {
                        checkbox.checked = false; // Desmarcar o checkbox se não confirmar
                    }
                });
            }
        });

       
        newTask.appendChild(checkbox);
        newTask.appendChild(label);

        // Adicionar nova tarefa à lista
        taskList.appendChild(newTask);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Tarefa adicionada com sucesso!",
            showConfirmButton: false,
            timer: 1000,
        });

        document.querySelector('.task-input input[name="taskName"]').value = '';
        document.querySelector('.task-input input[type="date"]').value = '';
        document.querySelector('.task-input input[type="time"]').value = '';
        document.querySelector('.task-input input[name="taskDescricao"]').value = '';
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Preencha os campos corretamente!",
        });
    }
});
