/// <reference types="cypress" /> "../../"
import { googleFormPage } from "../pageObjects/googleFormPage"

const formobj = new googleFormPage();



var Fixdata;

describe('test automation',()=>{
  before(function(){
    formobj.openURl()
    cy.fixture('googleFormTestData').then(function(testdata){
       Fixdata=testdata
    })
      
  })
  it('Google Form Submission Test',()=>{
    
     formobj.enterName(Fixdata.name)
     formobj.selectAge()
     formobj.selectExerciseFrequency()
     formobj.submitForm()
     formobj.verifySubmissionSuccess().should('have.text',Fixdata.validationMessage)
     //form response is added in url
     formobj.verifyURLchange().should('include',Fixdata.changedUrl)


  })

})


