sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'porky.creditapp.zcreditapp',
            componentId: 'ZC_CREDITAPP_DASHBOARDObjectPage',
            contextPath: '/ZC_CREDITAPP_DASHBOARD'
        },
        CustomPageDefinitions
    );
});