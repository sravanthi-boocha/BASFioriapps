sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'porky.zcrprospect.zcrprospect',
            componentId: 'ZC_PROSPECT_CREATEList',
            contextPath: '/ZC_PROSPECT_CREATE'
        },
        CustomPageDefinitions
    );
});