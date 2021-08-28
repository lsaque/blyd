package kodal.blyd.controllers;

import kodal.blyd.dto.RotaDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/rota")
public class RotaController {

    @Autowired
    private PopUpDirectionController popUpController;

    @GetMapping(value = "/1")
    public ResponseEntity<RotaDTO> gerarRota1() {
        RotaDTO rota = new RotaDTO();
        rota.setPopUps(popUpController.rota1());
        rota.setAvisos(null);
        return ResponseEntity.ok(rota);
    }

    @GetMapping(value = "/2")
    public ResponseEntity<RotaDTO> gerarRota2() {
        RotaDTO rota = new RotaDTO();
        rota.setPopUps(popUpController.rota2());
        rota.setAvisos(null);
        return ResponseEntity.ok(rota);
    }
}
