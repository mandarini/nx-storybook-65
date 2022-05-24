describe('rethree: Rethree component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=rethree--primary&args=title;rating;flag:false;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Rethree!');
    });
});
