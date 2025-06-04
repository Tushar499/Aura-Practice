({
    initData : function(component, event, helper) {
        helper.loadContacts(component);
        helper.loadAccounts(component);
        helper.loadOpportunities(component);
    },

    handleContactChange : function(component, event, helper) {
        component.set("v.selectedContactId", event.getSource().get("v.value"));
        helper.handleContactSelection(component, component.get("v.selectedContactId"));
    },

    handleAccountChange : function(component, event) {
        component.set("v.selectedAccountId", event.getSource().get("v.value"));
    },

    handleOpportunityChange : function(component, event) {
        component.set("v.selectedOpportunityId", event.getSource().get("v.value"));
    },

    closeModal : function(component) {
        component.set("v.isOpen", false);
    },

    saveConnection : function(component, event, helper) {
        let contactId = component.get("v.selectedContactId");
        let accountId = component.get("v.selectedAccountId");
        let opportunityId = component.get("v.selectedOpportunityId");

        let action = component.get("c.saveConnectAndUpdate");
        action.setParams({ contactId, accountId, opportunityId });

        action.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS") {
                component.set("v.isOpen", false);
        
                const result = response.getReturnValue();
                if (result === 'updated') {
                    helper.showToast("Updated", "Contact updated with selected Account!", "success");
                } else {
                    helper.showToast("Success", "Connection saved successfully!", "success");
                }
            } else {
                let errors = response.getError();
                console.error(errors);
                helper.showToast("Error", "Failed to save connection", "error");
            }
        });
        $A.enqueueAction(action);
    }
})