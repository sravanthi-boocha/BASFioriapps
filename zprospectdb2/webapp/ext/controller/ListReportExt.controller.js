sap.ui.define([
  "sap/ui/core/mvc/ControllerExtension",
  "sap/ui/core/mvc/OverrideExecution",
  "sap/m/MessageToast",
  "sap/m/MessageBox"
], function(ControllerExtension, OverrideExecution, MessageToast, MessageBox) {
  "use strict";

  alert("ListReportExt.js loaded!");

  return ControllerExtension.extend("porky.zcrprospect.zcrprospect.ext.controller.ListReportExt", {

    metadata: {
      methods: {
        onBeforeRebindTable: {
          public: true,
          final: false,
          overrideExecution: OverrideExecution.After
        }
      }
    },

    override: {

      onInit: function() {
        alert("onInit fired — extension is active!");
      },

      onBeforeRebindTable: function(oEvent) {
        alert("Go button pressed — onBeforeRebindTable fired!");
        MessageToast.show("Go pressed!");

        var oBindingParams = oEvent.getParameter("bindingParams");
        alert("bindingParams: " + JSON.stringify(Object.keys(oBindingParams || {})));
      }

    }

  });
});