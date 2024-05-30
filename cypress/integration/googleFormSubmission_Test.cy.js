import { googleFormPage } from "../pageObjects/googleFormPage"

const formobj = new googleFormPage();

var formData;

describe('Google Form Submission Feature',function(){
  
  before(function(){
    
    formobj.openURl()
    cy.fixture('googleFormTestData').then(function(testdata){
      formData=testdata
      
    })
      
  })
  
  it('Google Form Submission Test',function(){
    
     formobj.enterName(formData.name)
     formobj.selectAge()
     formobj.selectExerciseFrequency()
     formobj.submitForm()
     formobj.verifySubmissionSuccess().should('have.text',formData.validationMessage)
     formobj.verifyURLchange().should('include',formData.changedUrl)

  })

})


