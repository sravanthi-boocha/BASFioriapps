sap.ui.define([
  "sap/ui/core/mvc/ControllerExtension",
  "sap/ui/core/mvc/OverrideExecution",
  "sap/m/MessageToast",
  "sap/m/MessageBox"
], function(ControllerExtension, OverrideExecution, MessageToast, MessageBox) {
  "use strict";

  return ControllerExtension.extend("porky.zcrprospect.zcrprospect.ext.controller.ListReportExt", {

    _bSearchAttached: false,
    _bActionRunning: false,

    override: {

      onInit: function() {
        this.base.getView().attachAfterRendering(function() {

          if (this._bSearchAttached) {
            return;
          }

          var oView = this.base.getView();
          var oFilterBar = oView.byId("fe::FilterBar::ZC_PROSPECT_CREATE");

          if (oFilterBar) {
            oFilterBar.attachSearch(this._handleGoPress.bind(this));
            this._bSearchAttached = true;
            MessageToast.show("FilterBar hooked!");
          } else {
            MessageBox.error("FilterBar not found!");
          }

        }.bind(this));
      }

    }, // end override

    _handleGoPress: function(oEvent) {

      if (this._bActionRunning) {
        MessageToast.show("Action already running — skipping...");
        return;
      }

      this._bActionRunning = true;
      MessageToast.show("Go pressed — calling backend action...");

      var oView = this.base.getView();
      var oModel = oView.getModel();
      var oFilterBar = oView.byId("fe::FilterBar::ZC_PROSPECT_CREATE");

      if (!oModel) {
        MessageBox.error("Model not found!");
        this._bActionRunning = false;
        return;
      }

      var oConditions = oFilterBar.getFilterConditions();
      var sSearchTerm = "";

      if (oConditions && oConditions["SearchTerm"] && oConditions["SearchTerm"].length > 0) {
        sSearchTerm = oConditions["SearchTerm"][0].values[0];
      }

      MessageToast.show("SearchTerm: " + (sSearchTerm || "empty"));

      var oOperation = oModel.bindContext(
        "/ZC_PROSPECT_CREATE/com.sap.gateway.srvd.zsd_prospect_create.v0001.searchprospect(...)"
      );

      oOperation.setParameter("SearchTerm", sSearchTerm);

      oOperation.execute().then(function() {
        MessageToast.show("Backend action success — refreshing table!");

        this.base.getExtensionAPI().refresh();

        setTimeout(function() {
          this._bActionRunning = false;
          MessageToast.show("Ready for next Go press");
        }.bind(this), 1000);

      }.bind(this)).catch(function(oError) {
        MessageBox.error("Action failed:\n" + (oError.message || JSON.stringify(oError)));
        console.error("Action error:", oError);
        this._bActionRunning = false;
      }.bind(this));

    } // end _handleGoPress

  }); // end extend

}); // end define