({
    doInit : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Contact Name', fieldName: 'Name', type: 'text'},
            {label: 'Contact Email', fieldName: 'Email', type: 'email'},
            {label: 'Contact Phone', fieldName: 'Phone', type: 'phone'},
            {label: 'Contact Account', fieldName: 'AccountName', type: 'text'}
        ]);

        var action = component.get("c.getContacts");
        action.setCallback(this, function(response){
            if (response.getState() === "SUCCESS") {
                let contacts = response.getReturnValue();
                contacts.forEach(c => c.AccountName = c.Account ? c.Account.Name : '');
                component.set("v.contacts", contacts);
            } else {
                console.error(response.getError());
            }
        });
        $A.enqueueAction(action);
    }
})