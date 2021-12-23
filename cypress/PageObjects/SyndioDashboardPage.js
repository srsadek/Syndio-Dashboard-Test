/// <reference types="Cypress" />

class SyndioDashboard {

	constructor(){}
	
	/*********************Header************************* */
	getHeader(){
		return cy.get('.header');
	}

	/*********************DROP DOWN************************* */
	
	getDropDownElement(){
		return cy.get('#dropdown-button');
	}
	
	openDropdown() {
		cy.log('Clicking on "Change Group" drop down.');
		this.getDropDownElement().click();
	}

	isDropDownActive(){
		return cy.get('body').then((body) => {
			if (body.find('.dropdown>.optionsList').length > 0) {
				return true;
			}
			return false;
		});
	}

	getDropdownElementByName(expectedDropDownItemName){
		return cy.get('.dropdown>.optionsList >li', {timeout: 5000})
		.contains(expectedDropDownItemName);	
	}

	getCurrentlySelectedGroupName(){
		cy.log(`Getting the currently selected group name`);
		return 	cy.get('#dropdown-button > span', {timeout: 5000})
			.then(selectedGroupSpan =>{
				let name = selectedGroupSpan.text();
				Cypress.log({message: `Currently selected group is: "${name}"`});			
				return name;
			});
	}

	selectGroupName(expectedDropDownItemName){
		this.isDropDownActive()
			.then(isActive =>{
				if(!isActive){
					this.openDropdown();
			}
		});
		this.getCurrentlySelectedGroupName()
			.then(selectedGroupName=>{
				cy.log(`Clicking on: "${expectedDropDownItemName}" to select it.`);
				this.getDropdownElementByName(expectedDropDownItemName).click();
				expect(selectedGroupName).to.be.string(expectedDropDownItemName);
			});
	}


	/*********************TAB LIST************************* */
	
	getTabList(){
		return cy.get('.tabList');
	}
	
	getTabButtonsByName(name){
		return cy.get(`ul >li#tab-${name} > button`, {timeout: 5000})
	}

	getGenderTab(){
		return this.getTabButtonsByName('gender');
	}

	getRaceTab(){
		return this.getTabButtonsByName('race');
	}

	getInactiveTab(){
		return cy.get('button.tab.tab-inactive');
	}

	getActiveTab(){
		return cy.get('button.tab.tab-active');
	}

	getTabContentPane(){
		return cy.get('.tabMenu > .content');
	}



	/*********************Demographic stats panel************************* */
	
	getDemographicStatsCardElement(){
		return cy.get('.demographicStats').first();
	}

	getDemographicStatsCardsLabelElement(){
		return cy.get('.demographicStats >label').first();
	}

	getDemographicStatsCardsContentParagraphElement(){
		return cy.get('.demographicStats > p').first();
	}

	
	getDemographicStatsDescParagraphByLabel(label){
		return cy.get('.demographicStats')
		.contains(label)
		.next('p')
	}

}


export default SyndioDashboard;