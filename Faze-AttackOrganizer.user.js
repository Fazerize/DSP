// ==UserScript==
// @name         Faze - Attack Organizer
// @version      2.0
// @author       Faze
// @description  Attack Organizer with colors
// @run-at       document-idle
// @match        https://*.die-staemme.de/**&screen=overview
// @match        https://*.die-staemme.de/**&mode=incomings*
// @match        https://*.die-staemme.de/**&screen=info_village&*
// @match        https://*.die-staemme.de/**&screen=place*
// @match        https://*.die-staemme.de/**?screen=place&t=*&village=*
// @match        https://*.die-staemme.de/**?screen=place&village=*
// @match        https://*.die-staemme.de/**?screen=overview&village=*
// @match        https://*.die-staemme.de/**?village=*&screen=overview*
// @match        https://*.die-staemme.de/**?t=*&village=*&screen=overview*
// @downloadURL  https://github.com/fazerize/DSP/raw/main/Faze-AttackOrganizer.user.js
// @updateURL    https://github.com/fazerize/DSP/raw/main/Faze-AttackOrganizer.user.js
// @icon         https://avatars.githubusercontent.com/u/166784865?v=4
// ==/UserScript==

var font_size = 8;
var attack_layout = "column"; //Possible layouts: 'column', 'line', 'nothing'
//{Number: ['Command name', 'button name', 'button color', 'text color']}
var settings = {
  0: ["???", "???", "black", "white"],
  1: ["[mögl.Off]", "Off", "red", "white"],
  2: ["[Fake]", "Fake", "pink", "black"],
  3: ["[Readel]", "Readel", "yellow", "black"],
  4: ["[Readel-Off]", "R-Off", "dyellow", "white"],
  5: [" | Getabbt", "Tab", "orange", "black"],
  6: [" | Geflext", "Flex", "cyan", "black"],
  7: [" | Bunker", "Bunk", "blue", "white"],
  8: [" | DONE", "DONE", "green", "white"],
};
//{ColorName: ['theme color 1', 'theme color 2']}
var colors = {
  red: ["#e20606", "#b70707"],
  green: ["#31c908", "#228c05"],
  blue: ["#050097", "#050097"],
  yellow: ["#ffd91c", "#e8c30d"],
  orange: ["#ef8b10", "#d3790a"],
  lblue: ["#22e5db", "#0cd3c9"],
  lime: ["#0089FF", "#0089FF"],
  white: ["#ffffff", "#dbdbdb"],
  black: ["#000000", "#2b2b2b"],
  gray: ["#adb6c6", "#828891"],
  dorange: ["#ff0000", "#ff0000"],
  pink: ["#ff69b4", "#ff69b4"],
  cyan: ["#00FFFF", "#00FFFF"],
  dyellow: ["#9C8700", "#9C8700"],
};

/*******************QUICBAR ENTRY*************
// name         Attack Organizer with colors
// version      3.0
// author       fmthemaster, Mau Maria (V3.0)
// author       PhilipsNostrum and Kirgonix (V2.0)
// author       Diogo Rocha and Bernas (V1.0)
//Runs in [screen=overview, screeen=place, screen=commands&mode=incomings]
var font_size = 8;
var attack_layout = 'column'; //Possible layouts: 'column', 'line', 'nothing'

//{Number: ['Command name', 'button name', 'button color', 'text color']}
var settings= {0:['[Dead]','D', 'green', 'white'], 1:['[Support]','S', 'lime', 'white'], 2:['[Dodged]','D!', 'orange', 'white'], 3:['[Dodge]','D', 'dorange', 'white'], 4:['[Reconquered]','R!', 'gray', 'white'], 5:['[Reconquer]','R', 'white', 'black'], 6:['[Sniped]','S!', 'lblue', 'black'], 7:['[Snipe]','S', 'blue', 'white'], 8:['[toFUBR]','F', 'black', 'white'], 9:['[FUBRdone]','F!', 'white', 'black'], 10:['[Fake]','Fk', 'pink', 'black'], 11:[' | Stay Alert','A!', 'yellow', 'black']};

//{ColorName: ['theme color 1', 'theme color 2']}
var colors = {'red':['#e20606', '#b70707'], 'green':['#31c908', '#228c05'], 'blue':['#0d83dd', '#0860a3'], 'yellow':['#ffd91c', '#e8c30d'], 'orange':['#ef8b10', '#d3790a'], 'lblue':['#22e5db', '#0cd3c9'], 'lime':['#ffd400', '#ffd400'], 'white':['#ffffff', '#dbdbdb'], 'black':['#000000', '#2b2b2b'], 'gray':['#adb6c6', '#828891'], 'dorange':['#ff0000', '#ff0000'], 'pink':['#ff69b4', '#ff69b4']}
$.getScript('https://gitcdn.xyz/cdn/filipemiguel97/076df367a5f0f3272abc90136749c121/raw/AttackRenamerColors.js')
****************************************/
/******************PROGRAM CODE*********/

