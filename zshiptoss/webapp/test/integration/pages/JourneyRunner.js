sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"porky/ssup/zshiptoss/test/integration/pages/ZCSD_SHIPTO_PARTNERSList",
	"porky/ssup/zshiptoss/test/integration/pages/ZCSD_SHIPTO_PARTNERSObjectPage"
], function (JourneyRunner, ZCSD_SHIPTO_PARTNERSList, ZCSD_SHIPTO_PARTNERSObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('porky/ssup/zshiptoss') + '/test/flp.html#app-preview',
        pages: {
			onTheZCSD_SHIPTO_PARTNERSList: ZCSD_SHIPTO_PARTNERSList,
			onTheZCSD_SHIPTO_PARTNERSObjectPage: ZCSD_SHIPTO_PARTNERSObjectPage
        },
        async: true
    });

    return runner;
});

