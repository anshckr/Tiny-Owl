/*Script starts here*/
// Object to handle search query
var oFindSearchedText = {
    bFindFlag: false,
    queryText: "",
    previousSearchText: "",
    bTextLogged: false,
    bExecutingHelper: false
};

$('#__Test_FindInput').keyup(function (event) {
    findSearchText('#__Test_FindInput', event);
});

// Helper function
function callHelperFunction(options) {
    if (oFindSearchedText.bFindFlag) {
        return;
    };
    oFindSearchedText.bFindFlag = true;
    setTimeout(function () {
        if (oFindSearchedText.bFindFlag) {
            if (!oFindSearchedText.bTextLogged) {
                console.log(options.queryText);
                oFindSearchedText.bTextLogged = true;
            }
        };
    }, 1000); //Assuming 1000ms is the average user response time
};

// Call to get the results based on search query
function findSearchText(sContainerID, oEvent) {
    var checkKeyPressed = oEvent.keyCode;
    var sSearchQuery = $(sContainerID).val().trim();
    if (0 === sSearchQuery.length) {
        return;
    };

    if (checkKeyPressed >= 48 && checkKeyPressed <= 57 || checkKeyPressed >= 65 && checkKeyPressed <= 90 || checkKeyPressed >= 96 && checkKeyPressed <= 105 || (sSearchQuery.split(' ').length <= 2 && oFindSearchedText.previousSearchText !== sSearchQuery)) { //Accept 0-9/a-z/Numeric 0-9/A-Z
        oFindSearchedText.queryText = oFindSearchedText.previousSearchText = sSearchQuery;
        if (sSearchQuery.length) {
            oFindSearchedText.bFindFlag = false;
            oFindSearchedText.bTextLogged = false;
            callHelperFunction(oFindSearchedText);
        }
    }
};

/*Script starts here*/