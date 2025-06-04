({
    doInit : function(component, event, helper) {
        component.set("v.columns", [
            {label: "Contact", fieldName: "Contact_Name__c", type: "text"},
            {label: "Account of Contact", fieldName: "Account_Name__c", type: "text"},
            {label: "Opportunity of Contact", fieldName: "Opportunity_Name__c", type: "text"}
        ]);

        var action = component.get("c.getAuraConnects");
        action.setCallback(this, function(response){
            if (response.getState() === "SUCCESS") {
                component.set("v.connected", response.getReturnValue());
            } else {
                console.error(response.getError());
            }
        });
        $A.enqueueAction(action);
    }
})