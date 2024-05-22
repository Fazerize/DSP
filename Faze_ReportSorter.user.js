// ==UserScript==
// @name         Faze - Report Sorter
// @version      0.5
// @author       Faze
// @description  Sortiert Berichte
// @run-at       document-idle
// @match        https://*.die-staemme.de/game.php?village=*&screen=report*
// @match        https://*.die-staemme.de/game.php?screen=report&mode=*
// @match        https://*.die-staemme.de/game.php?village=*&screen=report&mode=*
// @downloadURL  https://github.com/fazerize/DSP/raw/main/Faze-ReportSorter.user.js
// @updateURL    https://github.com/fazerize/DSP/raw/main/Faze-Reportsorter.user.js
// @icon         https://avatars.githubusercontent.com/u/166784865?v=4
// ==/UserScript==

let table = $(
  "#content_value > table > tbody > tr > td:nth-child(2) > table > tbody"
);
let row = $("<tr></tr>");
let cell = $(
  "<td style='vertical-align: center; text-align:center;' colspan='4'></td>"
);

function sortReports(name) {
  if (name == "Raubzug löschen") {
    $("img[src*='report_scavenging']")
      .parent()
      .prev()
      .find("input")
      .prop("checked", true);
    $(".btn-cancel").click();
  }
  if (name == "Handel löschen") {
    $("img[src*='report_trade']")
      .parent()
      .prev()
      .find("input")
      .prop("checked", true);
    $(".btn-cancel").click();
  }
  if (name == "Unterstützung löschen") {
    $('.quickedit-label:contains("Deine Unterstützung")')
      .closest(".quickedit.report-title")
      .parent()
      .prev()
      .find("input")
      .prop("checked", true);
      $('.quickedit-label:contains("schickt die Unterstützung")')
      .closest(".quickedit.report-title")
      .parent()
      .prev()
      .find("input")
      .prop("checked", true);
    $(".btn-cancel").click();
    $('.quickedit-label:contains("Stammesunterstützung")')
      .closest(".quickedit.report-title")
      .parent()
      .prev()
      .find("input")
      .prop("checked", true);
    $(".btn-cancel").click();
  }
  if (name == "AM löschen") {
    $('.quickedit-label:contains("Warteschlange abgeschlossen")')
      .closest(".quickedit.report-title")
      .parent()
      .prev()
      .find("input")
      .prop("checked", true);
    $('.quickedit-label:contains("Warteschlange unterbrochen")')
      .closest(".quickedit.report-title")
      .parent()
      .prev()
      .find("input")
      .prop("checked", true);
    $(".btn-cancel").click();
  }
  if (name == "Sonstiges löschen") {
    $('.quickedit-label:contains("Adelsreservierung")')
      .closest(".quickedit.report-title")
      .parent()
      .prev()
      .find("input")
      .prop("checked", true);
    $('.quickedit-label:contains("Reserviertes Dorf")')
      .closest(".quickedit.report-title")
      .parent()
      .prev()
      .find("input")
      .prop("checked", true);
    $(".btn-cancel").click();
  }
  if (name == "Weitergeleitet archivieren") {
    $("img[src*='forwarded']")
      .parent()
      .parent()
      .parent()
      .parent()
      .prev()
      .find("input")
      .prop("checked", true);
    $('select[name*="group_id"] option:contains("Archiv")').prop(
      "selected",
      true
    );
    $(".btn[name='arch']").click();
  }
}

if (location.href.includes("view=") === false) {
  //Buttonleiste in Berichte im Kopf verschieben
  const reportTable = document.getElementById('report_list');

  if(location.href.includes('group_id=')) {
      var reportActionForm = document.getElementsByTagName('form')[7];
  } else if(location.href.includes('mode=all') || location.href.includes('mode=attack') || location.href.includes('mode=defense')) {
      var reportActionForm = document.getElementsByTagName('form')[7];
  } else if(location.href.includes('mode=trade') || location.href.includes('mode=support')) {
      var reportActionForm = document.getElementsByTagName('form')[4];
  } else if(location.href.includes('mode=') || location.href.includes('mode=forwarded')) {
      var reportActionForm = document.getElementsByTagName('form')[2];
  } else {
      var reportActionForm = document.getElementsByTagName('form')[7];
  }

  const rowHtml = reportActionForm.getElementsByTagName('table')[1].cloneNode(true);

  // "Select all" Checkbox + Label
  const tableReports = reportActionForm.getElementsByTagName('table')[0];
  const cbxSelectAllHtml = document.getElementById('select_all').cloneNode(true);
  const cbxSelectAllLabel = reportTable.rows[reportTable.rows.length -1].getElementsByTagName('label')[0].cloneNode(true);

  // Änderungen am DOM vornehmen
  tableReports.before(rowHtml);
  tableReports.before(cbxSelectAllHtml);
  tableReports.before(cbxSelectAllLabel);

  [
    "Raubzug löschen",
    "Handel löschen",
    "Unterstützung löschen",
    "AM löschen",
    "Sonstiges löschen",
    "Weitergeleitet archivieren",
  ].forEach((name) => {
    let button = $(
      `<button class="FazeSorter" style="padding:5px; margin:5px;">${name}</button>`
    );
    cell.append(button);
    row.append(cell);
  });

  table.prepend(row);

  // Binden Sie dann die Ereignisse
  $(".FazeSorter").each(function () {
    $(this).click(function () {
      sortReports($(this).text());
      console.log($(this).text());
    });
  });
}
