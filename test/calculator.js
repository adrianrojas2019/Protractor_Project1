let homepage = require('../pages/homepage')

// start local jenkins.war
//java -jar jenkins.war --enable-future-java --httpPort=9191
describe('Demo Calculator Test', function(){

    //https://www.protractortest.org/#/api

    it('addition test', function(){
        homepage.get('http://juliemr.github.io/protractor-demo/')
        homepage.enterFirstNumber('2')
        homepage.enterSecondNumber('2')
        homepage.clickGo()
        homepage.verifyResult('4')
        browser.sleep(2000)
    })
   
    it('substraction test', function(){
        homepage.get('http://juliemr.github.io/protractor-demo/')
        homepage.enterFirstNumber('10')
        homepage.enterSecondNumber('5')
        homepage.selectOperator('-')
        homepage.verifyResult('5')
        browser.sleep(2000)
    })

    it('Failed test', function(){
        homepage.get('http://juliemr.github.io/protractor-demo/')
        homepage.enterFirstNumber('10')
        homepage.enterSecondNumber('5')
        homepage.selectOperator('-')
        homepage.clickGo()
        homepage.verifyResult('35')
        browser.sleep(2000)
    })

});
