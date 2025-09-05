import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

//Date atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual e define a data mínima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
    // Previne o comportamento padrão de carregar a página
    event.preventDefault();

    try {
        //Recuperando o nome do cliente
        const name = clientName.value.trim();

        //Se a variável name tiver valor vai retornar true se for vazia retornar falso
        if(!name) { //Se name vazia entra no if
            return alert("Informe o nome do cliente!");
        }

        //Recupera o horário selecionado
        const hourSelected = document.querySelector(".hour-selected");
        
        //Recuperando o horário selecionado
        if(!hourSelected) {
            return alert("Selecione a hora!");
        }

        //Recuperar somente a hora
        const [hour] = hourSelected.innerText.split(":");
        console.log(hour);

        //Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour");
        
        
        //Gerar um IF
        const id = new Date().getTime();

        await scheduleNew({ //Função de POST na API para salvar o agendamento
            id, name, when
        })

        //Recarregar os agendamentos
        await schedulesDay();

        //Limpa o input de nome do cliente
        clientName.value = "";
    } catch (error) {
        alert("Não foi possível realizar o agendamento.")
        console.log(error)
    }
}