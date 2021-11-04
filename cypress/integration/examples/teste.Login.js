///<reference types="cypress" />

describe ('Aprendendo' , ()=>{
    
    // it ('Realizar login em DEV' , ()=>{
    //     cy.visit('https://panel.dev.fabricadeaplicativos.com.br/signin');
    //     cy.get('#mat-input-0').type('dev@fabapp.com.br');
    //     cy.get('.btn-wrapper > .mat-focus-indicator').click();
    //     cy.get('.mat-form-field-infix').type('dev');
    //     cy.get('.btn-wrapper > .mat-focus-indicator').click();
    //     //cy.url().should('eq', 'https://painel.fabricadeaplicativos.com.br/signin');

    // });

it('Teste de Login',()=>{
    cy.visit('https://panel.dev.fabricadeaplicativos.com.br/signin');
    cy.get('[formcontrolname="email"]').type('ewerton.fontebasso@fabricadeaplicativos.com.br');
    cy.get('app-email-form [type="submit"]').click();
    cy.get('[formcontrolname="password"]').type('dev');
    cy.get('app-password-form [type="submit"]').click();

    

    

});



});



// it ('realizando login' , ()=>{
//     cy.visit('https://lp.dev.ulmo.fabapp.com/');
//     cy.get('.menu-list > .jsx-830539975 > .raised-button').click();
//     cy.get('#mat-input-0').type('ewerton.fontebasso@fabricadeaplicativos.com.br');
//     cy.get('.btn-wrapper > .mat-focus-indicator').click();
//     cy.url().should('eq', 'https://painel.fabricadeaplicativos.com.br/signin');

// });



//beforeEach(() => {
   // cy.intercept('https://panel.dev.fabricadeaplicativos.com.br/signin/password').as ('getPassword');
    //cy.intercept('**/exists');
    //cy.intercept('POST', '/exists*', {
        //statusCode: 200

    //})
      //  })
