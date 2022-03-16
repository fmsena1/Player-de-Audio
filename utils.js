var produto= {
    id:9,
    //chave        valor
    nomeProduto: 'Violão',
    valorProduto:200,
    dataFabricacao:'07/02/2000',
    dataAtual:15.03,
};
var vencimento = 02,02;
var validade = produto.dataAtual;
if(vencimento > validade){
    console.log("Vencido");
};