// ==UserScript==
// @name         Punkt - Angriffswarner
// @version      1.2
// @author       Faze
// @description  Meldung bei Angriffen auf Spieler aus dem Adressbuch
// @run-at       document-idle
// @match        https://*.die-staemme.de/game.php?*screen=place*try=confirm*
// @downloadURL  https://github.com/fazerize/DSP/raw/main/Punkt-Angriffswarner.user.js
// @updateURL    https://github.com/fazerize/DSP/raw/main/Punkt-Angriffswarner.user.js
// @icon         https://avatars.githubusercontent.com/u/166784865?v=4
// ==/UserScript==

var win = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;
win.$.ajaxSetup({ cache: true });

window.onload = function() {
    'use strict';
    if(document.querySelector("#command-data-form > h2").textContent.includes("Angriff")) {
        const target = document.querySelector("table.vis tbody tr:nth-child(3) td:nth-child(2) a").textContent;
        fetch("https://faze.live/224adressbuch/fetch_player.php")
            .then(response => response.json())
            .then(data => {
            const spielernamen = data
            .map(item => item.spielername)
            .join(";");
            if(spielernamen.includes(target)) {
                alert("Achtung! Der Spieler " + target + " befindet sich im Punkt Adressbuch!");
            }
        });
    }
}();
