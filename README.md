# Controle-de-Filas
Sistema web feito com JavaScript para controle de filas a partir de senhas numéricas.

1 - A pagina Index exibe a senha e o guichê que a solicitou.
2 - A senhas são incrementadas de 1 em 1 dentro da pagina index.
3 - A pagina painel se comunica com a index atraves de um BroadcastChannel.
4 - Para funcionar basta abrir as duas paginas junto, sempre que requirir que o proximo cliente da fila seja chamado através do painel a index é atualizada.
