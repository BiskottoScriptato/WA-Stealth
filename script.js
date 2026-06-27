// ==UserScript==
// @name         WhatsApp Web Stealth Permanent
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Deactivate blue marks so people don't know you viewed the messages
// @author       You
// @match        https://web.whatsapp.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    Object.defineProperty(document, 'hasFocus', {
        value: function() { return false; },
        writable: false,
        configurable: false
    });

    Object.defineProperty(document, 'visibilityState', {
        get: function() { return 'hidden'; },
        configurable: false
    });

    Object.defineProperty(document, 'hidden', {
        get: function() { return true; },
        configurable: false
    });

    const blockEvent = function(e) {
        e.stopImmediatePropagation();
    };

    window.addEventListener('visibilitychange', blockEvent, true);
    window.addEventListener('blur', blockEvent, true);
    window.addEventListener('focus', blockEvent, true);

    console.log("%c[STEALTH ACTIVE] Whatsapp will always think it's unfocused.", "color: #00ff00; font-weight: bold;");
})();
