sap.ui.define([
    "sap/ui/core/mvc/Controller"
    
], (Controller) => {
    
    "use strict";

    return Controller.extend("app.firstjsonmodel.controller.View1", {
        onInit() {
          var dataModel=this.getOwnerComponent().getModel("tableData");
          this.getView().setModel(dataModel,"madhuModel");
       
        },
        onPress:function(selectedItem){
            // var sPath=selectedItem.getSource().getBindingContext("madhuModel").getPath();
            // var selectedPath=JSON.stringify(oEvent.getSource().getBindingContext("madhuModel").getProperty(sPath));

            var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("DetailForm",{
                id:selectedItem
            })
        },
        onSelectionChange:function(){
            var context=this.getView().byId("table1").getSelectedContexts();
            if(context.length > 0){
                var items = context.map(function(c){
                    return c.getObject();
                });
            }
            var selectedItem=JSON.stringify(items);
            console.log(selectedItem)
            this.onPress(selectedItem);
            // var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            // oRouter.navTo("DetailForm",{
            //     id:selectedItem
            // });      
        }

        
    });
});