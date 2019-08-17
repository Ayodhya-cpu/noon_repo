/// <reference types="Cypress" />

context('Window',()=>{
        
		//beforeEach(()=>{
		it('1.b : Get the URL',function(){
        cy.visit('https://www.noon.com')
		cy.wait(3000)
        })

        it('1.b : Navigate to login',function(){
        cy.get('.trigger > .icon').click();
        cy.get('#btn_header_signin').click();
        });

        it('1.c : Login',function(){
        cy.get('#tf_signin_email').type('ayoz93@gmail.com').should('have.value', 'ayoz93@gmail.com');
        cy.get('#tf_signin_password').type('123456789').should('have.value', '123456789');
        cy.get('#btn_signin_signin').click();
        });

      //  it('1.d : Verify land back on home page',function(){
      //  expect(browser.getTitle()).toEqual('noon.com - Online Shopping in UAE | Fashion, electronics, beauty, baby products and more');
      // });

        it('1.e : Navigate to electronics via top nav',function(){
		cy.get('.nav > :nth-child(1) > .menuTrigger').click();
		cy.wait(3000);
        });

        it('1.f : Click on first item.',function(){
		cy.wait(3000);
        cy.get('.swiper-slide-active > .wrapper > .product > .imageContainer > .undefined > .jsx-2714670158 > .jsx-2683212362').click();
        });

        it('1.g : Add it to cart.',function(){
        cy.get('.addToCartLabel').click();
        });

        it('1.h : Proceed to checkout.',function(){
		cy.wait(3000);
      //  cy.get('.qcCtaContainer > :nth-child(1)').click();
        cy.get('.cartItemsColumn > .cartCtaWrapper > .jsx-3223881857').click();
        });

        it('1.i : Create a new address.',function(value){
        cy.get('searchBox').type('abudab').should('have.value', 'abudab');
        cy.get('Confirm location').click();
        cy.get('phone').type('6534131').should('have.value', '6534131');
        cy.get('firstName').type('abudab').should('have.value', 'Ayodhya');
        cy.get('lastName').type('Silva').should('have.value', 'Silva');
        cy.get('address').type('Duabi').should('have.value', 'Duabi');
        cy.get('jsx-2118253545 addressLabelRadio active').click(true);
        cy.get('submit').click();
        });

        it('1.j : Land on payment page.',function(){
        cy.get('Continue').click();
        cy.get('0').type('1').should('have.value', '1');
        cy.get('1').type('2').should('have.value', '2');
        cy.get('2').type('3').should('have.value', '3');
        cy.get('3').type('4').should('have.value', '4');
        cy.get('Submit & Verify Phone').click();
        });
});
		
		
