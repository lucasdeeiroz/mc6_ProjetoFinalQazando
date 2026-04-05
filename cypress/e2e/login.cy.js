describe('Funcionalidade de Login - Inglês Qazando', () => {
  
  beforeEach(() => {
    // Carregamos nossos dados de usuários antes de cada teste
    cy.fixture('users').as('users');
  });

  it('Deve realizar login com sucesso como Administrador', function () {
    cy.login(this.users.admin.email, this.users.admin.password);
    
    // Validação de acesso (ajuste o seletor conforme o dashboard real da aplicação)
    cy.url().should('not.include', 'login');
    // Exemplo: validar que um elemento exclusivo do painel de administração está visível
    // cy.contains('Painel de Gestão').should('be.visible');
  });

  it('Deve realizar login com sucesso como Usuário Premium Ativo', function () {
    cy.login(this.users.ativo.email, this.users.ativo.password);
    
    cy.url().should('not.include', 'login');
    // Exemplo: validar que as funcionalidades premium estão destrancadas
    // cy.contains('Área Premium').should('be.visible');
  });

  it('Deve realizar login com sucesso como Usuário Comum (Inativo/Sem Premium)', function () {
    cy.login(this.users.inativo.email, this.users.inativo.password);
    
    cy.url().should('not.include', 'login');
    // Exemplo: validar a presença de um banner/botão para comprar o Premium
    // cy.contains('Seja Premium').should('be.visible'); 
  });

  it('Não deve permitir o acesso a um usuário com email sem confirmar', function () {
    cy.login(this.users.semconfirmar.email, this.users.semconfirmar.password);
    
    // A aplicação deve se manter na tela e não ir para uma área logada
    cy.url().should('include', 'lovable.app');
    // O ideal é também validar a mensagem de erro fornecida pelo sistema (Ajuste a string de acordo)
    // cy.contains('Email não verificado').should('be.visible');
  });

});
