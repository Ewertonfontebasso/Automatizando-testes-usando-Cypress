///<reference types="cypress" />

describe ('DevFinance' , ()=>{   
    it('Adicionar uma nova transação de entrada' , ()=>{
        cy.visit('https://devfinance-agilizei.netlify.app/#')   

        //get & Container

        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Freela')
        cy.get('#amount').type('12')
        cy.get('#date').type('2021-11-03')

        cy.contains('button', 'Salvar').click()

        cy.get('table tbody tr').should('have.length', 1)
    });

    it('Adicionar uma nova transação de saida' , ()=>{
        cy.visit('https://devfinance-agilizei.netlify.app/#')   

        //get & Container

        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Freela')
        cy.get('#amount').type('-12')
        cy.get('#date').type('2021-11-03')

        cy.contains('button', 'Salvar').click()

        cy.get('table tbody tr').should('have.length', 1)
        cy.get ('p[id="expenseDisplay"]').should('not.equal' , 0)
        
    });

    it('Exclusão de uma entrada ou saida' , ()=>{
        cy.visit('https://devfinance-agilizei.netlify.app/#')   

        //get & Container

        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Freela')
        cy.get('#amount').type('12')
        cy.get('#date').type('2021-11-03')

        cy.contains('button', 'Salvar').click()

        cy.get('img[onclick]').click()

        cy.get('table tbody tr').should('have.length', 0)
    });

});

