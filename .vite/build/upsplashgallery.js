import z, { app as y, BrowserWindow as P } from "electron";
import G from "path";
import I from "child_process";
import L from "tty";
import T from "util";
import J from "fs";
import Z from "net";
import k from "node:path";
function H(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var O = { exports: {} }, b = { exports: {} }, q = { exports: {} }, C, A;
function Y() {
  if (A) return C;
  A = 1;
  var i = 1e3, e = i * 60, c = e * 60, f = c * 24, p = f * 365.25;
  C = function(r, n) {
    n = n || {};
    var o = typeof r;
    if (o === "string" && r.length > 0)
      return g(r);
    if (o === "number" && isNaN(r) === !1)
      return n.long ? v(r) : h(r);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(r)
    );
  };
  function g(r) {
    if (r = String(r), !(r.length > 100)) {
      var n = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        r
      );
      if (n) {
        var o = parseFloat(n[1]), l = (n[2] || "ms").toLowerCase();
        switch (l) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return o * p;
          case "days":
          case "day":
          case "d":
            return o * f;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return o * c;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return o * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return o * i;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return o;
          default:
            return;
        }
      }
    }
  }
  function h(r) {
    return r >= f ? Math.round(r / f) + "d" : r >= c ? Math.round(r / c) + "h" : r >= e ? Math.round(r / e) + "m" : r >= i ? Math.round(r / i) + "s" : r + "ms";
  }
  function v(r) {
    return a(r, f, "day") || a(r, c, "hour") || a(r, e, "minute") || a(r, i, "second") || r + " ms";
  }
  function a(r, n, o) {
    if (!(r < n))
      return r < n * 1.5 ? Math.floor(r / n) + " " + o : Math.ceil(r / n) + " " + o + "s";
  }
  return C;
}
var D;
function j() {
  return D || (D = 1, function(i, e) {
    e = i.exports = p.debug = p.default = p, e.coerce = a, e.disable = h, e.enable = g, e.enabled = v, e.humanize = Y(), e.names = [], e.skips = [], e.formatters = {};
    var c;
    function f(r) {
      var n = 0, o;
      for (o in r)
        n = (n << 5) - n + r.charCodeAt(o), n |= 0;
      return e.colors[Math.abs(n) % e.colors.length];
    }
    function p(r) {
      function n() {
        if (n.enabled) {
          var o = n, l = +/* @__PURE__ */ new Date(), s = l - (c || l);
          o.diff = s, o.prev = c, o.curr = l, c = l;
          for (var t = new Array(arguments.length), d = 0; d < t.length; d++)
            t[d] = arguments[d];
          t[0] = e.coerce(t[0]), typeof t[0] != "string" && t.unshift("%O");
          var u = 0;
          t[0] = t[0].replace(/%([a-zA-Z%])/g, function(w, R) {
            if (w === "%%") return w;
            u++;
            var S = e.formatters[R];
            if (typeof S == "function") {
              var W = t[u];
              w = S.call(o, W), t.splice(u, 1), u--;
            }
            return w;
          }), e.formatArgs.call(o, t);
          var m = n.log || e.log || console.log.bind(console);
          m.apply(o, t);
        }
      }
      return n.namespace = r, n.enabled = e.enabled(r), n.useColors = e.useColors(), n.color = f(r), typeof e.init == "function" && e.init(n), n;
    }
    function g(r) {
      e.save(r), e.names = [], e.skips = [];
      for (var n = (typeof r == "string" ? r : "").split(/[\s,]+/), o = n.length, l = 0; l < o; l++)
        n[l] && (r = n[l].replace(/\*/g, ".*?"), r[0] === "-" ? e.skips.push(new RegExp("^" + r.substr(1) + "$")) : e.names.push(new RegExp("^" + r + "$")));
    }
    function h() {
      e.enable("");
    }
    function v(r) {
      var n, o;
      for (n = 0, o = e.skips.length; n < o; n++)
        if (e.skips[n].test(r))
          return !1;
      for (n = 0, o = e.names.length; n < o; n++)
        if (e.names[n].test(r))
          return !0;
      return !1;
    }
    function a(r) {
      return r instanceof Error ? r.stack || r.message : r;
    }
  }(q, q.exports)), q.exports;
}
var U;
function K() {
  return U || (U = 1, function(i, e) {
    e = i.exports = j(), e.log = p, e.formatArgs = f, e.save = g, e.load = h, e.useColors = c, e.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : v(), e.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function c() {
      return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    e.formatters.j = function(a) {
      try {
        return JSON.stringify(a);
      } catch (r) {
        return "[UnexpectedJSONParseError]: " + r.message;
      }
    };
    function f(a) {
      var r = this.useColors;
      if (a[0] = (r ? "%c" : "") + this.namespace + (r ? " %c" : " ") + a[0] + (r ? "%c " : " ") + "+" + e.humanize(this.diff), !!r) {
        var n = "color: " + this.color;
        a.splice(1, 0, n, "color: inherit");
        var o = 0, l = 0;
        a[0].replace(/%[a-zA-Z%]/g, function(s) {
          s !== "%%" && (o++, s === "%c" && (l = o));
        }), a.splice(l, 0, n);
      }
    }
    function p() {
      return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function g(a) {
      try {
        a == null ? e.storage.removeItem("debug") : e.storage.debug = a;
      } catch {
      }
    }
    function h() {
      var a;
      try {
        a = e.storage.debug;
      } catch {
      }
      return !a && typeof process < "u" && "env" in process && (a = process.env.DEBUG), a;
    }
    e.enable(h());
    function v() {
      try {
        return window.localStorage;
      } catch {
      }
    }
  }(b, b.exports)), b.exports;
}
var $ = { exports: {} }, B;
function Q() {
  return B || (B = 1, function(i, e) {
    var c = L, f = T;
    e = i.exports = j(), e.init = l, e.log = a, e.formatArgs = v, e.save = r, e.load = n, e.useColors = h, e.colors = [6, 2, 3, 4, 5, 1], e.inspectOpts = Object.keys(process.env).filter(function(s) {
      return /^debug_/i.test(s);
    }).reduce(function(s, t) {
      var d = t.substring(6).toLowerCase().replace(/_([a-z])/g, function(m, w) {
        return w.toUpperCase();
      }), u = process.env[t];
      return /^(yes|on|true|enabled)$/i.test(u) ? u = !0 : /^(no|off|false|disabled)$/i.test(u) ? u = !1 : u === "null" ? u = null : u = Number(u), s[d] = u, s;
    }, {});
    var p = parseInt(process.env.DEBUG_FD, 10) || 2;
    p !== 1 && p !== 2 && f.deprecate(function() {
    }, "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
    var g = p === 1 ? process.stdout : p === 2 ? process.stderr : o(p);
    function h() {
      return "colors" in e.inspectOpts ? !!e.inspectOpts.colors : c.isatty(p);
    }
    e.formatters.o = function(s) {
      return this.inspectOpts.colors = this.useColors, f.inspect(s, this.inspectOpts).split(`
`).map(function(t) {
        return t.trim();
      }).join(" ");
    }, e.formatters.O = function(s) {
      return this.inspectOpts.colors = this.useColors, f.inspect(s, this.inspectOpts);
    };
    function v(s) {
      var t = this.namespace, d = this.useColors;
      if (d) {
        var u = this.color, m = "  \x1B[3" + u + ";1m" + t + " \x1B[0m";
        s[0] = m + s[0].split(`
`).join(`
` + m), s.push("\x1B[3" + u + "m+" + e.humanize(this.diff) + "\x1B[0m");
      } else
        s[0] = (/* @__PURE__ */ new Date()).toUTCString() + " " + t + " " + s[0];
    }
    function a() {
      return g.write(f.format.apply(f, arguments) + `
`);
    }
    function r(s) {
      s == null ? delete process.env.DEBUG : process.env.DEBUG = s;
    }
    function n() {
      return process.env.DEBUG;
    }
    function o(s) {
      var t, d = process.binding("tty_wrap");
      switch (d.guessHandleType(s)) {
        case "TTY":
          t = new c.WriteStream(s), t._type = "tty", t._handle && t._handle.unref && t._handle.unref();
          break;
        case "FILE":
          var u = J;
          t = new u.SyncWriteStream(s, { autoClose: !1 }), t._type = "fs";
          break;
        case "PIPE":
        case "TCP":
          var m = Z;
          t = new m.Socket({
            fd: s,
            readable: !1,
            writable: !0
          }), t.readable = !1, t.read = null, t._type = "pipe", t._handle && t._handle.unref && t._handle.unref();
          break;
        default:
          throw new Error("Implement me. Unknown stream file type!");
      }
      return t.fd = s, t._isStdio = !0, t;
    }
    function l(s) {
      s.inspectOpts = {};
      for (var t = Object.keys(e.inspectOpts), d = 0; d < t.length; d++)
        s.inspectOpts[t[d]] = e.inspectOpts[t[d]];
    }
    e.enable(n());
  }($, $.exports)), $.exports;
}
typeof process < "u" && process.type === "renderer" ? O.exports = K() : O.exports = Q();
var V = O.exports, _ = G, X = I.spawn, F = V("electron-squirrel-startup"), E = z.app, M = function(i, e) {
  var c = _.resolve(_.dirname(process.execPath), "..", "Update.exe");
  F("Spawning `%s` with args `%s`", c, i), X(c, i, {
    detached: !0
  }).on("close", e);
}, x = function() {
  if (process.platform === "win32") {
    var i = process.argv[1];
    F("processing squirrel command `%s`", i);
    var e = _.basename(process.execPath);
    if (i === "--squirrel-install" || i === "--squirrel-updated")
      return M(["--createShortcut=" + e], E.quit), !0;
    if (i === "--squirrel-uninstall")
      return M(["--removeShortcut=" + e], E.quit), !0;
    if (i === "--squirrel-obsolete")
      return E.quit(), !0;
  }
  return !1;
}, ee = x();
const re = /* @__PURE__ */ H(ee);
re && y.quit();
const N = () => {
  const i = k.resolve(y.getAppPath(), ".vite/build/preload.js");
  new P({
    width: 800,
    height: 600,
    webPreferences: {
      preload: i
    }
  }).loadFile(k.join(".vite/renderer/main_window/index.html"));
};
y.on("ready", N);
y.on("window-all-closed", () => {
  process.platform !== "darwin" && y.quit();
});
y.on("activate", () => {
  P.getAllWindows().length === 0 && N();
});
