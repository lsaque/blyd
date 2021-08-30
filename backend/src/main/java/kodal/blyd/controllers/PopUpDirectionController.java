package kodal.blyd.controllers;

import kodal.blyd.dto.PopUpDirectionDTO;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/pop-up-direction")
public class PopUpDirectionController {

    public List<PopUpDirectionDTO> rota1() {
        PopUpDirectionDTO pop1 = new PopUpDirectionDTO("long-arrow-up","", "Siga em frente por mais", "3 passos");
        PopUpDirectionDTO pop2 = new PopUpDirectionDTO("long-arrow-left", "", "Vire a esquerda e ande por mais", "2 passos");
        PopUpDirectionDTO pop3 = new PopUpDirectionDTO("long-arrow-right", "", "Vire a direita e ande por mais", "7 passos");
        PopUpDirectionDTO pop4 = new PopUpDirectionDTO("long-arrow-right", "", "Vire a direita e ande por mais", "13 passos");
        PopUpDirectionDTO pop5 = new PopUpDirectionDTO("long-arrow-left", "","Vire a esquerda e ande por mais", "2 passos");
        PopUpDirectionDTO pop6 = new PopUpDirectionDTO("","map-check", "Rota", "finalizada");
        List<PopUpDirectionDTO> popUps = new ArrayList<>();
        popUps.add(pop1);
        popUps.add(pop2);
        popUps.add(pop3);
        popUps.add(pop4);
        popUps.add(pop5);
        popUps.add(pop6);
        return popUps;
    }

    public List<PopUpDirectionDTO> rota2(){
        PopUpDirectionDTO pop1 = new PopUpDirectionDTO("long-arrow-up", "", "Siga em frente por mais", "2 passos");
        PopUpDirectionDTO pop2 = new PopUpDirectionDTO("long-arrow-right", "", "Vire a direita e ande por mais", "23 passos");
        PopUpDirectionDTO pop3 = new PopUpDirectionDTO("long-arrow-left", "", "Vire a esquerda e ande por mais", "8 passos");
        PopUpDirectionDTO pop4 = new PopUpDirectionDTO("long-arrow-left", "","Vire a esquerda e ande por mais", "11 passos");
        PopUpDirectionDTO pop5 = new PopUpDirectionDTO("long-arrow-right", "","Vire a direita e ande por mais", "2 passos");
        PopUpDirectionDTO pop6 = new PopUpDirectionDTO("","map-check", "Rota", "finalizada");
        List<PopUpDirectionDTO> popUps = new ArrayList<>();
        popUps.add(pop1);
        popUps.add(pop2);
        popUps.add(pop3);
        popUps.add(pop4);
        popUps.add(pop5);
        popUps.add(pop6);
        return popUps;
    }

}
