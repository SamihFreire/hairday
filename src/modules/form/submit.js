import dayjs from "dayjs"

const form = document.querySelector("form");
const selectDate = document.getElementById("date");

//Date atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual e define a data mínima como sendo a data atual
selectDate.value = inputToday
selectDate.min = inputToday;

form.onsubmit = (event) => {
    // Previne o comportamento padrão de carregar a página
    event.preventDefault();
}