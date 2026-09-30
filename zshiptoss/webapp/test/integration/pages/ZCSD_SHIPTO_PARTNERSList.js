sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'porky.ssup.zshiptoss',
            componentId: 'ZCSD_SHIPTO_PARTNERSList',
            contextPath: '/ZCSD_SHIPTO_PARTNERS'
        },
        CustomPageDefinitions
    );
});