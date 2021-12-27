##Teste Técnico Back-End Venture Labs

###Diretrizes
Construir um sistema de compra de passagens aéreas. Esse sistema possui os seguintes requisitos:
1. Suportar múltiplas companhias.
2. Cada companhia possui múltiplos voos.
3. Cada voo possui um horário de saída, de chegada, o aeroporto de origem, o aeroporto de
destino, a quantidade de assentos disponíveis e o preço da passagem.
4. Os assentos são numerados
5. Não é possível comprar passagens quando:
  a. O voo selecionado está com os assentos esgotados
  b. O horário de saída está definido há menos de 1h do horário atual
  c. O assento escolhido já está ocupado
6. Toda a comunicação deve acontecer via APIs com JavaScript
7. Os dados devem ser persistidos utilizando MySQL
Pense num sistema para ser utilizado num balcão de vendas. Logo, não é necessário lidar com criação de
usuário, autenticação etc. Além disso, não é necessário criar uma interface gráfica para o sistema.
Apenas as APIs. Utilizar frameworks Express ou NestJS.