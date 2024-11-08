(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"gap":10,"backgroundColorRatios":[0],"children":["this.MainViewer"],"scrollBarColor":"#000000","minHeight":0,"watermark":false,"minWidth":0,"id":"rootPlayer","data":{"textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"rate":1,"speechOnInfoWindow":false,"volume":1,"speechOnQuizQuestion":false},"locales":{"pt":"locale/pt.txt"},"defaultLocale":"pt","displayTooltipInTouchScreens":true,"name":"Player1914","history":{}},"backgroundColor":["#FFFFFF"],"start":"this.init()","class":"Player","defaultMenu":["fullscreen","mute","rotation"],"propagateClick":false,"height":"100%","scrollBarMargin":2,"width":"100%","hash": "b6ec910e993483f12cbefd08ff48e742aaff06e1fa222db40988c153a915c443", "definitions": [{"items":["this.PanoramaPlayListItem_1CFAB48A_0D9C_F446_419C_90C71C28F021","this.PanoramaPlayListItem_1CFA648A_0D9C_F446_41A0_93042FFAE3B7","this.PanoramaPlayListItem_1CFB148A_0D9C_F446_41A6_2B875B514C8D","this.PanoramaPlayListItem_1CFA948A_0D9C_F446_4187_4AEB268B3B3F"],"class":"PlayList","id":"mainPlayList"},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_017B2D5E_0D75_74F0_415F_D28219025A7F","initialPosition":{"pitch":-2.61,"class":"PanoramaCameraPosition","yaw":-35.91},"class":"PanoramaCamera","id":"panorama_0680A24C_0D75_6CD7_41A2_E7AEC0B1C56A_camera"},{"hfovMax":130,"label":trans('panorama_0680A24C_0D75_6CD7_41A2_E7AEC0B1C56A.label'),"adjacentPanoramas":[{"data":{"overlayID":"overlay_025F19B4_0D73_3C49_41A8_8217BCB68A28"},"panorama":"this.panorama_0680F53C_0D75_14B7_418A_295A20BE3F0A","distance":25.91,"class":"AdjacentPanorama","yaw":-25.49,"select":"this.overlay_025F19B4_0D73_3C49_41A8_8217BCB68A28.get('areas').forEach(function(a){ a.trigger('click') })"},{"data":{"overlayID":"overlay_1DCED7B8_0D73_13B9_419E_D641D78F4B24"},"panorama":"this.panorama_001A5CC1_0D75_15D0_4186_B5D9EDAE7E59","distance":22.63,"class":"AdjacentPanorama","yaw":-2.63,"select":"this.overlay_1DCED7B8_0D73_13B9_419E_D641D78F4B24.get('areas').forEach(function(a){ a.trigger('click') })"}],"id":"panorama_0680A24C_0D75_6CD7_41A2_E7AEC0B1C56A","hfov":360,"thumbnailUrl":"media/panorama_0680A24C_0D75_6CD7_41A2_E7AEC0B1C56A_t.jpg","data":{"label":"IMG_20241106_153322_00_080"},"frames":[{"cube":{"class":"ImageResource","levels":[{"width":24576,"url":"media/panorama_0680A24C_0D75_6CD7_41A2_E7AEC0B1C56A_0/{face}/0/{row}_{column}.jpg","rowCount":8,"tags":"ondemand","height":4096,"colCount":48,"class":"TiledImageResourceLevel"},{"width":12288,"url":"media/panorama_0680A24C_0D75_6CD7_41A2_E7AEC0B1C56A_0/{face}/1/{row}_{column}.jpg","rowCount":4,"tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"url":"media/panorama_0680A24C_0D75_6CD7_41A2_E7AEC0B1C56A_0/{face}/2/{row}_{column}.jpg","rowCount":2,"tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"url":"media/panorama_0680A24C_0D75_6CD7_41A2_E7AEC0B1C56A_0/{face}/3/{row}_{column}.jpg","rowCount":1,"tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_0680A24C_0D75_6CD7_41A2_E7AEC0B1C56A_t.jpg"}],"class":"Panorama","overlays":["this.overlay_1DCED7B8_0D73_13B9_419E_D641D78F4B24","this.overlay_025F19B4_0D73_3C49_41A8_8217BCB68A28","this.panorama_0680A24C_0D75_6CD7_41A2_E7AEC0B1C56A_tcap0"],"vfov":180},{"hfovMax":130,"label":trans('panorama_0680F53C_0D75_14B7_418A_295A20BE3F0A.label'),"adjacentPanoramas":[{"data":{"overlayID":"overlay_02D85B03_0D7D_3C48_41A1_CE7241DF7604"},"panorama":"this.panorama_0682D995_0D75_3C70_4192_5B35ED1F1CBC","distance":25.31,"class":"AdjacentPanorama","yaw":-12.54,"select":"this.overlay_02D85B03_0D7D_3C48_41A1_CE7241DF7604.get('areas').forEach(function(a){ a.trigger('click') })"},{"data":{"overlayID":"overlay_1DE4BC84_0D7D_1448_4170_D833176BF7E1"},"panorama":"this.panorama_0680A24C_0D75_6CD7_41A2_E7AEC0B1C56A","distance":23.03,"class":"AdjacentPanorama","yaw":-168.85,"select":"this.overlay_1DE4BC84_0D7D_1448_4170_D833176BF7E1.get('areas').forEach(function(a){ a.trigger('click') })"}],"id":"panorama_0680F53C_0D75_14B7_418A_295A20BE3F0A","hfov":360,"thumbnailUrl":"media/panorama_0680F53C_0D75_14B7_418A_295A20BE3F0A_t.jpg","data":{"label":"IMG_20241106_153428_00_081"},"frames":[{"cube":{"class":"ImageResource","levels":[{"width":24576,"url":"media/panorama_0680F53C_0D75_14B7_418A_295A20BE3F0A_0/{face}/0/{row}_{column}.jpg","rowCount":8,"tags":"ondemand","height":4096,"colCount":48,"class":"TiledImageResourceLevel"},{"width":12288,"url":"media/panorama_0680F53C_0D75_14B7_418A_295A20BE3F0A_0/{face}/1/{row}_{column}.jpg","rowCount":4,"tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"url":"media/panorama_0680F53C_0D75_14B7_418A_295A20BE3F0A_0/{face}/2/{row}_{column}.jpg","rowCount":2,"tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"url":"media/panorama_0680F53C_0D75_14B7_418A_295A20BE3F0A_0/{face}/3/{row}_{column}.jpg","rowCount":1,"tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_0680F53C_0D75_14B7_418A_295A20BE3F0A_t.jpg"}],"class":"Panorama","overlays":["this.overlay_1DE4BC84_0D7D_1448_4170_D833176BF7E1","this.overlay_02D85B03_0D7D_3C48_41A1_CE7241DF7604","this.panorama_0680F53C_0D75_14B7_418A_295A20BE3F0A_tcap0"],"vfov":180},{"viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","displayPlaybackBar":true,"aaEnabled":true,"id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","class":"PanoramaPlayer"},{"hfovMax":130,"label":trans('panorama_001A5CC1_0D75_15D0_4186_B5D9EDAE7E59.label'),"adjacentPanoramas":[{"data":{"overlayID":"overlay_03C1E0EB_0D73_EDDE_4183_0B02F303BC11"},"panorama":"this.panorama_0680A24C_0D75_6CD7_41A2_E7AEC0B1C56A","distance":41.17,"class":"AdjacentPanorama","yaw":-152.82,"select":"this.overlay_03C1E0EB_0D73_EDDE_4183_0B02F303BC11.get('areas').forEach(function(a){ a.trigger('click') })"}],"id":"panorama_001A5CC1_0D75_15D0_4186_B5D9EDAE7E59","hfov":360,"thumbnailUrl":"media/panorama_001A5CC1_0D75_15D0_4186_B5D9EDAE7E59_t.jpg","data":{"label":"IMG_20241106_153532_00_083"},"frames":[{"cube":{"class":"ImageResource","levels":[{"width":24576,"url":"media/panorama_001A5CC1_0D75_15D0_4186_B5D9EDAE7E59_0/{face}/0/{row}_{column}.jpg","rowCount":8,"tags":"ondemand","height":4096,"colCount":48,"class":"TiledImageResourceLevel"},{"width":12288,"url":"media/panorama_001A5CC1_0D75_15D0_4186_B5D9EDAE7E59_0/{face}/1/{row}_{column}.jpg","rowCount":4,"tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"url":"media/panorama_001A5CC1_0D75_15D0_4186_B5D9EDAE7E59_0/{face}/2/{row}_{column}.jpg","rowCount":2,"tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"url":"media/panorama_001A5CC1_0D75_15D0_4186_B5D9EDAE7E59_0/{face}/3/{row}_{column}.jpg","rowCount":1,"tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_001A5CC1_0D75_15D0_4186_B5D9EDAE7E59_t.jpg"}],"class":"Panorama","overlays":["this.overlay_03C1E0EB_0D73_EDDE_4183_0B02F303BC11","this.panorama_001A5CC1_0D75_15D0_4186_B5D9EDAE7E59_tcap0"],"vfov":180},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_017B0D5E_0D75_74F0_4152_9272A6DD4D62","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera","id":"panorama_0680F53C_0D75_14B7_418A_295A20BE3F0A_camera"},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_017B6D5E_0D75_74F0_4192_059EF25AC924","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera","id":"panorama_0682D995_0D75_3C70_4192_5B35ED1F1CBC_camera"},{"firstTransitionDuration":0,"progressBorderRadius":2,"progressLeft":"33%","minHeight":50,"playbackBarHeadShadowBlurRadius":3,"minWidth":100,"playbackBarHeadShadowOpacity":0.7,"data":{"name":"Main Viewer"},"surfaceReticleColor":"#FFFFFF","progressBackgroundColorRatios":[0],"progressRight":"33%","playbackBarHeadHeight":15,"toolTipPaddingRight":6,"playbackBarHeadShadowColor":"#000000","progressBarBackgroundColorDirection":"horizontal","playbackBarLeft":0,"progressOpacity":0.7,"toolTipFontColor":"#606060","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBottom":50,"progressBarBorderColor":"#000000","playbackBarHeadBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBackgroundColorRatios":[0],"propagateClick":false,"subtitlesFontSize":"3vmin","subtitlesGap":0,"vrThumbstickRotationStep":20,"progressBarBackgroundColorRatios":[0],"playbackBarBorderRadius":0,"subtitlesBackgroundColor":"#000000","playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadow":true,"playbackBarProgressBorderColor":"#000000","toolTipTextShadowColor":"#000000","subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBorderRadius":0,"playbackBarBackgroundOpacity":1,"toolTipPaddingLeft":6,"toolTipShadowColor":"#333138","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBorderColor":"#000000","playbackBarBorderSize":0,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBorderColor":"#000000","id":"MainViewer","playbackBarBottom":5,"toolTipBorderColor":"#767676","progressBarBackgroundColor":["#3399FF"],"subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"class":"ViewerArea","vrPointerSelectionColor":"#FF6600","toolTipFontSize":"1.11vmin","progressBackgroundColor":["#000000"],"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"progressBottom":10,"subtitlesFontColor":"#FFFFFF","progressHeight":2,"subtitlesFontFamily":"Arial","progressBorderSize":0,"vrPointerSelectionTime":2000,"vrPointerColor":"#FFFFFF","progressBarBorderRadius":2,"progressBarBorderSize":0,"toolTipPaddingTop":4,"subtitlesTextShadowVerticalLength":1,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"playbackBarRight":0,"subtitlesTop":0,"playbackBarHeadWidth":6,"height":"100%","playbackBarProgressBorderRadius":0,"toolTipPaddingBottom":4,"width":"100%","toolTipFontFamily":"Arial","subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"]},{"hfovMax":130,"label":trans('panorama_0682D995_0D75_3C70_4192_5B35ED1F1CBC.label'),"adjacentPanoramas":[{"data":{"overlayID":"overlay_02E3DB03_0D7D_3C48_41A5_54186E68A6EE"},"panorama":"this.panorama_0680F53C_0D75_14B7_418A_295A20BE3F0A","distance":100,"class":"AdjacentPanorama","yaw":159.13,"select":"this.overlay_02E3DB03_0D7D_3C48_41A5_54186E68A6EE.get('areas').forEach(function(a){ a.trigger('click') })"}],"id":"panorama_0682D995_0D75_3C70_4192_5B35ED1F1CBC","hfov":360,"thumbnailUrl":"media/panorama_0682D995_0D75_3C70_4192_5B35ED1F1CBC_t.jpg","data":{"label":"IMG_20241106_153500_00_082"},"frames":[{"cube":{"class":"ImageResource","levels":[{"width":24576,"url":"media/panorama_0682D995_0D75_3C70_4192_5B35ED1F1CBC_0/{face}/0/{row}_{column}.jpg","rowCount":8,"tags":"ondemand","height":4096,"colCount":48,"class":"TiledImageResourceLevel"},{"width":12288,"url":"media/panorama_0682D995_0D75_3C70_4192_5B35ED1F1CBC_0/{face}/1/{row}_{column}.jpg","rowCount":4,"tags":"ondemand","height":2048,"colCount":24,"class":"TiledImageResourceLevel"},{"width":6144,"url":"media/panorama_0682D995_0D75_3C70_4192_5B35ED1F1CBC_0/{face}/2/{row}_{column}.jpg","rowCount":2,"tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"url":"media/panorama_0682D995_0D75_3C70_4192_5B35ED1F1CBC_0/{face}/3/{row}_{column}.jpg","rowCount":1,"tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_0682D995_0D75_3C70_4192_5B35ED1F1CBC_t.jpg"}],"class":"Panorama","overlays":["this.overlay_02E3DB03_0D7D_3C48_41A5_54186E68A6EE","this.panorama_0682D995_0D75_3C70_4192_5B35ED1F1CBC_tcap0"],"vfov":180},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_017FCD5D_0D75_74F0_419B_28F49E60C267","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera","id":"panorama_001A5CC1_0D75_15D0_4186_B5D9EDAE7E59_camera"},{"camera":"this.panorama_0680A24C_0D75_6CD7_41A2_E7AEC0B1C56A_camera","class":"PanoramaPlayListItem","media":"this.panorama_0680A24C_0D75_6CD7_41A2_E7AEC0B1C56A","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_1CFAB48A_0D9C_F446_419C_90C71C28F021"},{"camera":"this.panorama_001A5CC1_0D75_15D0_4186_B5D9EDAE7E59_camera","class":"PanoramaPlayListItem","media":"this.panorama_001A5CC1_0D75_15D0_4186_B5D9EDAE7E59","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_1CFA648A_0D9C_F446_41A0_93042FFAE3B7"},{"camera":"this.panorama_0682D995_0D75_3C70_4192_5B35ED1F1CBC_camera","class":"PanoramaPlayListItem","media":"this.panorama_0682D995_0D75_3C70_4192_5B35ED1F1CBC","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_1CFB148A_0D9C_F446_41A6_2B875B514C8D"},{"camera":"this.panorama_0680F53C_0D75_14B7_418A_295A20BE3F0A_camera","class":"PanoramaPlayListItem","media":"this.panorama_0680F53C_0D75_14B7_418A_295A20BE3F0A","end":"this.trigger('tourEnded')","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_1CFA948A_0D9C_F446_4187_4AEB268B3B3F"},{"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_017B2D5E_0D75_74F0_415F_D28219025A7F"},{"data":{"label":"GoToImg_20241106_153532_00_083","hasPanoramaAction":true},"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":-4.29,"scaleMode":"fit_inside","yaw":-2.63,"hfov":10.5,"distance":100,"image":"this.AnimatedImageResource_1CE693C2_0D9C_F3C1_418D_B5D9775634B2","vfov":4.81,"data":{"label":"GoToImg_20241106_153532_00_083"},"class":"HotspotPanoramaOverlayImage","roll":0.21}],"areas":["this.HotspotPanoramaOverlayArea_1DB2A7C1_0D73_13CB_4196_4842F9C94913"],"useHandCursor":true,"maps":[],"id":"overlay_1DCED7B8_0D73_13B9_419E_D641D78F4B24"},{"data":{"label":"GoToImg_20241106_153428_00_081","hasPanoramaAction":true},"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":-3.74,"yaw":-25.49,"hfov":10.5,"distance":50,"image":"this.AnimatedImageResource_1CE6B3C2_0D9C_F3C1_41A6_7199842AC2ED","vfov":3.75,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"GoToImg_20241106_153428_00_081"}}],"areas":["this.HotspotPanoramaOverlayArea_02F099C2_0D73_3FC9_4190_E8B3EA4F692F"],"useHandCursor":true,"maps":[],"id":"overlay_025F19B4_0D73_3C49_41A8_8217BCB68A28"},{"hfov":19.5,"distance":50,"image":"this.res_1D552F64_0D97_34C2_41A8_E66E01775D2A","class":"TripodCapPanoramaOverlay","id":"panorama_0680A24C_0D75_6CD7_41A2_E7AEC0B1C56A_tcap0"},{"data":{"label":"GoToImg_20241106_153322_00_080","hasPanoramaAction":true},"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":-4.21,"scaleMode":"fit_inside","yaw":-168.85,"hfov":10.5,"distance":50,"image":"this.AnimatedImageResource_1CE7A3C2_0D9C_F3C1_4191_7D6EDB911B61","vfov":3.75,"data":{"label":"GoToImg_20241106_153322_00_080"},"class":"HotspotPanoramaOverlayImage","roll":-2.45}],"areas":["this.HotspotPanoramaOverlayArea_1DD9FC8A_0D7D_1458_41A6_88C7FDC16D02"],"useHandCursor":true,"maps":[],"id":"overlay_1DE4BC84_0D7D_1448_4170_D833176BF7E1"},{"data":{"label":"GoToImg_20241106_153500_00_082","hasPanoramaAction":true},"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":-3.83,"scaleMode":"fit_inside","yaw":-12.54,"hfov":10.5,"distance":50,"image":"this.AnimatedImageResource_1CE7C3C2_0D9C_F3C1_41A5_96FF1D8E6E59","vfov":3.75,"data":{"label":"GoToImg_20241106_153500_00_082"},"class":"HotspotPanoramaOverlayImage","roll":-1.83}],"areas":["this.HotspotPanoramaOverlayArea_1D658C7D_0D7D_34B8_41AA_59E7396EDCFC"],"useHandCursor":true,"maps":[],"id":"overlay_02D85B03_0D7D_3C48_41A1_CE7241DF7604"},{"hfov":19.5,"distance":50,"image":"this.res_1D552F64_0D97_34C2_41A8_E66E01775D2A","class":"TripodCapPanoramaOverlay","id":"panorama_0680F53C_0D75_14B7_418A_295A20BE3F0A_tcap0"},{"data":{"label":"GoToImg_20241106_153322_00_080","hasPanoramaAction":true},"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":-2.35,"yaw":-152.82,"hfov":10.5,"distance":100,"image":"this.AnimatedImageResource_1CE703C2_0D9C_F3C1_4199_8DE53298C93E","vfov":4.81,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"GoToImg_20241106_153322_00_080"}}],"areas":["this.HotspotPanoramaOverlayArea_02525108_0D73_EC5A_4194_B31EB537A8A3"],"useHandCursor":true,"maps":[],"id":"overlay_03C1E0EB_0D73_EDDE_4183_0B02F303BC11"},{"hfov":19.5,"distance":50,"image":"this.res_1D552F64_0D97_34C2_41A8_E66E01775D2A","class":"TripodCapPanoramaOverlay","id":"panorama_001A5CC1_0D75_15D0_4186_B5D9EDAE7E59_tcap0"},{"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_017B0D5E_0D75_74F0_4152_9272A6DD4D62"},{"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_017B6D5E_0D75_74F0_4192_059EF25AC924"},{"enabledInCardboard":true,"maps":[],"class":"HotspotPanoramaOverlay","items":[{"pitch":0.1,"yaw":159.13,"hfov":10.5,"distance":50,"image":"this.AnimatedImageResource_1CE753C2_0D9C_F3C1_41A7_F72133A688D5","vfov":3.75,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"GoToImg_20241106_153428_00_081"}}],"data":{"label":"GoToImg_20241106_153428_00_081"},"areas":["this.HotspotPanoramaOverlayArea_028ADB12_0D7D_3C48_41A2_DDEB339105A6"],"useHandCursor":true,"id":"overlay_02E3DB03_0D7D_3C48_41A5_54186E68A6EE"},{"hfov":19.5,"distance":50,"image":"this.res_1D552F64_0D97_34C2_41A8_E66E01775D2A","class":"TripodCapPanoramaOverlay","id":"panorama_0682D995_0D75_3C70_4192_5B35ED1F1CBC_tcap0"},{"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_017FCD5D_0D75_74F0_419B_28F49E60C267"},{"colCount":4,"frameCount":24,"frameDuration":41,"rowCount":6,"levels":[{"width":560,"url":"media/res_1D4B0F63_0D97_34C6_41A9_CF11918CAA5B_0.png","height":300,"class":"ImageResourceLevel"}],"class":"AnimatedImageResource","id":"AnimatedImageResource_1CE693C2_0D9C_F3C1_418D_B5D9775634B2","finalFrame":"first"},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_1CFA648A_0D9C_F446_41A0_93042FFAE3B7, 3.3230769230769233, -1.4436493738819312, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_1DB2A7C1_0D73_13CB_4196_4842F9C94913"},{"colCount":4,"frameCount":24,"frameDuration":41,"rowCount":6,"levels":[{"width":560,"url":"media/res_1D4B0F63_0D97_34C6_41A9_CF11918CAA5B_0.png","height":300,"class":"ImageResourceLevel"}],"class":"AnimatedImageResource","id":"AnimatedImageResource_1CE6B3C2_0D9C_F3C1_41A6_7199842AC2ED","finalFrame":"first"},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_1CFA948A_0D9C_F446_4187_4AEB268B3B3F, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 3)","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_02F099C2_0D73_3FC9_4190_E8B3EA4F692F"},{"levels":[{"width":1024,"url":"media/res_1D552F64_0D97_34C2_41A8_E66E01775D2A_0.png","height":1024,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_1D552F64_0D97_34C2_41A8_E66E01775D2A"},{"colCount":4,"frameCount":24,"frameDuration":41,"rowCount":6,"levels":[{"width":560,"url":"media/res_1D550F64_0D97_34C2_41A0_D159D48A7E69_0.png","height":300,"class":"ImageResourceLevel"}],"class":"AnimatedImageResource","id":"AnimatedImageResource_1CE7A3C2_0D9C_F3C1_4191_7D6EDB911B61","finalFrame":"first"},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_1CFAB48A_0D9C_F446_419C_90C71C28F021, 126.83076923076923, -1.4436493738819312, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_1DD9FC8A_0D7D_1458_41A6_88C7FDC16D02"},{"colCount":4,"frameCount":24,"frameDuration":41,"rowCount":6,"levels":[{"width":560,"url":"media/res_1D550F64_0D97_34C2_41A0_D159D48A7E69_0.png","height":300,"class":"ImageResourceLevel"}],"class":"AnimatedImageResource","id":"AnimatedImageResource_1CE7C3C2_0D9C_F3C1_41A5_96FF1D8E6E59","finalFrame":"first"},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_1CFB148A_0D9C_F446_41A6_2B875B514C8D, 20.49230769230769, 0.21896243291592216, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_1D658C7D_0D7D_34B8_41AA_59E7396EDCFC"},{"colCount":4,"frameCount":24,"frameDuration":41,"rowCount":6,"levels":[{"width":480,"url":"media/res_1D553F64_0D97_34C2_41A2_42BC02E81A31_0.png","height":330,"class":"ImageResourceLevel"}],"class":"AnimatedImageResource","id":"AnimatedImageResource_1CE703C2_0D9C_F3C1_4199_8DE53298C93E","finalFrame":"first"},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_1CFAB48A_0D9C_F446_419C_90C71C28F021, -175.01538461538462, 0.21896243291592216, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_02525108_0D73_EC5A_4194_B31EB537A8A3"},{"colCount":4,"frameCount":24,"frameDuration":41,"rowCount":6,"levels":[{"width":560,"url":"media/res_1D550F64_0D97_34C2_41A0_D159D48A7E69_0.png","height":300,"class":"ImageResourceLevel"}],"class":"AnimatedImageResource","id":"AnimatedImageResource_1CE753C2_0D9C_F3C1_41A7_F72133A688D5","finalFrame":"first"},{"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_1CFA948A_0D9C_F446_4187_4AEB268B3B3F, -165.6, 0.21896243291592216, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 3)","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_028ADB12_0D7D_3C48_41A2_DDEB339105A6"}],"layout":"absolute","scripts":{"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getMainViewer":TDV.Tour.Script.getMainViewer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"initAnalytics":TDV.Tour.Script.initAnalytics,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"clone":TDV.Tour.Script.clone,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"openLink":TDV.Tour.Script.openLink,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setMapLocation":TDV.Tour.Script.setMapLocation,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"toggleVR":TDV.Tour.Script.toggleVR,"historyGoBack":TDV.Tour.Script.historyGoBack,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playAudioList":TDV.Tour.Script.playAudioList,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"initQuiz":TDV.Tour.Script.initQuiz,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPixels":TDV.Tour.Script.getPixels,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"registerKey":TDV.Tour.Script.registerKey,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setValue":TDV.Tour.Script.setValue,"showWindow":TDV.Tour.Script.showWindow,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getComponentByName":TDV.Tour.Script.getComponentByName,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"init":TDV.Tour.Script.init,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"enableVR":TDV.Tour.Script.enableVR,"historyGoForward":TDV.Tour.Script.historyGoForward,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"showPopupImage":TDV.Tour.Script.showPopupImage,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"disableVR":TDV.Tour.Script.disableVR,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"downloadFile":TDV.Tour.Script.downloadFile,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getOverlays":TDV.Tour.Script.getOverlays,"resumePlayers":TDV.Tour.Script.resumePlayers,"quizShowScore":TDV.Tour.Script.quizShowScore,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"isPanorama":TDV.Tour.Script.isPanorama,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"quizStart":TDV.Tour.Script.quizStart,"getKey":TDV.Tour.Script.getKey,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"mixObject":TDV.Tour.Script.mixObject,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizFinish":TDV.Tour.Script.quizFinish,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"executeJS":TDV.Tour.Script.executeJS,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"startMeasurement":TDV.Tour.Script.startMeasurement,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"cloneBindings":TDV.Tour.Script.cloneBindings,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"createTween":TDV.Tour.Script.createTween,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"translate":TDV.Tour.Script.translate,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"unregisterKey":TDV.Tour.Script.unregisterKey,"setLocale":TDV.Tour.Script.setLocale,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"existsKey":TDV.Tour.Script.existsKey,"shareSocial":TDV.Tour.Script.shareSocial}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.16.js.map
})();
//Generated with v2024.0.16, Fri Nov 8 2024