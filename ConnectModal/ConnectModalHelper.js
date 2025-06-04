({
    loadContacts : function(component) {
        let action = component.get("c.getContacts");
        action.setCallback(this, function(response){
            if (response.getState() === "SUCCESS") {
                let raw = response.getReturnValue();
                let options = [];
                let contactMap = {};

                raw.forEach(c => {
                    options.push({ label: c.Name, value: c.Id });
                    contactMap[c.Id] = {
                        accountId: c.AccountId,
                        accountName: c.Account ? c.Account.Name : ''
                    };
                });

                component.set("v.contacts", options);
                component.set("v.contactMap", contactMap);
            }
        });
        $A.enqueueAction(action);
    },

    loadAccounts : function(component) {
        let action = component.get("c.getAccounts");
        action.setCallback(this, function(response){
            if (response.getState() === "SUCCESS") {
                let options = response.getReturnValue().map(a => ({
                    label: a.Name,
                    value: a.Id
                }));
                component.set("v.accounts", options);
            }
        });
        $A.enqueueAction(action);
    },

    loadOpportunities : function(component) {
        let action = component.get("c.getOpportunities");
        action.setCallback(this, function(response){
            if (response.getState() === "SUCCESS") {
                let options = response.getReturnValue().map(o => ({
                    label: o.Name,
                    value: o.Id
                }));
                component.set("v.opportunities", options);
            }
        });
        $A.enqueueAction(action);
    },

    handleContactSelection : function(component, contactId) {
        let contactMap = component.get("v.contactMap");
        let selected = contactMap[contactId];

        if (selected && selected.accountId) {
            component.set("v.hasAccount", true);
            component.set("v.selectedAccountId", selected.accountId);
            component.set("v.selectedAccountName", selected.accountName);
        } else {
            component.set("v.hasAccount", false);
            component.set("v.selectedAccountId", null);
            component.set("v.selectedAccountName", '');
        }
    },
    // showToast : function(title, message, type) {
    //     let toastEvent = $A.get("e.force:showToast");
    //     if (toastEvent) {
    //         toastEvent.setParams({
    //             title: title,
    //             message: message,
    //             type: type,
    //             duration: 3000
    //         });
    //         toastEvent.fire();
    //     }
    // }

})