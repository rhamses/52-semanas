/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src-pwa/custom-service-worker.js":
/*!******************************************!*\
  !*** ./src-pwa/custom-service-worker.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ \"workbox-precaching\");\n/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(workbox_precaching__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var register_service_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! register-service-worker */ \"./node_modules/register-service-worker/index.js\");\n/*\n * This file (which will be your service worker)\n * is picked up by the build system ONLY if\n * quasar.conf > pwa > workboxPluginMode is set to \"InjectManifest\"\n */\n\n // Use with precache injection\n\n(0,workbox_precaching__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)(self.__WB_MANIFEST); // The ready(), registered(), cached(), updatefound() and updated()\n// events passes a ServiceWorkerRegistration instance in their arguments.\n// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration\n\n(0,register_service_worker__WEBPACK_IMPORTED_MODULE_1__.register)('52semanas', {\n  // The registrationOptions object will be passed as the second argument\n  // to ServiceWorkerContainer.register()\n  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter\n  // registrationOptions: { scope: './' },\n  ready() {\n    console.log('Service worker is active.');\n  },\n\n  registered() {\n    console.log('Service worker has been registered.');\n  },\n\n  cached() {\n    console.log('Content has been cached for offline use.');\n  },\n\n  updatefound() {\n    console.log('New content is downloading.');\n  },\n\n  updated() {\n    console.log('New content is available; please refresh.');\n  },\n\n  offline() {\n    console.log('No internet connection found. App is running in offline mode.');\n  },\n\n  error() {\n    console.error('Error during service worker registration:', err);\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMtcHdhL2N1c3RvbS1zZXJ2aWNlLXdvcmtlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBR0E7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBakNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vNTItc2VtYW5hcy8uL3NyYy1wd2EvY3VzdG9tLXNlcnZpY2Utd29ya2VyLmpzP2FlYzIiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSAod2hpY2ggd2lsbCBiZSB5b3VyIHNlcnZpY2Ugd29ya2VyKVxuICogaXMgcGlja2VkIHVwIGJ5IHRoZSBidWlsZCBzeXN0ZW0gT05MWSBpZlxuICogcXVhc2FyLmNvbmYgPiBwd2EgPiB3b3JrYm94UGx1Z2luTW9kZSBpcyBzZXQgdG8gXCJJbmplY3RNYW5pZmVzdFwiXG4gKi9cblxuaW1wb3J0IHsgcHJlY2FjaGVBbmRSb3V0ZSB9IGZyb20gJ3dvcmtib3gtcHJlY2FjaGluZydcbmltcG9ydCB7IHJlZ2lzdGVyIH0gZnJvbSAncmVnaXN0ZXItc2VydmljZS13b3JrZXInXG5cbi8vIFVzZSB3aXRoIHByZWNhY2hlIGluamVjdGlvblxucHJlY2FjaGVBbmRSb3V0ZShzZWxmLl9fV0JfTUFOSUZFU1QpXG5cbi8vIFRoZSByZWFkeSgpLCByZWdpc3RlcmVkKCksIGNhY2hlZCgpLCB1cGRhdGVmb3VuZCgpIGFuZCB1cGRhdGVkKClcbi8vIGV2ZW50cyBwYXNzZXMgYSBTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uIGluc3RhbmNlIGluIHRoZWlyIGFyZ3VtZW50cy5cbi8vIFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb246IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9TZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uXG5cbnJlZ2lzdGVyKCc1MnNlbWFuYXMnLCB7XG4gIC8vIFRoZSByZWdpc3RyYXRpb25PcHRpb25zIG9iamVjdCB3aWxsIGJlIHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50XG4gIC8vIHRvIFNlcnZpY2VXb3JrZXJDb250YWluZXIucmVnaXN0ZXIoKVxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvU2VydmljZVdvcmtlckNvbnRhaW5lci9yZWdpc3RlciNQYXJhbWV0ZXJcblxuICAvLyByZWdpc3RyYXRpb25PcHRpb25zOiB7IHNjb3BlOiAnLi8nIH0sXG5cbiAgcmVhZHkgKC8qIHJlZ2lzdHJhdGlvbiAqLykge1xuICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlIHdvcmtlciBpcyBhY3RpdmUuJylcbiAgfSxcblxuICByZWdpc3RlcmVkICgvKiByZWdpc3RyYXRpb24gKi8pIHtcbiAgICBjb25zb2xlLmxvZygnU2VydmljZSB3b3JrZXIgaGFzIGJlZW4gcmVnaXN0ZXJlZC4nKVxuICB9LFxuXG4gIGNhY2hlZCAoLyogcmVnaXN0cmF0aW9uICovKSB7XG4gICAgY29uc29sZS5sb2coJ0NvbnRlbnQgaGFzIGJlZW4gY2FjaGVkIGZvciBvZmZsaW5lIHVzZS4nKVxuICB9LFxuXG4gIHVwZGF0ZWZvdW5kICgvKiByZWdpc3RyYXRpb24gKi8pIHtcbiAgICBjb25zb2xlLmxvZygnTmV3IGNvbnRlbnQgaXMgZG93bmxvYWRpbmcuJylcbiAgfSxcblxuICB1cGRhdGVkICgvKiByZWdpc3RyYXRpb24gKi8pIHtcbiAgICBjb25zb2xlLmxvZygnTmV3IGNvbnRlbnQgaXMgYXZhaWxhYmxlOyBwbGVhc2UgcmVmcmVzaC4nKVxuICB9LFxuXG4gIG9mZmxpbmUgKCkge1xuICAgIGNvbnNvbGUubG9nKCdObyBpbnRlcm5ldCBjb25uZWN0aW9uIGZvdW5kLiBBcHAgaXMgcnVubmluZyBpbiBvZmZsaW5lIG1vZGUuJylcbiAgfSxcblxuICBlcnJvciAoLyogZXJyICovKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbjonLCBlcnIpXG4gIH1cbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src-pwa/custom-service-worker.js\n");

