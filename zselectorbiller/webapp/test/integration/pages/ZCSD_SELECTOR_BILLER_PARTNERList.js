sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zselectorbiller',
            componentId: 'ZCSD_SELECTOR_BILLER_PARTNERList',
            contextPath: '/ZCSD_SELECTOR_BILLER_PARTNER'
        },
        CustomPageDefinitions
    );
});