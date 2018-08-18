'user strict'

const type_android = 'ANDROID';
const type_ios = 'iOS'
const type_web = 'WEB'

var dragonNative = {
    requestSNSLogin : function(param) {
        switch (getHandler()) {
            case type_android : androidHandler.requestSNSLogin(param);
                                console.log("androidHandler.requestSNSLogin(param)");
                                break;
            case type_ios : iOSHandler.postMessage({ command : "requestSNSLogin", value : param}); 
                                console.log('iOSHandler.postMessage({ command : "requestSNSLogin", value : param});');
                                break;
       }
    },
    requestRegisterPushToken : function() {
        switch(getHandler()) {
            case type_android : androidHandler.requestRegisterPushToken();
                                    console.log("androidHandler.requestRegisterPushToken()");
                                    break;
            case type_ios : iOSHandler.postMessage({command: "requestRegisterPushToken"})
                                console(`iOSHandler.postMessage({command: "requestRegisterPushToken"})`) 
                                break;
        }
    },
    requestLogout : function() {
        switch(getHandler()) {
            case type_android : androidHandler.requestLogout();
                                    console.log("androidHandler.requestLogout()");
                                    break;
            case type_ios : iOSHandler.postMessage({command: "requestLogout"})
                                console(`iOSHandler.postMessage({command: "requestLogout"})`) 
                                break;
        }
    }
}

function getHandler() {
  if (typeof window === 'undefined') {
    // SSR일 때 작동하지 않도록 방어
    return console.log("SSR.");
  }
  
if (window.dragon) {
    // Call Android interface
    androidHandler = window.dragon;
    return type_android;
  } else if (window.webkit
      && window.webkit.messageHandlers
      && window.webkit.messageHandlers.dragon) {
    // Call iOS interface
    iOSHandler = window.webkit.messageHandlers.dragon;
    return type_ios;
  } else {
    // No Android or iOS interface found
    console.log("No native APIs found.");
    return type_web
  }
}
