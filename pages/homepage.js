let homepage = function(){

    let firstNumber_inpurt = element(by.model('first'))
    let secondNumber_input = element(by.model('second'))
    let goButton = element(by.css('[ng-click="doAddition()"]'))
    let goOperator = element(by.model('operator'))

    this.get = function (url) {
        browser.get(url)
    }

    this.enterFirstNumber = function(firstNo) {
        firstNumber_inpurt.sendKeys(firstNo)
    }
    this.enterSecondNumber = function(secNo) {
        secondNumber_input.sendKeys(secNo)
    }
    this.clickGo = function(){
        goButton.click()
    }

    this.selectOperator =  function(operator){
        console.log("VOY")
        goOperator.click()
        browser.sleep(1000)
        //select operator and press enter
        goOperator.sendKeys(operator)
        browser.sleep(3000)
        goOperator.click()
    }

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding', result))
        expect(output.getText()).toEqual(result)
    }
}

module.exports = new homepage()