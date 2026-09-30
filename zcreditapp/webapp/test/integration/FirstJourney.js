sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheZC_CREDITAPP_DASHBOARDList.iSeeThisPage();
            Then.onTheZC_CREDITAPP_DASHBOARDList.onTable().iCheckColumns(6, {"Partner":{"header":"Customer"},"Requestno":{"header":"Nof of Attempts"},"Userid":{"header":"Credit App Sent by"},"Status":{"header":"Status"},"Createdatetime":{"header":"Credit App Sent Timestamp"},"Expirydatetime":{"header":"Credit App Expiry Timestamp"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheZC_CREDITAPP_DASHBOARDList.onFilterBar().iExecuteSearch();
            
            Then.onTheZC_CREDITAPP_DASHBOARDList.onTable().iCheckRows();

            When.onTheZC_CREDITAPP_DASHBOARDList.onTable().iPressRow(0);
            Then.onTheZC_CREDITAPP_DASHBOARDObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});