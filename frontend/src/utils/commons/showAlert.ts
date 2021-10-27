import { Alert } from "react-native";

export function showAlert(status: boolean, mensagem: string){
  if(status){
    return(
      Alert.alert(
        "Sucesso ✅", 
        mensagem, 
        [{ text: "Fechar"}]
      )
    );
  } else {
    return(
      Alert.alert(
        "Ops 🛑", 
        mensagem, 
        [{ text: "Fechar"}]
      )
    );
  }
}