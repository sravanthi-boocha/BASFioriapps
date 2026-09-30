sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheZC_PROSPECT_CREATEList.iSeeThisPage();
            Then.onTheZC_PROSPECT_CREATEList.onFilterBar().iCheckFilterField("Search String");
            Then.onTheZC_PROSPECT_CREATEList.onTable().iCheckColumns(3, {"ProspectName1":{"header":"Prospect Name"},"StreetName":{"header":"Street"},"CityName":{"header":"City"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheZC_PROSPECT_CREATEList.onFilterBar().iExecuteSearch();
            
            Then.onTheZC_PROSPECT_CREATEList.onTable().iCheckRows();

            When.onTheZC_PROSPECT_CREATEList.onTable().iPressRow(0);
            Then.onTheZC_PROSPECT_CREATEObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});