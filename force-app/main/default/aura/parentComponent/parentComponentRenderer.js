({
    rerender: function(component, helper) {
        this.superRerender();

        if (component.get("v.childClearInput")) {
            helper.resetChildClearInput(component);
        }
    }
})
