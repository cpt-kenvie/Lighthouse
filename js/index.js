!(function (e) {
  let n = !1;
  if (
    ("function" == typeof define && define.amd && (define(e), (n = !0)),
      "object" == typeof exports && ((module.exports = e()), (n = !0)),
      !n)
  ) {
    const o = window.Cookies,
      t = (window.Cookies = e());
    t.noConflict = function () {
      return (window.Cookies = o), t;
    };
  }
})(function () {
  function e() {
    let n = {};
    let e = 0;
    for (; e < arguments.length; e++) {
      const o = arguments[e];
      for (const t in o) n[t] = o[t];
    }
    return n;
  }
  $(document).ready(function () {
    // 引入comm_list.json
    $.getJSON('comm_list.json', function (comm_list) {
      // 使用comm_list执行原有的操作
      function t(t) {
        $(".work-link").find(".tab span.active").removeClass("active");
        var e, n, a = "", l = $(t).attr("class");
        $(t).addClass("active");

        $.each(comm_list, function (t, i) {
          if (l == i.slug) {
            e = i.list;
            $.each(e, function (t, i) {
              a += "<ul><li>" + i.tag + "</li>";
              n = i.link;
              $.each(n, function (o, t) {
                a += '<li><a href="' + t.url + '" target="_blank">' + t.name + "</a></li>";
              });
              a += "</ul>";
            });
          }
        });

        $(".work-link").css("opacity", "1").find(".info").hide().html(a).fadeIn(200);
      }

      // 初始化tab
      t($(".work-link").find(".tab span:first"));

      // 处理点击事件
      $(".work-link .tab").on("click", "span", function () {
        t($(this));
      });
    });
  });
  function n(o) {
    function t(n, r, i) {
      var c;
      if ("undefined" != typeof document) {
        if (arguments.length > 1) {
          if (
            "number" == typeof (i = e({ path: "/" }, t.defaults, i)).expires
          ) {
            var a = new Date();
            a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires),
              (i.expires = a);
          }
          i.expires = i.expires ? i.expires.toUTCString() : "";
          try {
            (c = JSON.stringify(r)), /^[{\[]/.test(c) && (r = c);
          } catch (e) { }
          (r = o.write
            ? o.write(r, n)
            : encodeURIComponent(r + "").replace(
              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
              decodeURIComponent
            )),
            (n = (n = (n = encodeURIComponent(n + "")).replace(
              /%(23|24|26|2B|5E|60|7C)/g,
              decodeURIComponent
            )).replace(/[\(\)]/g, escape));
          var s = "";
          for (var f in i)
            i[f] && ((s += "; " + f), !0 !== i[f] && (s += "=" + i[f]));
          return (document.cookie = n + "=" + r + s);
        }
        n || (c = {});
        for (
          var p = document.cookie ? document.cookie.split("; ") : [],
          d = /(%[0-9A-Z]{2})+/g,
          u = 0;
          u < p.length;
          u++
        ) {
          var l = p[u].split("="),
            C = l.slice(1).join("=");
          this.json || '"' !== C.charAt(0) || (C = C.slice(1, -1));
          try {
            var m = l[0].replace(d, decodeURIComponent);
            if (
              ((C = o.read
                ? o.read(C, m)
                : o(C, m) || C.replace(d, decodeURIComponent)),
                this.json)
            )
              try {
                C = JSON.parse(C);
              } catch (e) { }
            if (n === m) {
              c = C;
              break;
            }
            n || (c[m] = C);
          } catch (e) { }
        }
        return c;
      }
    }

    return (
      (t.set = t),
      (t.get = function (e) {
        return t.call(t, e);
      }),
      (t.getJSON = function () {
        return t.apply({ json: !0 }, [].slice.call(arguments));
      }),
      (t.defaults = {}),
      (t.remove = function (n, o) {
        t(n, "", e(o, { expires: -1 }));
      }),
      (t.withConverter = n),
      t
    );
  }

  return n(function () { });
});


var _hmt = _hmt || [];
!(function (o) {
  "use strict";

  function t(t) {
    o(".work-link").find(".tab span.active").removeClass("active");
    var e,
      n,
      a = "",
      l = o(t).attr("class");
    if (
      (o(t).addClass("active"),
        o.each(comm_list, function (t, i) {
          l == i.slug &&
            ((e = i.list),
              o.each(e, function (t, i) {
                (a += "<ul><li>" + i.tag + "</li>"),
                  (n = i.link),
                  o.each(n, function (o, t) {
                    a +=
                      '<li><a href="' +
                      t.url +
                      '" target="_blank">' +
                      t.name +
                      "</a></li>";
                  }),
                  (a += "</ul>");
              }));
        }),
        o(".work-link").find(".tab span:first").hasClass("active") &&
        "1" == i("schl"))
    ) {
      var s = "assets/data/univ/" + i("univ") + ".js";
      o.getScript(s, function () {
        var t = univ_list.link,
          i = "<ul><li>校园</li>";
        o.each(t, function (o, t) {
          i +=
            '<li><a href="' +
            t.url +
            '" target="_blank">' +
            t.name +
            "</a></li>";
        }),
          (i += "</ul>"),
          o(".work-link")
            .css("opacity", "1")
            .find(".info")
            .hide()
            .html(a)
            .fadeIn(200)
            .find("ul:nth-child(6)")
            .html(i);
      }).fail(function () {
        var t = "<ul><li>校园</li><li>暂未收录</li></ul>";
        o(".work-link")
          .css("opacity", "1")
          .find(".info")
          .hide()
          .html(a)
          .fadeIn(200)
          .find("ul:nth-child(6)")
          .html(t);
      });
    } else
      o(".work-link")
        .css("opacity", "1")
        .find(".info")
        .hide()
        .html(a)
        .fadeIn(200);
  }

  function i(o) {
    var t = {
      bkgd: "#ededed",
      srch: "baidu",
      schl: "0",
      prov: "1",
      univ: "1001",
    };
    return Cookies.get(o) || t[o];
  }

  function e(o, t, i) {
    Cookies.set(o, t, { expires: i || 3650 });
  }

  function n(t) {
    o("body").css("background", t);
  }

  function a(t) {
    if (
      (o(t).addClass("active").siblings(".active").removeClass("active"),
        o(".search-hidden").remove(),
        o(t).hasClass("baidu"))
    )
      o(".search-form").attr("action", "https://www.baidu.com/s"),
        o(".search-keyword").attr({
          name: "word",
          placeholder: "百度一下，你就知道",
        });
    else if (o(t).hasClass("google"))
      o(".search-form").attr("action", "https://www.google.com/search"),
        o(".search-keyword").attr({
          name: "q",
          placeholder: "Google 搜索",
        });
    else if (o(t).hasClass("bing"))
      o(".search-form").attr("action", "https://cn.bing.com/search"),
        o(".search-keyword").attr({
          name: "q",
          placeholder: "微软 Bing 搜索",
        });
    else if (o(t).hasClass("image")) {
      o(".search-form").attr("action", "https://cn.bing.com/images/search"),
        o(".search-keyword").attr({
          name: "q",
          placeholder: "海量图片搜索",
        });
      var i = new Image();
      i.onload = function () {
        o(".search-form").attr("action", "https://www.google.com/search"),
          o(".search-form").prepend(
            '<input class="search-hidden" type="hidden" name="tbm" value="isch">'
          );
      };
    } else if (o(t).hasClass("lookao")) {
      o(".search-form").attr("action", "https://youhui.pinduoduo.com/"),
        o(".search-keyword").attr({
          name: "keyword",
          placeholder: "百度翻译",
        });
    } else if (o(t).hasClass("torrent"))
      o(".search-form").attr("action", "https://torrentz2.eu/search"),
        o(".search-keyword").attr({
          name: "f",
          placeholder: "磁力链，种子搜索",
        });
    else if (o(t).hasClass("scholar")) {
      o(".search-form").attr("action", "https://xueshu.baidu.com/s"),
        o(".search-keyword").attr({
          name: "wd",
          placeholder: "中英文文献检索",
        });
      var i = new Image();
      i.onload = function () {
        o(".search-form").attr("action", "https://scholar.google.com/scholar"),
          o(".search-keyword").attr({ name: "q" }),
          o(".search-form").prepend(
            '<input class="search-hidden" type="hidden" name="hl" value="zh-CN">'
          );
      };
    }
    o(".search-keyword").focus();
  }

  o.ajaxSetup({ cache: !0 }),
    n(i("bkgd")),
    t(o(".work-link").find(".tab span:first")),
    a(o(".search-tab").find("span." + i("srch"))),
    o(".work-link .tab").on("click", "span", function () {
      t(o(this));
    }),
    o(".search-tab").on("click", "span", function () {
      a(o(this)), e("srch", this.className.split(" ")[0]);
    }),
    o("#setting-icon").on("click", function () {
      o(".work-link .info")
        .hide()
        .html(
          '<div style="padding: 30px 30px 0;min-height: 400px;"><div class="row"><div id="setting-bkgd"class="column col-4"><label>站点背景</label><select><option value="#ededed">山雾</option><option value="#ffffff">素白</option><option value="#f5d9d9">桃夭</option><option value="#8d6262">荔枝</option><option value="#b9d7ea">天色</option><option value="#aacfd0">青川</option><option value="#283c63">深海</option><option value="#928a97">陆离</option><option value="#444f5a">青纯</option><option value="#373c38">石墨</option><option value="#40514e">月夜</option><option value="#4d4545">消炭</option></select></div><div class="column col-4"></div></div><div class="row"><input id="setting-save"type="button"value="保存"style="padding: 0 40px;"></div></div>'
        )
        .fadeIn(200),
        o("#setting-bkgd select").val(i("bkgd")),
        o("#setting-schl select").val(i("schl")),
        o("#setting-prov select").val(i("prov")),
        o("#setting-bkgd select").change(function () {
          n(o(this).val());
        }),
        o.getScript("assets/data/univ.li.js", function () {
          function t(t, i) {
            var e, n;
            o.each(univ_list, function (a, l) {
              t == l.id &&
                ((e = l.univs),
                  (n = ""),
                  o.each(e, function (o, t) {
                    n += "<option value=" + t.id + ">" + t.name + "</option>";
                  }),
                  o("#setting-univ select").html(n),
                  i && o("#setting-univ select").val(i));
            });
          }

          t(o("#setting-prov select").val(), i("univ")),
            o("#setting-prov select").change(function () {
              t(o("#setting-prov select").val());
            });
        }),
        o("#setting-save")
          .off("click")
          .on("click", function () {
            e("bkgd", o("#setting-bkgd select").val()),
              e("schl", o("#setting-schl select").val()),
              o("#setting-univ select").val() &&
              (e("prov", o("#setting-prov select").val()),
                e("univ", o("#setting-univ select").val())),
              t(o(".work-link").find(".tab span:first"));
          });
    });
})(jQuery);
