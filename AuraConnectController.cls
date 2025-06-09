public with sharing class AuraConnectController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [SELECT Id, Name, Active__c, Owner.Name FROM Account LIMIT 20];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [SELECT Id, Name, Email, Phone, Account.Name FROM Contact LIMIT 20];
    }

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities() {
        return [SELECT Id, Name, StageName, Account.Name FROM Opportunity LIMIT 20];
    }

    @AuraEnabled(cacheable=true)
    public static List<Aura_Connect__c> getAuraConnects() {
        return [
            SELECT Id, Account_Name__c, Contact_Name__c, Opportunity_Name__c
            FROM Aura_Connect__c
        ];
    }

    @AuraEnabled
    public static String saveConnectAndUpdate(Id contactId, Id accountId, Id opportunityId) {
        Contact contact = [SELECT Id, Name, AccountId FROM Contact WHERE Id = :contactId];
        String contactName = contact.Name;
    
        String accountName = '';
        String opportunityName = '';
        Boolean contactUpdated = false;
    
        if (accountId != null) {
            Account acc = [SELECT Id, Name FROM Account WHERE Id = :accountId];
            accountName = acc.Name;
    
            // Update Contact if no account
            if (contact.AccountId == null) {
                contact.AccountId = acc.Id;
                update contact;
                contactUpdated = true;
            }
        }
    
        if (opportunityId != null) {
            Opportunity opp = [SELECT Name FROM Opportunity WHERE Id = :opportunityId];
            opportunityName = opp.Name;
        }
    
        Aura_Connect__c ac = new Aura_Connect__c();
        ac.Contact_Name__c = contactName;
        ac.Account_Name__c = accountName;
        ac.Opportunity_Name__c = opportunityName;
        insert ac;
    
        return contactUpdated ? 'updated' : 'created';
    }

}