// ==UserScript==
// @name         Inoreader Auto-Load Full Article
// @namespace    elddc
// @version      1.0
// @description  Automatically load full content when opening an article in Inoreader
// @author       Elddc
// @match        https://www.inoreader.com/*
// @grant        none
// ==/UserScript==

/* jshint esversion: 6 */
(function () {
	//----- configure (change as desired) -----
	const excludedSources = ['The Associated Press']; //subscriptions to exclude from auto-load
	const waitTime = 200; //time in ms to wait for page load (1 sec: 1000ms)
	//-----------------------------------------

	loadFullArticle();
	window.onpopstate = loadFullArticle;

	function loadFullArticle() {
		if (window.location.pathname.includes('article/')) {
			setTimeout(() => {
				try {
					const source = document.getElementsByClassName('boldlink')[0];
					const button = document.getElementsByClassName('icon-button-mobilize-empty')[0];
					if (!excludedSources.includes(source.innerHTML.trim())) {
						button.click();
					}
				} catch (err) {
					console.log('page has not loaded');
				}
			}, waitTime);
		}
	}
})();
