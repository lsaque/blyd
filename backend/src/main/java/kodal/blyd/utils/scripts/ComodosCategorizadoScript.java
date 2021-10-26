package kodal.blyd.utils.scripts;

import kodal.blyd.dto.ComodoDTO;
import kodal.blyd.dto.ComodoCategorizadoDTO;

import java.util.ArrayList;
import java.util.List;

public class ComodosCategorizadoScript {

	public List<ComodoCategorizadoDTO> categorizarComodos(List<ComodoDTO> listaComodos) {
        List<ComodoCategorizadoDTO> listaCategorizada = new ArrayList<>();
        int id = 1;

        for (ComodoDTO comodo : listaComodos) {
            if(listaCategorizada.size() == 0) {
                listaCategorizada.add(criarComodoCategorizadoDTO(id, comodo));
                id++;
            } else {
                boolean adicionar = false;
                for (ComodoCategorizadoDTO comodoCategorizado : listaCategorizada) {
                    if(comodoCategorizado.getTipo().equalsIgnoreCase(comodo.getTipo())) {
                        comodoCategorizado.getComodos().add(comodo);
                        adicionar = true;
                        break;
                    }
                }
                if(!adicionar) {
                    listaCategorizada.add(criarComodoCategorizadoDTO(id, comodo));
                    id++;
                }
            }
        }

        return listaCategorizada;
    }

    private ComodoCategorizadoDTO criarComodoCategorizadoDTO(int id, ComodoDTO comodo){
	    List<ComodoDTO> comodos = new ArrayList<>();
	    comodos.add(comodo);
	    return new ComodoCategorizadoDTO(id, comodo.getTipo(), comodos);
    }
}
