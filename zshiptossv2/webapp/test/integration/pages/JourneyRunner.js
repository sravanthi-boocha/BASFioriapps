sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zshiptossv2/test/integration/pages/ZCSD_SHIPTO_PARTNERSList",
	"zshiptossv2/test/integration/pages/ZCSD_SHIPTO_PARTNERSObjectPage"
], function (JourneyRunner, ZCSD_SHIPTO_PARTNERSList, ZCSD_SHIPTO_PARTNERSObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zshiptossv2') + '/test/flp.html#app-preview',
        pages: {
			onTheZCSD_SHIPTO_PARTNERSList: ZCSD_SHIPTO_PARTNERSList,
			onTheZCSD_SHIPTO_PARTNERSObjectPage: ZCSD_SHIPTO_PARTNERSObjectPage
        },
        async: true
    });

    return runner;
});

