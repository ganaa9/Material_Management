sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/odata/v2/ODataModel"
  ], function (UIComponent, ODataModel) {
    "use strict";
  
    return UIComponent.extend("material_management.Component", {
      metadata: {
        manifest: "json"
      },
  
      init: function () {
        UIComponent.prototype.init.apply(this, arguments);
  
        // Initialiser le modèle OData
        var oModel = new ODataModel("/sap/opu/odata/sap/ZMARA_SRV/");
        this.setModel(oModel);
      }
    });
  });
  