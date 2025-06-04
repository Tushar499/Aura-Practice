<p align="center">
  <img src="https://img.shields.io/badge/Salesforce-00A1E0?style=for-the-badge&logo=salesforce&logoColor=white" alt="Salesforce">
  <img src="https://img.shields.io/badge/AuraComponents-40C2F2?style=for-the-badge&logo=salesforce&logoColor=white" alt="Aura Components">
</p>

<h1 align="center">Aura Component App</h1>

<p align="center">
  <em>Detailed requirements for a Salesforce Aura Component application.</em>
</p>

---

## 📝 Task

Create an aura app where there will be 4 aura component showing table on each component

* **Component 1**: Account (Show 3 column - Account Name, Account Status, Account Owner)
* **Component 2**: Contact (Show 4 column - Contact Name, Contact Email, Contact Phone, Contact Account)
* **Component 3**: Opportunity (Show 3 column - Opportunity Account, Opportunity Name, Opportunity Stage)
* **Component 4**: Connected Data (show 3 column - Account, Opportunity and Contact)


## 🔗 "Connect" Functionality

A button on top of the app which will be Labeled "**Connect**"

When the connect button is clicked, following need to be shown either in Modal/Component

1.  Contact input field (it can be lookup, text, picklist)
2.  Account input field (if the selected contact has account already, auto populate account, if not select the account and save/update later)
3.  Opportunity (it can be lookup, text, picklist)
4.  Save and cancel button on the bottom

When you click the save button, it should save/update these records. If the contact doesn't have any associated account, update the contact with the selected account.

This connect data can be stored in a custom object, can be connect using a custom field in each object.

The 4th component(Connected Data) will show all the connections created in the table.

