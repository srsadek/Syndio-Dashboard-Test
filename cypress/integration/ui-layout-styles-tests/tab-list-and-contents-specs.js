/// <reference types="Cypress" />

import SyndioDashboard from '../../PageObjects/SyndioDashboardPage';

let dashboard = null;

describe('User Interface tests for Tab List and Tab Content Elements', ()=>{

	before(()=>{
		cy.visitUrl(Cypress.config().baseUrl);
		dashboard = new SyndioDashboard();
	});
		
	it('Validates tab list item has padding of 24 px on the x axis.' , ()=>{
		dashboard.getTabList()
			.should('have.css', 'padding', '0px 24px');
	});


	/***********************************************Active Tab********************************************************** */
	it(`Validates Active tab list item should have height of 40px.` , ()=>{
		dashboard.getActiveTab()
			.should('have.css', 'height', '40px');
	});

	it(`Validates Active tab list item should have width of 200px.` , ()=>{
		dashboard.getActiveTab()
			.should('have.css', 'width', '200px');
	});

	it(`Validates Active tab list item should have background color as #D8D8D8` , ()=>{
		dashboard.getActiveTab()
			.should('have.css', 'background-color', 'rgb(216, 216, 216)')
	});

	it(`Validates Active tab list item should have font size of 14pt.` , ()=>{
		dashboard.getActiveTab()
			.should('have.css', 'font-size',  '18.6667px'); //14pt = 18.6667px
	});

	it(`Validates Active tab list item should have text color as #2E2E2E.` , ()=>{
		dashboard.getActiveTab()
			.should('have.css', 'color',  'rgb(46, 46, 46)');
	});


	/***********************************************Inactive Tab********************************************************** */
	it(`Validates Inactive tab list should have background color as #F2F2F2` , ()=>{
		dashboard.getInactiveTab()
			.should('have.css', 'background-color', 'rgb(242, 242, 242)');
	});

	it(`Validates Inactive tab list should have font size of 14pt.` , ()=>{
		dashboard.getInactiveTab()
			.should('have.css', 'font-size',  '18.6667px'); //14pt = 18.6667px
	});

	it(`Validates Inactive tab list item should have text color as #666666.` , ()=>{
		dashboard.getInactiveTab()
			.should('have.css', 'color',  'rgb(102, 102, 102)');
	});

	it(`Validates Inactive tab list item should have width of 200px.` , ()=>{
		dashboard.getInactiveTab()
			.should('have.css', 'width', '200px');
	});


	/***********************************************Tab Content Element********************************************************** */
	it(`Validates Tab contents pane should have a top border of 1 px solid #E7E7E7` , ()=>{
		dashboard.getTabContentPane()
			.should('have.css', 'border-top',  '1px solid rgb(231, 231, 231)');
	});
});