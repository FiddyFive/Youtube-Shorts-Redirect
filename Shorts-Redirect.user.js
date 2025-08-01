// ==UserScript==
// @name         YouTube Shorts Redirect
// @version      1.0
// @description  Redirect YouTube Shorts to the regular viewer.
// @author       Fiddy
// @match        https://www.youtube.com/*
// @run-at       document-start
// ==/UserScript==

window.addEventListener('yt-navigate-finish', function() {
    'use strict';

    // Due to how YouTube navigates, the script needs to run sitewide and check for shorts, rather than using @match https://www.youtube.com/shorts/*
    const path = window.location.pathname.split('/');
    if (path[1] === 'shorts') {
        window.location.replace("https://www.youtube.com/watch/" + path[2]);
    }
});
