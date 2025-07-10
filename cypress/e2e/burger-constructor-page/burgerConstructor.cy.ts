describe('проверяем доступность приложения', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000');

    cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' }).as(
      'getIngredients'
    );

    cy.intercept('GET', 'api/auth/user', { fixture: 'user.json' }).as(
      'getUser'
    );

    cy.intercept('POST', 'api/orders', { fixture: 'order.json' }).as(
      'postOrder'
    );
  });

  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Проверка добавления ингредиента в конструктор', () => {
    cy.wait('@getIngredients').then(() => {
      cy.get('[data-testid="selected-bun"]').should(
        'have.text',
        'Выберите булки'
      );

      cy.get('[data-testid="constructor-filling"]')
        .find('div')
        .should('have.text', 'Выберите начинку');
    });

    cy.get('[data-testid="643d69a5c3f7b9001cfa093c"]').find('button').click();
    cy.get('[data-testid="643d69a5c3f7b9001cfa0941"]').find('button').click();

    cy.get('[data-testid="selected-bun"]')
      .find('.constructor-element__text')
      .should('have.text', 'Краторная булка N-200i (верх)');

    cy.get('[data-testid="constructor-filling-643d69a5c3f7b9001cfa0941"]')
      .find('.constructor-element__text')
      .should('have.text', 'Биокотлета из марсианской Магнолии');
  });

  it('Проверка модальных окон', () => {
    cy.get('[data-testid="643d69a5c3f7b9001cfa093c"]').click();

    cy.get('#modals')
      .children()
      .first()
      .should('be.visible')
      .within(() => {
        cy.get('h3').first().should('have.text', 'Детали ингредиента');
        cy.get('h3').eq(1).should('have.text', 'Краторная булка N-200i');
        cy.get('button').click();
      });

    cy.get('#modals').children().should('not.exist');

    cy.get('[data-testid="643d69a5c3f7b9001cfa093c"]').click();

    cy.get('#modals').children().first().should('be.visible');

    cy.get('#modals > div:last-child').click({ force: true });

    cy.get('#modals').children().should('not.exist');
  });

  it('Проверка составления заказа', () => {
    cy.setCookie('accessToken', 'aaaa');

    cy.get('[data-testid="643d69a5c3f7b9001cfa093c"]').find('button').click();
    cy.get('[data-testid="643d69a5c3f7b9001cfa0941"]').find('button').click();

    cy.get('[data-testid="order-button"]').find('button').click();

    cy.wait('@postOrder').then(() => {
      cy.get('[data-testid="selected-bun"]').should(
        'have.text',
        'Выберите булки'
      );

      cy.get('[data-testid="constructor-filling"]')
        .find('div')
        .should('have.text', 'Выберите начинку');

      cy.get('#modals')
        .children()
        .first()
        .should('be.visible')
        .within(() => {
          cy.get('h2').should('have.text', '83590');

          cy.get('button').click();
        });

      cy.get('#modals').children().should('not.exist');
    });
  });
});
