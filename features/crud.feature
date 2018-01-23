@TrustedTradeCRUD
Feature: Trusted Trade contract handling
    As a ... 
    I want to ...
    So that ...
  
    Background: the Trusted Trade app is open
        Given I am at Trusted Trade
        Then the page title is "Trusted Trade - prototype"

    @create
    Scenario: create new contract
        Given all input field are empty
        When I enter "Customer 1" as customer name
        And I enter "Verkoper 1" as verkoper naam
        And I enter "Asset 1" as asset identifier
        When I trigger "create contract"
        Then the status changes to "nieuw"  

    @update 
    Scenario: update nieuw contract
        Given the customer is "Customer 1"
        And the verkoper is "Verkoper 1"
        And the asset is identified by "Asset 1"
        And the status is "nieuw"
        When I trigger "update contract"
        Then the status changes to "onderweg"

    Scenario: update onderweg contract
        Given the customer is "Customer 1"
        And the verkoper is "Verkoper 1"
        And the asset is identified by "Asset 1"
        And the status is "onderweg"
        When I trigger "update contract"
        Then the status changes to "gesloten"
        
    @close 
    Scenario: close contract
        Given the customer is "Customer 1"
        And the verkoper is "Verkoper 1"
        And the asset is identified by "Asset 1"
        And the status is "onderweg"
        When I trigger "close contract"
        Then the status changes to "gesloten"        