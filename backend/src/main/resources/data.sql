INSERT INTO t_andar(nome, descricao) VALUES ('1 Andar', 'Escritorio de Advocacia');

INSERT INTO t_mapa(nome, descricao, link_imagem, m2, andar_id) VALUES ('Mapa 1 Andar', 'Mapa do Escritorio de Advocacia', 'https://centralofficeschapeco.com.br/images/plantas/alinc-chapeco-juncao-4-e-5.jpg', 115.96, 1);

INSERT INTO t_cargo(nome) VALUES ('Diretor');
INSERT INTO t_usuario(nome, email, celular, senha, pcd, cargo_id) VALUES ('Davi Quental', 'quentaldavi@gmail.com', '11934762698','senha1', 0, 1); 
INSERT INTO t_ponto(x, y, mapa_id) VALUES (0, 0, 1); 
INSERT INTO t_aviso(nome, descricao, raio, dia, mes, ano, hora, minuto, usuario_id, ponto_id, andar_id) VALUES ('Escada', 'Trocando a lampada', 2, 25, 8, 2021, 15, 20, 1, 1, 1);


INSERT INTO t_ponto(x, y, mapa_id) VALUES (41, 3, 1); 
INSERT INTO t_ponto(x, y, mapa_id) VALUES (62, 3, 1); 
INSERT INTO t_ponto(x, y, mapa_id) VALUES (45, 3, 1); 
INSERT INTO t_comodo(nome, tipo, ponto_inicial, ponto_final, ponto_entrada ,andar_id) VALUES ('Principal', 'Entrada', 2, 3, 4, 1); 

INSERT INTO t_ponto(x, y, mapa_id) VALUES (11, 38, 1);
INSERT INTO t_ponto(x, y, mapa_id) VALUES (67, 4, 1);
INSERT INTO t_comodo(nome, tipo, ponto_inicial, ponto_final, andar_id) VALUES ('Principal', 'Recepcao', 5, 6, 1);

INSERT INTO t_ponto(x, y, mapa_id) VALUES (28, 68, 1);
INSERT INTO t_ponto(x, y, mapa_id) VALUES (47, 53, 1);
INSERT INTO t_ponto(x, y, mapa_id) VALUES (42, 53, 1);
INSERT INTO t_comodo(nome, tipo, ponto_inicial, ponto_final, ponto_entrada ,andar_id) VALUES ('Principal', 'Banheiro', 7, 8, 9, 1);

INSERT INTO t_ponto(x, y, mapa_id) VALUES (0, 68, 1);
INSERT INTO t_ponto(x, y, mapa_id) VALUES (10, 0, 1);
INSERT INTO t_ponto(x, y, mapa_id) VALUES (43, 10, 1);
INSERT INTO t_comodo(nome, tipo, ponto_inicial, ponto_final, ponto_entrada ,andar_id) VALUES ('Recepcao', 'Sacada', 10, 11, 12, 1);

INSERT INTO t_ponto(x, y, mapa_id) VALUES (68, 38, 1); 
INSERT INTO t_ponto(x, y, mapa_id) VALUES (100, 15, 1);
INSERT INTO t_ponto(x, y, mapa_id) VALUES (73, 38, 1); 
INSERT INTO t_comodo(nome, tipo, ponto_inicial, ponto_final, ponto_entrada ,andar_id) VALUES ('1EP', 'Escritorio', 13, 14, 15, 1);

INSERT INTO t_ponto(x, y, mapa_id) VALUES (101, 38, 1);
INSERT INTO t_ponto(x, y, mapa_id) VALUES (132, 15, 1);
INSERT INTO t_ponto(x, y, mapa_id) VALUES (105, 38, 1);
INSERT INTO t_comodo(nome, tipo, ponto_inicial, ponto_final, ponto_entrada ,andar_id) VALUES ('2EP', 'Escritorio', 16, 17, 18, 1);

INSERT INTO t_ponto(x, y, mapa_id) VALUES (50, 68, 1);
INSERT INTO t_ponto(x, y, mapa_id) VALUES (132, 46, 1);
INSERT INTO t_ponto(x, y, mapa_id) VALUES (92, 46, 1);
INSERT INTO t_comodo(nome, tipo, ponto_inicial, ponto_final, ponto_entrada ,andar_id) VALUES ('1EG', 'Escritorio', 19, 20, 21, 1);

INSERT INTO t_ponto(x, y, mapa_id) VALUES (133, 68, 1);
INSERT INTO t_ponto(x, y, mapa_id) VALUES (165, 15, 1);
INSERT INTO t_ponto(x, y, mapa_id) VALUES (133, 42, 1);
INSERT INTO t_comodo(nome, tipo, ponto_inicial, ponto_final, ponto_entrada ,andar_id) VALUES ('Principal', 'Sala de reuniao', 22, 23, 24, 1);

INSERT INTO t_ponto(x, y, mapa_id) VALUES (166, 68, 1);
INSERT INTO t_ponto(x, y, mapa_id) VALUES (174, 15, 1);
INSERT INTO t_ponto(x, y, mapa_id) VALUES (166, 43, 1);
INSERT INTO t_comodo(nome, tipo, ponto_inicial, ponto_final, ponto_entrada ,andar_id) VALUES ('Sala de reuniao', 'Sacada', 25, 26, 27, 1);

INSERT INTO t_ponto(x, y, mapa_id) VALUES (11, 68, 1);
INSERT INTO t_ponto(x, y, mapa_id) VALUES (28, 53, 1);
INSERT INTO t_ponto(x, y, mapa_id) VALUES (17, 53, 1); 
INSERT INTO t_comodo(nome, tipo, ponto_inicial, ponto_final, ponto_entrada ,andar_id) VALUES ('Lavado', 'Lavado do escritorio', 28, 29, 30, 1);

INSERT INTO t_ponto(x, y, mapa_id) VALUES (11, 18, 1);
INSERT INTO t_ponto(x, y, mapa_id) VALUES (41, 4, 1); 
INSERT INTO t_obstaculo(nome, descricao, ponto_inicial, ponto_final) VALUES ('Poltronas e mesas', 'Duas poltronas e tres mesas com vaso em cima', 31, 32);

INSERT INTO t_ponto(x, y, mapa_id) VALUES (45, 38, 1);
INSERT INTO t_ponto(x, y, mapa_id) VALUES (67, 17, 1); 
INSERT INTO t_obstaculo(nome, descricao, ponto_inicial, ponto_final) VALUES ('Balcao recepcao', 'Quatro cadeiras e uma mesa com computores em cima', 33, 34);

INSERT INTO t_ponto(x, y, mapa_id) VALUES (25, 38, 1);
INSERT INTO t_ponto(x, y, mapa_id) VALUES (33, 27, 1); 
INSERT INTO t_obstaculo(nome, descricao, ponto_inicial, ponto_final) VALUES ('Mesa pequena', 'Uma mesa com objetos em cima', 35, 36);

INSERT INTO t_ponto(x, y, mapa_id) VALUES (21, 52, 1);
INSERT INTO t_ponto(x, y, mapa_id) VALUES (37, 46, 1); 
INSERT INTO t_obstaculo(nome, descricao, ponto_inicial, ponto_final) VALUES ('Sofa', 'Sofa de tres lugares', 37, 38);

