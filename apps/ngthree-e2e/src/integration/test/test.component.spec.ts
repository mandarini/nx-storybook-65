describe('ngthree', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testcomponent--primary&args=title;rating;flag;'));
  it('should render the component', () => {
    cy.get('katrina-test').should('exist');
  });
});