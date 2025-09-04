import { schedulesDay } from "./schedules/load.js"

//Mapeando o evento de carregamento da DOM
document.addEventListener("DOMContentLoaded",  function(){
    schedulesDay();
})