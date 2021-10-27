import { aviso } from "./aviso";
import { setor } from "./setor";

export type usuario = {
  id: number;
  nome: string;
  email: string;
  senha: string;
  celular: string;
  foto: string;
  totalChamadas: number;
  totalAvisos: number;
  totalRotas: number;
  pcd: boolean;
  admin: boolean;
  status: boolean;
  setor: setor;
  avisos: aviso[];
};

export type usuarioLogin = {
  status: boolean;
  mensagem: string;
};

export type usuarioSignUp = {
  status: boolean;
  mensagem: string;
};
