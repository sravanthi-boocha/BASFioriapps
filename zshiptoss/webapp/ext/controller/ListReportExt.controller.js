sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension"
], function(ControllerExtension) {
    "use strict";
    return ControllerExtension.extend(
        "porky.ssup.zshiptoss.ext.controller.ListReportExt", {

            _bActionPerformed: false,
            _bListenersAttached: false,

            override: {
                onBeforeRendering: function() {
                    var that = this;
                    setTimeout(function() {
                        if (that._bListenersAttached) return;

                        var oView = that.base.getView();

                        var oMDCTable = oView.byId(
                            "fe::table::ZCSD_SHIPTO_PARTNERS::LineItem"
                        );
                        var oInnerTable = oView.byId(
                            "fe::table::ZCSD_SHIPTO_PARTNERS::LineItem-innerTable"
                        );
                        var oActionButton = oView.byId(
                            "fe::table::ZCSD_SHIPTO_PARTNERS::LineItem::DataFieldForAction::com.sap.gateway.srvd.zsd_shipto_partners.v0001.ssupdate::com.sap.gateway.srvd.zsd_shipto_partners.v0001.ZCSD_SHIPTO_PARTNERSType"
                        );

                        if (oMDCTable && oInnerTable && oActionButton) {
                            oActionButton.attachPress(function() {
                                that._bActionPerformed = true;
                            });

                            var oDomRef = oInnerTable.getDomRef();
                            if (oDomRef) {
                                var oObserver = new MutationObserver(function() {
                                    if (that._bActionPerformed) {
                                        // clear internal model selection context
                                        var oModel = oView.getModel("internal");
                                        var oPages = oModel.getData().pages;
                                        var sKey = Object.keys(oPages)[0];
                                        var sPath = "/pages/" + sKey + "/controls/fe::table::ZCSD_SHIPTO_PARTNERS::LineItem/";
                                        oModel.setProperty(sPath + "numberOfSelectedContexts", 0);
                                        oModel.setProperty(sPath + "selectedContexts", []);

                                        // clear UI selection
                                        oMDCTable.clearSelection();

                                        that._bActionPerformed = false;
                                    }
                                });
                                oObserver.observe(oDomRef, {
                                    childList: true,
                                    subtree: true
                                });
                            }

                            that._bListenersAttached = true;
                        }
                    }, 3000);
                }
            }
        }
    );
});