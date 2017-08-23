chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.action == 'populateForm') {
        if (document.getElementById("txtAgencyNo") != undefined) {
            document.getElementById("txtAgencyNo").value = msg.agencyCode;
            document.getElementById("txtUserId").focus();
        };
    };
});

