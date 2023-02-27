let homepage = function(){

    let firstNumber_inpurt = element(by.model('first'))
    let secondNumber_input = element(by.model('second'))
    let goButton = element(by.css('[ng-click="doAddition()"]'))

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

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding', result))
        expect(output.getText()).toEqual(result)
    }
}

module.exports = new homepage()