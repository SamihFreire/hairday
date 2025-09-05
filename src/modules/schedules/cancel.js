import { schedulesDay } from "./load.js"
import { schedulesCancel } from "../../services/schedules-cancel.js"
const periods = document.querySelectorAll(".period");

//Gerar evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
    //Captura o evento de clique na lista
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")) {
            //Obtém a li pai do elemento clicado
            const item = event.target.closest("li");

            //Pega o ID do agendamento para remover
            const { id } = item.dataset;
            
            //Verifica se tem ID selecionado
            if (id) {
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?");
                
                if(isConfirm){
                    //Faz a requisição na API para cancelar
                    await schedulesCancel({ id });

                    //Recarrega os agendamentos
                    schedulesDay();
                }
            }
        }
    })
})