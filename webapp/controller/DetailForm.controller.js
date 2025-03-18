sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
  
    
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("app.firstjsonmodel.controller.DetailForm", {
        onInit() {
          var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
        
          oRouter.getRoute("DetailForm").attachPatternMatched(this._onMatched,this);
       
        },
        _onMatched:function(oEvent){
            var selectedArguments=oEvent.getParameter("arguments").id;
            var selecredRecord=JSON.parse(selectedArguments);
            // var obj={
            //     id:selecredRecord
            // };
            
            var navigationModel=new JSONModel(selecredRecord);

            navigationModel.setData(selecredRecord);
            this.getView().setModel(navigationModel,"madhuModel");
            console.log(navigationModel);

        },
      
        onPressToView1:function(){
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteView1");

        }
        
   
       
    });
});