// ==UserScript==
// @name         Punkt - Adelsgrenzen und Korridore
// @namespace    http://tampermonkey.net/
// @version      3.5
// @description  -
// @author       Fazerize
// @run-at       document-idle
// @grant        GM.xmlHttpRequest
// @grant        GM.getValue
// @grant        GM.setValue
// @downloadURL  https://github.com/fazerize/DSP/raw/main/Punkt-AdelsgrenzenundKorridore.user.js
// @updateURL    https://github.com/fazerize/DSP/raw/main/Punkt-AdelsgrenzenundKorridore.user.js
// @icon         https://avatars.githubusercontent.com/u/166784865?v=4
// @match        https://de224.die-staemme.de/game.php?village=*&screen=map*
// ==/UserScript==

window.addEventListener('load', function() {
  $.ajax({
      type: "GET",
      url: 'https://faze.live/DSP/Punkt224Map.js',
      dataType: "script",
      cache: false
  });
}, false);
