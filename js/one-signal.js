var addedObservers=!1,app={initialize:function(){document.addEventListener("deviceready",this.onDeviceReady.bind(this),!1)},onDeviceReady:function(){this.receivedEvent("deviceready")},receivedEvent:function(n){document.getElementById(n);console.log("Received Event: "+n),window.plugins.OneSignal.setLogLevel({logLevel:6,visualLevel:0});var e={kOSSettingsKeyAutoPrompt:!1,kOSSettingsKeyInAppLaunchURL:!1};window.plugins.OneSignal.startInit("d1d3d135-805e-4ca8-ae6b-c2cc65784ae7").handleNotificationReceived((function(n){console.log("Did I receive a notification: "+JSON.stringify(n))})).handleNotificationOpened((function(n){var e=JSON.stringify(n);console.log("notificationOpenedCallback: "+e);var i=n.notification.payload.notificationID;console.log("notificationID: "+i);e=n.notification.payload.additionalData.foo;console.log("notificationData: "+e)})).inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification).iOSSettings(e).endInit(),0==addedObservers&&(addedObservers=!0,window.plugins.OneSignal.addEmailSubscriptionObserver((function(n){console.log("Email subscription state changed: \n"+JSON.stringify(n,null,2))})),window.plugins.OneSignal.addSubscriptionObserver((function(n){console.log("Push subscription state changed: "+JSON.stringify(n,null,2))})),window.plugins.OneSignal.addPermissionObserver((function(n){console.log("Push permission state changed: "+JSON.stringify(n,null,2))}))),window.plugins.OneSignal.promptForPushNotificationsWithUserResponse((function(n){console.log("User accepted notifications: "+n)}))}};function triggerOutcome(){window.plugins.OneSignal.sendOutcomeWithValue("cordova",10,(function(){console.log("outcomes sent log")}))}function triggerIAM(){console.log("Triggering any active IAM with Trigger value birthday is true"),window.plugins.OneSignal.addTrigger("birthday","true")}function getIds(){window.plugins.OneSignal.getPermissionSubscriptionState((function(n){document.getElementById("OneSignalUserId").innerHTML="UserId: "+n.subscriptionStatus.userId,document.getElementById("OneSignalPushToken").innerHTML="PushToken: "+n.subscriptionStatus.pushToken,console.log("Player ID: "+n.subscriptionStatus.userId),alert("Player ID: "+n.subscriptionStatus.userId+"\npushToken = "+n.subscriptionStatus.pushToken)}))}function sendTags(){window.plugins.OneSignal.sendTags({PhoneGapKey:"PhoneGapValue",key2:"value2"}),alert("Tags Sent")}function getTags(){window.plugins.OneSignal.getTags((function(n){alert("Tags Received: "+JSON.stringify(n))}))}function deleteTags(){window.plugins.OneSignal.deleteTags(["PhoneGapKey","key2"]),alert("Tags deleted")}function promptLocation(){window.plugins.OneSignal.promptLocation()}function postNotification(){window.plugins.OneSignal.getIds((function(n){var e={contents:{en:"message body"},data:{foo:"bar"},include_player_ids:[n.userId]};window.plugins.OneSignal.postNotification(e,(function(n){console.log("Notification Post Success:",n)}),(function(n){console.log("Notification Post Failed: ",n),alert("Notification Post Failed:\n"+JSON.stringify(n,null,2))}))}))}function setEmail(){console.log("Setting email: "+document.getElementById("email").value),window.plugins.OneSignal.setEmail(document.getElementById("email").value,(function(){console.log("Successfully set email")}),(function(n){alert("Encountered an error setting email: \n"+JSON.stringify(n,null,2))}))}function logoutEmail(){console.log("Logging out of email"),window.plugins.OneSignal.logoutEmail((function(n){console.log("Successfully logged out of email")}),(function(n){alert("Failed to log out of email with error: \n"+JSON.stringify(n,null,2))}))}function setExternalId(){let n=document.getElementById("externalId").value;console.log("Setting external ID to "+n),window.plugins.OneSignal.setExternalUserId(n)}function removeExternalId(){console.log("Removing external ID"),window.plugins.OneSignal.removeExternalUserId()}app.initialize();