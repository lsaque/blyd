import axios from "axios";
import { andar } from "../types/andar";
import { apiData } from "../types/apiData";
import { aviso } from "../types/aviso";
import { comodo, comodoCategorizado } from "../types/comodo";
import { mapa } from "../types/mapa";
import { setor } from "../types/setor";
import { solicitacaoCadastro } from "../types/solicitacaoCadastro";
import { usuario } from "../types/usuario";
import { BASE_URL } from "../utils/requests";

export async function getAndares() : Promise<andar[]> {
  let data = [] as andar[];
  await axios.get(`${BASE_URL}/andares`).then(response => {
    data = response.data as andar[];
  });
  return data;
}

export async function getAvisos() : Promise<aviso[]> {
  let data = [] as aviso[];
  
  await axios.get(`${BASE_URL}/avisos`).then(response => {
    data = response.data as aviso[];
  });
  return data;
}

export async function getComodos() : Promise<comodo[]> {
  let data = [] as comodo[];
  await axios.get(`${BASE_URL}/comodos`).then(response => {
    data = response.data as comodo[];
  });
  return data;
}

export async function getComodosCategorizados() : Promise<comodoCategorizado[]> {
  let data = [] as comodoCategorizado[];
  await axios.get(`${BASE_URL}/comodos/categorizados`).then(response => {
    data = response.data as comodoCategorizado[];
  });
  return data;
}

export async function getMapas() : Promise<mapa[]> {
  let data = [] as mapa[];
  await axios.get(`${BASE_URL}/mapas`).then(response => {
    data = response.data as mapa[];
  });
  return data;
}

export async function getSetores() : Promise <setor[]> {
  let data = [] as setor[];
  await axios.get(`${BASE_URL}/setores`).then(response => {
    data = response.data as setor[];
  });
  return data;
}

export async function getSolicitacoes() : Promise<solicitacaoCadastro[]> {
  let data = [] as solicitacaoCadastro[];

  await axios.get(`${BASE_URL}/solicitacoes-cadastro`).then(response => {
    data = response.data as solicitacaoCadastro[];
  });
  return data;
}

export async function getUsuarios() : Promise<usuario[]> {
  let data = [] as usuario[];
  await axios.get(`${BASE_URL}/usuarios`).then(response => {
    data = response.data as usuario[];
  });
  return data;
}

export async function getApiData(apiData : apiData | null) : Promise<apiData> {

  const data = apiData == null ? {} as apiData : apiData as apiData;

  data.andares = await getAndares();
  data.avisos =  await getAvisos();
  data.comodos =  await getComodos();
  data.comodosCategorizados =  await getComodosCategorizados();
  data.mapas =  await getMapas();
  data.setores =  await getSetores();
  data.solicitacoes =  await getSolicitacoes();
  data.usuarios =  await getUsuarios();
  
  return data;
}
