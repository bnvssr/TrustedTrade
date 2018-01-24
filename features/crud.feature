@TrustedTradeCRUD
Feature: Trusted Trade contract handling
    As a ... 
    I want to ...
    So that ...
  
    Background: the Trusted Trade app is open
        Given I am at Trusted Trade

    @create
    Scenario Outline: create new contract
        When I enter <customer> as customer name
        And I enter <verkoper> as verkoper name
        And I enter <asset> as asset identifier
        When I trigger <action>
        Then the status changes to <status>  
        
        Examples:
        |customer   |verkoper   |asset      |action             |status | 
        |Customer 1 |Verkoper 1 |Asset 1    |Create contract    |nieuw  |

    @update 
    Scenario Outline: update nieuw contract
        Given the <asset>, sold by <customer> from <verkoper> with status <currentStatus>
        When I trigger <action>
        Then the status changes to <newStatus>
        
        Examples:
        |customer   |verkoper   |asset      |action             |currentStatus 	|newStatus	|
        |Customer 1 |Verkoper 1 |Asset 1    |Update contract    |nieuw			|onderweg	|
        |Customer 1 |Verkoper 1 |Asset 1    |Update contract    |onderweg		|onderweg	|
         
    @close 
    Scenario Outline: close contract
        Given the <asset>, sold by <customer> from <verkoper> with status <currentStatus>
        When I trigger <action>
        Then the status changes to <newStatus>   
        
        Examples:
        |customer   |verkoper   |asset      |action             |currentStatus 	|newStatus	|
        |Customer 1 |Verkoper 1 |Asset 1    |Close contract    	|onderweg		|gesloten	|
		
		
	         
    @errors 
    Scenario Outline: Error messages
        Given the <asset>, sold by <customer> from <verkoper> with status <status>
        When I trigger <action>
        Then the <message> is displayed
        
        Examples:
        |customer   |verkoper   |asset      |action             |status 	|message				|
        |none 		|Verkoper 1 |Asset 1    |Create contract    |nieuw		|Geen Customer gegeven!	|
        |Customer 1 |none 		|Asset 1    |Create contract    |nieuw		|Geen Verkoper gegeven!	|
        |Customer 1 |Verkoper 1 |none    	|Create contract    |nieuw		|Geen Asset gegeven!	|
        |Customer 1 |Verkoper 1 |Asset 1   	|Update contract    |onderweg	|Ongeldige Status!		|
		
		
	
		