({
    handleValuePass: function(component, event) {
        var value = event.getParam("value");
        var receivedValues = component.get("v.receivedValues");
        receivedValues.push(value);
        component.set("v.receivedValues", receivedValues);
    }
})