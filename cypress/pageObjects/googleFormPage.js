import { locators } from "../../configfile/config"

export class googleFormPage{

    openURl(){
        
        cy.visit(Cypress.env('URL')+"/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform")
        
    }
    
    enterName(Name){
        
        cy.get(locators.googleForm.NameInput).type(Name)
        
    }
    
    selectAge() {
        
        cy.get(locators.googleForm.AgeRadioButton).click()

    }
    
    selectExerciseFrequency(){
        cy.get(locators.googleForm.ExerciseFrequencyDropdown).click()
        cy.wait(2000)
        cy.get(locators.googleForm.SelectExerciseoption).click()
        
    }
    
    submitForm() {
        
        cy.get(locators.googleForm.submitButton).click()
        
    }
    
    verifySubmissionSuccess() {
        
       return cy.get(locators.googleForm.successMessage)

   }
    
    verifyURLchange(){
        
        return cy.url()
    }
    
 }



