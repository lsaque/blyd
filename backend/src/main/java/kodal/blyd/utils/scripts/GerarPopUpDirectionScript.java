package kodal.blyd.utils.scripts;

import kodal.blyd.utils.astar.Route;
import kodal.blyd.dto.PopUpDirectionDTO;

import java.util.ArrayList;
import java.util.List;

public class GerarPopUpDirectionScript {

    public List<PopUpDirectionDTO> gerarPopUpDirection(List<Route> rotas) {
        List<PopUpDirectionDTO> listaPopUps = new ArrayList<>();

        if(!rotas.isEmpty()) {
            for (Route r : rotas) {
                PopUpDirectionDTO popUp;
                String text, distance;

                if(r.getDirection().equalsIgnoreCase("frente")) text = "Siga em frente por mais";
                else text = "Vire a " + r.getDirection() + " e anda por mais";
                distance = r.getTotalMove() + " passos";

                listaPopUps.add(new PopUpDirectionDTO(r.getNameArrow(), "", text, distance));
            }
            listaPopUps.add(new PopUpDirectionDTO("","check-circle", "Você chegou ao seu destino", "com sucesso"));
        } else listaPopUps.add(new PopUpDirectionDTO("", "wrong-location", "Não foi possível traçar uma", "rota ao destino"));
        return listaPopUps;
    }

}
