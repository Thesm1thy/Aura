public with sharing class contactController {
    @AuraEnabled
    public static void createContact(String firstName, String lastName, String accName) {
        Account account = [SELECT Id FROM Account WHERE Name = :accName LIMIT 1];

        Contact newContact = new Contact(
            FirstName = firstName,
            LastName = lastName,
            AccountId = account.Id
        );

        insert newContact;
    }
}
