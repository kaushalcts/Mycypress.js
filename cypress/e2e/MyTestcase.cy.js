
describe('MyTestCase', () => 
    {
    it('test1-Survey Health Page', () => {
      
    cy.visit("https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform")

    cy.get("//*[@class='HoXoMd D1wxyf RjsPE']/span[1]").type("Kaushal kumar")
    cy.get("//*[@id='i12']").check()
    cy.get("//*[@class='MocG8c HZ3kWc mhLiyf LMgvRb KKjvXb DEh1R']").select('Yes').should('have.value','Yes')
    cy.get("//*[text()='Submit']").click()
    cy.get("//*[text()='Your response has been recorded.']").title().should('eq','Your response has been recorded.')

    
    
    })
  })