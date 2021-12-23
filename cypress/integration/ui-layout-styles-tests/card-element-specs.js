/// <reference types="Cypress" />

import SyndioDashboard from '../../PageObjects/SyndioDashboardPage';

let dashboard = null;

describe('User Interface test for Demographic Stats card element', ()=>{

	before(()=>{
		cy.visitUrl(Cypress.config().baseUrl);
		dashboard = new SyndioDashboard();
	});

	it(`Validates Demographics stats card should have padding of 24x` , ()=>{
		dashboard.getDemographicStatsCardElement()
			.should('have.css', 'padding',  '24px');
	});

	it(`Validates Demographics stats card's label should have font-size of of 12pt` , ()=>{
		dashboard.getDemographicStatsCardsLabelElement()
			.should('have.css', 'font-size',  '16px');
	});

	it(`Validates Demographics stats card's label should have text color as #666666.` , ()=>{
		dashboard.getDemographicStatsCardsLabelElement()
			.should('have.css', 'color',  'rgb(102, 102, 102)');
	});	

	it(`Validates Demographics stats card's content paragraph should have font-size of of 18pt` , ()=>{
		dashboard.getDemographicStatsCardsContentParagraphElement()
			.should('have.css', 'font-size',  '24px');
	});

	it(`Validates Demographics stats card's label should have text color as #000000.` , ()=>{
		dashboard.getDemographicStatsCardsContentParagraphElement()
			.should('have.css', 'color',  'rgb(0, 0, 0)');
	});	

});