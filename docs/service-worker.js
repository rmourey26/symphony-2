"use strict";var precacheConfig=[["/symphony-2/index.html","d4bb8054f815f393c070ddb944e8ad1a"],["/symphony-2/static/css/symphony.main.css","d51dc2222ac8731b9bae17d7e09380e4"],["/symphony-2/static/media/symphony.calendar.svg","cc1cabf465d47355371c42ca132c45ad"],["/symphony-2/static/media/symphony.cancel.svg","8da3f3749716aab5da1878e001b35e7c"],["/symphony-2/static/media/symphony.contract.svg","603e01f641c0be7ee8d2e69baa59b38b"],["/symphony-2/static/media/symphony.crosshair.svg","2be611b2c64bd181bf320d8393ef701f"],["/symphony-2/static/media/symphony.expand.svg","3a10f08cb71765474bc73601b48e1a8e"],["/symphony-2/static/media/symphony.flip-view.svg","5a2e0d3a3bcc2fe93696f47a5f51a66b"],["/symphony-2/static/media/symphony.hud.png","6b2a3db6ee2e4f5b7944abee43f02ad5"],["/symphony-2/static/media/symphony.landing.jpg","05466253c21d5f63fc0f1d2629581167"],["/symphony-2/static/media/symphony.logo-square.png","e5e1be968edd941749c4f9aec4141ec7"],["/symphony-2/static/media/symphony.next-block.svg","190aeaee2e7c7b00f8083664b373a0b1"],["/symphony-2/static/media/symphony.prev-block.svg","c9fb3a2b1c4978648e79e0696a7ab82e"],["/symphony-2/static/media/symphony.search.svg","ad10c306abd0a8536149a4e96c639459"],["/symphony-2/static/media/symphony.tx-spent.svg","7d1f7f534859122dd351ca2db5429527"],["/symphony-2/static/media/symphony.tx-unspent.svg","45e4bf06d2143bd6534a6bbc26ff9e51"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,a){var s=new URL(e);return a&&s.pathname.match(a)||(s.search+=(s.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),s=createCacheKey(a,hashParamName,t,/\.\w{8}\./);return[a.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/symphony-2/index.html",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});