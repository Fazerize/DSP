// ==UserScript==
// @name         Punkt - Verteiler
// @namespace    http://tampermonkey.net/
// @version      1.7
// @description  -
// @author       Fazerize
// @downloadURL  https://github.com/fazerize/DSP/raw/main/Punkt-Verteiler.user.js
// @updateURL    https://github.com/fazerize/DSP/raw/main/Punkt-Verteiler.user.js
// @icon         https://avatars.githubusercontent.com/u/166784865?v=4
// @match        https://*.die-staemme.de/game.php?*screen=mail*mode=forward*
// @match        https://*.die-staemme.de/game.php?*screen=mail*mode=new*
// @match        https://*.die-staemme.de/game.php?*screen=report*mode=process_reports*
// @match        https://*.die-staemme.de/game.php?*screen=report*mode=forward*
// ==/UserScript==

const exceptName = document.getElementById("menu_counter_profile").parentElement.nextElementSibling.querySelectorAll("a")[0].innerHTML;

var win = typeof unsafeWindow != 'undefined' ? unsafeWindow : window;
win.$.ajaxSetup({ cache: true });

window.onload = function() {
    'use strict';

    var div = document.createElement('div');
    div.innerHTML = "<button class='btn' id='btnaddress'>Stammesverteiler</button>";
    var collection = $('#content_value')[0].children[1].children[0].children[0].children[1];
    collection.insertBefore(div, collection.children[0]);
}();

document.querySelector("#btnaddress").addEventListener("click", function(event) {
    fetch("https://faze.live/224adressbuch/fetch_player.php")
        .then(response => response.json())
        .then(data => {
        const spielernamen = data
        .filter(item => item.spielername.toLowerCase() !== exceptName.toLowerCase())
        .map(item => item.spielername)
        .join(";");
        document.querySelector("#to").value = spielernamen;
    });
});
