// ==UserScript==
// @id             iitc-plugin-show-crow-taiwan-map@crow
// @name           IITC Plugin: show crow taiwan map
// @category       Map Tiles
// @version        0.1.2
// @namespace      https://www.crow.tw/
// @description    [0.1.2][20170520] 1895-1956 taiwan map
// @include        https://www.ingress.com/intel*
// @match          https://www.ingress.com/intel*
// @grant          none
// ==/UserScript==

// =============================================================================================== //
// WARNING: DO NOT INSTALL PLUGIN FROM UNKNOWN SOURCE, ASK ANYONE WHO KNOWS HOW TO READ JAVASCRIPT //
// =============================================================================================== //

// Center for GIS, RCHSS, Academia Sinica
// http://gis.rchss.sinica.edu.tw/
// http://gissrv4.sinica.edu.tw/gis/twhgis.aspx

// do not use additional closure wrapper, it will break this plugin on mobile iitc..
function wrapper() {
  // simple script, no need of namespace, not checking for duplicate
  var setup = function() {
    var map_list = {
      JMWar_1895 : {
        kind      : 'gb',
        max_zoom  : 16,
        min_zoom  : 7,
        title     : '1895 - 日軍攻台戰鬥地圖',
        type      : 'png'
      },
      JM200K_1897 : {
        kind      : 'g',
        max_zoom  : 14,
        min_zoom  : 7,
        title     : '1897 - 日治台灣假製二十萬分一圖',
        type      : 'png'
      },
      JM400K_1899 : {
        kind      : 'g',
        max_zoom  : 15,
        title     : '1899 - 日治四十萬分之一臺灣全圖',
        type      : 'png'
      },
      Admin_1901a : {
        kind      : 'gs',
        max_zoom  : 14,
        min_zoom  : 10,
        title     : '1901 - 日治行政區 (廳)',
        type      : 'png'
      },
      Admin_1901b : {
        kind      : 'gs',
        max_zoom  : 14,
        min_zoom  : 10,
        title     : '1901 - 日治行政區 (堡里)',
        type      : 'png'
      },
      Admin_1901c : {
        kind      : 'gs',
        max_zoom  : 15,
        min_zoom  : 10,
        title     : '1901 - 日治行政區 (街庄)',
        type      : 'png'
      },
      JM20K_1904  : {
        kind      : 'g',
        max_zoom  : 17,
        title     : '1904 - 臺灣堡圖 (明治版)',
        type      : 'jpg'
      },
      JM100K_1905 : {
        kind      : 'g',
        max_zoom  : 16,
        title     : '1905 - 日治十萬分一臺灣圖',
        type      : 'png'
      },
      JM50K_1916  : {
        kind      : 'g',
        max_zoom  : 16,
        title     : '1916 - 日治五萬分之一番地地形圖',
        type      : 'jpg'
      },
      JM50K_1920  : {
        kind      : 'g',
        max_zoom  : 16,
        title     : '1920 - 日治五萬分之一地形圖 (總督府土木局)',
        type      : 'png'
      },
      JM25K_1921  : {
        kind      : 'g',
        max_zoom  : 16,
        title     : '1921 - 日治兩萬五千分之一地形圖',
        type      : 'png'
      },
      JM20K_1921  : {
        kind      : 'g',
        max_zoom  : 16,
        title     : '1921 - 日治兩萬分之一臺灣堡圖 (大正版)',
        type      : 'jpg'
      },
      JM300K_1924 : {
        kind      : 'g',
        max_zoom  : 13,
        title     : '1924 - 日治三十萬分之一臺灣全圖 (第三版)',
        type      : 'jpg'
      },
      JM50K_1924 : {
        kind      : 'g',
        max_zoom  : 16,
        title     : '1924 - 日治五十萬分之一地形圖 (陸地測量部)',
        type      : 'jpg'
      },
      Admin_1930a : {
        kind      : 'gs',
        max_zoom  : 14,
        min_zoom  : 10,
        title     : '1930 - 日治行政區 (廳)',
        type      : 'png'
      },
      Admin_1930b : {
        kind      : 'gs',
        max_zoom  : 14,
        min_zoom  : 10,
        title     : '1930 - 日治行政區 (堡里)',
        type      : 'png'
      },
      Admin_1930c : {
        kind      : 'gs',
        max_zoom  : 15,
        min_zoom  : 10,
        title     : '1930 - 日治行政區 (街庄)',
        type      : 'png'
      },
      JM200K_1932 : {
        kind      : 'g',
        max_zoom  : 15,
        title     : '1932 - 二十萬分一帝國圖 (臺灣部分)',
        type      : 'png'
      },
      JM500K_1936 : {
        kind      : 'g',
        max_zoom  : 14,
        title     : '1936 - 五十萬分之一輿地圖 (臺灣部分)',
        type      : 'png'
      },
      JM300K_1939 : {
        kind      : 'g',//t
        max_zoom  : 15,
        title     : '1939 - 日治三十萬分之一臺灣全圖 (第五版)',
        type      : 'png'
      },
      JM25K_1942 : {
        kind      : 'g',
        max_zoom  : 16,
        title     : '1942 - 日治兩萬五千分之一地形圖 (昭和修正版, 僅打狗一帶)',
        type      : 'png'
      },
      JM25K_1944 : {
        kind      : 'g',
        max_zoom  : 16,
        title     : '1944 - 日治兩萬五千分之一地形圖 (航照修正版)',
        type      : 'png'
      },
      AM25K_1944 : {
        kind      : 'gb',
        max_zoom  : 17,
        title     : '1944 - 美軍兩萬五千分之一地形圖 (僅嘉義一小塊)',
        type      : 'png'
      },
      AM50K_1944 : {
        kind      : 'g',
        max_zoom  : 16,
        title     : '1944 - 美軍五萬分之一地形圖',
        type      : 'png'
      },
      Taipei_aerialphoto_1945 : {
        kind      : 'g',
        max_zoom  : 17,
        min_zoom  : 10,
        title     : '1945 - 美軍航照影像 (1945/6/17)',
        type      : 'jpg'
      },
      AMCityPlan_1945 : {
        kind      : 'g',
        max_zoom  : 17,
        min_zoom  : 12,
        title     : '1945 - 美軍繪製臺灣城市地圖',
        type      : 'png'
      },
      TM50K_1956_Index : {
        kind      : 'gb',
        max_zoom  : 13,
        min_zoom  : 7,
        title     : '1956 - 臺灣五萬分之一地形圖圖幅接合表',
        type      : 'png'
      }
    };

    $.each(map_list, function (map_code, data) {
      var map_url;
      var map_atb = 'Map data © <a href="http://gis.rchss.sinica.edu.tw/">Center for GIS, RCHSS, Academia Sinica</a>';
      var map_option = {
        attribution : map_atb,
        crossOrigin : true,
        crow_name   : map_code,
        crow_type   : data.type,
        hx          : function (option) {
          return to_8_hex(option.x);
        },
        hy          : function (option) {
          return to_8_hex(option.y);
        },
        maxZoom     : data.max_zoom,
        minZoom     : data.min_zoom || 3,
        zr          : function (option) {
          return 17 - option.z;
        }
      };
      switch (data.kind) {
        // though it looks like query, browser will use cache, prefer this kind of url
        case 'g':
          map_url = 'http://gis.sinica.edu.tw/tileserver/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER={crow_name}&TILEMATRIXSET=GoogleMapsCompatible&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT={crow_type}';
          break;
        // not all works with type 'g' but most of them will work with this one
        case 'gb':
          map_url = 'http://gis.sinica.edu.tw/googlemap/{crow_name}/{zr}/{x}/IMG_{x}_{y}_{zr}.{crow_type}';
          break;
        // instead of decimal xy number, this kind use hex value with zero fill left padding
        case 'gs':
          map_url = 'http://gis.sinica.edu.tw/googlemap/{crow_name}/Layers/_alllayers/L{z}/R{hy}/C{hx}.{crow_type}';
          break;
        // if could, we should avoid this kind; seem that browser will not use cache
        case 't':
          map_url = 'http://gis.sinica.edu.tw/tileserver/file-exists.php?img={crow_name}-{crow_type}-{z}-{x}-{y}';
          break;
      }
      if (!map_url) {
        return false;
      }
      map_list[map_code].taiwan_map = new L.TileLayer(map_url, map_option);
      layerChooser.addBaseLayer(map_list[map_code].taiwan_map, data.title);
    });

    function to_8_hex(target) {
      var hex = target.toString(16);
      while (hex.length < 8) {
        hex = '0' + hex;
      }
      return hex;
    }
  };

  if (!window.bootPlugins) {
    window.bootPlugins = [];
  }
  window.bootPlugins.push(setup);
  // if IITC has already booted, immediately run the 'setup' function
  if (window.iitcLoaded && typeof setup === 'function') {
    setup();
  }
}

// inject code into site context
var script = document.createElement('script');
script.appendChild(document.createTextNode('(' + wrapper + ')({});'));
(document.body || document.head || document.documentElement).appendChild(script);
