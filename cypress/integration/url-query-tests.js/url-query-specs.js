/// <reference types="Cypress" />

import groups from '../../fixtures/group-names.json';
import SyndioDashboard from '../../PageObjects/SyndioDashboardPage';

let dashboard = null, groupByFunc = null, groupByRole = null;

describe('Validates client sending correct query to get data for each group', ()=>{

	before(()=>{
		dashboard = new SyndioDashboard();
		groupByFunc = groups.filter(g => g.label.includes('Function'))[0];
		groupByRole = groups.filter(g => g.label.includes('Role'))[0];

	});
	
	it('Validates url is updated when selecting "Group by Function" option in the dropdown.', ()=>{

		let url = Cypress.config().baseUrl + `/?=${groupByFunc.id}`;
		cy.visitUrl(url);
		cy.url()
			.then(url =>{
				cy.log(`Currently URL is shown as: "${url}"`);
			});
		cy.log('Validating group by Function is selected in the drop down indicating data is shown for this  group');
		dashboard.getCurrentlySelectedGroupName()
			.should('contain', groupByFunc.label);

	});
	
	it('Validates url is updated when selecting "Group by Role" option in the dropdown.', ()=>{

		let url = Cypress.config().baseUrl + `/?=${groupByRole.id}`;
		cy.visitUrl(url);
		cy.url()
			.then(url =>{
				cy.log(`Currently URL is shown as: "${url}"`);
			});
		cy.log('Validating group by Role is selected in the drop down indicating data is shown for this  group');
		dashboard.getCurrentlySelectedGroupName()
			.should('contain', groupByRole.label);

	});


});