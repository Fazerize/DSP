// ==UserScript==
// @name         Faze - DS Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  -
// @author       Fazerize
// @run-at       document-idle
// @downloadURL  https://github.com/fazerize/DSP/raw/main/Faze-DS_Dark_Mode.user.js
// @updateURL    https://github.com/fazerize/DSP/raw/main/Faze-DS_Dark_Mode.user.js
// @icon         https://avatars.githubusercontent.com/u/166784865?v=4
// @match        https://*.die-staemme.de/*
// ==/UserScript==

(function() {
    var css = `
    c::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #212121;
    }
    html[hide-scrollbar="true"] ::-webkit-scrollbar {
        display:none
    }
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: #212121;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        background-color: #FF0000;
    }
    ::placeholder {
        color: white !important;
    }
    input:-moz-placeholder {
        color: white !important;
    }
    scrollbar {
        ytp-moz-appearance: none !important;
        background: #040406 !important;
    }
    scrollbar[orient="vertical"] {
        min-width: 8px !important;
        max-width: 8px !important;
    }
    scrollbar[orient="horizontal"] {
        min-height: 8px !important;
        max-height: 8px !important;
    }
    scrollbar slider {
        -moz-appearance: none !important;
        background: transparent !important;
    }
    scrollbar thumb {
        -moz-appearance: none !important;
        background: #333 !important;
        border: none !important;
    }
    scrollbar thumb:not(:active):hover {
        background: #383838 !important;
    }
    scrollbar thumb:active, scrollbar thumb:hover:active, scrollbar thumb[active="true"] {
        background: #5c5c5c !important;
        border: none !important;
    }
    scrollbar scrollbarbutton, iron-overlay-backdrop.opened {
        display: none;
    }
    scrollcorner {
        -moz-appearance: none !important;
        background: #040406 !important;
        border: none !important;
    }
    ::-moz-dropdown-list {
        -moz-appearance: none !important;
        border: none !important;
    }
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .box-item, th, .vis > h4, .vis td:not(.luck-item), .row {
        background: rgba(0, 0, 0, .4) !important;
    }
    .luck {
        background-color: rgba(150, 150, 150, .2) !important;
    }
    .widget-button, .list-right > img, .chat-button {
        filter: invert(100%);
    }
    .arrowLeft, .arrowRight {
        filter: grayscale(100%);
    }
    img:not(*) {
        border-radius: 50%;
    }
    #main_layout, .content > .inner {
        background: rgba(0, 0, 0, .5) !important;
        border-radius: 0 0 8px 8px;
        color: #bdbdbd;
    }
    .widget-tabs > li > a {
        background: rgba(0, 0, 0, .3);
        border-radius: 0;
        color: #bdbdbd;
    }
    .selected {
        background: none !important;
        border-radius: 8px 8px 0 0;
        color: #bdbdbd;
    }
    .selected a {
        color: #878787;
    }
    .chat-header, .chat-body, .chat-message, .chat-footer, .chat-input {
        background: rgba(0, 0, 0, .9) !important;
        border-radius: 4px 4px 0 0;
        color: #bdbdbd;
    }
    .bg_left, .bg_bottomcenter, .bg_bottomright, .bg_right, .maincell, .bg_bottomleft, .bg_bottomright, .box, .header-border, .server_info, .content-border, #inner-border, .widget, .head, .forum-content, .row h4, ul, li, .widget-content > div, .tickLabel, .flot-tick-Label, #chartdiv > canvas, .content, .divider, .divider::before, .divider::after, #menu_row > td.menu-item, .bg, .widget-content > div, .content > div, .popup_box_content, .popup_box, .borderimage, .topTable, .top_bar, .menu_column, .decoration, .confirmation-box, #attack_spy_buildings_left, #attack_spy_buildings_right, .premium-advantage, .knight_card, .village-item, #inline_popup {
        background: rgba(0, 0, 0, 0) !important;
        box-shadow: none;
        color: #bdbdbd;
        border: none !important;
        border-image: none !important;
    }
    .village-item.read-only:hover, .village-item.village-selected, .village-item:hover {
        background: rgba(255, 255, 255, .1) !important;
        box-shadow: none;
        color: #bdbdbd;
        border: none !important;
        border-image: none !important;
    }
    .quest-goal, .quest-goal > table {
        background: linear-gradient(to right, rgba(0, 0, 0, .7) 0%, rgba(0, 0, 0, .1) 50%);
        box-shadow: none;
        color: #bdbdbd;
        border-width: 1px;
        border-style: solid;
        border-color: rgba(255, 255, 255, .5);
    }
    .popup_box, #menu_row > td.menu-item > a {
        background: rgba(0, 0, 0, .5) !important;
        border-radius: 8px;
    }
    .flag_box {
        background-color: rgba(0, 0, 0, .5) !important;
        border-radius: 8px;
    }
    .flag_box_empty, flag_box_small {
        opacity: .2;
        border-radius: 8px;
    }
    .flag_count, #village_targets, #village_targets_menu, #village_targets_content {
        background: rgba(0, 0, 0, .5) !important;
        border-radius: 0 0 8px 0;
    }
    .premium_account_hint {
        background: rgba(0, 0, 0, .5) url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/premium/features/Premium_hint.png) no-repeat 4px center;
    }
    .info_box {
        background: rgba(0, 0, 0, .5) url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/questionmark.png) no-repeat 4px center;
    }
    .btn {
        background:rgba(108, 72, 36, .3);
    }
    .btn:hover {
        background:rgba(128, 92, 56, .5);
    }
    .btn-build {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px 1px, rgba(108, 72, 36, .3);
    }
    .btn-build:hover {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px 1px, rgba(128, 92, 56, .5);
    }
    .btn-cancel {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px -174px, rgba(108, 72, 36, .3);
    }
    .btn-cancel:hover {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px -174px, rgba(128, 92, 56, .5);
    }
    .btn-instant, .btn-btr {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px -49px, rgba(108, 72, 36, .3);
    }
    .btn-instant:hover, .btn-btr:hover {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px -49px, rgba(128, 92, 56, .5);
    }
    .btn-bcr {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px -24px, rgba(108, 72, 36, .3);
    }
    .btn-bcr:hover {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px -24px, rgba(128, 92, 56, .5);
    }
    .btn-recruit {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px -125px, rgba(108, 72, 36, .3);
    }
    .btn-recruit:hover {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px -125px, rgba(128, 92, 56, .5);
    }
    .btn-attack {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px -74px, rgba(108, 72, 36, .3);
    }
    .btn-attack:hover {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px -74px, rgba(128, 92, 56, .5);
    }
    .btn-support {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px -99px, rgba(108, 72, 36, .3);
    }
    .btn-support:hover {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px -99px, rgba(128, 92, 56, .5);
    }
    .btn-bcr-disabled, .btn-bcr-disabled:hover {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px -24px, rgba(100, 100, 100, .5);
    }
    .btn-instant-free {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px -49px, rgba(11, 172, 0, .4);
    }
    .btn-instant-free:hover {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px -49px, rgba(31, 192, 0, .5);
    }
    .current-quest {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px 1px, rgba(50, 200, 0, .4) !important;
    }
    .current-quest:hover {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px 1px, rgba(50, 230, 0, .5) !important;
    }
    .btn-research {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px -146px, rgba(108, 72, 36, .3) !important;
    }
    .btn-research:hover {
        background: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/btn/buttons.png) no-repeat 3px -146px, rgba(128, 92, 56, .5) !important;
    }
    .btn-pp{
        background: url("https://dsbr.innogamescdn.com/asset/1d2499b/graphic/btn/buttons.png") no-repeat 3px -224px, rgba(108, 72, 36, .3);
    }
    .btn-pp:hover{
        background: url("https://dsbr.innogamescdn.com/asset/1d2499b/graphic/btn/buttons.png") no-repeat 3px -224px, rgba(128, 92, 56, .5);
    }
    .btn-confirm-yes {
        background: rgba(0, 60, 0, .7) !important;
    }
    .btn-confirm-no {
        background: rgba(90, 0, 0, .7) !important;
    }
    #tooltip {
        background: rgba(0, 0, 0, .8) !important;
        border-radius: 8px;
    }
    .quest {
        background-color: rgba(0, 0, 0, .8) !important;
        border-radius: 8px;
    }
    #footer, .world_button_active, .world_button_inactive, .confirmation-box-content-pane, .labeled-box-label, .active-skill-list > div, .premium-box-content, .premium-box-head, .premium-box-foot, .feature-header, .advantage-content, .knight_card_container, .scavenge-option, #template_create, #map_popup, .report-preview-content, .side-notification, #tooltip_graph > div, #quickbar_inner .main, #quickbar_inner .left, #quickbar_inner .right {
        background: rgba(0, 0, 0, .6) !important;
        color: white !important;
    }
    #footer a {
        color: white !important;
    }
    .menu-column-item > a, .menu-column, .menu-column-item, .corner, .bottom, .chat-new-message-notification, #inline_popup_menu, #inline_popup_main, #tooltip_graph, .slimScrollDiv {
        background: rgb(0, 0, 0) !important;
        opacity: .9;
    }
    .lit .lit-item, #menu_row > td.menu-item > a, #menu_row2 > td, #topContainer, .item_container, .item_container > div, .inventory_items, .inventory_search, .searchbar > a, .labeled-box, .labeled-box-content, .count, .quote_message, .forum, .regimen_container {
        background-color: rgba(0, 0, 0, .3) !important;
    }
    input, .target-input, .float_left {
        background-color: rgba(0, 0, 0, .3) !important;
        color: white !important;
        border: 2px solid rgba(255, 255, 255, .2);
        border-radius: 4px;
    }
    img[alt=Lida], img[title=Lida], img[title=Fechado] {
        opacity: .6;
    }
    .searchbar input[type=submit] {
        background-image: url(https://dsbr.innogamescdn.com/asset/c820c05/graphic/search.png);
    }
    input[type=image] {
        border-radius: 7px !important;
    }
    .award-group-head, .award-group-content, .award-group-foot, .mentoring-cards, .mentor-list-nav, .map-legend-container table, .map_container, .widget_content, .side-notification-container, .vis_item, .igmline, .post, .report_transparent_overlay, .inventory_detail, .spoiler > div, #plunder_list_filters {
        background: rgba(0, 0, 0, .3) !important;
    }
    .spoiler div {
        background: rgba(255, 255, 255, .2);
        border: 1px inset;
        margin: 3px 0;
        padding: 6px;
        overflow: auto;
    }
    .quest-summary {
        background: rgba(0, 0, 0, 0) !important;
        border-color: black;
        border-width: 2px;
    }
    .progress-bar, .ttl_bar {
        background: rgba(255, 255, 255, .2) !important;
    }
    .shared_forum, .reportable.chat-row:hover {
        background: rgba(20, 20, 130, .3) !important;
        border-radius: 0;
    }
    .error_box {
        background: rgba(255, 90, 90, .4) url(https://dsbr.innogamescdn.com/asset/1d2499b/graphic/error.png) no-repeat 3px center;
    }
    .progress-bar > span {
        color: white !important;
    }
    #info_content, .report-preview {
        background: none !important;
        border: white solid 1px;
    }
    .progress-bar > div, .ttl_bar > div {
        background: linear-gradient(to right, rgba(254, 203, 111, 1) 0%, rgba(252, 155, 112, 1) 15%, rgba(237, 106, 111, 1) 30%, rgba(203, 78, 108, 1) 48%, rgba(140, 65, 104, 1) 65%, rgba(81, 60, 99, 1) 82%, rgba(57, 59, 98, 1) 100%);
    }
    .info_box {
        background: url(https://dsbr.innogamescdn.com/asset/1d2499b/graphic/questionmark.png) no-repeat 4px center, rgba(0,0,0,.6) !important;
    }
    #SkyScraperAd, #ContentAd {
        height: 0px;
        width: 0px;
        display:none;
    }
    .thread_edit, .thread_answer, .thread_new, .thread_poll, .tickLabel {
        color: black;
    }
    td:not(.nowrap):not(.village_overview_effect) > img, .friend, .chat-status:before {
        border-radius: 50%;
    }
    strong, a {
        color: white;
    }
    a:hover {
        color: rgb(200, 200, 255) !important;
    }
    img[data-title=Lida]{
        opacity: 30%;
    }
    /* @Agaigetsu's contribution for studio view */

    .popup_style {
        border-color: #000000 #000000 #000000 #000000 !important;
        background-image: none !important;
    }

    .popup_menu {
        background-color: rgba(0, 0, 0, .6) !important;
        background-image: none !important;
    }
    .popup_content {
        background-image: none !important;
        background-color: rgba(0, 0, 0, .5) !important;
    }

    /* BACKGROUND */
     body {
        background: rgb(254, 203, 111);
        background: -moz-linear-gradient(left, rgba(254, 203, 111, 1) 0%, rgba(252, 155, 112, 1) 15%, rgba(237, 106, 111, 1) 30%, rgba(203, 78, 108, 1) 48%, rgba(140, 65, 104, 1) 65%, rgba(81, 60, 99, 1) 82%, rgba(57, 59, 98, 1) 100%);
        background: -webkit-linear-gradient(left, rgba(254, 203, 111, 1) 0%, rgba(252, 155, 112, 1) 15%, rgba(237, 106, 111, 1) 30%, rgba(203, 78, 108, 1) 48%, rgba(140, 65, 104, 1) 65%, rgba(81, 60, 99, 1) 82%, rgba(57, 59, 98, 1) 100%);
        background: linear-gradient(to top right, rgba(254, 203, 111, 1) 0%, rgba(252, 155, 112, 1) 15%, rgba(237, 106, 111, 1) 30%, rgba(203, 78, 108, 1) 48%, rgba(140, 65, 104, 1) 65%, rgba(81, 60, 99, 1) 82%, rgba(57, 59, 98, 1) 100%);
        object-fit: cover !important;
        background-attachment: fixed !important;
        -webkit-background-size: cover !important;
        -moz-background-size: cover !important;
        -o-background-size: cover !important;
        background-size: cover !important;
        color: #bdbdbd;
    }`;

    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
})();
