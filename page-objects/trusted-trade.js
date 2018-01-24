// ./page-objects/trusted-trade.js
 
module.exports = {
 
    url: 'file:///C:/Users/visserbe/dev/bdd/Trusted Trade/tt/index.html',
    title: 'Trusted Trade - prototype',
    
    elements: {
        selectedCustomer: by.name('customer'),
        selectedVerkoper: by.name('verkoper'),
        selectedAsset: by.name('asset'),
        selectedStatus: by.name('status')
    },
    
    loadTrustedTradeAndVerify: function(){
        
        return helpers.loadPage(page.trustedTrade.url)
        .then(function(){
            driver.getTitle()
            .then(function(pageTitle) {
                expect(pageTitle).to.include(page.trustedTrade.title);
            });   
        })
    },
    
    enterCustomer: function(customerName) {
        return driver.findElement(page.trustedTrade.elements.selectedCustomer).sendKeys(customerName)
    },  
    
    enterVerkoper: function(verkoperName) {
        return driver.findElement(page.trustedTrade.elements.selectedVerkoper).sendKeys(verkoperName)
    },
    
    enterAsset: function(assetName) {
        return driver.findElement(page.trustedTrade.elements.selectedAsset).sendKeys(assetName)
    },  
    
    enterStatus: function(status) {
        return driver.findElement(page.trustedTrade.elements.selectedStatus).sendKeys(status)
    },
    
    clickButton: function(buttonCaption) {
        
        var cssBC = 'input[value="' + buttonCaption + '"]';
        
        return driver.findElement(by.css(cssBC))
        .then(function(elm){
            elm.click();
        });
        return
    },
    
    statusIs: function(expectedStatus){
        return helpers.getAttributeValue('div#status select', 'value')
        .then(function(attr){
            expect(expectedStatus).to.equal(attr);
        })
        return
    },
    
    messageIs: function(expectedResponse){
        
        return driver.findElement(by.css('div#response')).getText()
        .then(function(actualResponse){
            expect(expectedResponse).to.contain(actualResponse);  
        })  
       
    }
    
};