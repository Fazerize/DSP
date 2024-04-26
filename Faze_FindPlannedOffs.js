// ==UserScript==
// @name         Faze_FindPlannedOffs
// @version      0.1
// @description  Liest alle verplanten Offs (Ramme/Ramme + Ramme/Axt) aus einem DS-Ultimate Plan aus und fügt sie in das Notizfeld ein
// @author       Fazerize
// @downloadURL  https://github.com/fazerize/DSP/raw/main/Faze_FindPlannedOffs.js
// @updateURL    https://github.com/fazerize/DSP/raw/main/Faze_FindPlannedOffs.js
// @icon         https://avatars.githubusercontent.com/u/166784865?v=4
// @match        https://ds-ultimate.de/tools/attackPlanner/*
// @grant        none
// ==/UserScript==

(() => {
    "use strict";
    const buttonid = "FindPlannedOffsBtn";
    var plannedoffs = [];

    function processData(data) {
        for (let item of data.data) {
            if (item.DT_RowData.type === 2 || item.DT_RowData.type === 8) {
                plannedoffs.push(`${item.DT_RowData.xStart}|${item.DT_RowData.yStart}`);
            }
        }
        document.querySelector('[name="note"]').value = plannedoffs.join("\n");
    }

    async function retrieveData() {
        let readonlylink = document.querySelector("#link-show").value;
        let listid = readonlylink.split("/")[5];
        let listkey = readonlylink.split("/")[7];
        let totalRecords = 0;
        const response = await fetch(`https://ds-ultimate.de/tools/attackPlanner/attackListItem/data/${listid}/${listkey}?columns[0][data]=select&columns[0][name]=select&columns[0][searchable]=true&columns[0][orderable]=false&columns[0][search][value]=&columns[0][search][regex]=false&columns[1][data]=start_village_id&columns[1][name]=start_village_id&columns[1][searchable]=true&columns[1][orderable]=true&columns[1][search][value]=&columns[1][search][regex]=false&columns[2][data]=attacker&columns[2][name]=attacker&columns[2][searchable]=true&columns[2][orderable]=false&columns[2][search][value]=&columns[2][search][regex]=false&columns[3][data]=target_village_id&columns[3][name]=target_village_id&columns[3][searchable]=true&columns[3][orderable]=true&columns[3][search][value]=&columns[3][search][regex]=false&columns[4][data]=defender&columns[4][name]=defender&columns[4][searchable]=true&columns[4][orderable]=false&columns[4][search][value]=&columns[4][search][regex]=false&columns[5][data]=slowest_unit&columns[5][name]=slowest_unit&columns[5][searchable]=true&columns[5][orderable]=true&columns[5][search][value]=&columns[5][search][regex]=false&columns[6][data]=type&columns[6][name]=type&columns[6][searchable]=true&columns[6][orderable]=true&columns[6][search][value]=&columns[6][search][regex]=false&columns[7][data]=send_time&columns[7][name]=send_time&columns[7][searchable]=true&columns[7][orderable]=true&columns[7][search][value]=&columns[7][search][regex]=false&columns[8][data]=arrival_time&columns[8][name]=arrival_time&columns[8][searchable]=true&columns[8][orderable]=true&columns[8][search][value]=&columns[8][search][regex]=false&columns[9][data]=time&columns[9][name]=send_time&columns[9][searchable]=true&columns[9][orderable]=true&columns[9][search][value]=&columns[9][search][regex]=false&columns[10][data]=info&columns[10][name]=info&columns[10][searchable]=true&columns[10][orderable]=false&columns[10][search][value]=&columns[10][search][regex]=false&columns[11][data]=action&columns[11][name]=action&columns[11][searchable]=true&columns[11][orderable]=false&columns[11][search][value]=&columns[11][search][regex]=false&columns[12][data]=delete&columns[12][name]=delete&columns[12][searchable]=true&columns[12][orderable]=false&columns[12][search][value]=&columns[12][search][regex]=false&order[0][column]=8&order[0][dir]=desc&start=0&length=200`)
        const data = await response.json();
        processData(data);
        totalRecords = data.recordsTotal;
        let start = 200;
        let length = 200;
        while (start < totalRecords) {
            try {
                const response = await fetch(`https://ds-ultimate.de/tools/attackPlanner/attackListItem/data/${listid}/${listkey}?columns[0][data]=select&columns[0][name]=select&columns[0][searchable]=true&columns[0][orderable]=false&columns[0][search][value]=&columns[0][search][regex]=false&columns[1][data]=start_village_id&columns[1][name]=start_village_id&columns[1][searchable]=true&columns[1][orderable]=true&columns[1][search][value]=&columns[1][search][regex]=false&columns[2][data]=attacker&columns[2][name]=attacker&columns[2][searchable]=true&columns[2][orderable]=false&columns[2][search][value]=&columns[2][search][regex]=false&columns[3][data]=target_village_id&columns[3][name]=target_village_id&columns[3][searchable]=true&columns[3][orderable]=true&columns[3][search][value]=&columns[3][search][regex]=false&columns[4][data]=defender&columns[4][name]=defender&columns[4][searchable]=true&columns[4][orderable]=false&columns[4][search][value]=&columns[4][search][regex]=false&columns[5][data]=slowest_unit&columns[5][name]=slowest_unit&columns[5][searchable]=true&columns[5][orderable]=true&columns[5][search][value]=&columns[5][search][regex]=false&columns[6][data]=type&columns[6][name]=type&columns[6][searchable]=true&columns[6][orderable]=true&columns[6][search][value]=&columns[6][search][regex]=false&columns[7][data]=send_time&columns[7][name]=send_time&columns[7][searchable]=true&columns[7][orderable]=true&columns[7][search][value]=&columns[7][search][regex]=false&columns[8][data]=arrival_time&columns[8][name]=arrival_time&columns[8][searchable]=true&columns[8][orderable]=true&columns[8][search][value]=&columns[8][search][regex]=false&columns[9][data]=time&columns[9][name]=send_time&columns[9][searchable]=true&columns[9][orderable]=true&columns[9][search][value]=&columns[9][search][regex]=false&columns[10][data]=info&columns[10][name]=info&columns[10][searchable]=true&columns[10][orderable]=false&columns[10][search][value]=&columns[10][search][regex]=false&columns[11][data]=action&columns[11][name]=action&columns[11][searchable]=true&columns[11][orderable]=false&columns[11][search][value]=&columns[11][search][regex]=false&columns[12][data]=delete&columns[12][name]=delete&columns[12][searchable]=true&columns[12][orderable]=false&columns[12][search][value]=&columns[12][search][regex]=false&order[0][column]=8&order[0][dir]=desc&start=${start}&length=${length}`)
                const data = await response.json();
                processData(data);
                start += length;
            } catch (error) {
                console.error(error);
            }
        }
        alert("Geplante Offs in das Notizfeld ausgelesen!");
    }
    (async () => {
        const clonebutton = document.querySelector('[onclick="destroySent()"]');
        let newbutton = clonebutton.cloneNode();
        (newbutton.id = buttonid),
            (newbutton.value = "Geplante Offs finden"),
            newbutton.removeAttribute("onclick"),
            clonebutton.after(newbutton),
            (document.getElementById(buttonid).onclick = async () => {
            retrieveData();
        });
    })();
})();
