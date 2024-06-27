({
    rerender: function(component, helper) {
        this.superRerender();

        if (component.get("v.clearInput")) {
            helper.clearInputField(component);
            component.set("v.clearInput", false);
        }
    }
})
