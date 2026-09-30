sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zselectorbiller/test/integration/pages/ZCSD_SELECTOR_BILLER_PARTNERList",
	"zselectorbiller/test/integration/pages/ZCSD_SELECTOR_BILLER_PARTNERObjectPage"
], function (JourneyRunner, ZCSD_SELECTOR_BILLER_PARTNERList, ZCSD_SELECTOR_BILLER_PARTNERObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zselectorbiller') + '/test/flp.html#app-preview',
        pages: {
			onTheZCSD_SELECTOR_BILLER_PARTNERList: ZCSD_SELECTOR_BILLER_PARTNERList,
			onTheZCSD_SELECTOR_BILLER_PARTNERObjectPage: ZCSD_SELECTOR_BILLER_PARTNERObjectPage
        },
        async: true
    });

    return runner;
});

