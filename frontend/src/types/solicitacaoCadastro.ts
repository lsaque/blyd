export type solicitacaoCadastro = {
  nome: string;
  email: string;
  senha: string;
  celular: string;
  pcd: boolean;
};

export type solicitacaoCadastroAdicionar = {
  status: boolean;
  mensagem: string;
};
