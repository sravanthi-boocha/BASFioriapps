sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"porky/creditapp/zcreditapp/test/integration/pages/ZC_CREDITAPP_DASHBOARDList",
	"porky/creditapp/zcreditapp/test/integration/pages/ZC_CREDITAPP_DASHBOARDObjectPage"
], function (JourneyRunner, ZC_CREDITAPP_DASHBOARDList, ZC_CREDITAPP_DASHBOARDObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('porky/creditapp/zcreditapp') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_CREDITAPP_DASHBOARDList: ZC_CREDITAPP_DASHBOARDList,
			onTheZC_CREDITAPP_DASHBOARDObjectPage: ZC_CREDITAPP_DASHBOARDObjectPage
        },
        async: true
    });

    return runner;
});

