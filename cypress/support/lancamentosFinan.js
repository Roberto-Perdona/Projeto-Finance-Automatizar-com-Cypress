
// após deve requerer os elementos através desta constante:
const elementos= require('./elementos').ELEMENTOS;

// criar uma classe, neste caso com o nome "financas" e montar as funções com as variáveis:
class financas {


    novoLancamento(descricao, valor, data) {
        cy.get(elementos.novaTransacao).click();
        cy.get(elementos.descricaoLancamento).type(descricao);
        cy.get(elementos.valorDoLancamento).type(valor);
        cy.get(elementos.dataDoLancamento).type(data);
        cy.get(elementos.botaoDeSalvar).click()
    }

    validacoesEntradaSaidaTotal(totalEntrada, totalSaida, total) {
        cy.get('#incomeDisplay')
        .invoke('text')
        .then((text) => {
          const cleanedText = text.replace(/\u00a0/g, ''); 
          expect(cleanedText).to.equal(totalEntrada);
        });

        cy.get('#expenseDisplay')
        .invoke('text')
        .then((text) => {
          const cleanedText = text.replace(/\u00a0/g, ''); 
          expect(cleanedText).to.equal(totalSaida);
        });
        
        cy.get('#totalDisplay')
        .invoke('text')
        .then((text) => {
          const cleanedText = text.replace(/\u00a0/g, ''); 
          expect(cleanedText).to.equal(total);
        });
    }
    
    validacoesExclusao(descricao) {
        cy.contains('[class="description"]', descricao)
        .parent()
        .find('img').click()
        cy.contains('[class="description"]', descricao)
        .siblings() //localizar o irmão
        .children('img') // o filho "objeto"
       } 
    
    validacaoQtdesLancamentos(quantidade) {
      cy.get('tbody tr')
        .should('have.length', quantidade);
      //cy.get('tbody tr[data-index="0"]')
      //.find('td.description') 
      //.should('have.text', descricao1);
    }

    validacaoQtdelancamento(quantidade) {
    
      cy.get('tbody tr td.description')
        .should('have.length', quantidade);
    }
}


export default new financas()
