describe('ngone', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary&args=title;rating;flag;'));
  it('should render the component', () => {
    cy.get('katrina-root').should('exist');
  });
});