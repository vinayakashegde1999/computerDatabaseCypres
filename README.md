# computerDatabase UI automation with Cypress
#  Note:  This is not Production ready code and this is only used for showing technical ability For testing purpose , Please take care extra care when running with multiple tests ** 

During Development below are installed in deployment env
Node version : v10.16.3
npm --version 6.13.6

Steps to execute this test suite
clone this repository 

To install all the dependency run the below command

npm i

To run the test 
to visualize the test with cypress interactive mode run with below command on the terminal

npm run cy:open

To run in headless/ in background mode run the below command  on the terminal

npm run cy:run

** Note: Custom reporter is not added in this Repo , please refer the console output / interactive mode for the results ** 


Project Structure
package.json -> For node and project level configurations
cypress.jons -> For cypress settings , on this project video recording is disabled due to memory constraints  on the development machine 

cypress/integration/computerDatabaseUITest -> All the CRUD and E2E tests are added
Page objects are not separated at this time and can be added with more abstractions 

On failure   Screenshots captured in /screenshots

/plugins and /support /fixtures is inherited from cypress project initialization and not used at this moment 

Sample test result output
 (Run Finished)
 

       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  computerDatabaseUITest/createComput      00:04        11        -        -        - │
  │    erTest_spec.js                             │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  computerDatabaseUITest/deleteComput      00:07        11        -        -        - │
  │    erTest_spec.js                             │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  computerDatabaseUITest/E2EComputerT      00:06        11        -        -        - │
  │    est_spec.1.js                             │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  computerDatabaseUITest/editComputer      00:05        11        -        -        - │
  │    Test_spec.js                             │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  computerDatabaseUITest/getComputerT      00:05        11        -        -        - │
  │    est_spec.js                             │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:28        5






