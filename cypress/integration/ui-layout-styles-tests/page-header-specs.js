/// <reference types="Cypress" />

import SyndioDashboard from '../../PageObjects/SyndioDashboardPage';

let dashboard = null;


describe('User Interface tests for Page header', ()=>{

	before(()=>{
		cy.visitUrl(Cypress.config().baseUrl);
		dashboard = new SyndioDashboard();
	});

	it('Validates page header has following attributes: height -> 70px and background color -> #373737', ()=>{
		dashboard.getHeader()
			.should('have.css', 'height', '70px')
			.and('have.css', 'background-color', 'rgb(55, 55, 55)'); //as of this moment cypress doesnt compare hex value
	});

	it('Validates header should have padding of 24px on the x axis.', ()=>{
		dashboard.getHeader()
			.should('have.css', 'padding', '0px 24px')
	});
});