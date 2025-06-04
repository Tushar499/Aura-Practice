({
    doInit : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Opportunity Account', fieldName: 'AccountName', type: 'text'},
            {label: 'Opportunity Name', fieldName: 'Name', type: 'text'},
            {label: 'Opportunity Stage', fieldName: 'StageName', type: 'text'}
        ]);

        var action = component.get("c.getOpportunities");
        action.setCallback(this, function(response){
            if (response.getState() === "SUCCESS") {
                let opps = response.getReturnValue();
                opps.forEach(o => o.AccountName = o.Account ? o.Account.Name : '');
                component.set("v.opps", opps);
            } else {
                console.error(response.getError());
            }
        });
        $A.enqueueAction(action);
    }
})