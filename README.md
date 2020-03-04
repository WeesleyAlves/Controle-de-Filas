# Controle-de-Filas

Sistema web feito com JavaScript para controle de filas a partir de senhas numéricas, somente para melhor entendimento de Broadcast Channel nos navegadores.

1. A pagina Index exibe a senha e o guichê que a solicitou. <br>
2. A senhas são incrementadas de 1 em 1 dentro da pagina index. <br>
3. A pagina painel se comunica com a index atraves de um BroadcastChannel que envia o numero do guiche. <br>
4. Para funcionar basta abrir as duas paginas em guias diferentes de forma simultanea, sempre que requirir que o proximo cliente da fila seja chamado através do painel a pagina de index é atualizada. <br>

**Link painel:** https://weesleyalves.github.io/Controle-de-Filas/painel

**Link index:** https://weesleyalves.github.io/Controle-de-Filas/
