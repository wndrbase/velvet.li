"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function (e) {
  var n = !1;

  if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && (module.exports = e(), n = !0), !n) {
    var o = window.Cookies,
        t = window.Cookies = e();

    t.noConflict = function () {
      return window.Cookies = o, t;
    };
  }
}(function () {
  function e() {
    for (var e = 0, n = {}; e < arguments.length; e++) {
      var o = arguments[e];

      for (var t in o) {
        n[t] = o[t];
      }
    }

    return n;
  }

  return function n(o) {
    function t(n, r, i) {
      var c;

      if ("undefined" != typeof document) {
        if (arguments.length > 1) {
          if ("number" == typeof (i = e({
            path: "/"
          }, t.defaults, i)).expires) {
            var a = new Date();
            a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a;
          }

          i.expires = i.expires ? i.expires.toUTCString() : "";

          try {
            c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c);
          } catch (e) {}

          r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
          var s = "";

          for (var f in i) {
            i[f] && (s += "; " + f, !0 !== i[f] && (s += "=" + i[f]));
          }

          return document.cookie = n + "=" + r + s;
        }

        n || (c = {});

        for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
          var l = p[u].split("="),
              C = l.slice(1).join("=");
          this.json || '"' !== C.charAt(0) || (C = C.slice(1, -1));

          try {
            var g = l[0].replace(d, decodeURIComponent);
            if (C = o.read ? o.read(C, g) : o(C, g) || C.replace(d, decodeURIComponent), this.json) try {
              C = JSON.parse(C);
            } catch (e) {}

            if (n === g) {
              c = C;
              break;
            }

            n || (c[g] = C);
          } catch (e) {}
        }

        return c;
      }
    }

    return t.set = t, t.get = function (e) {
      return t.call(t, e);
    }, t.getJSON = function () {
      return t.apply({
        json: !0
      }, [].slice.call(arguments));
    }, t.defaults = {}, t.remove = function (n, o) {
      t(n, "", e(o, {
        expires: -1
      }));
    }, t.withConverter = n, t;
  }(function () {});
});

(function (cookie) {
  if (cookie) {
    if (Cookies.get('YourPrivacy') !== 'Accept') {
      cookie.classList.remove('hide');
      var AnalyticsCookies = cookie.querySelector('[name="AnalyticsCookies"]'),
          AdvertsitingCookies = cookie.querySelector('[name="AdvertsitingCookies"]');
      cookie.addEventListener('submit', function (event) {
        event.preventDefault();
        Cookies.set('YourPrivacy', 'Accept');
        Cookies.set('AnalyticsCookies', AnalyticsCookies.checked);
        Cookies.set('AdvertsitingCookies', AdvertsitingCookies.checked);
        cookie.classList.add('hide');
      });
    }
  }
})(document.querySelector('.cookie'));

(function () {
  if ('IntersectionObserver' in window) {
    var options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.01]
    };

    var callback = function callback(entries, observer) {
      Array.from(entries, function (entry) {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('is-show');
          observer.unobserve(entry.target);
          setTimeout(function () {
            return entry.target.classList.remove('fade-in', 'is-show');
          }, 1000);
        }
      });
    };

    var observer = new IntersectionObserver(callback, options);
    Array.from(document.querySelectorAll('.fade-in'), function (el) {
      return observer.observe(el);
    });
  } else {
    Array.from(document.querySelectorAll('.fade-in'), function (el) {
      return el.classList.add('is-show');
    });
  }
})();

(function (forms) {
  if (!forms.length) {
    return;
  }

  var hbsptFormsCreate = function hbsptFormsCreate(form) {
    hbspt.forms.create({
      region: "na1",
      portalId: "19575538",
      formId: form.getAttribute('data-hbspt-form'),
      target: '#' + form.getAttribute('id')
    });
  };

  var script = document.createElement('script');
  script.async = true;
  script.src = '//js.hsforms.net/forms/v2.js';

  script.onload = function () {
    Array.from(forms, function (form) {
      return hbsptFormsCreate(form);
    });
  };

  document.head.appendChild(script);
})(document.querySelectorAll('[data-hbspt-form]'));

(function (modal) {
  if (!modal) {
    return;
  }

  var items = modal.querySelectorAll('.modal__item'),
      btns = document.querySelectorAll('[data-modal]'),
      wrapper = document.querySelector('.wrapper');
  var activeModal = null,
      windowScroll = window.pageYOffset;
  modal.addEventListener('hide', function () {
    document.body.classList.remove('modal-show');
    wrapper.style.top = 0;
    window.scrollTo(0, windowScroll);
    activeModal = false;
    setTimeout(function () {
      return document.documentElement.classList.remove('scroll-behavior-off');
    });
  });

  var modalShow = function modalShow(selector) {
    if (!activeModal) {
      windowScroll = window.pageYOffset;
    }

    activeModal = modal.querySelector('.modal__item--' + selector);
    Array.from(items, function (el) {
      return el.classList.toggle('visuallyhidden', el !== activeModal);
    });
    document.documentElement.classList.add('scroll-behavior-off');
    setTimeout(function () {
      wrapper.style.top = -windowScroll + 'px';
      modal.classList.remove('visuallyhidden');
      document.body.classList.add('modal-show');
      window.scrollTo(0, 0);
      activeModal.focus();
    });
  };

  modal.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal') || event.target.closest('.modal__close')) {
      modal.dispatchEvent(new CustomEvent("hide"));
    }
  });
  Array.from(btns, function (btn) {
    return btn.addEventListener('click', function () {
      return modalShow(btn.getAttribute('data-modal'));
    });
  });
  modal.addEventListener('modalShow', function (event) {
    return modalShow(event.detail.selector);
  });
})(document.querySelector('.modal')); // footer__tab


(function (tab) {
  if (!tab) {
    return;
  }

  var btns = tab.querySelectorAll('.footer__tab-btn'),
      items = tab.querySelectorAll('.footer__tab-item');
  Array.from(btns, function (btn) {
    btn.addEventListener('click', function () {
      Array.from(btns, function (_btn, index) {
        _btn.classList.toggle('is-open', _btn === btn);

        items[index].classList.toggle('is-open', _btn === btn);
      });
    });
  });
})(document.querySelector('.footer__tab'));