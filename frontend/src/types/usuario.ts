import { cargo } from "./cargo";

export type usuario = {
  nome: string;
  email: string;
  celular: string;
  senha: string;
  pcd: boolean;
  cargo: cargo;
};

export type usuarioLogin = {
  status: boolean;
  mensagem: string;
};

export type usuarioSignUp = {
  status: boolean;
  mensagem: string;
};