/***/ }),

/***/ "./node_modules/register-service-worker/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/register-service-worker/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"register\": () => (/* binding */ register),\n/* harmony export */   \"unregister\": () => (/* binding */ unregister)\n/* harmony export */ });\n// Register a service worker to serve assets from local cache.\n\n// This lets the app load faster on subsequent visits in production, and gives\n// it offline capabilities. However, it also means that developers (and users)\n// will only see deployed updates on the \"N+1\" visit to a page, since previously\n// cached resources are updated in the background.\n\nvar isLocalhost = function () { return Boolean(\n  window.location.hostname === 'localhost' ||\n    // [::1] is the IPv6 localhost address.\n    window.location.hostname === '[::1]' ||\n    // 127.0.0.1/8 is considered localhost for IPv4.\n    window.location.hostname.match(\n      /^127(?:\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/\n    )\n); }\n\nvar waitWindowLoad\n// https://github.com/yyx990803/register-service-worker/pull/33#discussion_r394181861\nif (typeof window !== 'undefined') {\n  // Typically, a browser that supports `serviceWorker` should also have supported\n  // `Promise`. But as this package can be used in environments without service\n  // worker support (in that case it would do nothing), there's a chance that\n  // `Promise` does not exist. So we must check for its existence first.\n  if (typeof Promise !== 'undefined') {\n    waitWindowLoad = new Promise(function (resolve) { return window.addEventListener('load', resolve); })\n  } else {\n    waitWindowLoad = { then: function (cb) { return window.addEventListener('load', cb); } }\n  }\n}\n\nfunction register (swUrl, hooks) {\n  if ( hooks === void 0 ) hooks = {};\n\n  var registrationOptions = hooks.registrationOptions; if ( registrationOptions === void 0 ) registrationOptions = {};\n  delete hooks.registrationOptions\n\n  var emit = function (hook) {\n    var args = [], len = arguments.length - 1;\n    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];\n\n    if (hooks && hooks[hook]) {\n      hooks[hook].apply(hooks, args)\n    }\n  }\n\n  if ('serviceWorker' in navigator) {\n    waitWindowLoad.then(function () {\n      if (isLocalhost()) {\n        // This is running on localhost. Lets check if a service worker still exists or not.\n        checkValidServiceWorker(swUrl, emit, registrationOptions)\n        navigator.serviceWorker.ready.then(function (registration) {\n          emit('ready', registration)\n        }).catch(function (error) { return handleError(emit, error); })\n      } else {\n        // Is not local host. Just register service worker\n        registerValidSW(swUrl, emit, registrationOptions)\n        navigator.serviceWorker.ready.then(function (registration) {\n          emit('ready', registration)\n        }).catch(function (error) { return handleError(emit, error); })\n      }\n    })\n  }\n}\n\nfunction handleError (emit, error) {\n  if (!navigator.onLine) {\n    emit('offline')\n  }\n  emit('error', error)\n}\n\nfunction registerValidSW (swUrl, emit, registrationOptions) {\n  navigator.serviceWorker\n    .register(swUrl, registrationOptions)\n    .then(function (registration) {\n      emit('registered', registration)\n      if (registration.waiting) {\n        emit('updated', registration)\n        return\n      }\n      registration.onupdatefound = function () {\n        emit('updatefound', registration)\n        var installingWorker = registration.installing\n        installingWorker.onstatechange = function () {\n          if (installingWorker.state === 'installed') {\n            if (navigator.serviceWorker.controller) {\n              // At this point, the old content will have been purged and\n              // the fresh content will have been added to the cache.\n              // It's the perfect time to display a \"New content is\n              // available; please refresh.\" message in your web app.\n              emit('updated', registration)\n            } else {\n              // At this point, everything has been precached.\n              // It's the perfect time to display a\n              // \"Content is cached for offline use.\" message.\n              emit('cached', registration)\n            }\n          }\n        }\n      }\n    })\n    .catch(function (error) { return handleError(emit, error); })\n}\n\nfunction checkValidServiceWorker (swUrl, emit, registrationOptions) {\n  // Check if the service worker can be found.\n  fetch(swUrl)\n    .then(function (response) {\n      // Ensure service worker exists, and that we really are getting a JS file.\n      if (response.status === 404) {\n        // No service worker found.\n        emit('error', new Error((\"Service worker not found at \" + swUrl)))\n        unregister()\n      } else if (response.headers.get('content-type').indexOf('javascript') === -1) {\n        emit('error', new Error(\n          \"Expected \" + swUrl + \" to have javascript content-type, \" +\n          \"but received \" + (response.headers.get('content-type'))))\n        unregister()\n      } else {\n        // Service worker found. Proceed as normal.\n        registerValidSW(swUrl, emit, registrationOptions)\n      }\n    })\n    .catch(function (error) { return handleError(emit, error); })\n}\n\nfunction unregister () {\n  if ('serviceWorker' in navigator) {\n    navigator.serviceWorker.ready.then(function (registration) {\n      registration.unregister()\n    }).catch(function (error) { return handleError(emit, error); })\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVnaXN0ZXItc2VydmljZS13b3JrZXIvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vNTItc2VtYW5hcy8uL25vZGVfbW9kdWxlcy9yZWdpc3Rlci1zZXJ2aWNlLXdvcmtlci9pbmRleC5qcz84ZWFjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFJlZ2lzdGVyIGEgc2VydmljZSB3b3JrZXIgdG8gc2VydmUgYXNzZXRzIGZyb20gbG9jYWwgY2FjaGUuXG5cbi8vIFRoaXMgbGV0cyB0aGUgYXBwIGxvYWQgZmFzdGVyIG9uIHN1YnNlcXVlbnQgdmlzaXRzIGluIHByb2R1Y3Rpb24sIGFuZCBnaXZlc1xuLy8gaXQgb2ZmbGluZSBjYXBhYmlsaXRpZXMuIEhvd2V2ZXIsIGl0IGFsc28gbWVhbnMgdGhhdCBkZXZlbG9wZXJzIChhbmQgdXNlcnMpXG4vLyB3aWxsIG9ubHkgc2VlIGRlcGxveWVkIHVwZGF0ZXMgb24gdGhlIFwiTisxXCIgdmlzaXQgdG8gYSBwYWdlLCBzaW5jZSBwcmV2aW91c2x5XG4vLyBjYWNoZWQgcmVzb3VyY2VzIGFyZSB1cGRhdGVkIGluIHRoZSBiYWNrZ3JvdW5kLlxuXG52YXIgaXNMb2NhbGhvc3QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBCb29sZWFuKFxuICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnIHx8XG4gICAgLy8gWzo6MV0gaXMgdGhlIElQdjYgbG9jYWxob3N0IGFkZHJlc3MuXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnWzo6MV0nIHx8XG4gICAgLy8gMTI3LjAuMC4xLzggaXMgY29uc2lkZXJlZCBsb2NhbGhvc3QgZm9yIElQdjQuXG4gICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLm1hdGNoKFxuICAgICAgL14xMjcoPzpcXC4oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pKXszfSQvXG4gICAgKVxuKTsgfVxuXG52YXIgd2FpdFdpbmRvd0xvYWRcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS95eXg5OTA4MDMvcmVnaXN0ZXItc2VydmljZS13b3JrZXIvcHVsbC8zMyNkaXNjdXNzaW9uX3IzOTQxODE4NjFcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAvLyBUeXBpY2FsbHksIGEgYnJvd3NlciB0aGF0IHN1cHBvcnRzIGBzZXJ2aWNlV29ya2VyYCBzaG91bGQgYWxzbyBoYXZlIHN1cHBvcnRlZFxuICAvLyBgUHJvbWlzZWAuIEJ1dCBhcyB0aGlzIHBhY2thZ2UgY2FuIGJlIHVzZWQgaW4gZW52aXJvbm1lbnRzIHdpdGhvdXQgc2VydmljZVxuICAvLyB3b3JrZXIgc3VwcG9ydCAoaW4gdGhhdCBjYXNlIGl0IHdvdWxkIGRvIG5vdGhpbmcpLCB0aGVyZSdzIGEgY2hhbmNlIHRoYXRcbiAgLy8gYFByb21pc2VgIGRvZXMgbm90IGV4aXN0LiBTbyB3ZSBtdXN0IGNoZWNrIGZvciBpdHMgZXhpc3RlbmNlIGZpcnN0LlxuICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2FpdFdpbmRvd0xvYWQgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZXNvbHZlKTsgfSlcbiAgfSBlbHNlIHtcbiAgICB3YWl0V2luZG93TG9hZCA9IHsgdGhlbjogZnVuY3Rpb24gKGNiKSB7IHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNiKTsgfSB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyIChzd1VybCwgaG9va3MpIHtcbiAgaWYgKCBob29rcyA9PT0gdm9pZCAwICkgaG9va3MgPSB7fTtcblxuICB2YXIgcmVnaXN0cmF0aW9uT3B0aW9ucyA9IGhvb2tzLnJlZ2lzdHJhdGlvbk9wdGlvbnM7IGlmICggcmVnaXN0cmF0aW9uT3B0aW9ucyA9PT0gdm9pZCAwICkgcmVnaXN0cmF0aW9uT3B0aW9ucyA9IHt9O1xuICBkZWxldGUgaG9va3MucmVnaXN0cmF0aW9uT3B0aW9uc1xuXG4gIHZhciBlbWl0ID0gZnVuY3Rpb24gKGhvb2spIHtcbiAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAoIGxlbi0tID4gMCApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cbiAgICBpZiAoaG9va3MgJiYgaG9va3NbaG9va10pIHtcbiAgICAgIGhvb2tzW2hvb2tdLmFwcGx5KGhvb2tzLCBhcmdzKVxuICAgIH1cbiAgfVxuXG4gIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgd2FpdFdpbmRvd0xvYWQudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaXNMb2NhbGhvc3QoKSkge1xuICAgICAgICAvLyBUaGlzIGlzIHJ1bm5pbmcgb24gbG9jYWxob3N0LiBMZXRzIGNoZWNrIGlmIGEgc2VydmljZSB3b3JrZXIgc3RpbGwgZXhpc3RzIG9yIG5vdC5cbiAgICAgICAgY2hlY2tWYWxpZFNlcnZpY2VXb3JrZXIoc3dVcmwsIGVtaXQsIHJlZ2lzdHJhdGlvbk9wdGlvbnMpXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xuICAgICAgICAgIGVtaXQoJ3JlYWR5JywgcmVnaXN0cmF0aW9uKVxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGVtaXQsIGVycm9yKTsgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElzIG5vdCBsb2NhbCBob3N0LiBKdXN0IHJlZ2lzdGVyIHNlcnZpY2Ugd29ya2VyXG4gICAgICAgIHJlZ2lzdGVyVmFsaWRTVyhzd1VybCwgZW1pdCwgcmVnaXN0cmF0aW9uT3B0aW9ucylcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAgZW1pdCgncmVhZHknLCByZWdpc3RyYXRpb24pXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gaGFuZGxlRXJyb3IoZW1pdCwgZXJyb3IpOyB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3IgKGVtaXQsIGVycm9yKSB7XG4gIGlmICghbmF2aWdhdG9yLm9uTGluZSkge1xuICAgIGVtaXQoJ29mZmxpbmUnKVxuICB9XG4gIGVtaXQoJ2Vycm9yJywgZXJyb3IpXG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyVmFsaWRTVyAoc3dVcmwsIGVtaXQsIHJlZ2lzdHJhdGlvbk9wdGlvbnMpIHtcbiAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbiAgICAucmVnaXN0ZXIoc3dVcmwsIHJlZ2lzdHJhdGlvbk9wdGlvbnMpXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xuICAgICAgZW1pdCgncmVnaXN0ZXJlZCcsIHJlZ2lzdHJhdGlvbilcbiAgICAgIGlmIChyZWdpc3RyYXRpb24ud2FpdGluZykge1xuICAgICAgICBlbWl0KCd1cGRhdGVkJywgcmVnaXN0cmF0aW9uKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJlZ2lzdHJhdGlvbi5vbnVwZGF0ZWZvdW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBlbWl0KCd1cGRhdGVmb3VuZCcsIHJlZ2lzdHJhdGlvbilcbiAgICAgICAgdmFyIGluc3RhbGxpbmdXb3JrZXIgPSByZWdpc3RyYXRpb24uaW5zdGFsbGluZ1xuICAgICAgICBpbnN0YWxsaW5nV29ya2VyLm9uc3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGluc3RhbGxpbmdXb3JrZXIuc3RhdGUgPT09ICdpbnN0YWxsZWQnKSB7XG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcikge1xuICAgICAgICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCB0aGUgb2xkIGNvbnRlbnQgd2lsbCBoYXZlIGJlZW4gcHVyZ2VkIGFuZFxuICAgICAgICAgICAgICAvLyB0aGUgZnJlc2ggY29udGVudCB3aWxsIGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgY2FjaGUuXG4gICAgICAgICAgICAgIC8vIEl0J3MgdGhlIHBlcmZlY3QgdGltZSB0byBkaXNwbGF5IGEgXCJOZXcgY29udGVudCBpc1xuICAgICAgICAgICAgICAvLyBhdmFpbGFibGU7IHBsZWFzZSByZWZyZXNoLlwiIG1lc3NhZ2UgaW4geW91ciB3ZWIgYXBwLlxuICAgICAgICAgICAgICBlbWl0KCd1cGRhdGVkJywgcmVnaXN0cmF0aW9uKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgZXZlcnl0aGluZyBoYXMgYmVlbiBwcmVjYWNoZWQuXG4gICAgICAgICAgICAgIC8vIEl0J3MgdGhlIHBlcmZlY3QgdGltZSB0byBkaXNwbGF5IGFcbiAgICAgICAgICAgICAgLy8gXCJDb250ZW50IGlzIGNhY2hlZCBmb3Igb2ZmbGluZSB1c2UuXCIgbWVzc2FnZS5cbiAgICAgICAgICAgICAgZW1pdCgnY2FjaGVkJywgcmVnaXN0cmF0aW9uKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gaGFuZGxlRXJyb3IoZW1pdCwgZXJyb3IpOyB9KVxufVxuXG5mdW5jdGlvbiBjaGVja1ZhbGlkU2VydmljZVdvcmtlciAoc3dVcmwsIGVtaXQsIHJlZ2lzdHJhdGlvbk9wdGlvbnMpIHtcbiAgLy8gQ2hlY2sgaWYgdGhlIHNlcnZpY2Ugd29ya2VyIGNhbiBiZSBmb3VuZC5cbiAgZmV0Y2goc3dVcmwpXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAvLyBFbnN1cmUgc2VydmljZSB3b3JrZXIgZXhpc3RzLCBhbmQgdGhhdCB3ZSByZWFsbHkgYXJlIGdldHRpbmcgYSBKUyBmaWxlLlxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIC8vIE5vIHNlcnZpY2Ugd29ya2VyIGZvdW5kLlxuICAgICAgICBlbWl0KCdlcnJvcicsIG5ldyBFcnJvcigoXCJTZXJ2aWNlIHdvcmtlciBub3QgZm91bmQgYXQgXCIgKyBzd1VybCkpKVxuICAgICAgICB1bnJlZ2lzdGVyKClcbiAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpLmluZGV4T2YoJ2phdmFzY3JpcHQnKSA9PT0gLTEpIHtcbiAgICAgICAgZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJFeHBlY3RlZCBcIiArIHN3VXJsICsgXCIgdG8gaGF2ZSBqYXZhc2NyaXB0IGNvbnRlbnQtdHlwZSwgXCIgK1xuICAgICAgICAgIFwiYnV0IHJlY2VpdmVkIFwiICsgKHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkpKVxuICAgICAgICB1bnJlZ2lzdGVyKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNlcnZpY2Ugd29ya2VyIGZvdW5kLiBQcm9jZWVkIGFzIG5vcm1hbC5cbiAgICAgICAgcmVnaXN0ZXJWYWxpZFNXKHN3VXJsLCBlbWl0LCByZWdpc3RyYXRpb25PcHRpb25zKVxuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgeyByZXR1cm4gaGFuZGxlRXJyb3IoZW1pdCwgZXJyb3IpOyB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3RlciAoKSB7XG4gIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHkudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XG4gICAgICByZWdpc3RyYXRpb24udW5yZWdpc3RlcigpXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiBoYW5kbGVFcnJvcihlbWl0LCBlcnJvcik7IH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/register-service-worker/index.js\n");

/***/ }),

/***/ "workbox-precaching":
/*!*************************************!*\
  !*** external "workbox-precaching" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("workbox-precaching");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src-pwa/custom-service-worker.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;