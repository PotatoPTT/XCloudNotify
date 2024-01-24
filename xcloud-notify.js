// ==UserScript==
// @name         xCloud Notification
// @namespace    https://github.com/PotatoPTT
// @version      1.0.0
// @description  Simple Notification for Xcloud
// @author       PotatoPTT
// @license      MIT
// @match        https://www.xbox.com/*/play*
// @run-at       document-start
// @grant        none
// @updateURL    https://raw.githubusercontent.com/PotatoPTT/XCloudNotify/main/xcloud-notify.meta.js
// @downloadURL  https://raw.githubusercontent.com/PotatoPTT/XCloudNotify/main/xcloud-notify.js
// ==/UserScript==
'use strict';

function verifyNotification() {
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
        let request = args[0];
        let url = (typeof request === 'string') ? request : request.url;
        if (url.endsWith('/configuration') && url.includes('/sessions/cloud/') && request.method === 'GET') {
            console.log("Notification Sent!");
            new Notification('Game is Ready', {
                body: 'Queue finished.'
            });
        }

        return originalFetch(...args);
    };
}

verifyNotification();