function checkColors(color) {
  if (!colors[color]) {
    console.log("Please create settings for the color", color);
    throw "error";
  }
}

checkColors("red");
checkColors("yellow");
checkColors("white");
checkColors("black");

let buttonNames = $.map(settings, (obj) => obj[0]);
let buttonIcons = $.map(settings, (obj) => obj[1]);
let buttonColors = $.map(settings, (obj) => obj[2]);
let buttonTextColors = $.map(settings, (obj) => obj[3]);

function iT(nr, line) {
  console.log("long");
  var html = "";
  if (buttonNames) html += '<span style="float: right;">';
  buttonIcons.forEach(function (nome, num) {
    html +=
      '<button type="button" id="opt' +
      nr +
      "_" +
      num +
      '" class="btn" title="' +
      buttonNames[num] +
      '" style="color: ' +
      getFon(num) +
      "; font-size: " +
      getSize() +
      "px !important; background: linear-gradient(to bottom, " +
      getTop(num) +
      " 30%, " +
      getBot(num) +
      ' 10%)">' +
      nome +
      "</button>";
  });
  html += "</span>";
  $(line).find(".quickedit-content").append(html);
  buttonNames.forEach(function (nome, num) {
    if (nome.indexOf("|") == -1) {
      $("#opt" + nr + "_" + num).click(function () {
        $(line).find(".rename-icon").click();
        $(line)
          .find("input[type=text]")
          .val(
            $(line).find("input[type=text]").val().split(" ")[0] +
              " " +
              buttonNames[num]
          );
        $(line).find("input[type=button]").click();
        iT(nr, line);
      });
    } else if (nome.indexOf("|")) {
      $("#opt" + nr + "_" + num).click(function () {
        $(line).find(".rename-icon").click();
        $(line)
          .find("input[type=text]")
          .val($(line).find("input[type=text]").val() + buttonNames[num]);
        $(line).find("input[type=button]").click();
        iT(nr, line);
      });
    }
  });
}

function iTshort(nr, line) {
  console.log("short");
  var html = "";
  if (buttonNames) html += '<td><span style="float: right;">';
  buttonIcons.forEach(function (nome, num) {
    if (
      buttonNames[num] == " | Bunker" ||
      buttonNames[num] == " | Getabbt" ||
      buttonNames[num] == " | DONE"
    ) {
      html +=
        '<button type="button" id="opt' +
        nr +
        "_" +
        num +
        '" class="btn" title="' +
        buttonNames[num] +
        '" style="color: ' +
        getFon(num) +
        "; font-size: " +
        getSize() +
        "px !important; background: linear-gradient(to bottom, " +
        getTop(num) +
        " 30%, " +
        getBot(num) +
        ' 10%)">' +
        nome +
        "</button>";
    }
  });
  html += "</span></td>";
  $(line).append(html);
  buttonNames.forEach(function (nome, num) {
    if (nome.indexOf("|") == -1) {
      $("#opt" + nr + "_" + num).click(function () {
        $(line).find(".rename-icon").click();
        $(line)
          .find("input[type=text]")
          .val(
            $(line).find("input[type=text]").val().split(" ")[0] +
              " " +
              buttonNames[num]
          );
        $(line).find("input[type=button]").click();
      });
    } else if (nome.indexOf("|")) {
      $("#opt" + nr + "_" + num).click(function () {
        $(line).find(".rename-icon").click();
        $(line)
          .find("input[type=text]")
          .val($(line).find("input[type=text]").val() + buttonNames[num]);
        $(line).find("input[type=button]").click();
      });
    }
  });
}

function getTop(num) {
  if (buttonColors[num]) {
    if (colors[buttonColors[num]]) return colors[buttonColors[num]][0];
  } else {
    return "#b69471";
  }
}

function getBot(num) {
  if (buttonColors[num]) {
    if (colors[buttonColors[num]]) return colors[buttonColors[num]][1];
  } else {
    return "#6c4d2d";
  }
}

function getFon(num) {
  if (buttonTextColors[num]) {
    if (colors[buttonTextColors[num]]) return colors[buttonTextColors[num]][0];
  } else {
    return "#ffffff";
  }
}

function getSize() {
  if (font_size) return font_size;
  else return 12;
}

