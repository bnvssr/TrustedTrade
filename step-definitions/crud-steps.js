module.exports = function () {

    this.Given(/^I am at Trusted Trade$/, function () {
        // load Trusted Trade
        helpers.loadPage(page.trustedTrade.url);
    });

    this.Given(/^all input field are empty$/, function () {

        // driver.wait returns a promise
        return driver.wait(until.elementsLocated(by.name('customer')), 10000)
        .then(function(){
            // return the promise of an element to the following then.
            return driver.findElements(by.name('customer'));
        })
        .then(function (elements) {
            // make sure all elements are empty
            elements.map(function(element, index){
//                element.innerHTML("");
                if (index === 0) {
//                    console.log(element);
                }
            });
        });
    });

    this.Given(/^the customer is "Customer 1"$/, function () {
        // TODO
        driver.findElement(by.name('customer'))
        .then(function(element){
            console.log("text returned element: ", element);
        });
    });
    
    this.Given(/^the verkoper is "Verkoper 1"$/, function () {
        // TODO
    });
    
    this.Given(/^the asset is identified by "Asset 1"$/, function () {
        // TODO
    });
    
    this.Given(/^the status is "nieuw"$/, function () {
        // TODO
    });
    
    this.Given(/^the status is "onderweg"$/, function () {
        // TODO
    });
    
    this.When(/^I enter "Customer 1" as customer name$/, function () {
       // driver.wait returns a promise
        return driver.wait(until.elementsLocated(by.name('customer')), 10000)
        .then(function(){
            // return the promise of an element to the following then.
            return driver.findElements(by.name('customer'));
        })
        .then(function (elements) {
            console.log('customer 1');
            console.log(elements[0].innerHTML);
            elements[0].innerHTML = "Customer 1";
        });        
    });
    
    this.When(/^I enter "Verkoper 1" as verkoper naam$/, function () {
        // TODO
    });
    
    this.When(/^I enter "Asset 1" as asset identifier$/, function () {
        // TODO
    });
    
    this.When(/^I trigger "create contract"$/, function () {
        // TODO
    });    
    
    this.When(/^I trigger "update contract"$/, function () {
        // TODO
    });
    
    this.When(/^I trigger "close contract"$/, function () {
        // TODO
    });
    
    this.Then(/^the page title is "([^"]*)"$/, function (expectedTitle) {
        
        return driver.getTitle().
        then(function(pageTitle) {
            expect(pageTitle).to.equal(expectedTitle);
        });    
    });
    
    this.Then(/^the status changes to "nieuw"$/, function () {
        // TODO
    });
    
    this.Then(/^the status changes to "onderweg"$/, function () {
        // TODO
    });
    
    this.Then(/^the status changes to "gesloten"$/, function () {
        // TODO
    });

};
