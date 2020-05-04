describe ('Sixth Tests', () => {
    context ('No Todos', () => {
      it ('Adds a new todo', () => {
        cy.visit ('/');
        cy.visit ('/details');
        cy.visit ('/cart');
        
      });
    });
  });