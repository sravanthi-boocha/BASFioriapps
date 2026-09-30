sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'porky.zcrprospect.zcrprospect',
            componentId: 'ZC_PROSPECT_CREATEObjectPage',
            contextPath: '/ZC_PROSPECT_CREATE'
        },
        CustomPageDefinitions
    );
});