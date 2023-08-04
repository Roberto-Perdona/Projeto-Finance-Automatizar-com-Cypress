
// importar as funções para poder chama-las pelo nome de cada ação realizada:
import financas from '../../support/lancamentosFinan'

// Primeira mudança

describe('teste financeiro', () => {
    beforeEach(() => {
        
        cy.visit('/');
    })
    it('teste de lançamentos entradas', () => {
        financas.novoLancamento('pagamento', 1000, '2023-07-31');
                             //(Descricao,   valorlanc,  datalanc.)
        financas.novoLancamento('pagamentos', 500, '2023-07-31');
                             //(Descricao,   valorlanc,  datalanc.)
        financas.validacaoQtdesLancamentos(2);
                               //(quantidade)
        financas.validacoesEntradaSaidaTotal('R$1.500,00', 'R$0,00', 'R$1.500,00')
    })                                    //(valorEntrada, valorSaida, valor Total)

    it('teste excluir lançamentos', () => {
        financas.novoLancamento('pagamento', 1000, '2023-07-31');
                             //(Descricao,   valorlanc,  datalanc.)
        financas.novoLancamento('pagamentos', -500, '2023-07-31');
                            //(Descricao,   valorlanc,  datalanc.)
        financas.validacoesExclusao('pagamento');
                                //(Descricao do item para exclusão)
        financas.validacaoQtdelancamento(1);
                                       //(quantidade)
        financas.validacoesEntradaSaidaTotal('R$0,00', '-R$500,00', '-R$500,00')
                                         //(valorEntrada, valorSaida, valor Total)
        
                                         
    })
})


