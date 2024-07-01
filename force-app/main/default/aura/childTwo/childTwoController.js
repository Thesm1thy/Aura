({
    handleClick: function(component, event, helper) {
        var inputValue = component.find("inputField").get("v.value");
        var appEvent = $A.get("e.c:PassValueEvent");
        appEvent.setParams({ "value": inputValue });
        appEvent.fire();
    }
})
