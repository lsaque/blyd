package kodal.blyd.script;

import kodal.blyd.dto.ComodoDTO;
import kodal.blyd.dto.ComodoCategorizadoDTO;

import java.util.ArrayList;
import java.util.List;

public class ComodosCategorizadoScript {

	public List<ComodoCategorizadoDTO> categorizarComodos(List<ComodoDTO> listaComodos) {
        List<ComodoCategorizadoDTO> listaCategorizada = new ArrayList<>();

        for (ComodoDTO comodo : listaComodos) {
            if(listaCategorizada.size() == 0) {
                listaCategorizada.add(criarComodoCategorizadoDTO((comodo)));
            } else {
                boolean adicionar = false;
                for (ComodoCategorizadoDTO comodoCategorizado : listaCategorizada) {
                    if(comodoCategorizado.getTipo().equalsIgnoreCase(comodo.getTipo())) {
                        comodoCategorizado.getComodos().add(comodo);
                        adicionar = true;
                        break;
                    }
                }
                if(!adicionar) listaCategorizada.add(criarComodoCategorizadoDTO(comodo));
            }
        }

        return listaCategorizada;
    }

    private ComodoCategorizadoDTO criarComodoCategorizadoDTO(ComodoDTO comodo){
	    List<ComodoDTO> comodos = new ArrayList<>();
	    comodos.add(comodo);
	    return new ComodoCategorizadoDTO(comodo.getTipo(), comodos);
    }
}
