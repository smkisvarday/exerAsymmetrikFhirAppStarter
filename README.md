# Build a FHIR Application

## Summary of Steps to Complete (See corresponding sections below.)
- [ ] Fork this assignment so you can work on your own copy.
- [ ] Build the files described in the tutorial
- [ ] Push your changes back to your GitHub repository.
- [ ] Turn in a link to your GitHub repository for this assignment in Canvas.

## Fork this assignment

* Instructions of forking the repository and cloning to your machine can be found on previous assignments.

## Link to tutorial

* How to build a FHIR application (7 min) https://www.youtube.com/watch?v=FPLVlVpQ2T4&list=PLG9A6ovzPqX7EVwCw9AMiREGRYTVbeOwA&index=7
* Text version of the tutorial https://asymmetrik.com/building-next-gen-fhir-apps/

## Important concepts and notes

* The presenter has you clone the base project directly from their site. https://github.com/Asymmetrik/fhir-app-starter
* Allow about extra time than shown in the video to complete the tutorial on your own. (I had to stop and start the video and use the example in the text version to see the edits the presenter made to the app.)
* I would recommend watching the video and reading through the text version of the tutorial before starting to work on it.
* I had to install yarn on my machine before I could follow the tutorial. https://classic.yarnpkg.com/en/docs/install/#windows-stable
  * You can see if the yarn command is recognized by running `yarn --version` in a terminal after installation.
* My Windows 10 machine did not see yarn after it was installed.
  * It seems some users needed to restart Windows after installing yarn.
  * If that does not work, you may need to set the path correctly. I had to change the PATH variable to C:\Program Files (x86)\Yarn\bin\
  * Start - Edit the system environment variables - Advanced tab - Environment Variables - Path - Edit... - Select the Yarn path (probably last on the list) - Edit - change the yarn path to match the line above
  * I restarted my Windows 10 machine after setting the yarn path and it worked.
* FHIR is a data exchange standard managed by the HL7 organization.
* SMART is a JavaScript app to help build browser-based FHIR applications. The tutorial has a link to some information about SMART. https://fhir.cerner.com/smart/ & https://docs.smarthealthit.org/tutorials/javascript/
* You will need to set up a free Cerner Care account to complete the tutorial. Go ahead and set it up before you start. https://cernercare.com/accounts/login?returnTo=https%3A%2F%2Fcode.cerner.com%2Fdeveloper%2Fsmart-on-fhir%2Fauth%2Fcernercare%2Fcallback%3Forigin%3Dhttps%253A%252F%252Fcode.cerner.com%252Fdeveloper%252Fsmart-on-fhir%252Fapps%26_method%3Dpost
* I used the same settings shown in the tutorial for completing the smart.js file
  * The iss: field link is given in the Cerner sandbox under the name FHIR Spec: dstu2 -


## Link to repository

* Turn a link to your GitHub repository with the site files in Canvas.
