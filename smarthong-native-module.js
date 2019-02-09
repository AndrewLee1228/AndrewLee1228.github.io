'user strict'

const type_android = 'ANDROID';
const type_ios = 'iOS'
const type_web = 'WEB'

var smNative = {
    registerAccessToken : function(param) {
        switch (getHandler()) {
            case type_android: androidHandler.registerAccessToken(param);
                console.log("androidHandler.registerAccessToken(param)");
                break;
            case type_ios: iOSHandler.postMessage({ command: "registerAccessToken", value: param });
                console.log('iOSHandler.postMessage({ command : "registerAccessToken", value : param});');
                break;
        }
    },
    requestLogout: function () {
        window.webkit.messageHandlers.requestLogout.postMessage()
        console.log(`iOSHandler.requestLogout.postMessage()`)
//         switch (getHandler()) {
//             case type_android: androidHandler.requestLogout();
//                 console.log("androidHandler.requestLogout()");
//                 break;
//             case type_ios: iOSHandler.requestLogout.postMessage()
//                 console.log(`iOSHandler.requestLogout.postMessage()`)
//                 break;
//         }
    }
}

function getHandler() {
  if (typeof window === 'undefined') {
    // SSR(Server Side Rendering)일 때 작동하지 않도록 방어
    return console.log("SSR.");
  }
  
if (window.smarthong) {
    // Call Android interface
    androidHandler = window.smarthong;
    return type_android;
  } else if (window.webkit
      && window.webkit.messageHandlers) {
    // Call iOS interface
    iOSHandler = window.webkit.messageHandlers;
    return type_ios;
  } else {
    // No Android or iOS interface found
    console.log("No native APIs found.");
    return type_web
  }
}
