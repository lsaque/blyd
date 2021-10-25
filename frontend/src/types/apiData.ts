import { andar } from "./andar";
import { aviso } from "./aviso";
import { comodo, comodoCategorizado } from "./comodo";
import { mapa } from "./mapa";
import { setor } from "./setor";
import { solicitacaoCadastro } from "./solicitacaoCadastro";
import { usuario } from "./usuario";

export type apiData = {
  andares: andar[];
  avisos: aviso[];
  comodos: comodo[];
  comodosCategorizados: comodoCategorizado[];
  mapas: mapa[];
  setores: setor[];
  solicitacoes: solicitacaoCadastro[];
  usuarios: usuario[];
  usuarioLogin: usuario | null;
}