if (
  location.href.indexOf("screen=overview_villages") == -1 &&
  location.href.indexOf("mode=incomings&subtype=attacks") == -1
) {
  $("#commands_incomings .command-row").each(function (nr, line) {
    if (!isSupport(line)) {
      iT(nr, line, true);
      var name = $.trim($(line).find(".quickedit-label").text());
      var settingindex = check(name);
      if (settingindex !== false) {
        var colorcode = buttonColors[settingindex];
        var color = colors[colorcode][1];
        if (!color) color = "#6c4d2d";
        if (attack_layout === "line") {
          $(line)
            .find("td")
            .each(function (nr, td) {
              $(td).attr(
                "style",
                "background: " + color + " !important; width: 60%;"
              );
              $(line)
                .find("a:eq(0)")
                .attr(
                  "style",
                  "color: white !important; text-shadow:-1px -1px 0 #000,  1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;"
                );
            });
        } else if (attack_layout === "column") {
          $(line)
            .find("td:eq(0)")
            .attr("style", "background: " + color + " !important; width: 60%;");
          $(line)
            .find("a:eq(0)")
            .attr(
              "style",
              "color: white !important; text-shadow:-1px -1px 0 #000,  1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;"
            );
        }
      } else {
        if (attack_layout === "line") {
          $(line)
            .find("td")
            .each(function (nr, td) {
              $(td).attr(
                "style",
                "background: " + colors["white"][1] + " !important;"
              );
            });
          $(line)
            .find("a")
            .each(function (nr, td) {
              $(td).attr(
                "style",
                "color: " + colors["white"][1] + " !important;"
              );
            });
        } else if (attack_layout === "column") {
          $(line)
            .find("td:eq(0)")
            .attr(
              "style",
              "background: " + colors["white"][1] + " !important;"
            );
          $(line)
            .find("a:eq(0)")
            .attr(
              "style",
              "color: white !important; text-shadow:-1px -1px 0 #000,  1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;"
            );
        }
      }
    }
  });
} else {
  $("#incomings_table tr.nowrap").each(function (nr, line) {
    if (!isSupport(line)) {
      iTshort(nr, line, true);
      var name = $.trim($(line).find(".quickedit-label").text());
      var settingindex = check(name);
      if (settingindex !== false) {
        var colorcode = buttonColors[settingindex];
        var color = colors[colorcode][1];
        if (!color) color = "#6c4d2d";
        if (attack_layout === "line") {
          $(line)
            .find("td")
            .each(function (nr, td) {
              $(td).attr(
                "style",
                "background: " + color + " !important; width: 60%;"
              );
              $(line)
                .find("a:eq(0)")
                .attr(
                  "style",
                  "color: white !important; text-shadow:-1px -1px 0 #000,  1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;"
                );
            });
        } else if (attack_layout === "column") {
          $(line)
            .find("td:eq(0)")
            .attr("style", "background: " + color + " !important; width: 60%;");
          $(line)
            .find("a:eq(0)")
            .attr(
              "style",
              "color: white !important; text-shadow:-1px -1px 0 #000,  1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;"
            );
        }
      } else {
        if (attack_layout === "line") {
          $(line)
            .find("td")
            .each(function (nr, td) {
              $(td).attr(
                "style",
                "background: " + colors["white"][1] + " !important;"
              );
            });
          $(line)
            .find("a")
            .each(function (nr, td) {
              $(td).attr(
                "style",
                "color: " + colors["white"][1] + " !important;"
              );
            });
        } else if (attack_layout === "column") {
          $(line)
            .find("td:eq(0)")
            .attr(
              "style",
              "background: " + colors["white"][1] + " !important;"
            );
          $(line)
            .find("a:eq(0)")
            .attr(
              "style",
              "color: white !important; text-shadow:-1px -1px 0 #000,  1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;"
            );
        }
      }
    } else {
      if (attack_layout === "line") {
        $(line)
          .find("td")
          .each(function (nr, td) {
            $(td).attr(
              "style",
              "background: " + colors["yellow"][1] + " !important;"
            );
          });
        $(line)
          .find("a")
          .each(function (nr, td) {
            $(td).attr(
              "style",
              "color: " + colors["white"][1] + " !important;"
            );
          });
      } else if (attack_layout === "column") {
        $(line)
          .find("td:eq(0)")
          .attr("style", "background: " + colors["yellow"][1] + " !important;");
        $(line)
          .find("a:eq(0)")
          .attr(
            "style",
            "color: white !important; text-shadow:-1px -1px 0 #000,  1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;"
          );
      }
    }
  });
}

function check(name) {
  var words = name.trim().split(" ");
  var lastWord = words[words.length - 1];

  var buttonNames = Object.keys(settings).map(function (key) {
    return settings[key][0].replace("| ", "").replace(" ", "");
  });

  var index = buttonNames.indexOf(lastWord);
  if (index !== -1) {
    // Überprüfen, ob das letzte Wort in der Liste der buttonNames enthalten ist
    var id = Object.keys(settings)[index];
    return id;
  }
  return false;
}

function isSupport(line) {
  var scr = $(line).find("img:eq(0)").attr("src");
  if (scr.indexOf("support") >= 0) return true;
  return false;
}
