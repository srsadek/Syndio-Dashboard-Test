# Syndio-Dashboard-Test
this project automates Syndio dashboard page 

## Overview
This project automates the syndio test dashboard.

## Please follow the instruction to run the tests locally

###### Pre-req: Node and npm latest version must be installed

1. Test application under test is deployed in heroku at : https://syndio-dash-test.herokuapp.com/ . this link may not be available in future. in that case host the app in local
2. if the AUT is running in local then the url needs to be update in the test project
3. To do that, please clone this repository and open the "package.json" file from the root folder
4. Update the "baseUrl" value to the local host value including the port.
5. From the root directory run "npm install" on the command line. this should install all the dependencies
6. Run "npm run on-chrome" to run the tests in chrome browser
7. Run "npm run on-firefox" to run the tests in firefox browser
8. All the runs video will be added to cypress/videos directory. if an error thrown as videos directory can not be found, please create the directory manually and run the npm test commands again. (please note the videos will be overwritten after each run, move the videos to a different directory if needs to be analyzed in different time.)
9. All the screenshots showing failures will be available in cypress/screenshots directory. Please create the directory manually and run the tests again if errors thrown related to directory not found. All files in this directory are overwritten by next test run

for any issues, contact me at sadequrm@gmail.com
