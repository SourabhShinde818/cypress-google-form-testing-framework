

export class googleFormPage{

    constructor(){
             this.NameInput="input[jsname='YPqjbf']"
             this.AgeRadioButton="#i12 > .vd3tt > .AB7Lab"
             this.ExerciseFrequencyDropdown=".KKjvXb > .vRMGwf"
             this.SelectExerciseoption=".OA0qNb > [data-value='Yes'] > .vRMGwf"
             this.submitButton =".lRwqcd > .uArJ5e > .l4V7wb > .NPEfkd"
             this.successMessage = ".vHW8K"
            }

    
   
    openURl(){
        cy.visit(Cypress.env('URL')+"/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform")
    }
    enterName(Name){
        cy.get(this.NameInput).type(Name)
    }
    selectAge() {
        
        cy.get(this.AgeRadioButton).click()

    }
    selectExerciseFrequency(){
        cy.get(this.ExerciseFrequencyDropdown).click()
        cy.wait(2000)
        cy.get(this.SelectExerciseoption).click()
    }
    submitForm() {
        cy.get(this.submitButton).click()
    }
    

    verifySubmissionSuccess() {
       return cy.get(this.successMessage)

        }
    verifyURLchange(){
        return cy.url()
    }
    }



