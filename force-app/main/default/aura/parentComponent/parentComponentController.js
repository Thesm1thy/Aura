({
    init: function(component, event, helper) {
        var childComp = component.find("childComp");
        childComp.addEventHandler("messageEvent", component.getReference("c.handleMessage"));
    },

    handleMessage: function(component, event, helper) {
        var message = event.getParam("message");
        var messages = component.get("v.messages");
        messages.push(message);
        component.set("v.messages", messages);
    },

    clearChildInput: function(component, event, helper) {
        component.set("v.childClearInput", true);
    }
})
