/// <reference types="Cypress" />

import SyndioDashboard from '../../PageObjects/SyndioDashboardPage';

let dashboard = null;

describe('User Interface test for Drop Down Select element', ()=>{

	before(()=>{
		cy.visitUrl(Cypress.config().baseUrl);
		dashboard = new SyndioDashboard();
		dashboard.openDropdown();
	});
	
	it(`Validates Dropdown element should have height of 40px .` , ()=>{
		dashboard.getDropDownElement()
			.should('have.css', 'height',  '40px');
	});	

	it(`Validates Dropdown element should have width of 200px .` , ()=>{
		dashboard.getDropDownElement()
			.should('have.css', 'width',  '200px');
	});	

	it(`Validates Dropdown element should have background color of #262626.` , ()=>{
		dashboard.getDropDownElement()
			.should('have.css', 'background-color', 'rgb(38, 38, 38)');
	});	

	it(`Validates Dropdown element's active state should have a border of 1 px solid #0D8B7F` , ()=>{
		
		dashboard.isDropDownActive().then(isActive =>{
			if(!isActive){
				cy.log('Drop down is not active. Clicking on it to expand');
				dashboard.openDropdown();
			}
		});		
		dashboard.getDropDownElement()
			.should('have.css', 'border',  '1px solid rgb(13, 139, 127)');
	});	

})