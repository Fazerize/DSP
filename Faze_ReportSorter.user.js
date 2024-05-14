// ==UserScript==
// @name         Faze - Report Sorter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  -
// @author       Fazerize
// @run-at       document-idle
// @downloadURL  https://github.com/fazerize/DSP/raw/main/Faze_ReportSorter.user.js
// @updateURL    https://github.com/fazerize/DSP/raw/main/Faze_Reportsorter.user.js
// @icon         https://avatars.githubusercontent.com/u/166784865?v=4
// @match        https://*.die-staemme.de/*screen=report*
// ==/UserScript==

let table = $("#content_value > table > tbody > tr > td:nth-child(2) > table > tbody");
let row = $("<tr></tr>");
let cell = $("<td style='vertical-align: center; text-align:center;' colspan='4'></td>");

function sortReports(name) {
  if (name == "Raubzug löschen") {
    $("img[src*='report_scavenging']").parent().prev().find('input').prop("checked", true);
    $(".btn-cancel").click();
  }
  if (name == "Handel löschen") {
    $("img[src*='report_trade']").parent().prev().find('input').prop("checked", true);
    $(".btn-cancel").click();
  }
  if (name == "Unterstützung löschen") {
    $('.quickedit-label:contains("Deine Unterstützung")').closest(".quickedit.report-title").parent().prev().find('input').prop("checked", true);
    $(".btn-cancel").click();
  }
  if (name == "Weitergeleitet archivieren") {
    $("img[src*='forwarded']").parent().parent().parent().parent().prev().find('input').prop("checked", true);
    $('select[name*="group_id"] option:contains("Archiv")').prop('selected', true);
    $(".btn[name='arch']").click();
  }
}

// Erstellen Sie zuerst die Buttons und hängen Sie sie an
["Raubzug löschen", "Handel löschen", "Unterstützung löschen", "Weitergeleitet archivieren"].forEach(name => {
  let button = $(`<button class="FazeSorter" style="padding:5px; margin:5px;">${name}</button>`);
  cell.append(button);
  row.append(cell);
});

table.prepend(row);

// Binden Sie dann die Ereignisse
$(".FazeSorter").each(function() {
  $(this).click(function() {
      sortReports($(this).text());
      console.log($(this).text());
  });
});
