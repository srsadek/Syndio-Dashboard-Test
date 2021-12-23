/// <reference types="Cypress" />

import groups from '../../fixtures/group-names.json';
import SyndioDashboard from '../../PageObjects/SyndioDashboardPage';

let dashboard = null;

describe('Syndio UI', ()=>{

	before(()=>{
		cy.visitUrl(Cypress.config().baseUrl);
		dashboard = new SyndioDashboard();
		dashboard.openDropdown();
	});


	it('Validates all group names shown in drop down', ()=>{
		cy.log('Validating correct group names are shown in the drop down list box');
		groups.forEach(group => {
			dashboard.getDropdownElementByName(group.label)
			.should('be.visible');
		});
	});

	it('Validates currently selected group is disabled in drop down', ()=>{
		dashboard.getCurrentlySelectedGroupName().then(selectedGroupName=>{
			cy.log(`Validating the group link: "${selectedGroupName}" is disabled in the dropdown list.`);
			dashboard.getDropdownElementByName(selectedGroupName)
			.should('have.class', 'disabled');
		});
	});

	it('Validates drop down closes when out of focus', ()=>{
		cy.log('User should be able to click anywhere on the screen to close the current group select drop down');
		dashboard.isDropDownActive().then(isActive =>{
			if(!isActive){
				cy.log('Drop down is not active. Clicking on it to expand');
				dashboard.openDropdown();
			}
		});

		cy.log('Drop down is expanded.');
		cy.log('Clicking on "Race" tab to set focus away from drop down');
		dashboard.getRaceTab().click();

		cy.log('Expecting drop down to be not active');
		dashboard.isDropDownActive()
		.should(isActive=>{
			expect(isActive).to.be.false;
		});

	});

	it('Validates user is able to select group to view data on screen', ()=>{
		dashboard.getCurrentlySelectedGroupName().
			then(selectedGroupName=>{
				cy.log('Getting a different group to select.');
				let otherGroup =  groups.find(g => g.label != selectedGroupName);
				cy.log(`selecting group: "${otherGroup.label}" in the drop down`);
				dashboard.getDropdownElementByName(otherGroup.label).click();

				cy.log(`Expecting group: "${otherGroup.label}" to be shown as currently selected group`);
				dashboard.getCurrentlySelectedGroupName()
					.should('contain', otherGroup.label);
			});
	});

	it('Validates title should contain company name', ()=>{
		cy.title().should('contain', 'syndio');
	});

	it('Validates clicking on a tab item in tab menu activates the tab', ()=>{

		cy.log('clicking on "Race" tab and validating it activates');
		dashboard.getRaceTab()
			.click()
			.should('have.class', 'tab-active');

		cy.log('clicking on "Gender" tab and validating it activates');
		dashboard.getGenderTab()
			.click()
			.should('have.class', 'tab-active');
	});
});