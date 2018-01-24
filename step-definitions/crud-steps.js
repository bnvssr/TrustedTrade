// ./step-definitions/trusted-trade.js

module.exports = function () {
    
    this.BeforeScenario(function(scenario, done) {
//        console.log('BeforeScenario: ' + scenario.getName());
        done();
    });
    
    this.Given(/^the (.*), sold by (.*) from (.*) with status (.*)$/, function(asset, customer, verkoper, status, done){
        page.trustedTrade.enterCustomer(customer);
        page.trustedTrade.enterVerkoper(verkoper);
        page.trustedTrade.enterAsset(asset);
        page.trustedTrade.enterStatus(status);
        done();
    });

    this.Given(/^I am at Trusted Trade$/, function () {
      
        return page.trustedTrade.loadTrustedTradeAndVerify();
        
    });
    
    this.When(/^I enter (.*) as customer name$/, function(customer) {

        return page.trustedTrade.enterCustomer(customer);
        
    });
    
    this.When(/^I enter (.*) as verkoper name$/, function (verkoper) {
  
        return page.trustedTrade.enterVerkoper(verkoper);
   
    });
    
    this.When(/^I enter (.*) as asset identifier$/, function (asset) {
   
        return page.trustedTrade.enterAsset(asset);
   
    });
    
    this.When(/^I trigger (.*)$/, function (caption) {
        
        return page.trustedTrade.clickButton(caption);
        
    });      
    
    this.Then(/^the status changes to (.*)$/, function (expectedStatus) {
        
        return page.trustedTrade.statusIs(expectedStatus);
        
    });
    
    this.Then(/^the (.*) is displayed$/, function(message){
        
        return page.trustedTrade.messageIs(message);
        
    });

};
