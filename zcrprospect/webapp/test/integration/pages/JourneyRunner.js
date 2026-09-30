sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"porky/zcrprospect/zcrprospect/test/integration/pages/ZC_PROSPECT_CREATEList",
	"porky/zcrprospect/zcrprospect/test/integration/pages/ZC_PROSPECT_CREATEObjectPage"
], function (JourneyRunner, ZC_PROSPECT_CREATEList, ZC_PROSPECT_CREATEObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('porky/zcrprospect/zcrprospect') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_PROSPECT_CREATEList: ZC_PROSPECT_CREATEList,
			onTheZC_PROSPECT_CREATEObjectPage: ZC_PROSPECT_CREATEObjectPage
        },
        async: true
    });

    return runner;
});

