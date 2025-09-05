//Esse load carrega o agendamento do dia

import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schadulesShow } from "../schedules/show.js"
import { hoursLoad } from "../form/hours-load.js"

//Seleciona o input de data
const selectedDate = document.getElementById("date");

export async function schedulesDay() {
    //Obtém a data do input
    const date = selectedDate.value;

    //Busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date });
    
    //Exibe os agendamentos
    schadulesShow({ dailySchedules });

    //Renderiza as horas disponíveis
    hoursLoad({ date });
}