/// <reference types="Cypress" />

import groupNames from '../../fixtures/group-names.json';
import groupByFunction from '../../fixtures/group-by-function-data.json';
import groupByRole from '../../fixtures/group-by-role-data.json';

import  SyndioDashboard from '../../PageObjects/SyndioDashboardPage';

let dashboard = null;

describe('Syndio UI', ()=>{

	before(()=>{
		cy.visitUrl(Cypress.config().baseUrl);
		dashboard = new SyndioDashboard();
	});

	/***************************************Group By Function -> Gender**************************************/
	it('Validates demographic stats: Group By Function -> Gender -> Pay Equity Gap', ()=>{

		dashboard.selectGroupName("Group by Function");
		dashboard.getGenderTab().click();

		let data = groupByFunction.data.gender.payEquityGap.data;
		let expectedDesc = `${data.minority.label} earn ${data.minority.value} for every ${data.majority.value} earned by comparable ${data.majority.label}`;

		dashboard.getDemographicStatsDescParagraphByLabel(groupByFunction.data.gender.payEquityGap.label)
				.then(p=>{
					let text = p.text();
					expect(text).to.be.string(expectedDesc);
				})
	});

	it('Validates demographic stats: Group By Function -> Gender -> Employees in Comparison', ()=>{

		dashboard.selectGroupName("Group by Function");
		dashboard.getGenderTab().click();

		let data = groupByFunction.data.gender.employeeComparison.data;
		let expectedDesc = `${data.label} make up ${data.value} of employees`;

		dashboard.getDemographicStatsDescParagraphByLabel(groupByFunction.data.gender.employeeComparison.label)
				.then(p=>{
					let text = p.text();
					expect(text).to.be.string(expectedDesc);
				})
	});

	it('Validates demographic stats: Group By Function -> Gender -> Budget', ()=>{

		dashboard.selectGroupName("Group by Function");
		dashboard.getGenderTab().click();

		let data = groupByFunction.data.gender.budget.data;
		let expectedDesc = `${data.value} minimum recommended budget to reduce pay equity gap`;

		dashboard.getDemographicStatsDescParagraphByLabel(groupByFunction.data.gender.budget.label)
				.then(p=>{
					let text = p.text();
					expect(text).to.be.string(expectedDesc);
				});
	});



	/***************************************Group By Function -> Race**************************************/
	it('Validates demographic stats: Group By Function -> Race -> Pay Equity Gap', ()=>{

		dashboard.selectGroupName("Group by Function");
		dashboard.getRaceTab().click();

		let data = groupByFunction.data.race.payEquityGap.data;
		let expectedDesc = `${data.minority.label} earn ${data.minority.value} for every ${data.majority.value} earned by comparable ${data.majority.label}`;

		dashboard.getDemographicStatsDescParagraphByLabel(groupByFunction.data.race.payEquityGap.label)
				.then(p=>{
					let text = p.text();
					expect(text).to.be.string(expectedDesc);
				})
	});

	it('Validates demographic stats: Group By Function -> Race -> Employees in Comparison', ()=>{

		dashboard.selectGroupName("Group by Function");
		dashboard.getRaceTab().click();

		let data = groupByFunction.data.race.employeeComparison.data;
		let expectedDesc = `${data.label} make up ${data.value} of employees`;

		dashboard.getDemographicStatsDescParagraphByLabel(groupByFunction.data.race.employeeComparison.label)
				.then(p=>{
					let text = p.text();
					expect(text).to.be.string(expectedDesc);
				})
	});

	it('Validates demographic stats: Group By Function -> Race -> Budget', ()=>{

		dashboard.selectGroupName("Group by Function");
		dashboard.getRaceTab().click();

		let data = groupByFunction.data.race.budget.data;
		let expectedDesc = `${data.value} minimum recommended budget to reduce pay equity gap`;

		dashboard.getDemographicStatsDescParagraphByLabel(groupByFunction.data.race.budget.label)
				.then(p=>{
					let text = p.text();
					expect(text).to.be.string(expectedDesc);
				});
	});


	
	/***************************************Group By Function -> Gender**************************************/
	it('Validates demographic stats: Group By Role -> Gender -> Pay Equity Gap', ()=>{

		dashboard.selectGroupName("Group by Role");
		dashboard.getGenderTab().click();

		let data = groupByRole.data.gender.payEquityGap.data;
		let expectedDesc = `${data.minority.label} earn ${data.minority.value} for every ${data.majority.value} earned by comparable ${data.majority.label}`;

		dashboard.getDemographicStatsDescParagraphByLabel(groupByRole.data.gender.payEquityGap.label)
				.then(p=>{
					let text = p.text();
					expect(text).to.be.string(expectedDesc);
				})
	});

	it('Validates demographic stats: Group By Role -> Gender -> Employees in Comparison', ()=>{

		dashboard.selectGroupName("Group by Role");
		dashboard.getGenderTab().click();

		let data = groupByRole.data.gender.employeeComparison.data;
		let expectedDesc = `${data.label} make up ${data.value} of employees`;

		dashboard.getDemographicStatsDescParagraphByLabel(groupByRole.data.gender.employeeComparison.label)
				.then(p=>{
					let text = p.text();
					expect(text).to.be.string(expectedDesc);
				})
	});

	it('Validates demographic stats: Group By Role -> Gender -> Budget', ()=>{

		dashboard.selectGroupName("Group by Role");
		dashboard.getGenderTab().click();

		let data = groupByRole.data.gender.budget.data;
		let expectedDesc = `${data.value} minimum recommended budget to reduce pay equity gap`;

		dashboard.getDemographicStatsDescParagraphByLabel(groupByRole.data.gender.budget.label)
				.then(p=>{
					let text = p.text();
					expect(text).to.be.string(expectedDesc);
				});
	});



	/***************************************Group By Function -> Race**************************************/
	it('Validates demographic stats: Group By Role -> Race -> Pay Equity Gap', ()=>{

		dashboard.selectGroupName("Group by Role");
		dashboard.getRaceTab().click();

		let data = groupByRole.data.race.payEquityGap.data;
		let expectedDesc = `${data.minority.label} earn ${data.minority.value} for every ${data.majority.value} earned by comparable ${data.majority.label}`;

		dashboard.getDemographicStatsDescParagraphByLabel(groupByRole.data.race.payEquityGap.label)
				.then(p=>{
					let text = p.text();
					expect(text).to.be.string(expectedDesc);
				})
	});

	it('Validates demographic stats: Group By Role -> Race -> Employees in Comparison', ()=>{

		dashboard.selectGroupName("Group by Role");
		dashboard.getRaceTab().click();

		let data = groupByRole.data.race.employeeComparison.data;
		let expectedDesc = `${data.label} make up ${data.value} of employees`;

		dashboard.getDemographicStatsDescParagraphByLabel(groupByRole.data.race.employeeComparison.label)
				.then(p=>{
					let text = p.text();
					expect(text).to.be.string(expectedDesc);
				})
	});

	it('Validates demographic stats: Group By Role -> Race -> Budget', ()=>{

		dashboard.selectGroupName("Group by Role");
		dashboard.getRaceTab().click();

		let data = groupByRole.data.race.budget.data;
		let expectedDesc = `${data.value} minimum recommended budget to reduce pay equity gap`;

		dashboard.getDemographicStatsDescParagraphByLabel(groupByRole.data.race.budget.label)
				.then(p=>{
					let text = p.text();
					expect(text).to.be.string(expectedDesc);
				});
	});
});