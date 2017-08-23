//chrome.runtime.onMessageExternal.addListener(
//  function (request, sender, sendResponse) {
//      var doc = document.getElementById('ams360iframe');
//      var iframe = doc.contentDocument || doc.contentWindow.document;
//      var inject = iframe.createElement('script');
//      inject.src = chrome.extensions.getURL('injectedScript.js');
//      inject.onload = function () {
//          this.remove();
//      };
//      (iframe.head || iframe.documentElement).appendChild(inject);
//      return "Complete";
//  });



chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
    chrome.tabs.query({ active: true, windowType: "normal", currentWindow: true }, function (d) {
        chrome.tabs.sendMessage(d[0].id, { action: "populateForm", agencyCode: request.agencyCode }, function (response) { });
    });
});



