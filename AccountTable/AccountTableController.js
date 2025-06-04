({
    doInit : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Account Name', fieldName: 'Name', type: 'text'},
            {label: 'Active Status', fieldName: 'Active__c', type: 'text'},
            {label: 'Account Owner', fieldName: 'OwnerName', type: 'text'}
        ]);

        var action = component.get("c.getAccounts");
        action.setCallback(this, function(response){
            if (response.getState() === "SUCCESS") {
                let accounts = response.getReturnValue();
                accounts.forEach(acc => {
                    acc.OwnerName = acc.Owner ? acc.Owner.Name : '';
                });
                component.set("v.accounts", accounts);
            } else {
                console.error("Error loading accounts:", response.getError());
            }
        });
        $A.enqueueAction(action);
    }
})