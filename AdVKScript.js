function showAdOnBegin(){
    if (window.location.toString().indexOf('vk.com') > 0 || window.location.toString().indexOf('m.vk.com') > 0) {
       console.log('Load ad on begin...');
        window.addEventListener('load', function () {

           var user_id = null;   // user's id
           var app_id = 7776768;  // your app's id

           admanInit({
              user_id: user_id,
              app_id: 7776768,
              type: 'preloader'         // 'preloader' or 'rewarded' (default - 'preloader')
              // params: {preview: 1}   // to verify the correct operation of advertising
           }, onAdsReady, onNoAds);

           function onAdsReady(adman) {
              adman.onStarted(function () { console.log('Ad started...'); });
              adman.onCompleted(function () { console.log('Ad completed...'); });
              adman.onSkipped(function () { console.log('Ad skipped...'); });
              adman.onClicked(function () { console.log('Ad clicked...'); });
              adman.start('preroll');
           };
           function onNoAds() { console.log('No ad...'); };
        });
     }
}

function showAdOnGame(){
   if (window.location.toString().indexOf('vk.com') > 0 || window.location.toString().indexOf('m.vk.com') > 0) {
      console.log('Start load...');
      var user_id = null; // user's id
      var app_id = 7776768; // your app's id

      admanInit({
         user_id: user_id,
         app_id: 7776768,
         //params: {preview: 1}, // to verify the correct operation of advertising
         type: 'preloader' // 'preloader' or 'rewarded' (default - 'preloader')
      }, onAdsReady, onNoAds);

      function onAdsReady(adman) {
         adman.onStarted(function () { console.log('Ad started...'); });
         adman.onCompleted(function () { console.log('Ad completed...'); });
         adman.onSkipped(function () { console.log('Ad skipped...'); });
         adman.onClicked(function () { console.log('Ad clicked...'); });
         adman.start('preroll');
      };

      function onNoAds() { console.log('No ad...'); };
   }
}