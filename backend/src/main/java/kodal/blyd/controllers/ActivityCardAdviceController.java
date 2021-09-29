package kodal.blyd.controllers;

import kodal.blyd.dto.ActivityCardAdviceDTO;
import kodal.blyd.script.ActivityCardAdviceScript;
import kodal.blyd.services.AvisoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping(value = "/activity-card-advice")
public class ActivityCardAdviceController {

    @Autowired
    AvisoService avisoService;

    @GetMapping
    public ResponseEntity<List<ActivityCardAdviceDTO>> findAll() {
        return ResponseEntity.ok(new ActivityCardAdviceScript().createActivityCardAdviceList(avisoService.findAll()));
    }

}
