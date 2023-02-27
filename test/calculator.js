let homepage = require('./pages/homepage')

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
        homepage.enterFirstNumber('2')
        homepage.enterSecondNumber('2')
        homepage.clickGo1()
        homepage.verifyResult('4')
        browser.sleep(2000)
    })

});
