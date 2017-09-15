/**
 Zwibbler

 Copyright 2017 Hanov Solutions Inc. All Rights Reserved. This software is
 NOT open source. For licensing information, contact the author.

 steve.hanov@gmail.com

 @license
 */
(function () {
    "use strict";
    var n;

    function aa(a, b, c, d, e) {
        this.Ua = a || "transparent";
        this.left = b || 0;
        this.top = c || 0;
        this.right = d || 0;
        this.bottom = e || 0;
        this.aa = 1;
        this.insertBefore = null
    }

    aa.prototype.Za = function () {
        this.ja && this.ja.remove()
    };
    aa.prototype.show = function (a) {
        this.ja = q("<div>");
        this.ja.ha("position", "fixed");
        this.ja.ha("background", this.Ua);
        this.ja.ha("opacity", "0.25");
        this.ja.ha("left", "" + this.left + "px");
        this.ja.ha("top", "" + this.top + "px");
        this.ja.ha("right", "" + this.right + "px");
        this.ja.ha("bottom", "" + this.bottom + "px");
        this.ja.ha("display", "none");
        this.ja.click(function (b) {
            a(b)
        });
        this.insertBefore ? (this.ja.ha("z-index", "" + this.aa), ba(q(this.ja), this.insertBefore)) : (this.ja.ha("z-index", "" + this.aa), q("body").append(this.ja));
        ca(this.ja)
    };
    var da = {}, ea = {};

    function fa(a, b) {
        for (var c = a.split(","), d = b, e = 0; e < c.length; e++)d = da[c[e]](d);
        return d
    }

    da.base64 = function (a) {
        for (var b = "", c, d, e, f, g, h,
                 k = 0; k < a.length;)c = a.charCodeAt(k++), d = a.charCodeAt(k++), e = a.charCodeAt(k++), f = c >> 2, c = (c & 3) << 4 | d >> 4, g = (d & 15) << 2 | e >> 6, h = e & 63, isNaN(d) ? g = h = 64 : isNaN(e) && (h = 64), b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h);
        return b
    };
    ea.base64 = function (a) {
        var b = "", c, d, e, f, g, h = 0, k = {
            A: 0,
            B: 1,
            C: 2,
            D: 3,
            E: 4,
            F: 5,
            G: 6,
            H: 7,
            I: 8,
            J: 9,
            K: 10,
            L: 11,
            M: 12,
            N: 13,
            O: 14,
            P: 15,
            Q: 16,
            R: 17,
            S: 18,
            T: 19,
            U: 20,
            V: 21,
            W: 22,
            X: 23,
            Y: 24,
            Z: 25,
            a: 26,
            b: 27,
            c: 28,
            d: 29,
            e: 30,
            f: 31,
            g: 32,
            h: 33,
            i: 34,
            j: 35,
            k: 36,
            l: 37,
            m: 38,
            n: 39,
            o: 40,
            p: 41,
            q: 42,
            r: 43,
            s: 44,
            t: 45,
            u: 46,
            v: 47,
            w: 48,
            x: 49,
            y: 50,
            z: 51,
            0: 52,
            1: 53,
            2: 54,
            3: 55,
            4: 56,
            5: 57,
            6: 58,
            7: 59,
            8: 60,
            9: 61,
            "+": 62,
            "/": 63,
            "=": 64
        };
        for (a = a.replace(/[^A-Za-z0-9\-_\=\+\/]/g, ""); h < a.length;)c = k[a.charAt(h++)], d = k[a.charAt(h++)], f = k[a.charAt(h++)], g = k[a.charAt(h++)], c =
            c << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 !== f && (b += String.fromCharCode(d)), 64 !== g && (b += String.fromCharCode(e));
        return b
    };
    da.ascii85 = function (a) {
        for (var b = "", c, d, e, f, g, h, k, l,
                 m = 0; m < a.length;)c = a.charCodeAt(m++), d = a.charCodeAt(m++), e = a.charCodeAt(m++), f = a.charCodeAt(m++), g = (c << 24 | d << 16 | e << 8 | f) >>> 0, c = (g / 52200625 | 0) % 85 + 33, h = (g / 614125 | 0) % 85 + 33, k = (g / 7225 | 0) % 85 + 33, l = (g / 85 | 0) % 85 + 33, g = g % 85 + 33, (118 < c || 118 < h || 118 < k || 118 < l || 118 < g) && console.log(c, h, k, l, g), (33 > c || 33 > h || 33 > k || 33 > l || 33 > g) && console.log(c, h, k, l, g), b += String.fromCharCode(c) + String.fromCharCode(h), isNaN(d) || (b += String.fromCharCode(k), isNaN(e) || (b += String.fromCharCode(l),
        isNaN(f) || (b += String.fromCharCode(g))));
        return b + "~>"
    };
    da.utf8 = function (a) {
        for (var b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128))
        }
        return b
    };
    ea.utf8 = function (a) {
        for (var b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            127 >= d ? b += String.fromCharCode(d) : 2047 >= a ? (b += String.fromCharCode(192 | a >> 6), b += String.fromCharCode(128 | a & 63)) : 65535 >= a ? (b += String.fromCharCode(224 | a >> 12), b += String.fromCharCode(128 | a >> 6 & 63), b += String.fromCharCode(128 | a & 63)) : 1114111 >= a ? (b += String.fromCharCode(240 | a >> 18), b += String.fromCharCode(128 | a >> 12 & 63), b += String.fromCharCode(128 | a >> 6 & 63), b += String.fromCharCode(128 | a & 63)) : b += String.fromCharCode(63)
        }
        return b
    };
    ea.utf8 = function (a) {
        for (var b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128))
        }
        return b
    };
    da.hex = function (a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            16 > d && b.push("0");
            b.push(d.toString(16))
        }
        return b.join("")
    };
    da.sha1 = function (a) {
        var b = [1518500249, 1859775393, 2400959708, 3395469782];
        a += String.fromCharCode(128);
        for (var c = Math.ceil((a.length / 4 + 2) / 16), d = Array(c), e = 0; e < c; e++) {
            d[e] = Array(16);
            for (var f = 0; 16 > f; f++)d[e][f] = a.charCodeAt(64 * e + 4 * f) << 24 | a.charCodeAt(64 * e + 4 * f + 1) << 16 | a.charCodeAt(64 * e + 4 * f + 2) << 8 | a.charCodeAt(64 * e + 4 * f + 3)
        }
        d[c - 1][14] = 8 * (a.length - 1) / Math.pow(2, 32);
        d[c - 1][14] = Math.floor(d[c - 1][14]);
        d[c - 1][15] = 8 * (a.length - 1) & 4294967295;
        a = 1732584193;
        for (var f = 4023233417, g = 2562383102, h = 271733878, k = 3285377520, l =
            Array(80), m, p, r, u, v, e = 0; e < c; e++) {
            for (var w = 0; 16 > w; w++)l[w] = d[e][w];
            for (w = 16; 80 > w; w++)m = l[w - 3] ^ l[w - 8] ^ l[w - 14] ^ l[w - 16], l[w] = m << 1 | m >>> 31;
            m = a;
            p = f;
            r = g;
            u = h;
            v = k;
            for (w = 0; 80 > w; w++) {
                var z = Math.floor(w / 20), H;
                a:{
                    switch (z) {
                        case 0:
                            H = p & r ^ ~p & u;
                            break a;
                        case 1:
                            H = p ^ r ^ u;
                            break a;
                        case 2:
                            H = p & r ^ p & u ^ r & u;
                            break a;
                        case 3:
                            H = p ^ r ^ u;
                            break a
                    }
                    H = void 0
                }
                z = (m << 5 | m >>> 27) + H + v + b[z] + l[w] & 4294967295;
                v = u;
                u = r;
                r = p << 30 | p >>> 2;
                p = m;
                m = z
            }
            a = a + m & 4294967295;
            f = f + p & 4294967295;
            g = g + r & 4294967295;
            h = h + u & 4294967295;
            k = k + v & 4294967295
        }
        return String.fromCharCode(a >>
                24 & 255) + String.fromCharCode(a >> 16 & 255) + String.fromCharCode(a >> 8 & 255) + String.fromCharCode(a >> 0 & 255) + String.fromCharCode(f >> 24 & 255) + String.fromCharCode(f >> 16 & 255) + String.fromCharCode(f >> 8 & 255) + String.fromCharCode(f >> 0 & 255) + String.fromCharCode(g >> 24 & 255) + String.fromCharCode(g >> 16 & 255) + String.fromCharCode(g >> 8 & 255) + String.fromCharCode(g >> 0 & 255) + String.fromCharCode(h >> 24 & 255) + String.fromCharCode(h >> 16 & 255) + String.fromCharCode(h >> 8 & 255) + String.fromCharCode(h >> 0 & 255) + String.fromCharCode(k >> 24 & 255) + String.fromCharCode(k >>
                16 & 255) + String.fromCharCode(k >> 8 & 255) + String.fromCharCode(k >> 0 & 255)
    };
    function ga(a, b, c) {
        this.name = a;
        this.aa = b;
        this.children = [];
        this.text = c
    }

    ga.prototype = {
        toString: function () {
            var a = [];
            ha(this, a, "");
            return fa("utf8", a.join(""))
        }
    };
    function ia(a, b) {
        a.children.push(b)
    }

    function ha(a, b, c) {
        var d, e;
        a:{
            for (e in a.aa)if (a.aa.hasOwnProperty(e)) {
                e = !0;
                break a
            }
            e = !1
        }
        if (e || 0 !== a.children.length) {
            b.push(c);
            b.push("<");
            b.push(a.name);
            for (d in a.aa)a.aa.hasOwnProperty(d) && (b.push(" "), b.push(d), void 0 !== a.aa[d] && null !== a.aa[d] && (b.push('="'), b.push(a.aa[d]), b.push('"')));
            if (a.children.length || void 0 !== a.text) {
                b.push(">\n");
                for (d = 0; d < a.children.length; d++)ha(a.children[d], b, c + "  ");
                void 0 !== a.text && b.push(c + "  " + a.text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g,
                        "&quot;").replace(/'/g, "&#039;"));
                b.push(c + "</" + a.name + ">")
            } else b.push("/>");
            b.push("\n")
        }
    };
    function ja(a) {
        if ("string" === typeof a) {
            for (; 8 > a.length;)a += a;
            for (var b = 16777619, c = 0; c < a.length; c++)b = (16777619 * b ^ a.charCodeAt(c)) & 4294967295;
            a = b
        }
        this.da = a;
        this.reset()
    }

    ja.prototype = {
        reset: function () {
            this.ba = this.aa = this.da
        }, next: function () {
            this.ba = 36969 * (this.ba & 65535) + (this.ba >> 16);
            this.aa = 18E3 * (this.aa & 65535) + (this.aa >> 16);
            return ((this.ba << 16) + this.aa) / 4294967295 / 2 + .5
        }
    };
    var ka = null;
    "undefined" !== typeof window && (ka = window);
    var la = {}, ma = [];

    function t(a, b) {
        function c(b) {
            var c = arguments, f = [], g = c[0];
            if (!la[a]) {
                var h = g.split("%s");
                f.push(h[0]);
                for (g = 1; g < h.length; g++)g - 1 >= c.length - 1 ? f.push("<too few args>") : "string" === typeof c[g] || "number" === typeof c[g] ? f.push(c[g]) : void 0 === c[g] ? f.push("(undefined)") : null === c[g] ? f.push("(null)") : c[g] instanceof Object && c[g].toString instanceof Function ? f.push(c[g].toString()) : f.push(JSON.stringify(c[g])), f.push(h[g]);
                c = f.join("");
                for (g = 0; g < ma.length; g++)ma[g](a, c)
            }
        }

        !1 === b && (la[a] = !0);
        c.aa = function () {
            return 0 <
                ma.length && !la[a]
        };
        return c
    }

    function na(a) {
        ma.push(a);
        return a
    }

    "console" in ka || (ka.console = {
        log: function () {
            for (var a = [], b = 0; b < arguments.length; b++)try {
                "string" === typeof arguments[b] ? a.push(arguments[b]) : a.push(JSON.stringify(arguments[b]))
            } catch (c) {
                a.push(c.toString())
            }
            for (b = 0; b < ma.length; b++)ma[b]("Console", a.join(""))
        }
    }, ka.console.error = ka.console.log);
    function oa() {
        this.length = 0
    }

    var pa = t("JQUERY"), qa, ta = /\s+/, ua = /^[\s\xA0]+/, va = /[\s\xA0]+$/, wa = /[\n\t]/g, xa, ya = {
        B: 1,
        BIG: 1,
        I: 1,
        SMALL: 1,
        TT: 1,
        ABBR: 1,
        ACRONYM: 1,
        CITE: 1,
        CODE: 1,
        DFN: 1,
        EM: 1,
        KBD: 1,
        STRONG: 1,
        SAMP: 1,
        VAR: 1,
        A: 1,
        BDO: 1,
        BR: 1,
        IMG: 1,
        MAP: 1,
        OBJECT: 1,
        Q: 1,
        SCRIPT: 1,
        SPAN: 1,
        SUB: 1,
        SUP: 1,
        BUTTON: 1,
        INPUT: 1,
        LABEL: 1,
        SELECT: 1,
        TEXTAREA: 1
    }, za = [], Aa = !1;

    function Ba() {
        !Aa && window.attachEvent && (window.attachEvent("onresize", function (a) {
            for (var b = 0; b < za.length; b++)za[b](a)
        }), Aa = !0)
    }

    function Ca(a, b, c, d) {
        this.name = a;
        this.lg = b;
        this.Id = c;
        this.Dh = d
    }

    function Da(a, b) {
        var c = /#(.*)$/, d = /\.(.*)$/, e = /^<\s*([a-zA-Z0-9]+).*>$/, f = /^([A-Za-z]+)$/;
        b = b || document;
        var g = new oa, h, k, l;
        try {
            l = ("object" === typeof HTMLElement ? a instanceof HTMLElement : "object" === typeof a && 1 === a.nodeType && "string" === typeof a.nodeName || 3 === a.nodeType) || a === window || a === document || a === document.body || a instanceof Element
        } catch (r) {
            l = !1
        }
        if (l)return g[g.length++] = a, g;
        if (a instanceof oa)return a;
        l = a.split(",");
        for (var m = 0; m < l.length; m++)if (k = l[m], null !== (h = c.exec(k))) h = document.getElementById(h[1]),
        null !== h && (g[g.length++] = h); else if (null !== (h = e.exec(k))) h = h[1], g[g.length++] = document.createElement(h); else if (null !== (h = d.exec(k))) {
            k = g;
            h = xa(b, h[1], null);
            for (var p = 0; p < h.length; p++)k[k.length++] = h[p]
        } else if (null !== (h = f.exec(k)))for (k = g, h = b.getElementsByTagName(h[1]), p = 0; p < h.length; p++)k[k.length++] = h[p]; else throw console.log(k), "Error: can't parse selector: " + k + " (" + k.nodeType;
        return g
    }

    oa.prototype = {
        children: function () {
            for (var a = new oa,
                     b = 0; b < this.length; b++)for (var c = this[b].firstChild; c;)a[a.length++] = c, c = c.nextSibling;
            return a
        }, Za: function () {
            for (var a = 0; a < this.length; a++) {
                var b = q(this[a]).ha("display");
                "none" !== b && (this[a].Ne = b);
                this[a].style.display = "none"
            }
            return this
        }, show: function () {
            for (var a = 0; a < this.length; a++)this[a].Ne ? this[a].style.display = this[a].Ne : "none" === q(this[a]).ha("display") && (this[a].style.display = this[a].tagName in ya ? "inline" : "block");
            return this
        }, append: function (a) {
            a =
                Da(a);
            if (0 < this.length)for (var b = 0; b < a.length; b++)this[0].appendChild(a[b]);
            return this
        }, remove: function () {
            for (var a = 0; a < this.length; a++)this[a].parentNode && this[a].parentNode.removeChild(this[a]);
            return this
        }, empty: function () {
            for (var a = 0; a < this.length; a++)for (; null !== this[a].firstChild;)this[a].removeChild(this[a].firstChild);
            return this
        }, text: function (a) {
            if (0 === arguments.length) {
                var b = "";
                Ea(this, function (a) {
                    3 === a.nodeType && (b += a.nodeValue)
                });
                return b
            }
            for (var c = 0; c < this.length; c++) {
                for (; null !== this[c].firstChild;)this[c].removeChild(this[c].firstChild);
                this[c].appendChild(document.createTextNode(a))
            }
            return this
        }, width: function () {
            if (0 < this.length) {
                if (1 === arguments.length) {
                    for (var a = Math.max(0, arguments[0]),
                             b = 0; b < this.length; b++)this[b].style.width = "" + a + "px";
                    return this
                }
                return this[0] === window ? this[0].innerWidth || document.documentElement.clientWidth : this[0].clientWidth
            }
            return 0
        }, height: function () {
            if (0 < this.length) {
                if (1 === arguments.length) {
                    for (var a = 0; a < this.length; a++)this[a].style.height = "" + arguments[0] + "px";
                    return this
                }
                return this[0] === window ? this[0].innerHeight ||
                    document.documentElement.clientHeight : this[0].clientHeight
            }
            return 0
        }, outerWidth: function () {
            return 0 < this.length ? this[0].offsetWidth : 0
        }, outerHeight: function () {
            return 0 < this.length ? this[0].offsetHeight : 0
        }, offset: function (a) {
            if (a) {
                if (0 < this.length) {
                    var b;
                    if (0 === this.length) b = null; else if ("fixed" === this.ha("position")) b = q(document.body); else {
                        for (b = this[0].parentNode; b && "static" === q(b).ha("position") && "BODY" !== b.tagName;)b = b.parentNode;
                        b = q(b)
                    }
                    b = b.offset();
                    this[0].style.left = a.left - b.left + "px";
                    this[0].style.top =
                        a.top - b.top + "px"
                }
                return this
            }
            if (0 < this.length) {
                a = this[0].getBoundingClientRect();
                var c = b = 0;
                "pageYOffset" in window ? (b = window.pageXOffset, c = window.pageYOffset) : (b = document.body.scrollLeft, c = document.body.scrollTop);
                return {top: a.top + c, left: a.left + b}
            }
            return {left: 0, top: 0}
        }, clone: function () {
            return this.length ? Da(this[0].cloneNode(!0)) : new oa
        }, find: function (a) {
            return this.length ? Da(a, this[0]) : new oa
        }, ob: function (a, b) {
            if (2 === arguments.length) {
                for (var c = 0; c < this.length; c++)this[c].setAttribute(a, b);
                return this
            }
            return 0 <
            this.length ? this[0].getAttribute(a) : ""
        }, mb: function (a) {
            for (var b = 0; b < this.length; b++)a(b, this[b])
        }, focus: function () {
            0 < this.length && this[0].focus();
            return this
        }, blur: function () {
            0 < this.length && this[0].blur();
            return this
        }, submit: function () {
            for (var a = 0; a < this.length; a++)this[a].submit();
            return this
        }, select: function () {
            for (var a = 0; a < this.length; a++)this[a].select();
            return this
        }, ha: function (a, b) {
            var c = a.split("-");
            a = c[0];
            for (var d = 1; d < c.length; d++)a = "ms" !== c[d] ? a + (c[d].substr(0, 1).toUpperCase() + c[d].substr(1)) :
                a + c[d];
            if (2 === arguments.length) {
                for (d = 0; d < this.length; d++)this[d].style[a] = "" + b;
                return this
            }
            return this[0].currentStyle ? this[0].currentStyle[a] : window.getComputedStyle ? window.getComputedStyle(this[0], null)[a] : this[0].style[a]
        }, on: function (a, b) {
            function c(c) {
                d[0] === window && "resize" === c && window.attachEvent ? (za.push(b), Ba()) : window.addEventListener ? d.mb(function (d, e) {
                    function k(a) {
                        a.cb = a;
                        "which" in a || (a.which = a.button);
                        return b.call(e, a)
                    }

                    e.__JqlListeners || (e.__JqlListeners = []);
                    k.$e = a;
                    b.$e = a;
                    e.addEventListener(c,
                        k, !1);
                    e.__JqlListeners.push(new Ca(c, e, b, k))
                }) : d.mb(function (a, d) {
                    d.attachEvent("on" + c, function (a) {
                        a.cb = a;
                        a.which = a.button;
                        a.pageX = a.clientX;
                        a.pageY = a.clientY;
                        a.preventDefault = function () {
                            a.returnValue = !1
                        };
                        a.stopPropagation = function () {
                            a.cancelBubble = !0
                        };
                        a.target = a.target || a.srcElement;
                        return b.call(d, a)
                    })
                })
            }

            var d = this;
            a = a.split(" ");
            for (var e = 0; e < a.length; e++)c(a[e]);
            return this
        }, bind: function (a, b) {
            return this.on(a, b)
        }, Wc: function (a, b) {
            window.addEventListener && this.mb(function (c, d) {
                if (d.__JqlListeners)for (var e =
                    d.__JqlListeners, f = 0; f < e.length; f++) {
                    var g = e[f];
                    if (a === g.name && d === g.lg && b === g.Id) {
                        d.removeEventListener(a, g.Dh, !1);
                        e.splice(f, 1);
                        break
                    }
                }
            });
            return this
        }, click: function (a) {
            return a ? this.on("click", a) : Fa(this, "click")
        }, resize: function (a) {
            if (a) this.on("resize", a); else Fa(this, "resize");
            return this
        }, scrollLeft: function (a) {
            if (1 === arguments.length) {
                for (var b = 0; b < this.length; b++)this[b].scrollLeft = a;
                return this
            }
            return this[0].scrollLeft
        }, scrollTop: function (a) {
            if (1 === arguments.length) {
                for (var b = 0; b < this.length; b++)this[b].scrollTop =
                    a;
                return this
            }
            return this[0].scrollTop
        }
    };
    function ca(a) {
        for (var b = 0; b < a.length; b++)a[b].style.display = "block"
    }

    function Ga(a, b) {
        a.on("change", b)
    }

    function Ia(a, b) {
        a.on("mouseout", b)
    }

    function Ja(a, b) {
        a.on("mouseover", b)
    }

    function Ka(a, b) {
        a.on("dblclick", b)
    }

    function La(a, b) {
        a.on("mousemove", b)
    }

    function Ma(a) {
        q(window).on("mouseup", a)
    }

    function Na(a, b) {
        a.on("mousedown", b)
    }

    function Oa(a, b) {
        a.on("keydown", b)
    }

    function Pa() {
        var a = q("<input>").ob("type", "button");
        a[0].value = "OK";
        return a
    }

    function Qa(a, b) {
        if (b && "string" === typeof b)for (var c = (b || "").split(ta), d = 0, e = a.length; d < e; d++) {
            var f = a[d];
            if (1 === f.nodeType)if (f.className) {
                for (var g = " " + f.className + " ", h = f.className, k = 0,
                         l = c.length; k < l; k++)0 > g.indexOf(" " + c[k] + " ") && (h += " " + c[k]);
                f.className = qa.da(h)
            } else f.className = b
        }
        return a
    }

    function Ra(a, b) {
        for (var c = 0; c < a.length; c++)a[c].innerHTML = b
    }

    function Fa(a, b) {
        a.mb(function (a, d) {
            var e;
            pa("Trigger " + b);
            if (document.createEventObject)if (e = document.createEventObject(), "resize" === b) {
                pa("Calling stored window resize functions");
                for (var f = 0; f < za.length; f++)za[f](e)
            } else d.fireEvent("on" + b, e); else e = document.createEvent("HTMLEvents"), e.initEvent(b, !0, !0), d.dispatchEvent(e)
        })
    }

    function ba(a, b) {
        b = Da(b);
        0 < a.length && 0 < b.length && b[0].parentNode.insertBefore(a[0], b[0])
    }

    function Sa(a, b) {
        b = Da(b);
        0 < a.length && 0 < b.length && a[0].parentNode.insertBefore(b[0], a[0])
    }

    function Ea(a, b) {
        for (var c = [], d = a.length - 1; 0 <= d; d--)c.push(a[d]);
        for (; c.length;)for (d = c.pop(), b(d), d = d.lastChild; d;)c.push(d), d = d.previousSibling
    }

    qa = function (a) {
        return Da(a)
    };
    qa.da = function (a) {
        return null === a ? "" : a.toString().replace(ua, "").replace(va, "")
    };
    qa.ba = function (a) {
        var b = a.url || "", c = a.type || "GET", d = a.lh || function () {
            }, e = a.error || function () {
            }, f = a.data || "";
        a = a.bg || function () {
            };
        var g = "", h;
        try {
            h = new XMLHttpRequest
        } catch (l) {
            try {
                h = new ActiveXObject("Msxml2.XMLHTTP")
            } catch (m) {
                try {
                    h = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (p) {
                    e(null, "", null)
                }
            }
        }
        if ("object" === typeof f)for (var k in f)Object.hasOwnProperty.call(f, k) && (g.length && (g += "&"), g += encodeURIComponent(k), g += "=", g += encodeURIComponent(f[k]));
        "GET" === c && (b += "?" + g, g = "");
        a(h, h);
        h.open(c, b, !0);
        h.onreadystatechange =
            function () {
                if (4 === h.readyState)if (200 === h.status) {
                    var a = h.responseText, b = h.getResponseHeader("content-type");
                    if (b && 0 === b.indexOf("application/json"))try {
                        a = qa.ka(a)
                    } catch (c) {
                    }
                    d(a, "", h)
                } else e(h, "", null)
            };
        "POST" === c && h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        h.send(g)
    };
    xa = function (a, b, c) {
        var d = [], e = b.split(/\s+/);
        for (b = 0; b < e.length; b++) {
            var f = e[b].replace(/([\/\\\^$*+?.()|\[\]{}])/g, "\\$1");
            d.push(new RegExp("(^|\\s)" + f + "(\\s|$)"))
        }
        e = a.getElementsByTagName(c || "*");
        f = [];
        b = 0;
        for (c = e.length; b < c; b++) {
            var g = e[b], h = !0;
            for (a = 0; a < d.length; a++)if (!d[a].test(g.className)) {
                h = !1;
                break
            }
            h && f.push(g)
        }
        return f
    };
    qa.ka = function (a) {
        return window.JSON.parse(a)
    };
    qa.aa = function (a) {
        for (var b = arguments[0], c = 1; c < arguments.length; c++) {
            var d = arguments[c], e;
            for (e in d)d.hasOwnProperty(e) && (b[e] = d[e])
        }
        return b
    };
    qa.zc = oa.prototype;
    var q = qa;
    t("Cookies");
    function Ta() {
        this.aa = []
    }

    Ta.prototype = {
        log: t("DESTRUCTOR"), add: function (a) {
            this.aa.push(a)
        }, bind: function (a, b, c) {
            a.bind(b, c);
            this.add(function () {
                a.Wc(b, c)
            })
        }
    };
    (function (a) {
        this.algorithm = a.algorithm || "wrap";
        this.aa = a.gravity || "down";
        this.ba = !1 !== a.resize;
        "down" === this.aa ? (this.offsetWidth = "offsetWidth", this.offsetHeight = "offsetHeight", this.width = "width", this.height = "height", this.top = "top", this.left = "left", this.clientWidth = "clientWidth", this.clientHeight = "clientHeight") : "up" === this.aa ? (this.offsetWidth = "offsetWidth", this.offsetHeight = "offsetHeight", this.width = "width", this.height = "height", this.top = "bottom", this.left = "left", this.clientWidth = "clientWidth",
            this.clientHeight = "clientHeight") : (this.offsetWidth = "offsetHeight", this.offsetHeight = "offsetWidth", this.width = "height", this.height = "width", this.top = "left", this.left = "top", this.clientWidth = "clientHeight", this.clientHeight = "clientWidth")
    }).prototype = {log: t("Layout")};
    function Ua(a) {
        this.aa = "en";
        "string" === typeof a && (a = Va(this, a, {}));
        this.data = a
    }

    Ua.prototype = {
        log: t("LANGUAGE"), zc: function () {
            var a = this;
            return function (b, c) {
                return Wa(a, arguments)
            }
        }, get: function (a, b) {
            return Wa(this, arguments)
        }
    };
    function Wa(a, b) {
        var c = b[0], d = "<not translated:" + c + ">";
        a.aa in a.data && c in a.data[a.aa] && (d = a.data[a.aa][c]);
        for (c = 1; c < b.length; c++)d = d.replace("^" + c, b[c]);
        return d
    }

    function Va(a, b, c) {
        b = b.split("\n");
        for (var d = /^([ \t]*)([^:]+):([^:]+):(.*)/, e = 0; e < b.length; e++) {
            var f = d.exec(b[e]);
            if (f) {
                var g = f[2], h = f[3], f = f[4];
                g in c || (c[g] = {});
                h in c[g] && a.log("Warning: Replacing %s:%s", g, h);
                c[g][h] = f
            }
        }
        return c
    }

    function Xa(a, b) {
        b = b.split(",");
        a.log("Choice of languages: %s", b);
        for (var c = 0; c < b.length; c++) {
            var d = b[c].split("-")[0];
            if (d in a.data) {
                a.log("Using language code %s", d);
                a.aa = d;
                break
            } else a.log("No language for code %s", d)
        }
    };
    function Ya(a, b, c, d, e, f) {
        this.view = a;
        this.node = b;
        this.aa = c;
        this.ba = b.Gd(c);
        this.da = f;
        this.Ha = b.pa("snap") || 0;
        this.Sa(d, e)
    }

    Ya.prototype = {
        log: t("MoveEditNode"), Db: function () {
            this.log("Entering MoveEditNode")
        }, Ib: function () {
            this.log("Leaving MoveEditNode")
        }, hb: function (a) {
            "touchmove" === a.type ? (a = a.touches[0], a = x(this.view, a.pageX, a.pageY), this.Wa(a.x, a.y)) : "touchend" === a.type && (a = a.changedTouches[0], a = x(this.view, a.pageX, a.pageY), this.Ya(a.x, a.y))
        }, Sa: function (a, b) {
            var c = this.view.Ha(new y(a, b), this.Ha);
            a = c.x;
            b = c.y;
            this.log("onMouseDown(%s,%s)", a, b);
            this.Pd = a;
            this.Qd = b
        }, Wa: function (a, b) {
            var c = this.view.Ha(new y(a, b), this.Ha);
            a = c.x;
            b = c.y;
            this.node.Bc(this.aa, a, b);
            this.node.format(this.view.oa, this.view.request);
            this.view.na()
        }, Ya: function (a, b) {
            var c = this.view.Ha(new y(a, b), this.Ha);
            a = c.x;
            b = c.y;
            this.log("onMouseUp(%s,%s)", a, b, this.Pd, this.Qd);
            if (a !== this.Pd || b !== this.Qd) this.view.ya([new Za(this.node.id, this.aa, this.ba.x, this.ba.y, a, b)]); else {
                var c = this.view, d = this.node.id, e = this.aa, f = A(c.la, d, !1);
                f ? f.Le(e) ? (f !== c.Fa && (c.Fa = f), c.log("Select edit handle %s", e), c.Ka = e, c.aa.emit("selected-edit-handle", d, e)) : c.log("selectEditHandle: That handle is not selectable.") :
                    c.log("selectEditHandle: nodeid %s does not exist.", d)
            }
            this.view.na();
            B(this.view, this.da || new $a(this.view))
        }
    };
    function ab(a, b) {
        function c(a) {
            this.Pd = a.pageX;
            this.Qd = a.pageY;
            this.pageX = a.pageX;
            this.pageY = a.pageY;
            this.identifier = "identifier" in a ? a.identifier : a.pointerId
        }

        function d(a, b) {
            var d;
            for (d = 0; d < a.length; d++) {
                var e;
                a:{
                    e = a[d];
                    var f = -1, g = void 0;
                    if ("identifier" in e)for (g = 0; g < k.length; g++) {
                        if (e.identifier === k[g].identifier) {
                            e = g;
                            break a
                        }
                    } else if ("pointerId" in e)for (g = 0; g < k.length; g++) {
                        if (e.pointerId === k[g].identifier) {
                            e = g;
                            break a
                        }
                    } else for (var l = 0, g = 0; g < k.length; g++) {
                        var m = k[g].jg(e.pageX);
                        if (-1 === f || m < l) f =
                            g, l = m
                    }
                    e = f
                }
                -1 === e ? "touchend" !== b && (k.push(new c(a[d])), h("New touch %s", a[d].identifier)) : "touchend" !== b ? (k[e].pageX = a[d].pageX, k[e].pageY = a[d].pageY) : (h("Remove touch %s", a[d].identifier), k.splice(e, 1))
            }
        }

        function e() {
            for (var a = 0, b = 0,
                     c = 0; c < k.length; c++)h("Active touch: %s,%s", k[c].pageX, k[c].pageY), a += k[c].pageX, b += k[c].pageY;
            return {x: a / k.length, y: b / k.length}
        }

        function f(a, b) {
            for (var c = 0, d = 0; d < k.length; d++)var e = k[d],
                c = c + Math.sqrt((e.pageX - a) * (e.pageX - a) + (e.pageY - b) * (e.pageY - b));
            return c / k.length
        }

        function g(a,
                   b) {
            a.preventDefault = function () {
                b.preventDefault()
            };
            a.stopPropagation = function () {
                b.stopPropagation()
            };
            return a
        }

        var h = t("GESTURES");
        if (a.Rh) a.addEventListener("gesture", b, !1), h("No emulation needed"); else {
            c.prototype.jg = function (a) {
                return Math.sqrt((this.pageX - a.pageX) * (this.pageX - a.pageX) + (this.pageY - a.pageY) * (this.pageY - a.pageY))
            };
            var k = [], l = !1, m = 1, p = 0, r, u;
            a.addEventListener("touchstart", function (a) {
                d(a.changedTouches, a.type);
                h("touchend; inGesture=%s active.length=%s", l, k.length);
                2 <= k.length && !l &&
                (l = !0, u = e(), r = f(u.x, u.y), m = 1, p = 0, b(g({
                    type: "gesturestart",
                    pageX: u.x,
                    pageY: u.y,
                    scale: m,
                    rotation: p
                }, a)))
            });
            a.addEventListener("touchmove", function (a) {
                d(a.changedTouches, a.type);
                if (2 <= k.length) {
                    u = e();
                    m = f(u.x, u.y) / r;
                    for (var c = u.x, h = u.y, l = 0,
                             P = 0; P < k.length; P++)l += Math.atan2(k[P].pageY - h, k[P].pageX - c) - Math.atan2(k[P].Qd - h, k[P].Pd - c);
                    p = l / k.length / Math.PI * 180;
                    b(g({type: "gesturechange", pageX: u.x, pageY: u.y, scale: m, rotation: p}, a))
                }
            });
            a.addEventListener("touchend", function (a) {
                d(a.changedTouches, a.type);
                h("touchend; inGesture=%s active.length=%s",
                    l, k.length);
                l && 2 > k.length && (l = !1, b(g({
                    type: "gestureend",
                    pageX: u.x,
                    pageY: u.y,
                    scale: m,
                    rotation: p
                }, a)))
            })
        }
    };
    function bb(a, b, c) {
        this.view = a;
        this.state = "none";
        this.za = document.createElement("img");
        this.url = this.za.src = b.url;
        this.ea = b;
        this.scale = 1;
        "scale" in this.ea && (this.scale = this.ea.scale, delete this.ea.scale);
        this.aa = c
    }

    bb.prototype = {
        log: t("ImageStamp"), Db: function () {
            this.log("Entering ImageStampBehaviour");
            this.view.canvas.style.cursor = "move"
        }, Ib: function () {
            this.log("Leaving ImageStampBehaviour");
            this.view.na()
        }, hb: function (a) {
            var b;
            "touchstart" === a.type ? (b = a.changedTouches[0], b = x(this.view, b.pageX, b.pageY), this.Sa(b.x, b.y, a)) : "touchmove" === a.type ? (b = a.changedTouches[0], b = x(this.view, b.pageX, b.pageY), this.Wa(b.x, b.y, a)) : "touchend" === a.type && (b = a.changedTouches[0], b = x(this.view, b.pageX, b.pageY), this.Ya(b.x, b.y, a))
        },
        Ha: function (a, b) {
            this.za.complete && (a -= this.za.width / 2, b -= this.za.height / 2);
            return this.view.Ha(new y(a, b))
        }, Sa: function (a, b, c) {
            this.log("onMouseDown type %s", c.type);
            a = this.Ha(a, b);
            this.view.ya([new C("ImageNode", q.aa({}, this.ea, {
                url: this.url,
                layer: this.view.La,
                matrix: (new E(a.x, a.y)).multiply(new cb(this.scale, this.scale))
            }))]);
            this.aa || (this.log("MultiStamp not set; return to pick mode."), F(this.view))
        }, Wa: function (a, b) {
            this.za.complete || this.log("Don't draw; image not loaded.");
            var c = this.Ha(a,
                b), d = this;
            this.view.na(function (a) {
                var b = a.globalAlpha;
                a.globalAlpha = .5;
                a.drawImage(d.za, c.x, c.y, d.za.naturalWidth * d.scale, d.za.naturalHeight * d.scale);
                a.globalAlpha = b
            })
        }, Ya: function () {
        }, vb: function (a) {
            "cancel" === a && (F(this.view), this.view.tb.emit("goto-toolbar"))
        }
    };
    function db() {
        this.aa = [];
        this.ba = []
    }

    db.prototype = {
        log: t("SnapRules", !0), Ha: function (a, b, c) {
            return 0 === this.aa.length ? new y(a, b) : new y(eb(this.aa, a, c), eb(this.ba, b, c))
        }
    };
    function eb(a, b, c) {
        for (var d = a.length, e = -1, f; 1 < d - e;)f = (d + e) / 2 | 0, a[f].value <= b ? e = f : d = f;
        -1 === e && (e = 0);
        return Math.abs(a[e].value - b) < c ? a[e].value : e + 1 < a.length && Math.abs(a[e + 1].value - b) < c ? a[e + 1].value : b
    }

    function fb(a) {
        a.aa.sort(function (a, c) {
            return a.value - c.value
        });
        a.ba.sort(function (a, c) {
            return a.value - c.value
        })
    }

    function gb(a, b, c) {
        hb(a.aa, function (a) {
            return a.id === b
        });
        hb(a.ba, function (a) {
            return a.id === b
        });
        var d;
        for (d = 0; d < c.length; d++)a.aa.push({id: b, value: c[d].x}), a.ba.push({id: b, value: c[d].y})
    };
    function ib(a) {
        this.ba = this.start = null;
        this.view = a;
        this.aa = !1
    }

    ib.prototype = {
        log: t("PanZoomMixin"), Xa: function (a) {
            this.log("onGesture(%s)", a.type);
            if (!this.view.ga.get("allowZoom"))return !1;
            if ("gesturestart" === a.type) this.start = new y(a.pageX, a.pageY), this.ba = x(this.view, a.pageX, a.pageY), this.rect = jb(this.view), this.aa = !0; else if ("gesturechange" === a.type) {
                var b = a.pageX - this.start.x, c = a.pageY - this.start.y;
                a = kb(this.view.ga, 1 / a.scale);
                a = new cb(a, a, this.ba.x, this.ba.y);
                a = (new E(-b / this.view.scale, -c / this.view.scale)).multiply(a);
                b = this.rect.clone();
                b.transform(a);
                lb(this.view, b)
            } else"gestureend" === a.type && (this.aa = !1)
        }
    };
    function mb(a) {
        this.view = a;
        this.state = "none";
        this.da = new ib(a)
    }

    mb.prototype = {
        log: t("PanTool"), Db: function () {
            this.log("Entering PanToolBehaviour");
            this.view.canvas.style.cursor = "all-scroll"
        }, Ib: function () {
            this.log("Leaving PanToolBehaviour")
        }, Xa: function (a) {
            return this.da.Xa(a)
        }, hb: function (a) {
            var b;
            "touchstart" === a.type ? (b = a.changedTouches[0], b = x(this.view, b.pageX, b.pageY), this.Sa(b.x, b.y, a)) : "touchmove" === a.type ? (b = a.changedTouches[0], b = x(this.view, b.pageX, b.pageY), this.Wa(b.x, b.y, a)) : "touchend" === a.type && (b = a.changedTouches[0], b = x(this.view, b.pageX, b.pageY),
                    this.Ya(b.x, b.y, a))
        }, Sa: function (a, b, c) {
            this.log("onMouseDown type %s", c.type);
            this.state = "dragging";
            this.start = nb(c);
            this.aa = this.view.Qa;
            this.ba = this.view.Ma
        }, Wa: function (a, b, c) {
            "dragging" === this.state && (a = nb(c), b = this.ba + a.y - this.start.y, this.view.Qa = this.aa + a.x - this.start.x, this.view.Ma = b, ob(this.view), this.view.na())
        }, Ya: function () {
            this.state = "none"
        }, oe: function (a, b, c, d) {
            if (!this.view.ga.get("allowZoom"))return this.log("Zooming is disabled."), !1;
            this.log("onMouseWheel(%s, %s, %s)", a, b, c);
            c =
                0 < c ? 1 / 1.1 : 1.1;
            var e = jb(this.view);
            e.transform(new cb(c, c, a, b));
            lb(this.view, e);
            d.stopPropagation();
            d.preventDefault()
        }, vb: function (a) {
            "cancel" === a && F(this.view)
        }
    };
    function nb(a) {
        return "changedTouches" in a ? new y(a.changedTouches[0].pageX, a.changedTouches[0].pageY) : new y(a.pageX, a.pageY)
    };
    function pb() {
        this.aa = [];
        this.next = 0;
        this.yc = !1
    }

    pb.prototype = {
        log: t("UNDOSTACK"), ya: function (a, b, c) {
            "object" === typeof a && "[object Array]" === Object.prototype.toString.apply(a) || (a = [a]);
            this.next < this.aa.length && (this.aa.length = this.next);
            if (!b) {
                for (var d = [], e = 2; e < arguments.length; e++)d.push(arguments[e]);
                for (e = 0; e < a.length; e++)a[e].xb.apply(a[e], d)
            }
            for (d = this.top(); d;)if (d[d.length - 1].Me(a[0])) {
                if (a.shift(), 0 === a.length)break
            } else break;
            a.length && this.aa.push(a);
            this.yc = !0;
            this.next = this.aa.length
        }, eb: function (a) {
            this.log("Undo index %s of %s",
                this.next, this.aa.length);
            if (this.xc()) {
                for (var b = this.aa[--this.next], c = b.length - 1; 0 <= c; c--)b[c].eb.apply(b[c], arguments);
                this.yc = !0
            }
        }, dc: function (a) {
            this.log("Redo index %s of %s", this.next, this.aa.length);
            if (this.wc()) {
                for (var b = this.aa[this.next++], c = 0; c < b.length; c++)b[c].xb.apply(b[c], arguments);
                this.yc = !0
            }
        }, xc: function () {
            return 0 < this.next
        }, wc: function () {
            return this.next < this.aa.length
        }, top: function () {
            return this.aa.length ? this.aa[this.aa.length - 1] : 0
        }
    };
    function qb() {
    }

    qb.prototype = {
        xb: function () {
        }, eb: function () {
        }, Me: function () {
            return !1
        }
    };
    function rb(a) {
        this.aa = a
    }

    rb.prototype = {
        ue: function (a) {
            for (var b = 0; b < a.length; b++)this.Ta(a.charCodeAt(b))
        }, Ta: function (a) {
            this.aa.Ta(a)
        }, flush: function () {
            this.aa.flush()
        }, Nc: function () {
            return this.aa.Nc()
        }
    };
    function sb() {
        this.data = ""
    }

    sb.prototype = {
        log: t("BYTESTREAM"), ue: function (a) {
            for (var b = 0; b < a.length; b++)this.Ta(a.charCodeAt(b))
        }, Nc: function () {
            return this
        }, Ta: function (a) {
            if (255 < a || 0 > a)throw"Bad data written to byte buffer";
            this.data += String.fromCharCode(a)
        }, flush: function () {
        }, toString: function () {
            return this.data
        }, Nb: function () {
            for (var a = [], b = 0; b < this.data.length; b++)a.push(this.data.charCodeAt(b));
            return a
        }
    };
    var tb = {};

    function ub(a) {
        var b = new sb;
        a = a.split(",");
        a.reverse();
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            d.length && (b = new tb[d](b))
        }
        return b
    };
    function vb(a) {
        this.aa = a;
        this.ba = []
    }

    vb.prototype = {
        Ta: function (a) {
            4 === this.ba.length && wb(this);
            this.ba.push(a)
        }, flush: function () {
            0 < this.ba.length && wb(this);
            this.aa.ue("~>");
            this.aa.flush()
        }
    };
    function wb(a) {
        var b, c, d, e, f, g, h, k;
        b = a.ba[0];
        c = a.ba[1];
        d = a.ba[2];
        e = a.ba[3];
        f = (b << 24 | c << 16 | d << 8 | e) >>> 0;
        b = (f / 52200625 | 0) % 85 + 33;
        g = (f / 614125 | 0) % 85 + 33;
        h = (f / 7225 | 0) % 85 + 33;
        k = (f / 85 | 0) % 85 + 33;
        f = f % 85 + 33;
        (118 < b || 118 < g || 118 < h || 118 < k || 118 < f) && console.log(b, g, h, k, f);
        (33 > b || 33 > g || 33 > h || 33 > k || 33 > f) && console.log(b, g, h, k, f);
        a.aa.Ta(b);
        a.aa.Ta(g);
        isNaN(c) || (a.aa.Ta(h), isNaN(d) || (a.aa.Ta(k), isNaN(e) || a.aa.Ta(f)));
        a.ba.length = 0
    }

    vb.prototype = q.aa({}, rb.prototype, vb.prototype);
    tb.Ascii85Encoder = vb;
    function xb(a) {
        this.aa = a;
        this.ba = this.da = 0;
        this.ka = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8193]
    }

    xb.prototype = {
        log: t("BITWRITER"), Ta: function (a) {
            yb(this, a, 8)
        }, flush: function () {
            this.ba && (this.aa.Ta(this.da << 8 - this.ba), this.da = this.ba = 0);
            this.aa.flush()
        }
    };
    function yb(a, b, c) {
        a.da = a.da << c | b & a.ka[c];
        for (a.ba += c; 8 <= a.ba;)a.aa.Ta(a.da >>> a.ba - 8 & 255), a.ba -= 8, a.da &= a.ka[a.ba]
    }

    tb.BitWriter = xb;
    xb.prototype = q.aa({}, rb.prototype, xb.prototype);
    function zb(a) {
        this.aa = new xb(a);
        this.ka = 258;
        this.ba = 0;
        this.qa = !0;
        this.ma = [];
        this.Aa = [];
        this.ta = [];
        this.da = 9;
        Ab(this)
    }

    zb.prototype = {
        log: t("LZWEncoder"), Ta: function (a) {
            var b;
            if (this.qa) this.ba = a, this.qa = !1; else {
                a:{
                    b = this.ba;
                    var c, d;
                    c = a << 4 ^ b;
                    for (d = 0 === c ? 1 : 18041 - c; ;) {
                        if (void 0 === this.ma[c] || this.Aa[c] === b && this.ta[c] === a) {
                            b = c;
                            break a
                        }
                        c -= d;
                        0 > c && (c += 18041)
                    }
                }
                void 0 !== this.ma[b] ? this.ba = this.ma[b] : (yb(this.aa, this.ba, this.da), this.ma[b] = this.ka, this.Aa[b] = this.ba, this.ba = this.ta[b] = a, 4095 > this.ka ? (this.ka += 1, this.da = Math.ceil(Math.log(this.ka) / Math.log(2))) : Ab(this))
            }
        }, flush: function () {
            this.qa || (yb(this.aa, this.ba, this.da),
                yb(this.aa, 257, this.da))
        }
    };
    function Ab(a) {
        yb(a.aa, 256, a.da);
        a.ka = 258;
        a.da = 9;
        a.ma.length = 0;
        a.Aa.length = 0;
        a.ta.length = 0
    }

    tb.LZWEncoder = zb;
    zb.prototype = q.aa({}, rb.prototype, zb.prototype);
    function Bb(a) {
        this.aa = a;
        this.size = this.da = this.ba = 0;
        this.keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }

    Bb.prototype = {
        Ta: function (a) {
            this.ba = this.ba << 8 | a;
            this.size += 8;
            for (this.da += 1; 6 <= this.size;)this.aa.Ta(this.keys.charCodeAt(this.ba >> this.size - 6 & 63)), this.size -= 6
        }, flush: function () {
            var a = (3 - this.da % 3) % 3;
            this.size && (this.aa.Ta(this.keys.charCodeAt(this.ba >> this.size - 6 & 63)), this.ba = this.size = 0);
            for (; a--;)this.aa.Ta(61);
            this.aa.flush()
        }
    };
    Bb.prototype = q.aa({}, rb.prototype, Bb.prototype);
    tb.Base64Encoder = Bb;
    var I = [], Cb = null, Db = t("ImageLoader");

    function Eb() {
        var a = [];
        Db("Timeout running... %s images remaining", I.length);
        for (var b = 0; b < I.length; b++)I[b].complete ? I[b].zc(I[b], I[b].wd) : 5E3 > I[b].Sd ? (I[b].Sd += 250, a.push(I[b])) : I[b].zc(I[b], I[b].wd);
        I = a;
        I.length ? setTimeout(Eb, 250) : (Db("Timeout Stopped"), Cb = !1)
    }

    function Fb(a, b) {
        function c() {
            Db("LoadFn called. complete=%s", d.complete);
            if (d.complete)for (var a = 0; a < I.length; a++) {
                if (I[a] === d) {
                    I.splice(a, 1);
                    b(d, d.wd);
                    break
                }
            } else Cb || (Cb = !0, setTimeout(Eb, 250), d.Sd = 250)
        }

        var d = document.createElement("img");
        I.push(d);
        d.zc = b;
        d.wd = a;
        d.Sd = 0;
        var e = 0 <= a.indexOf("://"), f = "://" + window.location.host;
        0 !== a.indexOf("data:") && e && -1 === a.indexOf(f) && (Db("Using cross origin request for img"), d.crossOrigin = "");
        d.addEventListener ? (d.addEventListener("load", function () {
            c()
        }, !1), d.addEventListener("error",
            function () {
                Db("Error loading %s", a);
                b(null, d.wd)
            }, !1)) : (d.attachEvent("onload", function () {
            c()
        }), d.attachEvent("onerror", function () {
            Db("Error loading %s", a);
            b(null, d.wd)
        }));
        d.src = a
    };
    function J() {
        this.$a = !1;
        this.ba = {}
    }

    J.prototype = {
        log: t("EventEmitter"), emit: function (a, b) {
            var c, d = this;
            this.ba || (this.ba = {});
            c = Array.prototype.slice.call(arguments, 1);
            setTimeout(function () {
                var b, f, g, h, k = !1;
                if (a in d.ba)for (h = d.ba[a], f = 0, g = h.length; f < g; f++)b = h[f], d.$a || k || (d.log("Emit %s", a), k = !0), b.apply(null, c)
            }, 0);
            return this
        }, Mc: function (a, b) {
            var c;
            this.ba || (this.ba = {});
            c = Array.prototype.slice.call(arguments, 1);
            var d, e, f, g, h = !1;
            if (a in this.ba)for (g = this.ba[a], e = 0, f = g.length; e < f; e++)d = g[e], this.$a || h || (this.log("Emit %s", a), h = !0),
                d.apply(null, c);
            return this
        }, on: function (a, b) {
            this.ba || (this.ba = {});
            this.bind(a, b);
            return this
        }, bind: function (a, b) {
            a in this.ba ? this.ba[a].push(b) : this.ba[a] = [b];
            return b
        }, Wc: function (a, b) {
            var c, d, e, f;
            if (a in this.ba)for (c = this.ba[a], d = e = 0, f = c.length - 1; e <= f; d = e += 1)if (c[d] === b) {
                c.splice(d, 1);
                break
            }
        }
    };
    function Gb(a, b) {
        function c() {
            a.Wc("done", c);
            b.apply(null, arguments)
        }

        a.bind("done", c)
    };
    function Hb(a) {
        J.call(this);
        this.ja = a;
        this.qa = !1;
        a.ha("display", "none");
        this.right = !0;
        a:{
            a = (document.body || document.documentElement).style;
            for (var b = "transition", c = ["Moz", "Webkit", "Khtml", "O", "ms"],
                     b = b.charAt(0).toUpperCase() + b.substr(1),
                     d = 0; d < c.length; d++)if ("string" === typeof a[c[d] + b]) {
                Ib = c[d];
                a = !0;
                break a
            }
            a = !1
        }
        this.ka = a;
        this.ta = Ib;
        this.aa = null;
        this.ka && (a = this.ja.outerWidth(), this.ha("TransitionProperty", "transform"), this.ha("Transform", "translate(" + a + "px,0)"));
        this.ma = q(".body")
    }

    var Ib;
    Hb.prototype = {
        log: t("SlidingPanel", !1), show: function (a, b) {
            var c = this;
            this.aa && (clearTimeout(this.aa), this.aa = null);
            !1 !== b && (b = !0);
            this.qa = !0;
            this.ja.show();
            var d = this.ja.outerWidth();
            this.ja.Za();
            "right" === a ? (this.left = !1, this.ja.ha("left", "" + (q(window).width() - d) + "px")) : this.left = !0;
            b && (c.da = new aa, c.da.aa = c.ja.ha("z-index"), c.da.insertBefore = c.ja, c.da.show(function () {
                c.Za()
            }));
            c.ka ? (this.log("Performing transition"), c.ja.ha("display", "block"), c.left ? c.ha("Transform", "translate(-" + d + "px,0)") : c.ha("Transform",
                "translate(" + d + "px,0)"), c.ha("TransitionDuration", "200ms"), c.ha("TransitionDuration", "200ms", c.ma), window.setTimeout(function () {
                c.ha("Transform", "translate(0,0)");
                c.ha("Transform", "translate(" + (c.left ? d : -d) + "px,0)", c.ma);
                window.setTimeout(function () {
                    Jb(c)
                }, 200)
            }, 1)) : (this.log("No transitions allowed"), c.ja.ha("display", "block"), Jb(c))
        }, ha: function (a, b, c) {
            c = c || this.ja;
            a = "" !== this.ta ? this.ta + a : a.charAt(0).toLowerCase() + a.substr(1);
            c[0].style[a] = b;
            this.log("%s=%s", a, b)
        }, rb: function () {
            return this.qa
        },
        Za: function () {
            var a = this;
            if (!this.aa) {
                this.qa = !1;
                a.da && a.da.Za();
                var b = this.ja.outerWidth();
                a.ka ? this.left ? a.ha("Transform", "translate(-" + b + "px,0)") : a.ha("Transform", "translate(" + b + "px,0)") : a.ja.ha("display", "none");
                a.ha("Transform", "translate(0,0)", this.ma);
                a.ka ? this.aa = window.setTimeout(function () {
                    a.ja.ha("display", "none");
                    a.emit("hide")
                }, 200) : a.emit("hide")
            }
        }
    };
    function Jb(a) {
        console.log("Set focus on ", a.ja.find(".focus"));
        a.ja.find(".focus").focus();
        a.emit("show")
    }

    Hb.prototype = q.aa({}, J.prototype, Hb.prototype);
    function Kb() {
        var a = this;
        J.call(this);
        window.addEventListener("message", function (b) {
            Lb(a, b)
        }, !1);
        window.parent.postMessage('{"event": "ready"}', "*")
    }

    Kb.prototype = {log: t("Api")};
    function Lb(a, b) {
        function c(a) {
            "ticket" in d && (a = {ticket: d.ticket, args: a}, window.parent.postMessage(window.JSON.stringify(a), "*"))
        }

        var d;
        try {
            d = window.JSON.parse(b.data)
        } catch (g) {
            a.log("Error parsing %s from %s", b.data, b.origin);
            return
        }
        a.log("Received %s", b.data);
        if (d["function"] in a.ba)for (var e = a.ba[d["function"]], f = 0; f < e.length; f++)(0, e[f])(d.args, c)
    }

    Kb.prototype = q.aa({}, J.prototype, Kb.prototype);
    function Mb() {
        J.apply(this, arguments);
        this.da = [];
        this.aa = !1;
        this.canvas = null
    }

    Mb.prototype = {
        log: t("FORMAT", !0), add: function (a, b, c, d, e) {
            var f, g, h, k;
            k = this.da;
            g = 0;
            for (h = k.length; g < h; g++)f = k[g], f.type === b && f.fd === a && (f.vd = !0);
            this.log("Request URL %s", c);
            this.da.push({fd: a, type: b, url: c, Qg: d, ge: e, vd: !1});
            Nb(this)
        }
    };
    function Ob(a, b) {
        a.aa = !0;
        a.log("Processing request for item %s url=%s", b.fd, b.url);
        if (0 === b.type.indexOf("image")) {
            var c = 0 <= b.url.indexOf("svg+xml");
            Fb(b.url, function (d, e) {
                if (null !== d) {
                    a.log("Image request completed for item %s url %s", b.fd, e);
                    if (c) {
                        a.log("Doing double-copy to eliminate SVG");
                        var f = document.createElement("canvas");
                        f.width = d.naturalWidth;
                        f.height = d.naturalHeight;
                        f.getContext("2d").drawImage(d, 0, 0);
                        Fb(f.toDataURL(), function (c, d) {
                            null !== c ? (a.log("SVG elimination succeeded; url=%s", d.substr(0,
                                20)), b.ge(c, d)) : a.log("Image conversion from SVG failed.");
                            a.aa = !1;
                            b.vd = !0;
                            Nb(a)
                        });
                        return
                    }
                    b.ge(d, e)
                } else a.log("Image request failed for url %s", e);
                a.aa = !1;
                b.vd = !0;
                Nb(a)
            })
        } else q.ba({
            url: b.url, data: b.Qg, dataType: "json", success: function (c) {
                b.vd || (a.log("Request completed for item %s", b.fd.id), b.ge(c), b.node && a.emit("reformat", b.fd), a.aa = !1, a.da.shift(), Nb(a))
            }, error: function (b, c, f) {
                a.log("Error: %s %s", c, f);
                a.aa = !1;
                a.da.shift();
                Nb(a)
            }
        })
    }

    function Nb(a) {
        for (var b = 0; !a.aa && b < a.da.length;)a.da[b].vd ? a.da.shift() : (Ob(a, a.da[0]), b += 1);
        a.aa || a.emit("done")
    }

    Mb.prototype = q.aa({}, J.prototype, Mb.prototype);
    function Qb(a, b) {
        this.ia = b;
        this.kh = !0
    }

    Qb.prototype = {
        log: t("MoveSegment"), na: function (a) {
            a.moveTo(this.ia.x, this.ia.y)
        }, Fc: function () {
            return null
        }, ac: function () {
            return {x: 1, y: 0}
        }
    };
    function Rb(a, b, c, d, e) {
        this.ia = b;
        this.xa = a;
        this.Lg = !0;
        this.aa = e;
        this.ma = d;
        c.next();
        this.da = c.next();
        this.ka = c.next();
        this.moveTo = this.Dc = null;
        this.format()
    }

    Rb.prototype = {
        log: t("LineSegment"), format: function () {
            var a = K(this.xa.ia.x, this.xa.ia.y, this.ia.x, this.ia.y);
            this.ba = this.length = a;
            var b = this.xa.ia.clone();
            if (this.xa.Lg && this.aa) {
                this.aa = Math.min(this.aa, a / 2, this.xa.length / 2);
                a = L(this.xa.ia.x, this.xa.ia.y, this.ia.x, this.ia.y);
                b.x += a.x * this.aa;
                b.y += a.y * this.aa;
                var a = this.xa, c = this.aa, d = L(a.va.x, a.va.y, a.ia.x, a.ia.y), e = a.ia.clone();
                e.x -= d.x * c;
                e.y -= d.y * c;
                a.Dc = e;
                a.ba -= c;
                c = a.ba / 10 * a.ma;
                10 < c && (c = 10);
                var d = a.va.x, f = a.va.y, g = e.x, h = e.y, d = d + c, f = f + c;
                a.Ia = new y(d +
                    a.da * (g + c - d), f + a.da * (h + c - f));
                a.log("RECALC ctrl1=%s", a.Ia);
                d = a.va.x - c;
                g = e.x - c;
                f = a.va.y - c;
                h = e.y - c;
                a.Oa = new y(d + a.ka * (g - d), f + a.ka * (h - f));
                this.ba -= this.aa
            }
            this.va = b;
            null === this.Dc && (this.Dc = this.ia);
            a = this.ba / 10 * this.ma;
            10 < a && (a = 10);
            e = b.x;
            c = b.y;
            d = this.ia.x;
            f = this.ia.y;
            e += a;
            c += a;
            this.Ia = new y(e + this.da * (d + a - e), c + this.da * (f + a - c));
            e = b.x - a;
            d = this.ia.x - a;
            c = b.y - a;
            f = this.ia.y - a;
            this.Oa = new y(e + this.ka * (d - e), c + this.ka * (f - c))
        }, td: function (a) {
            this.xa = a;
            this.format();
            this.xa.Dc && (this.moveTo = this.xa.Dc)
        }, na: function (a) {
            this.aa &&
            (this.moveTo && a.moveTo(this.moveTo.x, this.moveTo.y), a.quadraticCurveTo(this.xa.ia.x, this.xa.ia.y, this.va.x, this.va.y));
            a.bezierCurveTo(this.Ia.x, this.Ia.y, this.Oa.x, this.Oa.y, this.Dc.x, this.Dc.y)
        }, Fc: function () {
            return this.xa ? L(this.xa.ia.x, this.xa.ia.y, this.Ia.x, this.Ia.y) : null
        }, ac: function () {
            return L(this.Oa.x, this.Oa.y, this.ia.x, this.ia.y)
        }
    };
    function Sb(a, b, c) {
        this.ia = b;
        this.xa = a;
        this.aa = c;
        var d = K(a.ia.x, a.ia.y, b.x, b.y);
        d || (d = 1);
        var e = (b.x - a.ia.x) / d, f = (b.y - a.ia.y) / d;
        this.Oa = new y(b.x - d * c * e, b.y - d * c * f);
        if (b = a.Oa) {
            var g = L(a.xa.ia.x, a.xa.ia.y, a.ia.x, a.ia.y), h = K(a.xa.ia.x, a.xa.ia.y, a.ia.x, a.ia.y),
                e = .5 * (e + g.x), f = .5 * (f + g.y);
            b.x = a.ia.x - h * c * e;
            b.y = a.ia.y - h * c * f
        }
        this.Ia = new y(a.ia.x + d * c * e, a.ia.y + d * c * f);
        this.length = d
    }

    Sb.prototype = {
        td: function (a) {
            this.xa = a;
            var b = a.Oa, c = (this.ia.x - a.ia.x) / this.length, d = (this.ia.y - a.ia.y) / this.length, e = this.aa;
            if (b) {
                var f = L(a.xa.ia.x, a.xa.ia.y, a.ia.x, a.ia.y), g = K(a.xa.ia.x, a.xa.ia.y, a.ia.x, a.ia.y),
                    c = .5 * (c + f.x), d = .5 * (d + f.y);
                b.x = a.ia.x - g * e * c;
                b.y = a.ia.y - g * e * d
            }
            this.Ia = new y(a.ia.x + this.length * e * c, a.ia.y + this.length * e * d)
        }, na: function (a) {
            a.bezierCurveTo(this.Ia.x, this.Ia.y, this.Oa.x, this.Oa.y, this.ia.x, this.ia.y)
        }, Fc: function () {
            return this.xa ? L(this.xa.ia.x, this.xa.ia.y, this.Ia.x, this.Ia.y) :
                null
        }, ac: function () {
            return 0 < this.aa ? L(this.Oa.x, this.Oa.y, this.ia.x, this.ia.y) : L(this.xa.ia.x, this.xa.ia.y, this.ia.x, this.ia.y)
        }
    };
    function Tb(a, b, c) {
        this.xa = a;
        this.control = b;
        this.ia = c
    }

    Tb.prototype = {
        na: function (a) {
            a.quadraticCurveTo(this.control.x, this.control.y, this.ia.x, this.ia.y)
        }, Fc: function () {
            return this.xa ? L(this.xa.ia.x, this.xa.ia.y, this.control.x, this.control.y) : null
        }, ac: function () {
            return L(this.control.x, this.control.y, this.ia.x, this.ia.y)
        }
    };
    function Ub(a, b, c, d) {
        this.control = b;
        this.ia = c;
        this.Bb = d
    }

    Ub.prototype = {
        na: function (a) {
            a.arcTo(this.control.x, this.control.y, this.ia.x, this.ia.y, this.Bb)
        }
    };
    function Vb(a, b, c, d) {
        this.Ia = b;
        this.Oa = c;
        this.ia = d;
        this.xa = a
    }

    Vb.prototype = {
        na: function (a) {
            a.bezierCurveTo(this.Ia.x, this.Ia.y, this.Oa.x, this.Oa.y, this.ia.x, this.ia.y)
        }, Fc: function () {
            return this.xa ? L(this.xa.ia.x, this.xa.ia.y, this.Ia.x, this.Ia.y) : null
        }, ac: function () {
            return L(this.Oa.x, this.Oa.y, this.ia.x, this.ia.y)
        }
    };
    function Wb(a, b, c, d) {
        this.Ia = b;
        this.Oa = c;
        this.ia = d;
        this.xa = a
    }

    Wb.prototype = {
        na: function (a) {
            if (this.xa) {
                var b = [];
                this.xa.Oa && b.push(this.xa.Oa);
                this.Ia && b.push(this.Ia);
                2 === b.length ? a.bezierCurveTo(b[0].x, b[0].y, b[1].x, b[1].y, this.ia.x, this.ia.y) : 1 === b.length && a.quadraticCurveTo(b[0].x, b[0].y, this.ia.x, this.ia.y)
            }
        }, td: function (a) {
            this.xa = a
        }, Fc: function () {
            return this.xa && this.xa.Oa ? L(this.xa.ia.x, this.xa.ia.y, this.Ia.x, this.Ia.y) : null
        }, ac: function () {
            if (!this.Ia)return null
        }
    };
    function Xb(a, b, c, d, e) {
        this.xa = a;
        this.aa = b;
        e = 2 * e;
        var f = 2 * d.next() - 1;
        d.next();
        d = this.xa.ac();
        if (!this.xa.kh && d) {
            var g = K(a.ia.x, a.ia.y, b.x, b.y);
            this.Ia = new y(a.ia.x + .5522847498 * d.x * g, a.ia.y + .5522847498 * d.y * g)
        } else this.Ia = new y(a.ia.x + .5522847498 * (b.x - a.ia.x), a.ia.y + .5522847498 * (b.y - a.ia.y));
        this.Oa = new y(c.x - .5522847498 * (c.x - b.x) * (1 - f * e), c.y - .5522847498 * (c.y - b.y) * (1 - f * e));
        this.ia = c
    }

    Xb.prototype = {
        log: t("SEGMENT"), td: function (a) {
            this.xa = a;
            var b = this.xa.ac();
            if (b) {
                var c = K(a.ia.x, a.ia.y, this.aa.x, this.aa.y);
                this.Ia = new y(a.ia.x + .5522847498 * b.x * c, a.ia.y + .5522847498 * b.y * c)
            } else this.Ia = new y(a.ia.x + .5522847498 * (this.aa.x - this.xa.ia.x), a.ia.y + .5522847498 * (this.aa.y - this.xa.ia.y))
        }, na: function (a) {
            a.bezierCurveTo(this.Ia.x, this.Ia.y, this.Oa.x, this.Oa.y, this.ia.x, this.ia.y)
        }, Fc: function () {
            return this.xa ? L(this.xa.ia.x, this.xa.ia.y, this.Ia.x, this.Ia.y) : null
        }, ac: function () {
            return L(this.Oa.x,
                this.Oa.y, this.ia.x, this.ia.y)
        }
    };
    function Yb(a) {
        this.ba = a;
        this.Bb = 30;
        this.aa = []
    }

    Yb.prototype = {
        log: t("AngleAddon"), format: function () {
            var a = this.ba.ma, b = 0, c = [], d = [];
            this.aa.length = 0;
            for (var e = 0 > Zb(a); b < a.fa.length;) {
                switch (a.fa[b]) {
                    case $b:
                        c = [new y(a.fa[b + 1], a.fa[b + 2])];
                        d = c.concat();
                        break;
                    case ac:
                        3 === c.length && c.shift();
                        c.push(new y(a.fa[b + 1], a.fa[b + 2]));
                        d.push(c[c.length - 1]);
                        3 === c.length && bc(this, c[0], c[1], c[2], e);
                        break;
                    case cc:
                        3 <= d.length && bc(this, d[d.length - 2], d[0], d[1], e)
                }
                b += dc[a.fa[b]]
            }
        }, na: function (a) {
            a.beginPath();
            var b, c;
            for (c = 0; c < this.aa.length; c++)b = this.aa[c], a.moveTo(b.x +
                this.Bb * Math.cos(b.Uc), b.y + this.Bb * Math.sin(b.Uc)), a.arc(b.x, b.y, this.Bb, b.Uc, b.Ed, !1);
            a.lineWidth = 3;
            a.strokeStyle = "red";
            a.stroke();
            a.fillStyle = "red";
            a.font = "20px Arial";
            for (c = 0; c < this.aa.length; c++) {
                b = this.aa[c];
                var d = (b.Uc + b.Ed) / 2 + Math.PI;
                0 < b.Uc && 0 > b.Ed && (d -= Math.PI);
                var e = b.Ed - b.Uc;
                0 > e && (e += 2 * Math.PI);
                a.fillText("" + Math.round(e / Math.PI * 180) + "\u00b0", b.x + this.Bb * Math.cos(d), b.y + this.Bb * Math.sin(d))
            }
        }
    };
    function bc(a, b, c, d, e) {
        var f;
        b = L(c.x, c.y, b.x, b.y);
        f = L(c.x, c.y, d.x, d.y);
        d = Math.atan2(b.y, b.x);
        b = Math.atan2(f.y, f.x);
        e && (e = d, d = b, b = e);
        a.aa.push({x: c.x, y: c.y, Uc: b, Ed: d})
    };
    function ec(a) {
        this.ba = a;
        this.Bb = a.pa("cloudRadius");
        this.aa = [];
        this.qe = !0
    }

    ec.prototype = {
        log: t("cloudAddon"), format: function () {
            var a = this.ba.ma.ec();
            this.log("Format cloud; %s points", a.length);
            var b = this.Bb, c = [], d = 5 / 6 * b * 2, e, f, g = a[a.length - 1];
            for (f = 0; f < a.length; f++) {
                e = a[f];
                var h = e.x - g.x, k = e.y - g.y, l = Math.sqrt(h * h + k * k), h = h / l, k = k / l, m = d,
                    m = l / d + .5 | 0;
                1 > m && (m = 1);
                for (var m = l / m, p = 0; p + .1 * m < l; p += m)c.push({x: g.x + p * h, y: g.y + p * k});
                g = e
            }
            g = c[c.length - 1];
            for (f = 0; f < c.length; f++)e = c[f], d = e.x - g.x, h = e.y - g.y, a = .5 * Math.sqrt(d * d + h * h) / b, -1 > a && (a = -1), 1 < a && (a = 1), d = Math.atan2(h, d), a = Math.acos(a), a = [d -
            a, Math.PI + d + a], g.end = a[0], e.cg = a[1], g = e;
            this.aa = c
        }, na: function (a) {
            this.log("Drawing cloud with %s circles", this.aa.length);
            var b = 15 * Math.PI / 180, c = this.Bb;
            a.beginPath();
            for (var d = 0; d < this.aa.length; d++) {
                var e = this.aa[d];
                a.arc(e.x, e.y, c, e.cg, e.end + b)
            }
            a.stroke()
        }
    };
    function fc(a) {
        this.aa = a;
        this.Bb = a.pa("doubleLine");
        this.qe = !0
    }

    fc.prototype = {
        log: t("DoubleLineAddon"), format: function () {
            this.log("Formatting doubleline; thickness=%s", this.aa.pa("doubleLine"));
            var a = gc(hc(this.aa, !1), ic), b;
            b = this.aa;
            b = b.pa("arrowXOffset") || b.pa("arrowSize");
            if (0 < b) {
                var c = jc(a);
                c > b && (a = kc(a, c - b))
            }
            a = a.ec();
            b = this.aa.pa("doubleLine");
            this.path = new lc;
            this.da = new lc;
            c = this.aa.pa("doubleLineDashSide");
            this.ba = !1;
            "outer" === c ? (oc(this.path, a, b, "middle", !0, !1), oc(this.da, a, b, "middle", !1, !0), this.ba = !0) : "inner" === c ? (oc(this.path, a, b, "middle", !1, !0), oc(this.da,
                a, b, "middle", !0, !1), this.ba = !0) : oc(this.path, a, b, "middle", !0, !0)
        }, na: function (a) {
            a.beginPath();
            this.aa.ka.length && this.ba ? (pc(this.da, a, this.aa.ka), this.path.na(a)) : this.aa.ka.length ? pc(this.path, a, this.aa.ka) : this.path.na(a)
        }
    };
    function qc(a) {
        this.aa = a;
        this.Bb = a.pa("waveRadius");
        this.qe = !0
    }

    qc.prototype = {
        log: t("WaveAddon"), format: function () {
            var a = gc(hc(this.aa, !1), ic).ec();
            this.log("Format cloud; %s points", a.length);
            this.sa = rc(a, this.Bb)
        }, na: function (a) {
            a.beginPath();
            a.moveTo(this.sa[0].x, this.sa[0].y);
            for (var b = 1; b < this.sa.length - 1; b += 2)a.quadraticCurveTo(this.sa[b].x, this.sa[b].y, this.sa[b + 1].x, this.sa[b + 1].y)
        }
    };
    function rc(a, b) {
        function c(a) {
            this.sa = a;
            this.aa = 0
        }

        c.prototype = {
            next: function (a) {
                if (0 === this.sa.length)return null;
                if (0 === this.aa)return this.ba = this.sa[0].clone(), this.aa += 1, this.ba.clone();
                for (; this.aa < this.sa.length;) {
                    var b = this.ba.Ra(this.sa[this.aa]);
                    if (0 === b) this.aa += 1; else if (b <= a) a -= b, this.aa += 1; else return this.ba.x += (this.sa[this.aa].x - this.ba.x) * a / b, this.ba.y += (this.sa[this.aa].y - this.ba.y) * a / b, this.ba.clone()
                }
                return null
            }
        };
        var d = new c(a), e = null, f = 1, g = [];
        if (2 > a.length)return g;
        e = function (a) {
            for (var b =
                0, c = 1; c < a.length; c++)b += K(a[c - 1].x, a[c - 1].y, a[c].x, a[c].y);
            return b
        }(a);
        b = e / Math.round(e / (2 * b) + .5) / 2;
        for (var h = [], k; ;) {
            k = d.next(2 * b);
            if (!k)break;
            h.push(k)
        }
        h.push(a[a.length - 1]);
        e = h[0];
        g.push(e);
        for (var l, d = 1; d < h.length; d++) {
            k = h[d];
            l = L(e.x, e.y, k.x, k.y);
            var m = b, p = new y(l.y * f, -1 * l.x * f);
            g.push(new y(e.x + (l.x + p.x) * m, e.y + (l.y + p.y) * m));
            g.push(k);
            f *= -1;
            e = k
        }
        for (d = 2; d < g.length - 1; d += 2)f = g[d - 1], e = g[d + 1], g[d].x = f.x + (e.x - f.x) / 2, g[d].y = f.y + (e.y - f.y) / 2;
        return g
    };
    function sc(a, b) {
        for (var c in a)a.hasOwnProperty(c) && !b.hasOwnProperty(c) && (b[c] = a[c])
    };
    function tc(a, b) {
        J.call(this);
        this.fc = b;
        this.ja = document.createElement("div");
        this.ja.style.width = b + "px";
        this.ja.style.height = "320px";
        this.ja.style.border = "none";
        this.ja.style.backgroundColor = "#ffffff";
        this.ja.style.MozUserSelect = "none";
        this.ja.style.WebkitUserSelect = "none";
        this.ja.style.aa = "none";
        this.ja.style.ka = "none";
        this.da = {};
        this.ka = 1;
        this.buttons = [];
        this.aa = 0
    }

    tc.prototype = {
        width: function () {
            return parseInt(this.ja.style.width, 10)
        }, focus: function (a) {
            0 < this.buttons.length && (0 < arguments.length && (uc(this, !1), this.aa = a || 0), uc(this, !0))
        }, blur: function () {
            0 < this.buttons.length && uc(this, !1)
        }, vb: function (a, b) {
            if (0 !== this.buttons.length) {
                var c = "next" === a || "previous" === a;
                c && uc(this, !1);
                switch (a) {
                    case "next":
                        this.aa = Math.min(this.aa + 1, this.buttons.length - 1);
                        break;
                    case "previous":
                        this.aa = Math.max(this.aa - 1, 0);
                        break;
                    case "enter":
                        this.buttons[this.aa].gg(b)
                }
                c && (uc(this,
                    !0), b.stopPropagation(), b.preventDefault())
            }
        }, moveTo: function (a, b) {
            q(this.ja).ha("left", "" + a + "px");
            q(this.ja).ha("top", "" + b + "px")
        }, show: function (a) {
            this.ja.style.display = a || 0 === arguments.length ? "block" : "none"
        }, log: t("TOOLBAR"), Gb: function (a, b, c) {
            function d() {
                var a = e.style.background;
                e.style.background = "#e7d69f";
                f.style.background = "#e7d69f";
                var b = e.style.background;
                setTimeout(function () {
                    e.style.background === b && (e.style.background = a, f.style.background = a)
                }, 200)
            }

            var e = document.createElement("div"), f =
                document.createElement("img"), g = this;
            e.style.display = "inline";
            e.style.cssFloat = "left";
            e.style.overflow = "hidden";
            e.style.width = this.fc + "px";
            e.style.height = this.fc + "px";
            e.style.margin = "1px";
            f.src = a;
            f.ja = e;
            f.style.cursor = "hand";
            f.setAttribute("title", b);
            f.style.maxWidth = this.fc + "px";
            f.style.maxHeight = this.fc + "px";
            f.draggable = !1;
            e.appendChild(f);
            q(f).bind("load", function () {
                g.log("Toolbar image loaded; %sx%s", f.width, f.height);
                var a = (this.fc - f.height) / 2;
                f.style.marginLeft = (this.fc - f.width) / 2 + "px";
                f.style.marginTop =
                    a + "px"
            });
            this.ja.appendChild(e);
            var h = this.buttons.length;
            c && (q(e).bind("touchstart", function (a) {
                a.preventDefault();
                g.log("Got touchstart");
                d();
                c(a);
                g.emit("click", a)
            }), q(e).click(function (a) {
                g.log("Got a click");
                d();
                c(a);
                g.focus(h);
                g.emit("click", a)
            }));
            this.ka += this.fc + 1;
            this.buttons.push({element: e, gg: c});
            return f
        }
    };
    function vc(a, b) {
        for (var c in a.da)a.da.hasOwnProperty(c) && (a.da[c].ja.style.background = "#ffffff", a.da[c].style.background = "#ffffff");
        b in a.da ? (c = a.da[b], a.log("Highlight %s", b), c.ja.style.background = "#9fb3e7", c.style.background = "#9fb3e7") : a.log("Failed to highlight %s", b)
    }

    function wc(a, b, c, d, e) {
        a.da[b] = a.Gb(d, c, e)
    }

    function uc(a, b) {
        a.buttons[a.aa].element.style.outline = b ? "1px dotted gray" : "none"
    }

    sc(J.prototype, tc.prototype);
    function xc() {
        J.call(this);
        yc(this)
    }

    xc.prototype = {
        log: t("KEYMAP"), map: function (a, b) {
            var c = a.toLowerCase().split(","), d;
            if ("string" === typeof b) {
                var e = b.split(",");
                for (d = 0; d < c.length; d++)for (var f = 0; f < e.length; f++)zc(this, c[d], e[f])
            } else for (d = 0; d < c.length; d++)zc(this, c[d], b)
        }, translate: function (a) {
            var b = [], c = "";
            a.keyCode && (c += a.keyCode);
            a.shiftKey && (c += "-shift");
            a.ctrlKey && (c += "-control");
            a.altKey && (c += "-alt");
            a.metaKey && (c += "-meta");
            a = c;
            a in this.keys && (b = this.keys[a]);
            this.log("%s", a);
            return b
        }, mb: function (a, b) {
            for (var c = this.translate(a),
                     d = 0; d < c.length; d++)b(c[d])
        }, detach: function (a) {
            q(a).Wc("keydown", this.Id)
        }
    };
    function Ac(a, b) {
        q(b).bind("keydown", a.Id)
    }

    function zc(a, b, c) {
        if (0 !== b.length) {
            var d = b.match(a.aa) || [], e = !1, f = !1, g = !1, h = !1, k = [], l;
            for (l = 0; l < d.length; l++)switch (d[l]) {
                case "alt":
                    g = !0;
                    break;
                case "control":
                case "ctrl":
                    f = !0;
                    break;
                case "shift":
                    e = !0;
                    break;
                case "home":
                    k.push(36);
                    break;
                case "end":
                    k.push(35);
                    break;
                case "pageup":
                    k.push(33);
                    break;
                case "pagedown":
                    k.push(34);
                    break;
                case "delete":
                case "del":
                    k.push(46);
                    break;
                case "backspace":
                    k.push(8);
                    break;
                case "up":
                    k.push(38);
                    break;
                case "right":
                    k.push(39);
                    break;
                case "down":
                    k.push(40);
                    break;
                case "left":
                    k.push(37);
                    break;
                case "escape":
                case "esc":
                    k.push(27);
                    break;
                case "enter":
                    k.push(13);
                    break;
                case "ins":
                case "insert":
                    k.push(45);
                    break;
                case "f4":
                    k.push(115);
                    break;
                case "meta":
                case "command":
                case "cmd":
                case "\u2318":
                    h = !0;
                    break;
                default:
                    alert("key entry not found: " + d[l])
            }
            d = function (b) {
                e && -1 === b.indexOf("-shift") && (b += "-shift");
                f && -1 === b.indexOf("-control") && (b += "-control");
                g && -1 === b.indexOf("-alt") && (b += "-alt");
                h && -1 === b.indexOf("-meta") && (b += "-meta");
                "string" === typeof c ? a.log("Keyboard mapping: %s->%s", b, c) : a.log("Keyboard mapping: %s->%s",
                    b, "function()");
                if (b in a.keys) {
                    for (var d = 0, k = a.keys[b], d = 0; d < k.length && k[d] !== c; d++);
                    d === k.length && a.keys[b].push(c)
                } else a.keys[b] = [c]
            };
            if (0 === k.length)switch (b = b.toUpperCase().charAt(b.length - 1), b) {
                case "=":
                    d("107-shift");
                    d("187");
                    d("61");
                    break;
                case "+":
                    d("107");
                    d("61-shift");
                    break;
                case "-":
                    d("109");
                    d("189");
                    d("173");
                    break;
                default:
                    k.push(b.charCodeAt(0))
            }
            for (l = 0; l < k.length; l++)d("" + k[l])
        }
    }

    function yc(a) {
        a.keys = {};
        a.$a = !0;
        a.aa = new RegExp("alt backspace cmd command control ctrl del delete down end enter esc escape f4 home ins insert left meta pagedown pageup right shift up \u2318".split(" ").sort(function (a, c) {
            return c.length - a.length
        }).join("|"), "g");
        a.Id = function (b) {
            for (var c = a.translate(b),
                     d = 0; d < c.length; d++)if ("string" === typeof c[d]) a.log("action: %s", c[d]), a.Mc("*", c[d], b); else c[d](b)
        }
    }

    sc(J.prototype, xc.prototype);
    function Bc(a) {
        var b = document.createElement("input");
        q(b).ob("type", "range");
        if ("range" === b.type)return b.dh = function (a, c) {
            b.min = a;
            b.max = c
        }, b.Hg = function () {
            return b.value
        }, b.Ve = function (a) {
            b.value = a
        }, b;
        var c = q("<div>");
        c.ha("display", "inline-block");
        c.ha("vertical-align", "top");
        c.ha("height", "1em");
        c.ha("width", "10em");
        c.ha("padding", "0.25em");
        c.ha("position", "relative");
        var d = q("<div>");
        d.ha("top", "50%");
        d.ha("height", "0");
        d.ha("border-top", "1px solid black");
        d.ha("border-bottom", "1px solid #888888");
        d.ha("position", "absolute");
        d.ha("left", "0");
        d.ha("right", "0");
        var e = q("<div>");
        e.ha("height", "1em");
        e.ha("left", "0px");
        e.ha("background", "#888888");
        e.ha("border-top", "1px solid #cccccc");
        e.ha("border-left", "1px solid #cccccc");
        e.ha("border-bottom", "1px solid #000000");
        e.ha("border-right", "1px solid #000000");
        e.ha("width", "0.5em");
        e.ha("position", "absolute");
        e.ha("cursor", "pointer");
        c.append(d);
        c.append(e);
        c[0].type = "range";
        c[0].min = 0;
        c[0].max = 100;
        c[0].value = 0;
        c[0].onchange = function () {
        };
        c[0].dh = function (a,
                            b) {
            c[0].min = a;
            c[0].max = b
        };
        c[0].Ve = function (a) {
            c[0].value = a;
            var b = c.width() - e.width();
            a = a / c[0].max * b;
            a = Math.round(a);
            a = Math.max(a, 0);
            a = Math.min(a, c.width());
            e.ha("left", "" + a + "px")
        };
        c[0].Hg = function () {
            return c[0].value
        };
        var f, g, h, k = t("RANGE");
        Na(q(e), function (a) {
            h = !0;
            f = a.pageX;
            g = parseInt(e.ha("left"), 10);
            k("Mousedown at %s, ox=%s", f, g);
            a.stopPropagation();
            a.preventDefault()
        });
        Na(q(c), function (a) {
            var b = c.width() - e.width(), d = a.pageX - q(c).offset().left, d = Math.max(d, 0), d = Math.min(d, b);
            e.ha("left", "" + d +
                "px");
            f = a.pageX;
            g = d;
            d = d / b * (c[0].max - c[0].min) + c[0].min;
            d = Math.round(d);
            c[0].value = d;
            c[0].onchange();
            h = !0
        });
        La(q(c), function (a) {
            if (h) {
                var b = c.width() - e.width();
                a = a.pageX - f + g;
                a = Math.max(a, 0);
                a = Math.min(a, b);
                e.ha("left", "" + a + "px");
                a = a / b * (c[0].max - c[0].min) + c[0].min;
                a = Math.round(a);
                c[0].value = a;
                c[0].onchange()
            }
        });
        a.bind(q(document.body), "mouseup", function () {
            h = !1
        });
        return c[0]
    };
    t("Graphics", !0);
    function y(a, b) {
        this.x = a;
        this.y = b
    }

    y.prototype.Ra = function (a) {
        return Math.sqrt((a.x - this.x) * (a.x - this.x) + (a.y - this.y) * (a.y - this.y))
    };
    y.prototype.toString = function () {
        return "(" + this.x + ", " + this.y + ")"
    };
    y.prototype.hc = function (a) {
        return this.x === a.x && this.y === a.y
    };
    y.prototype.clone = function () {
        return new y(this.x, this.y)
    };
    function Cc(a, b, c) {
        var d = b.x, e = b.y, f = a.x, g = a.y, h = c.x - d;
        c = c.y - e;
        var k = h * h + c * c;
        if (0 === k)return a.Ra(b);
        a = ((f - d) * h + (g - e) * c) / k;
        1 < a ? a = 1 : 0 > a && (a = 0);
        d = d + a * h - f;
        e = e + a * c - g;
        return Math.sqrt(d * d + e * e)
    }

    function Dc(a, b) {
        this.width = a;
        this.height = b
    }

    function K(a, b, c, d) {
        return Math.sqrt((a - c) * (a - c) + (b - d) * (b - d))
    }

    function L(a, b, c, d) {
        var e = K(a, b, c, d);
        return 0 === e ? {x: 1, y: 0} : {x: (c - a) / e, y: (d - b) / e}
    }

    function Hc(a) {
        a.x *= -1;
        a.y *= -1;
        return a
    }

    function M(a, b, c, d) {
        this.x = a;
        this.y = b;
        this.width = c;
        this.height = d;
        Ic(this)
    }

    function Jc(a) {
        if (0 === a.length)return new M(0, 0, 0, 0);
        for (var b = a[0].x, c = a[0].x, d = a[0].y, e = a[0].y,
                 f = 1; f < a.length; f++)a[f].x < b && (b = a[f].x), a[f].x > c && (c = a[f].x), a[f].y < d && (d = a[f].y), a[f].y > e && (e = a[f].y);
        return new M(b, d, c - b, e - d)
    }

    M.prototype = {
        save: function () {
            return {x: this.x, y: this.y, width: this.width, height: this.height}
        }, clone: function () {
            return new M(this.x, this.y, this.width, this.height)
        }, hc: function (a) {
            return this.x === a.x && this.y === a.y && this.width === a.width && this.height === a.height
        }, contains: function (a) {
            return this.x <= a.x && this.x + this.width > a.x + a.width && this.y <= a.y && this.y + this.height > a.y + a.height
        }, Pb: function (a, b, c) {
            c = c || 0;
            return this.x - c <= a && this.x + this.width + c > a && this.y - c <= b && this.y + this.height + c > b
        }, Hb: function (a, b) {
            void 0 ===
            b && (b = a);
            this.x -= a / 2;
            this.y -= b / 2;
            this.width += a;
            this.height += b
        }, transform: function (a) {
            var b, c, d;
            b = a.apply(this.x, this.y);
            c = a.apply(this.x + this.width, this.y);
            d = a.apply(this.x + this.width, this.y + this.height);
            a = a.apply(this.x, this.y + this.height);
            this.x = Math.min(b.x, c.x, d.x, a.x);
            this.y = Math.min(b.y, c.y, d.y, a.y);
            this.width = Math.max(b.x, c.x, d.x, a.x) - this.x;
            this.height = Math.max(b.y, c.y, d.y, a.y) - this.y
        }, right: function () {
            return this.x + this.width
        }, bottom: function () {
            return this.y + this.height
        }, toString: function () {
            return "Rectangle(" +
                this.x + ", " + this.y + ", " + this.width + ", " + this.height + ")"
        }
    };
    function Kc(a) {
        return new y(a.x + a.width / 2, a.y + a.height / 2)
    }

    function Ic(a) {
        0 > a.width && (a.x += a.width, a.width = -a.width);
        0 > a.height && (a.y += a.height, a.height = -a.height)
    }

    function Lc(a, b, c) {
        b < a.x ? (a.width += a.x - b, a.x = b) : b > a.x + a.width && (a.width = b - a.x);
        c < a.y ? (a.height += a.y - c, a.y = c) : c > a.y + a.height && (a.height = c - a.y)
    }

    function Mc(a, b) {
        b.x < a.x && (a.width += a.x - b.x, a.x = b.x);
        b.y < a.y && (a.height += a.y - b.y, a.y = b.y);
        b.x + b.width > a.x + a.width && (a.width += b.x + b.width - a.x - a.width);
        b.y + b.height > a.y + a.height && (a.height += b.y + b.height - a.y - a.height)
    }

    function N(a, b, c) {
        var d = Math.cos(a), e = Math.sin(a);
        this.m11 = d;
        this.m12 = e;
        this.m21 = -e;
        this.m22 = d;
        this.Da = -b * d - c * e + b;
        this.Ea = b * e - c * d + c;
        this.aa = a;
        this.x = b;
        this.y = c
    }

    N.prototype.inverse = function () {
        return new N(-this.aa, this.x, this.y)
    };
    function E(a, b) {
        this.m11 = 1;
        this.m21 = this.m12 = 0;
        this.m22 = 1;
        this.Da = a;
        this.Ea = b
    }

    E.prototype.inverse = function () {
        return new E(-this.Da, -this.Ea)
    };
    function O(a) {
        if (0 === arguments.length) this.m11 = 1, this.m21 = this.m12 = 0, this.m22 = 1, this.Ea = this.Da = 0; else if (1 === arguments.length) {
            if (6 !== arguments[0].length)throw"Bad array initializer for Matrix.";
            this.m11 = arguments[0][0];
            this.m12 = arguments[0][1];
            this.m21 = arguments[0][2];
            this.m22 = arguments[0][3];
            this.Da = arguments[0][4];
            this.Ea = arguments[0][5]
        } else if (6 === arguments.length) this.m11 = arguments[0], this.m12 = arguments[1], this.m21 = arguments[2], this.m22 = arguments[3], this.Da = arguments[4], this.Ea = arguments[5];
        else throw"Bad initializer for Matrix.";
    }

    O.prototype = {
        log: t("MATRIX"), toString: function () {
            return "[ " + this.m11 + " " + this.m12 + " " + this.Da + "    " + this.m21 + " " + this.m22 + " " + this.Ea + "    0 0 1 ]"
        }, Nb: function () {
            return [this.m11, this.m12, this.m21, this.m22, this.Da, this.Ea]
        }, hc: function (a) {
            return this.m11 === a.m11 && this.m12 === a.m12 && this.m21 === a.m21 && this.m22 === a.m22 && this.Da === a.Da && this.Ea === a.Ea
        }, multiply: function (a) {
            var b = new O;
            b.m11 = this.m11 * a.m11 + this.m12 * a.m21;
            b.m21 = this.m21 * a.m11 + this.m22 * a.m21;
            b.m12 = this.m11 * a.m12 + this.m12 * a.m22;
            b.m22 = this.m21 *
                a.m12 + this.m22 * a.m22;
            b.Da = this.m11 * a.Da + this.m12 * a.Ea + this.Da;
            b.Ea = this.m21 * a.Da + this.m22 * a.Ea + this.Ea;
            return b
        }, apply: function (a, b) {
            return new y(this.m11 * a + this.m12 * b + this.Da, this.m21 * a + this.m22 * b + this.Ea)
        }, clone: function () {
            return new O(this.m11, this.m12, this.m21, this.m22, this.Da, this.Ea)
        }, inverse: function () {
            var a = this.m11 * this.m22 - this.m12 * this.m21;
            return new O(this.m22 / a, -this.m12 / a, -this.m21 / a, this.m11 / a, (this.m12 * this.Ea - this.Da * this.m22) / a, (this.Da * this.m21 - this.m11 * this.Ea) / a)
        }, translate: function (a,
                                b) {
            return this.multiply(new E(a, b))
        }, rotate: function (a, b, c) {
            return this.multiply(new N(a, b, c))
        }
    };
    function Nc(a) {
        return 1 === a.m11 && 1 === a.m22 && 0 === a.m12 && 0 === a.m21
    }

    function Oc(a) {
        return new y(Math.sqrt(a.m11 * a.m11 + a.m21 * a.m21), Math.sqrt(a.m12 * a.m12 + a.m22 * a.m22))
    }

    function Pc(a) {
        var b = a.m11, c = a.m21, d = a.m12, e = a.m22, f = Math.sqrt(b * b + c * c), g = Math.sqrt(d * d + e * e);
        return new O(b / f, d / g, c / f, e / g, a.Da, a.Ea)
    }

    function Qc(a, b) {
        b.transform(a.m11, a.m21, a.m12, a.m22, a.Da, a.Ea)
    }

    function Rc(a) {
        return 1 === a.m11 && 0 === a.m12 && 0 === a.m21 && 1 === a.m22 && 0 === a.Da && 0 === a.Ea
    }

    function cb(a, b, c, d) {
        void 0 === c ? (this.m11 = a, this.m21 = this.m12 = 0, this.m22 = b, this.ba = this.aa = this.Ea = this.Da = 0) : (this.m11 = a, this.m21 = this.m12 = 0, this.m22 = b, this.Da = c - a * c, this.Ea = d - b * d, this.aa = c, this.ba = d);
        this.da = a;
        this.ka = b
    }

    cb.prototype.inverse = function () {
        return new cb(1 / this.da, 1 / this.ka, this.aa, this.ba)
    };
    sc(O.prototype, cb.prototype);
    sc(O.prototype, N.prototype);
    function Sc(a, b, c) {
        var d = Math.cos(2 * a), e = Math.sin(2 * a);
        this.m11 = d;
        this.m21 = this.m12 = e;
        this.m22 = -d;
        this.Da = -b * d - c * e + b;
        this.Ea = -b * e + c * d + c;
        this.aa = a;
        this.x = b;
        this.y = c
    }

    Sc.prototype.inverse = function () {
        return new Sc(-this.aa, this.x, this.y)
    };
    sc(O.prototype, Sc.prototype);
    sc(O.prototype, E.prototype);
    function Tc(a, b, c, d, e, f, g, h, k, l) {
        if (!(8 < ++Uc)) {
            var m = (b + d) / 2, p = (c + e) / 2, r = (d + f) / 2, u = (e + g) / 2, v = (f + h) / 2, w = (g + k) / 2,
                z = (m + r) / 2, H = (p + u) / 2, r = (r + v) / 2, u = (u + w) / 2, P = (z + r) / 2, wd = (H + u) / 2,
                mc = h - b, nc = k - c;
            d = Math.abs((d - h) * nc - (e - k) * mc);
            f = Math.abs((f - h) * nc - (g - k) * mc);
            (d + f) * (d + f) < l * (mc * mc + nc * nc) ? a.push(new y(P, wd)) : (Tc(a, b, c, m, p, z, H, P, wd, l), Tc(a, P, wd, r, u, v, w, h, k, l))
        }
        --Uc
    }

    var Uc = 0;

    function Vc(a, b, c, d, e, f, g, h) {
        if (!(8 < ++Uc)) {
            var k = (b + d) / 2, l = (c + e) / 2, m = (d + f) / 2, p = (e + g) / 2, r = (k + m) / 2, u = (l + p) / 2,
                v = f - b, w = g - c;
            d = Math.abs((d - f) * w - (e - g) * v);
            d * d <= h * (v * v + w * w) ? a.push(new y(r, u)) : (Vc(a, b, c, k, l, r, u, h), Vc(a, r, u, m, p, f, g, h))
        }
        --Uc
    }

    function Wc(a, b, c) {
        var d, e, f, g, h, k, l, m, p = 0, r = a.length;
        1 < r && a[r - 1].x === a[0].x && a[r - 1].y === a[0].y && --r;
        if (3 > r)return 0;
        f = a[r - 1].x;
        g = a[r - 1].y;
        for (m = 0; m < r; m++)d = a[m].x, e = a[m].y, d > f ? (h = f, l = d, k = g, g = e) : (h = d, l = f, k = e), d < b === b <= f && (c - k) * (l - h) < (g - k) * (b - h) && (p = !p), f = d, g = e;
        return p
    }

    function Xc(a, b, c, d, e, f, g, h) {
        var k;
        c = c - a;
        d = d - b;
        g = g - e;
        k = h - f;
        var l = -g * d + c * k;
        if (0 === l)return null;
        h = (-d * (a - e) + c * (b - f)) / l;
        e = (g * (b - f) - k * (a - e)) / l;
        return 0 <= h && 1 >= h && 0 <= e && 1 >= e ? new y(a + e * c, b + e * d) : null
    }

    function Yc(a, b, c, d, e) {
        for (var f = [], g = new y(a, b), h = 1; h <= e.length; h++) {
            var k = e[h - 1], l = e[h % e.length];
            (k = Xc(a, b, c, d, k.x, k.y, l.x, l.y)) && f.push(k)
        }
        f.sort(function (a, b) {
            return a.Ra(g) - b.Ra(g)
        });
        return f
    }

    function Zc(a, b, c, d) {
        d = d * d;
        for (var e = 1; e < a.length; e++) {
            var f = a[e - 1].x, g = a[e - 1].y, h = a[e].x - f, k = a[e].y - g,
                l = ((b - f) * h + (c - g) * k) / (h * h + k * k);
            1 < l ? l = 1 : 0 > l && (l = 0);
            f = f + l * h - b;
            g = g + l * k - c;
            if (f * f + g * g <= d)return !0
        }
        return !1
    }

    function lc(a) {
        this.closed = !1;
        this.fa = [];
        a instanceof M && (this.moveTo(a.x, a.y), this.lineTo(a.x + a.width, a.y), this.lineTo(a.x + a.width, a.y + a.height), this.lineTo(a.x, a.y + a.height), this.lineTo(a.x, a.y), this.closePath())
    }

    var $b = 0, ac = 1, cc = 4, dc = [3, 3, 7, 5, 1], $c = [1, 1, 3, 2, 0];
    lc.prototype = {
        moveTo: function (a, b) {
            this.fa.push($b, a, b)
        }, lineTo: function (a, b) {
            this.fa.push(ac, a, b)
        }, bezierCurveTo: function (a, b, c, d, e, f) {
            this.fa.push(2, a, b, c, d, e, f)
        }, quadraticCurveTo: function (a, b, c, d) {
            this.fa.push(3, a, b, c, d)
        }, closePath: function () {
            this.fa.push(cc)
        }, na: function (a) {
            for (var b = 0; b < this.fa.length;) {
                switch (this.fa[b]) {
                    case $b:
                        a.moveTo(this.fa[b + 1], this.fa[b + 2]);
                        break;
                    case ac:
                        a.lineTo(this.fa[b + 1], this.fa[b + 2]);
                        break;
                    case 2:
                        a.bezierCurveTo(this.fa[b + 1], this.fa[b + 2], this.fa[b + 3], this.fa[b +
                        4], this.fa[b + 5], this.fa[b + 6]);
                        break;
                    case 3:
                        a.quadraticCurveTo(this.fa[b + 1], this.fa[b + 2], this.fa[b + 3], this.fa[b + 4]);
                        break;
                    case cc:
                        a.closePath();
                        break;
                    default:
                        alert("Error!")
                }
                b += dc[this.fa[b]]
            }
        }, ec: function () {
            for (var a = 0, b, c = []; a < this.fa.length;) {
                var d = $c[this.fa[a]];
                for (b = 0; b < d; b++)c.push(new y(this.fa[a + 1 + 2 * b], this.fa[a + 1 + 2 * b + 1]));
                a += dc[this.fa[a]]
            }
            return c
        }, transform: function (a) {
            for (var b = 0, c, d; b < this.fa.length;) {
                d = $c[this.fa[b]];
                for (c = 0; c < d; c++) {
                    var e = a.apply(this.fa[b + 1 + 2 * c], this.fa[b + 1 + 2 * c + 1]);
                    this.fa[b + 1 + 2 * c] = e.x;
                    this.fa[b + 1 + 2 * c + 1] = e.y
                }
                b += dc[this.fa[b]]
            }
        }, clone: function () {
            var a = new lc;
            a.fa = this.fa.concat();
            return a
        }, append: function (a) {
            this.fa = this.fa.concat(a.fa)
        }
    };
    function kc(a, b) {
        var c = new lc, d = 0;
        ad(a, function (a, f, g, h, k) {
            if (d <= b) {
                k && c.moveTo(a, f);
                k = K(a, f, g, h);
                if (d + k >= b) {
                    var l = b - d;
                    g = a + (g - a) * l / k;
                    h = f + (h - f) * l / k
                }
                d += k;
                c.lineTo(g, h)
            }
        });
        return c
    }

    function jc(a) {
        var b = 0;
        ad(a, function (a, d, e, f) {
            b += K(a, d, e, f)
        });
        return b
    }

    function ad(a, b) {
        for (var c = 0, d, e, f = !1; c < a.fa.length;) {
            switch (a.fa[c]) {
                case $b:
                    d = a.fa[c + 1];
                    e = a.fa[c + 2];
                    f = !0;
                    break;
                case ac:
                    b(d, e, a.fa[c + 1], a.fa[c + 2], f), d = a.fa[c + 1], e = a.fa[c + 2], f = !1
            }
            c += dc[a.fa[c]]
        }
    }

    function Zb(a) {
        function b(a, b) {
            f -= (a - d) * (b + e);
            d = a;
            e = b
        }

        for (var c = 0, d, e, f = 0; c < a.fa.length;) {
            switch (a.fa[c]) {
                case $b:
                    d = a.fa[c + 1];
                    e = a.fa[c + 2];
                    break;
                case ac:
                    b(a.fa[c + 1], a.fa[c + 2]);
                    break;
                case 2:
                    b(a.fa[c + 5], a.fa[c + 6]);
                    break;
                case 3:
                    b(a.fa[c + 3], a.fa[c + 4])
            }
            c += dc[a.fa[c]]
        }
        return f / 2
    }

    function pc(a, b, c) {
        for (var d = 0, e = 0, f = c[0], g, h = new y(0, 0), k; d < a.fa.length;) {
            switch (a.fa[d]) {
                case $b:
                    k = a.fa[d + 1];
                    g = a.fa[d + 2];
                    b.moveTo(k, g);
                    h = new y(k, g);
                    break;
                case ac:
                    k = a.fa[d + 1];
                    var l = g = a.fa[d + 2], m = new y(k, l);
                    g = h.Ra(m);
                    if (!(0 >= g)) {
                        for (; g > f;)h.x += (m.x - h.x) * f / g, h.y += (m.y - h.y) * f / g, e & 1 ? b.moveTo(h.x, h.y) : b.lineTo(h.x, h.y), g -= f, e = (e + 1) % c.length, f = c[e];
                        g <= f && (h = new y(k, l), e & 1 ? b.moveTo(h.x, h.y) : b.lineTo(h.x, h.y), f -= g)
                    }
            }
            d += dc[a.fa[d]]
        }
    }

    function bd(a, b) {
        for (var c = b.ec(), d = 0, e = new y(0, 0), f = new y(0, 0), g = new lc, h = !1, k; d < a.fa.length;) {
            switch (a.fa[d]) {
                case $b:
                    e.x = a.fa[d + 1];
                    e.y = a.fa[d + 2];
                    (h = Wc(c, e.x, e.y)) || g.moveTo(e.x, e.y);
                    break;
                case ac:
                    f.x = a.fa[d + 1];
                    f.y = a.fa[d + 2];
                    k = Yc(e.x, e.y, f.x, f.y, c);
                    for (var l = 0; l < k.length; l++)h ? g.moveTo(k[l].x, k[l].y) : g.lineTo(k[l].x, k[l].y), h = !h;
                    h || g.lineTo(f.x, f.y);
                    e.x = f.x;
                    e.y = f.y
            }
            d += dc[a.fa[d]]
        }
        return g
    }

    function cd(a, b, c, d) {
        var e = 0, f = 0, g = 0, h, k, l, m, p;
        for (d *= d; g < a.fa.length;) {
            switch (a.fa[g]) {
                case $b:
                    e = a.fa[g + 1];
                    f = a.fa[g + 2];
                    break;
                case ac:
                    h = a.fa[g + 1];
                    k = a.fa[g + 2];
                    m = h - e;
                    l = k - f;
                    p = m * m + l * l;
                    p = ((b - e) * m + (c - f) * l) / p;
                    1 < p ? p = 1 : 0 > p && (p = 0);
                    e += p * m;
                    l = f + p * l;
                    f = e - b;
                    l = l - c;
                    f = f * f + l * l;
                    if (f <= d)return !0;
                    e = h;
                    f = k
            }
            g += dc[a.fa[g]]
        }
        return !1
    }

    function dd(a, b, c, d) {
        return Wc(a.ec(), b, c) || 0 < d && cd(a, b, c, d)
    }

    function gc(a, b) {
        for (var c = 0, d = 0, e = 0, f = new lc, g; c < a.fa.length;) {
            switch (a.fa[c]) {
                case $b:
                    d = a.fa[c + 1];
                    e = a.fa[c + 2];
                    f.moveTo(d, e);
                    break;
                case ac:
                    d = a.fa[c + 1];
                    e = a.fa[c + 2];
                    f.lineTo(d, e);
                    break;
                case 2:
                    var h = g = [], k = a.fa[c + 5], l = a.fa[c + 6];
                    Tc(h, d, e, a.fa[c + 1], a.fa[c + 2], a.fa[c + 3], a.fa[c + 4], k, l, b * b);
                    h.push(new y(k, l));
                    2 === g.length && 1E-4 > d * (g[0].y - g[1].y) + g[0].x * (g[1].y - e) + g[1].x * (e - g[0].y) && (g[0] = g[1], g.length = 1);
                    for (d = 0; d < g.length; d++)f.lineTo(g[d].x, g[d].y);
                    d = a.fa[c + 5];
                    e = a.fa[c + 6];
                    break;
                case 3:
                    h = g = [];
                    k = a.fa[c + 3];
                    l = a.fa[c + 4];
                    Vc(h, d, e, a.fa[c + 1], a.fa[c + 2], k, l, b * b);
                    h.push(new y(k, l));
                    for (d = 0; d < g.length; d++)f.lineTo(g[d].x, g[d].y);
                    d = a.fa[c + 3];
                    e = a.fa[c + 4];
                    break;
                case cc:
                    f.closePath()
            }
            c += dc[a.fa[c]]
        }
        return f
    }

    function ed(a, b) {
        for (var c = 0, d, e, f = new M(a.fa[1], a.fa[2], 0, 0), g; c < a.fa.length;) {
            switch (a.fa[c]) {
                case $b:
                case ac:
                    d = a.fa[c + 1];
                    e = a.fa[c + 2];
                    Lc(f, d, e);
                    break;
                case 2:
                    var h = g = [], k = a.fa[c + 5], l = a.fa[c + 6];
                    Tc(h, d, e, a.fa[c + 1], a.fa[c + 2], a.fa[c + 3], a.fa[c + 4], k, l, b * b);
                    h.push(new y(k, l));
                    for (d = 0; d < g.length; d++)Lc(f, g[d].x, g[d].y);
                    d = a.fa[c + 5];
                    e = a.fa[c + 6];
                    break;
                case 3:
                    h = g = [];
                    k = a.fa[c + 3];
                    l = a.fa[c + 4];
                    Vc(h, d, e, a.fa[c + 1], a.fa[c + 2], k, l, b * b);
                    h.push(new y(k, l));
                    for (d = 0; d < g.length; d++)Lc(f, g[d].x, g[d].y);
                    d = a.fa[c + 3];
                    e = a.fa[c +
                    4]
            }
            c += dc[a.fa[c]]
        }
        return f
    }

    function fd(a, b, c, d, e) {
        var f;
        if (2 >= d - c) e.push(a[c]); else {
            var g = a[c], h = a[d - 1], k = 0, l = 0;
            for (f = c + 1; f < d; f++) {
                var m = Cc(a[f], g, h);
                m > k && (k = m, l = f)
            }
            0 < l && k > b ? (fd(a, b, c, l, e), fd(a, b, l, d, e)) : e.push(g)
        }
    }

    function gd(a, b) {
        var c = [];
        fd(a, b, 0, a.length, c);
        0 < a.length && 0 < c.length && !a[a.length - 1].hc(c[c.length - 1]) && c.push(a[a.length - 1]);
        return c
    }

    function hd(a) {
        this.sa = [];
        if (1 === arguments.length) {
            var b = arguments[0];
            if (b instanceof M) this.sa.push(new y(b.x, b.y)), this.sa.push(new y(b.right(), b.y)), this.sa.push(new y(b.right(), b.bottom())), this.sa.push(new y(b.x, b.bottom())); else if (b instanceof Array) this.sa = b; else throw alert("Bad parameter passed to Polygon() constructor."), "Error";
        }
    }

    hd.prototype = {
        transform: function (a) {
            for (var b = 0; b < this.sa.length; b++)this.sa[b] = a.apply(this.sa[b].x, this.sa[b].y)
        }, add: function (a, b) {
            this.sa.push(new y(a, b))
        }, Pb: function (a, b, c) {
            return Wc(this.sa, a, b) || c && Zc(this.sa, a, b, c)
        }, clone: function () {
            return new hd(this.sa.slice(0))
        }, hc: function (a) {
            if (this.sa.length !== a.sa.length)return !1;
            for (var b = 0; b < this.sa.length; b++) {
                var c = this.sa[b], d = a.sa[b];
                if (c.x !== d.x || c.y !== d.y)return !1
            }
            return !0
        }, Hb: function (a) {
            for (var b = [], c = 0; c < this.sa.length; c++) {
                var d = this.sa[0 ===
                    c ? this.sa.length - 1 : c - 1], e = this.sa[c], f = this.sa[c === this.sa.length - 1 ? 0 : c + 1],
                    g = K(d.x, d.y, e.x, e.y), h = K(f.x, f.y, e.x, e.y);
                b.push({
                    x: e.x + ((e.x - d.x) / g + (e.x - f.x) / h) / Math.sqrt(2) * a,
                    y: e.y + ((e.y - d.y) / g + (e.y - f.y) / h) / Math.sqrt(2) * a
                })
            }
            this.sa = b
        }, na: function (a) {
            if (!(1 > this.sa.length)) {
                a.moveTo(this.sa[0].x, this.sa[0].y);
                for (var b = 1; b < this.sa.length; b++)a.lineTo(this.sa[b].x, this.sa[b].y);
                a.closePath()
            }
        }, ec: function () {
            return this.sa
        }
    };
    function id(a, b, c, d, e, f, g, h) {
        c = c - a;
        d = d - b;
        g = g - e;
        h = h - f;
        var k = -g * d + c * h;
        if (0 === k)return null;
        e = (g * (b - f) - h * (a - e)) / k;
        return new y(a + e * c, b + e * d)
    }

    function jd(a, b) {
        function c(a) {
            var b, c, h, k, l;
            b = [];
            c = h = 0;
            for (k = a.length; c < k; c++)l = a[c], a[h + 1] && (b[h] = d(l, a[h + 1])), h += 1;
            return b
        }

        function d(a, b) {
            return new y(a.x + (b.x - a.x) / 2, a.y + (b.y - a.y) / 2)
        }

        return b ? jd(c(c(function (a) {
            var b, c, h, k, l;
            a = [a[0]].concat(a).concat(a[a.length - 1]);
            l = [];
            b = c = 0;
            for (h = a.length; b < h; b++)k = a[b], l[2 * c] = k, a[c + 1] && (l[2 * c + 1] = d(k, a[c + 1])), c += 1;
            return l
        }(a))), b - 1) : a
    }

    function kd(a, b) {
        for (var c = b.match(/[A-Z]+|-?[0-9\.E]+/gi), d = 0, e = 0, f = 0, g, h = [], f = 0; f < c.length; f++) {
            g = c[f++];
            for (h.length = 0; f < c.length; f++) {
                var k = parseFloat(c[f]);
                if (isNaN(k)) {
                    f--;
                    break
                } else h.push(k)
            }
            if ("M" === g) {
                a.moveTo(h[0], h[1]);
                for (g = 2; g < h.length; g += 2)a.lineTo(h[g], h[g + 1]);
                d = h[h.length - 2];
                e = h[h.length - 1]
            } else if ("m" === g)for (a.moveTo(h[0] + d, h[1] + e), d = h[0] + d, e = h[1] + e, g = 2; g < h.length; g += 2)a.lineTo(h[g] + d, h[g + 1] + e), d = h[g] + d, e = h[g + 1] + e; else if ("L" === g) {
                for (g = 0; g < h.length; g += 2)a.lineTo(h[g], h[g + 1]);
                d =
                    h[h.length - 2];
                e = h[h.length - 1]
            } else if ("l" === g)for (g = 0; g < h.length; g += 2)a.lineTo(h[g] + d, h[g + 1] + e), d = h[g] + d, e = h[g + 1] + e; else if ("C" === g)for (g = 0; g < h.length; g += 6)a.vc(h[g], h[g + 1], h[g + 2], h[g + 3], h[g + 4], h[g + 5]), d = h[g + 4], e = h[g + 5]; else if ("c" === g)for (g = 0; g < h.length; g += 6)a.vc(h[g] + d, h[g + 1] + e, h[g + 2] + d, h[g + 3] + e, h[g + 4] + d, h[g + 5] + e), d = h[g + 4] + d, e = h[g + 5] + e; else"z" !== g && "Z" !== g || a.closePath()
        }
    }

    function ld() {
        this.aa = [];
        this.wa = new O
    }

    ld.prototype = {
        toString: function () {
            return this.aa.join(" ")
        }, moveTo: function (a, b) {
            var c = this.wa.apply(a, b);
            this.aa.push("M", c.x, c.y)
        }, lineTo: function (a, b) {
            var c = this.wa.apply(a, b);
            this.aa.push("L", c.x, c.y)
        }, transform: function (a, b, c, d, e, f) {
            a = new O(a, c, b, d, e, f);
            this.wa = this.wa.multiply(a)
        }, vc: function (a, b, c, d, e, f) {
            a = this.wa.apply(a, b);
            c = this.wa.apply(c, d);
            e = this.wa.apply(e, f);
            this.aa.push("C", a.x, a.y, c.x, c.y, e.x, e.y)
        }, closePath: function () {
            this.aa.push("Z")
        }
    };
    function oc(a, b, c, d, e, f) {
        if (!(2 > b.length)) {
            void 0 === e && (e = !0);
            void 0 === f && (f = !0);
            var g = b[0].x === b[b.length - 1].x && b[0].y === b[b.length - 1].y, h = [], k = [], l, m, p, r, u, v,
                w = [], z = c / 2, H, P;
            for (H = 1; H < b.length; H++)r = b[H - 1], u = b[H], p = L(r.x, r.y, u.x, u.y), v = new y(p.y, -p.x), "middle" === d ? (l = new y(r.x - p.x * z - v.x * z, r.y - p.y * z - v.y * z), m = new y(r.x - p.x * z + v.x * z, r.y - p.y * z + v.y * z)) : "outside" === d ? (l = new y(r.x - v.x * c, r.y - v.y * c), m = r) : "inside" === d && (l = r, m = new y(r.x + v.x * c, r.y + v.y * c)), k.length && (r = k[k.length - 1], P = w[w.length - 1], l = id(r.x, r.y,
                    r.x + P.x, r.y + P.y, l.x, l.y, l.x + p.x, l.y + p.y) || l, r = h[h.length - 1], m = id(r.x, r.y, r.x + P.x, r.y + P.y, m.x, m.y, m.x + p.x, m.y + p.y) || m), k.push(l), h.push(m), w.push(p);
            g ? (r = k[0], P = w[0], l = id(r.x, r.y, r.x + P.x, r.y + P.y, l.x, l.y, l.x + p.x, l.y + p.y) || l, r = h[0], m = id(r.x, r.y, r.x + P.x, r.y + P.y, m.x, m.y, m.x + p.x, m.y + p.y) || m, k[0].x = l.x, k[0].y = l.y, h[0].x = m.x, h[0].y = m.y, k.push(l), h.push(m)) : "middle" === d ? (k.push(new y(u.x + p.x * z - v.x * z, u.y + p.y * z - v.y * z)), h.push(new y(u.x + p.x * z + v.x * z, u.y + p.y * z + v.y * z))) : "outside" === d ? (k.push(new y(u.x - v.x * c, u.y -
                v.y * c)), h.push(u)) : "inside" === d && (k.push(u), h.push(new y(u.x + v.x * c, u.y + v.y * c)));
            if (f) {
                a.moveTo(k[0].x, k[0].y);
                for (H = 1; H < k.length; H++)a.lineTo(k[H].x, k[H].y);
                g && (a.closePath(), a.moveTo(h[h.length - 1].x, h[h.length - 1].y))
            } else e && a.moveTo(h[h.length - 1].x, h[h.length - 1].y);
            if (e) {
                for (H = h.length - 1; 0 <= H; H--)a.lineTo(h[H].x, h[H].y);
                !g && f && a.lineTo(k[0].x, k[0].y)
            }
        }
    };
    function md(a, b, c, d, e) {
        this.view = a;
        this.da = b;
        this.qa = c;
        this.view.Wd = this.da instanceof nd;
        this.ma = !1;
        this.Ha = 0;
        this.Sa(d, e)
    }

    function od(a) {
        for (var b = [], c = 0; c < a.length; c++)b.push(a[c].id);
        return b
    }

    md.prototype = {
        log: t("TransformSelectionBehaviour"), hb: function (a) {
            var b;
            if (!this.ma) {
                for (b = 0; b < a.touches.length;) {
                    b = a.touches[b];
                    b = x(this.view, b.pageX, b.pageY);
                    "touchmove" === a.type && this.Wa(b.x, b.y, a);
                    break
                }
                for (b = 0; b < a.changedTouches.length;) {
                    b = a.changedTouches[b];
                    b = x(this.view, b.pageX, b.pageY);
                    "touchend" === a.type && this.Ya(b.x, b.y, a);
                    break
                }
            }
        }, Xa: function (a) {
            this.log("%s scale=%s rotation=%s", a.type, a.scale, a.rotation);
            this.ma = !0;
            var b = this.ka.x + this.ka.width / 2, c = this.ka.y + this.ka.height / 2, d = a.scale;
            this.view.Hc || (d = 1);
            var e = -a.rotation / 180 * Math.PI;
            if (0 < this.view.ga.get("snap"))var f = Math.PI / 16, e = Math.floor(e / f) * f;
            b = (new cb(d, d, b, c)).multiply(new N(e, b, c));
            for (c = 0; c < this.Ba.length; c++)pd(this.Ba[c], b.multiply(this.ba[c])), this.Ba[c].format(this.view.oa, this.view.request);
            this.view.Ad = b;
            this.view.na();
            if ("gestureend" === a.type) {
                for (c = 0; c < this.Ba.length; c++)pd(this.Ba[c], this.ba[c]);
                this.view.ya([new qd(od(this.Ba), b)]);
                rd(this)
            }
        }, Sa: function (a, b) {
            var c = this.Ba = sd(this.view);
            this.ba = [];
            for (var d =
                0; d < c.length; d++)this.ba.push(c[d].Ja()), this.Ha = this.Ha || c[d].pa("snap");
            this.aa = this.view.Ha(new y(a, b), this.Ha);
            this.log("onMouseDown(%s,%s)", this.aa.x, this.aa.y);
            this.ka = new M(this.view.Aa.x, this.view.Aa.y, this.view.Aa.width, this.view.Aa.height)
        }, Wa: function (a, b) {
            var c = this, d;
            d = this.view.Ha(new y(a, b), this.Ha);
            var e, f;
            e = d.x;
            f = d.y;
            for (var g = this.da.cd(new y(d.x - this.aa.x, d.y - this.aa.y)), g = td(this, g, a, b),
                     h = 0; h < this.Ba.length; h++)d = g.multiply(this.ba[h]), pd(this.Ba[h], d), this.Ba[h].format(this.view.oa,
                this.view.request);
            this.view.Ad = g;
            this.view.na(function () {
                if (c.da instanceof nd) {
                    var a = c.view.oa;
                    a.save();
                    a.beginPath();
                    a.strokeStyle = "#0050B7";
                    a.lineWidth = 1 / c.view.scale;
                    a.moveTo(c.da.origin.x, c.da.origin.y);
                    a.lineTo(e, f);
                    a.stroke();
                    a.restore()
                }
            })
        }, Ya: function (a, b) {
            var c = a, d = b, e = this.view.Ha(new y(a, b), this.Ha);
            a = e.x;
            b = e.y;
            this.log("onMouseUp(%s,%s)", a, b);
            if (e.hc(this.aa)) this.qa ? (c = this.view.la.bb(c, d, this.view.La)) && c.Oc() ? (this.log("Didn't move, and has edit mode. Selecting node %s", c.id), this.view.fb(),
                this.view.Fa = c) : this.log("Didn't move, but node has no edit mode or failed hittest") : this.log("Didn't move, but toggleEditNode=false"); else {
                this.log("Moved by %s,%s", a - this.aa.x, b - this.aa.y);
                e = this.da.cd(new y(e.x - this.aa.x, e.y - this.aa.y));
                e = td(this, e, c, d);
                for (c = 0; c < this.Ba.length; c++)pd(this.Ba[c], this.ba[c]);
                this.view.ya([new qd(od(this.Ba), e)])
            }
            rd(this)
        }, Xb: function () {
            this.log("onDoubleClick")
        }
    };
    function td(a, b, c, d) {
        if (1 < a.Ba.length || !Nc(b))return b;
        var e = a.Ba[0].pa("wallAffinity");
        if (!e)return b;
        var f = a.view.la.bb(c, d, a.view.La, "WallNode");
        if (null === f)return b;
        var g = f.Wb(c, d, a.view.scale);
        if ("middle" !== f.Ac(g))return b;
        var h = e.split(/\s+/), k, l = "bottom";
        b = "inside";
        for (var m = e = 0; m < h.length; m++)switch (k = h[m], k) {
            case "left":
            case "top":
            case "right":
            case "bottom":
            case "hcentre":
            case "vcentre":
                l = k;
                break;
            case "hcenter":
                l = "hcentre";
                break;
            case "vcenter":
                l = "vcentre";
                break;
            case "inside":
            case "outside":
            case "middle":
                b =
                    k;
                break;
            default:
                (k = parseFloat(k)) && (e = k)
        }
        null !== g && g < f.nb.length ? (h = f.nb[g], h = Math.atan2(h.Na.ia.y - h.Na.va.y, h.Na.ia.x - h.Na.va.x)) : h = 0;
        k = Oc(a.ba[0]);
        a.log("Scale=%s", k);
        var p = a.Ba[0].ab.clone(), m = new O, m = (new cb(k.x, k.y, 0, 0)).multiply(m);
        p.width *= k.x;
        p.height *= k.y;
        switch (l) {
            case "left":
                m = (new N(-Math.PI / 2, 0, 0)).multiply(m);
                m = (new E(p.width / 2, 0)).multiply(m);
                break;
            default:
            case "top":
                m = (new E(-p.width / 2, 0)).multiply(m);
                break;
            case "right":
                m = (new N(Math.PI / 2, 0, 0)).multiply(m);
                m = (new E(-p.height / 2, p.width)).multiply(m);
                break;
            case "bottom":
                m = (new N(Math.PI, 0, 0)).multiply(m);
                m = (new E(p.width / 2, p.height)).multiply(m);
                break;
            case "hcentre":
                m = (new E(-p.width / 2, -p.height / 2)).multiply(m);
                break;
            case "vcentre":
                m = (new E(-p.width / 2, -p.height / 2)).multiply(m), m = (new N(-Math.PI / 2, 0, 0)).multiply(m)
        }
        "inside" === b || "outside" === b ? (l = ud(f, g, "inside", e, c, d), f = ud(f, g, "outside", e, c, d), f.Ra(new y(c, d)) < l.Ra(new y(c, d)) || "outside" === b ? (m = (new N(Math.PI, 0, 0)).multiply(m), c = f) : c = l) : c = ud(f, g, b, e, c, d);
        m = (new N(-h, 0, 0)).multiply(m);
        m = (new E(c.x,
            c.y)).multiply(m);
        return m.multiply(a.ba[0].inverse())
    }

    function rd(a) {
        var b = new O;
        a.view.Ad = b;
        a.view.Wd = !0;
        vd(a.view);
        a.view.update(!0);
        F(a.view)
    };
    var xd = t("FitCurve");

    function yd(a) {
        function b(a) {
            z.bezierCurveTo(a[1].x, a[1].y, a[2].x, a[2].y, a[3].x, a[3].y);
            xd("Bezier: (%s,%s), (%s,%s), (%s,%s), (%s,%s)", a[0].x, a[0].y, a[1].x, a[1].y, a[2].x, a[2].y, a[3].x, a[3].y)
        }

        function c(a, b) {
            return a.x * b.x + a.y * b.y
        }

        function d(a) {
            var b = 1 - a;
            return 3 * a * b * b
        }

        function e(a) {
            return 3 * a * a * (1 - a)
        }

        function f(a, b) {
            var c = a.x - b.x, d = a.y - b.y;
            return Math.sqrt(c * c + d * d)
        }

        function g(a) {
            return a.x * a.x + a.y * a.y
        }

        function h(a, b) {
            var c = Math.sqrt(g(a));
            0 !== c && (a.x *= b / c, a.y *= b / c);
            return a
        }

        function k(a, b, c) {
            void 0 ===
            c && xd("Undef!");
            c.x = a.x + b.x;
            c.y = a.y + b.y
        }

        function l(a, b) {
            return {x: a.x + b.x, y: a.y + b.y}
        }

        function m(a, b) {
            return {x: a.x * b, y: a.y * b}
        }

        function p(a, b) {
            return {x: a.x - b.x, y: a.y - b.y}
        }

        function r(a, b, g, u, r) {
            var v, w = [], z, D = [[], []], U = [], ra, X;
            X = [{}, {}, {}, {}];
            z = b - 0 + 1;
            for (v = 0; v < z; v++) {
                ra = {x: u.x, y: u.y};
                var sa = {x: r.x, y: r.y};
                h(ra, d(g[v]));
                h(sa, e(g[v]));
                w[v] = [ra, sa]
            }
            D[0][0] = 0;
            D[0][1] = 0;
            D[1][0] = 0;
            D[1][1] = 0;
            U[0] = 0;
            for (v = U[1] = 0; v < z; v++)D[0][0] += c(w[v][0], w[v][0]), D[0][1] += c(w[v][0], w[v][1]), D[1][0] = D[0][1], D[1][1] += c(w[v][1],
                w[v][1]), ra = 1 - g[v], sa = g[v], ra = p(a[0 + v], l(m(a[0], ra * ra * ra), l(m(a[0], d(g[v])), l(m(a[b], e(g[v])), m(a[b], sa * sa * sa))))), U[0] += c(w[v][0], ra), U[1] += c(w[v][1], ra);
            g = D[0][0] * D[1][1] - D[1][0] * D[0][1];
            v = D[0][0] * U[1] - D[0][1] * U[0];
            U = U[0] * D[1][1] - U[1] * D[0][1];
            0 === g && (g = D[0][0] * D[1][1] * 1E-11);
            D = U / g;
            U = v / g;
            if (0 > D || 0 > U)return D = f(a[b], a[0]) / 3, X[0] = a[0], X[3] = a[b], k(X[0], h(u, D), X[1]), k(X[3], h(r, D), X[2]), X;
            X[0] = a[0];
            X[3] = a[b];
            k(X[0], h(u, D), X[1]);
            k(X[3], h(r, U), X[2]);
            return X
        }

        function u(a, b, c) {
            var d, e;
            e = [];
            for (d = 0; d <= a; d++)e[d] =
                {x: b[d].x, y: b[d].y};
            for (d = 1; d <= a; d++)for (b = 0; b <= a - d; b++)e[b].x = (1 - c) * e[b].x + c * e[b + 1].x, e[b].y = (1 - c) * e[b].y + c * e[b + 1].y;
            return e[0]
        }

        function v(a) {
            var b = Math.sqrt(Math.sqrt(g(a)));
            0 !== b && (a.x /= b, a.y /= b);
            return a
        }

        function w(a, b, c, d) {
            var e, f, h, k = (b - 0 + 1) / 2;
            f = 0;
            for (e = 1; e < b; e++)h = u(3, c, d[e - 0]), h = p(h, a[e]), h = g(h), h >= f && (f = h, k = e);
            return {Og: f, Sh: k}
        }

        var z = new lc;
        z.moveTo(a[0].x, a[0].y);
        (function (a, c, d) {
            var e;
            e = p(a[1], a[0]);
            e = v(e);
            var g = c - 1, g = p(a[g - 1], a[g]), g = v(g);
            a:{
                c = c - 1;
                var l, m;
                l = [{}, {}, {}, {}];
                if (2 === c - 0 + 1) d =
                    f(a[c], a[0]) / 3, l[0] = a[0], l[3] = a[c], k(l[0], h(e, d), l[1]), k(l[3], h(g, d), l[2]), b(l); else {
                    var z = [0];
                    for (m = 1; m <= c; m++)z[m - 0] = z[m - 0 - 1] + f(a[m], a[m - 1]);
                    for (m = 1; m <= c; m++)z[m - 0] /= z[c - 0];
                    l = r(a, c, z, e, g);
                    m = w(a, c, l, z).Og;
                    if (m < d) b(l); else for (; ;) {
                        d = a;
                        m = c;
                        for (var D = void 0, U = [], U = [], D = 0; D <= m; D++) {
                            for (var ra = U, X = D - 0, sa = l, Ec = d[D], Fc = z[D - 0], Ha = [], Gc = [], Pb = void 0,
                                     G = void 0, Rd = void 0, G = void 0, Pb = u(3, sa, Fc),
                                     G = 0; 2 >= G; G++)Ha[G] = {}, Ha[G].x = 3 * (sa[G + 1].x - sa[G].x), Ha[G].y = 3 * (sa[G + 1].y - sa[G].y);
                            for (G = 0; 1 >= G; G++)Gc[G] = {}, Gc[G].x =
                                2 * (Ha[G + 1].x - Ha[G].x), Gc[G].y = 2 * (Ha[G + 1].y - Ha[G].y);
                            G = u(2, Ha, Fc);
                            Rd = u(1, Gc, Fc);
                            ra[X] = Fc - ((Pb.x - Ec.x) * G.x + (Pb.y - Ec.y) * G.y) / (G.x * G.x + G.y * G.y + (Pb.x - Ec.x) * Rd.x + (Pb.y - Ec.y) * Rd.y)
                        }
                        d = U;
                        l = r(a, c, d, e, g);
                        w(a, c, l, d);
                        b(l);
                        break a
                    }
                }
            }
        })(a, a.length, 25);
        return z
    };
    function zd(a, b, c, d, e, f, g) {
        var h = this;
        this.view = a;
        this.nodeType = b;
        this.ea = c;
        this.width = d;
        this.height = e;
        this.ma = f;
        this.qa = g;
        this.state = "initial";
        this.node = this.aa = null;
        this.ba = function () {
        };
        "rectangle-tl" === f && (this.ba = function (a) {
            a.lineWidth = 1 / h.view.scale;
            a.strokeStyle = "#ccc";
            a.beginPath();
            a.rect(h.start.x, h.start.y, h.end.x - h.start.x, h.end.y - h.start.y);
            a.stroke()
        });
        this.da = new ib(this.view);
        this.view.fb(!0)
    }

    zd.prototype = {
        log: t("DrawShape"), Db: function () {
            this.log("Entering DrawShapeBehaviour");
            this.view.canvas.style.cursor = "crosshair"
        }, Ib: function () {
            this.log("Leaving DrawShapeBehaviour");
            this.cancel()
        }, cancel: function () {
            this.node && (this.view.la.removeNode(this.node), this.view.update(), this.node = null);
            this.state = "initial"
        }, Xa: function (a) {
            a = this.da.Xa(a);
            this.node && this.da.aa && (this.view.la.removeNode(this.node), this.node = null, this.state = "initial");
            return a
        }, vb: function (a) {
            "cancel" === a && F(this.view)
        }, hb: function (a) {
            var b;
            "touchstart" === a.type ? (b = a.changedTouches[0], b = x(this.view, b.pageX, b.pageY), this.Sa(b.x, b.y)) : "touchmove" === a.type ? (b = a.changedTouches[0], b = x(this.view, b.pageX, b.pageY), this.Wa(b.x, b.y, a)) : "touchend" === a.type && (b = a.changedTouches[0], b = x(this.view, b.pageX, b.pageY), this.Ya(b.x, b.y, a))
        }, Sa: function (a, b) {
            "initial" === this.state && (this.start = this.view.Ha(new y(a, b)), this.state = "predraw", this.log("initial -> predraw"))
        }, Wa: function (a, b, c) {
            a = this.view.Ha(new y(a, b));
            "predraw" === this.state && 10 < this.start.Ra(a) &&
            (this.node = Ad(this.nodeType, this.view.la.sb, this.view.la), Bd(this.node, this.ea), Cd(this.view.la, this.node), this.state = "drawing", this.log("predraw -> drawing"));
            "drawing" === this.state && (this.transform(this.start, a, c.ctrlKey), this.end = a, this.view.update(!1, this.ba))
        }, Ya: function (a, b, c) {
            "predraw" === this.state ? this.cancel() : "drawing" === this.state && (this.transform(this.start, this.view.Ha(new y(a, b)), c.ctrlKey), this.ya(), this.view.ga.get("autoPickTool") && F(this.view), this.state = "initial")
        }, transform: function (a,
                                b, c) {
            var d, e;
            if (b)if ("circle" === this.ma) d = a, a = a.Ra(b), e = 2 * a / this.width, a = 2 * a / this.height; else if ("rectangle-tl" === this.ma) a = a.clone(), b = b.clone(), a.x > b.x && (e = a.x, a.x = b.x, b.x = e), a.y > b.y && (e = a.y, a.y = b.y, b.y = e), d = a, e = (b.x - a.x) / this.width, a = (b.y - a.y) / this.height; else {
                e = [a, b];
                if (0 === e.length) d = new y(0, 0); else {
                    d = e[0].x;
                    for (var f = e[0].y, g = 1; g < e.length; g++)d += e[g].x, f += e[g].y;
                    d = new y(d / e.length, f / e.length)
                }
                e = (b.x - a.x) / this.width;
                a = (b.y - a.y) / this.height
            } else d = a, a = e = 1;
            c && (a = e = Math.min(e, a));
            c = new E(d.x, d.y);
            c = c.multiply(new cb(e, a));
            pd(this.node, c, c.inverse());
            Dd(this.view.la, this.node.id)
        }, ya: function () {
            this.ea.matrix = this.node.Ja();
            this.view.la.removeNode(this.node);
            this.node = null;
            this.view.ya([new C(this.nodeType, this.ea)])
        }, Md: function (a) {
            this.ea.lineWidth = a
        }, Jb: function (a) {
            $a.prototype.Jb.call(this, a);
            this.ea[a.zd ? "fillStyle" : "strokeStyle"] = a.Ua
        }, cc: function (a, b) {
            $a.prototype.cc.call(this, a, b);
            var c = b ? "fillStyle" : "strokeStyle", d = Ed(this.ea[c], a);
            this.log("oldColour=%s+opacity %s = %s", this.ea[c],
                a, d);
            this.ea[c] = d
        }, Qb: function () {
            return this.qa
        }, oc: function (a, b) {
            this.ea[a] = b
        }
    };
    function Fd(a, b) {
        this.view = a;
        this.da = !1;
        this.ba = this.aa = null;
        this.ea = b;
        this.ma = a.ga.get("multilineText");
        this.ka = "normal";
        a.ga.get("iPadNoScrollText") && null !== navigator.userAgent.match(/iPad|iPhone|Android/i) && (this.ka = "top")
    }

    Fd.prototype = {
        log: t("Text"), Db: function () {
            this.log("Entering text mode");
            this.view.canvas.style.cursor = "text"
        }, Ib: function () {
            this.da && Gd(this);
            this.view.canvas.style.cursor = "default";
            this.log("Leaving text mode");
            this.aa && (this.aa.parentNode.removeChild(this.aa), this.aa = null)
        }, hb: function (a) {
            for (var b = 0; b < a.touches.length; b++) {
                var c = a.touches[b], c = x(this.view, c.pageX, c.pageY);
                "touchstart" === a.type && this.Sa(c.x, c.y, a)
            }
        }, Sa: function (a, b, c) {
            this.log("onMouseDown(%s)", c.type);
            if (this.da) this.log("Editing somewhere else on mousedown; submit that first."),
                Gd(this), this.view.ga.get("autoPickToolText") && F(this.view); else {
                var d = this.view.la.bb(a, b, this.view.La);
                this.Od(d, a, b, c)
            }
            this.log("Eating click");
            this.view.Vd = !0
        }, Od: function (a, b, c) {
            function d() {
                l.aa && (l.log("Set editBox height to %s", "" + l.aa.scrollHeight + "px"), l.aa.style.height = "" + l.aa.scrollHeight + "px", l.aa.style.width = "" + l.aa.scrollWidth + "px");
                m = null
            }

            var e, f, g, h, k = 0;
            this.qa = !1;
            a && "TextNode" === a.type() || a && "PathNode" === a.type() && this.view.ga.get("allowTextInShape") ? (this.Fa = a, "top" !== this.ka &&
            "TextNode" === a.type() && this.Fa.mc(!0), this.view.na(), this.ba = new y(a.rect.x, a.rect.y), e = a.pa("fontName"), f = a.pa("fontSize"), g = a.pa("bold"), h = a.pa("italic"), k = a.yb().width * this.view.scale, k = Math.max(k, 200)) : (this.Fa = null, this.ba = new y(b, c), e = Hd(this, "fontName"), f = Hd(this, "fontSize"), g = Hd(this, "bold"), h = Hd(this, "italic"));
            var l = this;
            this.aa = document.createElement("textarea");
            a = q(this.aa).height();
            this.aa.style.width = k ? "" + k + "px" : "auto";
            k = Id(this.view, this.ba.x, this.ba.y);
            this.fillStyle = Hd(this, "textFillStyle") ||
                Hd(this, "fillStyle");
            this.aa.style.position = "absolute";
            this.aa.style.fontFamily = e;
            this.aa.style.fontSize = "" + f * this.view.scale + "px";
            this.aa.style.overflow = "auto";
            this.aa.style.fontWeight = g ? "bold" : "normal";
            this.aa.style.fontStyle = h ? "italic" : "normal";
            this.aa.style.padding = "0";
            this.aa.style.border = "1px solid #888";
            this.aa.style.color = this.fillStyle;
            this.aa.style.backgroundColor = Hd(this, "background");
            this.aa.style.zIndex = Jd() + 1;
            this.log("Using z-index %s", this.aa.style.zIndex);
            this.log("FillStyle=%s",
                Q(this.fillStyle).toString());
            "#ffffff" === Q(this.fillStyle).toString() && (this.aa.style.backgroundColor = "#808080");
            e = q(this.view.canvas.parentNode);
            f = e.offset();
            h = g = 0;
            "top" === this.ka ? (h = q(this.view.canvas).offset(), g = q(this.view.canvas).width(), k = q(this.aa).width(), g = h.left + g / 2 - k / 2, h = h.top) : (g = Math.round(k.x) + 1, h = Math.round(k.y) + 1);
            this.aa.style.WebkitTransitionDuration = "0";
            this.aa.style.MozTransitionDuration = "0";
            this.aa.style.da = "0";
            this.aa.style.ba = "0";
            this.aa.style.transitionDuration = "0";
            this.aa.style.left =
                g - f.left + "px";
            this.aa.style.top = h - f.top + "px";
            e[0].appendChild(this.aa);
            Kd(this.aa);
            this.da = !0;
            this.ba = new y(b, c + a);
            this.Fa && (this.aa.value = this.Fa.pa("text"));
            var m = null, m = setTimeout(d, 0);
            q(this.aa).bind("keydown", function (a) {
                27 === a.keyCode && l.ma || 13 === a.keyCode && (a.shiftKey || !l.ma) ? (l.log("Enter pressed. create text."), Gd(l), l.view.Ga.rb && Ld(l.view), l.view.tb.Mc("goto-canvas"), l.view.ga.get("autoPickToolText") && F(l.view)) : 27 === a.keyCode ? (l.log("ESC pressed; cancel."), l.cancel(), F(l.view), l.view.tb.emit("goto-toolbar")) :
                    13 === a.keyCode && (m || (m = setTimeout(d, 0)))
            });
            this.view.ga.get("leaveTextToolOnBlur") && (q(this.aa).bind("focus", function () {
                l.log("Text focus received.")
            }), q(this.aa).bind("blur", function () {
                l.log("Text blur received -- removing=%s", !0 === l.aa.aa);
                l.aa.aa || (l.aa.aa = !0, Gd(l))
            }));
            setTimeout(function () {
                l.aa && l.aa.focus()
            }, 200);
            l.aa.focus();
            l.view.aa.emit("edit-text-shown", l.aa)
        }, cancel: function () {
            this.aa && (this.aa.aa = !0, this.aa.parentNode.removeChild(this.aa), this.view.aa.emit("edit-text-hidden"));
            this.aa =
                null;
            this.da = !1;
            this.Fa && (this.Fa.mc(!1), this.view.na())
        }, Wa: function () {
        }, vb: function (a) {
            this.log("keyboard: %s", a);
            "cancel" === a && null === this.aa && (F(this.view), this.view.tb.emit("goto-toolbar"))
        }, Jb: function (a) {
            this.log("Set text colour to %s", a.Ua);
            this.qa = !0;
            this.fillStyle = a.Ua;
            this.ea.textFillStyle = a.Ua;
            this.aa && (this.aa.style.color = a.Ua, "#ffffff" === Q(a.Ua).toString() ? this.aa.style.backgroundColor = "#808080" : this.aa.style.backgroundColor = "#ffffff")
        }, cc: function (a, b) {
            Md(this.view, a, b)
        }, Cc: function (a,
                         b) {
            if ("defaultBold" === a) a = "bold", this.aa && (this.aa.style.fontWeight = b ? "bold" : "normal"); else if ("defaultItalic" === a) a = "italic", this.aa && (this.aa.style.fontStyle = b ? "italic" : "normal"); else if ("defaultTextBackground" === a) a = "background", this.aa && (this.aa.style.backgroundColor = b); else return;
            this.log("Update %s=%s", a, b);
            this.ea[a] = b
        }, Qb: function () {
            return "text"
        }, oc: function (a, b) {
            this.ea[a] = b
        }
    };
    function Gd(a) {
        var b = a.aa.value;
        a.cancel();
        if (a.Fa && a.Fa.pa("text") === b && !a.qa) a.log("Text was not changed."); else if (null === a.Fa && "" === b) a.log("No text entered."); else if (a.Fa) a.log("Update text in node %s", a.Fa.id), b = [new Nd([a.Fa.id], "text", b), new Nd([a.Fa.id], "textFillStyle", a.fillStyle)], "bold" in a.ea && b.push(new Nd([a.Fa.id], "bold", a.ea.bold)), "italic" in a.ea && b.push(new Nd([a.Fa.id], "italic", a.ea.bold)), a.view.ya(b); else {
            a.log("Create new text node.");
            var c = a.view.la.sb, d = Hd(a, "fontSize"),
                e = new E(a.ba.x, a.ba.y + d);
            a.view.ya([new C("TextNode", q.aa({
                text: b,
                background: Hd(a, "background"),
                fontSize: d,
                fontName: Hd(a, "fontName"),
                bold: Hd(a, "bold"),
                italic: Hd(a, "italic"),
                textFillStyle: Hd(a, "textFillStyle"),
                strokeStyle: Hd(a, "textStrokeStyle"),
                lineWidth: Hd(a, "textLineWidth"),
                layer: a.ea.layer || a.view.La,
                wrap: a.view.ga.get("multilineText")
            }, a.ea)), new qd([c], e)])
        }
    }

    function Hd(a, b) {
        return b in a.ea ? a.ea[b] : "background" === b ? a.view.ga.get("defaultTextBackground") : a.view.Ca[b]
    };
    function Od(a, b) {
        this.view = a;
        this.ea = b;
        this.fa = [];
        this.node = null;
        this.Ha = b.snap
    }

    Od.prototype = {
        log: t("Wall"), Qb: function () {
            return "wall"
        }, vb: function (a) {
            this.log("keyboard: %s", a);
            "cancel" === a && (this.log("ESC pressed. Abort wall and go back to toolbar."), F(this.view), this.view.tb.emit("goto-toolbar"))
        }, Db: function () {
            this.log("Enter DrawWallBehaviour");
            this.view.canvas.style.cursor = "crosshair"
        }, Ib: function () {
            this.log("Leaving DrawWallBehaviour");
            this.reset()
        }, Sa: function (a, b, c) {
            var d = this.view.Ha(new y(a, b), this.Ha);
            if (this.node) {
                var e = this.view, f, g = Pd(e), h = q(e.canvas).offset(),
                    k = Qd(e.ba);
                "changedTouches" in c ? (f = c.changedTouches[0].pageX - h.left - g, c = c.changedTouches[0].pageY - h.top - g) : (f = c.pageX - h.left - g, c = c.pageY - h.top - g);
                g = e.da;
                if (e.ma && f > g.width - e.ma.width - k && c < e.ma.height) {
                    this.ya(!1);
                    return
                }
                e = new y(this.fa[this.fa.length - 4], this.fa[this.fa.length - 3]);
                this.log("Last point=%s new point=%s distance=%s", e, new y(a, b), e.Ra(new y(a, b)));
                if (10 < e.Ra(new y(a, b))) {
                    if (10 > d.Ra(new y(this.fa[1], this.fa[2]))) {
                        this.fa.push("Z");
                        this.log("Closed path!");
                        this.ya(!0);
                        return
                    }
                    this.fa.push(a,
                        b);
                    this.node.setProperty("svgpath", this.fa.join(" "));
                    Dd(this.view.la, this.node.id)
                }
            } else this.fa = ["M", d.x, d.y, d.x, d.y], this.node = Ad("WallNode", this.view.la.sb, this.view.la), Bd(this.node, this.ea), this.node.setProperty("svgpath", this.fa.join(" ")), Cd(this.view.la, this.node), Sd(this.view, !0), Td(this.view, "click-to-place-another-point-or-double-click-to-end-the-line");
            this.view.update()
        }, Wa: function (a, b) {
            var c;
            c = this.view.Ha(new y(a, b), this.Ha);
            this.node && (this.fa[this.fa.length - 2] = c.x, this.fa[this.fa.length -
            1] = c.y, this.node.setProperty("svgpath", this.fa.join(" ")), Dd(this.view.la, this.node.id), this.view.update())
        }, Ya: function (a, b) {
            var c;
            c = this.view.Ha(new y(a, b), this.Ha);
            if (this.node) {
                var d = new y(this.fa[this.fa.length - 4], this.fa[this.fa.length - 3]);
                this.log("Last point=%s new point=%s distance=%s", d, new y(a, b), d.Ra(new y(a, b)));
                10 < d.Ra(c) && (this.fa.push(c.x, c.y), this.ya(!1))
            }
        }, Xb: function () {
            this.ya(!1)
        }, ya: function (a) {
            this.node && (this.log("Commit()"), this.view.la.removeNode(this.node), this.node = null,
                this.fa.length -= 2, 3 < this.fa.length && (a && this.fa.push("Z"), this.ea.svgpath = this.fa.join(" "), this.view.ya([new C("WallNode", this.ea)]), this.view.fb()), Sd(this.view, !1), Td(this.view, null))
        }, reset: function () {
            this.node && (Sd(this.view, !1), this.view.la.removeNode(this.node), this.view.update(), Td(this.view, null))
        }
    };
    function Ud(a) {
        this.view = a
    }

    Ud.prototype = {
        log: t("Wall"), Qb: function () {
            return "split-wall"
        }, vb: function (a) {
            this.log("keyboard: %s", a);
            "cancel" === a && (this.log("ESC pressed. Abort wall and go back to toolbar."), F(this.view), this.view.tb.emit("goto-toolbar"))
        }, Db: function () {
            this.log("Enter SplitWallBehaviour");
            this.view.canvas.style.cursor = "default"
        }, Ib: function () {
            this.log("Leaving DrawWallBehaviour")
        }, Sa: function (a, b) {
            this.Wa(a, b);
            var c = this.view.la.bb(a, b, this.view.La), d, e;
            c && "WallNode" === c.type() && ((d = c.Wb(a, b, this.view.scale)) &&
            "middle" === c.Ac(d) && (e = Vd(c.path, a, b)) && (e.transform(c.Ja().inverse()), d = new ld, e.na(d), this.view.ya([new Nd([c.id], "svgpath", d.toString())]), d = c.Wb(a, b, this.view.scale)), d && B(this.view, new Ya(this.view, c, d, a, b, this)))
        }, Wa: function (a, b) {
            this.view.Ha(new y(a, b));
            var c = this.view.la.bb(a, b, this.view.La), d, e;
            c && "WallNode" === c.type() && (e = c.Wb(a, b, this.view.scale)) && (d = !0, c = c.Ac(e), this.view.canvas.style.cursor = "middle" === c ? "copy" : "move");
            d || (this.view.canvas.style.cursor = "default")
        }, ya: function () {
        }
    };
    function Vd(a, b, c) {
        var d, e, f = 0, g = 0, h = 0, k = 0, l = null, m = null, p = new y(b, c);
        a.na({
            moveTo: function (a, b) {
                var c = p.Ra(new y(a, b));
                if (null === l || l > c) l = c;
                d = a;
                e = b
            }, lineTo: function (a, b) {
                var c = new y(a, b), r = p.Ra(c);
                if (null === l || l > r) l = r;
                c = Cc(p, new y(d, e), c);
                if (null === m || m > c) f = d, g = e, h = a, k = b, m = c;
                d = a;
                e = b
            }, closePath: function () {
            }
        });
        if (null !== l && (null === m || m > l))return null;
        var r = new lc;
        a.na({
            moveTo: function (a, b) {
                r.moveTo(a, b);
                d = a;
                e = b
            }, lineTo: function (a, b) {
                d === f && e === g && a === h && b === k && r.lineTo(p.x, p.y);
                r.lineTo(a, b);
                d = a;
                e =
                    b
            }, closePath: function () {
                r.closePath()
            }
        });
        return r
    };
    function Wd(a, b, c, d) {
        this.node = a;
        this.wa = b;
        this.aa = c;
        this.origin = d;
        a = this.wa.apply(c.x, c.y);
        this.x = a.x;
        this.y = a.y
    }

    Wd.prototype = {
        cd: function (a) {
            var b = 1, c = 1, d = this.wa.inverse(), e = d.apply(this.x + a.x, this.y + a.y);
            a = new y(this.aa.x - this.origin.x, this.aa.y - this.origin.y);
            e = new y(e.x - this.origin.x, e.y - this.origin.y);
            e = (e.x * a.x + e.y * a.y) / (a.x * a.x + a.y * a.y);
            0 !== a.x && 0 !== a.y ? c = b = e : 0 !== a.x ? b = e : c = e;
            return this.wa.multiply(new cb(b, c, this.origin.x, this.origin.y)).multiply(d)
        }
    };
    function nd(a, b, c, d, e) {
        this.node = a;
        this.wa = b;
        this.origin = this.wa.apply(d.x, d.y);
        a = this.wa.apply(c.x, c.y);
        this.x = a.x;
        this.y = a.y;
        this.ba = Math.atan2(this.y - this.origin.y, this.x - this.origin.x);
        this.aa = e
    }

    nd.prototype = {
        log: t("RotationSelHandle"), cd: function (a) {
            a = Math.atan2(this.y + a.y - this.origin.y, this.x + a.x - this.origin.x) - this.ba;
            if (this.aa) {
                var b = Math.PI / 16;
                a = Math.floor(a / b) * b
            }
            return new N(-a, this.origin.x, this.origin.y)
        }
    };
    function Xd(a, b) {
        this.node = a;
        this.wa = b;
        this.y = this.x = 0
    }

    Xd.prototype = {
        cd: function (a) {
            return new E(a.x, a.y)
        }
    };
    function Yd() {
    }

    Yd.prototype = {
        cd: function () {
            return new O
        }
    };
    function Zd(a, b) {
        this.next = this.Rb = null;
        a instanceof Zd ? (this.Rb = a, this.Rb.next = this, this.va = this.Rb.ia) : this.va = a;
        this.ia = b;
        this.Rd = this.xd = this.length = 0;
        this.Xe = !1;
        this.text = "";
        this.Ld = !0
    }

    Zd.prototype = {log: t("WallSegment", !0)};
    function $d(a, b) {
        this.Na = a;
        this.type = b
    }

    $d.prototype = {
        log: t("WallEditHandle", !0), bb: function (a, b, c, d, e) {
            switch (this.type) {
                case "from":
                    a = K(a, b, this.Na.va.x, this.Na.va.y);
                    break;
                case "to":
                    a = K(a, b, this.Na.ia.x, this.Na.ia.y);
                    break;
                default:
                    var f = 0, g = 0;
                    "middle" === d ? (f = -e / 2, g = e / 2) : "outside" === d ? f = -e : g = e;
                    d = L(this.Na.va.x, this.Na.va.y, this.Na.ia.x, this.Na.ia.y);
                    d = new y(d.y, -d.x);
                    f = Cc(new y(a, b), new y(this.Na.va.x + f * d.x, this.Na.va.y + f * d.y), new y(this.Na.ia.x + f * d.x, this.Na.ia.y + f * d.y));
                    a = Cc(new y(a, b), new y(this.Na.va.x + g * d.x, this.Na.va.y + g * d.y), new y(this.Na.ia.x +
                        g * d.x, this.Na.ia.y + g * d.y));
                    a = Math.min(f, a)
            }
            return a < c
        }, moveTo: function (a, b) {
            var c, d;
            switch (this.type) {
                case "from":
                    c = this.Na.Rb;
                    this.Na.va.x = a;
                    this.Na.va.y = b;
                    break;
                case "to":
                    d = this.Na.next;
                    this.Na.ia.x = a;
                    this.Na.ia.y = b;
                    break;
                default:
                    c = this.Na.Rb;
                    d = this.Na.next;
                    var e = this.Na, f = L(e.va.x, e.va.y, e.ia.x, e.ia.y), g = new y(f.y, -f.x),
                        h = g.x * (a - e.va.x) + g.y * (b - e.va.y), f = new y(e.va.x + h * g.x, e.va.y + h * g.y),
                        g = new y(e.ia.x + h * g.x, e.ia.y + h * g.y);
                    e.Rb && (h = id(e.Rb.va.x, e.Rb.va.y, e.Rb.ia.x, e.Rb.ia.y, f.x, f.y, g.x, g.y)) && (f =
                        h);
                    e.next && (h = id(e.next.va.x, e.next.va.y, e.next.ia.x, e.next.ia.y, f.x, f.y, g.x, g.y)) && (g = h);
                    e.va.x = f.x;
                    e.va.y = f.y;
                    e.ia.x = g.x;
                    e.ia.y = g.y
            }
            c && (c.Ld = !0);
            d && (d.Ld = !0)
        }
    };
    function ae() {
        this.text = "";
        this.font = "10px Arial";
        this.ma = "Arial";
        this.fontSize = 10;
        this.aa = [];
        this.rect = new M(0, 0, 0, this.fontSize);
        this.da = "left";
        this.ba = "top";
        this.qa = this.ka = !1
    }

    n = ae.prototype;
    n.log = t("TextBox");
    function be(a, b, c) {
        switch (b) {
            case "left":
            case "centre":
            case "right":
                a.ba = b;
                break;
            case null:
                break;
            default:
                a.log("Unknnown alignment: %s", b)
        }
        switch (c) {
            case "top":
            case "middle":
            case "bottom":
                a.da = c;
                break;
            case null:
                break;
            default:
                a.log("Unknnown alignment: %s", c)
        }
    }

    n.format = function (a, b, c) {
        this.font = "" + this.fontSize + 'px "' + this.ma + '"';
        this.ka && (this.font = "bold " + this.font);
        this.qa && (this.font = "italic " + this.font);
        this.aa.length = 0;
        var d, e;
        a.font = this.font;
        var f = 0;
        this.rect.width = 0;
        if (0 === b) {
            var g = this.text.split("\n");
            for (d = 0; d < g.length; d++) {
                var h = g[d];
                e = a.measureText(h).width;
                f += this.fontSize;
                this.aa.push({x: 0, y: f, width: e, text: h});
                this.rect.width = Math.max(this.rect.width, e)
            }
        } else {
            var h = g = 0, k = !1;
            for (d = 0; d < this.text.length; d++) {
                var l = this.text.charAt(d);
                e = a.measureText(this.text.substr(g,
                    d - g + 1)).width;
                "\n" === l ? k = !0 : e > b ? h ? (d = h, k = !0) : d > g && (--d, k = !0) : " " === l && (h = d);
                k && (e = " " === this.text.charAt(d) ? a.measureText(this.text.substr(g, d - g)).width : a.measureText(this.text.substr(g, d - g + 1)).width, f += this.fontSize, this.aa.push({
                    x: 0,
                    y: f,
                    width: e,
                    text: this.text.substr(g, d - g + 1)
                }), g = d + 1, h = 0, k = !1, this.rect.width = Math.max(this.rect.width, e))
            }
            e && (f += this.fontSize, this.aa.push({
                x: 0,
                y: f,
                width: e,
                text: this.text.substr(g, d - g)
            }), this.rect.width = Math.max(this.rect.width, e))
        }
        this.rect.x = 0;
        this.rect.y = 0;
        this.rect.height =
            f;
        if ("centre" === this.ba)for (d = 0; d < this.aa.length; d++)a = this.aa[d], a.x = this.rect.width / 2 - a.width / 2; else if ("right" === this.ba)for (d = 0; d < this.aa.length; d++)a = this.aa[d], a.x = this.rect.width - a.width;
        b && "centre" === this.ba ? this.rect.x = b / 2 - this.rect.width / 2 : b && "right" === this.ba && (this.rect.x = b - this.rect.width);
        c && "middle" === this.da ? this.rect.y = c / 2 - this.rect.height / 2 : c && "bottom" === this.da && (this.rect.y = c - this.rect.height)
    };
    n.na = function (a, b, c) {
        this.fillText(a, b, c)
    };
    n.fillText = function (a, b, c) {
        a.textBaseline = "alphabetic";
        a.font = this.font;
        for (var d = 0; d < this.aa.length; d++) {
            var e = this.aa[d];
            a.fillText(e.text, this.rect.x + e.x + b, this.rect.y + e.y + c)
        }
    };
    n.strokeText = function (a, b, c) {
        a.textBaseline = "alphabetic";
        a.font = this.font;
        for (var d = 0; d < this.aa.length; d++) {
            var e = this.aa[d];
            a.strokeText(e.text, this.rect.x + e.x + b, this.rect.y + e.y + c)
        }
    };
    function ce(a, b) {
        de(this, a, b, ce)
    }

    var ee = {fillStyle: "#cccccc", strokeStyle: "#000000", lineWidth: 2, shadow: !1};
    ce.prototype = {
        log: t("BaseNode"), clip: function () {
        }, Oc: function () {
            return !1
        }, Wb: function () {
            return null
        }, Dd: function () {
        }, Le: function () {
            return !1
        }, Jd: function () {
            return "text" in this.ea
        }, clone: function (a) {
            a = new this.constructor(a(), this.la);
            Bd(a, fe(this));
            return a
        }, type: function () {
            return "BaseNode"
        }, Ja: function () {
            return this.ea.matrix
        }, setProperty: function (a, b) {
            if (a in this.ea || "tag" === a || "locked" === a || "lockSize" === a || "lockRotation" === a || "lockPosition" === a || "lockEditMode" === a || "rotationHandles" === a || "lockAspectRatio" ===
                a || "zIndex" === a || "wallAffinity" === a || "snap" === a) ge(b) && (b = b.slice(0)), this.ea[a] = b
        }, pa: function (a) {
            return this.ea[a]
        }, yb: function () {
            return this.rect
        }, le: function () {
            return []
        }, je: function () {
            var a = new hd(this.ab);
            a.transform(this.Ja());
            return a
        }, transform: function (a) {
            this.ea.matrix = a.multiply(this.ea.matrix)
        }, format: function () {
        }, bb: function (a, b) {
            var c = he(this).apply(a, b);
            return this.qa || this.pa("locked") || !this.ab.Pb(c.x, c.y) ? null : this
        }, mc: function (a) {
            this.qa = a
        }, Vc: function () {
        }, Oe: function () {
        }, Pe: function () {
        },
        na: function (a) {
            a.save();
            var b = this.ea.matrix;
            a.transform(b.m11, b.m21, b.m12, b.m22, b.Da, b.Ea);
            "erase" === this.ea.strokeStyle ? a.Jc ? a.strokeStyle = a.Jc : (a.strokeStyle = "#000000", a.globalCompositeOperation = "destination-out") : a.strokeStyle = this.ea.strokeStyle;
            a.fillStyle = this.ea.fillStyle;
            a.lineWidth = this.ea.lineWidth;
            this.ea.shadow && (a.shadowOffsetX = 3, a.shadowOffsetY = 3, a.shadowBlur = 5, a.shadowColor = "rgba(0,0,0,0.5)");
            this.uc(a);
            a.restore()
        }, uc: function () {
        }, resolve: function () {
            return !1
        }
    };
    function ie(a, b, c, d) {
        a.Aa || (a.Aa = {});
        var e = a.Aa.insideFill;
        if (!e || e.Ye !== d) {
            e && d === e.Ye || (e = {Ye: d, value: d}, a.Aa.insideFill = e);
            d = /url\(([^\)]+)\)/.exec(d);
            var f;
            d && (f = d[1]);
            f && (e.value = "rgba(0, 0, 0, 0.2)", c.add(a, "image", f, null, function (d) {
                a.log("Got image response.");
                e.value = b.createPattern(d, "repeat");
                c.emit("reformat", a)
            }))
        }
    }

    function je(a) {
        return a.pa("zIndex") || 0
    }

    function pd(a, b) {
        a.ea.matrix = b
    }

    function he(a) {
        return a.ea.matrix.inverse()
    }

    function ke(a) {
        return null !== a.parent && null !== a.parent.parent && "PageNode" !== a.parent.type()
    }

    function le(a) {
        return void 0 !== a.children
    }

    function me(a) {
        return (a = a.pa("layer")) ? "" + a : "default"
    }

    function Bd(a, b) {
        for (var c in b)b.hasOwnProperty(c) && a.setProperty(c, b[c])
    }

    function fe(a) {
        var b = {}, c;
        for (c in a.ea)a.ea.hasOwnProperty(c) && (b[c] = a.pa(c));
        return b
    }

    function ne(a, b) {
        for (var c in b)b.hasOwnProperty(c) && (a.ea[c] = b[c])
    }

    function de(a, b, c, d) {
        a.id = b;
        a.la = c;
        a.ea = {};
        ne(a, ee);
        a.rect = new M(0, 0, 1, 1);
        a.ea.matrix = new O;
        a.ea.layer = "default";
        a.parent = null;
        a.constructor = d;
        a.qa = !1;
        a.ab = new M(0, 0, 1, 1)
    }

    var oe = {};

    function pe(a, b, c) {
        var d = [{}, ce.prototype];
        c && d.push(c.prototype);
        d.push(b.prototype);
        b.prototype = q.aa.apply(null, d);
        oe[a] = b
    }

    function Ad(a, b, c) {
        return a in oe ? new oe[a](b, c) : null
    };
    function qe(a, b) {
        de(this, a, b, qe);
        this.parent = null;
        this.children = []
    }

    n = qe.prototype;
    n.type = function () {
        return "GroupNode"
    };
    n.clone = function (a) {
        for (var b = new qe(a(), this.la), c = 0; c < this.children.length; c++) {
            var d = this.children[c].clone(a);
            d.parent = b;
            b.children.push(d)
        }
        return b
    };
    n.format = function (a, b) {
        for (var c = 0; c < this.children.length; c++)this.children[c].format(a, b), 0 === c ? this.rect = this.children[c].rect.clone() : Mc(this.rect, this.children[c].rect)
    };
    n.na = function (a) {
        for (var b = 0; b < this.children.length; b++)this.children[b].na(a)
    };
    n.bb = function (a, b) {
        for (var c = this.children.length - 1; 0 <= c; c--) {
            var d = this.children[c].bb(a, b);
            if (d)return d
        }
        return null
    };
    function re(a, b) {
        for (var c = 0; c < a.children.length; c++)if (b === a.children[c])return c;
        return -1
    }

    pe("GroupNode", qe);
    function se(a, b) {
        de(this, a, b, se);
        this.children = []
    }

    se.prototype = {
        log: t("PAGE", !0), type: function () {
            return "PageNode"
        }, format: function () {
        }, bb: function () {
            return null
        }, na: function () {
        }
    };
    pe("PageNode", se, qe);
    function te(a, b) {
        de(this, a, b, te);
        this.aa = null
    }

    te.prototype = {
        log: t("CUSTOM"), type: function () {
            return "CustomNode"
        }, setProperty: function (a, b) {
            var c;
            null === this.aa && "type" === a && (c = ue[b], this.aa = new c);
            this.aa && this.aa.setProperty ? this.aa.setProperty(a, b) : ce.prototype.setProperty.call(this, a, b)
        }, pa: function (a) {
            return this.aa && this.aa.setProperty ? this.aa.getProperty(a) : ce.prototype.pa.call(this, a)
        }, format: function (a) {
            "format" in this.aa ? this.aa.format(a) : alert("Error: custom item must have a format(ctx) function");
            a = this.aa.rect;
            this.rect = new M(a.x,
                a.y, a.width, a.height)
        }, na: function (a) {
            this.aa.draw(a)
        }
    };
    pe("CustomNode", te);
    function ve(a, b) {
        de(this, a, b, ve);
        this.ea.data = "";
        this.ea.locked = !1;
        this.element = null;
        this.ka = void 0;
        this.da = null;
        this.aa = new O;
        this.ma = !1
    }

    ve.prototype = {
        log: t("DomNode", !0), type: function () {
            return "DomNode"
        }, setProperty: function (a, b) {
            if ("data" === a) this.element && (q(this.element).remove(), this.ka = this.element = null); else if ("border" === a || "lockSize" === a || "lockRotate" === a) {
                this.ea[a] = b;
                return
            }
            ce.prototype.setProperty.call(this, a, b)
        }, Te: function (a) {
            this.log("Node %s receives DOM element and requests reformat", this.id);
            this.element = a;
            this.element.style.position = "absolute";
            "IFRAME" !== a.tagName && (this.element.style.pointerEvents = "none");
            this.Vc(this.ma);
            this.width = this.element.offsetWidth;
            this.height = this.element.offsetHeight;
            this.element.style.top = "0px";
            this.element.style.left = "0px";
            we(this, "transformOrigin", "top left");
            this.ba.emit("reformat", this.id)
        }, mc: function (a) {
            ce.prototype.mc.call(this, a);
            this.element && (this.element.style.visibility = this.qa ? "hidden" : "visible")
        }, Vc: function (a) {
            this.ma = a;
            this.element && this.ba && (a ? Sa(q(this.element), q(this.ba.canvas)) : ba(q(this.element), q(this.ba.canvas)))
        }, format: function (a, b) {
            null === this.element && this.ka !==
            this.pa("data") && b && (this.ka = this.pa("data"), this.ba = b, this.log("DomNode %s requests conversion to DOM element", this.id), this.ba.emit("convert-dom-request", this.ka, this.id));
            if (this.element) {
                var c = this.aa, c = c.multiply(this.Ja());
                Nc(c) ? (we(this, "transform", ""), this.element.style.left = "" + c.Da + "px", this.element.style.top = "" + c.Ea + "px") : (this.element.style.left = "0px", this.element.style.top = "0px", we(this, "transform", "matrix(" + c.m11 + "," + c.m21 + "," + c.m12 + "," + c.m22 + "," + c.Da + "," + c.Ea + ")"));
                this.rect.x = 0;
                this.rect.y =
                    0;
                this.rect.width = this.width;
                this.rect.height = this.height;
                this.element.style.visibility = this.qa ? "hidden" : "visible"
            } else this.rect.x = 0, this.rect.y = 0, this.rect.width = 100, this.rect.height = 22;
            this.da = new hd(this.rect);
            this.ab = this.rect.clone();
            this.rect.transform(this.Ja());
            this.da.transform(this.Ja());
            if (c = this.ea.border) this.rect.Hb(c), this.ta = this.da.clone(), this.ta.Hb(c / 2), this.da.Hb(c)
        }, uc: function (a) {
            !a.tc || a.tc.m11 === this.aa.m11 && a.tc.m21 === this.aa.m21 && a.tc.m12 === this.aa.m12 && a.tc.m22 === this.aa.m22 &&
            a.tc.Da === this.aa.Da && a.tc.Ea === this.aa.Ea || (this.log("Moving DOM element as result of draw zooming"), this.aa = a.tc, this.format(a, null));
            if (this.element) {
                var b = this.ea.border;
                if (b) {
                    var c = this.ta;
                    a.setTransform(1, 0, 0, 1, 0, 0);
                    a.beginPath();
                    a.lineWidth = b;
                    a.strokeStyle = "#cccccc";
                    a.moveTo(c.sa[0].x, c.sa[0].y);
                    a.lineTo(c.sa[1].x, c.sa[1].y);
                    a.lineTo(c.sa[2].x, c.sa[2].y);
                    a.lineTo(c.sa[3].x, c.sa[3].y);
                    a.lineTo(c.sa[0].x, c.sa[0].y);
                    a.closePath();
                    a.stroke()
                }
            } else a.beginPath(), a.lineWidth = 1, a.fillStyle = "#888888",
                a.strokeStyle = "#CCCCCC", a.rect(0, 0, 100, 22), a.stroke(), a.font = "20px Arial", a.textBaseline = "top", a.fillText("DomNode", 0, 0)
        }, bb: function (a, b) {
            return !this.ea.locked && this.rect.Pb(a, b) && this.da.Pb(a, b, 3) ? this : null
        }, Oe: function () {
            this.element && ba(q(this.element), q(this.ba.canvas))
        }, Pe: function () {
            this.log("Removed DOM NODE");
            this.element && q(this.element).remove()
        }
    };
    function we(a, b, c) {
        for (var d = b.charAt(0).toUpperCase() + b.substr(1), e = ["ms", "Webkit", "O", "Moz"],
                 f = 0; f < e.length; f++)a.element.style[e[f] + d] = c;
        a.element.style[b] = c
    }

    pe("DomNode", ve);
    function xe(a, b) {
        de(this, a, b, xe);
        delete this.ea.fillStyle;
        delete this.ea.strokeStyle;
        delete this.ea.lineWidth;
        this.ea.url = "";
        this.za = null;
        this.width = 100;
        this.height = 20;
        this.ka = new hd;
        this.da = [];
        this.ba = new M(0, 0, this.width, this.height);
        this.aa = new M(0, 0, this.width, this.height)
    }

    xe.prototype = {
        log: t("IMAGE", !0), type: function () {
            return "ImageNode"
        }, setProperty: function (a, b) {
            ce.prototype.setProperty.call(this, a, b);
            if ("url" === a) this.za = null; else if ("allowCrop" === a || "crop" === a || "blendMode" === a || "opacity" === a || "width" === a || "height" === a) this.ea[a] = b
        }, format: function (a, b) {
            function c(a, b, c) {
                l.da.push({x: l.aa.x + a * l.aa.width, y: l.aa.y + b * l.aa.height, bc: c})
            }

            var d, e, f, g, h, k = this;
            null === this.za && "ImageSurface" in window ? (this.za = new ImageSurface(this.ea.url), this.ba = new M(0, 0, this.za.width,
                this.za.height)) : null === this.za ? (this.ba = new M(0, 0, this.width, this.height), b.add(this.id, "image", this.ea.url, null, function (a) {
                k.log("Got image response.");
                k.za = a;
                a = k.pa("width");
                var c = k.pa("height");
                k.log("Override width/height as %s/%s", a, c);
                a && (k.za.style.width = a + "px");
                c && (k.za.style.height = c + "px");
                return b.emit("reformat", k.id)
            })) : this.ba = new M(0, 0, this.za.width, this.za.height);
            this.aa = ye(this);
            this.rect = this.aa.clone();
            if (d = this.pa("boundingPolygon")) {
                f = [];
                e = g = 0;
                for (h = d.length - 1; g <= h; e = g += 2)f.push(new y(d[e],
                    d[e + 1]));
                this.ka = new hd(f)
            } else this.ka = new hd(this.rect);
            this.ab = this.rect.clone();
            this.ka.transform(this.ea.matrix);
            this.rect.transform(this.ea.matrix);
            this.da.length = 0;
            var l = this;
            c(.5, 0, !0);
            c(1, .5, !1);
            c(.5, 1, !0);
            c(0, .5, !1)
        }, je: function () {
            return this.ka
        }, bb: function (a, b) {
            return !this.ea.locked && this.ka.Pb(a, b, 3) ? this : null
        }, uc: function (a) {
            var b, c, d, e, f = !1;
            if (this.za)try {
                var g = a.globalCompositeOperation, h = a.globalAlpha, k = this.pa("blendMode"), l = this.pa("opacity");
                k && (a.globalCompositeOperation = "" + k,
                    this.log("Using globalCompsiteOperation=%s (requested %s)", a.globalCompositeOperation, k));
                void 0 !== l && (a.globalAlpha = l);
                a.drawImage(this.za, this.aa.x, this.aa.y, this.aa.width, this.aa.height, this.aa.x, this.aa.y, this.aa.width, this.aa.height);
                a.globalAlpha = h;
                a.globalCompositeOperation = g;
                if (ze) {
                    c = this.ka.sa;
                    a.save();
                    a.setTransform(1, 0, 0, 1, 0, 0);
                    a.beginPath();
                    a.lineWidth = 2;
                    a.strokeStyle = "#000000";
                    a.moveTo(c[0].x, c[0].y);
                    b = d = 1;
                    for (e = c.length - 1; d <= e; b = d += 1)a.lineTo(c[b].x, c[b].y);
                    a.closePath();
                    a.stroke();
                    a.restore()
                }
            } catch (m) {
                this.log("Error drawing image: %s", m.message), f = m
            }
            if (null === this.za || f) a.save(), a.lineWidth = 1, a.strokeStyle = "#cccccc", a.strokeRect(0, 0, this.width, this.height), a.restore()
        }, Oc: function () {
            return !0 === this.pa("allowCrop") && !0 !== this.pa("lockEditMode")
        }, Dd: function (a, b) {
            a.save();
            a.beginPath();
            a.lineWidth = 1 * b;
            a.strokeStyle = "#0050B7";
            for (var c = this.Ja(), d = 0; d < this.da.length; d++) {
                var e = this.da[d], f = c.apply(e.x, e.y), g, h, k, l;
                e.bc ? (g = 20, k = h = 0, l = 3, e = f.x - 10, f = f.y - 6) : (g = 0, h = 20, k = 3, l = 0, e = f.x -
                    6, f = f.y - 10);
                for (var m = 0; 5 > m; m++)a.moveTo(e, f), a.lineTo(e + g * b, f + h * b), e += k * b, f += l * b
            }
            a.stroke();
            a.restore()
        }, Wb: function (a, b, c) {
            var d = this.Ja();
            c = 10 * c;
            for (var e = 0; e < this.da.length; e++) {
                var f = this.da[e], f = d.apply(f.x, f.y);
                if (f.x - c <= a && a < f.x + c && f.y - c <= b && b < f.y + c)return e
            }
            return null
        }, Gd: function (a) {
            a = this.da[a];
            return this.Ja().apply(a.x, a.y)
        }, Bc: function (a, b, c) {
            var d = ye(this);
            b = he(this).apply(b, c);
            0 === a && 0 <= b.y ? (d.height -= b.y - d.y, d.y = b.y) : 1 === a && b.x < this.ba.width ? d.width = b.x - d.x : 2 === a && b.y < this.ba.height ?
                d.height = b.y - d.y : 3 === a && 0 <= b.x && (d.width -= b.x - d.x, d.x = b.x);
            d.x = Math.max(d.x, 0);
            d.y = Math.max(d.y, 0);
            d.width = Math.min(d.width, this.ba.width);
            d.height = Math.min(d.height, this.ba.height);
            d.width = Math.max(1, d.width);
            d.height = Math.max(1, d.height);
            this.ea.crop = [d.x, d.y, d.width, d.height].join()
        }
    };
    function ye(a) {
        var b = a.ea.crop;
        a = new M(0, 0, a.ba.width, a.ba.height);
        b && (b = b.split(","), a.x = parseFloat(b[0]) | 0, a.y = parseFloat(b[1]) | 0, a.width = parseFloat(b[2]) | 0, a.height = parseFloat(b[3]) | 0);
        return a
    }

    var ze = !1;
    pe("ImageNode", xe);
    function Ae(a, b) {
        de(this, a, b, Ae);
        this.log("New StampLineNode created.");
        this.ea.x1 = 10;
        this.ea.y1 = 10;
        this.ea.x2 = 100;
        this.ea.y2 = 100;
        this.ea.url = "wd-box.png";
        this.za = null;
        this.aa = this.da = 20;
        this.ba = new hd
    }

    Ae.prototype = {
        log: t("STAMPLINE", !0), type: function () {
            return "StampLineNode"
        }, format: function (a, b) {
            var c, d, e = this;
            null === this.za ? (b.add(this.id, "image", this.ea.url, null, function (a) {
                e.log("Got image response.");
                e.za = a;
                return b.emit("reformat", e)
            }), this.aa = this.da = 20) : (this.da = this.za.width, this.aa = this.za.height);
            this.Sb = this.ea.x1;
            this.Tb = this.ea.y1;
            this.rc = this.ea.x2;
            this.sc = this.ea.y2;
            d = K(this.Sb, this.Tb, this.rc, this.sc);
            c = -Math.atan2(this.sc - this.Tb, this.rc - this.Sb);
            this.ba = new hd;
            this.ba.add(0, -this.aa /
                2);
            this.ba.add(d, -this.aa / 2);
            this.ba.add(d, this.aa / 2);
            this.ba.add(0, this.aa / 2);
            d = new O;
            d = d.multiply(this.Ja());
            d = d.multiply(new E(this.Sb, this.Tb));
            d = d.multiply(new N(c, 0, 0));
            this.ba.transform(d);
            this.rect = Jc(this.ba.sa)
        }, bb: function (a, b) {
            return !this.ea.locked && this.ba.Pb(a, b, 3) ? this : null
        }, Oc: function () {
            return !0
        }, Wb: function (a, b, c) {
            var d, e;
            d = this.Ja();
            e = d.apply(this.Sb, this.Tb);
            d = d.apply(this.rc, this.sc);
            c = 8 * c;
            return a >= e.x - c && a < e.x + c && b >= e.y - c && b < e.y + c ? 0 : a >= d.x - c && a < d.x + c && b >= d.y - c && b < d.y + c ? 1 : null
        },
        Gd: function (a) {
            return 0 === a ? this.Ja().apply(this.ea.x1, this.ea.y1) : this.Ja().apply(this.ea.x2, this.ea.y2)
        }, Bc: function (a, b, c) {
            b = he(this).apply(b, c);
            0 === a ? (this.ea.x1 = b.x, this.ea.y1 = b.y) : 1 === a && (this.ea.x2 = b.x, this.ea.y2 = b.y)
        }, Dd: function (a, b) {
            var c, d, e;
            a.save();
            a.lineWidth = 1 * b;
            a.strokeStyle = "#0050B7";
            c = this.Ja();
            e = c.apply(this.Sb, this.Tb);
            c = c.apply(this.rc, this.sc);
            d = 4 * b;
            a.beginPath();
            a.moveTo(e.x, e.y);
            a.lineTo(c.x, c.y);
            a.rect(e.x - d, e.y - d, 2 * d, 2 * d);
            a.rect(c.x - d, c.y - d, 2 * d, 2 * d);
            a.stroke();
            a.restore()
        },
        uc: function (a) {
            var b, c, d, e;
            b = (new y(this.Sb, this.Tb)).Ra(new y(this.rc, this.sc));
            c = new N(-Math.atan2(this.sc - this.Tb, this.rc - this.Sb), this.Sb, this.Tb);
            c = c.multiply(new E(this.Sb, this.Tb));
            a.transform(c.m11, c.m21, c.m12, c.m22, c.Da, c.Ea);
            a.beginPath();
            c = d = 0;
            for (e = this.da; 0 < e ? d <= b : d >= b; c = d += e)this.za ? this.da < b - c ? a.drawImage(this.za, c, -this.aa / 2 | 0) : 1 < b - c && a.drawImage(this.za, 0, 0, b - c | 0, this.aa, c, -this.aa / 2 | 0, b - c | 0, this.aa) : a.rect(c, 0, this.da, this.aa);
            if (null === this.za)return a.lineWidth = 2, a.strokeStyle =
                "red", a.stroke()
        }
    };
    pe("StampLineNode", Ae);
    function Be(a, b) {
        de(this, a, b, Be);
        this.ba = "UnknownNode";
        this.width = 100;
        this.height = 20;
        this.aa = new ae;
        be(this.aa, "centre", "middle")
    }

    Be.prototype = {
        log: t("UNKNOWN", !0), type: function () {
            return this.ba
        }, setProperty: function (a, b) {
            this.ea[a] = b
        }, format: function (a) {
            this.log("Formatting placeholder for %s", this.ba);
            this.rect = new M(0, 0, this.width, this.height);
            this.rect.transform(this.ea.matrix);
            this.aa.format(a, this.width, this.height)
        }, uc: function (a) {
            this.log("Drawing placeholder for for %s", this.ba);
            a.save();
            a.lineWidth = 1;
            a.fillStyle = "#888888";
            a.fillRect(0, 0, this.width, this.height);
            a.fillStyle = "#000000";
            this.aa.na(a, 0, 0);
            a.restore()
        }
    };
    pe("UnknownNode", Be);
    function Ce(a, b) {
        de(this, a, b, Ce);
        this.log("New WallNode created.");
        this.ea.svgpath = "";
        this.ea.strokeStyle = "#000000";
        this.ea.lineWidth = 1;
        this.ea.pixelsPerUnit = 1;
        this.ea.units = "px";
        this.ea.fontSize = 15;
        this.ea.fontName = "Arial";
        this.ea.textFillStyle = "#000000";
        this.ea.insideFillStyle = "rgba(0,0,0,0.0)";
        this.ea.fillStyle = "rgba(0,0,0,0.0)";
        this.ea.thickness = 10;
        this.ea.placement = "middle";
        this.ea.lockCorners = !1;
        this.font = "";
        this.rect = new M(0, 0, 0, 0);
        this.ab = new M(0, 0, 0, 0);
        this.path = null;
        this.aa = [];
        this.Fb = [];
        this.nb = [];
        this.oa = null
    }

    Ce.prototype = {
        log: t("WallNode", !0), type: function () {
            return "WallNode"
        }, resolve: function (a) {
            var b = a.je().clone();
            this.log("Resolve with: %s %s", a.type(), b.sa);
            b.transform(he(this));
            this.aa.push(b);
            a = a.rect;
            b = this.rect;
            return a.x > b.x + b.width || b.x > a.x + a.width || a.y > b.y + b.height || b.y > a.y + a.height ? !1 : !0
        }, format: function (a, b) {
            this.oa = a;
            var c = new y(0, 0), d = [], e = null, f = this.Ja(), g = [], h = [], k, l = this, m = {
                moveTo: function (a, b) {
                    c = f.apply(a, b);
                    g.push(new y(a, b));
                    h.push(c);
                    e = null;
                    m.moveTo = m.lineTo
                }, lineTo: function (a,
                                     b) {
                    var l = f.apply(a, b);
                    e ? e = new Zd(e, l) : k = e = new Zd(c, l);
                    g.push(new y(a, b));
                    h.push(l);
                    c = l;
                    d.push(e)
                }, vc: function () {
                }, closePath: function () {
                    l.log("close");
                    k && e !== k && (l.log("close up!"), k.Rb = e, e.next = k, e.ia = k.va)
                }
            };
            this.Fb = d;
            this.path = new lc;
            this.log("Formatting svgpath=%s", this.pa("svgpath"));
            kd(this.path, this.pa("svgpath"));
            var p;
            for (p = 0; p < this.aa.length; p++)this.log("path: %s", this.path.ec()), this.log("poly: %s", this.aa[p].ec()), this.path = bd(this.path, this.aa[p]);
            this.path.na(m);
            this.ab = Jc(g);
            this.rect =
                Jc(h);
            this.path.transform(this.Ja());
            this.lineWidth = p = this.pa("lineWidth");
            this.rect.Hb(p / 2, p / 2);
            this.ba = this.pa("thickness");
            this.rect.Hb(2 * this.ba);
            this.rect.Hb(3 * this.ea.fontSize);
            this.font = "" + this.ea.fontSize + 'px "' + this.ea.fontName + '"';
            for (p = 0; p < this.Fb.length; p++)De(this, a, this.Fb[p]);
            var r;
            this.nb.length = 0;
            var u;
            for (p = 0; p < d.length; p++)r = d[p], u !== r.va && this.nb.push(new $d(r, "from")), this.nb.push(new $d(r, "to")), u = r.ia;
            for (p = 0; p < d.length; p++)r = d[p], this.nb.push(new $d(r, "middle"));
            u = this.pa("insideFillStyle");
            ie(this, a, b, u);
            this.aa.length = 0
        }, na: function (a) {
            var b;
            a.save();
            a.lineJoin = "square";
            a.lineCap = "square";
            a.strokeStyle = this.pa("strokeStyle");
            a.lineWidth = this.pa("lineWidth");
            a.beginPath();
            Ee(this, a);
            b = this.Aa.insideFill;
            a.fillStyle = b ? b.value : "magenta";
            a.fill();
            a.beginPath();
            var c = [], d, e;
            for (b = 0; b < this.Fb.length; b++)e = this.Fb[b], d !== e.va && (oc(a, c, this.pa("thickness"), this.pa("placement")), c.length = 0, c.push(e.va)), c.push(e.ia), d = e.ia;
            oc(a, c, this.pa("thickness"), this.pa("placement"));
            a.fillStyle = this.pa("fillStyle");
            a.strokeStyle = this.pa("strokeStyle");
            a.fill();
            a.stroke();
            a.fillStyle = a.strokeStyle;
            if (0 < this.pa("pixelsPerUnit"))for (a.textBaseline = "alphabetic", a.fillStyle = this.pa("textFillStyle"), a.strokeStyle = this.pa("textFillStyle"), a.font = this.font, b = 0; b < this.Fb.length; b++)if (d = e = this.Fb[b], c = a, "" !== d.text && (e = K(d.va.x, d.va.y, d.ia.x, d.ia.y), !(e < d.xd))) {
                c.save();
                var f = 2 * d.Rd, g = L(d.va.x, d.va.y, d.ia.x, d.ia.y), h = new y(g.y, -g.x),
                    k = Math.atan2(d.ia.y - d.va.y, d.ia.x - d.va.x);
                0 > k && (k += 2 * Math.PI);
                d.Xe && (f *= -1);
                var l = (e -
                        d.xd) / 2, m = new y(d.va.x + h.x * f, d.va.y + h.y * f),
                    p = new y(d.ia.x + h.x * f, d.ia.y + h.y * f);
                c.beginPath();
                c.moveTo(m.x - h.x * f / 4 + g.x * f / 4, m.y - h.y * f / 4 + g.y * f / 4);
                c.lineTo(m.x, m.y);
                c.lineTo(m.x + h.x * f / 4 + g.x * f / 4, m.y + h.y * f / 4 + g.y * f / 4);
                c.moveTo(p.x - h.x * f / 4 - g.x * f / 4, p.y - h.y * f / 4 - g.y * f / 4);
                c.lineTo(p.x, p.y);
                c.lineTo(p.x + h.x * f / 4 - g.x * f / 4, p.y + h.y * f / 4 - g.y * f / 4);
                c.moveTo(m.x, m.y);
                c.lineTo(m.x + g.x * l, m.y + g.y * l);
                c.moveTo(p.x, p.y);
                c.lineTo(p.x - g.x * l, p.y - g.y * l);
                c.stroke();
                k > Math.PI / 2 && k < 3 * Math.PI / 2 && (k += Math.PI);
                c.translate(m.x + g.x * e / 2, m.y +
                    g.y * e / 2);
                c.rotate(k);
                c.translate(-d.xd / 2, d.Rd / 2 * .8);
                c.fillText(d.text, 0, 0);
                c.restore()
            }
            a.restore()
        }, bb: function (a, b) {
            var c = 6 + 2 * this.pa("thickness");
            return "rgba(0,0,0,0.0)" === this.pa("fillStyle") ? !this.qa && !this.pa("locked") && this.rect.Pb(a, b, c) && cd(this.path, a, b, c) ? this : null : !this.qa && !this.pa("locked") && this.rect.Pb(a, b, c) && dd(this.path, a, b, c) ? this : null
        }, Wb: function (a, b, c) {
            var d = this.pa("thickness"), e = this.pa("wallPlacement");
            c = 6 / c + d;
            for (var f = this.ea.lockCorners, g = 0; g < this.nb.length; g++)if (this.nb[g].bb(a,
                    b, c, e, d) && (!f || "middle" === this.nb[g].type))return g;
            return null
        }, Oc: function () {
            return !1
        }, Gd: function (a) {
            if (a >= this.nb.length) this.log("Bad edit handle %s", a); else {
                a:switch (a = this.nb[a], a.type) {
                    case "from":
                        a = a.Na.va;
                        break a;
                    case "to":
                        a = a.Na.ia;
                        break a;
                    default:
                        a = a.Na.va
                }
                return a
            }
        }, Ac: function (a) {
            return null !== a && a < this.nb.length ? this.nb[a].type : null
        }, Bc: function (a, b, c) {
            if (a >= this.nb.length) this.log("Bad edit handle %s", a); else {
                this.nb[a].moveTo(b, c);
                for (a = 0; a < this.Fb.length; a++)b = this.Fb[a], b.Ld && De(this,
                    this.oa, b);
                this.log("Reconstruct path!");
                a = new ld;
                b = this.Ja().inverse();
                a.transform(b.m11, b.m21, b.m12, b.m22, b.Da, b.Ea);
                Ee(this, a);
                this.setProperty("svgpath", a.toString())
            }
        }
    };
    function ud(a, b, c, d, e, f) {
        if (b >= a.nb.length)return new y(0, 0);
        b = a.nb[b].Na;
        var g = a.pa("placement");
        "middle" === g ? d -= a.ba / 2 : "outside" === g && (d -= a.ba);
        "middle" === c ? d += a.ba / 2 : "outside" === c && (d += a.ba);
        a = L(b.va.x, b.va.y, b.ia.x, b.ia.y);
        var h = new y(a.y, -a.x);
        a = b.va.x + d * h.x;
        c = b.va.y + d * h.y;
        g = b.ia.x + d * h.x - a;
        d = b.ia.y + d * h.y - c;
        e = ((e - a) * g + (f - c) * d) / (g * g + d * d);
        1 < e ? e = 1 : 0 > e && (e = 0);
        return new y(a + e * g, c + e * d)
    }

    function Ee(a, b) {
        var c = null, d, e, f;
        for (e = 0; e < a.Fb.length; e++)d = a.Fb[e], c !== d.va && (b.moveTo(d.va.x, d.va.y), f = d.va), b.lineTo(d.ia.x, d.ia.y), d.ia === f && b.closePath(), c = d.ia
    }

    function De(a, b, c) {
        c.Ld = !1;
        if (0 >= a.ea.pixelsPerUnit) c.text = "", c.xd = 0, c.Rd = 0; else {
            var d = K(c.va.x, c.va.y, c.ia.x, c.ia.y) / a.ea.pixelsPerUnit;
            if ("ft-in" === a.ea.units) {
                var e = Math.floor(d), d = Math.round(12 * (d - e));
                12 === d && (d = 0, e += 1);
                d = d ? " " + e + "'" + d + '" ' : " " + e + "' "
            } else e = Math.pow(10, 1), d = Math.round(d * e) / e, d = " " + d + a.ea.units + " ";
            b.font = a.font;
            b = b.measureText(d).width;
            a = a.ea.fontSize;
            c.text = d;
            c.xd = b;
            c.Rd = a
        }
        c.Xe = !1
    }

    pe("WallNode", Ce);
    function Fe(a, b) {
        de(this, a, b, Fe);
        ne(this, Ge);
        this.ea.text = "lorum ipsum dolor";
        this.aa = new ae;
        this.Ie = 0;
        this.border = {lineWidth: 0}
    }

    Fe.prototype = {
        log: t("TEXT", !0), type: function () {
            return "TextNode"
        }, setProperty: function (a, b) {
            this.ea[a] = b;
            if ("fontName" === a || "text" === a) this.path = null;
            "textFillStyle" === a ? this.ea.fillStyle = b : "fillStyle" === a && (this.ea.textFillStyle = b)
        }, format: function (a) {
            var b, c = this.aa;
            b = this.ea.fontSize;
            var d = this.ea.bold, e = this.ea.italic;
            c.ma = this.ea.fontName;
            c.fontSize = b;
            c.ka = d;
            c.qa = e;
            c = this.ea.text;
            c.length && 10 === c.charCodeAt(c.length - 1) && (c = c.substr(0, c.length - 1));
            this.aa.text = c;
            b = this.ea.matrix;
            c = b.apply(0, 0);
            b = b.apply(1, 0);
            c = c.Ra(b);
            b = this.pa("wrap");
            d = !1 !== this.pa("scaleFont");
            be(this.aa, this.ea.textAlign, "top");
            b ? (b = this.ea.baseWidth, void 0 === b && (this.aa.format(a, 0, 0), b = Math.max(this.aa.rect.width, 10), 500 < b && (b = 500), this.ea.baseWidth = b, this.log("Formatting text for first time; baseWidth=%s", b)), c = Math.ceil(c * b), this.aa.format(a, c, 0), a = this.aa.rect.height, this.ab = new M(0, 0, b, a)) : d ? (this.aa.format(a, 0, 0), c = this.aa.rect.width, a = this.aa.rect.height, this.ab = new M(0, -(0 + this.pa("fontSize")), c, a)) : (this.aa.format(a,
                0, 0), c = this.aa.rect.width, a = this.aa.rect.height, this.ab = new M(0, 0, c, a));
            a = new hd(this.ab);
            a.transform(this.Ja());
            this.rect = Jc(a.sa);
            this.Ie = this.rect.height;
            this.rect.height += 1.3 * this.ea.fontSize;
            a = this.pa("lineWidth") + 0;
            this.rect.Hb(a, a);
            if (this.ea.border) {
                a = {lineWidth: 0, Ua: "#000000"};
                c = this.ea.border.split(" ");
                for (b = 0; b < c.length; b++)if (d = parseFloat(c[b]), isNaN(d)) {
                    if (d = Q(c[b], !0)) a.Ua = d.toString()
                } else a.lineWidth = d;
                this.border = a
            } else this.border = {lineWidth: 0}
        }, Ja: function () {
            return !1 === this.pa("scaleFont") ?
                Pc(ce.prototype.Ja.call(this)) : ce.prototype.Ja.call(this)
        }, na: function (a) {
            if (0 !== this.ea.text.length) {
                a.save();
                this.pa("wrap") ? Qc(Pc(this.Ja()), a) : Qc(this.Ja(), a);
                var b = this.ea.background;
                if (b || this.border.lineWidth) a.save(), b && (a.fillStyle = b, a.fillRect(this.ab.x, this.ab.y, this.ab.width, this.ab.height)), this.border.lineWidth && (a.beginPath(), a.strokeStyle = this.border.Ua, a.lineWidth = this.border.lineWidth, a.rect(this.ab.x, this.ab.y, this.ab.width, this.ab.height), a.stroke()), a.restore();
                a.strokeStyle =
                    this.ea.strokeStyle;
                a.fillStyle = this.ea.fillStyle;
                a.lineWidth = this.ea.lineWidth;
                b = 0;
                this.ea.wrap || !1 === this.pa("scaleFont") || (b = -(0 + this.pa("fontSize")));
                this.ea.shadow && (a.shadowOffsetX = 3, a.shadowOffsetY = 3, a.shadowBlur = 5, a.shadowColor = "rgba(0,0,0,0.5)");
                0 < this.ea.lineWidth && this.aa.strokeText(a, 0, b);
                this.aa.fillText(a, 0, b);
                a.restore()
            }
        }
    };
    Fe.prototype = q.aa({}, ce.prototype, Fe.prototype);
    var Ge = {
        textFillStyle: "#000000",
        fontName: "Arial",
        fontSize: 20,
        lineWidth: 0,
        fillStyle: "#000000",
        wrap: !1,
        textAlign: "left",
        bold: !1,
        italic: !1,
        background: "rgba(0,0,0,0.0)"
    };
    pe("TextNode", Fe);
    function He(a, b) {
        de(this, a, b, He);
        ne(this, Ie);
        this.ea.closed = !1;
        this.ea.commands = [];
        this.aa = [];
        this.ta = 0;
        this.ea.seed = 0;
        this.ba = new Fe(0, b);
        this.ba.setProperty("text", this.ea.text);
        this.da = [];
        this.Ka = [];
        this.$a = !1;
        this.inverse = null
    }

    var Ie = {
        strokeStyle: "#000000",
        fillStyle: "#ffffff",
        textFillStyle: "#000000",
        fontName: "Arial",
        fontSize: 20,
        lineWidth: 2,
        dashes: "",
        shapeWidth: 0,
        smoothness: .3,
        sloppiness: 0,
        shadow: !1,
        closed: !1,
        arrowSize: 0,
        arrowXOffset: null,
        arrowStyle: "simple",
        doubleArrow: !1,
        text: "",
        roundRadius: 0,
        wrap: !1,
        angleArcs: 0
    }, ic = 2, Je = [2, 2, 4, 5, 6, 2, 4, 0, 6];
    n = He.prototype;
    n.log = t("PATHNODE");
    n.moveTo = function (a, b) {
        var c = this.ea.commands;
        c.push(0);
        c.push(a);
        c.push(b)
    };
    n.vc = function (a, b, c, d, e, f) {
        var g = this.ea.commands;
        g.push(4);
        g.push(e);
        g.push(f);
        g.push(a);
        g.push(b);
        g.push(c);
        g.push(d)
    };
    n.type = function () {
        return "PathNode"
    };
    n.Jd = function () {
        return !0
    };
    n.setProperty = function (a, b) {
        ce.prototype.setProperty.apply(this, arguments);
        if ("fontName" === a || "fontSize" === a || "text" === a || "wrap" === a) this.ba.setProperty(a, b); else if ("textFillStyle" === a) this.ba.setProperty("fillStyle", b); else if ("textBackground" === a) this.ba.setProperty("background", b); else if ("spotHighlight" === a) this.ea.spotHighlight = !0; else if ("cloudRadius" === a || "waveRadius" === a || "doubleLine" === a || "doubleLineDashSide" === a) this.ea[a] = b
    };
    n.Gd = function (a) {
        for (var b = 0, c = this.ea.commands, d = a / 3 | 0, e = 0; e < d | 0; e++)b += Je[c[b]] + 1;
        e = a % 3 * 2 + 1;
        d = c[b + e];
        b = c[b + e + 1];
        this.log("getEditHandle(%s) = (%s, %s)", a, d, b);
        return this.Ja().apply(d, b)
    };
    n.Bc = function (a, b, c) {
        for (var d = 0, e = this.ea.commands, f = a / 3 | 0, g = 0; g < f; g++)d += Je[e[d]] + 1;
        f = this.inverse.apply(b, c);
        g = a % 3 * 2 + 1;
        e[d + g] = f.x;
        e[d + g + 1] = f.y;
        if (0 === a && this.ea.closed) {
            for (a = null; d < e.length;)f = Je[e[d]], 2 <= f && (a = d), d += f + 1;
            a && (d = a, f = this.inverse.apply(b, c), e[d + 1] = f.x, e[d + 2] = f.y)
        }
    };
    n.format = function (a, b) {
        this.origin = null;
        this.aa.length = 0;
        this.inverse = this.ea.matrix.inverse();
        for (var c = new y(0, 0), d = this.ea.commands, e = null, f, g, h = this.ea.matrix, k = new ja(this.ea.seed),
                 l = this.Ka.length = 0; l < d.length;) {
            switch (d[l++]) {
                case 0:
                    c = h.apply(d[l++], d[l++]);
                    this.aa.push(new Qb(0, c));
                    null === this.origin && (this.origin = c);
                    this.Ka.push(c);
                    break;
                case 1:
                    c = h.apply(d[l++], d[l++]);
                    this.aa.push(new Rb(e, c, k, this.ea.sloppiness, this.ea.roundRadius));
                    this.Ka.push(c);
                    break;
                case 2:
                    c = h.apply(d[l++], d[l++]);
                    f = h.apply(d[l++], d[l++]);
                    this.aa.push(new Tb(e, f, c));
                    break;
                case 3:
                    c = h.apply(d[l++], d[l++]);
                    f = h.apply(d[l++], d[l++]);
                    e = d[l++];
                    this.aa.push(new Ub(0, f, c, e));
                    break;
                case 4:
                    c = h.apply(d[l++], d[l++]);
                    f = h.apply(d[l++], d[l++]);
                    g = h.apply(d[l++], d[l++]);
                    this.aa.push(new Vb(e, f, g, c));
                    break;
                case 8:
                    c = h.apply(d[l++], d[l++]);
                    f = h.apply(d[l++], d[l++]);
                    g = h.apply(d[l++], d[l++]);
                    this.aa.push(new Wb(e, f, g, c));
                    break;
                case 5:
                    c = h.apply(d[l++], d[l++]);
                    this.aa.push(new Sb(e, c, this.ea.smoothness));
                    break;
                case 6:
                    c = h.apply(d[l++],
                        d[l++]);
                    f = h.apply(d[l++], d[l++]);
                    this.aa.push(new Xb(e, f, c, k, this.ea.sloppiness));
                    break;
                case 7:
                    this.ea.closed = !0;
                    break;
                default:
                    l++
            }
            e = this.aa[this.aa.length - 1]
        }
        this.ea.closed && 3 <= this.aa.length && this.aa[1].td && (this.aa[1].td(e), e.ia = this.origin);
        this.ta = this.aa.length;
        Ke(this, k);
        this.rect.x = this.origin.x;
        this.rect.y = this.origin.y;
        this.rect.width = 0;
        this.rect.height = 0;
        c = this.ea.dashes.split(",");
        this.ka = [];
        for (l = 0; l < c.length; l++)d = parseFloat(c[l]), isNaN(d) || this.ka.push(d);
        l = this.ka.length ? ic : 8;
        this.ma =
            gc(hc(this, !0), l);
        c = 0 + this.pa("shapeWidth");
        if (0 < c) {
            h = this.ma;
            this.log("ConvertToRects: width=%s", c);
            var d = 0, h = h.fa, m, p;
            for (f = new lc; d < h.length;) {
                this.log("cmd %s %s %s", h[d], h[d + 1], h[d + 2]);
                switch (h[d]) {
                    case $b:
                        m = h[d + 1];
                        p = h[d + 2];
                        break;
                    case ac:
                        k = h[d + 1];
                        e = h[d + 2];
                        this.log("(%s,%s-%s,%s)", m, p, k, e);
                        if (0 < K(m, p, k, e)) {
                            var r = L(m, p, k, e);
                            g = r.y * c / 2;
                            r = -r.x * c / 2;
                            f.moveTo(m + g, p + r);
                            f.lineTo(k + g, e + r);
                            f.lineTo(k - g, e - r);
                            f.lineTo(m - g, p - r);
                            f.closePath()
                        }
                        m = k;
                        p = e
                }
                d += dc[h[d]]
            }
            this.ma = f
        }
        this.rect = ed(this.ma, l);
        m = this.rect.width -
            2 * (this.ea.lineWidth / 2 + 1);
        p = this.ea.lineWidth;
        c = this.ma.clone();
        c.transform(he(this));
        this.ab = ed(c, l);
        l = Oc(this.Ja());
        this.ab.Hb(Math.ceil(p / l.x), Math.ceil(p / l.y));
        this.rect.Hb(p + 1, p + 1);
        8 > this.rect.width && (this.rect.x += this.rect.width / 2 - 4, this.rect.width = 8);
        8 > this.rect.height && (this.rect.y += this.rect.height / 2 - 4, this.rect.height = 8);
        "" !== this.ea.text && (p = Kc(this.rect), this.ba.setProperty("textAlign", "centre"), this.ba.setProperty("baseWidth", m), this.ba.format(a, b), m = p.x - this.ba.rect.x - this.ba.rect.width /
            2, p = p.y - this.ba.rect.y - this.ba.Ie / 2, this.ba.transform(new E(m, p), new E(-m, -p)), this.ba.format(a, b));
        this.$a = 0 === Q(this.ea.fillStyle).values[3];
        this.da.length = 0;
        0 < this.ea.angleArcs ? (this.da.push(new Yb(this)), this.da[this.da.length - 1].Bb = this.ea.angleArcs) : 0 < this.ea.cloudRadius ? this.da.push(new ec(this)) : 0 < this.ea.waveRadius ? this.da.push(new qc(this)) : this.ea.doubleLine && this.da.push(new fc(this));
        for (l = 0; l < this.da.length; l++)this.da[l].format(a)
    };
    n.le = function () {
        return this.Ka
    };
    n.Hd = function () {
        return this.ma
    };
    function Ke(a, b) {
        function c(a, c) {
            var k, r, u, v;
            a = a.clone();
            h && (a.x += c.x * f * .5, a.y += c.y * f * .5);
            k = a.x - c.x * f;
            r = a.y - c.y * f;
            u = k + c.y * e / 2;
            v = r - c.x * e / 2;
            k += -c.y * e / 2;
            r += c.x * e / 2;
            d.aa.push(new Qb(0, new y(k, r)));
            d.aa.push(new Sb(d.aa[d.aa.length - 1], a, g));
            d.aa.push(new Sb(d.aa[d.aa.length - 1], new y(u, v), g));
            "solid" === d.ea.arrowStyle && d.aa.push(new Rb(d.aa[d.aa.length - 1], new y(k, r), b, d.ea.smoothness, 0))
        }

        a.gb = 0 < a.ea.arrowSize && !a.ea.closed && 0 < a.aa.length;
        if (a.gb) {
            var d = a, e = a.ea.arrowSize, f = a.ea.arrowXOffset, g = a.ea.smoothness,
                h = a.ea.doubleLine;
            null === f && (f = e);
            var k = a.aa[a.aa.length - 1];
            c(k.ia, k.ac());
            a.ea.doubleArrow && c(a.aa[0].ia, Hc(a.aa[1].Fc()))
        }
    }

    n.close = function () {
        this.ea.commands.push(7)
    };
    n.clip = function (a) {
        if (this.ea.closed) {
            this.log("Clipping to a path");
            for (var b = 0; b < this.aa.length; b++)this.aa[b].na(a);
            a.closePath()
        }
    };
    n.uc = function (a) {
        if (!this.ea.spotHighlight) {
            var b = this.inverse;
            a.save();
            a.lineJoin = "round";
            a.transform(b.m11, b.m21, b.m12, b.m22, b.Da, b.Ea);
            a.beginPath();
            a.lineCap = "round";
            var b = !0, c;
            for (c = 0; c < this.da.length; c++)this.da[c].qe && (b = !1);
            if (b)for (c = 0; c < this.aa.length; c++)this.aa[c].na(a);
            for (c = 0; c < this.da.length; c++)this.da[c].na(a);
            if (!b && 0 < this.ea.arrowSize)for (c = this.ta; c < this.aa.length; c++)this.aa[c].na(a);
            this.ea.closed && (a.closePath(), a.fill(), a.shadowColor = "rgba(0,0,0,0.0)");
            b && (this.ka.length &&
            0 < this.ea.lineWidth ? (a.beginPath(), pc(this.ma, a, this.ka), a.lineCap = "butt") : 0 < 0 + this.pa("shapeWidth") && (a.beginPath(), this.ma.na(a)));
            0 < this.ea.lineWidth && a.stroke();
            if (this.ea.arrowSize && "solid" === this.ea.arrowStyle) {
                a.beginPath();
                for (c = this.ta; c < this.aa.length; c++)this.aa[c].na(a);
                a.fillStyle = this.ea.strokeStyle;
                a.fill()
            }
            "" !== this.ea.text && this.ba.na(a);
            a.restore()
        }
    };
    n.bb = function (a, b) {
        if (this.qa || this.pa("locked"))return null;
        var c = 12 + this.ea.shapeWidth / 2 + this.ea.lineWidth / 2;
        if (a >= this.rect.x - c && a < this.rect.x + c + this.rect.width && b >= this.rect.y - c && b < this.rect.y + c + this.rect.height)if (this.ea.closed && !this.$a) {
            if (dd(this.ma, a, b))return this
        } else if (cd(this.ma, a, b, c) || "" !== this.ea.text && this.ba.bb(a, b))return this;
        return null
    };
    function hc(a, b) {
        var c = new lc, d;
        if (0 < a.ea.arrowSize && !b)for (d = 0; d < a.ta; d++)a.aa[d].na(c); else for (d = 0; d < a.aa.length; d++)a.aa[d].na(c);
        a.ea.closed && c.closePath();
        return c
    }

    n.lineTo = function (a, b) {
        var c = this.ea.commands;
        c.push(1);
        c.push(a);
        c.push(b)
    };
    n.Cd = function (a, b) {
        var c = this.ea.commands;
        c.push(5);
        c.push(a);
        c.push(b)
    };
    n.Oc = function () {
        return !1 !== this.ea.editable && !0 !== this.ea.lockEditMode
    };
    n.Wb = function (a, b, c) {
        c = 8 * c;
        if (a >= this.origin.x - c && a < this.origin.x + c && b >= this.origin.y - c && b < this.origin.y + c)return 0;
        for (var d = 0; d < this.ta; d++) {
            var e = this.aa[d];
            if (a >= this.aa[d].ia.x - c && a < this.aa[d].ia.x + c && b >= this.aa[d].ia.y - c && b < this.aa[d].ia.y + c)return 3 * d;
            if (e.control) {
                if (a >= e.control.x - c && a < e.control.x + c && b >= e.control.y - c && b < e.control.y + c)return 3 * d + 1
            } else if (e.Ia) {
                if (a >= e.Ia.x - c && a < e.Ia.x + c && b >= e.Ia.y - c && b < e.Ia.y + c)return 3 * d + 1;
                if (a >= e.Oa.x - c && a < e.Oa.x + c && b >= e.Oa.y - c && b < e.Oa.y + c)return 3 * d + 2
            }
        }
        return null
    };
    n.Ac = function (a) {
        var b = this.ea.commands;
        a = a / 3;
        var c = 0, d = !1, e = 0, f, g;
        for (f = 0; f < b.length;) {
            g = b[f];
            if (7 === g) {
                d = !0;
                break
            }
            e += 1;
            f += Je[b[f]] + 1
        }
        0 === a && d && (a = e - 1);
        for (f = 0; f < b.length; c++) {
            var h;
            switch (b[f]) {
                case 0:
                    h = "move_to";
                    break;
                case 1:
                    h = "line_to";
                    break;
                case 2:
                    h = "quadratic_to"
            }
            if (a === c)return h;
            f += Je[b[f]] + 1
        }
        return null
    };
    n.Le = function () {
        return !0
    };
    n.Dd = function (a, b, c) {
        a.save();
        a.lineWidth = 1 * b;
        a.strokeStyle = "#0050B7";
        a.fillStyle = "#0050B7";
        b = 8 * b;
        0 === c ? a.fillRect(this.origin.x - b, this.origin.y - b, 2 * b, 2 * b) : a.strokeRect(this.origin.x - b, this.origin.y - b, 2 * b, 2 * b);
        var d = this.aa.length;
        this.ea.closed && --d;
        for (d = 1; d < this.ta; d++) {
            var e = this.aa[d];
            a.beginPath();
            if (e.control) a.arc(this.aa[d].control.x, this.aa[d].control.y, b, 0, 2 * Math.PI), a.arc(this.aa[d].control.x, this.aa[d].control.y, 2 * b, 0, 2 * Math.PI), c === 3 * d + 1 ? a.fill() : a.stroke(); else if (e instanceof Vb ||
                e instanceof Wb) {
                var f, g, h;
                f = e.Ia;
                g = e.Oa;
                h = e instanceof Vb ? e.xa.ia : e.ia;
                f && (a.moveTo(h.x, h.y), a.lineTo(f.x, f.y), a.moveTo(f.x + b, f.y), a.arc(f.x, f.y, b, 0, 2 * Math.PI), c === 3 * d + 1 ? a.fill() : a.stroke());
                a.beginPath();
                a.moveTo(e.ia.x, e.ia.y);
                a.lineTo(g.x, g.y);
                a.moveTo(g.x + b, g.y);
                a.arc(g.x, g.y, b, 0, 2 * Math.PI);
                c === 3 * d + 2 ? a.fill() : a.stroke()
            }
            c === 3 * d ? a.fillRect(this.aa[d].ia.x - b, this.aa[d].ia.y - b, 2 * b, 2 * b) : a.strokeRect(this.aa[d].ia.x - b, this.aa[d].ia.y - b, 2 * b, 2 * b)
        }
        a.restore()
    };
    function R(a) {
        void 0 === a ? this.fa = [] : this.fa = a
    }

    R.prototype = {
        da: function (a, b, c) {
            for (var d = 0, e = 0; e < a; e++)d += Je[this.fa[d]] + 1;
            this.fa[d + 1] = b;
            this.fa[d + 2] = c
        }, moveTo: function (a, b) {
            this.fa.push(0);
            this.fa.push(a);
            this.fa.push(b)
        }, lineTo: function (a, b) {
            this.fa.push(1);
            this.fa.push(a);
            this.fa.push(b)
        }, Cd: function (a, b) {
            this.fa.push(5);
            this.fa.push(a);
            this.fa.push(b)
        }, ba: function (a, b, c, d) {
            this.fa.push(2);
            this.fa.push(c);
            this.fa.push(d);
            this.fa.push(a);
            this.fa.push(b)
        }, aa: function (a, b, c, d) {
            this.fa.push(6);
            this.fa.push(c);
            this.fa.push(d);
            this.fa.push(a);
            this.fa.push(b)
        },
        vc: function (a, b, c, d, e, f) {
            this.fa.push(4);
            this.fa.push(e);
            this.fa.push(f);
            this.fa.push(a);
            this.fa.push(b);
            this.fa.push(c);
            this.fa.push(d)
        }, arcTo: function (a, b, c, d, e) {
            this.fa.push(3);
            this.fa.push(c);
            this.fa.push(d);
            this.fa.push(a);
            this.fa.push(b);
            this.fa.push(e)
        }, ka: function () {
            for (var a = [], b = 0; b < this.fa.length;) {
                for (var c = this.fa[b],
                         d = 0; d < Je[c]; d += 2)a.push(new y(this.fa[b + 1 + d], this.fa[b + 1 + d + 1]));
                b += Je[c] + 1
            }
            a = Jc(a);
            return {x: a.x, y: a.y, width: a.width, height: a.height}
        }, translate: function (a, b) {
            for (var c = 0; c <
            this.fa.length;) {
                for (var d = this.fa[c], e = 0; e < Je[d]; e += 2)this.fa[c + 1 + e] += a, this.fa[c + 2 + e] += b;
                c += Je[d] + 1
            }
        }, closePath: function () {
            this.fa.push(7)
        }, close: function () {
            this.closePath()
        }, Nb: function () {
            return this.fa
        }
    };
    function Le() {
        var a = new y(0, 0), b = new R;
        b.moveTo(a.x, a.y - 50);
        b.aa(a.x + 50, a.y - 50, a.x + 50, a.y);
        b.aa(a.x + 50, a.y + 50, a.x, a.y + 50);
        b.aa(a.x - 50, a.y + 50, a.x - 50, a.y);
        b.aa(a.x - 50, a.y - 50, a.x, a.y - 50);
        b.closePath();
        return b.Nb()
    }

    pe("PathNode", He);
    function Me(a, b, c, d, e, f) {
        this.view = a;
        this.node = null;
        this.type = b;
        this.url = c || "";
        this.ea = d || {};
        this.ka = f;
        this.ma = e;
        "wrap" in this.ea || (this.ea.wrap = this.view.ga.get("multilineText"));
        "fontSize" in this.ea || (this.ea.fontSize = this.view.ga.get("defaultFontSize"));
        this.da = new ib(this.view);
        this.view.fb(!0)
    }

    Me.prototype = {
        Db: function () {
            this.log("Entering DrawLinesBehaviour");
            this.view.canvas.style.cursor = "crosshair";
            this.view.ga.$b() || Td(this.view, "click-to-place-first-point-of-line");
            this.view.na();
            this.aa = new y(0, 0);
            this.ba = new y(0, 0);
            this.node = null;
            this.state = "start"
        }, log: t("DRAWLINES"), reset: function () {
            this.Db()
        }, hb: function (a) {
            var b;
            "touchstart" === a.type ? (b = a.changedTouches[0], b = x(this.view, b.pageX, b.pageY), this.Sa(b.x, b.y, a)) : "touchmove" === a.type ? (b = a.changedTouches[0], b = x(this.view, b.pageX, b.pageY),
                this.Wa(b.x, b.y, a)) : "touchend" === a.type && (b = a.changedTouches[0], b = x(this.view, b.pageX, b.pageY), this.Ya(b.x, b.y, a))
        }, Xa: function (a) {
            a = this.da.Xa(a);
            this.da.aa && this.node && this.reset();
            return a
        }, vb: function (a) {
            "cancel" === a && (null !== this.node && this.view.Kg && "curve" === this.type && this.ya(), null !== this.node && this.view.la.removeNode(this.node), this.view.Ga.rb ? this.view.tb.emit("goto-toolbar") : F(this.view))
        }, done: function () {
            this.view.ga.get("autoPickTool") ? (F(this.view), this.view.Rg()) : this.state = "start"
        },
        Sa: function (a, b) {
            var c = this.view.Ha(new y(a, b));
            if ("start" === this.state)if (this.aa = new y(a, b), "stampline" === this.type) this.node = Ad("StampLineNode", Ne(this.view.la), this.view.la), this.node.setProperty("x1", c.x), this.node.setProperty("y1", c.y), this.node.setProperty("x2", c.x), this.node.setProperty("y2", c.y), this.node.setProperty("url", this.url), Cd(this.view.la, this.node), Td(this.view, "click-to-set-the-end-of-the-line"), this.view.update(), this.index = 3; else {
                this.node = new He(Ne(this.view.la), this.view.la);
                this.node.setProperty("seed", Math.round(65535 * Math.random()));
                this.node.setProperty("strokeStyle", this.view.pb);
                this.node.setProperty("lineWidth", this.view.Ca.lineWidth);
                this.node.setProperty("sloppiness", this.view.Ca.sloppiness);
                this.node.setProperty("smoothness", this.view.Ca.smoothness);
                for (var d in this.ea)this.ea.hasOwnProperty(d) && this.node.setProperty(d, this.ea[d]);
                Cd(this.view.la, this.node);
                "arrow" === this.type && (this.node.setProperty("arrowSize", this.view.ga.ua.defaultArrowSize), this.node.setProperty("arrowStyle",
                    this.view.ga.ua.defaultArrowStyle), this.node.setProperty("arrowXOffset", this.view.ga.ua.defaultArrowXOffset));
                this.node.moveTo(c.x, c.y);
                Oe(this, c.x, c.y);
                this.index = 3;
                this.view.update();
                this.state = "predrag"
            } else if ("placing" === this.state)if ("arrow" !== this.type && 8 > this.aa.Ra(new y(a, b)) && 3 < this.index) this.log("Clicked close to start; automatically closing path"), this.node.close(), this.ya(), this.done(); else if (8 > this.ba.Ra(new y(a, b))) {
                if (3 < this.index) {
                    d = this.node.ea.commands;
                    for (var e = 0, f = 0; f < this.index /
                    3; f++)e += Je[d[e]] + 1;
                    d.splice(e, Je[d[e]] + 1);
                    this.ya()
                } else this.cancel();
                this.done()
            } else {
                if (this.ma) {
                    this.ya();
                    this.done();
                    return
                }
                Oe(this, c.x, c.y);
                this.index += 3;
                Dd(this.view.la, this.node.id);
                this.view.update()
            } else {
                this.log("Invalid state %s", this.state);
                return
            }
            this.ba = new y(c.x, c.y)
        }, Ya: function (a, b) {
            var c = this.aa.Ra(new y(a, b));
            this.log("onMouseUp (%s,%s) %s", a, b, this.state);
            "predrag" === this.state && (this.log("MovedBy: %s", c), 10 < c ? (this.ya(), this.done()) : (this.state = "placing", Td(this.view, "click-to-place-another-point-or-double-click-to-end-the-line")))
        },
        Wa: function (a, b, c) {
            b = this.view.Ha(new y(a, b));
            a = b.x;
            b = b.y;
            if (c.ctrlKey || this.ka) {
                c = this.ba;
                var d = Math.atan2(b - c.y, a - c.x), e = Math.PI / 8;
                d >= -e && d < e ? b = c.y : d >= e && d < 3 * e ? (a = Math.max(b - c.y, a - c.x), b = c.y + a, a = c.x + a) : d >= 3 * e && d < 5 * e ? a = c.x : d >= 5 * e && d < 7 * e ? (a = Math.max(b - c.y, c.x - a), b = c.y + a, a = c.x - a) : d >= 7 * e || d <= 7 * -e ? b = c.y : d < 5 * -e ? (a = Math.max(c.y - b, c.x - a), b = c.y - a, a = c.x - a) : d < 3 * -e ? a = c.x : (a = Math.max(c.y - b, a - c.x), b = c.y - a, a = c.x + a)
            }
            this.node && (this.node.Bc(this.index, a, b), this.node.format(this.view.oa, this.view.request), this.view.na())
        },
        zb: function () {
            this.log("onMouseClick()");
            return !0
        }, ya: function () {
            var a = this.node, b = a.aa[a.aa.length - 1];
            8 >= K(b.ia.x, b.ia.y, a.origin.x, a.origin.y) && a.close();
            this.view.la.removeNode(this.node);
            a = this.view.ga.ua.defaultArrowSize;
            b = this.node.pa("commands");
            if ("linear-bezier" === this.type) {
                for (var c = 0, d = [], e, f, g, h, k, l; c < b.length;) {
                    var m = b[c];
                    switch (m) {
                        case 0:
                            g = b[c + 1];
                            h = b[c + 2];
                            d.push(m, g, h);
                            break;
                        case 1:
                            e = b[c + 1], f = b[c + 2], void 0 !== k && d.push(4, e, f, (k + g) / 2, (l + h) / 2, (g + e) / 2, (h + f) / 2), k = g, l = h, g = e, h = f
                    }
                    c += Je[m] +
                        1
                }
                b = d
            }
            g = {
                arrowSize: "arrow" === this.type ? a : 0,
                arrowStyle: this.view.ga.ua.defaultArrowStyle,
                arrowXOffset: this.view.ga.ua.defaultArrowXOffset,
                commands: b,
                seed: this.node.pa("seed"),
                fillStyle: this.view.kb,
                strokeStyle: this.view.pb,
                lineWidth: this.view.Ca.lineWidth,
                sloppiness: this.view.Ca.sloppiness,
                smoothness: this.view.Ca.smoothness,
                layer: this.view.La
            };
            for (var p in this.ea)this.ea.hasOwnProperty(p) && (g[p] = this.ea[p]);
            this.view.ya([new C("PathNode", g)]);
            this.node = null
        }, cancel: function () {
            this.node && (this.view.la.removeNode(this.node),
                this.node = null)
        }, Ib: function () {
            this.view.canvas.style.cursor = "default";
            Td(this.view, null);
            this.view.na()
        }, Jb: function (a) {
            var b;
            a.zd ? (this.view.kb = a.Ua, this.view.wb = a.Ua, b = "fillStyle", this.log("We are drawing lines. Set strokeStyle instead of fillStyle")) : b = "strokeStyle";
            this.view.pb = a.Ua;
            this.view.setProperty(b, a.Ua)
        }, cc: function (a, b) {
            b ? (this.view.kb = Ed(this.view.kb, a), this.view.wb = Ed(this.view.wb, a)) : this.view.pb = Ed(this.view.pb, a);
            Md(this.view, a, b)
        }, Qb: function () {
            return this.type
        }, oc: function (a,
                         b) {
            this.ea[a] = b
        }
    };
    function Oe(a, b, c) {
        "curve" === a.type || "arrow" === a.type || "linear-bezier" === a.type ? a.node.Cd(b, c) : a.node.lineTo(b, c)
    };
    function S(a, b) {
        if (!a)throw b || "Assertion failed";
    }

    function Pe(a) {
        S("number" === typeof a, "Expected a number")
    }

    function ge(a) {
        return "object" === typeof a && "[object Array]" === Object.prototype.toString.apply(a)
    }

    function Qe(a) {
        return "string" === typeof a
    }

    function T(a) {
        return "number" === typeof a
    }

    function Re(a) {
        return "object" === typeof a
    };
    function V(a) {
        this.keys = {};
        1 === arguments.length && this.add(arguments[0]);
        1 === arguments.length && "object" === typeof arguments[0] && this.add(arguments[0])
    }

    V.prototype = {
        contains: function (a) {
            return a in this.keys
        }, add: function (a) {
            var b, c;
            if ("string" === typeof a || "number" === typeof a) this.keys[a] = !0; else if ("object" === typeof a)if ("[object Array]" === Object.prototype.toString.apply(a))for (c = 0; c < a.length; c++)b = a[c], this.keys[b] = !0; else for (b in a)a.hasOwnProperty(b) && (this.keys[b] = !0); else return S(!1, "Arg must be an array")
        }, remove: function (a) {
            delete this.keys[a]
        }, Nb: function () {
            var a, b;
            b = [];
            for (a in this.keys)this.keys.hasOwnProperty(a) && b.push(a);
            return b
        },
        mb: function (a) {
            for (var b in this.keys)if (this.keys.hasOwnProperty(b) && a(b))break
        }, empty: function () {
            for (var a in this.keys)if (this.keys.hasOwnProperty(a))return !1;
            return !0
        }
    };
    function Se(a) {
        var b, c;
        c = [];
        for (b in a.keys)a.keys.hasOwnProperty(b) && c.push(parseFloat(b));
        return c
    }

    function Te(a, b) {
        var c, d;
        S(b instanceof V);
        d = new V;
        for (c in a.keys)b.contains(c) || d.add(c);
        return d
    };
    function Ue(a) {
        var b = this;
        this.Kb = 0;
        "string" === typeof a ? (this.getUint8 = function () {
            S(b.Kb < b.data.length);
            return b.data.charCodeAt(b.Kb++) & 255
        }, this.data = a) : this.data = new Uint8Array(a)
    }

    Ue.prototype = {
        log: t("BinaryReader"), seek: function (a) {
            S(0 <= a && a <= this.data.length);
            var b = this.Kb;
            this.Kb = a;
            return b
        }, getUint8: function () {
            S(this.Kb < this.data.length);
            return this.data[this.Kb++]
        }, getUint16: function () {
            return (this.getUint8() << 8 | this.getUint8()) >>> 0
        }, getUint32: function () {
            return Ve(this) >>> 0
        }, getInt16: function () {
            var a = this.getUint16();
            a & 32768 && (a -= 65536);
            return a
        }, getDate: function () {
            var a = 1E3 * (4294967296 * this.getUint32() + this.getUint32()) + Date.UTC(1904, 1, 1);
            return new Date(a)
        }
    };
    function We(a, b) {
        for (var c = "", d = 0; d < b; d++)c += String.fromCharCode(a.getUint8());
        return c
    }

    function Ve(a) {
        return a.getUint8() << 24 | a.getUint8() << 16 | a.getUint8() << 8 | a.getUint8()
    }

    function Xe(a) {
        this.format = 0;
        this.aa = [];
        for (var b = 0; 256 > b; b++) {
            var c = a.getUint8();
            this.log("   Glyph[%s] = %s", b, c);
            this.aa.push(c)
        }
    }

    Xe.prototype = {
        log: t("CMAP0"), map: function (a) {
            return 0 <= a && 255 >= a ? this.aa[a] : 0
        }
    };
    function Ye(a) {
        this.format = 4;
        var b, c = [], d = a.getUint16() / 2;
        a.getUint16();
        a.getUint16();
        a.getUint16();
        for (b = 0; b < d; b++)c.push({Fe: a.getUint16()});
        a.getUint16();
        for (b = 0; b < d; b++)c[b].te = a.getUint16();
        for (b = 0; b < d; b++)c[b].Jg = a.getUint16();
        for (b = 0; b < d; b++) {
            var e = a.getUint16();
            e ? c[b].Kd = a.Kb - 2 + e : c[b].Kd = 0
        }
        this.aa = c;
        this.ba = {};
        this.da = a
    }

    Ye.prototype = {
        log: t("CMAP4"), map: function (a) {
            if (!(a in this.ba)) {
                for (var b = 0; b < this.aa.length; b++) {
                    var c = this.aa[b];
                    if (c.te <= a && c.Fe >= a) {
                        var d, e;
                        c.Kd ? (e = c.Kd + 2 * (a - c.te), this.da.seek(e), d = this.da.getUint16()) : d = c.Jg + a & 65535;
                        this.log("Charcode %s is between %s and %s; maps to %s (%s) roffset=%s", a, c.te, c.Fe, e, d, c.Kd);
                        this.ba[a] = d;
                        break
                    }
                }
                b === this.aa.length && (this.ba[a] = 0)
            }
            return this.ba[a]
        }
    };
    function Ze(a, b, c) {
        this.da = b && !c || !b && c;
        this.offset = a.Kb;
        this.ba = a.getUint16();
        a.getUint16();
        a.getUint16();
        a.getUint16();
        this.map = {};
        for (b = 0; b < this.ba; b++) {
            c = a.getUint16();
            var d = a.getUint16(), e = a.getInt16();
            this.map[c << 16 | d] = e
        }
        this.reset()
    }

    Ze.prototype = {
        log: t("KERN0"), reset: function () {
            this.aa = -1
        }, get: function (a) {
            var b = 0;
            if (0 <= this.aa) {
                var c = this.aa << 16 | a;
                c in this.map && (b = this.map[c])
            }
            this.aa = a;
            return this.da ? {x: 0, y: b} : {x: b, y: 0}
        }
    };
    function $e(a) {
        this.ba = new Ue(a);
        this.ma = [];
        this.ed = [];
        a = this.ba;
        var b = {};
        a.getUint32();
        var c = a.getUint16();
        a.getUint16();
        a.getUint16();
        a.getUint16();
        for (var d = 0; d < c; d++) {
            var e = We(a, 4);
            b[e] = {dg: a.getUint32(), offset: a.getUint32(), length: a.getUint32()};
            "head" !== e && this.log("Table %s has checksum 0x%s", e, b[e].dg.toString(16))
        }
        this.aa = b;
        a = this.ba;
        S("head" in this.aa);
        a.seek(this.aa.head.offset);
        this.version = Ve(a) / 65536;
        Ve(a);
        a.getUint32();
        this.Aa = a.getUint32();
        S(1594834165 === this.Aa);
        a.getUint16();
        this.qa =
            a.getUint16();
        a.getDate();
        a.getDate();
        this.Hh = a.getInt16();
        this.Lh = a.getInt16();
        this.Gh = a.getInt16();
        this.Kh = a.getInt16();
        a.getUint16();
        a.getUint16();
        a.getInt16();
        this.ta = a.getInt16();
        a.getInt16();
        a = this.ba;
        S("name" in this.aa);
        b = this.aa.name.offset;
        a.seek(b);
        a.getUint16();
        c = a.getUint16();
        d = a.getUint16();
        for (e = 0; e < c; e++) {
            var f = a.getUint16(), g = a.getUint16(), h = a.getUint16(), k = a.getUint16(), l = a.getUint16(),
                m = a.getUint16(), m = a.seek(b + d + m), p;
            if (0 === f || 3 === f) {
                p = a;
                for (var r = "", u = 0; u < l; u += 2)r += String.fromCharCode(p.getUint16());
                p = r
            } else p = We(a, l);
            this.log("Name %s/%s id %s language %s: %s", f, g, k, h, p);
            a.seek(m);
            switch (k) {
                case 1:
                    this.fontFamily = p;
                    break;
                case 4:
                    this.da = p
            }
        }
        a = this.ba;
        S("cmap" in this.aa);
        b = this.aa.cmap.offset;
        a.seek(b);
        a.getUint16();
        c = a.getUint16();
        for (d = 0; d < c; d++)e = a.getUint16(), g = a.getUint16(), f = a.getUint32(), this.log("CMap platformid=%s specificid=%s offset=%s", e, g, f), 3 === e && 1 >= g && (e = a, f = e.seek(b + f), g = e.getUint16(), h = e.getUint16(), e.getUint16(), k = void 0, this.log("    Cmap format %s length %s", g, h), 0 === g ? k = new Xe(e) :
            4 === g && (k = new Ye(e)), k && this.ma.push(k), e.seek(f));
        a = this.ba;
        S("hhea" in this.aa);
        a.seek(this.aa.hhea.offset);
        Ve(a);
        a.getInt16();
        a.getInt16();
        a.getInt16();
        a.getUint16();
        a.getInt16();
        a.getInt16();
        a.getInt16();
        a.getInt16();
        a.getInt16();
        a.getInt16();
        a.getInt16();
        a.getInt16();
        a.getInt16();
        a.getInt16();
        a.getInt16();
        this.ka = a.getUint16();
        a = this.ba;
        if ("kern" in this.aa)for (a.seek(this.aa.kern.offset), h = a.getUint16(), b = a.getUint16(), this.log("Kern Table version: %s", h), this.log("Kern nTables: %s", b), c = 0; c <
        b; c++)h = a.getUint16(), d = a.getUint16(), k = a.getUint16(), e = k >> 8, f = k & 4, g = 0 === (k & 1), this.log("Kerning subtable version %s format %s length %s coverage: %s", h, e, d, k), h = null, 0 === e ? h = new Ze(a, g, f) : (this.log("Unknown format -- skip"), a.seek(a.Kb + d)), h && this.ed.push(h);
        S("maxp" in this.aa);
        a = this.ba.seek(this.aa.maxp.offset + 4);
        b = this.ba.getUint16();
        this.ba.seek(a);
        this.length = b
    }

    $e.prototype = {
        log: t("TrueType"), transform: function (a, b) {
            a.scale(b / this.qa, -b / this.qa)
        }
    };
    function af(a, b) {
        function c(b, c, e) {
            for (var h = 0, k = 0; k < f; k++) {
                var v = g[k];
                v & c ? h = v & e ? h + a.getUint8() : h - a.getUint8() : ~v & e && (h += a.getInt16());
                d[k][b] = h
            }
        }

        b.type = "simple";
        b.gc = [];
        for (var d = b.sa = [], e = 0; e < b.gd; e++)b.gc.push(a.getUint16());
        a.seek(a.getUint16() + a.Kb);
        if (0 !== b.gd) {
            for (var f = Math.max.apply(null, b.gc) + 1, g = [], e = 0; e < f; e++) {
                var h = a.getUint8();
                g.push(h);
                d.push({Qc: 0 < (h & 1)});
                if (h & 8) {
                    var k = a.getUint8();
                    S(0 < k);
                    for (e += k; k--;)g.push(h), d.push({Qc: 0 < (h & 1)})
                }
            }
            c("x", 2, 16);
            c("y", 4, 32)
        }
    }

    function bf(a, b) {
        var c;
        S("loca" in a.aa);
        c = a.aa.loca;
        var d = a.ba, e, f;
        1 === a.ta ? (e = d.seek(c.offset + 4 * b), c = d.getUint32(), f = d.getUint32()) : (e = d.seek(c.offset + 2 * b), c = 2 * d.getUint16(), f = 2 * d.getUint16());
        d.seek(e);
        c = c === f ? 0 : c + a.aa.glyf.offset;
        d = a.ba;
        if (0 === c || c >= a.aa.glyf.offset + a.aa.glyf.length)return null;
        S(c >= a.aa.glyf.offset);
        S(c < a.aa.glyf.offset + a.aa.glyf.length);
        d.seek(c);
        c = {gd: d.getInt16(), Hh: d.getInt16(), Lh: d.getInt16(), Gh: d.getInt16(), Kh: d.getInt16()};
        S(-1 <= c.gd);
        if (-1 === c.gd) {
            var g, h, k, l, m;
            c.type =
                "simple";
            var p = 32;
            c.gc = [];
            for (c.sa = []; p & 32;) {
                var r, u, p = d.getUint16();
                m = d.getUint16();
                e = 1;
                g = f = 0;
                h = 1;
                l = k = 0;
                p & 1 ? (r = d.getInt16(), u = d.getInt16()) : (r = d.getUint8(), u = d.getUint8());
                p & 2 && (k = r, l = u);
                p & 8 ? h = e = d.getInt16() / 16384 : p & 64 ? (e = d.getInt16() / 16384, h = d.getInt16() / 16384) : p & 128 && (e = d.getInt16() / 16384, f = d.getInt16() / 16384, g = d.getInt16() / 16384, h = d.getInt16() / 16384);
                a.log("Read component glyph index %s", m);
                a.log("Transform: [%s %s %s %s %s %s]", e, f, g, h, k, l);
                r = d.Kb;
                if (m = bf(a, m)) {
                    var v = c.sa.length;
                    for (u = 0; u < m.gc.length; u++)c.gc.push(m.gc[u] +
                        v);
                    for (u = 0; u < m.sa.length; u++) {
                        var v = m.sa[u].x, w = m.sa[u].y, v = e * v + f * w + k, w = g * v + h * w + l;
                        c.sa.push({x: v, y: w, Qc: m.sa[u].Qc})
                    }
                }
                d.seek(r)
            }
            c.gd = c.gc.length;
            p & 256 && d.seek(d.getUint16() + d.Kb)
        } else af(d, c);
        return c
    }

    function cf() {
        J.call(this);
        this.fonts = {};
        this.error = null;
        this.aa = 0;
        this.da = []
    }

    cf.prototype = {
        log: t("FontCollection"), add: function (a, b) {
            this.aa += 1;
            var c = this;
            q.ba({
                url: a, lh: function (d) {
                    var e = b;
                    c.log("Got font %s; result is %s bytes", a, d.length);
                    for (var f = "", g = 0; g < d.length; g++)f += String.fromCharCode(d.charCodeAt(g) & 255);
                    d = new $e(f);
                    c.log("Loaded '%s'", d.da);
                    for (g = 0; g < d.da.length; g++)c.log("   %s, %s", d.da.charAt(g), d.da.charCodeAt(g));
                    e = e || d.da;
                    c.fonts[e] = {name: d.da, url: a, data: f, font: d};
                    --c.aa;
                    df(c)
                }, error: function () {
                    c.log("Error fetching " + a);
                    --c.aa;
                    df(c)
                }, bg: function (a, b) {
                    b.overrideMimeType("text/plain; charset=x-user-defined")
                }
            })
        },
        get: function (a) {
            this.log("Lookup font %s", a);
            for (var b = 0; b < a.length; b++)this.log("   %s, %s", a.charAt(b), a.charCodeAt(b));
            if (a in this.fonts)return this.fonts[a].font;
            this.log("Lookup font %s; not found", a)
        }
    };
    function df(a) {
        if (0 === a.aa) {
            a.emit("done");
            for (var b = 0; b < a.da.length; b++)a.da[b]();
            a.da.length = 0
        }
    }

    cf.prototype = q.aa({}, J.prototype, cf.prototype);
    function W(a, b) {
        this.type = a;
        this.values = b;
        if (4 > this.values.length)throw"Bad value";
    }

    var ef;

    function Q(a, b) {
        a.toLowerCase() in ff && (a = ff[a.toLowerCase()]);
        var c = /\#([0-9a-f])([0-9a-f])([0-9a-f])/i, d = /rgb\( *([0-9]+) *, *([0-9]+) *, *([0-9]+) *\)/,
            e = /rgba\( *([0-9]+) *, *([0-9]+) *, *([0-9]+) *, *([0-9\.]+) *\)/, f;
        f = /\#([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])/i.exec(a);
        if (null !== f) c = parseInt(f[1], 16) / 255, d = parseInt(f[2], 16) / 255, e = parseInt(f[3], 16) / 255, f = 1; else if (f = e.exec(a), null !== f) c = parseFloat(f[1]) / 255, d = parseFloat(f[2]) / 255, e = parseFloat(f[3]) / 255, f = parseFloat(f[4]); else {
            f =
                d.exec(a);
            if (null !== f) c = parseFloat(f[1]) / 255, d = parseFloat(f[2]) / 255, e = parseFloat(f[3]) / 255; else if (f = c.exec(a), null !== f) c = parseInt(f[1], 16), c = (16 * c + c) / 255, d = parseInt(f[2], 16), d = (16 * d + d) / 255, e = parseInt(f[2], 16), e = (16 * e + e) / 255; else {
                if (b)return null;
                c = 1;
                d = 0;
                e = 1
            }
            f = 1
        }
        return new W(0, [c, d, e, f])
    }

    W.prototype = {
        toString: function () {
            function a(a) {
                a = Math.round(255 * a);
                return 16 > a ? "0" + a.toString(16) : a.toString(16)
            }

            var b = gf(this, 0);
            return 1 === b.values[3] ? "#" + a(b.values[0]) + a(b.values[1]) + a(b.values[2]) : "rgba(" + Math.round(255 * b.values[0]) + "," + Math.round(255 * b.values[1]) + "," + Math.round(255 * b.values[2]) + "," + b.values[3] + ")"
        }, Ra: function (a) {
            a.type !== this.type && (a = gf(a, this.type));
            if (2 === this.type) {
                var b = this.values[0], c = a.values[0],
                    b = b > c ? Math.min(b - c, c - b + 360) : Math.min(c - b, b - c + 360), b = b / 360;
                return Math.pow(b *
                    b + (this.values[1] - a.values[1]) * (this.values[1] - a.values[1]) + (this.values[2] - a.values[2]) * (this.values[2] - a.values[2]), .5)
            }
            return Math.pow((this.values[0] - a.values[0]) * (this.values[0] - a.values[0]) + (this.values[1] - a.values[1]) * (this.values[1] - a.values[1]) + (this.values[2] - a.values[2]) * (this.values[2] - a.values[2]), .5)
        }
    };
    function gf(a, b) {
        return ef[a.type][b](a)
    }

    (function () {
        function a(a) {
            var b = a.values[0], c = a.values[1], d = a.values[2];
            0 > b && (b += 360);
            var e = b / 60 - Math.floor(b / 60), f = d * (1 - c), g = d * (1 - e * c), c = d * (1 - (1 - e) * c), h, k,
                l;
            switch (Math.floor(b / 60) % 6) {
                case 0:
                    h = d;
                    k = c;
                    l = f;
                    break;
                case 1:
                    h = g;
                    k = d;
                    l = f;
                    break;
                case 2:
                    h = f;
                    k = d;
                    l = c;
                    break;
                case 3:
                    h = f;
                    k = g;
                    l = d;
                    break;
                case 4:
                    h = c;
                    k = f;
                    l = d;
                    break;
                case 5:
                    h = d, k = f, l = g
            }
            return new W(0, [h, k, l, a.values[3]])
        }

        function b(a) {
            var b, c = a.values[0], d = a.values[1], e = a.values[2], f = Math.max(c, d, e), g = Math.min(c, d, e);
            f === g ? b = 0 : f === c ? b = (60 * (d - e) / (f - g) + 360) %
                360 : f === d ? b = 60 * (e - c) / (f - g) + 120 : f === e && (b = 60 * (c - d) / (f - g) + 240);
            return new W(2, [b, 0 === f ? 0 : 1 - g / f, f, a.values[3]])
        }

        function c(a) {
            function b(a) {
                return a > 6 / 29 * (6 / 29) * (6 / 29) ? Math.pow(a, 1 / 3) : 1 / 3 * (29 / 6) * (29 / 6) * a + 4 / 29
            }

            var c = b(a.values[1] / l.ae);
            return new W(3, [116 * c - 16, 500 * (b(a.values[0] / l.$d) - c), 200 * (c - b(a.values[2] / l.be)), a.values[3]])
        }

        function d(a) {
            var b = (a.values[0] + 16) / 116, c = b + a.values[1] / 500, d = b - a.values[2] / 200, e = 6 / 29;
            return new W(1, [c > e ? l.$d * c * c * c : 3 * (c - 16 / 116) * e * e * l.$d, b > e ? l.ae * b * b * b : 3 * (b - 16 / 116) * e * e * l.ae,
                d > e ? l.be * d * d * d : 3 * (d - 16 / 116) * e * e * l.be, a.values[3]])
        }

        function e(a) {
            for (var b = [],
                     c = 0; 3 > c; c++)b[c] = .04045 >= a.values[c] ? a.values[c] / 12.92 : Math.pow((a.values[c] + .055) / 1.055, 2.4);
            return new W(1, [.4124 * b[0] + .3576 * b[1] + .1805 * b[2], .2126 * b[0] + .7152 * b[1] + .0722 * b[2], .0193 * b[0] + .1192 * b[1] + .9505 * b[2], a.values[3]])
        }

        function f(a) {
            var b = [], c = [];
            b[0] = 3.241 * a.values[0] - 1.5374 * a.values[1] - .4986 * a.values[2];
            b[1] = -.9692 * a.values[0] + 1.876 * a.values[1] + .0416 * a.values[2];
            b[2] = .0556 * a.values[0] - .204 * a.values[1] + 1.057 * a.values[2];
            for (var d = 0; 3 > d; d++)c[d] = .0031308 >= b[d] ? 12.92 * b[d] : 1.055 * Math.pow(b[d], 1 / 2.4) - .055;
            c[3] = a.values[3];
            return new W(0, c)
        }

        function g(a) {
            return new W(a.type, a.values.concat())
        }

        function h(a) {
            return c(e(a))
        }

        function k(a) {
            return b(f(a))
        }

        var l = {$d: .9505, ae: 1, be: 1.089};
        ef = [[g, e, b, h], [f, g, k, c], [a, function (b) {
            return e(a(b))
        }, g, function (b) {
            return h(a(b))
        }], [function (a) {
            return f(d(a))
        }, d, function (a) {
            return k(d(a))
        }, g]]
    })();
    var ff = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370d8",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#d87093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        transparent: "rgba(0,0,0,0.0)",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };
    var hf = t("MISC");

    function jf(a) {
        window.jQuery && a instanceof window.jQuery && (a = a[0]);
        return q(a)
    }

    function kf(a) {
        var b = document.createElement("canvas");
        a && a.appendChild(b);
        "G_vmlCanvasManager" in window && (hf("Emulating canvas in IE"), G_vmlCanvasManager.initElement(b), q(b).bind("selectstart", function (a) {
            hf("Cancelled selectstart on canvas");
            a.stopPropagation();
            a.preventDefault()
        }));
        b.style.background = "transparent";
        return b
    }

    function lf() {
        return (new Date).getTime()
    }

    var mf = /MSIE ([0-9]{1,}[\.0-9]{0,})/, nf = null;

    function of() {
        var a;
        if (null !== nf) a = nf; else {
            a = -1;
            if ("Microsoft Internet Explorer" === navigator.appName) {
                var b = mf.exec(navigator.userAgent);
                null !== b && (a = parseFloat(b[1]))
            }
            nf = a;
            hf("IE version is %s", a)
        }
        return 0 <= a && 9 > a
    }

    function Jd() {
        for (var a = document.getElementsByTagName("*"), b = 0, c = 0; c < a.length; c++) {
            var d = parseInt(q(a[c]).ha("z-index"), 10) || 0;
            d > b && (b = d)
        }
        return b
    }

    function pf() {
        if (null === qf) {
            var a = document.createElement("div");
            a.style.visibility = "hidden";
            a.style.width = "100px";
            document.body.appendChild(a);
            var b = a.offsetWidth;
            a.style.overflow = "scroll";
            var c = document.createElement("div");
            c.style.width = "100%";
            a.appendChild(c);
            c = c.offsetWidth;
            a.parentNode.removeChild(a);
            qf = b - c;
            hf("ScrollbarWidth calculated as %spx", qf)
        }
        return qf
    }

    var qf = null;

    function Ed(a, b) {
        var c = Q(a);
        c.values[3] = b;
        return c.toString()
    }

    function rf(a) {
        var b = atob(a.split(",")[1]);
        a = a.split(",")[0].split(":")[1].split(";")[0];
        for (var c = new ArrayBuffer(b.length), d = new Uint8Array(c), e = 0; e < b.length; e++)d[e] = b.charCodeAt(e);
        return new Blob([c], {type: a})
    }

    function hb(a, b) {
        var c;
        "function" !== typeof b ? c = function (a) {
            return a === b
        } : c = b;
        for (var d = 0, e = 0; e < a.length; e++)c(a[e]) ? d += 1 : d && (a[e - d] = a[e]);
        a.length -= d
    }

    function sf() {
        var a = document.documentElement, b = a.scrollHeight > q(a).height(), a = a.scrollWidth > q(a).width(),
            b = b ? pf() : 0, a = a ? pf() : 0, c = document.documentElement.scrollTop || document.body.scrollTop,
            d = document.documentElement.scrollLeft || document.body.scrollLeft;
        return {width: q(window).width() - b, height: q(window).height() - a, x: d, y: c}
    }

    function Kd(a) {
        var b = sf();
        a = q(a);
        var c = a.offset();
        c.left = Math.min(c.left, b.x + b.width - a.outerWidth());
        c.top = Math.min(c.top, b.y + b.height - a.outerHeight());
        a.offset(c)
    }

    function tf(a, b) {
        function c(a, b) {
            var c = {
                stopPropagation: function () {
                    a.stopPropagation()
                }, preventDefault: function () {
                    a.preventDefault()
                }, cb: a
            }, d;
            for (d in b)b.hasOwnProperty(d) && (c[d] = b[d]);
            return c
        }

        var d = 1, e = 0;
        a.addEventListener("mousedown", function (a) {
            3 === (a.buttons & 3) && (d = 1, e = 0, b(c(a, {
                type: "gesturestart",
                pageX: a.pageX,
                pageY: a.pageY,
                scale: d,
                rotation: e
            })))
        }, !1);
        a.addEventListener("contextmenu", function (a) {
            a.preventDefault()
        }, !1);
        a.addEventListener("mousemove", function (a) {
            3 === (a.buttons & 3) && b(c(a, {
                type: "gesturechange",
                pageX: a.pageX, pageY: a.pageY, scale: d, rotation: e
            }))
        }, !1);
        a.addEventListener("mouseup", function (a) {
            5 !== (a.buttons & 3) && b(c(a, {
                type: "gestureend",
                pageX: a.pageX,
                pageY: a.pageY,
                scale: d,
                rotation: 0
            }))
        }, !1);
        a.addEventListener("wheel", function (a) {
            3 === (a.buttons & 3) && (d = 0 < a.deltaY ? 1.1 * d : d / 1.1, 0 < a.deltaX ? e += 10 : 0 > a.deltaY && (e -= 10), b(c(a, {
                type: "gesturechange",
                pageX: a.pageX,
                pageY: a.pageY,
                scale: d,
                rotation: e
            })))
        })
    }

    function uf(a, b) {
        "erase" === b ? a.Jc ? (a.strokeStyle = "#000000", a.globalCompositeOperation = "destination-out", --a.lineWidth, a.stroke(), a.globalCompositeOperation = "source-over", a.strokeStyle = a.Jc, a.lineWidth += 2, a.stroke(), --a.lineWidth) : (a.strokeStyle = "#000000", a.globalCompositeOperation = "destination-out", a.stroke(), a.globalCompositeOperation = "source-over") : (a.strokeStyle = b, a.stroke())
    };
    function vf(a, b, c, d, e) {
        wf(this, a, b, c, d, e)
    }

    function wf(a, b, c, d, e, f) {
        J.call(a);
        a.canvas = q(kf(b[0]));
        a.ja = a.canvas;
        a.canvas.ha("position", "absolute");
        a.canvas.ha("border", "none");
        a.canvas.ha("border-top", "1px solid black");
        a.canvas.ha("display", "block");
        a.oa = a.canvas[0].getContext("2d");
        a.size = c;
        a.$b = d;
        a.ma = e;
        a.aa = "auto" === f ? xf() : f;
        yf(a, 100);
        a.canvas.bind("touchstart", function (b) {
            var c = a.canvas.offset();
            a.zb(b.touches[0].pageX - c.left - 0, b.touches[0].pageY - c.top - 0, 1);
            b.preventDefault();
            b.stopPropagation()
        });
        Na(a.canvas, function (b) {
            var c = a.canvas.offset();
            a.zb(b.pageX - c.left - 0, b.pageY - c.top - 0, b.which) || (b.preventDefault(), b.stopPropagation())
        });
        a.canvas.bind("contextmenu", function (a) {
            a.preventDefault();
            a.stopPropagation();
            return !1
        })
    }

    n = vf.prototype;
    n.log = t("COLOURPANEL");
    n.nc = function (a, b) {
        this.size = a;
        this.$b = b;
        this.format();
        this.na()
    };
    function xf() {
        function a(a) {
            for (var c = 30; 100 > c; c += 20)a.values[2] = c / 100, b.push(a.toString())
        }

        var b = "rgba(0,0,0,0.0) rgba(0,0,0,0.5) #000000 #ffffff #000088 #008800 #008888 #880000 #880088 #884400 #888888 #444444 #0000ff #00ff00 #00ffff #ff0000 #ff00ff #ffff00".split(" ");
        a(new W(2, [0, 0, 0, 1]));
        for (var c = 0; 720 > c; c += 35) {
            var d = new W(2, [c, .5, 0, 1]);
            a(d)
        }
        return b
    }

    function yf(a, b) {
        a.width = b;
        a.canvas.ob("width", "" + a.width);
        a.format();
        a.na()
    }

    function zf(a, b) {
        a.ka = b;
        a.canvas.ob("height", "" + (a.ka - 1))
    }

    n.height = function () {
        return this.ka
    };
    n.moveTo = function (a, b) {
        this.canvas.ha("left", "" + a + "px");
        this.canvas.ha("top", "" + b + "px")
    };
    n.format = function () {
        this.da = Math.floor(this.width / this.size);
        var a = Math.ceil(this.aa.length / this.da);
        this.log("Format to width=%s; height=%s wrap=%s, cpr=%s", this.width, a * this.size, this.ma, this.da);
        this.ma ? zf(this, a * this.size) : zf(this, this.size)
    };
    function Af(a, b, c, d) {
        a.fillStyle = "#ffffff";
        a.fillRect(b, c, d, d);
        a.beginPath();
        a.strokeStyle = "#000000";
        a.moveTo(b, c);
        a.lineTo(b + d, c + d);
        a.moveTo(b + d, c);
        a.lineTo(b, c + d);
        a.stroke()
    }

    function Bf(a, b, c, d) {
        for (var e, f = 0; f < d; f += 5) {
            e = 0 === f / 5 % 2;
            for (var g = 0; g < d; g += 5)a.fillStyle = e ? "#000000" : "#ffffff", e = !e, a.fillRect(b + g, c + f, 5, 5)
        }
        e = a.createLinearGradient(b + d, c + d, b, c);
        e.addColorStop(0, "rgba(255, 255, 255, 1.0)");
        e.addColorStop(1, "rgba(255, 255, 255, 0.0)");
        a.fillStyle = e;
        a.fillRect(b, c, d, d)
    }

    n.na = function () {
        for (var a = 0, b = 0, c = 0; c < this.aa.length; c++) {
            var d = Q(this.aa[c]);
            this.oa.fillStyle = this.aa[c];
            this.oa.fillRect(a, b, this.size, this.size);
            0 === d.values[3] ? Af(this.oa, a, b, this.size) : .5 === d.values[3] && Bf(this.oa, a, b, this.size);
            a += this.size;
            a >= this.width && (b += this.size, a = 0)
        }
    };
    n.Za = function () {
        this.canvas.Za()
    };
    n.show = function () {
        this.canvas.show()
    };
    n.zb = function (a, b, c) {
        a = Math.floor(a / this.size);
        var d = Math.floor(b / this.size);
        b = d * this.da + a;
        this.log("row=%s col=%s index=%s coloursPerRow=%s", d, a, b, this.da);
        c = 1 === c;
        return b < this.aa.length ? ("rgba(0,0,0,0.0)" === this.aa[b] ? this.emit("opacity", 0, c) : "rgba(0,0,0,0.5)" === this.aa[b] ? this.emit("opacity", .5, c) : this.emit("colour", {
            Ua: this.aa[b],
            zd: c
        }), !0) : !1
    };
    q.aa(vf.prototype, J.prototype);
    function Cf(a, b, c) {
        var d = this;
        J.call(this);
        this.ma = b;
        this.ja = q(a);
        Qa(this.ja, "zwibbler-page-selector");
        b || (this.ja.ha("overflow-y", "scroll"), this.ja.ha("text-align", "center"));
        b || c || (a = q("<input>").ob("type", "button").ob("value", "Add Page"), this.ja.append(a), a.click(function () {
            d.aa.Ec(d.aa.dd(d.aa.ic() + 1))
        }), a = q("<input>").ob("type", "button").ob("value", "Delete Page"), this.ja.append(a), a.click(function () {
            d.aa.De(d.aa.ic())
        }), this.ka = !1);
        this.da = []
    }

    Cf.prototype = {
        log: t("PageSelector"), lb: function (a) {
            this.log("Set page %s", a);
            this.page < this.da.length && q(this.da[this.page]).ha("border-color", "transparent");
            this.page = a;
            this.page < this.da.length && q(this.da[this.page]).ha("border-color", "#9fb3e7")
        }
    };
    function Df(a, b) {
        var c = kf(a.ja[0]);
        a.ma || (q(c).ha("margin-left", "10px"), q(c).ha("margin-right", "10px"), q(c).ha("margin-top", "5px"), q(c).ha("margin-bottom", "5px"));
        q(c).ha("border-width", "3px");
        a.log("Make canvas for page %s, currentPage is %s", b, a.page);
        b === a.page ? q(c).ha("border-color", "#9fb3e7") : q(c).ha("border-color", "transparent");
        q(c).ha("border-style", "solid");
        a.da.push(c);
        c.page = b;
        q(c).click(function () {
            a.aa.Ec(c.page);
            a.aa.emit("page-preview-clicked", c.page)
        });
        return c
    }

    function Ef(a) {
        a.log("Regenerate page views.");
        var b = a.ja.width() - 6 - 10 - pf(), c = a.ja.height() - 6, d = a.aa.Vb(), e = a.aa.bd();
        c > b ? c = b / e.width * e.height : b = c / e.height * e.width;
        for (var f = 0; f < d; f++) {
            var g;
            g = f === a.da.length ? Df(a, f) : a.da[f];
            g.width = b;
            g.height = c;
            g = g.getContext("2d");
            g.save();
            g.fillStyle = "#ffffff";
            g.fillRect(0, 0, b, c);
            g.scale(b / e.width, b / e.width);
            g.translate(-e.x, -e.y);
            a.aa.na(g, {page: f});
            g.restore()
        }
        for (; f < a.da.length; f++)q(a.da[f]).remove();
        a.da.length = d
    }

    function Ff(a, b) {
        function c() {
            null === e && d.ka && (e = setTimeout(function () {
                Ef(d);
                d.lb(d.aa.ic());
                e = null
            }, 100))
        }

        var d = a, e = null;
        a.aa = b;
        b.on("document-changed", function () {
            c()
        });
        b.on("resource-loaded", function () {
            c()
        });
        b.on("set-page", function (a) {
            d.lb(a)
        })
    }

    function Gf(a, b) {
        a.ka = b;
        a.ka && a.aa && setTimeout(function () {
            Ef(a)
        }, 10)
    }

    Cf.prototype = q.aa({}, J.prototype, Cf.prototype);
    function Hf(a, b, c) {
        If(this, a, b, c)
    }

    function If(a, b, c, d) {
        J.call(a);
        a.$a = !0;
        a.id = b;
        a.canvas = kf(document.body);
        a.canvas.style.position = "absolute";
        a.canvas.style.border = "none";
        a.oa = a.canvas.getContext("2d");
        a.bc = c;
        a.width = 32;
        a.height = 500;
        a.canvas.width = a.width;
        a.canvas.height = a.height;
        q(a.canvas).bind("click", function (b) {
            a.zb(b)
        });
        q(a.canvas).bind("mousedown", function (b) {
            a.Sa(b)
        });
        d.bind(q(document.body), "mousemove", function (b) {
            a.Wa(b)
        });
        d.bind(q(document.body), "mouseup", function (b) {
            a.Ya(b)
        });
        q(a.canvas).bind("touchstart", function (b) {
            a.hb(b)
        });
        d.bind(q(document.body), "touchmove", function (b) {
            a.hb(b)
        });
        d.bind(q(document.body), "touchend", function (b) {
            a.hb(b)
        });
        a.aa = null;
        a.Pa = !1;
        a.ta = "#c0c0c0";
        a.qa = "#808080";
        a.borderWidth = 1;
        a.ka = 0;
        a.da = 100;
        a.ma = 10;
        a.position = 5;
        a.format()
    }

    n = Hf.prototype;
    n.log = t("SCROLLBAR", !0);
    n.moveTo = function (a, b) {
        this.canvas.style.left = "" + a + "px";
        this.canvas.style.top = "" + b + "px"
    };
    n.nc = function (a, b) {
        this.width = a;
        this.height = b;
        this.canvas.width = this.width;
        this.canvas.height = b;
        this.format();
        this.na()
    };
    n.Za = function () {
        this.canvas.style.display = "none"
    };
    n.show = function () {
        this.canvas.style.display = "block"
    };
    n.format = function () {
        var a;
        a = this.bc ? this.width : this.height;
        var b = this.ma / this.da * a;
        a = (this.position - this.ka) / this.da * a;
        this.aa = this.bc ? new M(a, 0, b - 1, this.height - 1) : new M(0, a, this.width - 1, b - 1);
        this.aa.x = Math.round(this.aa.x) + .5;
        this.aa.y = Math.round(this.aa.y) + .5;
        this.aa.width = Math.round(this.aa.width);
        this.aa.height = Math.round(this.aa.height)
    };
    n.na = function () {
        this.oa.beginPath();
        this.oa.fillStyle = this.ta;
        this.oa.strokeStyle = this.qa;
        this.oa.lineWidth = this.borderWidth;
        this.oa.rect(this.borderWidth / 2, this.borderWidth / 2, this.width - this.borderWidth, this.height - this.borderWidth);
        this.oa.fill();
        this.oa.stroke();
        this.oa.beginPath();
        this.oa.fillStyle = this.qa;
        this.oa.strokeStyle = "#000000";
        this.oa.rect(this.aa.x, this.aa.y, this.aa.width, this.aa.height);
        this.oa.fill();
        this.oa.stroke()
    };
    function Jf(a, b) {
        var c = q(a.canvas).offset();
        if ("touchstart" === b.type || "touchend" === b.type || "touchmove" === b.type) b = b.changedTouches[0];
        return new y(b.pageX - c.left, b.pageY - c.top)
    }

    n.hb = function (a) {
        switch (a.type) {
            case "touchstart":
                this.Sa(a);
                break;
            case "touchend":
                this.Ya(a);
                break;
            case "touchmove":
                this.Wa(a)
        }
    };
    n.zb = function () {
    };
    function Kf(a, b) {
        var c;
        c = a.bc ? b.x / a.width * a.da + a.ka : b.y / a.height * a.da + a.ka;
        c = Math.min(c, a.da - a.ma + a.ka);
        return c = Math.max(c, a.ka)
    }

    n.Sa = function (a) {
        a.preventDefault();
        a = Jf(this, a);
        this.aa.Pb(a.x, a.y) ? this.bc ? (this.offset = a.x - this.aa.x, a.x -= this.offset) : (this.offset = a.y - this.aa.y, a.y -= this.offset) : (this.position = Kf(this, a), this.offset = 0, this.bc ? this.aa.x = (this.position - this.ka) / this.da * this.width : this.aa.y = (this.position - this.ka) / this.da * this.height, this.emit("scroll", this.position), this.na());
        this.Pa = !0
    };
    n.Wa = function (a) {
        this.Pa && (this.Pa && "mousemove" === a.type && ("buttons" in a && 0 === a.buttons || 0 === a.which) ? this.Pa = !1 : (a.preventDefault(), a = Jf(this, a), this.bc ? a.x -= this.offset : a.y -= this.offset, this.position = Kf(this, a), this.emit("scroll", this.position), this.format(), this.na()))
    };
    n.Ya = function () {
        this.Pa && (this.Pa = !1)
    };
    function Qd(a) {
        return a.bc ? a.height : a.width
    }

    Hf.prototype = q.aa({}, J.prototype, Hf.prototype);
    function Lf(a, b) {
        de(this, a, b, Lf);
        this.log("New BrushNode created.");
        this.ea.points = [];
        this.ea.strokeStyle = "#ff00ff";
        this.ea.lineWidth = 10;
        this.sa = [];
        this.ka = [];
        this.inverse = null
    }

    Lf.prototype = {
        log: t("BRUSH", !0), type: function () {
            return "BrushNode"
        }, setProperty: function (a, b) {
            "fillStyle" === a && (a = "strokeStyle");
            a in this.ea || "dashes" === a || "lineCap" === a ? this.ea[a] = b : ce.prototype.setProperty.call(this, a, b)
        }, pa: function (a) {
            "fillStyle" === a && (a = "strokeStyle");
            return ce.prototype.pa.call(this, a)
        }, format: function () {
            var a, b, c, d;
            this.sa.length = 0;
            b = this.ea.points;
            a = c = 0;
            for (d = b.length - 1; c <= d; a = c += 2)this.sa.push(new y(b[a], b[a + 1]));
            a = Jc(this.sa);
            b = Oc(this.Ja());
            c = this.ea.lineWidth;
            a.Hb(c / b.x,
                c / b.y);
            this.ab = a.clone();
            a = new hd(a);
            a.transform(this.ea.matrix);
            this.rect = Jc(a.sa);
            this.inverse = this.ea.matrix.inverse();
            this.ka = [];
            if ("dashes" in this.ea)for (b = this.ea.dashes.split(","), a = 0; a < b.length; a++)c = parseFloat(b[a]), isNaN(c) || this.ka.push(c)
        }, bb: function (a, b) {
            var c;
            return this.rect.Pb(a, b) && (c = this.inverse.apply(a, b), Zc(this.sa, c.x, c.y, 12 + this.ea.lineWidth / 2)) ? this : null
        }, uc: function (a) {
            var b, c, d, e;
            c = this.ea.points;
            if (0 !== c.length) {
                a.save();
                a.beginPath();
                b = this.pa("lineCap") || "round";
                a.lineCap =
                    b;
                a.lineJoin = "round" === b ? "round" : "bevel";
                if (1 < this.ka.length) {
                    if (b = this.sa, d = this.ka, 0 !== b.length) {
                        a.moveTo(b[0].x, b[0].y);
                        e = 0;
                        for (var f = 1, g = d[0], h = b[0].clone(),
                                 k; f < b.length;)k = h.Ra(b[f]), 0 === k ? f += 1 : k <= g ? (h = b[f].clone(), e & 1 ? a.moveTo(h.x, h.y) : a.lineTo(h.x, h.y), g -= k, f += 1) : (h.x += (b[f].x - h.x) * g / k, h.y += (b[f].y - h.y) * g / k, e & 1 ? a.moveTo(h.x, h.y) : a.lineTo(h.x, h.y), e = (e + 1) % d.length, g = d[e])
                    }
                } else for (a.moveTo(c[0], c[1]), b = d = 2, e = c.length - 1; d <= e; b = d += 2)a.lineTo(c[b], c[b + 1]);
                Qc(this.Ja().inverse(), a);
                uf(a, this.ea.strokeStyle);
                if (Mf) {
                    Qc(this.Ja(), a);
                    a.beginPath();
                    b = d = 0;
                    for (e = c.length - 1; d <= e; b = d += 2)a.rect(c[b] - 2, c[b + 1] - 2, 4, 4);
                    a.fillStyle = "#ff0000";
                    a.fill()
                }
                a.restore()
            }
        }
    };
    var Mf = !1;
    pe("BrushNode", Lf);
    function Nf(a, b, c, d) {
        this.ba = c;
        this.view = a;
        this.ka = d;
        this.Pa = !1;
        this.ne = !0;
        this.aa = [];
        this.qa = {};
        var e = this;
        e.jc = function () {
            Of(e, e.ba.lineWidth / 2)
        };
        this.da = new ib(this.view);
        this.view.fb(!0);
        this.ma = null
    }

    Nf.prototype = {
        log: t("Brush"), Db: function () {
            this.view.canvas.style.cursor = "crosshair";
            Of(this, this.ba.lineWidth / 2);
            q(window).on("resize", this.jc)
        }, Ib: function () {
            this.view.canvas.style.cursor = "default";
            this.view.na();
            q(window).Wc("resize", this.jc)
        }, reset: function () {
            this.Pa = !1;
            this.aa = [];
            this.qa = {}
        }, Xa: function (a) {
            a = this.da.Xa(a);
            this.Pa && this.da.aa && this.reset();
            return a
        }, sd: function (a) {
            this.ba.strokeStyle = a
        }, Md: function (a) {
            this.ba.lineWidth = a;
            Of(this, a / 2)
        }, hb: function (a) {
            var b, c, d, e, f;
            if (!this.da.aa)if ("touchstart" ===
                a.type) {
                f = a.changedTouches;
                d = 0;
                for (e = f.length; d < e; d++)c = f[d], a = x(this.view, c.pageX, c.pageY, !0), this.aa.push([a]), c.identifier && (this.qa[c.identifier] = this.aa[this.aa.length - 1]);
                this.Pa = !0;
                1 === this.aa.length && (this.ma = Pf(this.view))
            } else if ("touchmove" === a.type) {
                f = a.changedTouches;
                d = 0;
                for (e = f.length; d < e; d++) {
                    c = f[d];
                    a = x(this.view, c.pageX, c.pageY, !0);
                    if (c.identifier) c.identifier in this.qa ? b = this.qa[c.identifier] : (b = [a], this.aa.push(b), this.qa[c.identifier] = b); else {
                        c = a;
                        var g = b = void 0, h = void 0;
                        b = null;
                        for (h = 0; h < this.aa.length; h++) {
                            var k = this.aa[h], l = k[k.length - 1].Ra(c);
                            if (null === b || l < g) b = k, g = l
                        }
                        b || (b = [c], this.aa.push(b))
                    }
                    b ? a.x === b[b.length - 1].x && a.y === b[b.length - 1].y || b.push(a) : this.log("WARNING: Can't find path for touch!")
                }
                !1 === this.Pa && (this.ma = Pf(this.view), this.Pa = !0);
                this.ma ? this.ma.na(this.jd, this) : this.view.na()
            } else"touchend" === a.type && this.Pa && 0 === a.touches.length && (this.ya(), this.Pa = !1)
        }, Sa: function (a, b) {
            var c;
            c = new y(a, b);
            this.Pa = !0;
            this.aa.push([c]);
            1 === this.aa.length && (this.ma = Pf(this.view))
        },
        jd: function (a) {
            var b, c, d, e, f, g, h, k = Qf(this.view);
            a.lineCap = this.ba.lineCap || "round";
            a.lineJoin = "round" === a.lineCap ? "round" : "bevel";
            a.lineWidth = this.ba.lineWidth;
            a.beginPath();
            g = this.aa;
            d = 0;
            for (f = g.length; d < f; d++)for (c = g[d], a.moveTo(c[0].x, c[0].y), b = e = 1, h = c.length - 1; e <= h; b = e += 1)b = c[b], a.lineTo(b.x, b.y);
            uf(a, this.ba.strokeStyle);
            k && a.restore()
        }, Wa: function (a, b) {
            var c;
            c = new y(a, b);
            this.Pa && (this.va = this.aa[0][this.aa[0].length - 1], c.x !== this.va.x || c.y !== this.va.y) && (this.aa[0].push(c), this.ma ? this.ma.na(this.jd,
                this) : this.view.na())
        }, Ya: function (a, b) {
            this.Wa(a, b);
            this.Pa = !1;
            this.ya()
        }, ya: function () {
            var a, b, c, d, e, f, g, h, k, l;
            a = [];
            k = this.aa;
            var m = this.view.la.sb;
            f = 0;
            for (h = k.length; f < h; f++)if (e = k[f], "brush" === this.ka) {
                if (c = [], 1 === e.length && e.push(new y(e[0].x + .1, e[0].y + .1)), 1 < e.length) {
                    d = b = 0;
                    for (g = e.length - 1; b <= g; d = b += 1)c.push(e[d].x), c.push(e[d].y);
                    a.push(new C("BrushNode", q.aa({points: c, layer: this.view.La}, this.ba)))
                }
            } else {
                if ("shapebrush" === this.ka) {
                    e = gd(e, 20);
                    c = e;
                    g = l = b = e = l = d = void 0;
                    if (!(2 > c.length)) {
                        e = c[0];
                        b = c[c.length - 1];
                        g = 40 > e.Ra(b);
                        for (d = 0; d < c.length; d++) {
                            var p = c[d];
                            for (l = d + 1; l < c.length; l++) {
                                var r = c[l];
                                20 > Math.abs(p.x - r.x) && (r.x = p.x);
                                20 > Math.abs(p.y - r.y) && (r.y = p.y)
                            }
                        }
                        p = Kc(Jc(c));
                        for (d = 0; d < c.length; d++)l = c[d], 20 > Math.abs(l.x - p.x) && (l.x = p.x), 20 > Math.abs(l.y - p.y) && (l.y = p.y);
                        g && (e.x = b.x, e.y = b.y)
                    }
                    e = c
                } else if ("freehand" === this.ka) c = e, c = gd(c, 2), c = jd(c, 4), e = c = gd(c, .5); else if ("quadratic" === this.ka) {
                    e = gd(e, 10);
                    b = yd(e);
                    c = b.fa[1];
                    d = b.fa[2];
                    l = b.fa[4];
                    g = b.fa[5];
                    e = b.fa[8];
                    b = b.fa[9];
                    l = ((3 * l - c) / 2 + (3 * l - e) / 2) / 2;
                    g =
                        ((3 * g - d) / 2 + (3 * g - b) / 2) / 2;
                    p = new lc;
                    p.moveTo(c, d);
                    p.quadraticCurveTo(l, g, e, b);
                    e = p;
                    c = new R;
                    d = 0;
                    for (e = e.fa; d < e.length;) {
                        switch (e[d]) {
                            case $b:
                                c.moveTo(e[d + 1], e[d + 2]);
                                break;
                            case ac:
                                c.lineTo(e[d + 1], e[d + 2]);
                                break;
                            case 2:
                                c.vc(e[d + 1], e[d + 2], e[d + 3], e[d + 4], e[d + 5], e[d + 6]);
                                break;
                            case 3:
                                c.ba(e[d + 1], e[d + 2], e[d + 3], e[d + 4]);
                                break;
                            case cc:
                                c.close()
                        }
                        d += dc[e[d]]
                    }
                    c = c.fa;
                    a.push(new C("PathNode", q.aa({
                        commands: c,
                        fillStyle: this.view.kb,
                        sloppiness: 0,
                        layer: this.view.La
                    }, this.ba)));
                    continue
                }
                1 === e.length && "freehand" === this.ka &&
                e.push(new y(e[0].x + .1, e[0].y + .1));
                if (1 < e.length) {
                    c = new R;
                    c.moveTo(e[0].x, e[0].y);
                    b = e[0].hc(e[e.length - 1]);
                    d = g = 1;
                    for (l = e.length - 1; g <= l; d = g += 1)c.lineTo(e[d].x, e[d].y);
                    b && c.close();
                    a.push(new C("PathNode", q.aa({
                        commands: c.Nb(),
                        fillStyle: this.view.kb,
                        sloppiness: 0,
                        layer: this.view.La
                    }, this.ba)))
                }
            }
            this.view.ya(a);
            this.view.fb();
            f = A(this.view.la, m, !1);
            a.length && "quadratic" === this.ka ? (this.view.Fa = f, F(this.view)) : this.view.ga.get("singleStrokeBrush") ? (Rf(this.view, f), F(this.view)) : this.reset();
            Sf(this.view)
        },
        Jb: function (a) {
            this.ba.strokeStyle = a.Ua;
            var b;
            a.zd ? (this.view.kb = a.Ua, this.view.wb = a.Ua, b = "fillStyle") : (this.view.pb = a.Ua, b = "strokeStyle");
            this.view.setProperty(b, a.Ua)
        }, cc: function (a) {
            this.view.wb = Ed(this.view.wb, a);
            this.ba.strokeStyle = Ed(this.ba.strokeStyle, a);
            this.view.kb = this.view.wb
        }, vb: function (a) {
            this.log("keyboard: %s", a);
            "cancel" === a && (this.log("ESC pressed. Abort brush and go back to toolbar."), F(this.view), this.view.tb.emit("goto-toolbar"))
        }, Cc: function (a, b) {
            "defaultBrushWidth" === a && (this.ba.lineWidth =
                b)
        }, Qb: function () {
            return "circle" === this.ka ? "ellipse" : this.ka
        }
    };
    function Of(a, b) {
        var c = document.createElement("canvas");
        b *= window.devicePixelRatio || 1;
        b *= a.view.scale;
        var d = Math.ceil(b + 1);
        c.width = 2 * d + 2;
        c.height = 2 * d + 2;
        var e = c.getContext("2d");
        e.beginPath();
        "round" === (a.ba.lineCap || "round") ? e.arc(d + 1, d + 1, d, 0, 2 * Math.PI) : e.rect(1, 1, 2 * d - 2, 2 * d - 2);
        e.lineWidth = 2;
        e.strokeStyle = "#ffffff";
        e.stroke();
        e.lineWidth = 1;
        e.strokeStyle = "#000000";
        e.stroke();
        c = c.toDataURL();
        a.view.canvas.style.cursor = "url(" + c + ") " + (d + 1) + " " + (d + 1) + ", auto"
    };
    function Tf() {
    }

    Tf.prototype = {
        Cb: "Action", Qe: function (a) {
            var b, c, d, e;
            this.id && (this.id = a(this.id));
            if (this.aa && 0 < this.aa.length) {
                e = [];
                b = c = 0;
                for (d = this.aa.length - 1; 0 <= d ? c <= d : c >= d; b = 0 <= d ? ++c : --c)e.push(this.aa[b] = a(this.aa[b]));
                return e
            }
        }, log: t("ACTION"), toString: function () {
            return "" + this.Cb + "()"
        }
    };
    Tf.prototype = q.aa({}, qb.prototype, Tf.prototype);
    function C(a, b, c, d) {
        this.type = a;
        this.ba = c;
        this.index = d;
        this.ea = b;
        this.id = 0
    }

    C.prototype = {
        Cb: "CreateAction", xb: function (a) {
            this.id = this.id || Ne(a);
            this.node = Ad(this.type, this.id, a);
            if (!this.node)if (this.type in ue) this.node = new te(this.id, a), this.node.setProperty("type", this.type); else {
                this.log("Bad node type: %s", this.type);
                var b = this.node = Ad("UnknownNode", this.id, a), c = this.type;
                b.ba = c;
                b.aa.text = c;
                b.log("Creating placeholder for node type %s", c)
            }
            Bd(this.node, this.ea);
            if (void 0 === this.ba || void 0 === this.index) this.ba = a.ke().id, this.index = -1;
            b = A(a, this.ba, !1);
            Uf(a, b, this.node,
                this.index);
            this.log("Add %s id %s to parent %s index %s", this.node.type(), this.id, b.type(), this.index)
        }, toString: function () {
            return "" + this.Cb + "(" + this.type + ", " + JSON.stringify(this.ea) + ", parent=" + this.ba + ", index=" + this.index + ")"
        }, eb: function (a) {
            a.removeNode(this.node)
        }
    };
    C.prototype = q.aa({}, Tf.prototype, C.prototype);
    function Vf(a) {
        this.aa = a;
        this.ba = []
    }

    Vf.prototype = {
        Cb: "DeleteAction", xb: function (a) {
            var b, c, d, e;
            this.ba.length = 0;
            e = this.aa;
            c = 0;
            for (d = e.length; c < d; c++)b = e[c], b = A(a, b, !1), this.ba.push({
                node: b,
                parent: b.parent,
                index: a.removeNode(b)
            })
        }, eb: function (a) {
            for (var b, c = this.ba.length - 1; 0 <= c; --c)b = this.ba[c], Uf(a, b.parent, b.node, b.index)
        }
    };
    Vf.prototype = q.aa({}, Tf.prototype, Vf.prototype);
    function Nd(a, b, c) {
        this.aa = a;
        this.name = b;
        this.value = c;
        this.ba = []
    }

    Nd.prototype = {
        Cb: "SetAction", xb: function (a) {
            var b, c, d, e;
            this.ba.length = 0;
            e = this.aa;
            c = 0;
            for (d = e.length; c < d; c++)b = e[c], b = A(a, b, !0), this.ba.push(b.pa(this.name)), b.setProperty(this.name, this.value)
        }, eb: function (a) {
            var b, c, d, e;
            if (0 !== this.aa.length)for (b = d = 0, e = this.aa.length - 1; 0 <= e ? d <= e : d >= e; b = 0 <= e ? ++d : --d)c = A(a, this.aa[b], !0), c.setProperty(this.name, this.ba[b])
        }, Me: function (a) {
            if (this.name !== a.name)return !1;
            this.aa.sort();
            a.aa.sort();
            if (this.aa.length !== a.aa.length)return !1;
            for (var b = 0; b < this.aa.length; b++)if (this.aa[b] !==
                a.aa[b])return !1;
            this.log("Merging property change %s", this.name);
            this.value = a.value;
            return !0
        }
    };
    Nd.prototype = q.aa({}, Tf.prototype, Nd.prototype);
    function qd(a, b) {
        this.aa = a;
        this.wa = b;
        this.inverse = b.inverse()
    }

    qd.prototype = {
        Cb: "TransformAction", xb: function (a) {
            this.log("Execute transformAction");
            var b, c, d, e;
            e = this.aa;
            c = 0;
            for (d = e.length; c < d; c++)b = e[c], b = A(a, b, !0), b.transform(this.wa)
        }, eb: function (a) {
            var b, c, d, e;
            e = this.aa;
            c = 0;
            for (d = e.length; c < d; c++)b = e[c], b = A(a, b, !0), b.transform(this.inverse)
        }, Qe: function (a) {
            var b, c, d;
            if (0 !== this.aa.length)for (b = c = 0, d = this.aa.length - 1; 0 <= d ? c <= d : c >= d; b = 0 <= d ? ++c : --c)this.aa[b] = a(this.aa[b])
        }
    };
    qd.prototype = q.aa({}, Tf.prototype, qd.prototype);
    function Za(a, b, c, d, e, f) {
        this.id = a;
        this.ba = b;
        this.da = c;
        this.ka = d;
        this.x = e;
        this.y = f
    }

    Za.prototype = {
        Cb: "MoveEditHandleAction", xb: function (a) {
            A(a, this.id, !0).Bc(this.ba, this.x, this.y)
        }, eb: function (a) {
            A(a, this.id, !0).Bc(this.ba, this.da, this.ka)
        }
    };
    Za.prototype = q.aa({}, Tf.prototype, Za.prototype);
    function Wf(a) {
        this.id = 0;
        this.aa = a;
        this.ba = []
    }

    Wf.prototype = {
        Cb: "GroupAction", xb: function (a) {
            var b, c, d, e;
            this.ba.length = 0;
            e = this.aa;
            c = 0;
            for (d = e.length; c < d; c++)b = e[c], b = A(a, b), this.ba.push({
                node: b,
                parent: b.parent,
                index: re(b.parent, b)
            });
            this.id = this.id || Ne(a);
            this.node = a.Lc(this.id, this.aa)
        }, eb: function (a) {
            var b, c;
            if (0 !== this.aa.length) {
                for (b = c = this.aa.length - 1; 0 <= c && !(0 > b); b = c += -1)b = this.ba[b], Uf(a, b.parent, b.node, b.index);
                a.removeNode(this.node)
            }
        }, toString: function () {
            return "GroupAction(" + JSON.stringify(this.aa) + ")"
        }
    };
    Wf.prototype = q.aa({}, Tf.prototype, Wf.prototype);
    function Xf(a) {
        this.aa = a;
        this.ba = []
    }

    Xf.prototype = {
        Cb: "UngroupAction", xb: function (a) {
            var b, c, d, e, f, g, h, k, l;
            d = {};
            k = this.aa;
            e = 0;
            for (g = k.length; e < g; e++)if (b = k[e], b = A(a, b), le(b) && !(b.id in d))for (d[b.id] = !0, c = {
                node: b,
                parent: b.parent,
                children: b.children.concat(),
                index: a.removeNode(b)
            }, this.ba.push(c), l = c.children, f = 0, h = l.length; f < h; f++)b = l[f], Uf(a, c.parent, b, -1)
        }, eb: function (a) {
            var b, c, d, e;
            if (0 !== this.ba.length) {
                for (b = d = this.ba.length - 1; 0 <= d && !(0 > b); b = d += -1)if (b = this.ba[b], 0 !== b.children.length) {
                    for (c = e = b.children.length - 1; 0 <= e && !(0 > c); c =
                        e += -1)Uf(a, b.node, b.children[c], -1);
                    Uf(a, b.parent, b.node, b.index)
                }
                a.Fd()
            }
        }
    };
    Xf.prototype = q.aa({}, Tf.prototype, Xf.prototype);
    function Yf(a, b) {
        var c, d, e, f;
        if (le(a))for (f = a.children, d = 0, e = f.length; d < e; d++)c = f[d], Yf(c, b); else a.transform(b)
    }

    function Zf(a, b) {
        this.aa = a;
        this.offset = b;
        this.Ba = [];
        this.ba = []
    }

    Zf.prototype = {
        Cb: "DuplicateAction", xb: function (a) {
            var b, c, d, e, f, g;
            d = new E(this.offset, this.offset);
            this.Ba.length = 0;
            var h = this;
            c = this.ba.length ? function () {
                return h.ba[e]
            } : function () {
                var b = Ne(a);
                h.ba.push(b);
                return b
            };
            g = this.aa;
            e = 0;
            for (f = g.length; e < f; e++)b = g[e], b = A(a, b).clone(c), Yf(b, d), Cd(a, b), this.Ba.push(b)
        }, eb: function (a) {
            var b, c;
            if (0 !== this.Ba.length)for (b = c = this.Ba.length - 1; 0 <= c && !(0 > b); b = c += -1)a.removeNode(this.Ba[b])
        }
    };
    Zf.prototype = q.aa({}, Tf.prototype, Zf.prototype);
    function $f(a, b) {
        this.aa = a;
        this.type = b;
        this.Ba = [];
        this.ba = []
    }

    $f.prototype = {
        Cb: "ChangeOrderAction", xb: function (a) {
            var b, c, d, e, f, g;
            this.ba.length = 0;
            this.Ba.length = 0;
            g = this.aa;
            e = 0;
            for (f = g.length; e < f; e++)switch (b = g[e], b = A(a, b), d = b.parent, c = a.removeNode(b), this.ba.push(c), this.Ba.push(b), this.type) {
                case ag:
                    Uf(a, d, b, -1);
                    break;
                case bg:
                    Uf(a, d, b, 0);
                    break;
                case cg:
                    0 < c ? Uf(a, d, b, c - 1) : Uf(a, d, b, c);
                    break;
                case dg:
                    c < d.children.length ? Uf(a, d, b, c + 1) : Uf(a, d, b, c)
            }
        }, eb: function (a) {
            var b, c, d, e;
            if (0 !== this.aa.length)for (b = e = this.aa.length - 1; 0 <= e && !(0 > b); b = e += -1)c = this.Ba[b], d = c.parent,
                a.removeNode(c), Uf(a, d, c, this.ba[b])
        }
    };
    var ag = 0, bg = 1, dg = 2, cg = 3;
    $f.prototype = q.aa({}, Tf.prototype, $f.prototype);
    function eg(a) {
        this.ea = a
    }

    eg.prototype = {
        Cb: "SetDocumentPropertiesAction", xb: function (a) {
            var b;
            this.ba = {};
            for (b in this.ea)this.ea.hasOwnProperty(b) && (this.ba[b] = a.pa(b), a.setProperty(b, this.ea[b]))
        }, eb: function (a) {
            for (var b in this.ba)this.ba.hasOwnProperty(b) && a.setProperty(b, this.ba[b])
        }
    };
    eg.prototype = q.aa({}, Tf.prototype, eg.prototype);
    function fg(a) {
        this.da = a;
        this.ba = 0
    }

    fg.prototype = {
        Cb: "SetPageAction", xb: function (a) {
            this.ba = a.jb;
            a.lb(this.da)
        }, eb: function (a) {
            a.lb(this.ba)
        }
    };
    fg.prototype = q.aa({}, Tf.prototype, fg.prototype);
    function gg(a) {
        J.apply(this, arguments);
        this.ma = new pb;
        this.Ba = {};
        this.ta = new V;
        this.Fd = this.ub = !0;
        this.sb = 0;
        this.ka = new V;
        this.da = new V;
        this.qa = new V;
        this.root = new qe(Ne(this), this);
        this.Ba[this.root.id] = this.root;
        this.Nd = 0;
        this.se = "magenta";
        this.Ab = this.ma.next;
        this.Ka = new V;
        this.gb = new V;
        this.ea = {};
        this.Va = new V;
        this.qb = new V;
        this.Aa = [];
        this.aa = [];
        this.jb = 0;
        a || (hg(this, this.root), this.lb(this.dd(0)))
    }

    gg.prototype = {
        log: t("DOC"), empty: function () {
            return 0 === this.root.children.length
        }, yc: function () {
            return this.Ab !== this.ma.next
        }, ya: function (a, b) {
            this.ka = new V;
            this.da = new V;
            this.qa = new V;
            if (b) {
                this.log("Performing actions without adding to undo stack");
                for (var c = 0; c < a.length; c++)a[c].xb(this)
            } else this.ma.ya(a, !1, this);
            return {Ob: Se(this.ka), Tc: Se(this.da), Gc: Se(Te(Te(this.qa, this.ka), this.da))}
        }, eb: function () {
            this.ka = new V;
            this.da = new V;
            this.qa = new V;
            this.ma.eb(this);
            return {
                Ob: Se(this.ka), Tc: Se(this.da),
                Gc: Se(Te(Te(this.qa, this.ka), this.da))
            }
        }, dc: function () {
            this.ka = new V;
            this.da = new V;
            this.qa = new V;
            this.ma.dc(this);
            return {Ob: Se(this.ka), Tc: Se(this.da), Gc: Se(Te(Te(this.qa, this.ka), this.da))}
        }, xc: function () {
            return this.ma.xc()
        }, wc: function () {
            return this.ma.wc()
        }, format: function (a, b) {
            var c, d, e, f, g;
            d = this.ub ? this.Ba : this.ta.keys;
            e = [];
            for (c in d)d.hasOwnProperty(c) && e.push(this.Ba[c]);
            g = ig(this, e);
            var h = [], k = [];
            d = 0;
            for (f = g.length; d < f; d++)c = g[d], "WallNode" !== c.type() ? (c.format(a, b), c.pa("wallAffinity") &&
            h.push(c)) : k.push(c);
            if (!this.Ka.empty()) {
                var l = new V, m, p, r = this, u;
                r.Ka.mb(function (a) {
                    for (u = 0; u < h.length; u++)m = h[u], r.Ba[a].resolve(m) && g.push(r.Ba[a]), l.add(a + "_" + m.id)
                });
                r.gb.mb(function (a) {
                    for (u = 0; u < k.length; u++)p = k[u], l.contains(p.id + "_" + a) || p.resolve(r.Ba[a]) && g.push(p)
                });
                d = 0;
                for (f = g.length; d < f; d++)c = g[d], "WallNode" !== c.type() || l.contains(c.id) || (l.add(c.id), c.format(a, b))
            }
            this.ta.keys = {};
            this.ub = !1;
            return e.length
        }, na: function (a, b) {
            function c(c) {
                g.ad(function (b) {
                    g.Va.contains(me(b)) || je(b) ===
                    c && (b.qa || b.na(a))
                });
                jg(g, a, c, b)
            }

            var d, e, f, g = this;
            this.qb.add(this.Nd);
            d = Se(this.qb);
            d.sort(function (a, b) {
                return a - b
            });
            e = 0;
            for (f = d.length; e < f; e++)c(d[e])
        }, bb: function (a, b, c, d) {
            var e;
            e = null;
            this.ad(function (f) {
                me(f) === c && f.bb(a, b) && (!(null === e || je(e) <= je(f)) || d && d !== f.type() || (e = f))
            });
            return e
        }, mb: function (a, b) {
            var c;
            c = function (d) {
                var e, f, g;
                if (d.children)for (a && b(d), g = d.children, e = 0, f = g.length; e < f; e++)d = g[e], c(d); else b(d)
            };
            c(this.root)
        }, ad: function (a, b) {
            function c(b) {
                if (b.children)for (var e = 0; e < b.children.length; e++)c(b.children[e]);
                else"PageNode" !== b.type() && a(b)
            }

            1 === arguments.length && (b = this.jb);
            c(this.aa[b || 0])
        }, Lc: function (a, b) {
            var c, d, e, f;
            c = new qe(a, this);
            Cd(this, c);
            e = 0;
            for (f = b.length; e < f; e++)d = b[e], Uf(this, c, this.Ba[d], -1);
            return c
        }, removeNode: function (a, b) {
            var c, d, e = this;
            void 0 === b && (b = !0);
            c = re(a.parent, a);
            0 <= c && (a.parent.children.splice(c, 1), a.parent = null, b && (d = function (b) {
                var c, h, k, l;
                delete e.Ba[b.id];
                a.Pe();
                e.ta.remove(b.id);
                if (le(b))for (l = b.children, h = 0, k = l.length; h < k; h++)c = l[h], d(c);
                b.pa("spotHighlight") && kg(e.Aa,
                    b);
                e.Ka.remove(a.id);
                e.gb.remove(a.id)
            }, d(a)));
            "PageNode" === a.type() && (this.aa.splice(c, 1), c === this.jb && (this.log("Removed current page."), this.lb(Math.min(c, this.aa.length - 1))));
            "PageNode" !== a.type() && (this.ka.remove(a.id), this.da.add(a.id));
            return c
        }, yb: function () {
            var a, b, c, d, e;
            a = e = d = b = null;
            this.mb(!1, function (c) {
                if (null === b || c.rect.x < b) b = c.rect.x;
                if (null === d || c.rect.right() > d) d = c.rect.right();
                if (null === e || c.rect.y < e) e = c.rect.y;
                if (null === a || c.rect.bottom() > a) a = c.rect.bottom()
            });
            c = null === b ? new M(0,
                0, 10, 10) : new M(b, e, d - b, a - e);
            this.log("getDrawingRectangle: %s", c);
            return c
        }, pa: function (a) {
            return this.ea[a]
        }, setProperty: function (a, b) {
            void 0 === b ? a in this.ea && delete this.ea[a] : this.ea[a] = b
        }, ud: function (a, b) {
            this.log("showLayer(%s, %s)", a, b);
            b ? this.Va.remove(a) : this.Va.add(a)
        }, me: function (a) {
            return !this.Va.contains(a)
        }, dd: function (a) {
            this.log("Adding page to document with index %s", a);
            if (a > this.aa.length)return this.log("Error: Can insert page with index %s", a), -1;
            var b = Ad("PageNode", Ne(this), this);
            Uf(this, this.root, b, a);
            return a
        }, Vb: function () {
            return this.aa.length
        }, lb: function (a) {
            if (0 <= a && a < this.aa.length)return this.log("Set current page to %s/%s", a, this.aa.length), this.jb = a, !0;
            this.log("Tried to set page to non-existing %s", a);
            return !1
        }, ke: function (a) {
            return 0 === arguments.length ? this.aa[this.jb] : this.aa[a]
        }, Vc: function (a) {
            this.mb(!1, function (b) {
                b.Vc(a)
            })
        }
    };
    function lg(a) {
        var b = 816, c = 1056;
        "width" in a.ea && (b = a.ea.width);
        "height" in a.ea && (c = a.ea.height);
        return new Dc(b, c)
    }

    function mg(a) {
        return "width" in a.ea ? new M(0, 0, a.ea.width, a.ea.height) : a.yb()
    }

    function kg(a, b) {
        var c;
        "function" !== typeof b ? c = function (a) {
            return a === b
        } : c = b;
        for (var d = 0, e = 0; e < a.length; e++)c(a[e]) ? d += 1 : d && (a[e - d] = a[e]);
        a.length -= d
    }

    function Uf(a, b, c, d) {
        c.parent && a.removeNode(c, !1);
        -1 === d ? b.children.push(c) : b.children.splice(d, 0, c);
        c.parent = b;
        hg(a, c);
        a.Fd = !0;
        "PageNode" === c.type() && (-1 === d ? a.aa.push(c) : a.aa.splice(d, 0, c))
    }

    function ng(a, b, c) {
        var d, e, f, g, h, k, l, m, p, r;
        0 === b.indexOf("zwibblerclip.") && (b = b.substr(13));
        f = JSON.parse(b);
        b = [];
        h = a.sb;
        p = 0;
        for (r = f.length; p < r; p++)if (e = f[p], "GroupAction" === e.type) b.push(new Wf(e.members)), c.push(h++); else if ("CreateAction" === e.type) {
            m = e.properties;
            k = {};
            for (g in m)m.hasOwnProperty(g) && (l = m[g], "[object Array]" === Object.prototype.toString.apply(l) && "Matrix" === l[0] && (l.splice(0, 1), l = new O(l)), k[g] = l);
            b.push(new C(e.node, k));
            c.push(h++)
        }
        d = a.sb;
        g = function (b) {
            a.log("Remap %s -> %s", b, b +
                d);
            return b + d
        };
        e = 0;
        for (f = b.length; e < f; e++)c = b[e], c.Qe(g);
        return b
    }

    function og(a, b, c, d) {
        var e, f, g, h;
        if (ke(b)) {
            e = [];
            h = b.children;
            f = 0;
            for (g = h.length; f < g; f++)b = h[f], d = og(a, b, c, d), e.push(d - 1);
            c.push({type: "GroupAction", members: e})
        } else {
            a = fe(b);
            g = {};
            for (e in a)a.hasOwnProperty(e) && (f = a[e], f instanceof O && (f = ["Matrix", f.m11, f.m12, f.m21, f.m22, f.Da, f.Ea]), g[e] = f);
            c.push({type: "CreateAction", node: b.type(), properties: g})
        }
        return d + 1
    }

    function pg(a, b) {
        var c;
        c = 0;
        a.Fd && (a.Fd = !1, a.mb(!0, function (a) {
            a.Va = c++
        }));
        b.sort(function (a, b) {
            return a.Va - b.Va
        })
    }

    function ig(a, b) {
        var c, d, e, f, g;
        e = [];
        c = {};
        f = 0;
        for (g = b.length; f < g; f++) {
            for (d = b[f]; ke(d);)console.log("Node type %s:%s is a group member", d.id, d.type()), d = d.parent;
            d.id in c || (c[d.id] = !0, e.push(d))
        }
        pg(a, e);
        return e
    }

    function qg(a, b) {
        var c = [];
        a.ad(function (a) {
            b.contains(a.yb()) && c.push(a)
        });
        return c
    }

    function jg(a, b, c, d) {
        if (0 !== a.Aa.length && c === a.Nd) {
            b.save();
            b.beginPath();
            c = d || mg(a);
            b.moveTo(c.x, c.y);
            b.lineTo(c.x, c.bottom());
            b.lineTo(c.right(), c.bottom());
            b.lineTo(c.right(), c.y);
            b.closePath();
            d = !1;
            for (var e = 0; e < a.Aa.length; e++)a.Aa[e].page === a.aa[a.jb] && (a.Aa[e].clip(b), d = !0);
            d && (b.clip(), b.fillStyle = a.se, b.fillRect(c.x, c.y, c.width, c.height));
            b.restore()
        }
    }

    function rg(a) {
        a.ma = new pb
    }

    function A(a, b, c) {
        var d;
        void 0 === c && (c = !1);
        Pe(b);
        return b in a.Ba ? (d = a.Ba[b], c && (a.ta.add(b), a.qa.add(b)), d) : null
    }

    function Cd(a, b) {
        Uf(a, a.aa[a.jb], b, -1)
    }

    function Dd(a, b) {
        Pe(b);
        a.qa.add(b);
        a.ta.add(b)
    }

    function hg(a, b, c) {
        var d, e, f, g;
        void 0 === c && (c = !0);
        S("id" in b, "Must be a node");
        if (!(b.id in a.Ba) && (a.Ba[b.id] = b, le(b)))for (g = b.children, e = 0, f = g.length; e < f; e++)d = g[e], hg(a, d, c);
        "PageNode" !== b.type() && (a.ka.add(b.id), a.da.remove(b.id));
        b.Vc(!1);
        c && a.ta.add(b.id);
        a.qb.add(je(b));
        b.pa("spotHighlight") && "PathNode" === b.type() && (a.Aa.push(b), b.page = a.aa[a.jb]);
        b.pa("wallAffinity") && a.gb.add(b.id);
        "WallNode" === b.type() && a.Ka.add(b.id);
        b.Oe()
    }

    function Ne(a) {
        a.log("nextId bumped to %s", a.sb + 1);
        return a.sb++
    }

    q.aa({}, J.prototype, gg.prototype);
    function sg(a, b) {
        this.ja = a;
        this.canvas = document.createElement("canvas");
        this.height = this.width = b;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style.cursor = "crosshair";
        this.ta = 0;
        this.ja.appendChild(this.canvas);
        "G_vmlCanvasManager" in window && window.G_vmlCanvasManager.initElement(this.canvas);
        this.oa = this.canvas.getContext("2d");
        var c = document.createElement("input");
        c.setAttribute("type", "range");
        this.ma = document.createElement("input");
        this.ma.setAttribute("type", "checkbox");
        "range" === c.type ? (this.ja.appendChild(document.createElement("br")), this.ja.appendChild(c), c.min = 0, c.max = 255, c.value = 255, this.da = c) : (this.da = null, c = "colourcheckbox" + this.ta, this.ma.setAttribute("id", c), this.ja.appendChild(document.createElement("br")), this.ja.appendChild(this.ma), this.ta += 1, c = q("<label>").ob("for", c).text("Transparent"), this.ja.appendChild(c[0]));
        this.aa = this.height;
        this.ka = .8 * this.height;
        if (sg[b]) this.data = sg[b]; else {
            for (var c = this.oa.getImageData(0, 0, this.aa, this.aa), d = this.aa /
                2, e = this.ka / 2, f, g = 0; g < this.aa; g++) {
                var h = Math.sqrt(d * d - (g - d) * (g - d)), k = Math.floor(-h + d), l = Math.floor(h + d),
                    m = e * e - (g - d) * (g - d);
                if (0 <= m) {
                    for (var h = Math.sqrt(m), m = Math.floor(-h + d), p = Math.floor(h + d),
                             h = g * this.aa * 4 + 4 * k; k <= m; k++)f = Math.atan2(g - d, k - d), f = new W(2, [f / Math.PI * 180, 1, 1, 1]), f = gf(f, 0), c.data[h++] = 255 * f.values[0], c.data[h++] = 255 * f.values[1], c.data[h++] = 255 * f.values[2], c.data[h++] = 255;
                    h = g * this.aa * 4 + 4 * p;
                    k = p
                } else h = g * this.aa * 4 + 4 * k;
                for (; k <= l; k++)f = Math.atan2(g - d, k - d), f = new W(2, [f / Math.PI * 180, 1, 1, 1]), f = gf(f,
                    0), c.data[h++] = 255 * f.values[0], c.data[h++] = 255 * f.values[1], c.data[h++] = 255 * f.values[2], c.data[h++] = 255
            }
            this.data = c;
            sg[b] = c
        }
        this.ba = new W(2, [20, 1, 1, 1]);
        this.update();
        this.na();
        var r = this;
        r.Aa = !1;
        r.qa = "";
        Na(q(this.canvas), function (a) {
            var b = q(r.canvas).offset(), c = a.pageX - b.left, b = a.pageY - b.top;
            r.Aa = !0;
            tg(r, c, b);
            a.stopPropagation();
            a.preventDefault()
        });
        La(q(this.canvas), function (a) {
            if (r.Aa) {
                var b = q(r.canvas).offset();
                tg(r, a.pageX - b.left, a.pageY - b.top)
            }
            a.stopPropagation();
            a.preventDefault()
        });
        Ma(function () {
            r.Aa =
                !1;
            r.qa = ""
        });
        null !== this.da && Ga(q(this.da), function () {
            r.ba.values[3] = r.da.value / 255;
            r.update();
            r.na()
        });
        Ga(q(this.ma), function () {
            r.ba.values[3] = r.ma.checked ? 0 : 1;
            r.update();
            r.na()
        })
    }

    sg.prototype = {
        update: function () {
            this.Ka && this.Ka(this.ba.toString())
        }, na: function () {
            this.oa.save();
            this.oa.lineWidth = 1;
            this.oa.fillStyle = "rgb(128, 128, 128)";
            this.oa.fillRect(0, 0, this.width, this.height);
            this.oa.putImageData(this.data, 0, 0);
            var a = this.ba.values[0] / 180 * Math.PI;
            this.oa.beginPath();
            var b = {x: Math.cos(a) * this.ka / 2 + this.aa / 2, y: Math.sin(a) * this.ka / 2 + this.aa / 2}, c = {
                    x: Math.cos(a + 2 * Math.PI / 3) * this.ka / 2 + this.aa / 2,
                    y: Math.sin(a + 2 * Math.PI / 3) * this.ka / 2 + this.aa / 2
                }, d = {
                    x: Math.cos(a + 4 * Math.PI / 3) * this.ka /
                    2 + this.aa / 2, y: Math.sin(a + 4 * Math.PI / 3) * this.ka / 2 + this.aa / 2
                }, e = Math.cos(a) * this.aa / 2 + this.aa / 2, a = Math.sin(a) * this.aa / 2 + this.aa / 2,
                f = c.x + (d.x - c.x) / 2, g = c.y + (d.y - c.y) / 2;
            this.oa.moveTo(b.x, b.y);
            this.oa.lineTo(c.x, c.y);
            this.oa.lineTo(d.x, d.y);
            this.oa.lineTo(b.x, b.y);
            var h = this.oa.createLinearGradient(c.x, c.y, d.x, d.y);
            h.addColorStop(0, "#ffffff");
            h.addColorStop(1, "#000000");
            this.oa.fillStyle = h;
            this.oa.fill();
            h = this.oa.createLinearGradient(b.x, b.y, f, g);
            f = gf(this.ba, 2);
            f.values[1] = 1;
            f.values[2] = 1;
            f = gf(f, 0);
            f.values[3] =
                1;
            h.addColorStop(0, f.toString());
            f.values[3] = 0;
            h.addColorStop(1, f.toString());
            this.oa.fillStyle = h;
            this.oa.fill();
            this.strokeStyle = "#000000";
            this.oa.beginPath();
            this.oa.moveTo(b.x, b.y);
            this.oa.lineTo(e, a);
            this.oa.stroke();
            a = 1 - this.ba.values[2];
            e = this.ba.values[1] * b.x + a * d.x + (1 - this.ba.values[1] - a) * c.x;
            a = this.ba.values[1] * b.y + a * d.y + (1 - this.ba.values[1] - a) * c.y;
            this.oa.beginPath();
            this.oa.arc(e, a, 4, 0, 2 * Math.PI, !1);
            this.oa.stroke();
            this.oa.restore();
            this.kc = b;
            this.Rc = c;
            this.kd = d
        }
    };
    function tg(a, b, c) {
        var d = Math.sqrt((b - a.aa / 2) * (b - a.aa / 2) + (c - a.aa / 2) * (c - a.aa / 2));
        if ("ring" === a.qa || "triangle" !== a.qa && d >= a.ka / 2 && d <= a.aa / 2) a.ba.values[0] = Math.atan2(a.aa / 2 - c, a.aa / 2 - b) / Math.PI * 180 + 180, 0 === a.ba.values[1] && (a.ba.values[1] = 1, a.ba.values[2] = 1), a.qa = "ring"; else {
            var e, f = a.kc, d = a.Rc, g = a.kd;
            e = (f.x - g.x) * (d.y - g.y) - (d.x - g.x) * (f.y - g.y);
            d = ((d.y - g.y) * (b - g.x) - (d.x - g.x) * (c - g.y)) / e;
            b = 1 - Math.max(0, d) - Math.max(0, (-(f.y - g.y) * (b - g.x) + (f.x - g.x) * (c - g.y)) / e);
            a.ba.values[1] = Math.min(Math.max(d, 0), 1);
            a.ba.values[2] =
                1 - Math.min(Math.max(b, 0), 1);
            a.qa = "triangle"
        }
        0 === a.ba.values[3] && (a.ba.values[3] = 1, null !== a.da && (a.da.value = 255));
        a.na();
        a.update()
    }

    function ug(a, b) {
        a.ba = gf(Q(b), 2);
        null !== a.da && (a.da.value = Math.round(255 * a.ba.values[3]));
        a.ma.checked = 0 === a.ba.values[3] ? !0 : !1;
        a.na();
        a.update()
    }

    function vg() {
        var a = document.createElement("canvas");
        "G_vmlCanvasManager" in window && window.G_vmlCanvasManager.initElement(a);
        return a.getContext && a.getContext("2d").getImageData
    };
    function wg() {
        var a;
        if ("localStorage" in window)try {
            a = window.localStorage
        } catch (b) {
        }
        return void 0 !== a
    }

    var xg = {};

    function yg(a) {
        return wg() ? window.localStorage.getItem(a) : xg[a]
    };
    function zg(a, b, c, d) {
        this.view = a;
        this.Ea = this.Da = 0;
        this.Pa = !1;
        this.aa = b;
        this.Sa(c, d)
    }

    zg.prototype = {
        log: t("SELECT"), hb: function (a) {
            "touchmove" === a.type ? (a = Ag(this.view, a.changedTouches[0]), this.Wa(a.x, a.y)) : "touchend" === a.type && (a = Ag(this.view, a.changedTouches[0]), this.Ya(a.x, a.y))
        }, Xa: function (a) {
            this.log("Gesture detected; aborting select box.");
            this.view.ra = this.aa;
            this.view.ra.Xa && this.view.ra.Xa(a)
        }, Sa: function (a, b) {
            this.Da = a;
            this.Ea = b;
            this.Pa = !0
        }, Wa: function (a, b) {
            if (this.Pa) {
                var c = this.view.oa, d = this;
                this.view.na(function () {
                    c.save();
                    c.strokeStyle = "#0050B7";
                    c.lineWidth = 2 / d.view.scale;
                    c.fillStyle = "rgba(0, 80, 183, 0.2)";
                    var e = new M(d.Da + .5, d.Ea + .5, a - d.Da, b - d.Ea);
                    c.fillRect(e.x, e.y, e.width, e.height);
                    c.strokeRect(e.x, e.y, e.width, e.height);
                    c.restore()
                })
            }
        }, Ya: function (a, b) {
            this.Pa = !1;
            this.view.fb();
            for (var c = this.view, d = qg(c.la, new M(this.Da, this.Ea, a - this.Da, b - this.Ea)),
                     e = 0; e < d.length; e++)Rf(c, d[e]);
            Sf(this.view);
            this.view.na();
            this.view.ra = this.aa
        }
    };
    function $a(a) {
        this.view = a;
        Td(this.view, "");
        this.$b = this.view.ga.$b();
        this.ka = 1;
        this.$b && (this.ka = 2);
        this.da = new ib(a)
    }

    $a.prototype = {
        log: t("DefaultBehaviour"), Db: function () {
            this.log("Entering pick tool.");
            this.view.canvas.style.cursor = "default"
        }, Ib: function () {
            this.log("Leaving pick tool.")
        }, hb: function (a) {
            for (var b, c = 0; c < a.touches.length; c++) {
                b = a.touches[c];
                b = x(this.view, b.pageX, b.pageY);
                if ("touchstart" === a.type)return this.Sa(b.x, b.y, a);
                if ("touchend" === a.type)return this.Ya(b.x, b.y)
            }
            return !1
        }, Xa: function (a) {
            return this.da.Xa(a)
        }, Sa: function (a, b, c) {
            var d, e;
            this.log("onMouseDown");
            if (this.view.ga.get("readOnly"))return (d =
                this.view.la.bb(a, b, this.view.La)) ? (this.log("layer=%s active=%s", me(d), this.view.La), this.view.aa.emit("node-clicked", d.id)) : this.log("readOnly mode: Ignoring click."), !1;
            d = this.view;
            if (d.Fa) e = null; else {
                e = d.ve / d.scale;
                for (var f = null, g = Number.MAX_VALUE, h = 0; h < d.gb.length; h++) {
                    var k = d.gb[h], l = K(k.x, k.y, a, b);
                    l < e && l < g && (g = l, f = k)
                }
                e = f
            }
            if (e) B(this.view, new md(this.view, e, !1, a, b)); else {
                if (d = this.view.selection.length) d = this.view, g = Pd(d), h = q(d.canvas).offset(), f = Qd(d.ba), "changedTouches" in c ? (e = c.changedTouches[0].pageX -
                    h.left - g, g = c.changedTouches[0].pageY - h.top - g) : (e = c.pageX - h.left - g, g = c.pageY - h.top - g), h = d.da, d = d.Va && e > h.width - d.Va.width - f && g < d.Va.height;
                d && Bg(this.view);
                if (this.view.Fa && (d = this.view.Fa, e = d.Wb(a, b, 1 / this.view.scale * this.ka), null !== e)) {
                    B(this.view, new Ya(this.view, d, e, a, b));
                    return
                }
                if (d = this.view.la.bb(a, b, this.view.La)) this.log("layer=%s active=%s", me(d), this.view.La), this.view.aa.emit("node-clicked", d.id);
                if (d && me(d) === this.view.La) {
                    f = d === this.view.Fa;
                    g = d.Eb === this.view.Eb;
                    this.log("wasEditNode: %s, wasSelected: %s",
                        f, g);
                    if ("WallNode" === d.type() && 1 < d.Fb.length && (e = d.Wb(a, b, 1 / this.view.scale), null !== e)) {
                        B(this.view, new Ya(this.view, d, e, a, b));
                        return
                    }
                    g || (c.shiftKey || this.view.fb(), Rf(this.view, d), Sf(this.view));
                    B(this.view, new md(this.view, this.view.Yb ? new Xd(d, d.Ja()) : new Yd, !f && g, a, b))
                } else if (c = this.view, c.selection.length && c.Yd.Pb(a, b)) B(this.view, new md(this.view, this.view.Yb ? new Xd(this.view.selection[0], this.view.selection[0].Ja()) : new Yd, !0, a, b)); else if (c = this.view.ga, "auto" === c.ua.allowSelectBox ? (d = c.$b(),
                        e = document.documentElement.offsetHeight, f = window.innerHeight, g = !d || d && 0 < f - e + 50, c.log("Allowing select box: %s (useTouch=%s, documentHeight=%s, windowHeight=%s)", g, d, e, f), c = g) : c = c.ua.allowSelectBox, c) this.view.Fa = null, B(this.view, new zg(this.view, this, a, b)); else return this.log("Disabled select box -- mobile touch active."), this.view.Fa = null, this.view.fb(), Sf(this.view), this.view.na(), !1
            }
        }, Ya: function () {
            this.log("onMouseUp")
        }, vb: function (a, b) {
            this.log("keyboard: %s", a);
            var c = !0, d = this.view.ga.get("nudge");
            b && b.ctrlKey && (d = this.view.ga.get("preciseNudge"));
            switch (a) {
                case "bring-to-front":
                    Cg(this.view);
                    break;
                case "send-to-back":
                    Dg(this.view);
                    break;
                case "left":
                    Eg(this.view, -1, 0, d) || (this.view.Qa = Math.min(this.view.Qa + 16, 0), ob(this.view), this.view.na());
                    break;
                case "right":
                    Eg(this.view, 1, 0, d) || (d = this.view.da.width, this.view.Qa = Math.max(-(d * this.view.scale - d), this.view.Qa - 16), ob(this.view), this.view.na());
                    break;
                case "up":
                    Eg(this.view, 0, -1, d) || (this.view.Ma = Math.min(this.view.Ma + 16, 0), ob(this.view), this.view.na());
                    break;
                case "down":
                    Eg(this.view, 0, 1, d) || (d = this.view.da.height, this.view.Ma = Math.max(-(d * this.view.scale - d), this.view.Ma - 16), ob(this.view), this.view.na());
                    break;
                case "select-none":
                    this.view.fb();
                    Sf(this.view);
                    this.view.na();
                    this.view.Ga.rb && this.view.tb.emit("goto-toolbar");
                    break;
                case "select-all":
                    var e = [];
                    this.view.la.ad(function (a) {
                        e.push(a)
                    });
                    Fg(this.view, e);
                    this.view.na();
                    this.view.Ga.rb && this.view.tb.emit("goto-toolbar");
                    break;
                case "duplicate":
                    Gg(this.view);
                    break;
                case "move-up":
                    Hg(this.view);
                    break;
                case "move-down":
                    Ig(this.view);
                    break;
                case "delete":
                    Bg(this.view);
                    break;
                case "curve-tool":
                    Jg(this.view, {});
                    break;
                case "line-tool":
                    Kg(this.view, {}, !1, !1);
                    break;
                case "group":
                    Lg(this.view);
                    break;
                case "ungroup":
                    Mg(this.view);
                    break;
                case "undo":
                    this.view.eb();
                    break;
                case "redo":
                    this.view.dc();
                    break;
                case "cut":
                    Ng(this.view);
                    break;
                case "copy":
                    Og(this.view);
                    break;
                case "paste":
                    Pg(this.view);
                    break;
                case "zoom-normal":
                    this.view.ga.get("allowZoom") ? (d = Qg(this.view), this.view.scale = 1, this.view.Qa = -d.x, this.view.Ma =
                        -d.y, ob(this.view), this.view.na()) : this.log("Zooming is disabled.");
                    break;
                case "zoom-in":
                    this.view.ga.get("allowZoom") ? Rg(this.view) : this.log("Zooming is disabled.");
                    break;
                case "zoom-out":
                    this.view.ga.get("allowZoom") ? Sg(this.view) : this.log("Zooming is disabled.");
                    break;
                default:
                    c = !1
            }
            c && (b.preventDefault(), b.stopPropagation())
        }, Jb: function (a) {
            var b;
            a.zd ? (this.view.kb = a.Ua, this.view.wb = a.Ua, b = "fillStyle") : (this.view.pb = a.Ua, b = "strokeStyle");
            this.view.setProperty(b, a.Ua)
        }, cc: function (a, b) {
            b ? (this.view.kb =
                Ed(this.view.kb, a), this.view.wb = Ed(this.view.wb, a)) : this.view.pb = Ed(this.view.pb, a);
            Md(this.view, a, b)
        }, Xb: function (a, b) {
            this.log("onDoubleClick");
            var c = this.view.la.bb(a, b, this.view.La);
            this.log("hittest: %s, hasText: %s", null !== c, null !== c && c.Jd());
            this.view.aa.emit("double-click", a, b, c ? c.id : null);
            if (c && "PathNode" === c.type() && !this.view.ga.get("allowTextInShape")) this.log("Editing text in shape is disabled."); else if (c && c.Jd()) this.log("Text double-clicked."), Tg(this.view, {}), this.view.ra.Od && this.view.ra.Od(c,
                a, b); else return !1
        }, Qb: function () {
            return "pick"
        }
    };
    for (var Ug, Vg = [], Wg = 0; 4 > Wg; Wg++)
        /*修改：创建画布时，画布背景会出现DEMO字样*/
       // Vg.push(String.fromCharCode(">2$-".charCodeAt(Wg) ^ "zwibbler3".charCodeAt(Wg % 9)));
    Ug = Vg.join("");
    for (var Xg, Yg = [115, 116, 114, 111, 107, 101, 84, 101, 120, 116], Zg = [],
             $g = 0; $g < Yg.length; $g++)Zg.push(String.fromCharCode(Yg[$g]));
    Xg = Zg.join("");
    function ah(a, b, c, d, e, f, g, h) {
        this.ga = e;
        this.Ze = f;
        this.ka = c;
        this.tb = d;
        this.lc = h;
        this.canvas = a[0];
        this.oa = this.canvas.getContext("2d");
        this.aa = g;
        this.ub = !0 === e.get("pageView");
        this.Ic = new db;
        bh(this);
        this.Ga = {rb: !1, Pa: !1, he: !1, x: 100, y: 100};
        this.ra = new $a(this);
        this.Yc = null;
        this.ta = new Hf("horizontal", !0, this.lc);
        this.canvas.parentNode.appendChild(this.ta.canvas);
        this.ba = new Hf("vertical", !1, this.lc);
        this.canvas.parentNode.appendChild(this.ba.canvas);
        this.$a = "none";
        this.Zb = 0;
        this.Yb = this.Bd = this.Hc =
            !0;
        this.gb = [];
        this.La = "default";
        this.Td = ch(this);
        this.da = new Dc(this.canvas.width / this.Td, this.canvas.height / this.Td);
        var k = this;
        this.request = new Mb;
        this.request.canvas = this.canvas;
        this.request.on("reformat", function (a) {
            k.log("Node %s requests reformat", a);
            a in k.la.Ba && (k.log("   Reformatting... zoom=%s", k.$a), Dd(k.la, a));
            k.update();
            a === k.qa && dh(k);
            eh(k);
            k.aa.emit("resource-loaded")
        });
        this.request.on("convert-dom-request", function (a, b) {
            k.aa.emit("convert-dom-request", b, a)
        });
        this.qa = this.background =
            this.qb = null;
        this.Xc = "no-repeat";
        this.Fa = null;
        e.on("useTouch", function () {
            e.$b() ? (k.Va = document.createElement("img"), k.Va.setAttribute("src", Y(e, "trashcan.png")), k.ve = 16) : (k.Va = null, k.ve = 8)
        });
        this.ma = null;
        this.ba.on("scroll", function (a) {
            k.Ma = -a * k.scale;
            k.na()
        });
        this.ta.on("scroll", function (a) {
            k.Qa = -a * k.scale;
            k.na()
        });
        dh(this);
        fh(this, b);
        (a = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) ? (this.log("Using requestAnimationFrame"), this.Zc = a) : this.log("Emulating requestAnimationFrame");
        this.Ud = !1;
        this.Ub = null;
        this.ga.on("update", function (a, b) {
            k.Cc(a, b)
        });
        this.lc.bind(q(document), "webkitfullscreenchange", function () {
            0 <= navigator.userAgent.search("Safari") && 0 > navigator.userAgent.search("Chrome") && (k.log("SAFARI WORKAROUND: Disabling requestAnimationFrame."), k.Zc = ah.prototype.Zc)
        });
        this.Ab = !1;
        F(this)
    }

    ah.prototype = {
        log: t("VIEW"), Zc: function (a) {
            a()
        }, ud: function (a, b) {
            this.la.ud(a, b);
            b || a !== this.La || (this.fb(), Sf(this));
            this.na()
        }, Cc: function (a, b) {
            var c = !1;
            switch (a) {
                case "allowResize":
                    vd(this);
                    this.na();
                    break;
                case "defaultBrushColour":
                    this.wb = b;
                    this.ra && void 0 !== this.ra.ne && this.ra.sd(b);
                    break;
                case "defaultFillStyle":
                    this.kb = this.Ca.fillStyle = b;
                    break;
                case "defaultStrokeStyle":
                    this.pb = b;
                    this.Ca.strokeStyle = b;
                    break;
                case "defaultLineWidth":
                    this.Ca.lineWidth = b;
                    this.ra && !this.ra.ne && this.ra.Md && this.ra.Md(b);
                    break;
                case "defaultFont":
                    this.Ca.fontName = b;
                    break;
                case "defaultBold":
                    this.Ca.bold = b;
                    break;
                case "defaultItalic":
                    this.Ca.italic = b;
                    break;
                case "defaultFontSize":
                    this.Ca.fontSize = b;
                    break;
                case "defaultTextFillStyle":
                    this.Ca.textFillStyle = b;
                    break;
                case "defaultTextStokeStyle":
                    this.Ca.textStrokeStyle = b;
                    break;
                case "defaultTextLineWidth":
                    this.Ca.textLineWidth = b;
                    break;
                case "defaultBrushWidth":
                    this.pc = b;
                    this.ra && this.ra.ne && this.ra.Md(b);
                    break;
                case "defaultZoom":
                    gh(this, b);
                    break;
                case "pageView":
                    this.ub = b;
                    c = !0;
                    break;
                case "pagePlacement":
                    gh(this, this.$a);
                    break;
                case "snap":
                case "background":
                case "gridSpacing":
                case "gridBlocks":
                case "gridColour":
                case "backgroundImage":
                    dh(this);
                    c = !0;
                    break;
                case "pageShadow":
                case "symmetry":
                case "outsidePageColour":
                    c = !0;
                    break;
                case "readOnly":
                    !0 === b && (F(this), this.fb(), Sf(this), c = !0);
                    this.la.Vc(b);
                    break;
                case "spotHighlightColour":
                    this.la.se = b;
                    c = !0;
                    break;
                case "spotHighlightZIndex":
                    this.la.Nd = b, c = !0
            }
            this.ra.Cc && this.ra.Cc(a, b);
            c && this.na()
        }, vb: function (a, b) {
            this.ra.vb && this.ra.vb(a,
                b);
            var c;
            if (c = "TEXTAREA" !== b.target.tagName && "INPUT" !== b.target.tagName) {
                var d;
                if (this.Ga.rb) {
                    var e = c = 0, f = this.ga.get("nudge");
                    switch (a) {
                        case "right":
                            c = f;
                            break;
                        case "left":
                            c = -f;
                            break;
                        case "down":
                            e = f;
                            break;
                        case "up":
                            e = -f;
                            break;
                        case "enter":
                            this.ra.zb ? (this.Ga.Pa = !1, d = "click") : (this.Ga.Pa = !this.Ga.Pa, d = this.Ga.Pa ? "mousedown" : "mouseup")
                    }
                    if (c || e) d = this.da, this.Ga.x += c, this.Ga.x = Math.max(this.Ga.x, 0), this.Ga.x = Math.min(d.width, this.Ga.x), this.Ga.y += e, this.Ga.y = Math.max(this.Ga.y, 0), this.Ga.y = Math.min(d.height,
                        this.Ga.y), this.na(), d = "mousemove";
                    d ? (b.preventDefault(), b.stopPropagation(), this.na(), e = q(this.canvas).offset(), c = this.Ga.x + e.left - window.pageXOffset, e = this.Ga.y + e.top - window.pageYOffset, this.log("Simulate a %s at (%s,%s)", d, c, e), f = document.createEvent("MouseEvents"), f.initMouseEvent(d, !0, !0, window, 0, c, e, c, e, !1, !1, !1, !1, this.Ga.Pa ? 1 : 0, null), this.canvas.dispatchEvent(f), d = !0) : d = !1
                } else d = !1;
                c = !d
            }
            if (c) {
                switch (a) {
                    case "next-page":
                        this.lb(this.la.jb + 1);
                        break;
                    case "previous-page":
                        this.lb(this.la.jb - 1);
                        break;
                    case "zoom-to-page":
                        this.ga.get("allowZoom") && gh(this, "page");
                        break;
                    case "zoom-to-width":
                        this.ga.get("allowZoom") && gh(this, "width")
                }
                b.preventDefault();
                b.stopPropagation()
            }
        }, Kg: function () {
            return this.Ga.rb
        }, Ha: function (a, b) {
            b = b || this.ga.get("snap");
            var c = this.ga.get("autoSnap"), d;
            if (0 < b) c = Math.round(a.x / b) * b, d = Math.round(a.y / b) * b; else {
                if (0 < c)return this.Ic.Ha(a.x, a.y, c / this.scale);
                c = a.x;
                d = a.y
            }
            return new y(c, d)
        }, setProperty: function (a, b) {
            var c = hh(this, !0);
            this.Ca[a] = b;
            if (c.length) {
                var d = [new Nd(c,
                    a, b)];
                if ("fillStyle" === a)for (var e = 0; e < c.length; e++) {
                    var f = A(this.la, c[e], !1);
                    this.log("nodeType=%s closed=%s", f.type(), f.pa("closed"));
                    "PathNode" === f.type() && !1 === f.pa("closed") && d.push(new Nd([c[e]], "strokeStyle", b))
                }
                this.ya(d)
            }
            0 < this.selection.length && "lineWidth" === a && "BrushNode" === this.selection[0].type() ? this.pc = b : "textFillStyle" === a && (this.Ca.textFillStyle = b)
        }, oc: function (a, b) {
            this.ra.oc && this.ra.oc(a, b)
        }, fb: function (a) {
            var b = !1;
            0 < this.selection.length && (this.Eb += 1, this.selection.length = 0, this.log("Clear selection. selectGeneration=%s",
                this.Eb), b = !0);
            null !== this.Ka && (this.aa.emit("selected-edit-handle", null, null), b = !0);
            this.Fa && (this.log("Clear selection."), this.Ka = this.Fa = null, b = !0);
            b && a && (Sf(this), this.na())
        }, ya: function (a, b) {
            if (this.ga.get("readOnly")) this.log("readOnly mode: Ignoring change."); else {
                var c = this.la.ya(a, b);
                this.log("Commit added %s nodes", c.Ob.length);
                var d;
                this.la.format(this.oa, this.request);
                if (c.Ob.length) {
                    var e = [];
                    for (d = 0; d < c.Ob.length; d++)e.push(A(this.la, c.Ob[d], !1));
                    this.ga.get("autoPickTool") && Fg(this,
                        e)
                } else if (this.selection.length || this.Fa) {
                    e = 0;
                    this.Eb += 1;
                    for (d = 0; d < this.selection.length; d++)d !== e && (this.selection[e] = this.selection[d]), this.selection[e].id in this.la.Ba && (this.selection[e].Eb = this.Eb, e++);
                    this.selection.length !== e && (this.selection.length = e);
                    !this.Fa || this.Fa.id in this.la.Ba || (this.log("EditNode %s no longer exists", this.Fa.id), this.Fa = null, null !== this.Ka && this.aa.emit("selected-edit-handle", null, null), this.Ka = null);
                    0 !== this.selection.length || this.Fa || this.fb();
                    Sf(this)
                }
                ih(this,
                    c);
                eh(this);
                this.na();
                this.aa.emit("document-changed")
            }
        }, update: function (a, b) {
            if (this.la.format(this.oa, this.request) || a) vd(this), this.na(b)
        }, jc: function () {
            var a = q(this.canvas), b = a.offset(), c = q(this.canvas.parentNode).offset(), d = a.width(),
                a = a.height(), e = b.left - c.left, b = b.top - c.top, c = Pd(this);
            this.ba.moveTo(e + d - 20 + c, b + c);
            this.ba.nc(20, a - 20);
            this.ta.moveTo(e + c, b + a - 20 + c);
            this.ta.nc(d - 20, 20);
            eh(this);
            this.na()
        }, na: function (a) {
            if (!jh(this) && (this.Ub = a, !this.Ud)) {
                this.Ud = !0;
                var b = this;
                this.Zc.call(window,
                    function () {
                        b.Ud = !1;
                        var a = ch(b);
                        a !== b.Td && (b.log("Detected DPR change; resize canvas now"), kh(b, b.da.width, b.da.height), b.Td = a);
                        var d = jb(b), e = d.x, f = d.y, g = d.width, h = d.height;
                        b.oa.setTransform(1, 0, 0, 1, 0, 0);
                        b.oa.clearRect(0, 0, b.canvas.width, b.canvas.height);
                        b.ub && (b.oa.fillStyle = b.ga.get("outsidePageColour"), b.oa.fillRect(0, 0, b.canvas.width, b.canvas.height));
                        b.oa.scale(a, a);
                        b.oa.translate(b.Qa, b.Ma);
                        b.oa.scale(b.scale, b.scale);
                        var k = new E(b.Qa, b.Ma), k = k.multiply(new cb(b.scale, b.scale));
                        b.oa.tc = k;
                        b.ub ?
                            (e = b.oa, f = lg(b.la), e.beginPath(), e.fillStyle = "#FFFFFF", b.ga.get("pageShadow") && (e.shadowOffsetX = 3 / b.scale, e.shadowOffsetY = 3 / b.scale, e.shadowBlur = 5 / b.scale, e.shadowColor = "rgba(0,0,0,1.0)"), e.rect(0, 0, f.width, f.height), e.fill(), e.shadowColor = "rgba(0,0,0,0.0)", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0, e.strokeStyle = b.ga.get("pageBorderColour"), e.stroke(), lh(b, e, 0, 0, f.width, f.height), b.qb && b.qb(e, 0, 0, f.width, f.height)) : lh(b, b.oa, e, f, Math.max(g, g - e), Math.max(h, h - e));
                        e = Qf(b);
                        f = b.ga.ua.symmetry;
                        if (1 < f) {
                            g = 2 * Math.PI / f;
                            h = b.Ha(new y(b.canvas.width / a / 2, b.canvas.height / a / 2));
                            f & 1 && (k = new N(g, h.x, h.y));
                            for (b.oa.save(); g < 2 * Math.PI - 1E-8;)0 === (f & 1) && (k = new Sc(g, h.x, h.y)), b.oa.transform(k.m11, k.m21, k.m12, k.m22, k.Da, k.Ea), b.la.na(b.oa), g += 2 * Math.PI / f;
                            b.oa.setTransform(1, 0, 0, 1, 0, 0);
                            b.oa.fillStyle = "rgba(255,255,255,0.3)";
                            b.oa.fillRect(0, 0, b.canvas.width, b.canvas.height);
                            b.oa.restore()
                        }
                        b.la.na(b.oa, d);
                        b.aa.Ub && (b.oa.save(), b.aa.Ub(b.oa), b.oa.restore());
                        if (0 < b.selection.length) {
                            b.oa.save();
                            d = b.oa;
                            d.lineWidth =
                                1 / b.scale;
                            d.strokeStyle = "#888888";
                            d.beginPath();
                            for (k = 0; k < b.selection.length; k++)g = b.selection[k], f = g.Ja(), g = new lc(g.ab), g.transform(f), pc(g, d, [3 / b.scale, 3 / b.scale]);
                            d.stroke();
                            f = b.scale;
                            for (k = 0; k < b.gb.length; k++)g = b.gb[k], h = b.Ad.apply(g.x, g.y), g instanceof nd ? b.Wd && (d.beginPath(), d.strokeStyle = "#008000", d.lineWidth = 3 / f, d.moveTo(h.x, h.y), d.arc(h.x, h.y, 6 / f, 0, 1.5 * Math.PI, !1), d.stroke()) : (d.beginPath(), d.strokeStyle = "#000", d.lineWidth = 1 / f, d.rect(h.x - 4 / f, h.y - 4 / f, 4 / f * 2, 4 / f * 2), d.stroke());
                            b.oa.restore()
                        }
                        e &&
                        b.oa.restore();
                        b.Fa && b.Fa.Dd(b.oa, 1 / b.scale, b.Ka);
                        b.qc && b.ga.get("showHints") && (b.oa.save(), b.oa.font = 10 / b.scale + "px Arial", b.oa.fillStyle = "#000000", b.oa.textBaseline = "top", b.oa.fillText(b.qc, 0, 0), b.oa.restore());
                        e = b.oa;
                        b.Ga.rb && (d = b.Ga.x, k = b.Ga.y, f = ch(b), e.save(), e.setTransform(f, 0, 0, f, 0, 0), e.beginPath(), b.Ga.he ? (e.moveTo(d - 3, k - 10), e.lineTo(d + 3, k - 10), e.moveTo(d - 3, k + 10), e.lineTo(d + 3, k + 10), e.moveTo(d, k - 10), e.lineTo(d, k + 10)) : (e.moveTo(d, k - 3), e.lineTo(d, k - 15), e.moveTo(d, k + 3), e.lineTo(d, k + 15), e.moveTo(d -
                            3, k), e.lineTo(d - 15, k), e.moveTo(d + 3, k), e.lineTo(d + 15, k)), b.Ga.Pa && b.oa.arc(d, k, 8, 0, 2 * Math.PI, !1), e.lineWidth = 2, e.strokeStyle = "#000000", e.stroke(), e.restore());
                        b.ra.jd && b.ra.jd(b.oa);
                        b.Ub && b.Ub(b.oa);
                        b.aa.Mc("draw", b.oa);
                        b.oa.setTransform(1, 0, 0, 1, 0, 0);
                        0 < b.selection.length && b.Va && b.Va.naturalWidth && (e = b.Va.width, b.oa.drawImage(b.Va, b.canvas.width - e - Qd(b.ba), 0));
                        b.ma && b.ma.complete && b.ma.naturalWidth && (e = b.ma.naturalWidth, b.oa.drawImage(b.ma, b.canvas.width - e - Qd(b.ba), 0));
                        b.oa.setTransform(a, 0, 0, a, 0, 0);
                        b.oa.beginPath();
                        b.oa.font = "20px Arial";
                        g = b.oa.measureText(Ug).width;
                        a = b.canvas.width / a / g;
                        b.oa.scale(a, a);
                        b.oa.textBaseline = "top";
                        b.oa.lineWidth = 4 / a;
                        b.oa.strokeStyle = "rgba(128, 128, 128, 0.1)";
                        b.oa[Xg](Ug, 0, 0)
                    })
            }
        }, eb: function () {
            if (this.ga.get("readOnly")) this.log("readOnly mode: Ignoring undo."); else if (this.la.xc()) {
                var a = this.la.eb();
                this.la.format(this.oa, this.request);
                mh(this);
                vd(this);
                eh(this);
                ob(this);
                ih(this, a);
                this.na();
                this.aa.emit("document-changed")
            }
        }, dc: function () {
            if (this.ga.get("readOnly")) this.log("readOnly mode: Ignoring redo.");
            else if (this.la.wc()) {
                var a = this.la.dc();
                this.la.format(this.oa, this.request);
                mh(this);
                vd(this);
                eh(this);
                ob(this);
                ih(this, a);
                this.na();
                this.aa.emit("document-changed")
            }
        }, Jb: function (a, b) {
            this.ra.Jb ? (this.log("Simulating click of colour %s", a), this.ra.Jb({
                Ua: a,
                zd: b
            })) : this.log("A colour is not needed for this tool.")
        }, lb: function (a) {
            this.la.lb(a) && (this.fb(), Sf(this), this.na(), this.aa.emit("set-page", a))
        }
    };
    function Pf(a) {
        var b = document.createElement("canvas");
        b.width = a.canvas.width;
        b.height = a.canvas.height;
        var c = b.getContext("2d"), d = !1;
        a.na(function () {
            c.drawImage(this.canvas, 0, 0);
            d = !0
        });
        return {
            na: function (c, f) {
                a.Zc.call(window, function () {
                    if (d && (a.oa.setTransform(1, 0, 0, 1, 0, 0), a.oa.clearRect(0, 0, a.canvas.width, a.canvas.height), a.oa.drawImage(b, 0, 0), c)) {
                        var g = ch(a);
                        a.oa.scale(g, g);
                        a.oa.translate(a.Qa, a.Ma);
                        a.oa.scale(a.scale, a.scale);
                        c.call(f, a.oa)
                    }
                })
            }
        }
    }

    function Sd(a, b) {
        b ? (a.ma = document.createElement("img"), a.ma.setAttribute("src", Y(a.ga, "wd-done.png")), a.ma.onload = function () {
            a.na()
        }) : a.ma = null
    }

    function jh(a) {
        a.Ab && a.log("Updates are locked. Ignoring draw/format request");
        return a.Ab
    }

    function nh(a, b) {
        !a.Ab && b ? (a.log("Locking updates."), a.Ab = !0) : a.Ab && !b && (a.log("Resuming updates"), a.Ab = !1, eh(a), ob(a), a.na())
    }

    function lb(a, b, c, d) {
        a.log("setViewRect(%s)", b);
        var e = a.da, f = Math.min(e.width / b.width, e.height / b.height), g = b.x * f, h = b.y * f;
        a.Qa = c ? (e.width - b.width * f) / 2 - g : -g;
        a.Ma = d ? (e.height - b.height * f) / 2 - h : -h;
        a.scale = f;
        a.$a = f;
        ob(a);
        a.na()
    }

    function jb(a) {
        var b = a.da;
        return new M((0 - a.Qa) / a.scale, (0 - a.Ma) / a.scale, b.width / a.scale, b.height / a.scale)
    }

    function kh(a, b, c) {
        var d = ch(a);
        a.canvas.width = b * d;
        a.canvas.height = c * d;
        a.canvas.style.width = b + "px";
        a.canvas.style.height = c + "px";
        a.da.width = b;
        a.da.height = c
    }

    function ch(a) {
        return (window.devicePixelRatio || 1) / (a.oa.Th || a.oa.Oh || a.oa.Ph || a.oa.Qh || a.oa.Nh || 1)
    }

    function oh(a, b, c, d) {
        if (!d)if (0 === b.length) d = new y(0, 0); else {
            d = b[0].yb().clone();
            for (var e = 1; e < b.length; e++)Mc(d, b[e].yb());
            d = Kc(d)
        }
        c = new Sc(c, d.x, d.y);
        a.ya([new qd(ph(a, b), c)])
    }

    function Sg(a) {
        gh(a, kb(a.ga, a.scale / 1.1))
    }

    function Rg(a) {
        gh(a, kb(a.ga, 1.1 * a.scale))
    }

    function qh(a, b) {
        var c, d;
        c = a.la.sb;
        d = a.Ha(new y(100, 100));
        a.ya([new C("ImageNode", {url: b, layer: a.La}), new qd([c], new E(d.x, d.y))]);
        return F(a)
    }

    function rh(a, b) {
        b = q.aa({}, {
            commands: Le(),
            fillStyle: a.kb,
            strokeStyle: a.pb,
            seed: Math.round(65535 * Math.random()),
            lineWidth: a.Ca.lineWidth,
            sloppiness: a.Ca.sloppiness,
            layer: a.La,
            wrap: a.ga.get("multilineText"),
            fontSize: a.ga.get("defaultFontSize")
        }, b);
        B(a, new zd(a, "PathNode", b, 100, 100, sh(a.ga), "circle"))
    }

    function th(a, b) {
        b = b || {};
        var c, d, e, f, g;
        e = new R;
        f = new y(-50, -50);
        g = new y(50, -50);
        d = new y(50, 50);
        c = new y(-50, 50);
        e.moveTo(f.x, f.y);
        e.lineTo(g.x, g.y);
        e.lineTo(d.x, d.y);
        e.lineTo(c.x, c.y);
        e.lineTo(f.x, f.y);
        e.close();
        b = q.aa({}, {
            commands: e.Nb(),
            fillStyle: a.kb,
            strokeStyle: a.pb,
            seed: Math.round(65535 * Math.random()),
            lineWidth: a.Ca.lineWidth,
            sloppiness: a.Ca.sloppiness,
            layer: a.La,
            wrap: a.ga.get("multilineText"),
            fontSize: a.ga.get("defaultFontSize")
        }, b);
        a.log("Create an item on layer %s", a.La);
        B(a, new zd(a, "PathNode",
            b, 100, 100, "rectangle", "rectangle"))
    }

    function Eg(a, b, c, d) {
        if (a.Yb)return b *= d / a.scale, c *= d / a.scale, a.log("Nudge selection by %s, %s", b, c), d = hh(a), d.length && a.ya([new qd(d, new E(b, c))]), 0 < d.length;
        a.log("Can't nudge; selection motion is locked.")
    }

    function uh(a, b, c, d) {
        a.log("Set document size %s,%s", b, c);
        null === b && (b = void 0);
        null === c && (c = void 0);
        d ? d.push(new eg({
            width: b,
            height: c
        })) : (a.la.setProperty("width", b), a.la.setProperty("height", c), ob(a), eh(a), a.aa.emit("document-changed"))
    }

    function ob(a) {
        if (!jh(a))if (a.ga.get("scrollbars")) {
            var b = a.da, c = Qg(a), d = jb(a), e = !1, f = !1;
            if (d.y <= c.y && d.bottom() >= c.bottom()) a.ba.Za(); else {
                a.ba.show();
                var e = a.ba, g = Math.min(d.y, c.y), h = Math.max(d.bottom(), c.bottom()), k = d.height,
                    l = -a.Ma / a.scale;
                e.ka = g;
                e.da = h - g;
                e.ma = k;
                e.position = l;
                e.format();
                e.na();
                e = !0
            }
            d.x <= c.x && d.right() >= c.right() ? a.ta.Za() : (a.ta.show(), f = a.ta, g = Math.min(d.x, c.x), c = Math.max(d.right(), c.right()), d = d.width, h = -a.Qa / a.scale, f.ka = g, f.da = c - g, f.ma = d, f.position = h, f.format(), f.na(), f = !0);
            f && e ? (a.ba.nc(20, b.height - 20), a.ta.nc(b.width - 20, 20)) : e ? a.ba.nc(20, b.height) : f && a.ta.nc(b.width, 20)
        } else a.ba.Za(), a.ta.Za()
    }

    function Qg(a) {
        var b;
        a.ub ? (b = lg(a.la), b = new M(0, 0, b.width, b.height), a = a.ga.get("pageInflation"), b.Hb(a, a)) : b = mg(a.la);
        return b
    }

    function vh(a, b, c) {
        a.ga.get("readOnly") ? a.log("readOnly mode: Ignoring tool click.") : B(a, new Me(a, "arrow", void 0, b, c))
    }

    function Jg(a, b) {
        a.ga.get("readOnly") ? a.log("readOnly mode: Ignoring tool click.") : B(a, new Me(a, "curve", void 0, b))
    }

    function wh(a, b, c) {
        a.ga.get("readOnly") ? a.log("readOnly mode: Ignoring tool click.") : (b.lineWidth = b.lineWidth || a.pc, b.strokeStyle = b.strokeStyle || a.wb, B(a, new Nf(a, 0, b, c)))
    }

    function xh(a, b) {
        a.ga.get("readOnly") ? a.log("readOnly mode: Ignoring tool click.") : (b.lineWidth = b.lineWidth || a.pc, b.strokeStyle = b.strokeStyle || a.wb, B(a, new Nf(a, 0, b, "shapebrush")))
    }

    function yh(a, b) {
        a.ga.get("readOnly") ? a.log("readOnly mode: Ignoring tool click.") : (b.lineWidth = b.lineWidth || a.pc, b.strokeStyle = b.strokeStyle || a.wb, B(a, new Nf(a, 0, b, "brush")))
    }

    function Kg(a, b, c, d) {
        a.ga.get("readOnly") ? a.log("readOnly mode: Ignoring tool click.") : B(a, new Me(a, "line", void 0, b, c, d))
    }

    function Tg(a, b) {
        a.ga.get("readOnly") ? a.log("readOnly mode: Ignoring tool click.") : B(a, new Fd(a, b))
    }

    function B(a, b) {
        a.ra && a.ra.Ib && a.ra.Ib();
        a.ra = b;
        b.Db && b.Db();
        b.Qb && a.aa.emit("tool-changed", b.Qb())
    }

    function F(a) {
        B(a, new $a(a))
    }

    function Td(a, b) {
        b ? (a.qc = a.Ze.get(b), a.aa.emit("hint", a.qc)) : (a.qc = null, a.aa.emit("hint", ""))
    }

    function Pg(a, b) {
        var c = [];
        b || (b = yg("clipboard"));
        var d = ng(a.la, b, c), e = a.ga.get("pasteOffset");
        0 !== e && (a.Zb += e, a.log("Using paste offset %s", a.Zb), d.push(new qd(c, new E(a.Zb, a.Zb))));
        a.ya(d);
        a.update()
    }

    function Gg(a) {
        var b = hh(a);
        0 < b.length && a.ya([new Zf(b, 10)])
    }

    function Og(a, b, c) {
        if (c) {
            for (var d = a.la, e = [], f = 0; f < c.length; f++) {
                var g = A(d, c[f], !1);
                g && e.push(g)
            }
            c = e = ig(d, e)
        } else c = sd(a);
        var d = a.la, h, k, l, e = [], f = 0;
        l = ig(d, c);
        h = 0;
        for (k = l.length; h < k; h++)g = l[h], f = og(d, g, e, f);
        d = "zwibblerclip." + JSON.stringify(e);
        0 < c.length && (!0 !== b && (wg() ? window.localStorage.setItem("clipboard", d) : xg.clipboard = "" + d), a.log("Reset paste offset to 0"), a.Zb = 0);
        return d
    }

    function Ng(a) {
        Og(a);
        Bg(a)
    }

    function Qf(a) {
        if (a.ub) {
            var b = lg(a.la);
            a.oa.save();
            a.oa.beginPath();
            a.oa.rect(0, 0, b.width, b.height);
            a.oa.clip()
        }
        return a.ub
    }

    function eh(a) {
        if (!jh(a)) {
            var b = Qg(a), c = a.da, c = new M(0, 0, c.width, c.height);
            b.hc(a.xe) && c.hc(a.we) ? a.log("No need to rezoom.") : gh(a, a.$a) ? (a.log("Successfully rezoomed."), a.xe = b, a.we = c) : a.log("Failed to zoom")
        }
    }

    function lh(a, b, c, d, e, f) {
        b.Jc = null;
        a.background ? (b.Jc = b.createPattern(a.background, a.Xc), b.fillStyle = b.Jc, b.fillRect(c, d, e, f)) : a.qb ? a.qb(b, c, d, e, f) : "G_vmlCanvasManager" in window && (b.fillStyle = "rgba(0, 0, 0, 0.0)", b.fillRect(c, d, e, f))
    }

    function dh(a) {
        var b = a.ga.get("snap"), c = null, d, e;
        d = a.ga.get("background");
        var f = Q(d, !0), g = a.ga.get("backgroundImage");
        a.qb = null;
        a.background = null;
        a.Xc = "no-repeat";
        a.log("createBackground() background=%s", d);
        a.log("backgroundNodeId==%s", a.qa);
        if ("grid" === d) {
            a.Xc = "repeat";
            var b = a.ga.get("gridBlocks"), g = a.ga.get("gridSpacing"), h = (b || 1) * g, c = kf(document.body);
            c.width = h;
            c.height = h;
            d = c.getContext("2d");
            d.fillStyle = "#ffffff";
            d.fillRect(0, 0, h, h);
            d.beginPath();
            for (e = 0; e < h; e += g)if (e % h || 1 > b) d.moveTo(e + .5, 0),
                d.lineTo(e + .5, h);
            for (e = 0; e < h; e += g)if (e % h || 1 > b) d.moveTo(0, e + .5), d.lineTo(h, e + .5);
            d.strokeStyle = a.ga.get("gridColour");
            d.lineWidth = .5;
            d.stroke();
            if (0 < b) {
                d.beginPath();
                for (e = 0; e <= h; e += h)d.moveTo(e, 0), d.lineTo(e, h);
                for (e = 0; e <= h; e += h)d.moveTo(0, e + .5), d.lineTo(h, e + .5);
                d.lineWidth = 2;
                d.stroke()
            }
        } else g ? a.request.add(null, "image", g, null, function (b) {
            a.log("Background image finished loading");
            a.background = b
        }) : a.qa ? (a.log("Regenerate background image"), b = A(a.la, a.qa, !1), d = b.rect.clone(), c = kf(document.body), c.width =
            d.x + d.width, c.height = d.y + d.height, d = c.getContext("2d"), b.na(d)) : f ? (a.log("Using background colour %s", f.toString()), a.qb = function (a, b, c, d, e) {
            a.fillStyle = f.toString();
            a.fillRect(b, c, d, e)
        }) : 0 < b && "clear" !== d && (a.Xc = "repeat", c = kf(document.body), c.width = b, c.height = b, d = c.getContext("2d"), d.beginPath(), d.moveTo(0, 0), d.arc(0, 0, 3, 0, 2 * Math.PI, !1), d.moveTo(b, 0), d.arc(b, 0, 3, 0, 2 * Math.PI, !1), d.moveTo(b, b), d.arc(b, b, 3, 0, 2 * Math.PI, !1), d.moveTo(0, b), d.arc(0, b, 3, 0, 2 * Math.PI, !1), d.fillStyle = "#c0c0c0", d.fill());
        c && document.body.removeChild(c);
        a.background = c
    }

    function hh(a, b) {
        var c = sd(a);
        b || (c = ig(a.la, c));
        return ph(a, c)
    }

    function ph(a, b) {
        for (var c = [], d = 0; d < b.length; d++)a.log("Selected id=%s", b[d].id), c.push(b[d].id);
        return c
    }

    function sd(a) {
        var b = a.selection.concat();
        a.Fa && b.push(a.Fa);
        for (var c = 0; c < b.length; c++)a.log("Selected node=%s", b[c].id);
        return b
    }

    function mh(a) {
        for (var b = 0,
                 c = 0; c < a.selection.length; c++)c !== b && (a.selection[b] = a.selection[c]), a.selection[b].id in a.la.Ba && (b += 1);
        a.selection.length !== b && (a.selection.length = b);
        !a.Fa || a.Fa.id in a.la.Ba || (a.Fa = null, null !== a.Ka && a.aa.emit("selected-edit-handle", null, null), a.Ka = null)
    }

    function vd(a) {
        function b(a, b, c, d, e) {
            !1 !== f.Hc && f.gb.push(new Wd(a, c, new y(b.x + d * b.width, b.y + e * b.height), new y(b.x + (1 - d) * b.width, b.y + (1 - e) * b.height)))
        }

        var c;
        a.Hc = !0;
        a.Bd = !0;
        a.Yb = !0;
        var d = !1;
        a.gb.length = 0;
        if (0 !== a.selection.length) {
            a.Aa = a.selection[0].yb().clone();
            a.selection[0].pa("lockSize") && (a.Hc = !1);
            a.selection[0].pa("lockRotation") && (a.Bd = !1);
            a.selection[0].pa("lockPosition") && (a.Yb = !1);
            a.selection[0].pa("lockAspectRatio") && (d = !0);
            for (c = 1; c < a.selection.length; c++)Mc(a.Aa, a.selection[c].yb()),
            a.selection[c].pa("lockSize") && (a.Hc = !1), a.selection[c].pa("lockRotation") && (a.Bd = !1), a.selection[c].pa("lockAspectRatio") && (d = !0), a.selection[c].pa("lockPosition") && (a.Yb = !1);
            1 === a.selection.length ? a.Yd = a.selection[0].je() : a.Yd = new hd(a.Aa);
            var e, f = a, g, h = 0 < a.ga.get("snap");
            a.log("snap=%s", a.ga.get("snap"));
            1 < a.selection.length ? (e = new O, g = null, c = a.Aa) : (g = a.selection[0], c = g.ab, e = g.Ja());
            a.ga.get("allowResize") && (d || (b(g, c, e, .5, 0), b(g, c, e, 1, .5), b(g, c, e, .5, 1), b(g, c, e, 0, .5)), b(g, c, e, 0, 0), b(g, c, e, 1, 0),
                b(g, c, e, 1, 1), b(g, c, e, 0, 1));
            if (a.Bd)if (g && g.pa("rotationHandles"))for (a = g.pa("rotationHandles"), c = 0; c < a.length; c += 4)f.gb.push(new nd(g, e, new y(a[c], a[c + 1]), new y(a[c + 2], a[c + 3]), h)); else f.gb.push(new nd(g, e, new y(c.x + .5 * c.width, c.y - 10 / a.scale), new y(c.x + .5 * c.width, c.y + .5 * c.height), h))
        }
    }

    function Sf(a) {
        vd(a);
        if (a.Yc) {
            var b = a.Yc, c = a.selection;
            b.action = null;
            b.aa.length = 0;
            b.ba = {};
            b.Ba = c.concat();
            for (var d = !1, e = 0; e < c.length; e++) {
                var f = c[e];
                ke(f) && (d = !0);
                var g = fe(f), h;
                for (h in g)if (g.hasOwnProperty(h)) {
                    var k = b, l = h, m = f, p = void 0, p = k.ga;
                    l in k.ba ? (p = k.ba[l], p.value !== m.pa(l) && (p.value = null)) : "locked" === l || "points" === l || !0 === m.pa("closed") && ("arrowSize" === l || "arrowStyle" === l || "doubleArrow" === l) || !1 === m.pa("closed") && ("fontName" === l || "fontSize" === l || "textFillStyle" === l || "text" === l || "fillStyle" ===
                        l) || "ImageNode" === m.type() && ("fillStyle" === l || "strokeStyle" === l || "lineWidth" === l || "shadow" === l) || "BrushNode" === m.type() && "fillStyle" === l || "TextNode" === m.type() && "fillStyle" === l || "lockSize" === l || "lockRotate" === l || "rotateAround" === l || "layer" === l || 0 === l.indexOf("cell-") || "fontName" === l && !p.get("showFontNameProperty") || "fontSize" === l && !p.get("showFontSizeProperty") || "smoothness" === l && !p.get("showSmoothnessProperty") || "sloppiness" === l && !p.get("showSloppinessProperty") || (p = {
                            pe: zh(k, m, l),
                            value: m.pa(l)
                        },
                        p.pe.display && 0 === p.pe.display.indexOf("Display-") || (k.aa.push(p), k.ba[l] = p))
                }
            }
            Ah(b);
            if (b.ga.get("showKeyboardHelp"))for (f = d, d = Qa(q("<div>"), "keydiv"), d.ha("font-size", "8pt"), d.ha("color", "#909090"), d.ha("font-weight", "normal"), q(b.ja).append(d), g = b.ma.zc(), d.append("<h1>" + g("keyboard") + "</h1>"), e = [{
                key: b.ga.get("keyCurveTool"),
                description: g("draw-curves")
            }, {
                key: b.ga.get("keyLineTool"),
                description: g("draw-lines")
            }], 0 < c.length && e.push({key: b.ga.get("keyDelete"), description: g("delete-selection")}, {
                key: b.ga.get("keyDuplicate"),
                description: g("duplicate-selection")
            }, {key: b.ga.get("keyMoveUp"), description: g("move-selection-closer")}, {
                key: b.ga.get("keyMoveDown"),
                description: g("move-selection-away")
            }), 1 < c.length && e.push({
                key: b.ga.get("keyGroup"),
                description: g("group-selection")
            }), f && e.push({
                key: b.ga.get("keyUngroup"),
                description: g("break-apart-group")
            }), e.push({key: b.ga.get("keyZoomIn"), description: g("zoom-in")}), e.push({
                key: b.ga.get("keyZoomOut"),
                description: g("zoom-out")
            }), e.push({key: g("arrow-keys"), description: g("move-while-zoomed")}),
                                                      b = 0; b < e.length; b++)c = Qa(q("<a>").text(e[b].key), "key"), c.ha("background", "#d0d0d0"), c.ha("border-left", "1px solid #808080"), c.ha("border-right", "1px solid #e0e0e0"), c.ha("border-top", "1px solid #808080"), c.ha("border-bottom", "1px solid #e0e0e0"), c.ha("padding-left", "0.5em"), c.ha("padding-right", "0.5em"), c.ha("margin-right", "1em"), c.ha("color", "#4fa0d3"), c.ha("font-weight", "bold"), c = q("<p>").append(c), c[0].appendChild(document.createTextNode(e[b].description)), d.append(c)
        }
        a.aa.emit("selected-nodes")
    }

    function Fg(a, b) {
        a.fb();
        for (var c = 0; c < b.length; c++)b[c].pa("locked") || "PageNode" === b[c].type() || Rf(a, b[c]);
        Sf(a)
    }

    function Rf(a, b) {
        a.Fa = null;
        if (b.Eb !== a.Eb && me(b) === a.La) {
            a.selection.push(b);
            b.Eb = a.Eb;
            if (ke(b)) {
                for (var c = b.parent, d = 0; d < c.children.length; d++)Rf(a, c.children[d]);
                Rf(a, c)
            }
            b.children && 0 < b.children.length && Rf(a, b.children[0])
        }
    }

    function Bg(a) {
        var b = hh(a);
        b.length && a.ya([new Vf(b)])
    }

    function Mg(a) {
        var b = hh(a);
        b.length && a.ya([new Xf(b)])
    }

    function Lg(a) {
        var b = hh(a);
        b.length && a.ya([new Wf(b)])
    }

    function Md(a, b, c) {
        a.log("setSelectionOpacity(%s, fill=%s)", b, c);
        var d = hh(a, !0), e = [];
        c = c ? "fillStyle" : "strokeStyle";
        for (var f = 0; f < d.length; f++) {
            var g = d[f], h = A(a.la, g).pa(c);
            h && (h = Ed(h, b), e.push(new Nd([g], c, h)), a.log("   set %s of %s to %s", c, g, h))
        }
        e.length && a.ya(e);
        a.log("   Affected %s of %s nodes", e.length, d.length)
    }

    function Dg(a) {
        var b = hh(a);
        b.length && a.ya([new $f(b, bg)])
    }

    function Cg(a) {
        var b = hh(a);
        b.length && a.ya([new $f(b, ag)])
    }

    function Ig(a) {
        var b = hh(a);
        b.length && a.ya([new $f(b, cg)])
    }

    function Hg(a) {
        var b = hh(a);
        b.length && a.ya([new $f(b, dg)])
    }

    function Bh(a) {
        a.Ga.rb && (a.Ga.rb = !1, a.na())
    }

    function Ld(a) {
        a.Ga.rb = !0;
        a.Ga.he = !1;
        if (0 < a.selection.length) {
            a.log("showKeyboardCursorAndStartMoving()");
            a.Ga.Pa = !0;
            var b = Kc(a.Aa);
            a.Ga.x = b.x;
            a.Ga.y = b.y;
            F(a);
            B(a, new md(a, new Xd(a.selection[0], a.selection[0].Ja()), !1, b.x - 4, b.y - 4))
        }
        a.na()
    }

    function bh(a) {
        var b = Pd(a);
        q(a.canvas).bind("gesturestart", function (b) {
            a.log("GestureStart");
            a.ra.Xa && !1 !== a.ra.Xa(b.cb) ? (b.stopPropagation(), b.preventDefault()) : a.log("Pass to browser")
        });
        q(a.canvas).bind("gesturechange", function (b) {
            a.ra.Xa && !1 !== a.ra.Xa(b.cb) ? (b.stopPropagation(), b.preventDefault()) : a.log("Pass to browser")
        });
        q(a.canvas).bind("gestureend", function (b) {
            a.log("GestureEnd");
            a.ra.Xa && !1 !== a.ra.Xa(b.cb) ? (b.stopPropagation(), b.preventDefault()) : a.log("Pass to browser")
        });
        "ongesturestart" in
        a.canvas ? a.log("Using native gestures") : (a.log("Using emulated gestures"), ab(a.canvas, function (b) {
            a.ra.Xa && !1 !== a.ra.Xa(b) ? (b.stopPropagation(), b.preventDefault()) : a.log("Allow %s event to pass through", b.type)
        }));
        a.ga.get("simulateGestures") && tf(a.canvas, function (b) {
            a.log("Simulating %s", b.type);
            a.ra.Xa && !1 !== a.ra.Xa(b) && (b.stopPropagation(), b.preventDefault())
        });
        var c = "ontouchstart" in window, d = "onpointerdown" in window, e = "ongesturestart" in window,
            f = "onmousedown" in window;
        a.log("Have TouchEvents: %s",
            c);
        a.log("Have PointerEvents: %s", d);
        a.log("Have GestureEvents: %s", e);
        a.log("Have MouseEvents: %s", f);
        var g = new y(0, 0), h = 0, k = 0, l = !1, m = !1;
        a.Rg = function () {
            a.log("Preventing next double click.");
            l = !0
        };
        if (c) {
            a.log("Using touch events for screen movement.");
            var p = new Date, r = new y(0, 0);
            q(a.canvas).bind("touchstart", function (b) {
                if (a.ra.hb) {
                    var c = !0;
                    300 < (new Date).getTime() - p.getTime() ? c = !1 !== a.ra.hb(b.cb) : a.ra.Xb && (c = new y(b.cb.changedTouches[0].pageX, b.cb.changedTouches[0].pageY), a.log("Double-click distance: %s",
                            c.Ra(r)), 10 > c.Ra(r) ? (c = Ag(a, b.cb.changedTouches[0]), c = !1 !== a.ra.Xb(c.x, c.y, b.cb)) : c = !1);
                    c && (b.stopPropagation(), b.preventDefault());
                    p = new Date;
                    r = new y(b.cb.changedTouches[0].pageX, b.cb.changedTouches[0].pageY)
                }
            });
            q(a.canvas).bind("touchmove", function (b) {
                a.ra.hb && !1 !== a.ra.hb(b.cb) && (b.stopPropagation(), b.preventDefault())
            });
            q(a.canvas).bind("touchend", function (b) {
                a.ra.hb && !1 !== a.ra.hb(b.cb) && (b.stopPropagation(), b.preventDefault())
            })
        } else d && (a.log("Using pointer events for movement"), q(a.canvas).bind("pointerdown",
            function (c) {
                a.log("PointerDown");
                g = new y(c.pageX, c.pageY);
                h = lf();
                m = !0;
                if (a.ra.Sa) {
                    var d = q(a.canvas).offset();
                    !1 !== a.ra.Sa((c.pageX - d.left - b - a.Qa) / a.scale, (c.pageY - d.top - b - a.Ma) / a.scale, c.cb) && (a.log("%s.preventDefault()", c.type), c.stopPropagation(), c.preventDefault())
                }
            }), q(a.canvas).bind("pointermove", function (c) {
            if (a.ra.Wa) {
                var d = q(a.canvas).offset();
                !1 !== a.ra.Wa((c.pageX - d.left - b - a.Qa) / a.scale, (c.pageY - d.top - b - a.Ma) / a.scale, c.cb) && (c.stopPropagation(), c.preventDefault())
            }
        }), a.lc.bind(q(document),
            "pointerup", function (c) {
                a.log("PointerUp");
                var d, e;
                a.ra.Ya && m && (d = q(a.canvas).offset(), e = (c.pageX - d.left - b - a.Qa) / a.scale, d = (c.pageY - d.top - b - a.Ma) / a.scale, !1 !== a.ra.Ya(e, d, c.cb) && (c.stopPropagation(), c.preventDefault()));
                m = !1;
                a.log("TimeDist=%s PixelDist=%s", lf() - h, g.Ra(new y(c.pageX, c.pageY)));
                var f = k, p = 200 > lf() - h && 2 > g.Ra(new y(c.pageX, c.pageY));
                a.log("Didclick: %s dbltime=%s", p, lf() - f);
                a.ra.zb && p && (a.log("Simulate mouseclick from pointerup"), d = q(a.canvas).offset(), e = (c.pageX - d.left - b - a.Qa) / a.scale,
                    d = (c.pageY - d.top - b - a.Ma) / a.scale, !1 !== a.ra.zb(e, d, c.cb) && (c.stopPropagation(), c.preventDefault()));
                a.ra.Xb && p && 300 > lf() - f && !l && (a.log("Simulate double-click"), !1 !== a.ra.Xb(e, d, c.cb) && (c.stopPropagation(), c.preventDefault()));
                p && (k = lf(), l = !1)
            }));
        !d || c ? (a.log("Using mouse events for screen movement."), La(q(a.canvas), function (c) {
            if (a.ra.Wa) {
                var d = q(a.canvas).offset();
                a.ra.Wa((c.pageX - d.left - b - a.Qa) / a.scale, (c.pageY - d.top - b - a.Ma) / a.scale, c)
            }
            c.preventDefault()
        }), Na(q(a.canvas), function (c) {
            var d = q(a.canvas).offset();
            m = !0;
            a.ra.Sa && a.ra.Sa((c.pageX - d.left - b - a.Qa) / a.scale, (c.pageY - d.top - b - a.Ma) / a.scale, c);
            c.preventDefault()
        }), a.lc.bind(q(document), "mouseup", function (c) {
            var d = q(a.canvas).offset();
            a.ra.Ya && m && a.ra.Ya((c.pageX - d.left - b - a.Qa) / a.scale, (c.pageY - d.top - b - a.Ma) / a.scale, c);
            m = !1;
            c.stopPropagation();
            c.preventDefault()
        }), q(a.canvas).click(function (c) {
            var d = q(a.canvas).offset();
            a.ra.zb && a.ra.zb((c.pageX - d.left - b - a.Qa) / a.scale, (c.pageY - d.top - b - a.Ma) / a.scale, c);
            c.stopPropagation();
            c.preventDefault()
        }), Ka(q(a.canvas),
            function (c) {
                var d = q(a.canvas).offset();
                if (a.ra.Xb || a.ra.zb) {
                    var e = (c.pageX - d.left - b - a.Qa) / a.scale, d = (c.pageY - d.top - b - a.Ma) / a.scale;
                    of() && a.ra.zb && (a.log("Insert false mouse click for IE"), a.ra.zb(e, d));
                    a.ra.Xb && a.ra.Xb(e, d, c)
                }
                c.stopPropagation();
                c.preventDefault()
            })) : a.log("Not using mouse events.");
        q(a.canvas).bind("mouseenter", function (a) {
            a.stopPropagation();
            a.preventDefault()
        });
        q(a.canvas).bind("mouseleave", function (a) {
            a.stopPropagation();
            a.preventDefault()
        });
        q(a.canvas).bind("mouseover", function (a) {
            a.stopPropagation();
            a.preventDefault()
        });
        q(a.canvas).bind("mouseout", function (a) {
            a.stopPropagation();
            a.preventDefault()
        });
        !window.parent && a.ga.get("setFocus") && q(a.canvas).focus();
        a.ka.bind("colour", function (b) {
            a.ra.Jb && a.ra.Jb(b)
        });
        a.ka.bind("opacity", function (b, c) {
            a.ra.cc && a.ra.cc(b, c)
        });
        a.ga.get("simulateGestures") || (c = "mousewheel", "onwheel" in document.createElement("div") && (c = "wheel"), a.log("Binding to '%s' for mouse wheel", c), q(a.canvas).bind(c, function (c) {
            var d = c.cb.wheelDelta || -40 * c.cb.deltaY, e = d / 120 * 32, f = q(a.canvas).offset(),
                g = (c.pageX - f.left - b - a.Qa) / a.scale, f = (c.pageY - f.top - b - a.Ma) / a.scale;
            a.log("mousewheel: delta %s", d);
            a.ra.oe && !1 !== a.ra.oe(g, f, e, c.cb) || "block" !== a.ba.canvas.style.display || (g = Qg(a), a.Ma = -120 >= d ? Math.max(a.Ma + e, -(g.bottom() * a.scale - a.canvas.clientHeight)) : Math.min(a.Ma + e, -g.y * a.scale), ob(a), a.na(), c.stopPropagation(), c.preventDefault())
        }));
        q(a.canvas).bind("dragover", function (b) {
            a.log("Dragover");
            b.preventDefault()
        });
        q(a.canvas).bind("drop", function () {
            a.log("Drop")
        });
        q(a.canvas).bind("dragenter", function () {
            a.log("DragEnter")
        });
        q(a.canvas).bind("dragleave", function () {
            a.log("DragLeave")
        })
    }

    function Ag(a, b) {
        return x(a, b.pageX, b.pageY)
    }

    function Id(a, b, c) {
        var d = Pd(a), e = q(a.canvas).offset();
        return new y(b * a.scale + a.Qa + e.left + d, c * a.scale + a.Ma + e.top + d)
    }

    function x(a, b, c, d) {
        var e = Pd(a), f = q(a.canvas).offset();
        b = new y((b - f.left - e - a.Qa) / a.scale, (c - f.top - e - a.Ma) / a.scale);
        d || (b = a.Ha(b));
        return b
    }

    function gh(a, b) {
        var c;
        a.log("Zooming to: %s", b);
        var d = a.da.width - 20;
        c = "width" in a.la.ea;
        var e = !0;
        a.$a = b;
        c || (a.log("WARNING: Cannot zoom to page/width because the document size has not been set."), e = "page" === b || "width" === b);
        if (T(b)) a.scale = b; else if ("none" === b || a.la.empty() || !c) a.scale = 1; else {
            if ("page" === b)return c = Qg(a), lb(a, c, "centre" === a.ga.get("pagePlacement"), !0), a.$a = b, a.ra.jc && a.ra.jc(), e;
            "width" === b && (c = Qg(a), a.scale = d / c.width, a.Qa = -c.x * a.scale, a.Ma = -c.y * a.scale, a.log("RECT=%s scale=%s tx=%s ty=%s",
                c, a.scale, a.Qa, a.Ma), a.$a = b)
        }
        ob(a);
        a.na();
        a.ra.jc && a.ra.jc();
        return e
    }

    function Ch(a, b, c) {
        a.Ca[b] = c;
        "fillStyle" === b ? a.kb = c : "strokeStyle" === b && (a.pb = c)
    }

    function fh(a, b) {
        a.log("setDocument()");
        F(a);
        a.la = b;
        a.scale = 1;
        a.Qa = 0;
        a.Ma = 0;
        a.selection = [];
        a.Fa = null;
        a.Ka = null;
        a.Eb = 1;
        a.Aa = new M(0, 0, 0, 0);
        a.Yd = new hd(a.Aa);
        a.Ad = new O;
        a.Wd = !0;
        a.qc = null;
        a.La = "default";
        a.kb = "#ffffff";
        a.wb = a.ga.ua.defaultBrushColour;
        a.pb = a.ga.ua.defaultStrokeStyle;
        a.Ca = {};
        a.Ca.lineWidth = a.ga.ua.defaultLineWidth;
        a.Ca.sloppiness = .5;
        a.Ca.fontName = a.ga.ua.defaultFont;
        a.Ca.fontSize = a.ga.ua.defaultFontsize;
        a.Ca.bold = a.ga.ua.defaultBold;
        a.Ca.italic = a.ga.ua.defaultItalic;
        a.Ca.smoothness = .3;
        a.Ca.textFillStyle = a.ga.ua.defaultTextFillStyle;
        a.Ca.textStrokeStyle = a.ga.ua.defaultTextStrokeStyle;
        a.Ca.textLineWidth = a.ga.ua.defaultTextLineWidth;
        a.pc = a.ga.get("defaultBrushWidth");
        var c = Qg(a);
        a.Qa = -c.x;
        a.Ma = -c.y;
        ob(a);
        a.la.se = a.ga.get("spotHighlightColour");
        a.la.Nd = a.ga.get("spotHighlightZIndex");
        a.la.format(a.oa, a.request);
        a.xe = new M(0, 0, 0, 0);
        a.we = new M(0, 0, 0, 0);
        "none" !== a.$a ? gh(a, a.$a) : (gh(a, a.ga.get("defaultZoom")), a.na())
    }

    function Pd(a) {
        return parseInt(q(a.canvas).ha("border-left-width"), 10) || 0
    }

    function ih(a, b) {
        var c, d, e, f = -1, g = !1;
        a.log("HandleChanges called");
        for (c = 0; c < b.Tc.length; c++)e = b.Tc[c], gb(a.Ic, e, []), e === a.qa && (a.log("Background node has been removed"), f = null);
        for (c = 0; c < b.Ob.length; c++)e = b.Ob[c], d = A(a.la, e, !1), gb(a.Ic, e, d.le()), "background" === d.pa("layer") && (a.log("Background node has been added"), f = e);
        for (c = 0; c < b.Gc.length; c++)e = b.Gc[c], d = A(a.la, e, !1), gb(a.Ic, e, d.le()), "background" === d.pa("layer") ? (a.log("Background node has been changed"), f = e, g = !0) : e === a.qa && (a.log("Node removed from background layer"),
                f = null);
        -1 === f || !g && f === a.qa || (a.qa = f, dh(a), a.qa && A(a.la, a.qa, !1).mc(!0));
        (b.Ob.length || b.Gc.length) && fb(a.Ic);
        b.Ob.length && a.aa.emit("nodes-added", b.Ob);
        b.Gc.length && a.aa.emit("nodes-changed", b.Gc);
        b.Tc.length && a.aa.emit("nodes-removed", b.Tc)
    };
    function Dh(a, b) {
        this.methods = b;
        this.view = a;
        this.da = new ib(a)
    }

    Dh.prototype = {
        log: t("CustomToolBehaviour"), Db: function () {
            this.log("Entering CustomToolBehaviour");
            this.methods.enter && this.methods.enter()
        }, Ib: function () {
            this.log("Leaving CustomToolBehaviour");
            this.methods.leave && this.methods.leave()
        }, zb: function (a, b, c) {
            return this.methods.onMouseClick ? this.methods.onMouseClick(a, b, c) : !1
        }, Sa: function (a, b, c) {
            return this.methods.onMouseDown ? this.methods.onMouseDown(a, b, c) : !1
        }, Wa: function (a, b, c) {
            return this.methods.onMouseMove ? this.methods.onMouseMove(a, b, c) : !1
        }, Ya: function (a,
                         b, c) {
            return this.methods.onMouseUp ? this.methods.onMouseUp(a, b, c) : !1
        }, Xb: function (a, b, c) {
            return this.methods.onDoubleClick ? this.methods.onDoubleClick(a, b, c) : !1
        }, Jb: function (a) {
            return this.methods.onColour ? this.methods.onColour(a.Ua) : !1
        }, vb: function (a) {
            this.log("keyboard: %s", a);
            "cancel" === a && (this.log("ESC pressed. Abort brush and go back to toolbar."), F(this.view), this.view.tb.emit("goto-toolbar"))
        }, jd: function (a) {
            if (this.methods.onRedraw) this.methods.onRedraw(a)
        }, hb: function (a) {
            if (this.methods.onTouch)return this.methods.onTouch(a);
            var b;
            a.touches && a.touches.length ? b = a.touches[0] : a.changedTouches && a.changedTouches.length ? b = a.changedTouches[0] : (this.log("No touches!"), b = {
                pageX: 0,
                pageY: 0
            });
            b = x(this.view, b.pageX, b.pageY);
            return "touchstart" === a.type ? this.Sa(b.x, b.y, a) : "touchend" === a.type ? this.Ya(b.x, b.y, a) : "touchmove" === a.type ? this.Wa(b.x, b.y, a) : !1
        }, Xa: function (a) {
            return this.methods.onGesture ? this.methods.onGesture(a) : this.da.Xa(a)
        }, oe: function (a, b, c, d) {
            return this.methods.onMouseWheel ? this.methods.onMouseWheel(a, b, c, d) : !1
        }, Qb: function () {
            return this.methods.getToolName ?
                this.methods.getToolName() : null
        }
    };
    function Eh(a, b) {
        this.aa = a;
        this.name = b;
        this.ja = q("<div>").ha("border-top", "1px solid #888").ha("padding", "5px").ha("cursor", "default");
        this.aa.append(this.ja);
        this.update(0)
    }

    Eh.prototype = {
        update: function (a) {
            this.ja.text(this.name + "... " + Math.round(100 * a) + "%")
        }, error: function (a) {
            var b = this, c = Pa();
            c.click(function () {
                b.done()
            });
            Ra(this.ja, this.name + "... " + a + " ");
            this.ja.append(c)
        }, done: function () {
            this.ja.remove()
        }
    };
    function Fh(a) {
        for (var b = [],
                 c = 0; c < a; c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890"[Math.floor(63 * Math.random())]);
        return b.join("")
    }

    "object" === typeof module && (exports.Mh = Fh);
    function Gh(a) {
        function b(b) {
            c && clearTimeout(c);
            c = setTimeout(function () {
                c = null;
                a()
            }, arguments.length ? b : 1E3)
        }

        var c = null;
        b.cancel = function () {
            c && (clearTimeout(c), c = null)
        };
        return b
    };
    function Hh(a) {
        a = a.replace(/\+/g, " ");
        return window.decodeURIComponent ? window.decodeURIComponent(a) : unescape(a)
    }

    function Ih() {
        var a;
        a = a || window.location.hash;
        0 === a.indexOf("#/") && (a = "#" + a.substr(2));
        var b = a, c, d, e, f;
        a = {};
        e = b.indexOf("#");
        0 <= e && (b = b.substr(e + 1));
        e = b.indexOf("#");
        0 <= e && (b = b.substr(0, e));
        b = b.split("&");
        e = 0;
        for (f = b.length; e < f; e++)c = b[e], d = c.split("="), c = Hh(d[0]), d = 1 < d.length ? Hh(d[1]) : "", c.length && (a[c] = d);
        return a
    };
    var Jh, Kh, Lh;
    Lh = document.getElementsByTagName("script");
    Kh = Lh[Lh.length - 1];
    Jh = void 0 !== Kh.getAttribute.length ? Kh.src : Kh.getAttribute("src", -1);
    function Mh(a) {
        var b, c;
        this.ua = {
            angleArcs: 0,
            allowSelectBox: "auto",
            allowResize: !0,
            allowTextInShape: !0,
            allowZoom: !0,
            autoPickTool: !0,
            autoPickToolText: !0,
            autoSnap: 0,
            background: "clear",
            backgroundImage: null,
            colourPicker: "wheel",
            colourPalette: "auto",
            debug: !1,
            defaultArrowStyle: "simple",
            defaultArrowSize: 15,
            defaultArrowXOffset: null,
            defaultItalic: !1,
            defaultBold: !1,
            defaultBrushColour: "#000000",
            defaultBrushWidth: 10,
            defaultFillStyle: "rgba(0,0,0,0.0)",
            defaultFont: "Arial",
            defaultFontSize: 20,
            defaultLineWidth: 2,
            defaultPaperSize: "none",
            defaultRoundRectRadius: 10,
            defaultSmoothness: "smooth",
            defaultStrokeStyle: "#ff0000",
            defaultText: "Lorum ipsum dolor",
            defaultTextBackground: "rgba(0,0,0,0.0)",
            defaultTextFillStyle: "#000000",
            defaultTextStrokeStyle: "#000000",
            defaultTextLineWidth: 0,
            defaultZoom: 1,
            drawCircleStyle: "box",
            drawShapeStyle: "box",
            fonts: ["Arial", "Times New Roman"],
            gridBlocks: 10,
            gridSpacing: 20,
            gridColour: "#cccccc",
            imageFolder: "$SCRIPT",
            iPadNoScrollText: !1,
            keyBringToFront: "Home",
            keyCancel: "ESC",
            keyCopy: "Ctrl+C,\u2318+C",
            keyCurveTool: "C",
            keyCut: "Ctrl+X,\u2318+X,Shift+Delete",
            keyDelete: "Delete,Backspace",
            keyDown: "Down,Ctrl+Down",
            keyDuplicate: "Ctrl+D",
            keyEnter: "Enter",
            keyGroup: "Ctrl+G",
            keyLeft: "Left,Ctrl+Left",
            keyLineTool: "L",
            keyMoveDown: "PageDown",
            keyMoveUp: "PageUp",
            keyNext: "Down,Right",
            keyNextPage: "Shift+PageDown",
            keyPaste: "Ctrl+V,\u2318+V,Shift+Insert",
            keyPrevious: "Left,Up",
            keyPreviousPage: "Shift+Pageup",
            keyRedo: "Ctrl+Shift+Z",
            keyRight: "Right,Ctrl+Right",
            keySelectNone: "ESC",
            keySelectAll: "Ctrl+A",
            keySendToBack: "End",
            keyUndo: "Ctrl+Z",
            keyUngroup: "Ctrl+Shift+G",
            keyUp: "Up,Ctrl+Up",
            keyZoomIn: "+,Shift+=",
            keyZoomNormal: "=",
            keyZoomOut: "-",
            keyZoomToPage: "F4",
            keyZoomToWidth: "Shift+F4",
            language: "en",
            leaveTextToolOnBlur: !1,
            maximumZoom: 0,
            minimumZoom: 0,
            multilineText: !1,
            nudge: 10,
            outsidePageColour: "#808080",
            pagePlacement: "centre",
            pageSelectorDiv: "",
            pageBorderColour: "rbga(0,0,0,0.0)",
            pageInflation: 20,
            pageShadow: !0,
            pageView: !1,
            pasteOffset: 10,
            persistent: !1,
            preciseNudge: 1,
            readOnly: !1,
            scrollbars: !0,
            setFocus: !0,
            showArrowTool: !0,
            showBackgroundSelector: !1,
            showBrushTool: !0,
            showCircleTool: !0,
            showColourPanel: !0,
            showCopyPaste: !0,
            showCurveTool: !0,
            showDebug: !1,
            showFontNameProperty: !0,
            showFontSizeProperty: !0,
            showHints: !0,
            showImageSelector: !1,
            showImageTool: !1,
            showKeyboardHelp: !0,
            showLineTool: !0,
            showMathTool: !1,
            showMoveToFrontBack: !1,
            showPageSelector: !1,
            showPageSelectorControls: !0,
            showPickTool: !0,
            showPropertyPanel: !1,
            showRoundRectTool: !1,
            showShapeBrushTool: !1,
            showSloppinessProperty: !0,
            showSmoothnessProperty: !0,
            showSquareTool: !0,
            showTextTool: !0,
            showToolbar: !0,
            showUndoRedo: !0,
            simulateGestures: !1,
            singleStrokeBrush: !1,
            sloppy: !1,
            snap: 0,
            spotHighlightColour: "rgba(0,0,0,0.2)",
            spotHighlightZIndex: 0,
            symmetry: 0,
            textMode: "interactive",
            toolbarButtonSize: 50,
            useTouch: "auto",
            enableArrowKeysNudge: !1,
            showMenu: !1
        };
        for (c in a)a.hasOwnProperty(c) && (c in this.ua || alert("Zwibbler: Unknown option '" + c + "'"), Nh(this, c, a[c], !0));
        a = Ih();
        for (c in a)a.hasOwnProperty(c) && Nh(this, c, a[c]);
        "" === Oh() ? (this.aa = this.ua.imageFolder.replace("$SCRIPT/", ""), this.aa = this.aa.replace("$SCRIPT",
            "")) : this.aa = this.ua.imageFolder.replace("$SCRIPT", Oh());
        "" !== this.aa && "/" !== this.aa[this.aa.length - 1] && (this.aa += "/");
        "auto" === this.ua.useTouch && (c = "ontouchstart" in window || "onmsgesturechange" in window, this.log("Detected touch support: %s", c));
        for (b in this.ua)this.ua.hasOwnProperty(b) && this.log("%s=%s", b, this.ua[b])
    }

    Mh.prototype = {
        log: t("CONFIG"), on: function (a, b) {
            b(a, this.ua[a], !0);
            return J.prototype.on.call(this, a, b)
        }, gh: function () {
            return this.ua.showBrushTool
        }, We: function () {
            return this.ua.showPropertyPanel
        }, hh: function () {
            return this.ua.showColourPanel
        }, ih: function () {
            return this.ua.showToolbar
        }, get: function (a) {
            return this.ua[a]
        }, $b: function () {
            return "auto" === this.ua.useTouch ? "ontouchstart" in window || "onmsgesturechange" in window : this.ua.useTouch
        }
    };
    function kb(a, b) {
        var c = b;
        0 < a.ua.maximumZoom && (b = Math.min(b, a.ua.maximumZoom));
        0 < a.ua.minimumZoom && (b = Math.max(b, a.ua.minimumZoom));
        b !== c && a.log("Zoom restricted to %s", b);
        return b
    }

    function sh(a) {
        return "radial" === a.get("drawCircleStyle") || "radial" === a.get("drawShapeStyle") ? "circle" : "rectangle"
    }

    function Ph(a, b) {
        for (var c in a.ua)if (a.ua.hasOwnProperty(c) && 0 === c.indexOf("key")) {
            for (var d = "", e = 0; e < c.length; e++)var f = c.charAt(e),
                d = f === f.toUpperCase() ? d + ("-" + f.toLowerCase()) : d + f;
            b.map(a.ua[c], d.substr(4))
        }
    }

    function Qh(a) {
        a = a.get("pageSelectorDiv");
        return void 0 !== a.className ? a : "" !== a && q(a).length ? q(a)[0] : null
    }

    function Y(a, b) {
        return 0 === b.indexOf("http:") || 0 === b.indexOf("https:") || 0 === b.indexOf("/") ? b : a.aa + b
    }

    function Oh() {
        var a, b;
        b = Jh;
        a = b.lastIndexOf("/");
        0 <= a ? b = b.substr(0, a + 1) : b = "";
        return b
    }

    function Nh(a, b, c, d) {
        if (!(b in a.ua))return a.log("Error: %s is not a configuration option.", b), !1;
        if ("defaultZoom" === b) {
            if ("page" !== c && "width" !== c && !T(c) && (c = parseFloat(c), isNaN(c)))return a.log("Error: Config option %s must be a number or 'page' or 'width'", b), !1
        } else if ("allowSelectBox" !== b)if ("colourPalette" === b) {
            if ("auto" !== b && "string" === typeof c) {
                var e = /#[0-9a-f]+|rgba?\([^\)]+\)|[a-z]+/gi, f = [], g;
                do(g = e.exec(c)) && f.push(g[0]); while (g);
                c = f
            }
        } else if ("string" === typeof c)if ("number" === typeof a.ua[b]) {
            if (c =
                    parseFloat(c), isNaN(c))return a.log("Error: Config option %s expects a number", b), !1
        } else"boolean" === typeof a.ua[b] && (c = "1" === c || "true" === c || "" === c);
        a.log("Set config %s=%s", b, c);
        a.ua[b] = c;
        d || (a.Mc("update", b, c), a.Mc(b, c));
        return !0
    }

    Mh.prototype = q.aa({}, J.prototype, Mh.prototype);
    function Rh(a) {
        Sh(this, a)
    }

    function Sh(a, b) {
        a.ja = b || q("<div>");
        a.ja.ha("position", "absolute");
        a.ja.ha("margin", "0px");
        a.ja.ha("padding", "0px");
        q("body").append(a.ja)
    }

    n = Rh.prototype;
    n.width = function (a) {
        function b(a) {
            a = parseInt(c.ja.ha(a), 10);
            return isNaN(a) ? 0 : a
        }

        var c = this;
        if (void 0 === a)return this.ja.outerWidth();
        a -= b("border-left-width");
        a -= b("border-right-width");
        a -= b("padding-right");
        a -= b("padding-left");
        a -= b("margin-left");
        a -= b("margin-right");
        a = Math.max(0, a);
        this.ja.ha("width", "" + a + "px")
    };
    n.height = function (a) {
        function b(a) {
            a = parseInt(c.ja.ha(a), 10);
            return isNaN(a) ? 0 : a
        }

        var c = this;
        if (void 0 === a)return this.ja.outerHeight();
        a -= b("border-top-width");
        a -= b("border-bottom-width");
        a -= b("padding-top");
        a -= b("padding-bottom");
        a -= b("margin-top");
        a -= b("margin-bottom");
        this.ka = a = Math.max(0, a);
        this.ja.ha("height", "" + this.ka + "px")
    };
    n.moveTo = function (a, b) {
        null !== a && this.ja.ha("left", "" + a + "px");
        null !== b && this.ja.ha("top", "" + b + "px")
    };
    n.show = function () {
        this.ja.show()
    };
    n.Za = function () {
        this.ja.Za()
    };
    function Th(a, b) {
        Rh.apply(this, arguments);
        var c = this;
        this.ja.ha("background", "black");
        this.ja.ha("font-family", '"Lucida Console","Dejavu Sans Mono",Monospace,"Courier New"');
        this.ja.ha("font-size", "10px");
        this.ja.ha("line-height", "12px");
        this.ja.ha("overflow", "scroll");
        this.ja.ha("cursor", "default");
        this.qa = 0;
        this.ma = {};
        this.rb = !1;
        this.ta = na(function (a, b) {
            return Uh(c, a, b)
        });
        b.add(function () {
            for (var a = c.ta, b = 0; b < ma.length; b++)if (ma[b] === a) {
                ma.splice(b, 1);
                break
            }
        });
        this.da = null;
        this.ba = [];
        Uh(this, "DEBUG",
            "Debug window starting")
    }

    Th.prototype = {
        aa: "#ffffff #008800 #008888 #880000 #880088 #884400 #888888 #444444 #0000ff #00ff00 #00ffff #ff0000 #ff00ff #ffff00".split(" "),
        show: function () {
            Rh.prototype.show.call(this);
            this.rb = !0;
            Vh(this);
            this.ja[0].scrollTop = this.ja[0].scrollHeight
        },
        Za: function () {
            this.rb = !1;
            Rh.prototype.Za.call(this)
        }
    };
    function Vh(a) {
        var b, c, d, e, f, g, h;
        b = a.ja[0].scrollTop > a.ja[0].scrollHeight - a.ja[0].clientHeight - 100;
        h = a.ba;
        f = 0;
        for (g = h.length; f < g; f++) {
            d = h[f];
            e = d.key;
            d = d.Ng;
            c = a;
            var k = e;
            k in c.ma || (c.ma[k] = c.aa[c.qa], c.qa = (c.qa + 1) % c.aa.length);
            c = c.ma[k];
            c = q("<div>").ha("color", c);
            c.ha("border-bottom", "1px solid #222");
            c.text("" + e + ": " + d);
            a.ja.append(c)
        }
        b && (a.ja[0].scrollTop = a.ja[0].scrollHeight);
        a.da = null;
        a.ba.length = 0
    }

    function Uh(a, b, c) {
        var d, e, f;
        f = c.split("\n");
        d = 0;
        for (e = f.length; d < e; d++)c = f[d], a.ba.push({key: b, Ng: c});
        a.rb && null === a.da && (a.da = setTimeout(function () {
            return Vh(a)
        }, 100))
    }

    sc(Rh.prototype, Th.prototype);
    function Wh(a) {
        var b = q("<div>");
        Sh(this, b);
        a.append(this.ja);
        this.qa = {};
        this.ba = 128;
        this.aa = 0;
        this.ja.ha("overflow-x", "auto");
        this.ja.ha("overflow-y", "auto");
        this.ta = 0;
        this.ma = 1;
        this.da = [];
        this.Aa = null
    }

    Wh.prototype = {
        on: function (a, b) {
            this.qa[a] = b
        }, log: t("ListView"), format: function () {
            var a, b, c, d, e;
            b = null;
            e = this.da;
            c = 0;
            for (d = e.length; c < d; c++) {
                a = e[c];
                if (!a.Ke) {
                    if (null === b) {
                        b = this.ja;
                        var f = a.za, f = Da(f);
                        0 < b.length ? b[0].insertBefore(f[0], b[0].firstChild) : b[0].appendChild(f[0])
                    } else Sa(b.za, a.za);
                    a.Ke = !0
                }
                b = a
            }
        }
    };
    function Xh(a) {
        a.ja.empty();
        a.da.length = 0;
        a.ma += 1
    }

    function Yh(a, b, c, d) {
        var e, f;
        f = a.ma;
        e = {za: null, index: a.ta, Ke: !1};
        a.ta += 1;
        Fb(b, function (b) {
            var h, k;
            f === a.ma && (k = b.width, h = b.height, a.ba && k > a.ba && (b.width = a.ba, b.height = h / k * a.ba), a.aa && h > a.aa && (b.width = a.aa / (h / k), b.height = a.aa), b = q(b), b.ha("margin", "2px"), b.ha("border-width", "3"), b.ha("border-color", "white"), b.ha("border-style", "solid"), b.ha("image-rendering", "optimizeQuality"), Ja(b, function () {
                a.log("Mouseenter");
                return b.ha("border-color", "#888888")
            }), Ia(b, function () {
                return b.ha("border-color", "white")
            }),
                b.click(function () {
                    if ("click" in a.qa)return a.qa.click(c)
                }), d && b.ob("title", d), e.za = b, a.da.push(e), a.da.sort(function (a, b) {
                return a.index - b.index
            }), a.Aa || (a.Aa = setTimeout(function () {
                a.Aa = null;
                a.format()
            }, 500)))
        })
    }

    Wh.prototype = q.aa({}, Rh.prototype, Wh.prototype);
    function Zh(a, b, c) {
        this.ga = a;
        this.ma = b;
        this.ta = c;
        Sh(this, q("<div>"));
        Qa(this.ja, "PropertyPanel");
        this.aa = [];
        this.ba = {};
        this.view = null;
        this.Ba = [];
        (this.qa = vg() && "wheel" === a.get("colourPicker")) || this.log("ColourWheel not supported in this canvas.");
        this.action = null;
        this.ja.ha("background", "#ffffff");
        this.ja.ha("border", "none");
        this.ja.ha("font-family", "tahoma,arial,helvetica,sans");
        this.ja.ha("color", "#4fa0d3");
        this.ja.ha("font-weight", "bold");
        this.ja.ha("font-size", "10pt");
        this.ja.ha("overflow-y",
            "scroll");
        var d = this;
        this.ja.click(function () {
            d.log("PropertyPanel clicked.");
            d.emit("click")
        });
        this.da = null
    }

    Zh.prototype = {
        log: t("PROP"), on: function (a, b) {
            if ("click" === a) this.da = b; else throw"This object only handles the click event";
        }, emit: function () {
            this.da && this.da()
        }, apply: function (a, b) {
            this.view.setProperty(a, b)
        }
    };
    function $h(a, b, c, d) {
        null !== a.action && a.action.name === d.name || a.view.setProperty(d.name, b);
        c.value = b
    }

    function ai(a, b) {
        if (!b.He) {
            var c = "#000000 #ffffff #000088 #008800 #008888 #880000 #880088 #884400 #888888 #444444 #0000ff #00ff00 #00ffff #ff0000 #ff00ff #ffff00".split(" ");
            if (a.qa) {
                var c = document.createElement("div"), d = new sg(c, 120);
                ug(d, b.input.value);
                d.Ka = function (c) {
                    $h(a, c, b.input, b.input.Lb)
                };
                b.Ch = d;
                b.He = !0;
                b.parentNode.appendChild(c)
            } else {
                d = a.ga.get("colourPalette");
                "auto" === d && (d = c);
                c = new vf(q(b.parentNode), 20, !1, !0, d);
                c.ja.ha("position", "static");
                b.Ch = c;
                b.He = !0;
                b.parentNode.appendChild(c.ja[0]);
                var e;
                c.on("colour", function (c) {
                    $h(a, c.Ua, b.input, b.input.Lb);
                    c = Q(c.Ua).values[3];
                    e.value = Math.round(100 * c)
                });
                e = Bc(a.ta);
                e.min = 0;
                e.max = 100;
                var f = Q(b.input.value);
                e.Ve(Math.round(100 * f.values[3]));
                e.onchange = function () {
                    f = Q(b.input.value);
                    f.values[3] = e.value / 100;
                    $h(a, f.toString(), b.input, b.input.Lb)
                };
                b.parentNode.appendChild(document.createElement("br"));
                b.parentNode.appendChild(e)
            }
        }
    }

    function Ah(a) {
        function b() {
            ai(a, this)
        }

        function c() {
            var b = this;
            "timer" in b && clearTimeout(b.timer);
            b.timer = setTimeout(function () {
                a.apply(b.Lb.name, b.value)
            }, 250)
        }

        function d() {
            a.view.log("Someone clicked a button for %s", this.Lb.name)
        }

        function e(b) {
            13 === b.keyCode && a.apply(this.Lb.name, this.value)
        }

        function f() {
            a.apply(this.Lb.name, this.Lb.values[parseInt(this.value, 10)].value)
        }

        q(a.ja).empty();
        var g, h;
        for (g = 0; g < a.aa.length; g++) {
            var k = a.aa[g], l = k.pe;
            if ("none" !== l.type) {
                var m = document.createElement("div");
                h = document.createElement("span");
                h.appendChild(document.createTextNode(l.display));
                m.appendChild(h);
                m.appendChild(document.createElement("br"));
                if ("select" === l.type) {
                    var p = document.createElement("select");
                    for (h = 0; h < l.values.length; h++) {
                        var r = l.values[h], u = document.createElement("option");
                        u.appendChild(document.createTextNode(r.name));
                        u.setAttribute("value", h);
                        r.value === k.value && u.setAttribute("selected", "");
                        p.appendChild(u)
                    }
                    p.Lb = l;
                    p.onchange = f;
                    m.appendChild(p)
                } else if ("colour" === l.type) h = document.createElement("input"),
                    h.setAttribute("type", "text"), h.value = k.value, h.Lb = l, Oa(q(h), e), m.appendChild(h), k = document.createElement("img"), k.src = Y(a.ga, "wd-wheel.png"), k.style.verticalAlign = "middle", k.input = h, m.appendChild(k), q(k).click(b); else if ("text" === l.type) h = document.createElement("input"), h.setAttribute("type", "text"), h.value = k.value, h.Lb = l, Oa(q(h), e), m.appendChild(h); else if ("textarea" === l.type) h = document.createElement("textarea"), h.setAttribute("rows", "3"), h.setAttribute("cols", "20"), h.value = k.value, h.Lb = l, Oa(q(h),
                    c), m.appendChild(h); else if ("button" === l.type) h = document.createElement("input"), h.setAttribute("type", "button"), h.value = "Edit", h.Lb = l, q(h).click(d), m.appendChild(h); else throw"Error: No such property";
                a.ja.append(m)
            }
        }
    }

    function zh(a, b, c) {
        var d = a.ma.zc();
        if ("strokeStyle" === c)return {name: c, type: "colour", display: d("outline-colour")};
        if ("fillStyle" === c)return {name: c, type: "colour", display: d("fill-colour")};
        if ("lineWidth" === c)return a = [{name: d("thickness-pencil"), value: 1}, {
            name: d("thickness-pen"),
            value: 2
        }, {name: d("thickness-marker"), value: 4}, {
            name: d("thickness-brush"),
            value: 10
        }], !0 !== b.pa("closed") && "TextNode" !== b.type() || a.unshift({name: d("none"), value: 0}), {
            name: c,
            display: d("outline-thickness"),
            type: "select",
            values: a
        };
        if ("sloppiness" === c)return {
            name: "sloppiness",
            display: d("sloppiness"),
            type: "select",
            values: [{name: d("sloppiness-draftsman"), value: 0}, {
                name: d("sloppiness-artist"),
                value: .25
            }, {name: d("sloppiness-cartoonist"), value: .5}, {
                name: d("sloppiness-child"),
                value: 1
            }, {name: d("sloppiness-drunk"), value: 2}]
        };
        if ("smoothness" === c)return {
            name: "smoothness",
            display: d("smoothness"),
            type: "select",
            values: [{name: d("smoothness-sharpest"), value: 0}, {
                name: d("smoothness-sharper"),
                value: .1
            }, {name: d("smoothness-sharp"), value: .2}, {
                name: d("smoothness-smooth"),
                value: .3
            }, {name: d("smoothness-smoothest"), value: .5}]
        };
        if ("shadow" === c)return {
            name: "shadow",
            display: d("shadow"),
            type: "select",
            values: [{name: d("yes"), value: !0}, {name: d("no"), value: !1}]
        };
        if ("dashes" === c)return {
            name: "dashes",
            display: d("line-style"),
            type: "select",
            values: [{name: d("line-style-solid"), value: ""}, {
                name: d("line-style-short-dashes"),
                value: "5,5"
            }, {name: d("line-style-long-dashes"), value: "10,5"}]
        };
        if ("matrix" === c || "inverse" === c || "closed" === c || "commands" === c || "seed" === c)return {
            name: c,
            type: "none"
        };
        if ("text" === c)return {name: "text", display: d("text"), type: "textarea"};
        if ("textFillStyle" === c)return {name: "textFillStyle", display: d("text-colour"), type: "colour"};
        if ("fontSize" === c)return {
            name: "fontSize",
            display: d("font-size"),
            type: "select",
            values: [{name: "10", value: 10}, {name: "12", value: 12}, {name: "15", value: 15}, {
                name: "20",
                value: 20
            }, {name: "30", value: 30}, {name: "40", value: 40}, {name: "50", value: 50}, {
                name: "60",
                value: 60
            }, {name: "100", value: 100}]
        };
        if ("fontName" === c) {
            b = [];
            c = a.ga.ua.fonts;
            for (a = 0; a < c.length; a++)b.push({
                name: c[a],
                value: c[a]
            });
            return {name: "fontName", display: d("font"), type: "select", values: b}
        }
        return "arrowSize" === c ? {
            name: "arrowSize",
            display: d("arrowhead-size"),
            type: "select",
            values: [{name: d("arrowhead-size-none"), value: 0}, {
                name: d("arrowhead-size-tiny"),
                value: 10
            }, {name: d("arrowhead-size-small"), value: 15}, {
                name: d("arrowhead-size-medium"),
                value: 20
            }, {name: d("arrowhead-size-large"), value: 30}]
        } : "arrowStyle" === c ? {
            name: "arrowStyle",
            display: d("arrowhead-style"),
            type: "select",
            values: [{name: d("arrowhead-style-simple"), value: "simple"},
                {name: d("arrowhead-style-solid"), value: "solid"}]
        } : "doubleArrow" === c ? {
            name: "doubleArrow",
            display: d("double-arrows"),
            type: "select",
            values: [{name: d("no"), value: !1}, {name: d("yes"), value: !0}]
        } : "url" === c ? {name: "url", display: d("image-url"), type: "text"} : "rows" === c ? {
            name: c,
            display: "Rows",
            type: "text"
        } : "columns" === c ? {name: c, display: "Columns", type: "text"} : {
            name: c,
            display: "Display-" + c,
            type: "text"
        }
    }

    Zh.prototype = q.aa({}, Rh.prototype, Zh.prototype);
    function bi(a, b) {
        this.za = a;
        "" !== b && b || (b = "repeat");
        this.repeat = b
    }

    function ci() {
        this.wa = new O;
        this.ka = [];
        this.lineCap = "butt";
        this.lineJoin = "miter";
        this.strokeStyle = "#000000";
        this.lineWidth = 1;
        this.fillStyle = "#000000";
        this.textBaseline = "top";
        this.font = "10pt arial"
    }

    ci.prototype = {
        save: function () {
            this.ka.push({
                fillStyle: this.fillStyle,
                font: this.font,
                lineJoin: this.lineJoin,
                lineCap: this.lineCap,
                lineWidth: this.lineWidth,
                wa: this.wa.clone(),
                strokeStyle: this.strokeStyle,
                textBaseline: this.textBaseline
            })
        }, restore: function () {
            var a = this.ka.pop();
            this.fillStyle = a.fillStyle;
            this.font = a.font;
            this.lineJoin = a.lineJoin;
            this.lineCap = a.lineCap;
            this.lineWidth = a.lineWidth;
            this.wa = a.wa;
            this.strokeStyle = a.strokeStyle;
            this.textBaseline = a.textBaseline
        }, arc: function (a, b, c, d, e, f) {
            f && (f =
                d, d = e, e = f);
            for (; 0 > d;)d += 2 * Math.PI;
            for (; 0 > e;)e += 2 * Math.PI;
            d > e && (d -= 2 * Math.PI);
            var g, h, k = 2 * Math.PI;
            g = d % k;
            h = e % k;
            h === g && (h += 2 * Math.PI);
            e = [];
            d = Math.PI / 2;
            f = g < h ? 1 : -1;
            for (var l = g, k = Math.min(k, Math.abs(h - g)); 1E-5 < k;) {
                g = l + f * Math.min(k, d);
                var m = (g - l) / 2, p = c * Math.cos(m), r = c * Math.sin(m), u = .5522847498 * Math.tan(m);
                h = p + u * r;
                p = -r + u * p;
                r = -p;
                u = m + l;
                m = Math.cos(u);
                u = Math.sin(u);
                e.push({
                    Sb: c * Math.cos(l),
                    Tb: c * Math.sin(l),
                    rc: h * m - p * u,
                    sc: h * u + p * m,
                    Eh: h * m - r * u,
                    Ih: h * u + r * m,
                    Fh: c * Math.cos(g),
                    Jh: c * Math.sin(g)
                });
                k -= Math.abs(g - l);
                l = g
            }
            for (c =
                     0; c < e.length; c++)d = e[c], 0 === c && this.moveTo(d.Sb + a, d.Tb + b), this.bezierCurveTo(d.rc + a, d.sc + b, d.Eh + a, d.Ih + b, d.Fh + a, d.Jh + b)
        }, strokeRect: function (a, b, c, d) {
            this.beginPath();
            this.rect(a, b, c, d);
            this.stroke()
        }, setTransform: function (a, b, c, d, e, f) {
            this.wa = new O(a, c, b, d, e, f)
        }, transform: function (a, b, c, d, e, f) {
            a = new O(a, c, b, d, e, f);
            this.wa = this.wa.multiply(a)
        }, translate: function (a, b) {
            this.transform(1, 0, 0, 1, a, b)
        }, scale: function (a, b) {
            this.transform(a, 0, 0, b, 0, 0)
        }, rotate: function (a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            this.transform(b,
                a, -a, b, 0, 0)
        }, rect: function (a, b, c, d) {
            this.beginPath();
            this.moveTo(a, b);
            this.lineTo(a + c, b);
            this.lineTo(a + c, b + d);
            this.lineTo(a, b + d);
            this.lineTo(a, b);
            this.closePath()
        }, fillRect: function (a, b, c, d) {
            this.rect(a, b, c, d);
            this.fill()
        }, Kc: function (a) {
            var b = null, c = null, d = "normal", e = "normal", f = "normal", g = "normal";
            a = a.split(/\s+/);
            a:for (; ;) {
                var h = a.shift();
                if (!h)break;
                switch (h) {
                    case "normal":
                        break;
                    case "italic":
                    case "oblique":
                        d = h;
                        break;
                    case "small-caps":
                        f = h;
                        break;
                    case "bold":
                    case "bolder":
                    case "lighter":
                    case "100":
                    case "200":
                    case "300":
                    case "400":
                    case "500":
                    case "600":
                    case "700":
                    case "800":
                    case "900":
                        e =
                            h;
                        break;
                    default:
                        if (!c) {
                            h = h.split("/");
                            c = h[0];
                            1 < h.length && (g = h[1]);
                            break
                        }
                        b = h;
                        a.length && (b += " " + a.join(" "));
                        2 < b.length && ('"' === b.charAt(0) || "'" === b.charAt(0)) && (b = b.substr(1, b.length - 2));
                        break a
                }
            }
            return {fontStyle: d, fontVariant: f, fontWeight: e, fontSize: c, lineHeight: g, fontFamily: b}
        }, createPattern: function (a, b) {
            return new bi(a, b)
        }
    };
    function di() {
        this.fa = []
    }

    di.prototype = {
        lineTo: function (a, b, c) {
            a.apply(b, c);
            this.fa.push({$c: "L", kc: a.apply(b, c)})
        }, moveTo: function (a, b, c) {
            a.apply(b, c);
            this.fa.push({$c: "M", kc: a.apply(b, c)})
        }, quadraticCurveTo: function (a, b, c, d, e) {
            this.fa.push({$c: "Q", kc: a.apply(b, c), Rc: a.apply(d, e)})
        }, bezierCurveTo: function (a, b, c, d, e, f, g) {
            this.fa.push({$c: "C", kc: a.apply(b, c), Rc: a.apply(d, e), kd: a.apply(f, g)})
        }, closePath: function () {
            this.fa.push({$c: "Z"})
        }
    };
    function ei(a, b) {
        for (var c = b.inverse(), d = "", e = 0; e < a.fa.length; e++) {
            var f = a.fa[e];
            0 < e && (d += " ");
            d += f.$c;
            if (f.kc) {
                var g = c.apply(f.kc.x, f.kc.y), d = d + (g.x + "," + g.y);
                f.Rc && (g = c.apply(f.Rc.x, f.Rc.y), d += "," + g.x + "," + g.y, f.kd && (f = c.apply(f.kd.x, f.kd.y), d += "," + f.x + "," + f.y))
            }
        }
        return d
    }

    function fi(a) {
        ci.call(this);
        this.wa = new O;
        this.fa = [];
        this.path = new di;
        this.log("SVG context rect: %s", a);
        this.root = new ga("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            version: 1.2,
            baseProfile: "tiny",
            width: a.width,
            height: a.height,
            viewBox: a.x + " " + a.y + " " + a.width + " " + a.height
        });
        this.ba = new ga("defs", {});
        this.aa = [];
        ia(this.root, this.ba)
    }

    fi.prototype = {
        log: t("SvgContext"), Xd: 1, Zd: 2, FONT: 4, node: function (a, b, c, d) {
            function e(a, b) {
                if (b instanceof bi) {
                    var d;
                    d = f;
                    var e = gi(d, b);
                    if (e) d = e; else {
                        var m;
                        e = b.za;
                        m = gi(d, e);
                        if (!m) {
                            m = "image" + d.aa.length;
                            d.aa.push({Pc: e, hd: m});
                            var p = document.createElement("canvas"), r = p.getContext("2d");
                            p.width = e.width;
                            p.height = e.height;
                            r.drawImage(e, 0, 0);
                            p = p.toDataURL();
                            ia(d.ba, new ga("image", {
                                id: m,
                                x: 0,
                                y: 0,
                                width: e.width,
                                height: e.height,
                                "xlink:href": p
                            }))
                        }
                        e = "pattern" + d.aa.length;
                        d.aa.push({Pc: b, hd: e});
                        p = new ga("pattern",
                            {id: e});
                        "no-repeat" === b.repeat ? (p.aa.width = "1", p.aa.height = "1") : "repeat-x" === b.repeat ? (p.aa.patternUnits = "userSpaceOnUse", p.aa.width = b.za.width, p.aa.height = 1E4) : ("repeat-y" === b.repeat ? (p.aa.patternUnits = "userSpaceOnUse", p.aa.width = 1E4) : (p.aa.patternUnits = "userSpaceOnUse", p.aa.width = b.za.width), p.aa.height = b.za.height);
                        ia(p, new ga("use", {"xlink:href": "#" + m}));
                        ia(d.ba, p);
                        d = e
                    }
                    c[a] = "url(#" + d + ")"
                } else d = Q(b), e = d.values[3], 1 > e && (d.values[3] = 1, c[a + "-opacity"] = "" + e), c[a] = d.toString()
            }

            var f = this;
            Rc(this.wa) ||
            (c.transform = "matrix(" + this.wa.m11 + " " + this.wa.m21 + " " + this.wa.m12 + " " + this.wa.m22 + " " + this.wa.Da + " " + this.wa.Ea + ")");
            b & this.Xd ? e("fill", this.fillStyle) : c.fill = "none";
            b & this.Zd && (e("stroke", this.strokeStyle), c["stroke-width"] = this.lineWidth, "miter" !== this.lineJoin && (c["stroke-linejoin"] = this.lineJoin), "butt" !== this.lineCap && (c["stroke-linecap"] = this.lineCap));
            b & this.FONT && (b = this.Kc(this.font), c["font-weight"] = b.fontWeight, c["font-size"] = parseFloat(b.fontSize), c["font-style"] = b.fontStyle, c["font-family"] =
                b.fontFamily);
            ia(this.root, new ga(a, c, d))
        }, toString: function () {
            return '<?xml version="1.0" encoding="UTF-8"?>\n' + this.root.toString()
        }, yd: function () {
            for (var a = this.toString(), b = new Uint8Array(a.length), c = 0; c < a.length; c++)b[c] = a.charCodeAt(c);
            return new Blob([b], {type: "image/svg+xml"})
        }, beginPath: function () {
            this.path = new di
        }, transform: function (a, b, c, d, e, f) {
            a = new O(a, c, b, d, e, f);
            this.wa = this.wa.multiply(a)
        }, closePath: function () {
            this.path.closePath()
        }, fill: function () {
            this.node("path", this.Xd, {
                d: ei(this.path,
                    this.wa)
            })
        }, stroke: function () {
            this.node("path", this.Zd, {d: ei(this.path, this.wa)})
        }, moveTo: function (a, b) {
            this.path.moveTo(this.wa, a, b)
        }, lineTo: function (a, b) {
            this.path.lineTo(this.wa, a, b)
        }, quadraticCurveTo: function (a, b, c, d) {
            this.path.quadraticCurveTo(this.wa, a, b, c, d)
        }, bezierCurveTo: function (a, b, c, d, e, f) {
            this.path.bezierCurveTo(this.wa, a, b, c, d, e, f)
        }, fillText: function (a, b, c) {
            this.Kc(this.font);
            this.node("text", this.Xd | this.FONT, {x: b, y: c}, a)
        }, strokeText: function (a, b, c) {
            this.Kc(this.font);
            this.node("text",
                this.Zd | this.FONT, {x: b, y: c}, a)
        }, drawImage: function (a, b, c, d, e, f, g, h, k) {
            var l = document.createElement("canvas"), m = l.getContext("2d");
            l.width = d;
            l.height = e;
            m.drawImage(a, -b, -c);
            a = l.toDataURL();
            ia(this.root, new ga("image", {
                transform: "matrix(" + this.wa.m11 + " " + this.wa.m21 + " " + this.wa.m12 + " " + this.wa.m22 + " " + this.wa.Da + " " + this.wa.Ea + ")",
                x: f,
                y: g,
                width: h,
                height: k,
                "xlink:href": a
            }))
        }
    };
    function gi(a, b) {
        for (var c = 0; c < a.aa.length; c++)if (console.log("Check ", a.aa[c].Pc), a.aa[c].Pc === b && void 0 === a.aa[c].Je)return a.aa[c].hd;
        console.log("Not found");
        return null
    }

    fi.prototype = q.aa({}, ci.prototype, fi.prototype);
    function hi(a, b, c, d) {
        this.x = a;
        this.y = b;
        this.width = c;
        this.height = d;
        this.ba = [];
        this.ka = ii(this, "Pages", {Kids: [], Count: 0});
        this.qa = ii(this, "Catalog", {Pages: this.ka._id + " 0 R"});
        this.fonts = {};
        this.da = [];
        this.ma = {};
        this.aa = 1;
        ji(this)
    }

    var ki = null;
    hi.prototype = {
        log: t("PdfWriter"), yd: function () {
            for (var a = li(this), b = new Uint8Array(a.length), c = 0; c < a.length; c++)b[c] = a.charCodeAt(c);
            return new Blob([b], {type: "application/pdf"})
        }, Mb: function (a) {
            for (var b = [], c = 0; c < arguments.length; c++) {
                var d = "" + arguments[c];
                0 < d.indexOf("e") && (d = arguments[c].toFixed(20));
                b.push(d)
            }
            return b.join(" ")
        }
    };
    function mi(a, b, c, d, e) {
        e ? b.push("<<\n") : (c.push(b.join("").length), b.push(d._id + " 0 obj\n"), "Type" in d ? b.push("<< /Type /" + d.Type + "\n") : b.push("<<\n"));
        "_stream" in d && (d.Length = d._stream.toString().length);
        for (var f in d)if (d.hasOwnProperty(f) && "Type" !== f && "_" !== f.charAt(0)) {
            e && b.push("    ");
            b.push("   /" + f + " ");
            var g = d[f];
            "object" === typeof g && "[object Array]" === Object.prototype.toString.apply(g) ? b.push("[ " + g.join(" ") + " ]") : "object" === typeof g ? mi(a, b, c, g, !0) : b.push(g);
            b.push("\n")
        }
        e && b.push("    ");
        b.push(">>\n");
        "_stream" in d && (b.push("stream\n"), b.push(d._stream + "\n"), b.push("endstream\n"));
        e || b.push("endobj\n")
    }

    function li(a) {
        var b = [], c = [], d;
        b.push("%PDF-1.4\n%\u0080\u0081\u0082\u0083\n");
        for (d = 0; d < a.ba.length; d++)mi(a, b, c, a.ba[d], !1);
        var e = b.join("").length;
        b.push("xref\n0 " + (a.ba.length + 1) + "\n");
        b.push("0000000000 65535 f\n");
        for (d = 0; d < a.ba.length; d++) {
            for (var f = c[d], f = "" + f; 10 > f.length;)f = "0" + f;
            b.push(f + " 00000 n \n")
        }
        b.push("trailer\n");
        b.push("<< /Size " + (a.ba.length + 1) + "\n");
        b.push("   /Root " + a.qa._id + " 0 R\n");
        b.push(">>\n");
        b.push("startxref\n");
        b.push(e + "\n");
        b.push("%%EOF\n");
        return b.join("")
    }

    function ni(a, b, c) {
        var d = oi(a, b.za, c.toString());
        if (!d) {
            d = "P" + a.aa;
            a.aa += 1;
            pi(a, b.za, b.za);
            var e = oi(a, b.za), f = new O(b.za.width, 0, 0, -b.za.height, 0, b.za.height), f = c.multiply(f), g = "1",
                h = "1", k = Oc(c), k = Math.max(k.x, k.y);
            if ("no-repeat" === b.repeat || "repeat-y" === b.repeat) g = Math.ceil(a.width / b.za.width / k);
            if ("no-repeat" === b.repeat || "repeat-x" === b.repeat) h = Math.ceil(a.height / b.za.height / k);
            d = ii(a, "Pattern", {
                _name: d,
                PatternType: "1",
                PaintType: "1",
                TilingType: "2",
                BBox: "[0 0 1 1]",
                XStep: g,
                YStep: h,
                Matrix: "[ " + a.Mb(f.m11,
                    f.m21, f.m12, f.m22, f.Da, f.Ea) + "]",
                Resources: "<< /XObject << /" + e._name + " " + e._id + " 0 R >> >>"
            });
            d._stream = "/" + e._name + " Do";
            a.da.push({Pc: b.za, Je: c.toString(), hd: d})
        }
        qi(a, "Pattern", d);
        return "/" + d._name
    }

    function pi(a, b, c) {
        var d, e = oi(a, b);
        if (!e) {
            e = "I" + a.aa;
            a.aa += 1;
            var f;
            c instanceof HTMLImageElement ? (f = document.createElement("canvas"), f.width = c.width, f.height = c.height, f.getContext("2d").drawImage(c, 0, 0)) : f = c;
            c = f.getContext("2d").getImageData(0, 0, f.width, f.height);
            var g = "", h = !1, k, l;
            null !== ki ? k = ki : (k = document.createElement("canvas"), g = !1, k.width = 10, k.height = 10, "toDataURL" in k && (g = 0 < k.toDataURL("image/jpeg").indexOf("jpeg")), ki = g, a.log("JPEG supported: %s", g), k = g);
            if (k) {
                a.log("Using JPEG encoding");
                k = "[/DCTDecode]";
                g = ub("");
                for (d = 0; d < c.data.length; d += 4)h = h || 255 > c.data[d + 3];
                d = f.toDataURL("image/jpeg");
                var m = atob(d.split(",")[1]);
                for (d = 0; d < m.length; d++)g.Ta(m.charCodeAt(d))
            } else {
                a.log("Using LZW encoding");
                k = "[/LZWDecode]";
                g = ub("LZWEncoder");
                for (d = 0; d < c.data.length; d += 4)g.Ta(c.data[d]), g.Ta(c.data[d + 1]), g.Ta(c.data[d + 2]), h = h || 255 > c.data[d + 3];
                l = "[ <</EarlyChange 0 >> ]"
            }
            g.flush();
            g = g.Nc().toString();
            e = ii(a, "XObject", {
                Subtype: "/Image", Width: f.width, Height: f.height, ColorSpace: "/DeviceRGB", BitsPerComponent: 8,
                Length: g.length, Interpolate: "true", Filter: k, _name: e, _stream: g
            });
            l && (e.DecodeParms = l);
            if (h) {
                g = ub("LZWEncoder");
                for (d = 0; d < c.data.length; d += 4)g.Ta(c.data[d + 3]);
                g.flush();
                g = g.Nc().toString();
                f = ii(a, "XObject", {
                    Subtype: "/Image",
                    Width: f.width,
                    Height: f.height,
                    ColorSpace: "/DeviceGray",
                    BitsPerComponent: 8,
                    Length: g.length,
                    Filter: "[/LZWDecode]",
                    DecodeParms: "[ << /EarlyChange 0 >> ]",
                    _stream: g
                });
                e.SMask = f._id + " 0 R"
            }
            a.da.push({Pc: b, hd: e})
        }
        qi(a, "XObject", e);
        return "/" + e._name
    }

    function oi(a, b, c) {
        for (var d = 0; d < a.da.length; d++)if (a.da[d].Pc === b && c === a.da[d].Je)return a.da[d].hd;
        return null
    }

    function qi(a, b, c) {
        "Resources" in a.page || (a.page.Resources = {});
        b in a.page.Resources || (a.page.Resources[b] = {});
        a.page.Resources[b][c._name] = c._id + " 0 R"
    }

    function ri(a, b, c) {
        var d = "" + b + "-" + c;
        if (!(d in a.ma)) {
            var e = "gs" + a.aa;
            a.aa += 1;
            var f = ii(a, "ExtGState", {_name: e});
            c ? f.ca = a.Mb(b) : f.CA = a.Mb(b);
            a.ma[d] = e;
            qi(a, "ExtGState", f)
        }
        return a.ma[d]
    }

    function ii(a, b, c) {
        var d = a.ba.length + 1;
        b && (c.Type = b);
        c._id = d;
        a.ba.push(c);
        return c
    }

    function ji(a, b, c, d, e) {
        b = b || a.x;
        c = c || a.y;
        d = d || a.width;
        e = e || a.height;
        a.log("StartPage MediaBox=[%s %s %s %s]", b, c, d, e);
        a.page = ii(a, "Page", {MediaBox: [b, c, b + d, c + e], Parent: a.ka._id + " 0 R"});
        a.ka.Kids.push(a.page._id + " 0 R");
        a.ka.Count += 1;
        a.ma = {}
    }

    function si(a, b) {
        ci.call(this);
        this.ta = b;
        this.ma = this.Zf;
        this.da = a.clone();
        this.da.transform(new cb(.75, .75, 0, 0));
        this.Sc = "black";
        this.ba = new hi(72 * a.x / 96, 72 * a.y / 96, 72 * a.width / 96, 72 * a.height / 96);
        this.aa = [];
        this.path = [];
        this.y = this.x = 0;
        this.qa = [];
        this.strokeStyle = this.fillStyle = "#000000";
        ti(this)
    }

    si.prototype = {
        log: t("PDFContext"), save: function () {
            ci.prototype.save.call(this);
            this.aa.push("q");
            this.qa.push({
                wa: this.wa.clone(),
                Sc: this.Sc,
                rd: this.rd,
                qd: this.qd,
                pd: this.pd,
                od: this.od,
                nd: this.nd,
                md: this.md,
                ld: this.ld
            })
        }, restore: function () {
            ci.prototype.restore.call(this);
            this.aa.push("Q");
            var a = this.qa.pop();
            this.wa = a.wa;
            this.Sc = a.Sc;
            this.rd = a.rd;
            this.qd = a.qd;
            this.pd = a.pd;
            this.od = a.od;
            this.nd = a.nd;
            this.md = a.md;
            this.ld = a.ld
        }, beginPath: function () {
            this.path.length = 0
        }, toString: function () {
            ui(this);
            return li(this.ba)
        },
        yd: function () {
            ui(this);
            return this.ba.yd()
        }, setTransform: function (a, b, c, d, e, f) {
            var g = Kc(this.da);
            this.wa = (new O(a, c, b, d, e, f)).multiply(new Sc(0, g.x, g.y)).multiply(new cb(.75, .75, 0, 0))
        }, closePath: function () {
            this.path.push("h")
        }, fill: function () {
            vi(this);
            for (var a = 0; a < this.path.length; a++)this.aa.push(this.path[a]);
            this.aa.push("f")
        }, stroke: function () {
            wi(this);
            for (var a = 0; a < this.path.length; a++)this.aa.push(this.path[a]);
            this.aa.push("S")
        }, moveTo: function (a, b) {
            var c = this.wa.apply(a, b);
            this.path.push(this.ba.Mb(c.x,
                    c.y) + " m");
            this.x = a;
            this.y = b
        }, lineTo: function (a, b) {
            var c = this.wa.apply(a, b);
            this.path.push(this.ba.Mb(c.x, c.y) + " l");
            this.x = a;
            this.y = b
        }, quadraticCurveTo: function (a, b, c, d) {
            this.bezierCurveTo(2 / 3 * a + 1 / 3 * this.x, 2 / 3 * b + 1 / 3 * this.y, 2 / 3 * a + 1 / 3 * c, 2 / 3 * b + 1 / 3 * d, c, d)
        }, bezierCurveTo: function (a, b, c, d, e, f) {
            a = this.wa.apply(a, b);
            c = this.wa.apply(c, d);
            d = this.wa.apply(e, f);
            this.path.push(this.ba.Mb(a.x, a.y, c.x, c.y, d.x, d.y) + " c");
            this.x = e;
            this.y = f
        }, fillText: function (a, b, c) {
            this.ma(a, b, c, 0)
        }, strokeText: function (a, b, c) {
            this.ma(a,
                b, c, 1)
        }, Zf: function (a, b, c, d) {
            var e, f, g = this.Kc(this.font), h = this.ta.get(g.fontFamily);
            if (h) {
                0 === d ? vi(this) : wi(this);
                this.beginPath();
                g = parseFloat(g.fontSize);
                this.save();
                this.translate(b, c);
                h.transform(this, g);
                for (g = c = b = 0; g < h.ed.length; g++)h.ed[g].reset();
                for (g = 0; g < a.length; g++) {
                    var k, l = h;
                    k = a.charCodeAt(g);
                    var m = 0;
                    for (e = 0; e < l.ma.length && !(m = l.ma[e].map(k)); e++);
                    k = m;
                    l = h;
                    m = k;
                    S("hmtx" in l.aa);
                    e = l.ba;
                    f = e.seek(l.aa.hmtx.offset + 4);
                    var p = l.aa.hmtx.offset, r = {};
                    m < l.ka ? (p += 4 * m, f = l.ba.seek(p), r.fe = e.getUint16()) :
                        (f = e.seek(p + 4 * (l.ka - 1)), r.fe = e.getUint16(), e.seek(p + 4 * l.ka + 2 * (m - l.ka)));
                    r.Mg = e.getInt16();
                    l.ba.seek(f);
                    l = r;
                    e = h;
                    f = k;
                    for (var p = void 0, u = m = r = 0; u < e.ed.length; u++)p = e.ed[u].get(f), r += p.x, m += p.y;
                    e = r;
                    f = m;
                    h.log("Metrics for %s code %s index %s: %s %s kern: %s,%s", a.charAt(g), a.charCodeAt(g), k, l.fe, l.Mg, e, f);
                    m = b + e;
                    e = c + f;
                    k = bf(h, k);
                    if (null !== k && "simple" === k.type)for (var u = r = p = f = 0,
                                                                   v = void 0; p < k.sa.length; p++) {
                        var w = k.sa[p];
                        0 === f ? (this.moveTo(w.x + m, w.y + e), f = 1) : 1 === f ? w.Qc ? this.lineTo(w.x + m, w.y + e) : f = 2 : (v = k.sa[p -
                        1], w.Qc ? (this.quadraticCurveTo(v.x + m, v.y + e, w.x + m, w.y + e), f = 1) : this.quadraticCurveTo(v.x + m, v.y + e, (v.x + w.x) / 2 + m, (v.y + w.y) / 2 + e));
                        p === k.gc[r] && (2 === f && (v = w, w = k.sa[u], w.Qc ? this.quadraticCurveTo(v.x + m, v.y + e, w.x + m, w.y + e) : this.quadraticCurveTo(v.x + m, v.y + e, (v.x + w.x) / 2 + m, (v.y + w.y) / 2 + e)), u = p + 1, r += 1, f = 0)
                    }
                    b += l.fe
                }
                this.restore();
                0 === d ? this.fill() : this.stroke()
            } else {
                h = this.Kc(this.font);
                if (this.nd !== h.fontSize || this.md !== h.fontFamily) g = this.ba, l = h.fontFamily, l in g.fonts || (k = "F" + g.aa, g.aa += 1, m = "/" + l.replace(/ /g,
                        ""), k = ii(g, "Font", {
                    _name: k,
                    BaseFont: m,
                    Encoding: "/StandardEncoding",
                    Subtype: "/Type1"
                }), g.fonts[l] = k), qi(g, "Font", g.fonts[l]), this.aa.push("/" + g.fonts[l]._name + " " + this.ba.Mb(parseFloat(h.fontSize)) + " Tf"), this.nd = h.fontSize, this.md = h.fontFamily;
                this.ld !== d && (this.aa.push(d + " Tr"), this.ld = 0);
                0 === d ? vi(this) : wi(this);
                this.aa.push("BT");
                d = this.wa.multiply(new O(1, 0, 0, -1, b, c));
                this.aa.push(this.ba.Mb(d.m11, d.m21, d.m12, d.m22, d.Da, d.Ea) + " Tm");
                this.aa.push("(" + a.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g,
                        "\\)") + ") Tj");
                this.aa.push("ET")
            }
        }, Kc: function (a) {
            var b = null, c = null, d = "normal", e = "normal", f = "normal", g = "normal";
            a = a.split(/\s+/);
            a:for (; ;) {
                var h = a.shift();
                if (!h)break;
                switch (h) {
                    case "normal":
                        break;
                    case "italic":
                    case "oblique":
                        d = h;
                        break;
                    case "small-caps":
                        f = h;
                        break;
                    case "bold":
                    case "bolder":
                    case "lighter":
                    case "100":
                    case "200":
                    case "300":
                    case "400":
                    case "500":
                    case "600":
                    case "700":
                    case "800":
                    case "900":
                        e = h;
                        break;
                    default:
                        if (!c) {
                            h = h.split("/");
                            c = h[0];
                            1 < h.length && (g = h[1]);
                            break
                        }
                        b = h;
                        a.length && (b += " " +
                            a.join(" "));
                        break a
                }
            }
            b && (b = b.replace(/"/g, ""));
            return {fontStyle: d, fontVariant: f, fontWeight: e, fontSize: c, lineHeight: g, fontFamily: b}
        }, drawImage: function (a, b, c, d, e, f, g, h, k) {
            var l = parseInt(a.width, 10), m = parseInt(a.height, 10);
            if (3 === arguments.length)return this.drawImage(a, 0, 0, l, m, arguments[1], arguments[2], l, m);
            if (5 === arguments.length)return this.drawImage(a, 0, 0, l, m, arguments[1], arguments[2], arguments[3], arguments[4]);
            this.log("DrawImage(%s, %s, %s, %s, %s, %s, %s %s)", b, c, d, e, f, g, h, k);
            g = g + k;
            l = document.createElement("canvas");
            m = l.getContext("2d");
            l.width = d;
            l.height = e;
            m.drawImage(a, -b, -c);
            l = pi(this.ba, [a.src, b, c, d, e].join(), l);
            this.aa.push("q");
            m = this.wa.multiply(new O(h, 0, 0, -k, f, g));
            this.aa.push(this.ba.Mb(m.m11, m.m21, m.m12, m.m22, m.Da, m.Ea) + " cm");
            this.aa.push(l + " Do");
            this.aa.push("Q")
        }
    };
    function wi(a) {
        function b(a) {
            return "bevel" === a ? 2 : "round" === a ? 1 : 0
        }

        function c(a) {
            return "butt" === a ? 0 : "round" === a ? 1 : 2
        }

        if (a.rd !== a.strokeStyle) {
            if (a.strokeStyle instanceof bi) {
                var d = ni(a.ba, a.strokeStyle, a.wa);
                a.aa.push("/Pattern CS");
                a.aa.push(d + " SCN")
            } else"string" === typeof a.strokeStyle && (d = gf(Q(a.strokeStyle), 0), a.aa.push(a.ba.Mb(d.values[0], d.values[1], d.values[2]) + " RG"), d = ri(a.ba, d.values[3], !1), a.aa.push("/" + d + " gs"));
            a.rd = a.strokeStyle
        }
        a.qd !== a.lineWidth && (a.qd = a.lineWidth, a.aa.push(a.ba.Mb(72 *
                a.lineWidth / 96) + " w"));
        a.pd !== a.lineJoin && (a.pd = a.lineJoin, a.aa.push(b(a.lineJoin) + " j"));
        a.od !== a.lineCap && (a.od = a.lineCap, a.aa.push(c(a.lineCap) + " J"))
    }

    function vi(a) {
        if (a.Sc !== a.fillStyle) {
            if (a.fillStyle instanceof bi) {
                var b = ni(a.ba, a.fillStyle, a.wa);
                a.aa.push("/Pattern cs");
                a.aa.push(b + " scn")
            } else"string" === typeof a.fillStyle && (b = gf(Q(a.fillStyle), 0), a.aa.push(a.ba.Mb(b.values[0], b.values[1], b.values[2]) + " rg"), b = ri(a.ba, b.values[3], !0), a.aa.push("/" + b + " gs"));
            a.Sc = a.fillStyle
        }
    }

    function ui(a) {
        if (a.aa.length) {
            var b = a.ba, c = a.ba, d = a.aa.join("\n"), e = ub("LZWEncoder");
            e.ue(d);
            e.flush();
            d = e.Nc().toString();
            c = ii(c, null, {_stream: d, Filter: "[/LZWDecode]", DecodeParms: "[ << /EarlyChange 0 >> ]"});
            b.page.Contents = c._id + " 0 R"
        }
        a.aa.length = 0
    }

    function ti(a) {
        a.log("Start page: %s", a.da);
        a.setTransform(1, 0, 0, 1, 0, 0)
    }

    function xi(a) {
        ui(a);
        ji(a.ba, a.da.x, a.da.y, a.da.width, a.da.height);
        ti(a);
        a.beginPath()
    }

    si.prototype = q.aa({}, ci.prototype, si.prototype);
    var yi = t("DOC");
    gg.prototype.save = function (a, b) {
        var c, d;
        if ("list" === a) d = zi(this), c = "application/json"; else if ("zwibbler3" === a) c = zi(this), d = "zwibbler3." + window.JSON.stringify(c), c = "application/octet-stream"; else if ("svg" === a) c = mg(this), d = new fi(c), this.na(d), c = "image/svg+xml"; else if ("pdf" === a) {
            c = mg(this);
            d = new si(c, window.Zwibbler.fonts);
            var e = this.jb;
            for (c = 0; c < this.Vb(); c++)0 < c && xi(d), this.lb(c), this.na(d);
            this.lb(e);
            c = "application/pdf"
        } else throw"Unknown save format: " + a;
        var f;
        if (Qe(d))if ("string" === b) f = d; else if ("data-uri" ===
            b) f = "data:" + c + ";base64," + fa("base64", d); else {
            if ("blob" === b)for (e = new Uint8Array(d.length), c = 0; c < d.length; c++)e[c] = d.charCodeAt(c)
        } else if (d.yd && d.toString) "string" === b ? f = d.toString() : "data-uri" === b ? f = "data:" + c + ";base64," + fa("base64", d.toString()) : "blob" === b && (f = d.yd()); else if ("object" === b) f = d; else throw"Error in ZwibblerDocument.save()";
        return f
    };
    function Ai(a) {
        if ("{" === a.charAt(0))return Bi(a);
        if (0 === a.indexOf("zwibbler3.")) {
            var b = window.JSON.parse(a.substr(10));
            return Ci(b)
        }
        if (0 === a.indexOf("zwibblerclip."))return b = new gg(!1), a = ng(b, a, []), b.ya(a), rg(b), b;
        throw"Format detection failed.";
    }

    function Bi(a) {
        var b = t("IMPORT"), c = new gg, d = c.sb, e, f, g, h, k, l = [];
        k = function (a) {
            var b = new O;
            b.m11 = a.m11;
            b.m12 = a.m12;
            b.m21 = a.m21;
            b.m22 = a.m22;
            b.Da = a.dx;
            b.Ea = a.dy;
            return b
        };
        g = function (a) {
            var b = 0;
            "arrowSize" in a && (b = a.arrowSize, a = a.path);
            var c = k(a.matrix), b = {
                strokeStyle: a.strokeStyle,
                fillStyle: a.fillStyle,
                lineWidth: a.lineWidth,
                smoothness: a.smoothness,
                sloppiness: a.sloppiness,
                shadow: a.shadow,
                arrowSize: b,
                seed: Math.round(65535 * Math.random())
            };
            if ("textNode" in a) {
                var e = a.textNode;
                b.fontSize = e.fontSize;
                b.fontName =
                    e.fontName;
                b.text = e.text;
                b.textFillStyle = "textFillStyle" in e ? e.textFillStyle : e.fillStyle
            }
            "path" in a && (a = a.path);
            var e = a.closed, f = new R, g = a.segments;
            a = c.apply(a.startX, a.startY);
            f.moveTo(a.x, a.y);
            for (a = 0; a < g.length; a++) {
                var h = g[a], m;
                switch (h.type) {
                    case 1:
                        m = c.apply(h.x, h.y);
                        f.lineTo(m.x, m.y);
                        break;
                    case 2:
                        m = c.apply(h.x, h.y);
                        f.Cd(m.x, m.y);
                        break;
                    case 3:
                        m = c.apply(h.x1, h.y1);
                        h = c.apply(h.x, h.y);
                        f.aa(m.x, m.y, h.x, h.y);
                        break;
                    default:
                        throw"Unknown path segment type: " + h.type;
                }
            }
            e && f.close();
            b.commands = f.Nb();
            l.push(new C("PathNode", b));
            d += 1
        };
        e = function (a, b) {
            for (var c = [], e = a.children, g = e.length - 1; 0 <= g; g--) {
                var h = d;
                try {
                    f(e[g], b + 1)
                } catch (k) {
                    continue
                }
                c.push(h)
            }
            0 < b && (d += 1, l.push(new Wf(c)))
        };
        h = function (a) {
            var b = k(a.matrix), b = b.multiply(new E(0, 1.3 * a.fontSize));
            l.push(new C("TextNode", {
                fillStyle: a.fillStyle,
                lineWidth: 0,
                text: a.text,
                fontName: a.fontName,
                fontSize: a.fontSize,
                matrix: b
            }));
            d += 1
        };
        f = function (a, b) {
            switch (a.type) {
                case "Node":
                    e(a, b);
                    break;
                case "PathNode":
                case "ArrowNode":
                    g(a);
                    break;
                case "TextNode":
                    h(a);
                    break;
                default:
                    throw"Unknown node type: " + a.type;
            }
        };
        var m;
        try {
            m = window.JSON.parse(a)
        } catch (p) {
            a = a.replace(/\\\\/g, "\\").replace(/\\"/g, '"');
            try {
                m = window.JSON.parse(a)
            } catch (r) {
                throw b("Couldn't parse file."), "Couldn't parse file.";
            }
        }
        b("Successfully parsed!");
        f(m, 0);
        c.ya(l);
        return c
    }

    function zi(a) {
        function b(a, d) {
            var e = {id: d.id, type: d.type()};
            c.push(e);
            a && (e.parent = a.id);
            var f = fe(d), m;
            for (m in f)f.hasOwnProperty(m) && ("matrix" === m ? e[m] = f[m].Nb() : "inverse" !== m && (e[m] = f[m]));
            if (le(d))for (e = 0; e < d.children.length; e++)b(d, d.children[e])
        }

        var c = [], d = {type: "document"}, e = !1, f;
        for (f in a.ea)a.ea.hasOwnProperty(f) && (d[f] = a.ea[f], e = !0);
        e && c.push(d);
        b(null, a.root);
        return c
    }

    function Ci(a) {
        function b(a, c) {
            var d;
            if (void 0 !== a) {
                d = {};
                for (var e in a)a.hasOwnProperty(e) && "children" !== e && "parent" !== e && "id" !== e && "type" !== e && (d[e] = "matrix" === e ? new O(a[e]) : a[e]);
                e = h;
                0 !== a.id && f.push(new C(a.type, d, c, -1));
                g[a.id] = h;
                h += 1;
                if (void 0 !== a.children)for (d = 0; d < a.children.length; d++)b(a.children[d], e)
            }
        }

        var c, d, e;
        a = window.JSON.parse(window.JSON.stringify(a));
        var f = [], g = {}, h = 0, k = {}, l = !1;
        for (c = 0; c < a.length; c++)if (e = a[c], "document" === e.type) delete e.type, f.push(new eg(e)); else {
            "PageNode" ===
            e.type && (l = !0);
            if ("parent" in e) {
                if (!(e.parent in k))throw"Error: child " + e.id + " references parent " + e.parent + " before it was defined.";
                d = k[e.parent];
                void 0 !== d.children ? d.children.push(e) : d.children = [e]
            }
            "GroupNode" !== e.type && "PageNode" !== e.type || void 0 !== e.children || (e.children = []);
            k[e.id] = e
        }
        l || (h += 1);
        b(k[0], h);
        yi(JSON.stringify(g));
        for (c = 0; c < f.length; c++)yi(f[c].toString());
        a = new gg(l);
        a.ya(f);
        rg(a);
        return a
    };
    function Di(a, b, c) {
        var d = this;
        this.aa = a;
        this.ja = b;
        this.ta = new Ta;
        this.ja.empty();
        "absolute" !== this.ja.ha("position") && "fixed" !== this.ja.ha("position") && this.ja.ha("position", "relative");
        this.ja.ha("overlow", "none");
        this.ja.ha("text-align", "left");
        this.$a = new Th(q("<div>").ha("width", "300px"), this.ta);
        this.log("Starting Zwibbler Version %s", 14);
        this.ja.append(this.$a.ja);
        this.ga = new Mh(c);
        this.Va = new Ua("en:arrowhead-size:Arrowhead size\nes:arrowhead-size:Flecha tama\u00f1o\n\nen:arrowhead-size-large:Large\nes:arrowhead-size-large:Grande\n\nen:arrowhead-size-medium:Medium\nes:arrowhead-size-medium:Medio\n\nen:arrowhead-size-none:None\nes:arrowhead-size-none:Nada\n\nen:arrowhead-size-small:Small\nes:arrowhead-size-small:Peque\u00f1o\n\nen:arrowhead-size-tiny:Tiny\nes:arrowhead-size-tiny:Diminuto\n\nen:arrowhead-style:Arrowhead style\nes:arrowhead-style:Flecha estilo\n\nen:arrowhead-style-simple:Simple\nes:arrowhead-style-simple:Llanura\n\nen:arrowhead-style-solid:Solid\nes:arrowhead-style-solid:Denso\n\nen:arrow-keys:Arrow Keys\nes:arrow-keys:Teclas de flecha\n\nen:arrow-tool:Arrow tool\nes:arrow-tool:Flecha\nfr:arrow-tool:Fl\u00e8che\nnl:arrow-tool:Pijl\n\nen:break-apart-group:Break apart group\nes:break-apart-group:Dividir el grupo\n\nen:bring-to-front:Bring to front\nes:bring-to-front:Traer al frente\n\nen:brush-tool:Brush tool\nes:brush-tool:Brocha\nfr:brush-tool:Brosse\nnl:brush-tool:Penseel\n\nen:circle-tool:Circle tool\nes:circle-tool:C\u00edrculo\nfr:circle-tool:Cercle\nnl:circle-tool:Cirkel\n\nen:click-to-place-another-point-or-double-click-to-end-the-line:Click to place another point, or double-click to end the line.\nes:click-to-place-another-point-or-double-click-to-end-the-line:Haga clic para colocar otro punto, o doble clic para finalizar la l\u00ednea\nfr:click-to-place-another-point-or-double-click-to-end-the-line:Cliquez pour placer un autre point, ou double-cliquez pour terminer la ligne.\nnl:click-to-place-another-point-or-double-click-to-end-the-line:Klik op een ander punt te plaatsen, of dubbelklik om de lijn te be\u00ebindigen.\n\nen:click-to-place-first-point-of-line:Click to place first point of line\nes:click-to-place-first-point-of-line:Haga clic para colocar el primer punto de la l\u00ednea\nfr:click-to-place-the-first-point-of-line:Cliquez pour placer le premier point de la ligne\nnl:click-to-place-the-first-point-of-line:Klik om het eerste punt van de lijn te plaatsen.\n\nen:click-to-set-the-end-of-the-line:Click to set the end of the line\nes:click-to-set-the-end-of-the-line:Haga clic para colocar el extremo de la l\u00ednea\nfr:click-to-set-the-end-of-the-line:Cliquez pour d\u00e9finir la fin de la ligne\nnl:click-to-set-the-end-of-the-line:Klik hier voor het einde van de lijn in te stellen.\n\nen:copy:Copy\nes:copy:Copiar\nfr:copy:Copie\nnl:copy:Kopi\u00ebren\n\nen:curve-tool:Curve tool\nes:curve-tool:Curva\nfr:curve-tool:Courbes\nnl:curve-tool:Kromme\n\nen:delete-selection:Delete selection\nes:delete-selection:Eliminar la selecci\u00f3n\n\nen:del-key:Del\nes:del-key:Del\n\nen:double-arrows:Double arrows\nes:double-arrows:flechas dobles\n\nen:draw-curves:Draw curves\nes:draw-curves:Dibuje las curvas\n\nen:draw-lines:Draw lines\nes:draw-lines:Dibujar l\u00edneas\n\nen:duplicate-selection:Duplicate selection\nes:duplicate-selection:Duplica la selecci\u00f3n\n\nen:fill-colour:Fill colour\nes:fill-colour:Color de relleno\n\nen:font:Font\nes:font:Font\n\nen:font-size:Font size\nes:font-size:Tama\u00f1o de letra\n\nen:group-selection:Group selection\nes:group-selection:Grupo la selecci\u00f3n\n\nen:image-tool:Image tool\nes:image-tool:Imagen\nfr:image-tool:Image\nnl:image-tool:Afbeelding\n\nen:image-url:Image URL\nes:image-url:URL de la imagen\n\nen:keyboard:Keyboard\nes:keyboard:Teclado\n\nen:line-style:Line style\nes:line-style:Estilo de l\u00ednea\n\nen:line-style-long-dashes:Long dashes\nes:line-style-long-dashes:Gui\u00f3n largo\n\nen:line-style-short-dashes:Short dashes\nes:line-style-short-dashes:Gui\u00f3n corto\n\nen:line-style-solid:Solid\nes:line-style-solid:Denso\n\nen:line-tool:Line tool\nes:line-tool:Raya\nfr:line-tool:Lignes\nnl:line-tool:Lijn\n\nen:move-selection-away:Move selection away\nes:move-selection-away:Mover la selecci\u00f3n de distancia\n\nen:move-selection-closer:Move selection closer\nes:move-selection-closer:Mover la selecci\u00f3n de distancia\n\nen:move-while-zoomed:Move while zoomed\nes:move-while-zoomed:Desplazarse por la pantalla\n\nen:none:None\nes:none:Nada\n\nen:no:No\nes:no:No\n\nen:outline-colour:Outline colour\nes:outline-colour:Color del contorno\n\nen:outline-thickness:Outline thickness\nes:outline-thickness:Grosor del contorno\n\nen:page-down-key:Page Down\nes:page-down-key:Page Down\n\nen:page-up-key:Page Up\nes:page-up-key:Page Up\n\nen:paste:Paste\nes:paste:Pegar\nfr:paste:Coller\nnl:paste:Plak\n\nen:pick-tool:Pick tool\nes:pick-tool:Seleccionar\nfr:pick-tool:S\u00e9lectionner\nnl:pick-tool:Uitkiezen\n\nen:rectangle-tool:Rectangle tool\nes:rectangle-tool:rect\u00e1ngulo\nfr:rectangle-tool:Rectangle\nnl:rectangle-tool:Rechthoek\n\nen:redo:Redo\nes:redo:Rehacer\nfr:redo:Refaire\nnl:redo:Opnieuw maken\n\nen:rounded-rectangle-tool:Rounded rectangle tool\nes:rounded-rectangle-tool:Rect\u00e1ngulo redondeado\n\nen:save:Save\nes:save:Guardar\n\nen:send-to-back:Send to back\nes:send-to-back:Enviar a la parte posterior\n\nen:shadow:Shadow\nes:shadow:Sombra\n\nen:shape-brush-tool:Shape brush tool\nes:shape-brush-tool:Brush que dibuja formas\n\nen:sloppiness-artist:Artist\nes:sloppiness-artist:Artista\n\nen:sloppiness-cartoonist:Cartoonist\nes:sloppiness-cartoonist:Caricaturista\n\nen:sloppiness-child:Child\nes:sloppiness-child:Ni\u00f1o\n\nen:sloppiness-draftsman:Draftsman\nes:sloppiness-draftsman:Dibujante\n\nen:sloppiness-drunk:Drunk\nes:sloppiness-drunk:Borracho\n\nen:sloppiness:Sloppiness\nes:sloppiness:La dejadez\n\nen:smoothness-sharper:Sharper\nes:smoothness-sharper:Muy afilado\n\nen:smoothness-sharpest:Sharpest\nes:smoothness-sharpest:M\u00e1s afilado\n\nen:smoothness-sharp:Sharp\nes:smoothness-sharp:Afilado\n\nen:smoothness-smoothest:Smoothest\nes:smoothness-smoothest:Muy liso\n\nen:smoothness:Smoothness\nes:smoothness:Lisura\n\nen:smoothness-smooth:Smooth\nes:smoothness-smooth:Liso\n\nen:text-colour:Text colour\nes:text-colour:Color del texto\n\nen:text:Text\nes:text:Texto\n\nen:text-tool:Text tool\nes:text-tool:Texto\nfr:text-tool:Texte\nnl:text-tool:Tekst\n\nen:thickness-brush:Brush\nes:thickness-brush:Brocha\n\nen:thickness-marker:Marker\nes:thickness-marker:Rotulador\n\nen:thickness-pencil:Pencil\nes:thickness-pencil:L\u00e1piz\n\nen:thickness-pen:Pen\nes:thickness-pen:Pluma\n\nen:undo:Undo\nes:undo:Deshacer\nfr:undo:D\u00e9faire\nnl:undo:Ongedaan maken\n\nen:yes:Yes\nes:yes:S\u00ed\n\nen:zoom-in:Zoom in\nes:zoom-in:Zoom\n\nen:zoom-out:Zoom out\nes:zoom-out:Disminuir el zoom\n");
        Xa(this.Va, this.ga.get("language"));
        this.Aa = null;
        this.Ka = q("<div>");
        this.Ka.ha("position", "absolute");
        this.Ka.ha("overflow", "hidden");
        this.ja.append(this.Ka);
        this.canvas = q(kf(this.Ka[0]));
        this.canvas.ha("outline", "0");
        this.canvas.ha("position", "absolute");
        this.canvas.ha("left", "0");
        this.canvas.ha("top", "0");
        this.canvas.ob("tabindex", "0");
        this.oa = this.canvas[0].getContext("2d");
        this.ga.on("useTouch", function (a, b, c) {
            d.ga.$b() ? (a = 40, b = !0) : (a = 20, b = !1);
            c ? d.ka = new vf(d.ja, a, b, !1, d.ga.get("colourPalette")) :
                (d.ka.nc(a, b), Ei(d, !0))
        });
        this.tb = new J;
        this.view = new ah(this.canvas, new gg, this.ka, this.tb, this.ga, this.Va, this.aa, this.ta);
        Fi(this);
        Gi(this);
        this.aa.on("tool-changed", function (a) {
            vc(d.toolbar, a)
        });
        Hi(this);
        this.qa = new Zh(this.ga, this.Va, this.ta);
        this.ja.append(this.qa.ja);
        this.ga.We() && (this.view.Yc = this.qa);
        this.qa.view = this.view;
        this.qa.on("click", function () {
            d.focus("none")
        });
        this.ta.bind(q(window), "resize", function () {
            setTimeout(function () {
                Ei(d)
            }, 1)
        });
        window.$ && (d.log("jQuery detected; register for bootstrap events"),
            window.$(document).bind("shown.bs.modal", function () {
                d.log("Bootstrap modal shown; resize now");
                d.aa.resize()
            }));
        this.Hc = Ih();
        this.Yb = "debug" in this.Hc || this.ga.ua.showDebug;
        this.da = new Wh(this.ja);
        this.da.ja.ha("border-right", "1px solid black");
        this.ma = new Wh(this.ja);
        this.ma.ja.ha("border-top", "1px solid black");
        this.ma.on("click", function (a) {
            return qh(d.view, a)
        });
        this.da.on("click", function (a) {
            return Ii(d, a)
        });
        null !== this.ga.ua.backgroundImage && (Ii(this, this.ga.ua.backgroundImage), rg(this.view.la));
        Ji(this);
        this.ga.on("update", function (a, b) {
            d.Cc(a, b)
        });
        this.pc = this.qc = -1;
        this.ba = new Cf(q("<div>"), !1, !this.ga.get("showPageSelectorControls"));
        this.ba.ja.ha("position", "absolute");
        this.ba.ja.ha("top", "0");
        this.ba.ja.ha("bottom", "0");
        this.ba.ja.ha("width", "160px");
        this.ba.ja.ha("left", "50px");
        this.ba.ja.ha("background", this.ga.get("outsidePageColour"));
        Gf(this.ba, this.ga.get("showPageSelector"));
        this.ja.append(this.ba.ja);
        this.Zb = q("<div>").ha("position", "absolute").ha("top", "0").ha("right", "0").ha("box-shadow",
            "3px 3px 3px #444").ha("background", "#ccc").ha("color", "black").ha("border-bottom-left-radius", "4px").ha("font-family", "arial,sans");
        this.ja.append(this.Zb);
        Ei(this);
        (a = Qh(this.ga)) ? this.qb = new Cf(q(a), !0, !0) : this.qb = null;
        this.ga.get("setFocus") && this.focus("toolbar");
        this.ub = [];
        Ff(this.ba, this.aa);
        this.qb && (Ff(this.qb, this.aa), Gf(this.qb, !0));
        this.aa.emit("document-changed");
        this.aa.emit("set-page", this.view.la.jb);
        wg() && (this.ga.get("persistent") && (a = yg("zwibbler-document")) && Ki(this, Ai(a)), this.lc =
            Gh(function () {
                if (d.ga.get("persistent")) {
                    d.log("Saving document");
                    var a = d.aa.save();
                    wg() ? window.localStorage.setItem("zwibbler-document", a) : xg["zwibbler-document"] = "" + a
                }
            }), d.aa.on("document-changed", function () {
            d.lc()
        }), d.ta.add(function () {
            d.lc.cancel()
        }));
        this.ta.add(function () {
            d.ja.empty();
            delete d.ja[0].zwibbler
        })
    }

    Di.prototype = {
        log: t("APP"), Cc: function (a, b) {
            var c = !1;
            this.log("onConfigChange %s=%s", a, b);
            switch (a) {
                case "debug":
                case "showDebug":
                    this.Yb = b;
                    c = !0;
                    break;
                case "showPageSelector":
                    c = !0;
                    Gf(this.ba, b);
                    break;
                case "backgroundImage":
                    Ii(this, b);
                    break;
                case "colourPalette":
                    var d = this.ka;
                    d.aa = "auto" === b ? xf() : b.slice(0);
                    d.log("Set colours to %s len=%s", d.aa, d.aa.length);
                    d.format();
                    d.na();
                    break;
                case "showToolbar":
                case "showColourPanel":
                    c = !0;
                    break;
                case "showArrowTool":
                case "showBrushTool":
                case "showCircleTool":
                case "showCopyPaste":
                case "showCurveTool":
                case "showLineTool":
                case "showMoveToFrontBack":
                case "showPickTool":
                case "showRoundRectTool":
                case "showShapeBrushTool":
                case "showSquareTool":
                case "showTextTool":
                case "showUndoRedo":
                case "toolbarButtonSize":
                    Gi(this);
                    c = !0;
                    break;
                case "language":
                    Xa(this.Va, b)
            }
            c && Ei(this, !0)
        }, focus: function (a) {
            this.log("Set focus to %s", a);
            if ("toolbar" !== a && "canvas" !== a && "none" !== a)throw"Focus must be toolbar or canvas or none, not " + a;
            this.gb = a;
            "toolbar" === this.gb ? (this.toolbar.focus(), Bh(this.view), this.ja.focus()) : "canvas" === this.gb && (this.toolbar.blur(), this.ja.focus())
        }, Lc: function (a, b) {
            var c;
            c = this.view.la.sb;
            a.push(new Wf(b));
            return c
        }
    };
    function Li(a, b, c) {
        return Mi(a, b, "PathNode", {
            commands: c,
            fillStyle: a.view.kb,
            strokeStyle: a.view.pb,
            seed: Math.round(65535 * Math.random()),
            lineWidth: a.view.Ca.lineWidth,
            sloppiness: a.view.Ca.sloppiness,
            angleArcs: a.ga.get("angleArcs")
        })
    }

    function Ni(a, b, c) {
        var d, e;
        if ("image/svg+xml" === b || "application/pdf" === b) {
            d = !1;
            "image/svg+xml" === b ? e = new fi(new M(0, 0, c.width, c.height)) : (e = new si(new M(0, 0, c.width, c.height), window.Zwibbler.fonts), d = !0);
            if (d)for (d = 0; d < a.view.la.Vb(); d++)0 < d && xi(e), Oi(a, e, c, d); else Oi(a, e, c);
            return "data:" + b + ";base64," + fa("base64", e.toString())
        }
        d = q("<canvas>");
        d.ob("width", "" + c.width);
        d.ob("height", "" + c.height);
        e = d[0].getContext("2d");
        if ("image/jpeg" === b || "image/bmp" === b) e.fillStyle = "#ffffff", e.fillRect(0, 0, c.width,
            c.height);
        Oi(a, e, c);
        if ("image/bmp" === b) {
            a = d[0];
            c = a.getContext("2d").getImageData(0, 0, a.width, a.height);
            a = c.width;
            d = c.height;
            b = a * d * 3;
            e = b + 54;
            var f = [66, 77, e & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 0, 0, 0, 0, 54, 0, 0, 0],
                g = [40, 0, 0, 0, a & 255, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255, d & 255, d >> 8 & 255, d >> 16 & 255, d >> 24 & 255, 1, 0, 24, 0, 0, 0, 0, 0, b & 255, b >> 8 & 255, b >> 16 & 255, b >> 24 & 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            b = (4 - 3 * a % 4) % 4;
            c = c.data;
            e = a << 2;
            for (var h = ub("Base64Encoder"), k = 0; k < f.length; k++)h.Ta(f[k]);
            for (k = 0; k < g.length; k++)h.Ta(g[k]);
            do {
                f =
                    e * (d - 1);
                for (g = 0; g < a; g++)k = g << 2, h.Ta(c[f + k + 2]), h.Ta(c[f + k + 1]), h.Ta(c[f + k]);
                for (f = 0; f < b; f++)h.Ta(0)
            } while (--d);
            h.flush();
            a = "data:image/bmp;base64," + h.Nc().toString()
        } else a = d[0].toDataURL(b);
        return a
    }

    function Oi(a, b, c, d) {
        void 0 === d && (d = a.view.la.jb);
        var e = a.view.la.jb;
        a.view.la.lb(d);
        b.translate(-c.x, -c.y);
        lh(a.view, b, c.x, c.y, c.width, c.height);
        a.view.la.na(b);
        a.aa.Ub && a.aa.Ub(b);
        a.view.la.lb(e)
    }

    function Ei(a, b) {
        var c, d, e, f, g, h, k, l, m, p, r, u, v, w, z;
        w = q(window).width();
        l = q(window).height();
        if (b || w !== a.Yc || l !== a.Xc) a.Yc = w, a.Xc = l, w = a.ja.width() - 0, l = a.ja.height() - 0, 0 >= w || !b && w === a.qc && l === a.pc || (a.qc = w, a.pc = l, a.ga.ua.showBackgroundSelector ? (c = 100, a.da.show(), g = a.da, g.ba = c - 24, g.aa = 0) : (c = 0, a.da.Za()), a.ga.ua.showImageSelector ? (f = 100, g = a.ma, g.ba = 0, g.aa = f - 24, a.ma.show()) : (f = 0, a.ma.Za()), a.ga.ua.showPageSelector ? (a.ba.ja.show(), z = a.ba.ja.outerWidth()) : (a.ba.ja.Za(), z = 0), a.ga.hh() ? (a.ka.show(), yf(a.ka,
            w), g = a.ka.height()) : (a.ka.Za(), g = 0), a.log("Colour panel height is %s", g), a.ga.ih() ? (a.toolbar.show(!0), d = l - g, e = a.toolbar, 0 >= d || (h = (e.fc + 2) * Math.ceil(e.ka / d) + 1, e.ja.style.width = "" + h + "px", e.ja.style.height = "" + d + "px", e.log("Toolbar width/height = %s,%s totalHeight=%s", h, d, e.ka)), v = a.toolbar.width()) : (a.toolbar.show(!1), v = 0), d = Pd(a.view), a.toolbar.moveTo(c + z, 0), h = l - g, k = p = u = 0, a.Yb && (a.$a.show(), k = a.$a.width()), (r = a.ga.We() && 700 <= w) && (p = 300), u += p + k, m = w - 2 * d - c - u, e = l - 2 * d - g - f, a.da.width(c), a.da.height(l - 2 *
            d - g), a.da.moveTo(0, 0), a.ba.ja.ha("top", "0"), a.ba.ja.ha("left", "0"), a.ma.width(m), a.ma.height(f), a.ma.moveTo(c, l - 2 * d - g - f), f = z + c + v, c = w - 2 * d - v - u - c - z, a.Ka.ha("left", "" + f + "px"), a.Ka.ha("top", "0"), a.Ka.ha("width", "" + c + "px"), a.Ka.ha("height", "" + e + "px"), kh(a.view, c, e), a.ka.moveTo(f, h), yf(a.ka, w - f), a.ka.na(), a.Zb.ha("top", "0").ha("right", "" + (p + k) + "px"), a.Yb ? (a.$a.moveTo(w - k, 0), a.$a.height(l - 2 * d - g)) : a.$a.Za(), r ? (a.qa.show(), a.qa.moveTo(w - k - p, 0), a.qa.width(p), a.qa.height(l - 2 * d - g)) : a.Ic || a.qa.Za(), a.view.jc())
    }

    function Ii(a, b) {
        var c, d;
        c = [];
        null !== a.Aa && a.Aa in a.view.la.Ba && c.push(new Vf([a.Aa]));
        b && (d = a.view.la.sb, c.push(new C("ImageNode", {
            url: b,
            locked: !0,
            layer: a.view.La
        })), c.push(new $f([d], bg)));
        a.Aa = d;
        a.view.ya(c);
        d && A(a.view.la, d, !1).mc(!0);
        a.view.fb();
        Sf(a.view)
    }

    function Pi(a) {
        a.Aa = null;
        a.view.la.mb(!1, function (b) {
            "ImageNode" === b.type() && !0 === b.pa("locked") && (a.log("Found background image at nodeid %s", b.id), a.Aa = b.id, b.mc(!0))
        })
    }

    function Mi(a, b, c, d) {
        var e;
        e = a.view.la.sb;
        "layer" in d || (d.layer = a.view.La);
        b.push(new C(c, d));
        return e
    }

    function Qi(a, b) {
        a.focus("canvas");
        var c = a.view;
        c.Ga.rb = !0;
        c.Ga.Pa = !1;
        c.Ga.he = b;
        c.log("Showing keyboard cursor, caret=%s", b);
        c.na()
    }

    function Ri(a) {
        a.focus("canvas");
        Ld(a.view)
    }

    function Hi(a) {
        a.gb = "none";
        a.Ab = new xc;
        Ph(a.ga, a.Ab);
        a.Ab.on("*", function (b, c) {
            "toolbar" === a.gb ? a.toolbar.vb(b, c) : "canvas" === a.gb ? a.view.vb(b, c) : a.log("Ignore key action -- don't have focus.")
        });
        a.ja.ob("tabindex", "0");
        Ac(a.Ab, a.ja[0]);
        a.ta.add(function () {
            a.Ab.detach(a.ja[0])
        });
        a.view.Vd = !1;
        a.canvas.click(function () {
            of() || a.view.Vd ? a.gb = "canvas" : a.focus("canvas");
            a.view.Vd = !1
        });
        q(a.toolbar.ja).click(function () {
            a.focus("toolbar")
        });
        a.ka.on("colour", function () {
            a.focus("canvas")
        });
        a.tb.on("goto-toolbar",
            function () {
                a.ga.get("showToolbar") ? a.focus("toolbar") : a.aa.emit("blur")
            });
        a.tb.on("goto-canvas", function () {
            a.focus("canvas")
        });
        a.ja.on("blur", function () {
            a.log("Blur event received -- hide keyboard cursor");
            Bh(a.view)
        })
    }

    function Gi(a) {
        function b(a) {
            return 0 === a.type.indexOf("key")
        }

        var c, d, e, f, g, h;
        a.toolbar && (a.toolbar.ja.remove(), a.toolbar = null);
        var k = a.Va.zc();
        a.toolbar = new tc(a.ga.$b(), a.ga.get("toolbarButtonSize"));
        if (a.ga.get("showToolbar")) {
            a.ga.get("showPickTool") && wc(a.toolbar, "pick", k("pick-tool"), Y(a.ga, "wd-pick.png"), function (c) {
                F(a.view);
                b(c) && Qi(a)
            });
            a.ga.get("showSquareTool") && a.toolbar.Gb(Y(a.ga, "wd-box.png"), k("rectangle-tool"), function (c) {
                th(a.view);
                b(c) && Ri(a)
            });
            a.ga.get("showRoundRectTool") && a.toolbar.Gb(Y(a.ga,
                "wd-roundrect.png"), k("rounded-rectangle-tool"), function (c) {
                th(a.view, {roundRadius: a.ga.get("defaultRoundRectRadius")});
                b(c) && Ri(a)
            });
            a.ga.get("showCircleTool") && a.toolbar.Gb(Y(a.ga, "wd-circle.png"), k("circle-tool"), function (c) {
                rh(a.view);
                b(c) && Ri(a)
            });
            a.ga.get("showShapeBrushTool") && wc(a.toolbar, "shapebrush", k("shape-brush-tool"), Y(a.ga, "wd-shapebrush.png"), function (c) {
                xh(a.view, {});
                b(c) && Qi(a)
            });
            a.ga.gh() && wc(a.toolbar, "brush", k("brush-tool"), Y(a.ga, "wd-brush.png"), function (c) {
                yh(a.view, {});
                b(c) &&
                Qi(a)
            });
            a.ga.get("showLineTool") && wc(a.toolbar, "line", k("line-tool"), Y(a.ga, "wd-line.png"), function (c) {
                Kg(a.view, {angleArcs: a.ga.get("angleArcs")}, !1, !1);
                b(c) && Qi(a)
            });
            a.ga.get("showCurveTool") && wc(a.toolbar, "curve", k("curve-tool"), Y(a.ga, "wd-curve.png"), function (c) {
                Jg(a.view, {});
                b(c) && Qi(a)
            });
            a.ga.get("showArrowTool") && wc(a.toolbar, "arrow", k("arrow-tool"), Y(a.ga, "wd-arrow.png"), function (c) {
                vh(a.view, {}, !1);
                b(c) && Qi(a)
            });
            a.ga.get("showTextTool") && wc(a.toolbar, "text", k("text-tool"), Y(a.ga, "wd-text.png"),
                function (c) {
                    var d = a.view, e, f;
                    "interactive" === d.ga.get("textMode") ? Tg(d, {}) : (e = d.la.sb, f = d.Ha(new y(100, 100)), d.ya([new C("TextNode", {
                        text: d.ga.ua.defaultText,
                        fontSize: d.Ca.fontSize,
                        fontName: d.Ca.fontName,
                        bold: d.Ca.bold,
                        italic: d.Ca.italic,
                        textFillStyle: d.Ca.textFillStyle,
                        strokeStyle: d.Ca.textStrokeStyle,
                        lineWidth: d.Ca.textLineWidth,
                        layer: d.La
                    }), new qd([e], new E(f.x, f.y))]));
                    b(c) && Qi(a, !0)
                });
            c = function (b) {
                a.toolbar.Gb(d, b.name, function (c) {
                    a.log("Custom button %s clicked.", b.name);
                    b.onclick.call(c.target,
                        a.aa)
                })
            };
            g = 0;
            for (h = Si.length; g < h; g++)e = Si[g], f = e.name, d = e.image, a.log("add custom button %s", f), c(e);
            vc(a.toolbar, "pick");
            a.ga.ua.showImageTool && a.toolbar.Gb(Y(a.ga, "wd-image.png"), k("image-tool"), function () {
                qh(a.view, "logo.png")
            });
            a.ga.ua.showMoveToFrontBack && (a.toolbar.Gb(Y(a.ga, "wd-moveup.png"), k("bring-to-front"), function () {
                Cg(a.view)
            }), a.toolbar.Gb(Y(a.ga, "wd-movedown.png"), k("send-to-back"), function () {
                Dg(a.view)
            }));
            a.ga.get("showUndoRedo") && (a.toolbar.Gb(Y(a.ga, "wd-undo.png"), k("undo"), function () {
                a.view.eb()
            }),
                a.toolbar.Gb(Y(a.ga, "wd-redo.png"), k("redo"), function () {
                    a.view.dc()
                }));
            a.ga.get("showCopyPaste") && (a.toolbar.Gb(Y(a.ga, "wd-copy.png"), k("copy"), function () {
                Og(a.view)
            }), a.toolbar.Gb(Y(a.ga, "wd-paste.png"), k("paste"), function () {
                Pg(a.view)
            }))
        }
        a.toolbar.on("click", function () {
            a.focus("toolbar")
        });
        a.toolbar.ja.style.position = "absolute";
        a.toolbar.ja.style.left = "0";
        a.toolbar.ja.style.right = "0";
        a.ja.append(a.toolbar.ja)
    }

    function Ki(a, b) {
        a.Aa = null;
        fh(a.view, b);
        Fi(a);
        Pi(a);
        a.aa && (a.aa.emit("document-changed"), a.aa.emit("set-page", b.jb));
        for (var c = 0; c < a.ub.length; c++) {
            var d = a.ub[c];
            a.log("Removing old DomElement of type %s", d.tagName);
            q(d).remove()
        }
        a.ub = []
    }

    function Fi(a) {
        a.ga.ua.sloppy || Ch(a.view, "sloppiness", 0);
        var b;
        b = ("" + a.ga.ua.defaultSmoothness).toLowerCase();
        Ch(a.view, "smoothness", "sharpest" === b ? 0 : "sharper" === b ? .1 : "sharp" === b ? .2 : "smoothest" === b ? .5 : .3);
        Ch(a.view, "fillStyle", a.ga.ua.defaultFillStyle);
        Ch(a.view, "strokeStyle", a.ga.ua.defaultStrokeStyle);
        Ch(a.view, "fontName", a.ga.ua.defaultFont);
        Ch(a.view, "fontSize", a.ga.ua.defaultFontSize);
        Ch(a.view, "lineWidth", a.ga.ua.defaultLineWidth);
        Ch(a.view, "textFillStyle", a.ga.ua.defaultTextFillStyle)
    }

    function Ji(a) {
        var b, c, d, e, f;
        a.canvas[0].getContext("2d");
        e = a.ga.ua.fonts;
        f = [];
        c = 0;
        for (d = e.length; c < d; c++)b = e[c], a.log("Preloading: %s", b), b = q("<div>").ha("font-family", b).text("abcd"), b.ha("color", "transparent"), f.push(a.ja.append(b))
    };
    function Z(a, b) {
        this.da = {};
        this.ba = 0;
        this.aa = [];
        this.ka = 0;
        this.qa = new V;
        this.Ka = new V;
        this.ta = 0;
        this.Aa = -1;
        this.app = new Di(this, a, b);
        Ti(this);
        this.Ub = null;
        var c = this;
        this.app.ta.add(function () {
            delete c.da;
            delete c.aa;
            delete c.app;
            delete c.Ub
        })
    }

    Z.prototype = {
        log: t("CONTEXT"), $f: function () {
            1 < this.ba && this.ib("abortTransaction is not implemented for nested calls. Please contact support.");
            this.ba = 0;
            this.aa = []
        }, af: function (a) {
            var b = this.app.Va;
            Va(b, a, b.data)
        }, ag: function () {
            return this.dd(this.Vb())
        }, Be: function () {
            this.ba += 1;
            1 === this.ba ? (this.aa = [], this.ka = 0, this.Ka.keys = {}, this.qa.keys = {}, this.ta = 0, this.Aa = this.app.view.la.jb, this.log("beginTransaction() -- beginning new")) : this.log("beginTransaction() -- already in one, bump counter")
        }, bf: function () {
            Cg(this.app.view)
        },
        wc: function () {
            return this.app.view.la.wc()
        }, xc: function () {
            return this.app.view.la.xc()
        }, fb: function () {
            this.app.view.fb();
            Sf(this.app.view);
            this.app.view.na()
        }, eg: function () {
            rg(this.app.view.la)
        }, fg: function (a, b) {
            this.sd(a, !b)
        }, hg: function () {
            this.ba = Math.max(0, this.ba - 1);
            0 === this.ba ? (this.app.view.ya(this.aa, !0), this.aa = [], this.ka = 0, this.log("committing irreversible transaction.")) : this.log("delaying transaction commit -- nested call (count=%s)", this.ba)
        }, ie: function () {
            this.ba = Math.max(0, this.ba - 1);
            0 === this.ba ? (this.app.view.ya(this.aa), this.aa = [], this.ka = 0, this.log("committing transaction.")) : this.log("delaying transaction commit -- nested call (count=%s)", this.ba)
        }, cf: function (a, b) {
            return Og(this.app.view, a, b)
        }, Lc: function (a) {
            if (0 < a.length)return Ui(this, this.app.Lc(this.aa, a))
        }, df: function (a, b) {
            this.log("createNode(%s)", a);
            var c = Vi(b);
            return Ui(this, Mi(this.app, this.aa, a, c))
        }, ef: function (a) {
            return Ui(this, Li(this.app, this.aa, a))
        }, gf: function (a, b) {
            function c(a, b) {
                b.click(function (b) {
                    a.onclick.call(this,
                        d, b)
                })
            }

            a = jf(a);
            ge(b) || this.error("createToolbar: second parameter must be array");
            var d = this, e;
            e = "javascript:void(0)";
            for (var f = 0; f < b.length; f++) {
                var g = b[f], h = q("<a>").ob("href", e);
                h.ha("background-repeat", "no-repeat");
                h.ha("background-position", "center");
                h.ha("display", "inline-block");
                Qa(h, "zwibbler-button");
                g.toolName && Qa(h, g.toolName);
                g.onclick && c(g, h);
                g.title && h.ob("title", g.title);
                g.background ? h.ha("background", g.background) : g.image && h.ha("background-image", "url(" + g.image + ")");
                g.html && (h[0].innerHTML =
                    g.html, h.ha("overflow", "hidden"));
                a.append(h)
            }
            var k = null;
            this.on("tool-changed", function (b) {
                d.log("Tool-changed: %s", b);
                if (k)for (var c = k, e = "zwibbler-selected".split(ta), f = 0, g = c.length; f < g; f++) {
                    var h = c[f];
                    if (1 === h.nodeType && h.className) {
                        for (var w = (" " + h.className + " ").replace(wa, " "), z = 0,
                                 H = e.length; z < H; z++)w = w.replace(" " + e[z] + " ", " ");
                        h.className = qa.da(w)
                    }
                }
                k = a.find("." + b);
                Qa(k, "zwibbler-selected")
            })
        }, ig: function (a, b) {
            "string" === typeof b && (b = q("#" + b));
            if ("PageSelector" === a) {
                this.log("Creating page selector");
                var c = new Cf(b, !1, !1);
                Gf(c, !0);
                Ff(c, this);
                Ef(c)
            } else return this.ib("Cannot create UI Elemment %s", a), !1;
            return !0
        }, ff: function (a) {
            var b = this.app, c = this.aa, d, e, f, g, h, k;
            if (6 > a.length) b.log("newShape: Cannot create shape with fewer than three points."), a = void 0; else {
                d = new R;
                f = h = 0;
                for (k = a.length - 1; h <= k; f = h += 2)g = b.view.Ha(new y(a[f], a[f + 1])), 0 === f ? (d.moveTo(g.x, g.y), e = g) : d.lineTo(g.x, g.y);
                d.lineTo(e.x, e.y);
                d.close();
                a = Li(b, c, d.Nb())
            }
            return Ui(this, a)
        }, hf: function () {
            var a = Og(this.app.view, !1);
            this.Ee();
            return a
        }, kf: function () {
            var a = this.app.ta;
            a.log("Running %s destructors", a.aa.length);
            for (var b = a.aa.length - 1; 0 <= b; b--)a.aa[b]();
            a.aa = null;
            for (var c in this)this.hasOwnProperty(c) && delete this[c]
        }, jf: function (a) {
            this.Ce(a)
        }, Ce: function (a) {
            this.log("deleteNodes()");
            var b;
            if (b = T(a) || a.length) {
                b = a;
                T(b) && (b = [b]);
                for (var c = 0; c < b.length; c++) {
                    var d = b[c], e = A(this.app.view.la, d, !1);
                    e && !this.Ka.contains(d) || !e && this.qa.contains(d) || (b.splice(c, 1), --c)
                }
                b = 0 < b.length
            }
            b && (b = this.aa, c = a, ge(c) || (c = [c]), b.push(new Vf(c)),
                Ui(this, void 0), this.Ka.add(a))
        }, De: function () {
            1 < this.ba && this.ib("deletePage is not implemented inside transactions. Please contact support.");
            1 === this.Vb() ? this.log("Cannot remove all the pages.") : (this.aa.push(new Vf([this.app.view.la.ke().id])), Ui(this))
        }, Ee: function () {
            Bg(this.app.view)
        }, yc: function () {
            if (1 === arguments.length && !1 === arguments[0]) {
                var a = this.app.view.la;
                a.Ab = a.ma.next
            }
            return this.app.view.la.yc()
        }, lf: function (a, b, c) {
            "jpeg" === a && (a = "jpg");
            var d, e;
            if ("pdf" === a || "svg" === a || "png" ===
                a || "jpg" === a || "bmp" === a || "zwibbler3" === a) {
                d = "zwibbler3" === a ? this.app.view.la.save(a, "data-uri") : this.save(a, c);
                "Blob" in window && (e = rf(d));
                if (e) {
                    if (window.navigator.msSaveOrOpenBlob) {
                        this.log("Using msSaveOrOpenBlob()");
                        window.navigator.msSaveOrOpenBlob(e, b);
                        return
                    }
                    d = window.URL.createObjectURL(e);
                    this.log("Using blob object url %s", d);
                    this.app.ta.add(function () {
                        window.URL.revokeObjectURL(d)
                    })
                }
                var f = document.createElement("a");
                f.innerHTML = "download";
                f.setAttribute("href", d);
                f.setAttribute("download",
                    b);
                f.style.display = "none";
                document.body.appendChild(f);
                f.click();
                setTimeout(function () {
                    document.body.removeChild(f)
                }, 1E3)
            } else this.log("unsupported format for download: %s", a)
        }, na: function (a, b) {
            b = b || {};
            var c = b.page || 0, d = this.app.view.la.jb, e = mg(this.app.view.la);
            this.app.view.la.lb(c);
            lh(this.app.view, a, 0, 0, e.width, e.height);
            this.app.view.la.na(a);
            this.app.view.la.lb(d)
        }, kg: function (a) {
            var b = A(this.app.view.la, a, !1);
            b ? b.Jd() ? (Tg(this.app.view, {}), this.app.view.ra.Od(b, b.rect.x, b.rect.y)) : this.log("editNodeText: node %s (%s) cannot contain text.",
                a, b.type()) : this.log("editNodeText: nodeid %s does not exist.", a)
        }, mf: function () {
            Gg(this.app.view)
        }, emit: function (a, b) {
            var c, d = this;
            this.da || (this.da = {});
            if (!Wi(this, a))return c = Array.prototype.slice.call(arguments, 1), setTimeout(function () {
                var b, f, g, h;
                if (a in d.da)for (h = d.da[a], f = 0, g = h.length; f < g; f++)b = h[f], b.apply(null, c)
            }, 0), this
        }, Mc: function (a, b) {
            var c;
            this.da || (this.da = {});
            if (!Wi(this, a)) {
                c = Array.prototype.slice.call(arguments, 1);
                var d, e, f, g;
                if (a in this.da)for (g = this.da[a], e = 0, f = g.length; e < f; e++)d =
                    g[e], d.apply(null, c)
            }
        }, jh: function (a) {
            this.ma || (this.ma = {});
            this.ma[a] = a in this.ma ? this.ma[a] + 1 : 1
        }, focus: function (a) {
            a ? Qi(this.app) : this.app.focus("canvas")
        }, mg: function (a) {
            a = this.Ge(a);
            return a.length ? a[0] : null
        }, Ge: function (a) {
            var b = this.app.view.la, c = [], d;
            for (d in b.Ba)if (b.Ba.hasOwnProperty(d)) {
                var e = b.Ba[d];
                e.pa("tag") === a && c.push(e)
            }
            a = [];
            for (b = 0; b < c.length; b++)a.push(c[b].id);
            return a
        }, ng: function (a, b, c) {
            var d = null;
            if (3 === arguments.length) {
                if (!T(b) || !T(c)) {
                    this.ib("flip: 2nd and 3rd args must be numbers.");
                    return
                }
                d = new y(b, c)
            }
            var e = this.app.view, f = a / 180 * Math.PI;
            0 === e.selection.length && null === e.Fa || e.log("flipSelection: selection is empty");
            oh(e, sd(e), f, d)
        }, nf: function (a, b, c, d) {
            var e = Xi(this, a), f = null;
            if (4 === arguments.length) {
                if (!T(c) || !T(d)) {
                    this.ib("flip: 3rd and 4th args must be numbers.");
                    return
                }
                f = new y(c, d)
            }
            oh(this.app.view, e, b / 180 * Math.PI, f)
        }, og: function (a, b, c) {
            function d(a) {
                a.on("click contextmenu", function (b) {
                    m.call(g, a.ha("background-color"), 1 === b.which);
                    b.preventDefault()
                })
            }

            function e() {
                var c =
                    q("<div>").ha("width", b + "px").ha("height", b + "px").ha("display", "inline-block");
                a.append(c);
                return c
            }

            function f(a, b) {
                var c = document.createElement("canvas");
                c.width = a;
                c.height = a;
                b(c.getContext("2d"), 0, 0, a);
                return e().append(c)
            }

            var g = this;
            a = jf(a);
            c = c || {};
            var h, k, l, m = c.onColour || c.onColor || g.sd;
            h = f(b, Af);
            h.on("click contextmenu", function (a) {
                m.call(g, "transparent", 1 === a.which);
                a.preventDefault()
            });
            h = f(b, Bf);
            h.on("click contextmenu", function (a) {
                if (c.onOpacity) c.onOpacity(.5, 1 === a.which); else g.Ue(.5, 1 ===
                    a.which);
                a.preventDefault()
            });
            for (k = 0; 1 >= k; k += 1 / 13)l = (new W(2, [0, 0, k, 1])).toString(), d(e().ha("background-color", l));
            for (k = .3; 1 >= k; k += .7 / 14)for (h = 0; 360 > h; h += 22.5)l = (new W(2, [h, .7, k, 1])).toString(), d(e().ha("background-color", l));
            for (h = 0; 360 > h; h += 22.5)l = (new W(2, [h, 1, 1, 1])).toString(), d(e().ha("background-color", l))
        }, ce: function () {
            var a = this.app.view;
            a.log("getActiveLayer() -> %s", a.La);
            return a.La
        }, pg: function () {
            var a = [];
            this.app.view.la.ad(function (b) {
                a.push(b.id)
            }, this.ic());
            return a
        }, of: function () {
            var a =
                this.app;
            return null !== a.Aa && a.Aa in a.view.la.Ba ? A(a.view.la, a.Aa).pa("url") : null
        }, pf: function (a) {
            var b = this.app.view;
            ge(a) || (a = [a]);
            for (var c = null, d = 0; d < a.length; d++) {
                var e = A(b.la, a[d]);
                e && (null === c ? c = e.yb().clone() : Mc(c, e.yb()))
            }
            null === c && (c = new M(0, 0, 0, 0));
            return Yi(c)
        }, rg: function (a) {
            Qe(a) || this.ib("getConfig: Expected string");
            return this.app.ga.get(a)
        }, ic: function () {
            return this.ba ? this.Aa : this.app.view.la.jb
        }, qf: function () {
            return this.app.view.kb
        }, rf: function () {
            return this.app.view.pb
        }, sf: function () {
            var a =
                this.app.view, b = null;
            a.ra.Qb && (b = a.ra.Qb());
            return b
        }, sg: function (a, b) {
            var c = x(this.app.view, a, b);
            return {x: c.x, y: c.y}
        }, bd: function () {
            var a = mg(this.app.view.la);
            return {x: a.x, y: a.y, width: a.width, height: a.height}
        }, tf: function () {
            return this.app.view.Ca.fillStyle
        }, vg: function (a) {
            return this.app.Va.get(a)
        }, error: function (a) {
            alert(a)
        }, tg: function () {
            return Yi(this.app.view.la.yb())
        }, ug: function (a, b) {
            return this.ye(a, b)
        }, xg: function () {
            var a = [], b = {}, c;
            this.app.view.la.mb(!1, function (d) {
                !(c = me(d)) || c in b ||
                (b[c] = 1, a.push(c))
            });
            c = this.ce();
            c in b || a.push(c);
            return a
        }, wg: function (a) {
            var b = [];
            this.app.view.la.mb(!1, function (c) {
                me(c) === a && b.push(c.id)
            });
            return b
        }, yg: function (a) {
            a:{
                for (var b = this.app.view.la, c = A(b, a, !1); ;)if (c)if ("PageNode" === c.type())break; else {
                    if (null === c.parent) {
                        a = void 0;
                        break a
                    }
                    c = c.parent
                } else {
                    a = void 0;
                    break a
                }
                for (var d = 0; d < b.aa.length; d++)if (b.aa[d] === c) {
                    b.log("getPageNode(%s) returning %s", a, d);
                    a = d;
                    break a
                }
                a = void 0
            }
            return a
        }, ye: function (a, b) {
            var c = this.app, d, e;
            (d = A(c.view.la, a)) &&
            (e = d.pa(b));
            c.log("GetItemProperty %s: %s=%s", a, b, e);
            return e
        }, zg: function (a) {
            var b = A(this.app.view.la, a);
            null === b && this.ib("Error: node %s does not exist", a);
            a = b.yb();
            return {x: a.x, y: a.y, width: a.width, height: a.height}
        }, Ag: function (a) {
            var b = A(this.app.view.la, a);
            null === b && this.ib("Error: node %s does not exist", a);
            a = Oc(b.Ja());
            return {x: a.x, y: a.y}
        }, uf: function (a) {
            return (a = A(this.app.view.la, a)) ? a.type() : ""
        }, Bg: function (a, b) {
            var c = this.app.view.la.bb(a, b, this.app.view.La);
            return c ? c.id : null
        }, Vb: function () {
            var a =
                this.app.view.la.Vb();
            this.ba && (a += this.ta);
            return a
        }, Cg: function (a) {
            return (a = this.app.view.la.ke(a)) ? a.id : null
        }, Hd: function (a) {
            var b = A(this.app.view.la, a, !1);
            if ("PathNode" !== b.type())return null;
            a = b.Hd().clone().ec();
            var c = [];
            b.Ja();
            for (b = 0; b < a.length; b++) {
                var d = a[b];
                c.push(d.x);
                c.push(d.y)
            }
            return c
        }, Dg: function (a) {
            a = A(this.app.view.la, a, !1);
            if ("PathNode" !== a.type())return null;
            a = a.Hd();
            for (var b = [], c = [], d = 0; d < a.fa.length;) {
                switch (a.fa[d]) {
                    case $b:
                        c = [{x: a.fa[d + 1], y: a.fa[d + 2]}];
                        b.push(c);
                        break;
                    case ac:
                        c.push({
                            x: a.fa[d +
                            1], y: a.fa[d + 2]
                        })
                }
                d += dc[a.fa[d]]
            }
            return b
        }, Yf: function () {
            this.app.view.Yc = this.app.qa;
            this.app.Ic = !0;
            return this.app.qa.ja[0]
        }, qg: function () {
            return this.app.view.scale
        }, Fg: function (a, b, c, d) {
            var e;
            e = Id(this.app.view, a, b);
            if (void 0 === c)return {x: e.x, y: e.y};
            a = Id(this.app.view, a + c, b + d);
            return Yi(new M(e.x, e.y, a.x - e.x, a.y - e.y))
        }, Gg: function () {
            return this.app.view.Ka
        }, wf: function () {
            return this.app.view.Ca.strokeStyle
        }, Ac: function (a, b) {
            var c = A(this.app.view.la, a, !1);
            return c ? c.Ac(b) : null
        }, Yg: function (a, b,
                         c) {
            var d = A(this.app.view.la, a, !1);
            if (!d)return this.log("setEditHandle: node %s doesn't exist.", a), !1;
            if ("PathNode" !== d.type())return this.log("setEditHandle: node %s is not a PathNode.", a), !1;
            d = d.pa("commands");
            b = b / 3;
            var e = 0, f = [], g = new y(0, 0), h = !1, k = 0, l, m;
            for (l = 0; l < d.length;) {
                m = d[l];
                if (7 === m) {
                    h = !0;
                    break
                }
                k += 1;
                l += Je[d[l]] + 1
            }
            0 === b && h && (b = k - 1);
            for (l = 0; l < d.length; e++) {
                m = d[l];
                h = !1;
                b === e && (2 === m && "line_to" === c ? (f.push(1, d[l + 1], d[l + 2]), h = !0) : 1 === m && "quadratic_to" === c && (f.push(2, d[l + 1], d[l + 2], (g.x + d[l + 1]) /
                        2, (g.y + d[l + 2]) / 2), h = !0));
                g = new y(d[l + 1], d[l + 2]);
                if (!h)for (m = 0; m < 1 + Je[d[l]]; m++)f.push(d[l + m]);
                l += Je[d[l]] + 1
            }
            d = f;
            if (!d)return this.log("setEditHandle: failed"), !1;
            this.ee(a, "commands", d);
            return !0
        }, vf: function (a) {
            return hh(this.app.view, a)
        }, Eg: function (a) {
            for (var b = {properties: {}, types: {}, nodes: a}, c = this.app.ga.get("allowTextInShape"),
                     d = 0; d < a.length; d++) {
                var e = A(this.app.view.la, a[d], !1);
                if (e) {
                    var f = e.type();
                    b.types[f] = !0;
                    b.types.AnyNode = !0;
                    "PathNode" === f && (f = e.pa("closed") ? "PathNode-closed" : "PathNode-open",
                        b.types[f] = !0);
                    var e = fe(e), g;
                    for (g in e)if (e.hasOwnProperty(g) && "matrix" !== g && ("BrushNode" !== f || "fillStyle" !== g)) {
                        var h = b.properties[g], k = e[g];
                        ("PathNode-open" !== f || "fontSize" !== g && "fontName" !== g && "fillStyle" !== g) && ("PathNode-closed" !== f || c || "fontSize" !== g && "fontName" !== g) && void 0 !== k && (b.properties[g] = h !== k && void 0 !== h ? null : k)
                    }
                }
            }
            return b
        }, Ig: function () {
            return Yi(jb(this.app.view))
        }, ib: function (a, b) {
            for (var c = arguments[0].split("%s"), d = [],
                     e = 0; e < c.length; e++)d.push(c[e]), e < c.length - 1 && d.push(JSON.stringify(arguments[e +
            1]));
            d = d.join("");
            this.log(d);
            throw{
                message: d, toString: function () {
                    return d
                }
            };
        }, dd: function (a) {
            var b = this.app.view.la.sb;
            this.aa.push(new C("PageNode", {}, this.app.view.la.root.id, a));
            Ui(this, b);
            this.ba && (this.ta += 1);
            return a
        }, me: function (a) {
            return this.app.view.la.me(a)
        }, xf: function (a, b) {
            1 === arguments.length && (b = arguments[0], a = "zwibbler3");
            var c;
            "list" === a ? (Ki(this.app, Ci(b)), c = void 0) : c = Ki(this.app, Ai(b));
            return c
        }, yf: function (a) {
            var b = this;
            T(a) || this.error("lockUpdates: Expected a number");
            this.Va &&
            clearTimeout(this.Va);
            this.Va = setTimeout(function () {
                nh(b.app.view, !1)
            }, a);
            nh(b.app.view, !0)
        }, zf: function () {
            Ig(this.app.view)
        }, Af: function () {
            Hg(this.app.view)
        }, Bf: function () {
            var a = this.app;
            Ki(a, new gg);
            null !== a.ga.ua.backgroundImage && (Ii(a, a.ga.ua.backgroundImage), rg(a.view.la));
            Ti(this)
        }, Cf: function () {
            this.Ec(Math.min(this.ic() + 1, this.Vb() - 1))
        }, on: function (a, b) {
            "draw" === a ? this.Ub = b : a in this.da ? this.da[a].push(b) : this.da[a] = [b];
            return this
        }, Pg: function (a) {
            "function" === typeof a || this.ib("Error: onComplete needs a function argument.");
            var b = this.app.view;
            b.request.aa ? (b.log("Formatting in progress; will call function soon"), Gb(b.request, a)) : (b.log("Format already done; call function in 1 tick"), setTimeout(a, 0))
        }, Df: function (a) {
            Pg(this.app.view, a)
        }, Sg: function () {
            this.Ec(Math.max(this.ic() - 1, 0))
        }, Ef: function (a, b) {
            var c = [], d;
            if (T(a)) c.push(a); else if (ge(a))for (d = 0; d < a.length; d++)T(a[d]) ? c.push(a[d]) : this.error("print(): pageSpec must be array of numbers"); else if (!a)for (d = 0; d < this.Vb(); d++)c.push(d);
            b = b ? Zi(this, b) : Zi(this, this.bd());
            var e = this.ic(), f = document.createElement("canvas");
            f.width = b.width;
            f.height = b.height;
            var g = f.getContext("2d");
            g.translate(-b.x, -b.y);
            d = window.location.hostname;
            var h = window.open("about:blank", "_blank");
            h.document.write("<!DOCTYPE html><html><head><title>" + d + "</title></head><body>");
            for (d = 0; d < c.length; d++)this.Ec(c[d]), lh(this.app.view, g, b.x, b.y, b.width, b.height), this.app.view.la.na(g), 0 < d ? h.document.write("<div style='page-break-before:always'>") : h.document.write("<div>"), h.document.write("<img style='width:100%' src='"),
                h.document.write(f.toDataURL()), h.document.write("'></div>"), g.clearRect(b.x, b.y, b.width, b.height);
            h.document.write("</body></html>");
            h.document.close();
            setTimeout(function () {
                h.focus();
                h.print();
                setTimeout(function () {
                    h.close()
                }, 1E3)
            }, 1E3);
            this.Ec(e)
        }, dc: function () {
            this.app.view.dc()
        }, Ff: function (a) {
            this.app.view.na(a)
        }, resize: function () {
            var a = this;
            setTimeout(function () {
                Ei(a.app, !0)
            }, 1)
        }, save: function (a, b) {
            a = a || "zwibbler3";
            var c = {
                jpeg: "image/jpeg", jpg: "image/jpeg", png: "image/png", bmp: "image/bmp", svg: "image/svg+xml",
                pdf: "application/pdf"
            };
            b = Zi(this, b || this.bd());
            switch (a) {
                case "list":
                    return this.app.view.la.save("list", "object");
                case "png":
                case "jpeg":
                case "jpg":
                case "bmp":
                case "svg":
                case "pdf":
                    return Ni(this.app, c[a], b);
                case "zwibbler3":
                    return this.app.view.la.save("zwibbler3", "string");
                case "image/png":
                case "image/jpeg":
                case "image/bmp":
                    for (var d = Ni(this.app, a, b), d = d.substr(d.indexOf(",") + 1), c = ["base64"],
                             e = 0; e < c.length; e++)d = ea[c[e]](d);
                    return d;
                default:
                    return "Unsupported format: " + a
            }
        }, Wg: function (a) {
            q(this.app.view.canvas).ha("cursor",
                a)
        }, oc: function (a, b) {
            this.app.view.oc(a, b)
        }, Hf: function (a) {
            a = Xi(this, a);
            Fg(this.app.view, a);
            Sf(this.app.view);
            this.app.view.na()
        }, If: function () {
            Dg(this.app.view)
        }, ze: function (a) {
            var b = this.app.view;
            b.log("setActiveLayer(%s)", a);
            b.La = a;
            b.fb();
            Sf(b);
            b.na()
        }, Ug: function (a, b) {
            var c = this.app, d, e, f, g;
            Xh(c.da);
            b && (d = c.da, d.ba = b, d.aa = b);
            g = [];
            e = 0;
            for (f = a.length; e < f; e++)d = a[e], "string" === typeof d ? g.push(Yh(c.da, d, d)) : g.push(Yh(c.da, d.small, d.large, d.tooltip))
        }, Vg: function (a, b) {
            "defaultPaperSize" === a && this.re(b);
            return Nh(this.app.ga, a, b)
        }, sd: function (a, b) {
            this.app.view.Jb(a, b)
        }, Ec: function (a) {
            this.ba ? (this.log("Set page to %s inside transaction", a), this.aa.push(new fg(a)), this.Aa = a) : this.app.view.lb(a)
        }, Jf: function (a) {
            var b = this.app.view;
            a ? (b.log("Setting a custom background function."), b.qb = a) : b.log("Clearing custom background function.")
        }, de: function (a, b) {
            !T(a) && null !== a || !T(b) && null !== b ? alert("setDocumentSize: width/height must be numbers") : uh(this.app.view, a, b)
        }, Se: function (a, b) {
            !T(a) && null !== a || !T(b) &&
            null !== b ? alert("setDocumentSize: width/height must be numbers") : Ui(this, uh(this.app.view, a, b, this.aa))
        }, Xg: function (a, b) {
            var c = A(this.app.view.la, a);
            c || this.ib("setDomElement: Node %s does not exist", a);
            "DomNode" !== c.type() && this.ib("setDomElement: Node %s is not a DomNode. It is %s", a, c.type());
            c.Te(b);
            this.app.ub.push(b)
        }, ah: function (a, b) {
            Qe(a) && Qe(b) ? (this.ce() === a && this.ze(b), this.app.view.la.mb(!1, function (c) {
                me(c) === a && c.setProperty("layer", b)
            })) : this.ib("setLayerName() needs string arguments.")
        },
        re: function (a) {
            var b = null, c = null, d, e = !0, f = !1;
            if (2 === arguments.length) T(arguments[0]) && T(arguments[1]) ? (d = arguments[0], b = arguments[1]) : Qe(arguments[0]) && "boolean" === typeof arguments[1] ? (c = arguments[0], f = arguments[1]) : e = !1; else if (1 === arguments.length && Qe(arguments[0]))for (var g = arguments[0].split(" "),
                                                                                                                                                                                                                                                                                        h = 0; h < g.length; h++)"landscape" === g[h] ? f = !0 : "portrait" === g[h] ? f = !1 : c = g[h];
            if (!1 === e)return this.log("Bad arguments to setPaperSize()."), !1;
            if (null === c)return this.de(d, b), !0;
            switch (c.toLowerCase()) {
                case "letter":
                    d =
                        816;
                    b = 1056;
                    break;
                case "legal":
                    d = 816;
                    b = 1344;
                    break;
                case "11x17":
                    d = 1056;
                    b = 1632;
                    break;
                case "tabloid":
                    d = 1056;
                    b = 1632;
                    break;
                case "a0":
                    d = 841 / 25.4 * 96;
                    b = 1189 / 25.4 * 96;
                    break;
                case "a1":
                    d = 594 / 25.4 * 96;
                    b = 841 / 25.4 * 96;
                    break;
                case "a2":
                    d = 420 / 25.4 * 96;
                    b = 594 / 25.4 * 96;
                    break;
                case "a3":
                    d = 297 / 25.4 * 96;
                    b = 420 / 25.4 * 96;
                    break;
                case "a4":
                    d = 210 / 25.4 * 96;
                    b = 297 / 25.4 * 96;
                    break;
                case "none":
                    b = d = null;
                    break;
                default:
                    return this.log("Invalid paper size: %s", c), !1
            }
            f && (c = d, d = b, b = c);
            this.de(d, b);
            return !0
        }, Zg: function (a, b) {
            var c = this.app, d, e, f, g;
            Xh(c.ma);
            g = [];
            b && (d = c.ma, d.ba = b, d.aa = b);
            e = 0;
            for (f = a.length; e < f; e++)d = a[e], "string" === typeof d ? g.push(Yh(c.ma, d, d)) : g.push(Yh(c.ma, d.small, d.large, d.tooltip))
        }, $g: function (a, b, c) {
            this.ee(a, b, c)
        }, Kf: function (a, b) {
            if (2 !== arguments.length)throw"Error: setNodeProperties takes 2 arguments.";
            var c = this.aa, d = a, e = Vi(b), f;
            this.app.log("External app setNodeProperty %s: %s", d, e);
            ge(d) || (d = [d]);
            for (f in e)e.hasOwnProperty(f) && c.push(new Nd(d, f, e[f]));
            return Ui(this, void 0)
        }, ee: function (a, b, c) {
            3 !== arguments.length && this.ib("Error: setNodeProperty takes 3 arguments.");
            var d = this.aa;
            this.app.log("External app setItemProperty %s: %s=%s", a, b, c);
            var e;
            ge(a) ? e = a : e = [a];
            d.push(new Nd(e, b, c));
            return Ui(this, void 0)
        }, bh: function (a, b) {
            ge(a) || (a = [a]);
            for (var c = 0; c < a.length; c++) {
                var d = A(this.app.view.la, a[c], !0);
                d && d.mc(!b)
            }
            this.app.view.na()
        }, Ue: function (a, b) {
            var c = this.app.view;
            c.ra.cc ? (c.log("Simulating opacity change %s", a), c.ra.cc(a, b)) : c.log("An opacity is not needed for this tool.")
        }, Mf: function (a) {
            var b = this.app.view;
            b.ub = a;
            a = Qg(b);
            b.Qa = -a.x;
            b.Ma = -a.y;
            ob(b);
            b.na()
        },
        eh: function (a) {
            Re(a) && T(a.x) && T(a.y) && T(a.width) && T(a.height) || this.ib("setViewRect: arg must be an object with numeric x, y, width, height properties");
            0 !== a.width && 0 !== a.height || this.ib("setViewRect: width and height must be non-zero.");
            lb(this.app.view, Zi(this, a))
        }, fh: function (a) {
            T(a) || "page" === a || "width" === a ? gh(this.app.view, a) : this.log("setZoom: invalid parameter.")
        }, ud: function (a, b) {
            this.app.view.ud(a, b)
        }, Ae: function (a, b, c) {
            this.log("Translate node %s by %s,%s actions=%s", a, b, c, this.aa.length);
            var d = this.aa;
            ge(a) || (a = [a]);
            d.push(new qd(a, new E(b, c)));
            return Ui(this, !0)
        }, Tg: function (a) {
            var b = Math.round(a / (Math.PI / 2));
            a = b * Math.PI / 2;
            var b = 0 === b % 2, c = $i(this), d = this.bd(), e = d.width / 2, f = d.height / 2;
            this.Be();
            for (var g = 0; g < c.length; g++)this.Re(c[g], a, e, f), b || this.Ae(c[g], f - e, e - f);
            b || this.Se(d.height, d.width);
            this.ie()
        }, Re: function (a, b, c, d) {
            this.log("Rotate nodes by %s around (%s,%s) actions=%s", b / Math.PI * 180, c, d, this.aa.length);
            var e = 4 === arguments.length;
            if (T(a)) a = [a]; else if (!ge(a)) this.ib("rotateNode: expected a node or id.");
            else if (0 === a.length) {
                this.log("rotateNode: ids array is empty.");
                return
            }
            for (var f = new y(0, 0), g = 0; g < a.length; g++) {
                var h = a[g], k = A(this.app.view.la, h);
                (k || this.qa.contains(h)) && (k || e) || this.ib("rotateNode: Node %s does not exist", h);
                e || (h = Kc(k.yb()), f.x += h.x, f.y += h.y)
            }
            e ? (f.x = c, f.y = d) : (f.x /= a.length, f.y /= a.length);
            e = this.aa;
            g = a;
            f = new N(b, f.x, f.y);
            ge(g) || (g = [g]);
            e.push(new qd(g, f));
            return Ui(this, !0)
        }, Gf: function (a, b, c, d, e) {
            this.log("Scale node %s by %s,%s actions=%s", a, b, c, this.aa.length);
            this.aa.push(new qd([a],
                new cb(b, c, d || 0, e || 0)));
            return Ui(this, !0)
        }, Lf: function (a, b, c, d, e, f, g) {
            7 !== arguments.length && this.ib("setNodeTransform: requires 7 arguments");
            this.log("setNodeTransform(id=%s %s %s %s %s %s %s %s)", a, b, c, d, e, f, g);
            var h = this.aa, k = a;
            ge(k) || (k = [k]);
            var l;
            l = new O(b, d, c, e, f, g);
            h.push(new Nd(k, "matrix", l));
            return Ui(this, !0)
        }, eb: function () {
            this.app.view.eb()
        }, Nf: function (a) {
            this.aa.push(new Xf(a));
            return Ui(this, void 0)
        }, Of: function (a, b) {
            function c() {
            }

            function d() {
            }

            var e = new Eh(this.app.Zb, b || "Working"),
                f = new XMLHttpRequest, g = new FormData(a);
            f.upload.addEventListener("progress", function (a) {
                e.update(a.loaded / a.total)
            }, !1);
            f.addEventListener("load", function () {
                200 === f.status ? (e.done(), d(f.response, f)) : (e.error("Error"), c(f, f))
            }, !1);
            f.addEventListener("error", function () {
                e.error("Error");
                c(f, f)
            }, !1);
            f.addEventListener("abort", function () {
                e.error("Aborted");
                c(f)
            }, !1);
            f.open(a.method, a.action);
            f.send(g);
            var h = {
                success: function (a) {
                    d = a;
                    return h
                }, error: function (a) {
                    c = a;
                    return h
                }
            };
            return h
        }, mh: function (a, b) {
            vh(this.app.view,
                Vi(a), b)
        }, nh: function (a, b) {
            2 === arguments.length ? yh(this.app.view, {
                lineWidth: b,
                strokeStyle: a
            }) : yh(this.app.view, Vi(arguments[0]))
        }, oh: function (a) {
            rh(this.app.view, Vi(a))
        }, ph: function (a) {
            Jg(this.app.view, Vi(a))
        }, qh: function (a) {
            Re(a) || this.error("useCustomTool(): requires an object as argument.");
            B(this.app.view, new Dh(this.app.view, a))
        }, Pf: function (a) {
            var b = this.app.view, c = A(b.la, a, !1);
            c ? c.Oc() ? (F(b), b.fb(), Sf(b), b.Fa = c, b.na()) : b.log("useEditHandleTool: nodetype %s has no edit mode", c.type()) : b.log("useEditHandleTool: node %s doesn't exist.",
                a)
        }, Qf: function () {
            rh(this.app.view)
        }, rh: function (a, b, c) {
            Re(a) ? (a = Vi(a), c = b) : a = {strokeStyle: a, lineWidth: b};
            wh(this.app.view, a, c || "freehand")
        }, Ah: function (a, b) {
            var c = a;
            Qe(a) ? c = {url: a} : "url" in c || this.ib("useStampTool: missing url in properties");
            var d = this.app.view;
            B(d, new bb(d, c, 1 === arguments.length || !0 === b))
        }, sh: function (a, b) {
            var c, d;
            Re(b) ? (c = b.singleLine, d = b.orthogonal) : c = b;
            Kg(this.app.view, Vi(a), c, d)
        }, th: function () {
            var a = this.app.view;
            B(a, new mb(a))
        }, uh: function () {
            F(this.app.view)
        }, Rf: function (a,
                         b, c) {
            var d = this.app.view;
            c = c || 1;
            var e;
            e = new R;
            for (var f = 0; f <= a; f++) {
                var g = 50 * Math.sin(b), h = 50 * -Math.cos(b);
                f & 1 && (g *= c, h *= c);
                0 === f ? e.moveTo(g, h) : e.lineTo(g, h);
                b += 2 * Math.PI / a
            }
            e.close();
            a = {
                commands: e.Nb(),
                fillStyle: d.kb,
                strokeStyle: d.pb,
                seed: Math.round(65535 * Math.random()),
                lineWidth: d.Ca.lineWidth,
                sloppiness: d.Ca.sloppiness,
                layer: d.La,
                wrap: d.ga.get("multilineText"),
                fontSize: d.ga.get("defaultFontSize")
            };
            d.log("Create an item on layer %s", d.La);
            B(d, new zd(d, "PathNode", a, 100, 100, sh(d.ga), "polygon"))
        }, vh: function (a) {
            wh(this.app.view,
                Vi(a), "quadratic")
        }, Sf: function (a) {
            th(this.app.view, Vi(a))
        }, wh: function (a) {
            th(this.app.view, q.aa({}, {roundRadius: this.app.ga.get("defaultRoundRectRadius")}, a || {}))
        }, xh: function (a, b) {
            var c = {};
            Re(a) ? c = Vi(a) : Qe(a) && (c.stokeStyle = a);
            T(b) && (c.lineWidth = b);
            xh(this.app.view, c)
        }, Tf: function (a, b, c, d, e) {
            var f = this.app.view;
            b = Vi(b);
            B(f, new zd(f, a, b, c, d, e, "shape"))
        }, Uf: function () {
            var a = this.app.view;
            B(a, new Ud(a))
        }, zh: function (a) {
            var b = this.app.view;
            b.ga.get("readOnly") ? b.log("readOnly mode: Ignoring tool click.") :
                B(b, new Me(b, "stampline", a))
        }, yh: function (a) {
            th(this.app.view, Vi(a))
        }, Bh: function (a) {
            Tg(this.app.view, Vi(a))
        }, Vf: function (a) {
            var b = this.app.view;
            a = Vi(a);
            B(b, new Od(b, a))
        }, Wf: function () {
            Rg(this.app.view)
        }, Xf: function () {
            Sg(this.app.view)
        }
    };
    function Xi(a, b) {
        var c = [];
        T(b) && (b = [b]);
        for (var d = 0; d < b.length; d++) {
            var e = A(a.app.view.la, b[d], !1);
            e && c.push(e)
        }
        return c
    }

    function Ti(a) {
        var b = a.app.ga.get("defaultPaperSize");
        a.log("onNewDocument()");
        "none" !== b && a.re(b)
    }

    function Zi(a, b) {
        "object" !== typeof b && a.error("Error: Rectangle object expected.");
        b = new M(b.x || 0, b.y || 0, b.width || 0, b.height || 0);
        Ic(b);
        return b
    }

    function Yi(a) {
        return {x: a.x, y: a.y, width: a.width, height: a.height}
    }

    function $i(a) {
        var b = [];
        a.app.view.la.mb(!1, function (a) {
            b.push(a.id)
        });
        return b
    }

    function Wi(a, b) {
        return a.ma && b in a.ma && 0 < a.ma[b] ? (a.log("Skipped %s event", b), --a.ma[b], !0) : !1
    }

    function Ui(a, b) {
        if (!a.ba)return a.log("Not in a transaction. committing immediately. id=%s", b), a.ie(), b;
        if ("number" === typeof b)return a.ka += 1, a.log("id=%s numCreated=%s realid=%s", b, a.ka, b + a.ka - 1), a.qa.add(b + a.ka - 1), b + a.ka - 1
    }

    function Vi(a) {
        a = a || {};
        var b = {}, c;
        for (c in a)if (a.hasOwnProperty(c)) {
            var d = a[c];
            "matrix" === c && ("[object Array]" === Object.prototype.toString.apply(d) && "Matrix" === d[0] && d.splice(0, 1), d = new O(d));
            b[c] = d
        }
        return b
    };
    "jQuery" in window && (window.jQuery.fn.zwibbler = function (a) {
        a = a || {};
        var b = null;
        this.each(function (c, d) {
            d.zwibbler && q(d).empty();
            b = new Z(q(d), a);
            d.zwibbler = b
        });
        return b
    }, window.jQuery.fn.zwibblerContext = function () {
        return this[0].zwibbler
    });
    var Si = [], ue = {};
    window.Zwibbler = {
        create: function (a, b) {
            "string" === typeof a && 0 < a.length && "." !== a.charAt(0) && "#" !== a.charAt(0) && (a = "#" + a);
            var c = jf(a);
            return null === c ? (alert("Zwibbler.create: Cannot find an element with id " + a), null) : new Z(q(c), b)
        }, addButton: function (a) {
            for (var b = ["name", "image", "onclick"],
                     c = 0; c < b.length; c++)if (!(b[c] in a))return alert("Zwibbler.addButton: missing " + b[c]), !1;
            Si.push(a);
            return !0
        }, addCustomNode: function (a, b) {
            ue[a] = b
        }, Dialog: function (a, b) {
            function c() {
                var a = d.outerWidth(), b = d.outerHeight(),
                    c = sf();
                d.offset({left: c.x + c.width / 2 - a / 2, top: c.y + c.height / 2 - b / 2})
            }

            var d = jf(a);
            null === d[0].parentNode && q(document.body).append(d);
            "static" === d.ha("position") && d.ha("position", "absolute");
            d.ha("display", "none");
            b = b || {};
            var e = new aa("transparent");
            e.insertBefore = d;
            var f = b.showNear, g = b.showHow, h = !1, k = {
                hide: function () {
                    e.Za();
                    d.Za();
                    if (k.onhide) k.onhide();
                    q(window).Wc("resize", c)
                }, show: function (a, b, p) {
                    var r, u;
                    2 === arguments.length && T(a) && T(b) ? (r = a, u = b) : (a = a || f, b = b || g);
                    var v = Jd() + 1;
                    d.ha("z-index", v);
                    e.aa =
                        v;
                    d.show();
                    var v = d.outerWidth(), w = d.outerHeight();
                    if (void 0 !== r) {
                        var z = sf();
                        r = {left: r, top: u};
                        r.left = Math.min(r.left, z.x + z.width - v - 2);
                        r.top = Math.min(r.top, z.y + z.height - w - 3);
                        d.offset(r)
                    } else a && b ? (v = jf(a), r = d, w = b, u = v.offset(), w = w.toLowerCase().split(" "), 2 !== w.length && (w = ["tl", "tl"]), 0 <= w[0].indexOf("b") && (u.top += v.outerHeight()), 0 <= w[0].indexOf("r") && (u.left += v.outerWidth()), 0 <= w[1].indexOf("b") && (u.top -= r.outerHeight()), 0 <= w[1].indexOf("r") && (u.left -= r.outerWidth()), r.ha("position", "absolute"), v =
                        sf(), w = r.width(), z = r.height(), u.left = Math.min(u.left, v.x + v.width - w), u.top = Math.min(u.top, v.y + v.height - z), r.offset(u)) : (q(window).on("resize", c), c());
                    e.show(k.hide);
                    if (k.onshow) k.onshow();
                    h = p
                }, onshow: b.onshow, onhide: b.onhide
            };
            d.on("click", function () {
                h && k.hide()
            });
            return k
        }, ColourWheel: function (a, b) {
            a = q(a)[0];
            var c = new sg(a, b), d = new J;
            c.Ka = function (a) {
                d.emit("change", a)
            };
            return {
                on: function (a, b) {
                    d.on(a, b)
                }, colour: function () {
                    if (arguments.length) ug(c, arguments[0]); else return c.ba.toString()
                }
            }
        }, SlidingPanel: function (a,
                                   b) {
            b = b || {};
            var c = b.autohide, d;
            d = "string" === typeof a ? q("#" + a) : q(a);
            var e = new Hb(d);
            if (b.onshow) e.on("show", b.onshow);
            if (b.onhide) e.on("hide", b.onhide);
            return {
                show: function (a) {
                    e.show(a, c)
                }, hide: function () {
                    e.Za()
                }
            }
        }, createPreview: function (a, b) {
            return window.Zwibbler.render(a, b)
        }, render: function (a, b) {
            function c() {
                var a = p.yb(), b = 1, c = 0, r = 0;
                f && (a.y = f);
                k && (a.height = k - a.y);
                g && (a.x = g);
                h && (a.width = h - a.x);
                d && e ? b = Math.min(d / a.width, e / a.height) : d ? (b = d / a.width, e = a.height * b) : e ? (b = e / a.height, d = a.width * b) : (d = a.width,
                    e = a.height);
                a.width * b < d && (c = d / 2 - a.width * b / 2);
                a.height * b < e && (r = e / 2 - a.height * b / 2);
                c -= a.x * b;
                r -= a.y * b;
                l.width = Math.ceil(d);
                l.height = Math.ceil(e);
                m.translate(c, r);
                m.scale(b, b);
                p.na(m)
            }

            b = b || {};
            var d = b.width || 0, e = b.height || 0, f = b.top || 0, g = b.left || 0, h = b.right || 0,
                k = b.bottom || 0, l = kf(null), m = l.getContext("2d"), p = Ai(a), r = new Mb;
            p.format(m, r);
            r.on("reformat", function (a) {
                Dd(p, a.id)
            });
            if (r.aa) r.on("done", function () {
                p.format(m, r);
                c()
            }); else c();
            return l
        }, parseColour: function (a) {
            a = Q(a);
            return {
                r: a.values[0], g: a.values[1],
                b: a.values[2], a: a.values[3]
            }
        }, makeColour: function (a) {
            return (new W(0, [a.r, a.g, a.b, a.a])).toString()
        }, getAbsoluteUrl: function (a) {
            var b = document.createElement("a");
            b.href = a;
            return b.href
        }, base64Encode: function (a) {
            return fa("base64", a)
        }, fonts: new cf, addFont: function (a, b) {
            window.Zwibbler.fonts.add(b, a)
        }, PathCommands: function (a) {
            return new R(a)
        }, CommandsFromSvgPath: function (a) {
            var b = new R;
            kd(b, a);
            return b.Nb()
        }, getImageSize: function (a, b) {
            var c = document.createElement("img");
            c.src = a;
            c.onload = function () {
                b(c.naturalWidth,
                    c.naturalHeight, c)
            }
        }, setColourOpacity: function (a, b) {
            return Ed(a, b)
        }, toggleFullScreen: function (a) {
            a = jf(a)[0];
            window.Zwibbler.isFullScreen() ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() :
                a.webkitRequestFullscreen && a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
        }, isFullScreen: function () {
            return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? !0 : !1
        }
    };
    window.Zwibbler.Popup = window.Zwibbler.Dialog;
    R.prototype.change = R.prototype.da;
    R.prototype.moveTo = R.prototype.moveTo;
    R.prototype.lineTo = R.prototype.lineTo;
    R.prototype.curveTo = R.prototype.Cd;
    R.prototype.quadraticTo = R.prototype.ba;
    R.prototype.cornerTo = R.prototype.aa;
    R.prototype.bezierTo = R.prototype.vc;
    R.prototype.arcTo = R.prototype.arcTo;
    R.prototype.getBoundingBox = R.prototype.ka;
    R.prototype.translate = R.prototype.translate;
    R.prototype.closePath = R.prototype.closePath;
    R.prototype.close = R.prototype.close;
    R.prototype.toArray = R.prototype.Nb;
    ve.prototype.setElement = ve.prototype.Te;
    Z.prototype.log = Z.prototype.log;
    Z.prototype.abortTransaction = Z.prototype.$f;
    Z.prototype.addToLanguage = Z.prototype.af;
    Z.prototype.addPage = Z.prototype.ag;
    Z.prototype.beginTransaction = Z.prototype.Be;
    Z.prototype.bringToFront = Z.prototype.bf;
    Z.prototype.canRedo = Z.prototype.wc;
    Z.prototype.canUndo = Z.prototype.xc;
    Z.prototype.clearSelection = Z.prototype.fb;
    Z.prototype.clearUndo = Z.prototype.eg;
    Z.prototype.clickColour = Z.prototype.fg;
    Z.prototype.commitIrreversibleTransaction = Z.prototype.hg;
    Z.prototype.commitTransaction = Z.prototype.ie;
    Z.prototype.copy = Z.prototype.cf;
    Z.prototype.createGroup = Z.prototype.Lc;
    Z.prototype.createNode = Z.prototype.df;
    Z.prototype.createPath = Z.prototype.ef;
    Z.prototype.createToolbar = Z.prototype.gf;
    Z.prototype.createUiElement = Z.prototype.ig;
    Z.prototype.createShape = Z.prototype.ff;
    Z.prototype.cut = Z.prototype.hf;
    Z.prototype.destroy = Z.prototype.kf;
    Z.prototype.deleteNode = Z.prototype.jf;
    Z.prototype.deleteNodes = Z.prototype.Ce;
    Z.prototype.deletePage = Z.prototype.De;
    Z.prototype.deleteSelection = Z.prototype.Ee;
    Z.prototype.dirty = Z.prototype.yc;
    Z.prototype.download = Z.prototype.lf;
    Z.prototype.draw = Z.prototype.na;
    Z.prototype.editNodeText = Z.prototype.kg;
    Z.prototype.duplicate = Z.prototype.mf;
    Z.prototype.emit = Z.prototype.emit;
    Z.prototype.skipEvent = Z.prototype.jh;
    Z.prototype.focus = Z.prototype.focus;
    Z.prototype.findNode = Z.prototype.mg;
    Z.prototype.findNodes = Z.prototype.Ge;
    Z.prototype.flip = Z.prototype.ng;
    Z.prototype.flipNodes = Z.prototype.nf;
    Z.prototype.generatePalette = Z.prototype.og;
    Z.prototype.getActiveLayer = Z.prototype.ce;
    Z.prototype.getAllNodes = Z.prototype.pg;
    Z.prototype.getBackgroundImage = Z.prototype.of;
    Z.prototype.getBoundingRectangle = Z.prototype.pf;
    Z.prototype.getConfig = Z.prototype.rg;
    Z.prototype.getCurrentPage = Z.prototype.ic;
    Z.prototype.getCurrentFillColour = Z.prototype.qf;
    Z.prototype.getCurrentOutlineColour = Z.prototype.rf;
    Z.prototype.getCurrentTool = Z.prototype.sf;
    Z.prototype.getDocumentCoordinates = Z.prototype.sg;
    Z.prototype.getDocumentSize = Z.prototype.bd;
    Z.prototype.getFillColour = Z.prototype.tf;
    Z.prototype.getLanguageString = Z.prototype.vg;
    Z.prototype.getDrawingRectangle = Z.prototype.tg;
    Z.prototype.getItemProperty = Z.prototype.ug;
    Z.prototype.getLayers = Z.prototype.xg;
    Z.prototype.getLayerNodes = Z.prototype.wg;
    Z.prototype.getNodePageNumber = Z.prototype.yg;
    Z.prototype.getNodeProperty = Z.prototype.ye;
    Z.prototype.getNodeRectangle = Z.prototype.zg;
    Z.prototype.getNodeScale = Z.prototype.Ag;
    Z.prototype.getNodeType = Z.prototype.uf;
    Z.prototype.getNodeUnderPoint = Z.prototype.Bg;
    Z.prototype.getPageCount = Z.prototype.Vb;
    Z.prototype.getPageNode = Z.prototype.Cg;
    Z.prototype.getPathData = Z.prototype.Hd;
    Z.prototype.getPathAsPoints = Z.prototype.Dg;
    Z.prototype._getPropertyPanelElement = Z.prototype.Yf;
    Z.prototype.getCanvasScale = Z.prototype.qg;
    Z.prototype.getScreenCoordinates = Z.prototype.Fg;
    Z.prototype.getSelectedEditHandle = Z.prototype.Gg;
    Z.prototype.getStrokeColour = Z.prototype.wf;
    Z.prototype.getEditHandleType = Z.prototype.Ac;
    Z.prototype.setEditHandle = Z.prototype.Yg;
    Z.prototype.getSelectedNodes = Z.prototype.vf;
    Z.prototype.getPropertySummary = Z.prototype.Eg;
    Z.prototype.getViewRectangle = Z.prototype.Ig;
    Z.prototype.insertPage = Z.prototype.dd;
    Z.prototype.isLayerVisible = Z.prototype.me;
    Z.prototype.load = Z.prototype.xf;
    Z.prototype.lockUpdates = Z.prototype.yf;
    Z.prototype.moveDown = Z.prototype.zf;
    Z.prototype.moveUp = Z.prototype.Af;
    Z.prototype.newDocument = Z.prototype.Bf;
    Z.prototype.nextPage = Z.prototype.Cf;
    Z.prototype.on = Z.prototype.on;
    Z.prototype.onComplete = Z.prototype.Pg;
    Z.prototype.paste = Z.prototype.Df;
    Z.prototype.previousPage = Z.prototype.Sg;
    Z.prototype.print = Z.prototype.Ef;
    Z.prototype.redo = Z.prototype.dc;
    Z.prototype.redraw = Z.prototype.Ff;
    Z.prototype.resize = Z.prototype.resize;
    Z.prototype.save = Z.prototype.save;
    Z.prototype.setCursor = Z.prototype.Wg;
    Z.prototype.setToolProperty = Z.prototype.oc;
    Z.prototype.selectNodes = Z.prototype.Hf;
    Z.prototype.sendToBack = Z.prototype.If;
    Z.prototype.setActiveLayer = Z.prototype.ze;
    Z.prototype.setBackgroundBrowserImages = Z.prototype.Ug;
    Z.prototype.setConfig = Z.prototype.Vg;
    Z.prototype.setColour = Z.prototype.sd;
    Z.prototype.setCurrentPage = Z.prototype.Ec;
    Z.prototype.setCustomBackgroundFn = Z.prototype.Jf;
    Z.prototype.setDocumentSize = Z.prototype.de;
    Z.prototype.setDocumentSizeInTransaction = Z.prototype.Se;
    Z.prototype.setDomElement = Z.prototype.Xg;
    Z.prototype.setLayerName = Z.prototype.ah;
    Z.prototype.setPaperSize = Z.prototype.re;
    Z.prototype.setIconBrowserImages = Z.prototype.Zg;
    Z.prototype.setItemProperty = Z.prototype.$g;
    Z.prototype.setNodeProperties = Z.prototype.Kf;
    Z.prototype.setNodeProperty = Z.prototype.ee;
    Z.prototype.setNodeVisibility = Z.prototype.bh;
    Z.prototype.setOpacity = Z.prototype.Ue;
    Z.prototype.setPageView = Z.prototype.Mf;
    Z.prototype.setViewRectangle = Z.prototype.eh;
    Z.prototype.setZoom = Z.prototype.fh;
    Z.prototype.showLayer = Z.prototype.ud;
    Z.prototype.translateNode = Z.prototype.Ae;
    Z.prototype.rotateDocument = Z.prototype.Tg;
    Z.prototype.rotateNode = Z.prototype.Re;
    Z.prototype.scaleNode = Z.prototype.Gf;
    Z.prototype.setNodeTransform = Z.prototype.Lf;
    Z.prototype.undo = Z.prototype.eb;
    Z.prototype.ungroup = Z.prototype.Nf;
    Z.prototype.upload = Z.prototype.Of;
    Z.prototype.useArrowTool = Z.prototype.mh;
    Z.prototype.useBrushTool = Z.prototype.nh;
    Z.prototype.useCircleTool = Z.prototype.oh;
    Z.prototype.useCurveTool = Z.prototype.ph;
    Z.prototype.useCustomTool = Z.prototype.qh;
    Z.prototype.useEditHandleTool = Z.prototype.Pf;
    Z.prototype.useEllipseTool = Z.prototype.Qf;
    Z.prototype.useFreehandTool = Z.prototype.rh;
    Z.prototype.useStampTool = Z.prototype.Ah;
    Z.prototype.useLineTool = Z.prototype.sh;
    Z.prototype.usePanTool = Z.prototype.th;
    Z.prototype.usePickTool = Z.prototype.uh;
    Z.prototype.usePolygonTool = Z.prototype.Rf;
    Z.prototype.useQuadraticBezierTool = Z.prototype.vh;
    Z.prototype.useRectangleTool = Z.prototype.Sf;
    Z.prototype.useRoundRectTool = Z.prototype.wh;
    Z.prototype.useShapeBrushTool = Z.prototype.xh;
    Z.prototype.useShapeTool = Z.prototype.Tf;
    Z.prototype.useSplitWallTool = Z.prototype.Uf;
    Z.prototype.useStampLineTool = Z.prototype.zh;
    Z.prototype.useSquareTool = Z.prototype.yh;
    Z.prototype.useTextTool = Z.prototype.Bh;
    Z.prototype.useWallTool = Z.prototype.Vf;
    Z.prototype.zoomIn = Z.prototype.Wf;
    Z.prototype.zoomOut = Z.prototype.Xf;
    Di.prototype.createGroup = Di.prototype.Lc;

})();