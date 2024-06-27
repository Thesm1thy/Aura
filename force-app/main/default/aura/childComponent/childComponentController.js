({
    sendMessage: function(component, event, helper) {
        var inputText = component.get("v.inputText");
        var messageEvent = component.getEvent("messageEvent");
        messageEvent.setParams({ "message": inputText });
        messageEvent.fire();
    }
})
