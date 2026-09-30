sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'porky.creditapp.zcreditapp',
            componentId: 'ZC_CREDITAPP_DASHBOARDList',
            contextPath: '/ZC_CREDITAPP_DASHBOARD'
        },
        CustomPageDefinitions
    );
});