// ==UserScript==
// @name         Faze - Find Planned Offs
// @version      0.3
// @author       Faze
// @description  Liest alle verplanten Offs (Ramme/Ramme + Ramme/Axt) aus einem DS-Ultimate Plan aus und fÃ¼gt sie in das Notizfeld ein
// @run-at       document-idle
// @match        https://ds-ultimate.de/tools/attackPlanner/*
// @downloadURL  https://github.com/fazerize/DSP/raw/main/Faze-FindPlannedOffs.user.js
// @updateURL    https://github.com/fazerize/DSP/raw/main/Faze-FindPlannedOffs.user.js
// @icon         https://avatars.githubusercontent.com/u/166784865?v=4
// ==/UserScript==

"use strict";

const CUSTOM_BUTTON_ANCHOR_ELEMENT_SELECTOR = '[onclick="destroySent()"]';
const NOTE_ELEMENT_SELECTOR = '[name="note"]';
const CUSTOM_BUTTON_ID = 'find-planned-offs-button';

(() => {
    const makeRequestURL = (id, key, start, length) =>
        `https://ds-ultimate.de/tools/attackPlanner/attackListItem/data/${id}/${key}?columns[0][data]=select&columns[0][name]=select&columns[0][searchable]=true&columns[0][orderable]=false&columns[0][search][value]=&columns[0][search][regex]=false&columns[1][data]=start_village_id&columns[1][name]=start_village_id&columns[1][searchable]=true&columns[1][orderable]=true&columns[1][search][value]=&columns[1][search][regex]=false&columns[2][data]=attacker&columns[2][name]=attacker&columns[2][searchable]=true&columns[2][orderable]=false&columns[2][search][value]=&columns[2][search][regex]=false&columns[3][data]=target_village_id&columns[3][name]=target_village_id&columns[3][searchable]=true&columns[3][orderable]=true&columns[3][search][value]=&columns[3][search][regex]=false&columns[4][data]=defender&columns[4][name]=defender&columns[4][searchable]=true&columns[4][orderable]=false&columns[4][search][value]=&columns[4][search][regex]=false&columns[5][data]=slowest_unit&columns[5][name]=slowest_unit&columns[5][searchable]=true&columns[5][orderable]=true&columns[5][search][value]=&columns[5][search][regex]=false&columns[6][data]=type&columns[6][name]=type&columns[6][searchable]=true&columns[6][orderable]=true&columns[6][search][value]=&columns[6][search][regex]=false&columns[7][data]=send_time&columns[7][name]=send_time&columns[7][searchable]=true&columns[7][orderable]=true&columns[7][search][value]=&columns[7][search][regex]=false&columns[8][data]=arrival_time&columns[8][name]=arrival_time&columns[8][searchable]=true&columns[8][orderable]=true&columns[8][search][value]=&columns[8][search][regex]=false&columns[9][data]=time&columns[9][name]=send_time&columns[9][searchable]=true&columns[9][orderable]=true&columns[9][search][value]=&columns[9][search][regex]=false&columns[10][data]=info&columns[10][name]=info&columns[10][searchable]=true&columns[10][orderable]=false&columns[10][search][value]=&columns[10][search][regex]=false&columns[11][data]=action&columns[11][name]=action&columns[11][searchable]=true&columns[11][orderable]=false&columns[11][search][value]=&columns[11][search][regex]=false&columns[12][data]=delete&columns[12][name]=delete&columns[12][searchable]=true&columns[12][orderable]=false&columns[12][search][value]=&columns[12][search][regex]=false&order[0][column]=8&order[0][dir]=desc&start=${start}&length=${length}`;

    const fetchData = async (id, key, start, length) => {
        let requestURL = makeRequestURL(id, key, start, length);

        const response = await fetch(requestURL);
        const data = await response.json();

        return data;
    }

    const retrieveData = async () => {
        let readonlylink = document.querySelector("#link-show").value;
        let listid = readonlylink.split("/")[5];
        let listkey = readonlylink.split("/")[7];

        let totalRecords = 0;
        let counter = 0;
        let batchSize = 200;

        let plannedOffs = [];

        while (counter == 0 || counter < totalRecords) {
            const response = await fetchData(listid, listkey, counter, batchSize);
            const data = response.data;

            totalRecords = response.recordsTotal;

            let coordinates = data.filter(record => record.DT_RowData.type === 2 || record.DT_RowData.type === 8);

            if (coordinates.length > 0) {
                coordinates = coordinates.map(record => `${record.DT_RowData.xStart}|${record.DT_RowData.yStart}`)
                plannedOffs.push(...coordinates);
            }

            counter += batchSize;
        }

        return plannedOffs;
    }

    const anchorElement = document.querySelector(CUSTOM_BUTTON_ANCHOR_ELEMENT_SELECTOR);

    let customButton = anchorElement.cloneNode();
    customButton.id = CUSTOM_BUTTON_ID;
    customButton.value = 'Geplante Offs finden';
    customButton.removeAttribute("onclick");

    anchorElement.after(customButton);

    customButton = document.getElementById(CUSTOM_BUTTON_ID);

    customButton.onclick = async () => {
        const noteElement = document.querySelector(NOTE_ELEMENT_SELECTOR);
        noteElement.value = '';

        const plannedOffs = await retrieveData();
        noteElement.value = plannedOffs.join('\n');

        alert("Geplante Offs wurden in das Notizfeld ausgelesen!");
    };
})();
