// ==UserScript==
// @name         Punkt - Adelsgrenzen und Korridore
// @version      3.6
// @author       Faze
// @description  Show attacks on village
// @run-at       document-idle
// @match        https://de224.die-staemme.de/game.php?village=*&screen=map*
// @downloadURL  https://github.com/fazerize/DSP/raw/main/Punkt-AdelsgrenzenundKorridore.user.js
// @updateURL    https://github.com/fazerize/DSP/raw/main/Punkt-AdelsgrenzenundKorridore.user.js
// @icon         https://avatars.githubusercontent.com/u/166784865?v=4
// ==/UserScript==

window.addEventListener('load', function() {
  $.ajax({
      type: "GET",
      url: 'https://faze.live/DSP/Punkt224Map.js',
      dataType: "script",
      cache: false
  });
}, false);
