import axios from "axios";
import { List } from "react-native-paper";
import { aviso } from "../../types/aviso";
import { status } from "../../types/status";
import { BASE_URL } from "../requests";

export function setNewAdviceList(list : aviso[]){

  const date1 = new Date();
  const newAdviceList = [] as aviso[];

  list.forEach(advice => {
    const splitted = advice.tempoFinal.split("-");
    const date2 = new Date(parseInt(splitted[2]), parseInt(splitted[1]) - 1, parseInt(splitted[0]), parseInt(splitted[3]), parseInt(splitted[4]));
    if(date2.getTime() < date1.getTime() && advice.status){
      axios.get(`${BASE_URL}/avisos/desativar/${advice.id}`).then((response) => {
        const data = response.data as status;
      });
    }
    newAdviceList.push(advice);
  });
  return newAdviceList;
}