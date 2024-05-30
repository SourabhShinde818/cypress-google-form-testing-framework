import { googleFormPage } from "../pageObjects/googleFormPage"

const formobj = new googleFormPage();

var formData;

describe('google form submission feature',function(){
  
  before(function(){
    
    formobj.openURl()
    cy.fixture('googleFormTestData').then(function(testdata){
      formData=testdata
      
    })
      
  })
  
  it('google form submission test',function(){
    
     formobj.enterName(formData.name)
     formobj.selectAge()
     formobj.selectExerciseFrequency()
     formobj.submitForm()
     formobj.verifySubmissionSuccess().should('have.text',formData.validationMessage)
     formobj.verifyURLchange().should('include',formData.changedUrl)

  })

})


