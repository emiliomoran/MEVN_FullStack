(function (e) {
  function t(t) {
    for (
      var s, n, r = t[0], c = t[1], l = t[2], u = 0, m = [];
      u < r.length;
      u++
    )
      (n = r[u]),
        Object.prototype.hasOwnProperty.call(i, n) && i[n] && m.push(i[n][0]),
        (i[n] = 0);
    for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (e[s] = c[s]);
    d && d(t);
    while (m.length) m.shift()();
    return o.push.apply(o, l || []), a();
  }
  function a() {
    for (var e, t = 0; t < o.length; t++) {
      for (var a = o[t], s = !0, r = 1; r < a.length; r++) {
        var c = a[r];
        0 !== i[c] && (s = !1);
      }
      s && (o.splice(t--, 1), (e = n((n.s = a[0]))));
    }
    return e;
  }
  var s = {},
    i = { app: 0 },
    o = [];
  function n(t) {
    if (s[t]) return s[t].exports;
    var a = (s[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = s),
    (n.d = function (e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var s in e)
          n.d(
            a,
            s,
            function (t) {
              return e[t];
            }.bind(null, s)
          );
      return a;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/");
  var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var l = 0; l < r.length; l++) t(r[l]);
  var d = c;
  o.push([0, "chunk-vendors"]), a();
})({
  0: function (e, t, a) {
    e.exports = a("56d7");
  },
  "3cf5": function (e, t, a) {
    "use strict";
    var s = a("c163"),
      i = a.n(s);
    i.a;
  },
  4678: function (e, t, a) {
    var s = {
      "./af": "2bfb",
      "./af.js": "2bfb",
      "./ar": "8e73",
      "./ar-dz": "a356",
      "./ar-dz.js": "a356",
      "./ar-kw": "423e",
      "./ar-kw.js": "423e",
      "./ar-ly": "1cfd",
      "./ar-ly.js": "1cfd",
      "./ar-ma": "0a84",
      "./ar-ma.js": "0a84",
      "./ar-sa": "8230",
      "./ar-sa.js": "8230",
      "./ar-tn": "6d83",
      "./ar-tn.js": "6d83",
      "./ar.js": "8e73",
      "./az": "485c",
      "./az.js": "485c",
      "./be": "1fc1",
      "./be.js": "1fc1",
      "./bg": "84aa",
      "./bg.js": "84aa",
      "./bm": "a7fa",
      "./bm.js": "a7fa",
      "./bn": "9043",
      "./bn.js": "9043",
      "./bo": "d26a",
      "./bo.js": "d26a",
      "./br": "6887",
      "./br.js": "6887",
      "./bs": "2554",
      "./bs.js": "2554",
      "./ca": "d716",
      "./ca.js": "d716",
      "./cs": "3c0d",
      "./cs.js": "3c0d",
      "./cv": "03ec",
      "./cv.js": "03ec",
      "./cy": "9797",
      "./cy.js": "9797",
      "./da": "0f14",
      "./da.js": "0f14",
      "./de": "b469",
      "./de-at": "b3eb",
      "./de-at.js": "b3eb",
      "./de-ch": "bb71",
      "./de-ch.js": "bb71",
      "./de.js": "b469",
      "./dv": "598a",
      "./dv.js": "598a",
      "./el": "8d47",
      "./el.js": "8d47",
      "./en-au": "0e6b",
      "./en-au.js": "0e6b",
      "./en-ca": "3886",
      "./en-ca.js": "3886",
      "./en-gb": "39a6",
      "./en-gb.js": "39a6",
      "./en-ie": "e1d3",
      "./en-ie.js": "e1d3",
      "./en-il": "7333",
      "./en-il.js": "7333",
      "./en-in": "ec2e",
      "./en-in.js": "ec2e",
      "./en-nz": "6f50",
      "./en-nz.js": "6f50",
      "./en-sg": "b7e9",
      "./en-sg.js": "b7e9",
      "./eo": "65db",
      "./eo.js": "65db",
      "./es": "898b",
      "./es-do": "0a3c",
      "./es-do.js": "0a3c",
      "./es-us": "55c9",
      "./es-us.js": "55c9",
      "./es.js": "898b",
      "./et": "ec18",
      "./et.js": "ec18",
      "./eu": "0ff2",
      "./eu.js": "0ff2",
      "./fa": "8df4",
      "./fa.js": "8df4",
      "./fi": "81e9",
      "./fi.js": "81e9",
      "./fil": "d69a",
      "./fil.js": "d69a",
      "./fo": "0721",
      "./fo.js": "0721",
      "./fr": "9f26",
      "./fr-ca": "d9f8",
      "./fr-ca.js": "d9f8",
      "./fr-ch": "0e49",
      "./fr-ch.js": "0e49",
      "./fr.js": "9f26",
      "./fy": "7118",
      "./fy.js": "7118",
      "./ga": "5120",
      "./ga.js": "5120",
      "./gd": "f6b4",
      "./gd.js": "f6b4",
      "./gl": "8840",
      "./gl.js": "8840",
      "./gom-deva": "aaf2",
      "./gom-deva.js": "aaf2",
      "./gom-latn": "0caa",
      "./gom-latn.js": "0caa",
      "./gu": "e0c5",
      "./gu.js": "e0c5",
      "./he": "c7aa",
      "./he.js": "c7aa",
      "./hi": "dc4d",
      "./hi.js": "dc4d",
      "./hr": "4ba9",
      "./hr.js": "4ba9",
      "./hu": "5b14",
      "./hu.js": "5b14",
      "./hy-am": "d6b6",
      "./hy-am.js": "d6b6",
      "./id": "5038",
      "./id.js": "5038",
      "./is": "0558",
      "./is.js": "0558",
      "./it": "6e98",
      "./it-ch": "6f12",
      "./it-ch.js": "6f12",
      "./it.js": "6e98",
      "./ja": "079e",
      "./ja.js": "079e",
      "./jv": "b540",
      "./jv.js": "b540",
      "./ka": "201b",
      "./ka.js": "201b",
      "./kk": "6d79",
      "./kk.js": "6d79",
      "./km": "e81d",
      "./km.js": "e81d",
      "./kn": "3e92",
      "./kn.js": "3e92",
      "./ko": "22f8",
      "./ko.js": "22f8",
      "./ku": "2421",
      "./ku.js": "2421",
      "./ky": "9609",
      "./ky.js": "9609",
      "./lb": "440c",
      "./lb.js": "440c",
      "./lo": "b29d",
      "./lo.js": "b29d",
      "./lt": "26f9",
      "./lt.js": "26f9",
      "./lv": "b97c",
      "./lv.js": "b97c",
      "./me": "293c",
      "./me.js": "293c",
      "./mi": "688b",
      "./mi.js": "688b",
      "./mk": "6909",
      "./mk.js": "6909",
      "./ml": "02fb",
      "./ml.js": "02fb",
      "./mn": "958b",
      "./mn.js": "958b",
      "./mr": "39bd",
      "./mr.js": "39bd",
      "./ms": "ebe4",
      "./ms-my": "6403",
      "./ms-my.js": "6403",
      "./ms.js": "ebe4",
      "./mt": "1b45",
      "./mt.js": "1b45",
      "./my": "8689",
      "./my.js": "8689",
      "./nb": "6ce3",
      "./nb.js": "6ce3",
      "./ne": "3a39",
      "./ne.js": "3a39",
      "./nl": "facd",
      "./nl-be": "db29",
      "./nl-be.js": "db29",
      "./nl.js": "facd",
      "./nn": "b84c",
      "./nn.js": "b84c",
      "./oc-lnc": "167b",
      "./oc-lnc.js": "167b",
      "./pa-in": "f3ff",
      "./pa-in.js": "f3ff",
      "./pl": "8d57",
      "./pl.js": "8d57",
      "./pt": "f260",
      "./pt-br": "d2d4",
      "./pt-br.js": "d2d4",
      "./pt.js": "f260",
      "./ro": "972c",
      "./ro.js": "972c",
      "./ru": "957c",
      "./ru.js": "957c",
      "./sd": "6784",
      "./sd.js": "6784",
      "./se": "ffff",
      "./se.js": "ffff",
      "./si": "eda5",
      "./si.js": "eda5",
      "./sk": "7be6",
      "./sk.js": "7be6",
      "./sl": "8155",
      "./sl.js": "8155",
      "./sq": "c8f3",
      "./sq.js": "c8f3",
      "./sr": "cf1e",
      "./sr-cyrl": "13e9",
      "./sr-cyrl.js": "13e9",
      "./sr.js": "cf1e",
      "./ss": "52bd",
      "./ss.js": "52bd",
      "./sv": "5fbd",
      "./sv.js": "5fbd",
      "./sw": "74dc",
      "./sw.js": "74dc",
      "./ta": "3de5",
      "./ta.js": "3de5",
      "./te": "5cbb",
      "./te.js": "5cbb",
      "./tet": "576c",
      "./tet.js": "576c",
      "./tg": "3b1b",
      "./tg.js": "3b1b",
      "./th": "10e8",
      "./th.js": "10e8",
      "./tl-ph": "0f38",
      "./tl-ph.js": "0f38",
      "./tlh": "cf75",
      "./tlh.js": "cf75",
      "./tr": "0e81",
      "./tr.js": "0e81",
      "./tzl": "cf51",
      "./tzl.js": "cf51",
      "./tzm": "c109",
      "./tzm-latn": "b53d",
      "./tzm-latn.js": "b53d",
      "./tzm.js": "c109",
      "./ug-cn": "6117",
      "./ug-cn.js": "6117",
      "./uk": "ada2",
      "./uk.js": "ada2",
      "./ur": "5294",
      "./ur.js": "5294",
      "./uz": "2e8c",
      "./uz-latn": "010e",
      "./uz-latn.js": "010e",
      "./uz.js": "2e8c",
      "./vi": "2921",
      "./vi.js": "2921",
      "./x-pseudo": "fd7e",
      "./x-pseudo.js": "fd7e",
      "./yo": "7f33",
      "./yo.js": "7f33",
      "./zh-cn": "5c3a",
      "./zh-cn.js": "5c3a",
      "./zh-hk": "49ab",
      "./zh-hk.js": "49ab",
      "./zh-mo": "3a6c",
      "./zh-mo.js": "3a6c",
      "./zh-tw": "90ea",
      "./zh-tw.js": "90ea",
    };
    function i(e) {
      var t = o(e);
      return a(t);
    }
    function o(e) {
      if (!a.o(s, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return s[e];
    }
    (i.keys = function () {
      return Object.keys(s);
    }),
      (i.resolve = o),
      (e.exports = i),
      (i.id = "4678");
  },
  "56d7": function (e, t, a) {
    "use strict";
    a.r(t);
    a("e260"), a("e6cf"), a("cca6"), a("a79d");
    var s = a("2b0e"),
      i = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "v-app",
          { attrs: { id: "app" } },
          [
            e.logged
              ? a(
                  "v-navigation-drawer",
                  {
                    attrs: { clipped: e.$vuetify.breakpoint.lgAndUp, app: "" },
                    model: {
                      value: e.drawer,
                      callback: function (t) {
                        e.drawer = t;
                      },
                      expression: "drawer",
                    },
                  },
                  [
                    a(
                      "v-list",
                      { attrs: { dense: "" } },
                      [
                        e.isAdmin || e.isGrocer || e.isSeller
                          ? [
                              a(
                                "v-list-item",
                                { attrs: { to: { name: "Home" } } },
                                [
                                  a(
                                    "v-list-item-action",
                                    [a("v-icon", [e._v("home")])],
                                    1
                                  ),
                                  a("v-list-item-title", [e._v("Home")]),
                                ],
                                1
                              ),
                            ]
                          : e._e(),
                        e.isAdmin || e.isGrocer
                          ? [
                              a(
                                "v-list-group",
                                [
                                  a(
                                    "v-list-item",
                                    {
                                      attrs: { slot: "activator" },
                                      slot: "activator",
                                    },
                                    [
                                      a(
                                        "v-list-item-content",
                                        [
                                          a("v-list-item-title", [
                                            e._v("Warehouse"),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-list-item",
                                    { attrs: { to: { name: "Category" } } },
                                    [
                                      a(
                                        "v-list-item-action",
                                        [a("v-icon", [e._v("table_chart")])],
                                        1
                                      ),
                                      a(
                                        "v-list-item-content",
                                        [
                                          a("v-list-item-title", [
                                            e._v("Categories"),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-list-item",
                                    { attrs: { to: { name: "Item" } } },
                                    [
                                      a(
                                        "v-list-item-action",
                                        [a("v-icon", [e._v("table_chart")])],
                                        1
                                      ),
                                      a(
                                        "v-list-item-content",
                                        [
                                          a("v-list-item-title", [
                                            e._v("Items"),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          : e._e(),
                        e.isAdmin || e.isGrocer
                          ? [
                              a(
                                "v-list-group",
                                [
                                  a(
                                    "v-list-item",
                                    {
                                      attrs: { slot: "activator" },
                                      slot: "activator",
                                    },
                                    [
                                      a(
                                        "v-list-item-content",
                                        [
                                          a("v-list-item-title", [
                                            e._v("Purchases"),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-list-item",
                                    { attrs: { to: { name: "Income" } } },
                                    [
                                      a(
                                        "v-list-item-action",
                                        [a("v-icon", [e._v("table_chart")])],
                                        1
                                      ),
                                      a(
                                        "v-list-item-content",
                                        [
                                          a("v-list-item-title", [
                                            e._v("Incomes"),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-list-item",
                                    { attrs: { to: { name: "Provider" } } },
                                    [
                                      a(
                                        "v-list-item-action",
                                        [a("v-icon", [e._v("table_chart")])],
                                        1
                                      ),
                                      a(
                                        "v-list-item-content",
                                        [
                                          a("v-list-item-title", [
                                            e._v("Providers"),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          : e._e(),
                        e.isAdmin || e.isSeller
                          ? [
                              a(
                                "v-list-group",
                                [
                                  a(
                                    "v-list-item",
                                    {
                                      attrs: { slot: "activator" },
                                      slot: "activator",
                                    },
                                    [
                                      a(
                                        "v-list-item-content",
                                        [
                                          a("v-list-item-title", [
                                            e._v("Sales"),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-list-item",
                                    { attrs: { to: { name: "Sale" } } },
                                    [
                                      a(
                                        "v-list-item-action",
                                        [a("v-icon", [e._v("table_chart")])],
                                        1
                                      ),
                                      a(
                                        "v-list-item-content",
                                        [
                                          a("v-list-item-title", [
                                            e._v("Sales"),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-list-item",
                                    { attrs: { to: { name: "Customer" } } },
                                    [
                                      a(
                                        "v-list-item-action",
                                        [a("v-icon", [e._v("table_chart")])],
                                        1
                                      ),
                                      a(
                                        "v-list-item-content",
                                        [
                                          a("v-list-item-title", [
                                            e._v("Customers"),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          : e._e(),
                        e.isAdmin
                          ? [
                              a(
                                "v-list-group",
                                [
                                  a(
                                    "v-list-item",
                                    {
                                      attrs: { slot: "activator" },
                                      slot: "activator",
                                    },
                                    [
                                      a(
                                        "v-list-item-content",
                                        [
                                          a("v-list-item-title", [
                                            e._v("Access"),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-list-item",
                                    { attrs: { to: { name: "User" } } },
                                    [
                                      a(
                                        "v-list-item-action",
                                        [a("v-icon", [e._v("table_chart")])],
                                        1
                                      ),
                                      a(
                                        "v-list-item-content",
                                        [
                                          a("v-list-item-title", [
                                            e._v("Users"),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          : e._e(),
                        e.isAdmin || e.isGrocer || e.isSeller
                          ? [
                              a(
                                "v-list-group",
                                [
                                  a(
                                    "v-list-item",
                                    {
                                      attrs: { slot: "activator" },
                                      slot: "activator",
                                    },
                                    [
                                      a(
                                        "v-list-item-content",
                                        [
                                          a("v-list-item-title", [
                                            e._v("Consult"),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-list-item",
                                    { attrs: { to: { name: "" } } },
                                    [
                                      a(
                                        "v-list-item-action",
                                        [a("v-icon", [e._v("table_chart")])],
                                        1
                                      ),
                                      a(
                                        "v-list-item-content",
                                        [
                                          a("v-list-item-title", [
                                            e._v("Purchases"),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-list-item",
                                    { attrs: { to: { name: "" } } },
                                    [
                                      a(
                                        "v-list-item-action",
                                        [a("v-icon", [e._v("table_chart")])],
                                        1
                                      ),
                                      a(
                                        "v-list-item-content",
                                        [
                                          a("v-list-item-title", [
                                            e._v("Sells"),
                                          ]),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          : e._e(),
                      ],
                      2
                    ),
                  ],
                  1
                )
              : e._e(),
            a(
              "v-app-bar",
              {
                attrs: {
                  "clipped-left": e.$vuetify.breakpoint.lgAndUp,
                  app: "",
                  color: "blue darken-3",
                  dark: "",
                },
              },
              [
                a(
                  "v-toolbar-title",
                  { staticClass: "ml-0 pl-3", staticStyle: { width: "300px" } },
                  [
                    a("v-app-bar-nav-icon", {
                      on: {
                        click: function (t) {
                          t.stopPropagation(), (e.drawer = !e.drawer);
                        },
                      },
                    }),
                    a("span", { staticClass: "hidden-sm-and-down" }, [
                      e._v("System"),
                    ]),
                  ],
                  1
                ),
                a("v-spacer"),
                e.logged
                  ? a(
                      "v-btn",
                      {
                        attrs: { icon: "" },
                        on: {
                          click: function (t) {
                            return e.logout();
                          },
                        },
                      },
                      [a("v-icon", [e._v("logout")])],
                      1
                    )
                  : a(
                      "v-btn",
                      { attrs: { to: { name: "Login" }, icon: "" } },
                      [a("v-icon", [e._v("apps")])],
                      1
                    ),
              ],
              1
            ),
            a(
              "v-content",
              [
                a(
                  "v-container",
                  { attrs: { fluid: "", "fill-height": "" } },
                  [
                    a(
                      "v-slide-y-transition",
                      { attrs: { mode: "out-in" } },
                      [a("router-view")],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            a(
              "v-footer",
              {
                staticClass: "font-weight-medium",
                attrs: { padless: "", color: "primary" },
              },
              [
                a(
                  "v-col",
                  { staticClass: "text-center", attrs: { cols: "12" } },
                  [
                    e._v(" " + e._s(new Date().getFullYear()) + " — "),
                    a("strong", [e._v("OdemoIT")]),
                  ]
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      o = [],
      n = {
        name: "App",
        data: function () {
          return { drawer: !0 };
        },
        computed: {
          logged: function () {
            return this.$store.state.user;
          },
          isAdmin: function () {
            return (
              this.$store.state.user && "Admin" === this.$store.state.user.rol
            );
          },
          isGrocer: function () {
            return (
              this.$store.state.user && "Grocer" === this.$store.state.user.rol
            );
          },
          isSeller: function () {
            return (
              this.$store.state.user && "Seller" === this.$store.state.user.rol
            );
          },
        },
        created: function () {
          this.$store.dispatch("autoLogin");
        },
        methods: {
          logout: function () {
            this.$store.dispatch("logout");
          },
        },
      },
      r = n,
      c = a("2877"),
      l = a("6544"),
      d = a.n(l),
      u = a("7496"),
      m = a("40dc"),
      v = a("5bc1"),
      h = a("8336"),
      f = a("62ad"),
      p = a("a523"),
      b = a("a75b"),
      _ = a("553a"),
      x = a("132d"),
      I = a("8860"),
      g = a("56b0"),
      k = a("da13"),
      y = a("1800"),
      w = a("5d23"),
      C = a("f774"),
      T = a("0789"),
      V = a("2fa4"),
      j = a("2a7f"),
      D = Object(c["a"])(r, i, o, !1, null, null, null),
      A = D.exports;
    d()(D, {
      VApp: u["a"],
      VAppBar: m["a"],
      VAppBarNavIcon: v["a"],
      VBtn: h["a"],
      VCol: f["a"],
      VContainer: p["a"],
      VContent: b["a"],
      VFooter: _["a"],
      VIcon: x["a"],
      VList: I["a"],
      VListGroup: g["a"],
      VListItem: k["a"],
      VListItemAction: y["a"],
      VListItemContent: w["a"],
      VListItemTitle: w["b"],
      VNavigationDrawer: C["a"],
      VSlideYTransition: T["e"],
      VSpacer: V["a"],
      VToolbarTitle: j["a"],
    });
    a("45fc");
    var S = a("8c4f"),
      P = a("2f62"),
      N = a("04e1"),
      $ = a.n(N);
    s["a"].use(P["a"]);
    var R = new P["a"].Store({
        state: { token: null, user: null },
        mutations: {
          setToken: function (e, t) {
            e.token = t;
          },
          setUser: function (e, t) {
            e.user = t;
          },
        },
        actions: {
          saveToken: function (e, t) {
            var a = e.commit;
            a("setToken", t),
              a("setUser", $()(t)),
              localStorage.setItem("token", t);
          },
          autoLogin: function (e) {
            var t = e.commit,
              a = localStorage.getItem("token");
            a &&
              (t("setToken", a),
              t("setUser", $()(a)),
              ot.push({ name: "Home" }));
          },
          logout: function (e) {
            var t = e.commit;
            t("setToken", null),
              t("setUser", null),
              localStorage.removeItem("token"),
              ot.push({ name: "Login" });
          },
        },
        modules: {},
      }),
      z = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "v-container",
          { attrs: { "grid-list-m": "" } },
          [
            a(
              "v-layout",
              { attrs: { wrap: "" } },
              [
                a("v-flex", { attrs: { xs12: "", sm12: "", md12: "" } }, [
                  a("div", { staticClass: "ct-chart" }, [
                    a("canvas", { attrs: { id: "myChart" } }),
                  ]),
                ]),
              ],
              1
            ),
          ],
          1
        );
      },
      q = [],
      O = (a("d81d"), a("d3b7"), a("ddb0"), a("bc3a")),
      E = a.n(O),
      M = a("30ef"),
      F = a.n(M),
      L = {
        data: function () {
          return { values: [], months: [], totals: [] };
        },
        created: function () {
          this.initialize();
        },
        methods: {
          initialize: function () {
            var e = this;
            console.log("initialize");
            var t = { Token: this.$store.state.token },
              a = { headers: t };
            E.a
              .get("/sale/report-12-months", a)
              .then(function (t) {
                (e.values = t.data), e.graph();
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          graph: function () {
            var e = this;
            this.values.map(function (t) {
              var a = "";
              switch (parseInt(t._id.month)) {
                case 1:
                  a = "January";
                  break;
                case 2:
                  a = "Febrary";
                  break;
                case 3:
                  a = "March";
                  break;
                case 4:
                  a = "April";
                  break;
                case 5:
                  a = "May";
                  break;
                case 6:
                  a = "June";
                  break;
                case 7:
                  a = "July";
                  break;
                case 8:
                  a = "August";
                  break;
                case 9:
                  a = "September";
                  break;
                case 10:
                  a = "October";
                  break;
                case 11:
                  a = "November";
                  break;
                case 12:
                  a = "December";
                  break;
                default:
                  a = "Error";
              }
              e.months.push(a + " " + t._id.year), e.totals.push(t.total);
            });
            var t = document.getElementById("myChart");
            new F.a(t, {
              type: "bar",
              data: {
                labels: this.months,
                datasets: [
                  {
                    label: "Sales 12 months ago",
                    data: this.totals,
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              },
              options: { scales: { yAxes: [{ ticks: { beginAtZero: !0 } }] } },
            });
          },
        },
      },
      U = L,
      G = a("0e8f"),
      H = a("a722"),
      B = Object(c["a"])(U, z, q, !1, null, null, null),
      K = B.exports;
    d()(B, { VContainer: p["a"], VFlex: G["a"], VLayout: H["a"] });
    var W = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "v-layout",
          { attrs: { "align-start": "" } },
          [
            a(
              "v-flex",
              [
                a("v-data-table", {
                  staticClass: "elevation-1",
                  attrs: {
                    headers: e.headers,
                    items: e.categories,
                    search: e.search,
                  },
                  scopedSlots: e._u([
                    {
                      key: "top",
                      fn: function () {
                        return [
                          a(
                            "v-toolbar",
                            { attrs: { flat: "", color: "white" } },
                            [
                              a("v-toolbar-title", [e._v("Categories")]),
                              a("v-divider", {
                                staticClass: "mx-4",
                                attrs: { inset: "", vertical: "" },
                              }),
                              a("v-spacer"),
                              a("v-text-field", {
                                staticClass: "text-xs-center",
                                attrs: {
                                  "append-icon": "search",
                                  label: "Search",
                                  "single-line": "",
                                  "hide-details": "",
                                },
                                model: {
                                  value: e.search,
                                  callback: function (t) {
                                    e.search = t;
                                  },
                                  expression: "search",
                                },
                              }),
                              a("v-spacer"),
                              a(
                                "v-dialog",
                                {
                                  attrs: { "max-width": "500px" },
                                  scopedSlots: e._u([
                                    {
                                      key: "activator",
                                      fn: function (t) {
                                        var s = t.on;
                                        return [
                                          a(
                                            "v-btn",
                                            e._g(
                                              {
                                                staticClass: "mb-2",
                                                attrs: {
                                                  color: "primary",
                                                  dark: "",
                                                },
                                              },
                                              s
                                            ),
                                            [e._v("New")]
                                          ),
                                        ];
                                      },
                                    },
                                  ]),
                                  model: {
                                    value: e.dialog,
                                    callback: function (t) {
                                      e.dialog = t;
                                    },
                                    expression: "dialog",
                                  },
                                },
                                [
                                  a(
                                    "v-card",
                                    [
                                      a("v-card-title", [
                                        a("span", { staticClass: "headline" }, [
                                          e._v(e._s(e.formTitle)),
                                        ]),
                                      ]),
                                      a(
                                        "v-card-text",
                                        [
                                          a(
                                            "v-container",
                                            [
                                              a(
                                                "v-form",
                                                {
                                                  ref: "form",
                                                  model: {
                                                    value: e.valid,
                                                    callback: function (t) {
                                                      e.valid = t;
                                                    },
                                                    expression: "valid",
                                                  },
                                                },
                                                [
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              counter: 50,
                                                              rules:
                                                                e.nameRules,
                                                              label: "Name",
                                                              required: "",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .name,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "name",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.name",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              counter: 255,
                                                              rules:
                                                                e.descriptionRules,
                                                              label:
                                                                "Description",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .description,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "description",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.description",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      a(
                                        "v-card-actions",
                                        [
                                          a("v-spacer"),
                                          a(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "blue darken-1",
                                                text: "",
                                              },
                                              on: { click: e.close },
                                            },
                                            [e._v("Cancel")]
                                          ),
                                          a(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "blue darken-1",
                                                text: "",
                                              },
                                              on: { click: e.save },
                                            },
                                            [e._v("Save")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-dialog",
                                {
                                  attrs: { "max-width": "500px" },
                                  model: {
                                    value: e.modal,
                                    callback: function (t) {
                                      e.modal = t;
                                    },
                                    expression: "modal",
                                  },
                                },
                                [
                                  a(
                                    "v-card",
                                    [
                                      a("v-card-title", [
                                        1 === e.stateItem.action
                                          ? a(
                                              "span",
                                              { staticClass: "headline" },
                                              [e._v("Activate category")]
                                            )
                                          : e._e(),
                                        2 === e.stateItem.action
                                          ? a(
                                              "span",
                                              { staticClass: "headline" },
                                              [e._v("Deactivate category")]
                                            )
                                          : e._e(),
                                      ]),
                                      a("v-card-text", [
                                        e._v(" Are you sure "),
                                        1 === e.stateItem.action
                                          ? a("span", [e._v("activate")])
                                          : e._e(),
                                        2 === e.stateItem.action
                                          ? a("span", [e._v("deactivate")])
                                          : e._e(),
                                        e._v(
                                          " the category " +
                                            e._s(e.stateItem.name) +
                                            " "
                                        ),
                                      ]),
                                      a(
                                        "v-card-actions",
                                        [
                                          a("v-spacer"),
                                          a(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "grey darken-1",
                                                text: "",
                                              },
                                              on: { click: e.closeModal },
                                            },
                                            [e._v("Cancel")]
                                          ),
                                          1 === e.stateItem.action
                                            ? a(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "red darken-1",
                                                    text: "",
                                                  },
                                                  on: { click: e.activate },
                                                },
                                                [e._v("Activate")]
                                              )
                                            : e._e(),
                                          2 === e.stateItem.action
                                            ? a(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "red darken-1",
                                                    text: "",
                                                  },
                                                  on: { click: e.deactivate },
                                                },
                                                [e._v("Deactivate")]
                                              )
                                            : e._e(),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                    {
                      key: "item.state",
                      fn: function (t) {
                        var s = t.item;
                        return [
                          s.state
                            ? a("div", [
                                a("span", { staticClass: "blue--text" }, [
                                  e._v("Active"),
                                ]),
                              ])
                            : a("div", [
                                a("span", { staticClass: "red--text" }, [
                                  e._v("Inactive"),
                                ]),
                              ]),
                        ];
                      },
                    },
                    {
                      key: "item.actions",
                      fn: function (t) {
                        var s = t.item;
                        return [
                          a(
                            "v-icon",
                            {
                              staticClass: "mr-2",
                              attrs: { small: "" },
                              on: {
                                click: function (t) {
                                  return e.editItem(s);
                                },
                              },
                            },
                            [e._v("edit")]
                          ),
                          s.state
                            ? [
                                a(
                                  "v-icon",
                                  {
                                    attrs: { small: "" },
                                    on: {
                                      click: function (t) {
                                        return e.activateDeactivate(2, s);
                                      },
                                    },
                                  },
                                  [e._v("block")]
                                ),
                              ]
                            : [
                                a(
                                  "v-icon",
                                  {
                                    attrs: { small: "" },
                                    on: {
                                      click: function (t) {
                                        return e.activateDeactivate(1, s);
                                      },
                                    },
                                  },
                                  [e._v("check")]
                                ),
                              ],
                          a(
                            "v-icon",
                            {
                              attrs: { small: "" },
                              on: {
                                click: function (t) {
                                  return e.deleteItem(s);
                                },
                              },
                            },
                            [e._v("delete")]
                          ),
                        ];
                      },
                    },
                    {
                      key: "no-data",
                      fn: function () {
                        return [
                          a(
                            "v-btn",
                            {
                              attrs: { color: "primary" },
                              on: { click: e.initialize },
                            },
                            [e._v("Reset")]
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                  ]),
                }),
              ],
              1
            ),
          ],
          1
        );
      },
      X = [],
      J =
        (a("a4d3"),
        a("e01a"),
        a("c975"),
        a("a434"),
        a("b0c0"),
        {
          data: function () {
            return {
              dialog: !1,
              search: "",
              categories: [],
              headers: [
                { text: "Name", value: "name", sortable: !0 },
                { text: "Description", value: "description", sortable: !1 },
                { text: "State", value: "state", sortable: !1 },
                { text: "Actions", value: "actions", sortable: !1 },
              ],
              editedIndex: -1,
              editedItem: { _id: "", name: "", description: "" },
              defaultItem: { _id: "", name: "", description: "" },
              valid: !0,
              nameRules: [
                function (e) {
                  return !!e || "Name is required";
                },
                function (e) {
                  return (
                    (e && e.length <= 50) ||
                    "Name must be less than 50 characters"
                  );
                },
              ],
              descriptionRules: [
                function (e) {
                  return (
                    e.length <= 255 ||
                    "Description must be less than 255 characters"
                  );
                },
              ],
              modal: !1,
              stateItem: { _id: "", name: "", action: 0 },
              stateDefaultItem: { _id: "", name: "", action: 0 },
            };
          },
          computed: {
            formTitle: function () {
              return -1 === this.editedIndex ? "New" : "Edit";
            },
          },
          watch: {
            dialog: function (e) {
              e || this.close();
            },
          },
          created: function () {
            this.initialize();
          },
          methods: {
            initialize: function () {
              var e = this,
                t = { Token: this.$store.state.token },
                a = { headers: t };
              E.a
                .get("/category/list", a)
                .then(function (t) {
                  e.categories = t.data;
                })
                .catch(function (e) {
                  console.log(e);
                });
            },
            editItem: function (e) {
              (this.editedIndex = this.categories.indexOf(e)),
                (this.editedItem = Object.assign({}, e)),
                console.log(this.editedItem),
                (this.dialog = !0);
            },
            deleteItem: function (e) {
              var t = this.categories.indexOf(e);
              confirm("Are you sure you want to delete this item?") &&
                this.categories.splice(t, 1);
            },
            close: function () {
              var e = this;
              (this.dialog = !1),
                setTimeout(function () {
                  (e.editedItem = Object.assign({}, e.defaultItem)),
                    (e.editedIndex = -1),
                    e.$refs.form.resetValidation();
                }, 300);
            },
            save: function () {
              var e = this;
              if (this.$refs.form.validate()) {
                var t = { Token: this.$store.state.token },
                  a = { headers: t };
                this.editedIndex > -1
                  ? (console.log(this.editedItem),
                    E.a
                      .put(
                        "/category/update",
                        {
                          _id: this.editedItem._id,
                          name: this.editedItem.name,
                          description: this.editedItem.description,
                        },
                        a
                      )
                      .then(function (t) {
                        e.close(), e.initialize();
                      })
                      .catch(function (e) {
                        console.log(e);
                      }))
                  : (console.log(this.editedItem),
                    E.a
                      .post(
                        "/category/add",
                        {
                          name: this.editedItem.name,
                          description: this.editedItem.description,
                        },
                        a
                      )
                      .then(function (t) {
                        e.close(), e.initialize();
                      })
                      .catch(function (e) {
                        console.log(e);
                      })),
                  this.close();
              }
            },
            activateDeactivate: function (e, t) {
              (this.modal = !0),
                (this.stateItem._id = t._id),
                (this.stateItem.name = t.name),
                (this.stateItem.action = e);
            },
            closeModal: function () {
              var e = this;
              (this.modal = !1),
                setTimeout(function () {
                  e.stateItem = Object.assign({}, e.stateDefaultItem);
                }, 300);
            },
            activate: function () {
              var e = this,
                t = { Token: this.$store.state.token },
                a = { headers: t };
              E.a
                .put("/category/activate", { _id: this.stateItem._id }, a)
                .then(function (t) {
                  e.closeModal(), e.initialize();
                })
                .catch(function (e) {
                  console.log(e);
                });
            },
            deactivate: function () {
              var e = this,
                t = { Token: this.$store.state.token },
                a = { headers: t };
              E.a
                .put("/category/deactivate", { _id: this.stateItem._id }, a)
                .then(function (t) {
                  e.closeModal(), e.initialize();
                })
                .catch(function (e) {
                  console.log(e);
                });
            },
          },
        }),
      Q = J,
      Z = a("b0af"),
      Y = a("99d9"),
      ee = a("8fea"),
      te = a("169a"),
      ae = a("ce7e"),
      se = a("4bd4"),
      ie = a("0fd9"),
      oe = a("8654"),
      ne = a("71d9"),
      re = Object(c["a"])(Q, W, X, !1, null, null, null),
      ce = re.exports;
    d()(re, {
      VBtn: h["a"],
      VCard: Z["a"],
      VCardActions: Y["a"],
      VCardText: Y["b"],
      VCardTitle: Y["c"],
      VCol: f["a"],
      VContainer: p["a"],
      VDataTable: ee["a"],
      VDialog: te["a"],
      VDivider: ae["a"],
      VFlex: G["a"],
      VForm: se["a"],
      VIcon: x["a"],
      VLayout: H["a"],
      VRow: ie["a"],
      VSpacer: V["a"],
      VTextField: oe["a"],
      VToolbar: ne["a"],
      VToolbarTitle: j["a"],
    });
    var le = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "v-layout",
          { attrs: { "align-center": "", "justify-center": "" } },
          [
            a(
              "v-flex",
              { attrs: { xs12: "", sm8: "", md6: "", lg5: "", x14: "" } },
              [
                a(
                  "v-card",
                  [
                    a(
                      "v-toolbar",
                      { attrs: { dark: "", color: "blue darken-3" } },
                      [a("v-toolbar-title", [e._v("Login")])],
                      1
                    ),
                    a(
                      "v-card-text",
                      [
                        a("v-text-field", {
                          attrs: {
                            autofocus: "",
                            color: "accent",
                            label: "Email",
                            required: "",
                          },
                          model: {
                            value: e.email,
                            callback: function (t) {
                              e.email = t;
                            },
                            expression: "email",
                          },
                        }),
                        a("v-text-field", {
                          attrs: {
                            type: "password",
                            color: "accent",
                            label: "Password",
                            required: "",
                          },
                          model: {
                            value: e.password,
                            callback: function (t) {
                              e.password = t;
                            },
                            expression: "password",
                          },
                        }),
                        e.errorMessage
                          ? a("v-flex", { staticClass: "red--text" }, [
                              e._v(" " + e._s(e.errorMessage) + " "),
                            ])
                          : e._e(),
                      ],
                      1
                    ),
                    a(
                      "v-card-actions",
                      { staticClass: "px-3 pb-3" },
                      [
                        a(
                          "v-flex",
                          { attrs: { "text-xs-right": "" } },
                          [
                            a(
                              "v-btn",
                              {
                                attrs: { color: "primary" },
                                on: { click: e.login },
                              },
                              [e._v("Login")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      de = [],
      ue = {
        data: function () {
          return { email: "", password: "", errorMessage: "" };
        },
        methods: {
          login: function () {
            var e = this;
            E.a
              .post("user/login", {
                email: this.email,
                password: this.password,
              })
              .then(function (e) {
                return e.data;
              })
              .then(function (t) {
                e.$store.dispatch("saveToken", t.tokenReturn),
                  e.$router.push({ name: "Home" });
              })
              .catch(function (t) {
                404 === t.response.status
                  ? (e.errorMessage = "User not found or invalid credentials!")
                  : (e.errorMessage = "Error in the server!");
              });
          },
        },
      },
      me = ue,
      ve = Object(c["a"])(me, le, de, !1, null, null, null),
      he = ve.exports;
    d()(ve, {
      VBtn: h["a"],
      VCard: Z["a"],
      VCardActions: Y["a"],
      VCardText: Y["b"],
      VFlex: G["a"],
      VLayout: H["a"],
      VTextField: oe["a"],
      VToolbar: ne["a"],
      VToolbarTitle: j["a"],
    });
    var fe = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "v-layout",
          { attrs: { "align-start": "" } },
          [
            a(
              "v-flex",
              [
                a("v-data-table", {
                  staticClass: "elevation-1",
                  attrs: {
                    headers: e.headers,
                    items: e.users,
                    search: e.search,
                  },
                  scopedSlots: e._u([
                    {
                      key: "top",
                      fn: function () {
                        return [
                          a(
                            "v-toolbar",
                            { attrs: { flat: "", color: "white" } },
                            [
                              a("v-toolbar-title", [e._v("Users")]),
                              a("v-divider", {
                                staticClass: "mx-4",
                                attrs: { inset: "", vertical: "" },
                              }),
                              a("v-spacer"),
                              a("v-text-field", {
                                staticClass: "text-xs-center",
                                attrs: {
                                  "append-icon": "search",
                                  label: "Search",
                                  "single-line": "",
                                  "hide-details": "",
                                },
                                model: {
                                  value: e.search,
                                  callback: function (t) {
                                    e.search = t;
                                  },
                                  expression: "search",
                                },
                              }),
                              a("v-spacer"),
                              a(
                                "v-dialog",
                                {
                                  attrs: { "max-width": "500px" },
                                  scopedSlots: e._u([
                                    {
                                      key: "activator",
                                      fn: function (t) {
                                        var s = t.on;
                                        return [
                                          a(
                                            "v-btn",
                                            e._g(
                                              {
                                                staticClass: "mb-2",
                                                attrs: {
                                                  color: "primary",
                                                  dark: "",
                                                },
                                              },
                                              s
                                            ),
                                            [e._v("New")]
                                          ),
                                        ];
                                      },
                                    },
                                  ]),
                                  model: {
                                    value: e.dialog,
                                    callback: function (t) {
                                      e.dialog = t;
                                    },
                                    expression: "dialog",
                                  },
                                },
                                [
                                  a(
                                    "v-card",
                                    [
                                      a("v-card-title", [
                                        a("span", { staticClass: "headline" }, [
                                          e._v(e._s(e.formTitle)),
                                        ]),
                                      ]),
                                      a(
                                        "v-card-text",
                                        [
                                          a(
                                            "v-container",
                                            [
                                              a(
                                                "v-form",
                                                {
                                                  ref: "form",
                                                  model: {
                                                    value: e.valid,
                                                    callback: function (t) {
                                                      e.valid = t;
                                                    },
                                                    expression: "valid",
                                                  },
                                                },
                                                [
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-select", {
                                                            attrs: {
                                                              items: e.roles,
                                                              rules: [
                                                                function (e) {
                                                                  return (
                                                                    !!e ||
                                                                    "Rol is required"
                                                                  );
                                                                },
                                                              ],
                                                              label: "Rol",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .rol,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "rol",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.rol",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              counter: 50,
                                                              rules:
                                                                e.nameRules,
                                                              label: "Name",
                                                              required: "",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .name,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "name",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.name",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-select", {
                                                            attrs: {
                                                              items:
                                                                e.doc_types,
                                                              rules: [
                                                                function (e) {
                                                                  return (
                                                                    !!e ||
                                                                    "Doc type is required"
                                                                  );
                                                                },
                                                              ],
                                                              label: "Doc Type",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .doc_type,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "doc_type",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.doc_type",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              counter: 20,
                                                              rules:
                                                                e.docNumberRules,
                                                              label:
                                                                "Doc Number",
                                                              required: "",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .doc_num,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "doc_num",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.doc_num",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              counter: 70,
                                                              rules:
                                                                e.addressRules,
                                                              label: "Address",
                                                              required: "",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .address,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "address",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.address",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              counter: 20,
                                                              rules:
                                                                e.phoneRules,
                                                              label: "Phone",
                                                              required: "",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .phone,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "phone",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.phone",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              counter: 50,
                                                              rules:
                                                                e.emailRules,
                                                              label: "Email",
                                                              required: "",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .email,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "email",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.email",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              type: "password",
                                                              counter: 64,
                                                              rules:
                                                                e.passwordRules,
                                                              label: "Password",
                                                              required: "",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .password,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "password",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.password",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      a(
                                        "v-card-actions",
                                        [
                                          a("v-spacer"),
                                          a(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "blue darken-1",
                                                text: "",
                                              },
                                              on: { click: e.close },
                                            },
                                            [e._v("Cancel")]
                                          ),
                                          a(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "blue darken-1",
                                                text: "",
                                              },
                                              on: { click: e.save },
                                            },
                                            [e._v("Save")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-dialog",
                                {
                                  attrs: { "max-width": "500px" },
                                  model: {
                                    value: e.modal,
                                    callback: function (t) {
                                      e.modal = t;
                                    },
                                    expression: "modal",
                                  },
                                },
                                [
                                  a(
                                    "v-card",
                                    [
                                      a("v-card-title", [
                                        1 === e.stateItem.action
                                          ? a(
                                              "span",
                                              { staticClass: "headline" },
                                              [e._v("Activate category")]
                                            )
                                          : e._e(),
                                        2 === e.stateItem.action
                                          ? a(
                                              "span",
                                              { staticClass: "headline" },
                                              [e._v("Deactivate category")]
                                            )
                                          : e._e(),
                                      ]),
                                      a("v-card-text", [
                                        e._v(" Are you sure "),
                                        1 === e.stateItem.action
                                          ? a("span", [e._v("activate")])
                                          : e._e(),
                                        2 === e.stateItem.action
                                          ? a("span", [e._v("deactivate")])
                                          : e._e(),
                                        e._v(
                                          " the category " +
                                            e._s(e.stateItem.name) +
                                            " "
                                        ),
                                      ]),
                                      a(
                                        "v-card-actions",
                                        [
                                          a("v-spacer"),
                                          a(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "grey darken-1",
                                                text: "",
                                              },
                                              on: { click: e.closeModal },
                                            },
                                            [e._v("Cancel")]
                                          ),
                                          1 === e.stateItem.action
                                            ? a(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "red darken-1",
                                                    text: "",
                                                  },
                                                  on: { click: e.activate },
                                                },
                                                [e._v("Activate")]
                                              )
                                            : e._e(),
                                          2 === e.stateItem.action
                                            ? a(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "red darken-1",
                                                    text: "",
                                                  },
                                                  on: { click: e.deactivate },
                                                },
                                                [e._v("Deactivate")]
                                              )
                                            : e._e(),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                    {
                      key: "item.state",
                      fn: function (t) {
                        var s = t.item;
                        return [
                          s.state
                            ? a("div", [
                                a("span", { staticClass: "blue--text" }, [
                                  e._v("Active"),
                                ]),
                              ])
                            : a("div", [
                                a("span", { staticClass: "red--text" }, [
                                  e._v("Inactive"),
                                ]),
                              ]),
                        ];
                      },
                    },
                    {
                      key: "item.actions",
                      fn: function (t) {
                        var s = t.item;
                        return [
                          a(
                            "v-icon",
                            {
                              staticClass: "mr-2",
                              attrs: { small: "" },
                              on: {
                                click: function (t) {
                                  return e.editItem(s);
                                },
                              },
                            },
                            [e._v("edit")]
                          ),
                          s.state
                            ? [
                                a(
                                  "v-icon",
                                  {
                                    attrs: { small: "" },
                                    on: {
                                      click: function (t) {
                                        return e.activateDeactivate(2, s);
                                      },
                                    },
                                  },
                                  [e._v("block")]
                                ),
                              ]
                            : [
                                a(
                                  "v-icon",
                                  {
                                    attrs: { small: "" },
                                    on: {
                                      click: function (t) {
                                        return e.activateDeactivate(1, s);
                                      },
                                    },
                                  },
                                  [e._v("check")]
                                ),
                              ],
                          a(
                            "v-icon",
                            {
                              attrs: { small: "" },
                              on: {
                                click: function (t) {
                                  return e.deleteItem(s);
                                },
                              },
                            },
                            [e._v("delete")]
                          ),
                        ];
                      },
                    },
                    {
                      key: "no-data",
                      fn: function () {
                        return [
                          a(
                            "v-btn",
                            {
                              attrs: { color: "primary" },
                              on: { click: e.initialize },
                            },
                            [e._v("Reset")]
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                  ]),
                }),
              ],
              1
            ),
          ],
          1
        );
      },
      pe = [],
      be = {
        data: function () {
          return {
            dialog: !1,
            search: "",
            users: [],
            roles: ["Admin", "Grocer", "Seller"],
            doc_types: ["DNI", "RUC", "PASAPORTE", "CEDULA"],
            headers: [
              { text: "Rol", value: "rol", sortable: !0 },
              { text: "Name", value: "name", sortable: !0 },
              { text: "Doc Type", value: "doc_type", sortable: !0 },
              { text: "Doc Number", value: "doc_num", sortable: !1 },
              { text: "Address", value: "address", sortable: !1 },
              { text: "Phone", value: "phone", sortable: !1 },
              { text: "Email", value: "email", sortable: !1 },
              { text: "State", value: "state", sortable: !1 },
              { text: "Actions", value: "actions", sortable: !1 },
            ],
            editedIndex: -1,
            editedItem: {
              _id: "",
              name: "",
              rol: "",
              doc_type: "",
              doc_num: "",
              address: "",
              phone: "",
              email: "",
              password: "",
            },
            defaultItem: {
              _id: "",
              name: "",
              rol: "",
              doc_type: "",
              doc_num: "",
              address: "",
              phone: "",
              email: "",
              password: "",
            },
            valid: !0,
            nameRules: [
              function (e) {
                return !!e || "Name is required";
              },
              function (e) {
                return (
                  (e && e.length <= 50) ||
                  "Name must be less than 50 characters"
                );
              },
            ],
            docNumberRules: [
              function (e) {
                return !!e || "Doc number is required";
              },
              function (e) {
                return (
                  (e && e.length <= 20) ||
                  "Doc number must be less than 20 characters"
                );
              },
            ],
            addressRules: [
              function (e) {
                return !!e || "Address is required";
              },
              function (e) {
                return (
                  (e && e.length <= 70) ||
                  "Address must be less than 70 characters"
                );
              },
            ],
            phoneRules: [
              function (e) {
                return !!e || "Phone is required";
              },
              function (e) {
                return (
                  (e && e.length <= 20) ||
                  "Phone must be less than 20 characters"
                );
              },
            ],
            emailRules: [
              function (e) {
                return !!e || "Email is required";
              },
              function (e) {
                return (
                  (e && e.length <= 50) ||
                  "Email must be less than 50 characters"
                );
              },
            ],
            passwordRules: [
              function (e) {
                return !!e || "Password is required";
              },
              function (e) {
                return (
                  (e && e.length <= 64) ||
                  "Password must be less than 64 characters"
                );
              },
            ],
            modal: !1,
            stateItem: { _id: "", name: "", action: 0 },
            stateDefaultItem: { _id: "", name: "", action: 0 },
          };
        },
        computed: {
          formTitle: function () {
            return -1 === this.editedIndex ? "New" : "Edit";
          },
        },
        watch: {
          dialog: function (e) {
            e || this.close();
          },
        },
        created: function () {
          this.initialize();
        },
        methods: {
          initialize: function () {
            var e = this,
              t = { Token: this.$store.state.token },
              a = { headers: t };
            E.a
              .get("/user/list", a)
              .then(function (t) {
                e.users = t.data;
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          editItem: function (e) {
            (this.editedIndex = this.users.indexOf(e)),
              (this.editedItem = Object.assign({}, e)),
              console.log(this.editedItem),
              (this.dialog = !0);
          },
          deleteItem: function (e) {
            var t = this.categories.indexOf(e);
            confirm("Are you sure you want to delete this item?") &&
              this.categories.splice(t, 1);
          },
          close: function () {
            var e = this;
            (this.dialog = !1),
              setTimeout(function () {
                (e.editedItem = Object.assign({}, e.defaultItem)),
                  (e.editedIndex = -1),
                  e.$refs.form.resetValidation();
              }, 300);
          },
          save: function () {
            var e = this;
            if (this.$refs.form.validate()) {
              var t = { Token: this.$store.state.token },
                a = { headers: t };
              this.editedIndex > -1
                ? (console.log(this.editedItem),
                  E.a
                    .put(
                      "/user/update",
                      {
                        _id: this.editedItem._id,
                        name: this.editedItem.name,
                        rol: this.editedItem.rol,
                        doc_type: this.editedItem.doc_type,
                        doc_num: this.editedItem.doc_num,
                        address: this.editedItem.address,
                        phone: this.editedItem.phone,
                        email: this.editedItem.email,
                        password: this.editedItem.password,
                      },
                      a
                    )
                    .then(function (t) {
                      e.close(), e.initialize();
                    })
                    .catch(function (e) {
                      console.log(e);
                    }))
                : E.a
                    .post(
                      "/user/add",
                      {
                        name: this.editedItem.name,
                        rol: this.editedItem.rol,
                        doc_type: this.editedItem.doc_type,
                        doc_num: this.editedItem.doc_num,
                        address: this.editedItem.address,
                        phone: this.editedItem.phone,
                        email: this.editedItem.email,
                        password: this.editedItem.password,
                      },
                      a
                    )
                    .then(function (t) {
                      e.close(), e.initialize();
                    })
                    .catch(function (e) {
                      console.log(e);
                    }),
                this.close();
            }
          },
          activateDeactivate: function (e, t) {
            (this.modal = !0),
              (this.stateItem._id = t._id),
              (this.stateItem.name = t.name),
              (this.stateItem.action = e);
          },
          closeModal: function () {
            var e = this;
            (this.modal = !1),
              setTimeout(function () {
                e.stateItem = Object.assign({}, e.stateDefaultItem);
              }, 300);
          },
          activate: function () {
            var e = this,
              t = { Token: this.$store.state.token },
              a = { headers: t };
            E.a
              .put("/user/activate", { _id: this.stateItem._id }, a)
              .then(function (t) {
                e.closeModal(), e.initialize();
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          deactivate: function () {
            var e = this,
              t = { Token: this.$store.state.token },
              a = { headers: t };
            E.a
              .put("/user/deactivate", { _id: this.stateItem._id }, a)
              .then(function (t) {
                e.closeModal(), e.initialize();
              })
              .catch(function (e) {
                console.log(e);
              });
          },
        },
      },
      _e = be,
      xe = a("b974"),
      Ie = Object(c["a"])(_e, fe, pe, !1, null, null, null),
      ge = Ie.exports;
    d()(Ie, {
      VBtn: h["a"],
      VCard: Z["a"],
      VCardActions: Y["a"],
      VCardText: Y["b"],
      VCardTitle: Y["c"],
      VCol: f["a"],
      VContainer: p["a"],
      VDataTable: ee["a"],
      VDialog: te["a"],
      VDivider: ae["a"],
      VFlex: G["a"],
      VForm: se["a"],
      VIcon: x["a"],
      VLayout: H["a"],
      VRow: ie["a"],
      VSelect: xe["a"],
      VSpacer: V["a"],
      VTextField: oe["a"],
      VToolbar: ne["a"],
      VToolbarTitle: j["a"],
    });
    var ke = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "v-layout",
          { attrs: { "align-start": "" } },
          [
            a(
              "v-flex",
              [
                a("v-data-table", {
                  staticClass: "elevation-1",
                  attrs: {
                    headers: e.headers,
                    items: e.items,
                    search: e.search,
                  },
                  scopedSlots: e._u([
                    {
                      key: "top",
                      fn: function () {
                        return [
                          a(
                            "v-toolbar",
                            { attrs: { flat: "", color: "white" } },
                            [
                              a(
                                "v-btn",
                                {
                                  attrs: { color: "blue darken-1", text: "" },
                                  on: { click: e.generatePDF },
                                },
                                [a("v-icon", [e._v("print")])],
                                1
                              ),
                              a("v-toolbar-title", [e._v("Items")]),
                              a("v-divider", {
                                staticClass: "mx-4",
                                attrs: { inset: "", vertical: "" },
                              }),
                              a("v-spacer"),
                              a("v-text-field", {
                                staticClass: "text-xs-center",
                                attrs: {
                                  "append-icon": "search",
                                  label: "Search",
                                  "single-line": "",
                                  "hide-details": "",
                                },
                                model: {
                                  value: e.search,
                                  callback: function (t) {
                                    e.search = t;
                                  },
                                  expression: "search",
                                },
                              }),
                              a("v-spacer"),
                              a(
                                "v-dialog",
                                {
                                  attrs: { "max-width": "500px" },
                                  scopedSlots: e._u([
                                    {
                                      key: "activator",
                                      fn: function (t) {
                                        var s = t.on;
                                        return [
                                          a(
                                            "v-btn",
                                            e._g(
                                              {
                                                staticClass: "mb-2",
                                                attrs: {
                                                  color: "primary",
                                                  dark: "",
                                                },
                                              },
                                              s
                                            ),
                                            [e._v("New")]
                                          ),
                                        ];
                                      },
                                    },
                                  ]),
                                  model: {
                                    value: e.dialog,
                                    callback: function (t) {
                                      e.dialog = t;
                                    },
                                    expression: "dialog",
                                  },
                                },
                                [
                                  a(
                                    "v-card",
                                    [
                                      a("v-card-title", [
                                        a("span", { staticClass: "headline" }, [
                                          e._v(e._s(e.formTitle)),
                                        ]),
                                      ]),
                                      a(
                                        "v-card-text",
                                        [
                                          a(
                                            "v-container",
                                            [
                                              a(
                                                "v-form",
                                                {
                                                  ref: "form",
                                                  model: {
                                                    value: e.valid,
                                                    callback: function (t) {
                                                      e.valid = t;
                                                    },
                                                    expression: "valid",
                                                  },
                                                },
                                                [
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-select", {
                                                            attrs: {
                                                              items:
                                                                e.categories,
                                                              rules: [
                                                                function (e) {
                                                                  return (
                                                                    !!e ||
                                                                    "Category is required"
                                                                  );
                                                                },
                                                              ],
                                                              label: "Category",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .category,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "category",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.category",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              counter: 64,
                                                              rules:
                                                                e.codeRules,
                                                              label: "Code",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .code,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "code",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.code",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              counter: 50,
                                                              rules:
                                                                e.nameRules,
                                                              label: "Name",
                                                              required: "",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .name,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "name",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.name",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              counter: 255,
                                                              rules:
                                                                e.descriptionRules,
                                                              label:
                                                                "Description",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .description,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "description",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.description",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              type: "number",
                                                              rules:
                                                                e.stockRules,
                                                              label: "Stock",
                                                              required: "",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .stock,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "stock",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.stock",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              type: "number",
                                                              rules:
                                                                e.priceRules,
                                                              label: "Price",
                                                              required: "",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .price,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "price",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.price",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      a(
                                        "v-card-actions",
                                        [
                                          a("v-spacer"),
                                          a(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "blue darken-1",
                                                text: "",
                                              },
                                              on: { click: e.close },
                                            },
                                            [e._v("Cancel")]
                                          ),
                                          a(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "blue darken-1",
                                                text: "",
                                              },
                                              on: { click: e.save },
                                            },
                                            [e._v("Save")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-dialog",
                                {
                                  attrs: { "max-width": "500px" },
                                  model: {
                                    value: e.modal,
                                    callback: function (t) {
                                      e.modal = t;
                                    },
                                    expression: "modal",
                                  },
                                },
                                [
                                  a(
                                    "v-card",
                                    [
                                      a("v-card-title", [
                                        1 === e.stateItem.action
                                          ? a(
                                              "span",
                                              { staticClass: "headline" },
                                              [e._v("Activate category")]
                                            )
                                          : e._e(),
                                        2 === e.stateItem.action
                                          ? a(
                                              "span",
                                              { staticClass: "headline" },
                                              [e._v("Deactivate category")]
                                            )
                                          : e._e(),
                                      ]),
                                      a("v-card-text", [
                                        e._v(" Are you sure "),
                                        1 === e.stateItem.action
                                          ? a("span", [e._v("activate")])
                                          : e._e(),
                                        2 === e.stateItem.action
                                          ? a("span", [e._v("deactivate")])
                                          : e._e(),
                                        e._v(
                                          " the category " +
                                            e._s(e.stateItem.name) +
                                            " "
                                        ),
                                      ]),
                                      a(
                                        "v-card-actions",
                                        [
                                          a("v-spacer"),
                                          a(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "grey darken-1",
                                                text: "",
                                              },
                                              on: { click: e.closeModal },
                                            },
                                            [e._v("Cancel")]
                                          ),
                                          1 === e.stateItem.action
                                            ? a(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "red darken-1",
                                                    text: "",
                                                  },
                                                  on: { click: e.activate },
                                                },
                                                [e._v("Activate")]
                                              )
                                            : e._e(),
                                          2 === e.stateItem.action
                                            ? a(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "red darken-1",
                                                    text: "",
                                                  },
                                                  on: { click: e.deactivate },
                                                },
                                                [e._v("Deactivate")]
                                              )
                                            : e._e(),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                    {
                      key: "item.state",
                      fn: function (t) {
                        var s = t.item;
                        return [
                          s.state
                            ? a("div", [
                                a("span", { staticClass: "blue--text" }, [
                                  e._v("Active"),
                                ]),
                              ])
                            : a("div", [
                                a("span", { staticClass: "red--text" }, [
                                  e._v("Inactive"),
                                ]),
                              ]),
                        ];
                      },
                    },
                    {
                      key: "item.actions",
                      fn: function (t) {
                        var s = t.item;
                        return [
                          a(
                            "v-icon",
                            {
                              staticClass: "mr-2",
                              attrs: { small: "" },
                              on: {
                                click: function (t) {
                                  return e.editItem(s);
                                },
                              },
                            },
                            [e._v("edit")]
                          ),
                          s.state
                            ? [
                                a(
                                  "v-icon",
                                  {
                                    attrs: { small: "" },
                                    on: {
                                      click: function (t) {
                                        return e.activateDeactivate(2, s);
                                      },
                                    },
                                  },
                                  [e._v("block")]
                                ),
                              ]
                            : [
                                a(
                                  "v-icon",
                                  {
                                    attrs: { small: "" },
                                    on: {
                                      click: function (t) {
                                        return e.activateDeactivate(1, s);
                                      },
                                    },
                                  },
                                  [e._v("check")]
                                ),
                              ],
                          a(
                            "v-icon",
                            {
                              attrs: { small: "" },
                              on: {
                                click: function (t) {
                                  return e.deleteItem(s);
                                },
                              },
                            },
                            [e._v("delete")]
                          ),
                        ];
                      },
                    },
                    {
                      key: "no-data",
                      fn: function () {
                        return [
                          a(
                            "v-btn",
                            {
                              attrs: { color: "primary" },
                              on: { click: e.initialize },
                            },
                            [e._v("Reset")]
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                  ]),
                }),
              ],
              1
            ),
          ],
          1
        );
      },
      ye = [],
      we = a("e511"),
      Ce = a.n(we),
      Te =
        (a("0da4"),
        {
          data: function () {
            return {
              dialog: !1,
              search: "",
              items: [],
              headers: [
                { text: "Code", value: "code", sortable: !1 },
                { text: "Name", value: "name", sortable: !0 },
                { text: "Category", value: "category.name", sortable: !0 },
                { text: "Stock", value: "stock", sortable: !1 },
                { text: "Price", value: "price", sortable: !1 },
                { text: "Description", value: "description", sortable: !1 },
                { text: "State", value: "state", sortable: !1 },
                { text: "Actions", value: "actions", sortable: !1 },
              ],
              editedIndex: -1,
              categories: [],
              editedItem: {
                _id: "",
                category: "",
                code: "",
                name: "",
                description: "",
                price: 0,
                stock: 0,
              },
              defaultItem: {
                _id: "",
                category: "",
                code: "",
                name: "",
                description: "",
                price: 0,
                stock: 0,
              },
              valid: !0,
              codeRules: [
                function (e) {
                  return (
                    e.length <= 64 || "Code must be less than 64 characters"
                  );
                },
              ],
              nameRules: [
                function (e) {
                  return !!e || "Name is required";
                },
                function (e) {
                  return (
                    (e && e.length <= 50) ||
                    "Name must be less than 50 characters"
                  );
                },
              ],
              descriptionRules: [
                function (e) {
                  return (
                    e.length <= 255 ||
                    "Description must be less than 255 characters"
                  );
                },
              ],
              stockRules: [
                function (e) {
                  return e > 0 || "Stock must be greater than 0";
                },
              ],
              priceRules: [
                function (e) {
                  return e > 0 || "Price must be greater than 0";
                },
              ],
              modal: !1,
              stateItem: { _id: "", name: "", action: 0 },
              stateDefaultItem: { _id: "", name: "", action: 0 },
            };
          },
          computed: {
            formTitle: function () {
              return -1 === this.editedIndex ? "New" : "Edit";
            },
          },
          watch: {
            dialog: function (e) {
              e || this.close();
            },
          },
          created: function () {
            this.getCategories(), this.initialize();
          },
          methods: {
            getCategories: function () {
              var e = this,
                t = [],
                a = { Token: this.$store.state.token },
                s = { headers: a };
              E.a
                .get("/category/list", s)
                .then(function (a) {
                  (t = a.data),
                    t.map(function (t) {
                      e.categories.push({ text: t.name, value: t._id });
                    });
                })
                .catch(function (e) {
                  console.log(e);
                });
            },
            initialize: function () {
              var e = this,
                t = { Token: this.$store.state.token },
                a = { headers: t };
              E.a
                .get("/item/list", a)
                .then(function (t) {
                  console.log(t), (e.items = t.data);
                })
                .catch(function (e) {
                  console.log(e);
                });
            },
            editItem: function (e) {
              (this.editedIndex = this.items.indexOf(e)),
                console.log(this.editedIndex),
                console.log(e),
                (this.editedItem = {
                  _id: e._id,
                  category: e.category._id,
                  code: e.code,
                  name: e.name,
                  description: e.description,
                  price: e.price,
                  stock: e.stock,
                }),
                console.log(this.editedItem),
                (this.dialog = !0);
            },
            deleteItem: function (e) {
              var t = this.items.indexOf(e);
              confirm("Are you sure you want to delete this item?") &&
                this.items.splice(t, 1);
            },
            close: function () {
              var e = this;
              (this.dialog = !1),
                setTimeout(function () {
                  (e.editedItem = Object.assign({}, e.defaultItem)),
                    (e.editedIndex = -1),
                    e.$refs.form.resetValidation();
                }, 300);
            },
            save: function () {
              var e = this;
              if (this.$refs.form.validate()) {
                var t = { Token: this.$store.state.token },
                  a = { headers: t };
                this.editedIndex > -1
                  ? (console.log(this.editedItem),
                    E.a
                      .put(
                        "/item/update",
                        {
                          _id: this.editedItem._id,
                          category: this.editedItem.category,
                          code: this.editedItem.code,
                          name: this.editedItem.name,
                          description: this.editedItem.description,
                          price: this.editedItem.stock,
                          stock: this.editedItem.price,
                        },
                        a
                      )
                      .then(function (t) {
                        console.log(t), e.close(), e.initialize();
                      })
                      .catch(function (e) {
                        console.log(e);
                      }))
                  : (console.log(this.editedItem),
                    E.a
                      .post(
                        "/item/add",
                        {
                          category: this.editedItem.category,
                          code: this.editedItem.code,
                          name: this.editedItem.name,
                          description: this.editedItem.description,
                          price: this.editedItem.stock,
                          stock: this.editedItem.price,
                        },
                        a
                      )
                      .then(function (t) {
                        e.close(), e.initialize();
                      })
                      .catch(function (e) {
                        console.log(e);
                      })),
                  this.close();
              }
            },
            activateDeactivate: function (e, t) {
              (this.modal = !0),
                (this.stateItem._id = t._id),
                (this.stateItem.name = t.name),
                (this.stateItem.action = e);
            },
            closeModal: function () {
              var e = this;
              (this.modal = !1),
                setTimeout(function () {
                  e.stateItem = Object.assign({}, e.stateDefaultItem);
                }, 300);
            },
            activate: function () {
              var e = this,
                t = { Token: this.$store.state.token },
                a = { headers: t };
              E.a
                .put("/item/activate", { _id: this.stateItem._id }, a)
                .then(function (t) {
                  e.closeModal(), e.initialize();
                })
                .catch(function (e) {
                  console.log(e);
                });
            },
            deactivate: function () {
              var e = this,
                t = { Token: this.$store.state.token },
                a = { headers: t };
              E.a
                .put("/item/deactivate", { _id: this.stateItem._id }, a)
                .then(function (t) {
                  e.closeModal(), e.initialize();
                })
                .catch(function (e) {
                  console.log(e);
                });
            },
            generatePDF: function () {
              var e = new Ce.a("p", "pt"),
                t = [
                  { title: "Name", dataKey: "name" },
                  { title: "Code", dataKey: "code" },
                  { title: "Category", dataKey: "category" },
                  { title: "Stock", dataKey: "stock" },
                  { title: "Price", dataKey: "price" },
                ],
                a = [];
              this.items.map(function (e) {
                a.push({
                  name: e.name,
                  code: e.code,
                  category: e.category.name,
                  stock: e.stock,
                  price: e.price,
                });
              }),
                e.autoTable({
                  body: a,
                  columns: t,
                  didDrawPage: function () {
                    e.text("Items list", 40, 30);
                  },
                }),
                e.save("Items.pdf");
            },
          },
        }),
      Ve = Te,
      je = Object(c["a"])(Ve, ke, ye, !1, null, null, null),
      De = je.exports;
    d()(je, {
      VBtn: h["a"],
      VCard: Z["a"],
      VCardActions: Y["a"],
      VCardText: Y["b"],
      VCardTitle: Y["c"],
      VCol: f["a"],
      VContainer: p["a"],
      VDataTable: ee["a"],
      VDialog: te["a"],
      VDivider: ae["a"],
      VFlex: G["a"],
      VForm: se["a"],
      VIcon: x["a"],
      VLayout: H["a"],
      VRow: ie["a"],
      VSelect: xe["a"],
      VSpacer: V["a"],
      VTextField: oe["a"],
      VToolbar: ne["a"],
      VToolbarTitle: j["a"],
    });
    var Ae = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "v-layout",
          { attrs: { "align-start": "" } },
          [
            a(
              "v-flex",
              [
                a("v-data-table", {
                  staticClass: "elevation-1",
                  attrs: {
                    headers: e.headers,
                    items: e.persons,
                    search: e.search,
                  },
                  scopedSlots: e._u([
                    {
                      key: "top",
                      fn: function () {
                        return [
                          a(
                            "v-toolbar",
                            { attrs: { flat: "", color: "white" } },
                            [
                              a("v-toolbar-title", [e._v("Customers")]),
                              a("v-divider", {
                                staticClass: "mx-4",
                                attrs: { inset: "", vertical: "" },
                              }),
                              a("v-spacer"),
                              a("v-text-field", {
                                staticClass: "text-xs-center",
                                attrs: {
                                  "append-icon": "search",
                                  label: "Search",
                                  "single-line": "",
                                  "hide-details": "",
                                },
                                model: {
                                  value: e.search,
                                  callback: function (t) {
                                    e.search = t;
                                  },
                                  expression: "search",
                                },
                              }),
                              a("v-spacer"),
                              a(
                                "v-dialog",
                                {
                                  attrs: { "max-width": "500px" },
                                  scopedSlots: e._u([
                                    {
                                      key: "activator",
                                      fn: function (t) {
                                        var s = t.on;
                                        return [
                                          a(
                                            "v-btn",
                                            e._g(
                                              {
                                                staticClass: "mb-2",
                                                attrs: {
                                                  color: "primary",
                                                  dark: "",
                                                },
                                              },
                                              s
                                            ),
                                            [e._v("New")]
                                          ),
                                        ];
                                      },
                                    },
                                  ]),
                                  model: {
                                    value: e.dialog,
                                    callback: function (t) {
                                      e.dialog = t;
                                    },
                                    expression: "dialog",
                                  },
                                },
                                [
                                  a(
                                    "v-card",
                                    [
                                      a("v-card-title", [
                                        a("span", { staticClass: "headline" }, [
                                          e._v(e._s(e.formTitle)),
                                        ]),
                                      ]),
                                      a(
                                        "v-card-text",
                                        [
                                          a(
                                            "v-container",
                                            [
                                              a(
                                                "v-form",
                                                {
                                                  ref: "form",
                                                  model: {
                                                    value: e.valid,
                                                    callback: function (t) {
                                                      e.valid = t;
                                                    },
                                                    expression: "valid",
                                                  },
                                                },
                                                [
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              counter: 50,
                                                              rules:
                                                                e.nameRules,
                                                              label: "Name",
                                                              required: "",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .name,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "name",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.name",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-select", {
                                                            attrs: {
                                                              items:
                                                                e.doc_types,
                                                              rules: [
                                                                function (e) {
                                                                  return (
                                                                    !!e ||
                                                                    "Doc type is required"
                                                                  );
                                                                },
                                                              ],
                                                              label: "Doc Type",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .doc_type,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "doc_type",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.doc_type",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              counter: 20,
                                                              rules:
                                                                e.docNumberRules,
                                                              label:
                                                                "Doc Number",
                                                              required: "",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .doc_num,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "doc_num",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.doc_num",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              counter: 70,
                                                              rules:
                                                                e.addressRules,
                                                              label: "Address",
                                                              required: "",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .address,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "address",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.address",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              counter: 20,
                                                              rules:
                                                                e.phoneRules,
                                                              label: "Phone",
                                                              required: "",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .phone,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "phone",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.phone",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              counter: 50,
                                                              rules:
                                                                e.emailRules,
                                                              label: "Email",
                                                              required: "",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .email,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "email",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.email",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      a(
                                        "v-card-actions",
                                        [
                                          a("v-spacer"),
                                          a(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "blue darken-1",
                                                text: "",
                                              },
                                              on: { click: e.close },
                                            },
                                            [e._v("Cancel")]
                                          ),
                                          a(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "blue darken-1",
                                                text: "",
                                              },
                                              on: { click: e.save },
                                            },
                                            [e._v("Save")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-dialog",
                                {
                                  attrs: { "max-width": "500px" },
                                  model: {
                                    value: e.modal,
                                    callback: function (t) {
                                      e.modal = t;
                                    },
                                    expression: "modal",
                                  },
                                },
                                [
                                  a(
                                    "v-card",
                                    [
                                      a("v-card-title", [
                                        1 === e.stateItem.action
                                          ? a(
                                              "span",
                                              { staticClass: "headline" },
                                              [e._v("Activate category")]
                                            )
                                          : e._e(),
                                        2 === e.stateItem.action
                                          ? a(
                                              "span",
                                              { staticClass: "headline" },
                                              [e._v("Deactivate category")]
                                            )
                                          : e._e(),
                                      ]),
                                      a("v-card-text", [
                                        e._v(" Are you sure "),
                                        1 === e.stateItem.action
                                          ? a("span", [e._v("activate")])
                                          : e._e(),
                                        2 === e.stateItem.action
                                          ? a("span", [e._v("deactivate")])
                                          : e._e(),
                                        e._v(
                                          " the category " +
                                            e._s(e.stateItem.name) +
                                            " "
                                        ),
                                      ]),
                                      a(
                                        "v-card-actions",
                                        [
                                          a("v-spacer"),
                                          a(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "grey darken-1",
                                                text: "",
                                              },
                                              on: { click: e.closeModal },
                                            },
                                            [e._v("Cancel")]
                                          ),
                                          1 === e.stateItem.action
                                            ? a(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "red darken-1",
                                                    text: "",
                                                  },
                                                  on: { click: e.activate },
                                                },
                                                [e._v("Activate")]
                                              )
                                            : e._e(),
                                          2 === e.stateItem.action
                                            ? a(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "red darken-1",
                                                    text: "",
                                                  },
                                                  on: { click: e.deactivate },
                                                },
                                                [e._v("Deactivate")]
                                              )
                                            : e._e(),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                    {
                      key: "item.state",
                      fn: function (t) {
                        var s = t.item;
                        return [
                          s.state
                            ? a("div", [
                                a("span", { staticClass: "blue--text" }, [
                                  e._v("Active"),
                                ]),
                              ])
                            : a("div", [
                                a("span", { staticClass: "red--text" }, [
                                  e._v("Inactive"),
                                ]),
                              ]),
                        ];
                      },
                    },
                    {
                      key: "item.actions",
                      fn: function (t) {
                        var s = t.item;
                        return [
                          a(
                            "v-icon",
                            {
                              staticClass: "mr-2",
                              attrs: { small: "" },
                              on: {
                                click: function (t) {
                                  return e.editItem(s);
                                },
                              },
                            },
                            [e._v("edit")]
                          ),
                          s.state
                            ? [
                                a(
                                  "v-icon",
                                  {
                                    attrs: { small: "" },
                                    on: {
                                      click: function (t) {
                                        return e.activateDeactivate(2, s);
                                      },
                                    },
                                  },
                                  [e._v("block")]
                                ),
                              ]
                            : [
                                a(
                                  "v-icon",
                                  {
                                    attrs: { small: "" },
                                    on: {
                                      click: function (t) {
                                        return e.activateDeactivate(1, s);
                                      },
                                    },
                                  },
                                  [e._v("check")]
                                ),
                              ],
                          a(
                            "v-icon",
                            {
                              attrs: { small: "" },
                              on: {
                                click: function (t) {
                                  return e.deleteItem(s);
                                },
                              },
                            },
                            [e._v("delete")]
                          ),
                        ];
                      },
                    },
                    {
                      key: "no-data",
                      fn: function () {
                        return [
                          a(
                            "v-btn",
                            {
                              attrs: { color: "primary" },
                              on: { click: e.initialize },
                            },
                            [e._v("Reset")]
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                  ]),
                }),
              ],
              1
            ),
          ],
          1
        );
      },
      Se = [],
      Pe = {
        data: function () {
          return {
            dialog: !1,
            search: "",
            persons: [],
            doc_types: ["DNI", "RUC", "PASAPORTE", "CEDULA"],
            headers: [
              { text: "Person Type", value: "person_type", sortable: !1 },
              { text: "Name", value: "name", sortable: !0 },
              { text: "Doc Type", value: "doc_type", sortable: !0 },
              { text: "Doc Number", value: "doc_num", sortable: !1 },
              { text: "Address", value: "address", sortable: !1 },
              { text: "Phone", value: "phone", sortable: !1 },
              { text: "Email", value: "email", sortable: !1 },
              { text: "State", value: "state", sortable: !1 },
              { text: "Actions", value: "actions", sortable: !1 },
            ],
            editedIndex: -1,
            editedItem: {
              _id: "",
              name: "",
              person_type: "Customer",
              doc_type: "",
              doc_num: "",
              address: "",
              phone: "",
              email: "",
            },
            defaultItem: {
              _id: "",
              name: "",
              person_type: "Customer",
              doc_type: "",
              doc_num: "",
              address: "",
              phone: "",
              email: "",
            },
            valid: !0,
            nameRules: [
              function (e) {
                return !!e || "Name is required";
              },
              function (e) {
                return (
                  (e && e.length <= 50) ||
                  "Name must be less than 50 characters"
                );
              },
            ],
            docNumberRules: [
              function (e) {
                return !!e || "Doc number is required";
              },
              function (e) {
                return (
                  (e && e.length <= 20) ||
                  "Doc number must be less than 20 characters"
                );
              },
            ],
            addressRules: [
              function (e) {
                return !!e || "Address is required";
              },
              function (e) {
                return (
                  (e && e.length <= 70) ||
                  "Address must be less than 70 characters"
                );
              },
            ],
            phoneRules: [
              function (e) {
                return !!e || "Phone is required";
              },
              function (e) {
                return (
                  (e && e.length <= 20) ||
                  "Phone must be less than 20 characters"
                );
              },
            ],
            emailRules: [
              function (e) {
                return !!e || "Email is required";
              },
              function (e) {
                return (
                  (e && e.length <= 50) ||
                  "Email must be less than 50 characters"
                );
              },
            ],
            modal: !1,
            stateItem: { _id: "", name: "", action: 0 },
            stateDefaultItem: { _id: "", name: "", action: 0 },
          };
        },
        computed: {
          formTitle: function () {
            return -1 === this.editedIndex ? "New" : "Edit";
          },
        },
        watch: {
          dialog: function (e) {
            e || this.close();
          },
        },
        created: function () {
          this.initialize();
        },
        methods: {
          initialize: function () {
            var e = this,
              t = { Token: this.$store.state.token },
              a = { headers: t };
            E.a
              .get("/person/list-customers", a)
              .then(function (t) {
                e.persons = t.data;
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          editItem: function (e) {
            (this.editedIndex = this.persons.indexOf(e)),
              (this.editedItem = Object.assign({}, e)),
              console.log(this.editedItem),
              (this.dialog = !0);
          },
          deleteItem: function (e) {
            var t = this.categories.indexOf(e);
            confirm("Are you sure you want to delete this item?") &&
              this.categories.splice(t, 1);
          },
          close: function () {
            var e = this;
            (this.dialog = !1),
              setTimeout(function () {
                (e.editedItem = Object.assign({}, e.defaultItem)),
                  (e.editedIndex = -1),
                  e.$refs.form.resetValidation();
              }, 300);
          },
          save: function () {
            var e = this;
            if (this.$refs.form.validate()) {
              var t = { Token: this.$store.state.token },
                a = { headers: t };
              this.editedIndex > -1
                ? (console.log(this.editedItem),
                  E.a
                    .put(
                      "/person/update",
                      {
                        _id: this.editedItem._id,
                        name: this.editedItem.name,
                        person_type: this.editedItem.person_type,
                        doc_type: this.editedItem.doc_type,
                        doc_num: this.editedItem.doc_num,
                        address: this.editedItem.address,
                        phone: this.editedItem.phone,
                        email: this.editedItem.email,
                      },
                      a
                    )
                    .then(function (t) {
                      e.close(), e.initialize();
                    })
                    .catch(function (e) {
                      console.log(e);
                    }))
                : E.a
                    .post(
                      "/person/add",
                      {
                        name: this.editedItem.name,
                        person_type: this.editedItem.person_type,
                        doc_type: this.editedItem.doc_type,
                        doc_num: this.editedItem.doc_num,
                        address: this.editedItem.address,
                        phone: this.editedItem.phone,
                        email: this.editedItem.email,
                        password: this.editedItem.password,
                      },
                      a
                    )
                    .then(function (t) {
                      e.close(), e.initialize();
                    })
                    .catch(function (e) {
                      console.log(e);
                    }),
                this.close();
            }
          },
          activateDeactivate: function (e, t) {
            (this.modal = !0),
              (this.stateItem._id = t._id),
              (this.stateItem.name = t.name),
              (this.stateItem.action = e);
          },
          closeModal: function () {
            var e = this;
            (this.modal = !1),
              setTimeout(function () {
                e.stateItem = Object.assign({}, e.stateDefaultItem);
              }, 300);
          },
          activate: function () {
            var e = this,
              t = { Token: this.$store.state.token },
              a = { headers: t };
            E.a
              .put("/person/activate", { _id: this.stateItem._id }, a)
              .then(function (t) {
                e.closeModal(), e.initialize();
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          deactivate: function () {
            var e = this,
              t = { Token: this.$store.state.token },
              a = { headers: t };
            E.a
              .put("/person/deactivate", { _id: this.stateItem._id }, a)
              .then(function (t) {
                e.closeModal(), e.initialize();
              })
              .catch(function (e) {
                console.log(e);
              });
          },
        },
      },
      Ne = Pe,
      $e = Object(c["a"])(Ne, Ae, Se, !1, null, null, null),
      Re = $e.exports;
    d()($e, {
      VBtn: h["a"],
      VCard: Z["a"],
      VCardActions: Y["a"],
      VCardText: Y["b"],
      VCardTitle: Y["c"],
      VCol: f["a"],
      VContainer: p["a"],
      VDataTable: ee["a"],
      VDialog: te["a"],
      VDivider: ae["a"],
      VFlex: G["a"],
      VForm: se["a"],
      VIcon: x["a"],
      VLayout: H["a"],
      VRow: ie["a"],
      VSelect: xe["a"],
      VSpacer: V["a"],
      VTextField: oe["a"],
      VToolbar: ne["a"],
      VToolbarTitle: j["a"],
    });
    var ze = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "v-layout",
          { attrs: { "align-start": "" } },
          [
            a(
              "v-flex",
              [
                a("v-data-table", {
                  staticClass: "elevation-1",
                  attrs: {
                    headers: e.headers,
                    items: e.persons,
                    search: e.search,
                  },
                  scopedSlots: e._u([
                    {
                      key: "top",
                      fn: function () {
                        return [
                          a(
                            "v-toolbar",
                            { attrs: { flat: "", color: "white" } },
                            [
                              a("v-toolbar-title", [e._v("Provider")]),
                              a("v-divider", {
                                staticClass: "mx-4",
                                attrs: { inset: "", vertical: "" },
                              }),
                              a("v-spacer"),
                              a("v-text-field", {
                                staticClass: "text-xs-center",
                                attrs: {
                                  "append-icon": "search",
                                  label: "Search",
                                  "single-line": "",
                                  "hide-details": "",
                                },
                                model: {
                                  value: e.search,
                                  callback: function (t) {
                                    e.search = t;
                                  },
                                  expression: "search",
                                },
                              }),
                              a("v-spacer"),
                              a(
                                "v-dialog",
                                {
                                  attrs: { "max-width": "500px" },
                                  scopedSlots: e._u([
                                    {
                                      key: "activator",
                                      fn: function (t) {
                                        var s = t.on;
                                        return [
                                          a(
                                            "v-btn",
                                            e._g(
                                              {
                                                staticClass: "mb-2",
                                                attrs: {
                                                  color: "primary",
                                                  dark: "",
                                                },
                                              },
                                              s
                                            ),
                                            [e._v("New")]
                                          ),
                                        ];
                                      },
                                    },
                                  ]),
                                  model: {
                                    value: e.dialog,
                                    callback: function (t) {
                                      e.dialog = t;
                                    },
                                    expression: "dialog",
                                  },
                                },
                                [
                                  a(
                                    "v-card",
                                    [
                                      a("v-card-title", [
                                        a("span", { staticClass: "headline" }, [
                                          e._v(e._s(e.formTitle)),
                                        ]),
                                      ]),
                                      a(
                                        "v-card-text",
                                        [
                                          a(
                                            "v-container",
                                            [
                                              a(
                                                "v-form",
                                                {
                                                  ref: "form",
                                                  model: {
                                                    value: e.valid,
                                                    callback: function (t) {
                                                      e.valid = t;
                                                    },
                                                    expression: "valid",
                                                  },
                                                },
                                                [
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              counter: 50,
                                                              rules:
                                                                e.nameRules,
                                                              label: "Name",
                                                              required: "",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .name,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "name",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.name",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-select", {
                                                            attrs: {
                                                              items:
                                                                e.doc_types,
                                                              rules: [
                                                                function (e) {
                                                                  return (
                                                                    !!e ||
                                                                    "Doc type is required"
                                                                  );
                                                                },
                                                              ],
                                                              label: "Doc Type",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .doc_type,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "doc_type",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.doc_type",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              counter: 20,
                                                              rules:
                                                                e.docNumberRules,
                                                              label:
                                                                "Doc Number",
                                                              required: "",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .doc_num,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "doc_num",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.doc_num",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              counter: 70,
                                                              rules:
                                                                e.addressRules,
                                                              label: "Address",
                                                              required: "",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .address,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "address",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.address",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              counter: 20,
                                                              rules:
                                                                e.phoneRules,
                                                              label: "Phone",
                                                              required: "",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .phone,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "phone",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.phone",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-text-field", {
                                                            attrs: {
                                                              counter: 50,
                                                              rules:
                                                                e.emailRules,
                                                              label: "Email",
                                                              required: "",
                                                            },
                                                            model: {
                                                              value:
                                                                e.editedItem
                                                                  .email,
                                                              callback: function (
                                                                t
                                                              ) {
                                                                e.$set(
                                                                  e.editedItem,
                                                                  "email",
                                                                  t
                                                                );
                                                              },
                                                              expression:
                                                                "editedItem.email",
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      a(
                                        "v-card-actions",
                                        [
                                          a("v-spacer"),
                                          a(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "blue darken-1",
                                                text: "",
                                              },
                                              on: { click: e.close },
                                            },
                                            [e._v("Cancel")]
                                          ),
                                          a(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "blue darken-1",
                                                text: "",
                                              },
                                              on: { click: e.save },
                                            },
                                            [e._v("Save")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-dialog",
                                {
                                  attrs: { "max-width": "500px" },
                                  model: {
                                    value: e.modal,
                                    callback: function (t) {
                                      e.modal = t;
                                    },
                                    expression: "modal",
                                  },
                                },
                                [
                                  a(
                                    "v-card",
                                    [
                                      a("v-card-title", [
                                        1 === e.stateItem.action
                                          ? a(
                                              "span",
                                              { staticClass: "headline" },
                                              [e._v("Activate category")]
                                            )
                                          : e._e(),
                                        2 === e.stateItem.action
                                          ? a(
                                              "span",
                                              { staticClass: "headline" },
                                              [e._v("Deactivate category")]
                                            )
                                          : e._e(),
                                      ]),
                                      a("v-card-text", [
                                        e._v(" Are you sure "),
                                        1 === e.stateItem.action
                                          ? a("span", [e._v("activate")])
                                          : e._e(),
                                        2 === e.stateItem.action
                                          ? a("span", [e._v("deactivate")])
                                          : e._e(),
                                        e._v(
                                          " the category " +
                                            e._s(e.stateItem.name) +
                                            " "
                                        ),
                                      ]),
                                      a(
                                        "v-card-actions",
                                        [
                                          a("v-spacer"),
                                          a(
                                            "v-btn",
                                            {
                                              attrs: {
                                                color: "grey darken-1",
                                                text: "",
                                              },
                                              on: { click: e.closeModal },
                                            },
                                            [e._v("Cancel")]
                                          ),
                                          1 === e.stateItem.action
                                            ? a(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "red darken-1",
                                                    text: "",
                                                  },
                                                  on: { click: e.activate },
                                                },
                                                [e._v("Activate")]
                                              )
                                            : e._e(),
                                          2 === e.stateItem.action
                                            ? a(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "red darken-1",
                                                    text: "",
                                                  },
                                                  on: { click: e.deactivate },
                                                },
                                                [e._v("Deactivate")]
                                              )
                                            : e._e(),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                    {
                      key: "item.state",
                      fn: function (t) {
                        var s = t.item;
                        return [
                          s.state
                            ? a("div", [
                                a("span", { staticClass: "blue--text" }, [
                                  e._v("Active"),
                                ]),
                              ])
                            : a("div", [
                                a("span", { staticClass: "red--text" }, [
                                  e._v("Inactive"),
                                ]),
                              ]),
                        ];
                      },
                    },
                    {
                      key: "item.actions",
                      fn: function (t) {
                        var s = t.item;
                        return [
                          a(
                            "v-icon",
                            {
                              staticClass: "mr-2",
                              attrs: { small: "" },
                              on: {
                                click: function (t) {
                                  return e.editItem(s);
                                },
                              },
                            },
                            [e._v("edit")]
                          ),
                          s.state
                            ? [
                                a(
                                  "v-icon",
                                  {
                                    attrs: { small: "" },
                                    on: {
                                      click: function (t) {
                                        return e.activateDeactivate(2, s);
                                      },
                                    },
                                  },
                                  [e._v("block")]
                                ),
                              ]
                            : [
                                a(
                                  "v-icon",
                                  {
                                    attrs: { small: "" },
                                    on: {
                                      click: function (t) {
                                        return e.activateDeactivate(1, s);
                                      },
                                    },
                                  },
                                  [e._v("check")]
                                ),
                              ],
                          a(
                            "v-icon",
                            {
                              attrs: { small: "" },
                              on: {
                                click: function (t) {
                                  return e.deleteItem(s);
                                },
                              },
                            },
                            [e._v("delete")]
                          ),
                        ];
                      },
                    },
                    {
                      key: "no-data",
                      fn: function () {
                        return [
                          a(
                            "v-btn",
                            {
                              attrs: { color: "primary" },
                              on: { click: e.initialize },
                            },
                            [e._v("Reset")]
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                  ]),
                }),
              ],
              1
            ),
          ],
          1
        );
      },
      qe = [],
      Oe = {
        data: function () {
          return {
            dialog: !1,
            search: "",
            persons: [],
            doc_types: ["DNI", "RUC", "PASAPORTE", "CEDULA"],
            headers: [
              { text: "Person Type", value: "person_type", sortable: !1 },
              { text: "Name", value: "name", sortable: !0 },
              { text: "Doc Type", value: "doc_type", sortable: !0 },
              { text: "Doc Number", value: "doc_num", sortable: !1 },
              { text: "Address", value: "address", sortable: !1 },
              { text: "Phone", value: "phone", sortable: !1 },
              { text: "Email", value: "email", sortable: !1 },
              { text: "State", value: "state", sortable: !1 },
              { text: "Actions", value: "actions", sortable: !1 },
            ],
            editedIndex: -1,
            editedItem: {
              _id: "",
              name: "",
              person_type: "Provider",
              doc_type: "",
              doc_num: "",
              address: "",
              phone: "",
              email: "",
            },
            defaultItem: {
              _id: "",
              name: "",
              person_type: "Provider",
              doc_type: "",
              doc_num: "",
              address: "",
              phone: "",
              email: "",
            },
            valid: !0,
            nameRules: [
              function (e) {
                return !!e || "Name is required";
              },
              function (e) {
                return (
                  (e && e.length <= 50) ||
                  "Name must be less than 50 characters"
                );
              },
            ],
            docNumberRules: [
              function (e) {
                return !!e || "Doc number is required";
              },
              function (e) {
                return (
                  (e && e.length <= 20) ||
                  "Doc number must be less than 20 characters"
                );
              },
            ],
            addressRules: [
              function (e) {
                return !!e || "Address is required";
              },
              function (e) {
                return (
                  (e && e.length <= 70) ||
                  "Address must be less than 70 characters"
                );
              },
            ],
            phoneRules: [
              function (e) {
                return !!e || "Phone is required";
              },
              function (e) {
                return (
                  (e && e.length <= 20) ||
                  "Phone must be less than 20 characters"
                );
              },
            ],
            emailRules: [
              function (e) {
                return !!e || "Email is required";
              },
              function (e) {
                return (
                  (e && e.length <= 50) ||
                  "Email must be less than 50 characters"
                );
              },
            ],
            modal: !1,
            stateItem: { _id: "", name: "", action: 0 },
            stateDefaultItem: { _id: "", name: "", action: 0 },
          };
        },
        computed: {
          formTitle: function () {
            return -1 === this.editedIndex ? "New" : "Edit";
          },
        },
        watch: {
          dialog: function (e) {
            e || this.close();
          },
        },
        created: function () {
          this.initialize();
        },
        methods: {
          initialize: function () {
            var e = this,
              t = { Token: this.$store.state.token },
              a = { headers: t };
            E.a
              .get("/person/list-providers", a)
              .then(function (t) {
                e.persons = t.data;
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          editItem: function (e) {
            (this.editedIndex = this.persons.indexOf(e)),
              (this.editedItem = Object.assign({}, e)),
              console.log(this.editedItem),
              (this.dialog = !0);
          },
          deleteItem: function (e) {
            var t = this.categories.indexOf(e);
            confirm("Are you sure you want to delete this item?") &&
              this.categories.splice(t, 1);
          },
          close: function () {
            var e = this;
            (this.dialog = !1),
              setTimeout(function () {
                (e.editedItem = Object.assign({}, e.defaultItem)),
                  (e.editedIndex = -1),
                  e.$refs.form.resetValidation();
              }, 300);
          },
          save: function () {
            var e = this;
            if (this.$refs.form.validate()) {
              var t = { Token: this.$store.state.token },
                a = { headers: t };
              this.editedIndex > -1
                ? (console.log(this.editedItem),
                  E.a
                    .put(
                      "/person/update",
                      {
                        _id: this.editedItem._id,
                        name: this.editedItem.name,
                        person_type: this.editedItem.person_type,
                        doc_type: this.editedItem.doc_type,
                        doc_num: this.editedItem.doc_num,
                        address: this.editedItem.address,
                        phone: this.editedItem.phone,
                        email: this.editedItem.email,
                      },
                      a
                    )
                    .then(function (t) {
                      e.close(), e.initialize();
                    })
                    .catch(function (e) {
                      console.log(e);
                    }))
                : E.a
                    .post(
                      "/person/add",
                      {
                        name: this.editedItem.name,
                        person_type: this.editedItem.person_type,
                        doc_type: this.editedItem.doc_type,
                        doc_num: this.editedItem.doc_num,
                        address: this.editedItem.address,
                        phone: this.editedItem.phone,
                        email: this.editedItem.email,
                        password: this.editedItem.password,
                      },
                      a
                    )
                    .then(function (t) {
                      e.close(), e.initialize();
                    })
                    .catch(function (e) {
                      console.log(e);
                    }),
                this.close();
            }
          },
          activateDeactivate: function (e, t) {
            (this.modal = !0),
              (this.stateItem._id = t._id),
              (this.stateItem.name = t.name),
              (this.stateItem.action = e);
          },
          closeModal: function () {
            var e = this;
            (this.modal = !1),
              setTimeout(function () {
                e.stateItem = Object.assign({}, e.stateDefaultItem);
              }, 300);
          },
          activate: function () {
            var e = this,
              t = { Token: this.$store.state.token },
              a = { headers: t };
            E.a
              .put("/person/activate", { _id: this.stateItem._id }, a)
              .then(function (t) {
                e.closeModal(), e.initialize();
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          deactivate: function () {
            var e = this,
              t = { Token: this.$store.state.token },
              a = { headers: t };
            E.a
              .put("/person/deactivate", { _id: this.stateItem._id }, a)
              .then(function (t) {
                e.closeModal(), e.initialize();
              })
              .catch(function (e) {
                console.log(e);
              });
          },
        },
      },
      Ee = Oe,
      Me = Object(c["a"])(Ee, ze, qe, !1, null, null, null),
      Fe = Me.exports;
    d()(Me, {
      VBtn: h["a"],
      VCard: Z["a"],
      VCardActions: Y["a"],
      VCardText: Y["b"],
      VCardTitle: Y["c"],
      VCol: f["a"],
      VContainer: p["a"],
      VDataTable: ee["a"],
      VDialog: te["a"],
      VDivider: ae["a"],
      VFlex: G["a"],
      VForm: se["a"],
      VIcon: x["a"],
      VLayout: H["a"],
      VRow: ie["a"],
      VSelect: xe["a"],
      VSpacer: V["a"],
      VTextField: oe["a"],
      VToolbar: ne["a"],
      VToolbarTitle: j["a"],
    });
    var Le = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "v-layout",
          { attrs: { "align-start": "" } },
          [
            a(
              "v-flex",
              [
                0 === e.showNew
                  ? a("v-data-table", {
                      staticClass: "elevation-1",
                      attrs: {
                        headers: e.headers,
                        items: e.incomes,
                        search: e.search,
                      },
                      scopedSlots: e._u(
                        [
                          {
                            key: "top",
                            fn: function () {
                              return [
                                a(
                                  "v-toolbar",
                                  { attrs: { flat: "", color: "white" } },
                                  [
                                    a("v-toolbar-title", [e._v("Incomes")]),
                                    a("v-divider", {
                                      staticClass: "mx-4",
                                      attrs: { inset: "", vertical: "" },
                                    }),
                                    a("v-spacer"),
                                    0 === e.showNew
                                      ? a("v-text-field", {
                                          staticClass: "text-xs-center",
                                          attrs: {
                                            "append-icon": "search",
                                            label: "Search",
                                            "single-line": "",
                                            "hide-details": "",
                                          },
                                          model: {
                                            value: e.search,
                                            callback: function (t) {
                                              e.search = t;
                                            },
                                            expression: "search",
                                          },
                                        })
                                      : e._e(),
                                    a("v-spacer"),
                                    0 === e.showNew
                                      ? a(
                                          "v-btn",
                                          {
                                            staticClass: "mb-2",
                                            attrs: {
                                              color: "primary",
                                              dark: "",
                                            },
                                            on: {
                                              click: function (t) {
                                                return e.showNewHandle();
                                              },
                                            },
                                          },
                                          [e._v("New")]
                                        )
                                      : e._e(),
                                    a(
                                      "v-dialog",
                                      {
                                        attrs: { "max-width": "500px" },
                                        model: {
                                          value: e.modal,
                                          callback: function (t) {
                                            e.modal = t;
                                          },
                                          expression: "modal",
                                        },
                                      },
                                      [
                                        a(
                                          "v-card",
                                          [
                                            a("v-card-title", [
                                              1 === e.stateItem.action
                                                ? a(
                                                    "span",
                                                    { staticClass: "headline" },
                                                    [e._v("Activate income")]
                                                  )
                                                : e._e(),
                                              2 === e.stateItem.action
                                                ? a(
                                                    "span",
                                                    { staticClass: "headline" },
                                                    [e._v("Deactivate income")]
                                                  )
                                                : e._e(),
                                            ]),
                                            a("v-card-text", [
                                              e._v(" Are you sure "),
                                              1 === e.stateItem.action
                                                ? a("span", [e._v("activate")])
                                                : e._e(),
                                              2 === e.stateItem.action
                                                ? a("span", [
                                                    e._v("deactivate"),
                                                  ])
                                                : e._e(),
                                              e._v(
                                                " the income " +
                                                  e._s(e.stateItem.name) +
                                                  " "
                                              ),
                                            ]),
                                            a(
                                              "v-card-actions",
                                              [
                                                a("v-spacer"),
                                                a(
                                                  "v-btn",
                                                  {
                                                    attrs: {
                                                      color: "grey darken-1",
                                                      text: "",
                                                    },
                                                    on: { click: e.closeModal },
                                                  },
                                                  [e._v("Cancel")]
                                                ),
                                                1 === e.stateItem.action
                                                  ? a(
                                                      "v-btn",
                                                      {
                                                        attrs: {
                                                          color: "red darken-1",
                                                          text: "",
                                                        },
                                                        on: {
                                                          click: e.activate,
                                                        },
                                                      },
                                                      [e._v("Activate")]
                                                    )
                                                  : e._e(),
                                                2 === e.stateItem.action
                                                  ? a(
                                                      "v-btn",
                                                      {
                                                        attrs: {
                                                          color: "red darken-1",
                                                          text: "",
                                                        },
                                                        on: {
                                                          click: e.deactivate,
                                                        },
                                                      },
                                                      [e._v("Deactivate")]
                                                    )
                                                  : e._e(),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ];
                            },
                            proxy: !0,
                          },
                          {
                            key: "item.state",
                            fn: function (t) {
                              var s = t.item;
                              return [
                                s.state
                                  ? a("div", [
                                      a("span", { staticClass: "blue--text" }, [
                                        e._v("Accepted"),
                                      ]),
                                    ])
                                  : a("div", [
                                      a("span", { staticClass: "red--text" }, [
                                        e._v("Canceled"),
                                      ]),
                                    ]),
                              ];
                            },
                          },
                          {
                            key: "item.actions",
                            fn: function (t) {
                              var s = t.item;
                              return [
                                s.state
                                  ? [
                                      a(
                                        "v-icon",
                                        {
                                          attrs: { small: "" },
                                          on: {
                                            click: function (t) {
                                              return e.activateDeactivate(2, s);
                                            },
                                          },
                                        },
                                        [e._v("block")]
                                      ),
                                    ]
                                  : [
                                      a(
                                        "v-icon",
                                        {
                                          attrs: { small: "" },
                                          on: {
                                            click: function (t) {
                                              return e.activateDeactivate(1, s);
                                            },
                                          },
                                        },
                                        [e._v("check")]
                                      ),
                                    ],
                                [
                                  a(
                                    "v-icon",
                                    {
                                      attrs: { small: "" },
                                      on: {
                                        click: function (t) {
                                          return e.showIncome(s);
                                        },
                                      },
                                    },
                                    [e._v("tab")]
                                  ),
                                ],
                              ];
                            },
                          },
                          {
                            key: "no-data",
                            fn: function () {
                              return [
                                a(
                                  "v-btn",
                                  {
                                    attrs: { color: "primary" },
                                    on: { click: e.initialize },
                                  },
                                  [e._v("Reset")]
                                ),
                              ];
                            },
                            proxy: !0,
                          },
                        ],
                        null,
                        !1,
                        3497234932
                      ),
                    })
                  : e._e(),
                e.showNew
                  ? a(
                      "v-container",
                      [
                        a(
                          "v-form",
                          {
                            ref: "form",
                            model: {
                              value: e.valid,
                              callback: function (t) {
                                e.valid = t;
                              },
                              expression: "valid",
                            },
                          },
                          [
                            a(
                              "v-row",
                              [
                                a(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "12", md: "12" } },
                                  [
                                    a("v-select", {
                                      attrs: {
                                        items: e.proof_types,
                                        rules: [
                                          function (e) {
                                            return (
                                              !!e || "Proof type is required"
                                            );
                                          },
                                        ],
                                        label: "Proof Type",
                                      },
                                      model: {
                                        value: e.editedItem.proof_type,
                                        callback: function (t) {
                                          e.$set(e.editedItem, "proof_type", t);
                                        },
                                        expression: "editedItem.proof_type",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            a(
                              "v-row",
                              [
                                a(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "12", md: "12" } },
                                  [
                                    a("v-text-field", {
                                      attrs: {
                                        counter: 7,
                                        rules: e.proofSerieRules,
                                        label: "Proof Serie",
                                        required: "",
                                      },
                                      model: {
                                        value: e.editedItem.proof_serie,
                                        callback: function (t) {
                                          e.$set(
                                            e.editedItem,
                                            "proof_serie",
                                            t
                                          );
                                        },
                                        expression: "editedItem.proof_serie",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            a(
                              "v-row",
                              [
                                a(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "12", md: "12" } },
                                  [
                                    a("v-text-field", {
                                      attrs: {
                                        counter: 10,
                                        rules: e.proofNumberRules,
                                        label: "Proof Number",
                                        required: "",
                                      },
                                      model: {
                                        value: e.editedItem.proof_num,
                                        callback: function (t) {
                                          e.$set(e.editedItem, "proof_num", t);
                                        },
                                        expression: "editedItem.proof_num",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            a(
                              "v-row",
                              [
                                a(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "12", md: "12" } },
                                  [
                                    a("v-autocomplete", {
                                      attrs: {
                                        items: e.persons,
                                        rules: [
                                          function (e) {
                                            return (
                                              !!e || "Provider is required"
                                            );
                                          },
                                        ],
                                        label: "Provider",
                                      },
                                      model: {
                                        value: e.editedItem.person,
                                        callback: function (t) {
                                          e.$set(e.editedItem, "person", t);
                                        },
                                        expression: "editedItem.person",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            a(
                              "v-row",
                              [
                                a(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "12", md: "12" } },
                                  [
                                    a("v-text-field", {
                                      attrs: {
                                        type: "number",
                                        rules: e.taxRules,
                                        label: "Tax",
                                        required: "",
                                      },
                                      model: {
                                        value: e.editedItem.tax,
                                        callback: function (t) {
                                          e.$set(e.editedItem, "tax", t);
                                        },
                                        expression: "editedItem.tax",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            a(
                              "v-row",
                              [
                                a(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "12", md: "12" } },
                                  [
                                    a("v-text-field", {
                                      attrs: { label: "Code" },
                                      on: {
                                        keyup: function (t) {
                                          return !t.type.indexOf("key") &&
                                            e._k(
                                              t.keyCode,
                                              "enter",
                                              13,
                                              t.key,
                                              "Enter"
                                            )
                                            ? null
                                            : e.searchCode();
                                        },
                                      },
                                      model: {
                                        value: e.code,
                                        callback: function (t) {
                                          e.code = t;
                                        },
                                        expression: "code",
                                      },
                                    }),
                                    e.errorItem
                                      ? a(
                                          "v-flex",
                                          { staticClass: "red--text" },
                                          [e._v(e._s(e.errorItem))]
                                        )
                                      : e._e(),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            a(
                              "v-row",
                              [
                                a(
                                  "v-dialog",
                                  {
                                    attrs: { "max-width": "800px" },
                                    scopedSlots: e._u(
                                      [
                                        {
                                          key: "activator",
                                          fn: function (t) {
                                            var s = t.on;
                                            return [
                                              a(
                                                "v-btn",
                                                e._g(
                                                  {
                                                    attrs: {
                                                      small: "",
                                                      fab: "",
                                                      dark: "",
                                                      color: "teal",
                                                    },
                                                  },
                                                  s
                                                ),
                                                [
                                                  a(
                                                    "v-icon",
                                                    { attrs: { dark: "" } },
                                                    [e._v("list")]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ];
                                          },
                                        },
                                      ],
                                      null,
                                      !1,
                                      105380994
                                    ),
                                    model: {
                                      value: e.dialog,
                                      callback: function (t) {
                                        e.dialog = t;
                                      },
                                      expression: "dialog",
                                    },
                                  },
                                  [
                                    a(
                                      "v-card",
                                      [
                                        a("v-card-title", [
                                          a(
                                            "span",
                                            { staticClass: "headline" },
                                            [e._v("Select a item")]
                                          ),
                                        ]),
                                        a(
                                          "v-card-text",
                                          [
                                            a(
                                              "v-container",
                                              [
                                                a("v-text-field", {
                                                  staticClass: "text-xs-center",
                                                  attrs: {
                                                    "append-icon": "search",
                                                    label: "Search",
                                                  },
                                                  on: {
                                                    keyup: function (t) {
                                                      return !t.type.indexOf(
                                                        "key"
                                                      ) &&
                                                        e._k(
                                                          t.keyCode,
                                                          "enter",
                                                          13,
                                                          t.key,
                                                          "Enter"
                                                        )
                                                        ? null
                                                        : e.getItems();
                                                    },
                                                  },
                                                  model: {
                                                    value: e.text,
                                                    callback: function (t) {
                                                      e.text = t;
                                                    },
                                                    expression: "text",
                                                  },
                                                }),
                                                [
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-data-table", {
                                                            staticClass:
                                                              "elevation-1",
                                                            attrs: {
                                                              headers:
                                                                e.headersItems,
                                                              items: e.items,
                                                            },
                                                            scopedSlots: e._u(
                                                              [
                                                                {
                                                                  key: "top",
                                                                  fn: function () {},
                                                                  proxy: !0,
                                                                },
                                                                {
                                                                  key:
                                                                    "item.state",
                                                                  fn: function (
                                                                    t
                                                                  ) {
                                                                    var s =
                                                                      t.item;
                                                                    return [
                                                                      s.state
                                                                        ? a(
                                                                            "div",
                                                                            [
                                                                              a(
                                                                                "span",
                                                                                {
                                                                                  staticClass:
                                                                                    "blue--text",
                                                                                },
                                                                                [
                                                                                  e._v(
                                                                                    "Active"
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          )
                                                                        : a(
                                                                            "div",
                                                                            [
                                                                              a(
                                                                                "span",
                                                                                {
                                                                                  staticClass:
                                                                                    "red--text",
                                                                                },
                                                                                [
                                                                                  e._v(
                                                                                    "Inactive"
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          ),
                                                                    ];
                                                                  },
                                                                },
                                                                {
                                                                  key:
                                                                    "item.actions",
                                                                  fn: function (
                                                                    t
                                                                  ) {
                                                                    var s =
                                                                      t.item;
                                                                    return [
                                                                      a(
                                                                        "v-icon",
                                                                        {
                                                                          attrs: {
                                                                            small:
                                                                              "",
                                                                          },
                                                                          on: {
                                                                            click: function (
                                                                              t
                                                                            ) {
                                                                              return e.addToDetails(
                                                                                s
                                                                              );
                                                                            },
                                                                          },
                                                                        },
                                                                        [
                                                                          e._v(
                                                                            "add"
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ];
                                                                  },
                                                                },
                                                              ],
                                                              null,
                                                              !1,
                                                              1577150313
                                                            ),
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                              ],
                                              2
                                            ),
                                          ],
                                          1
                                        ),
                                        a(
                                          "v-card-actions",
                                          [
                                            a("v-spacer"),
                                            a(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color: "blue darken-1",
                                                  text: "",
                                                },
                                                on: {
                                                  click: function (t) {
                                                    return e.closeModalItem();
                                                  },
                                                },
                                              },
                                              [e._v("Cancel")]
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            a(
                              "v-row",
                              [
                                [
                                  a(
                                    "v-col",
                                    {
                                      attrs: { cols: "12", sm: "12", md: "12" },
                                    },
                                    [
                                      a("v-data-table", {
                                        staticClass: "elevation-1",
                                        attrs: {
                                          headers: e.headersDetails,
                                          items: e.editedItem.details,
                                          "hide-default-footer": "",
                                        },
                                        scopedSlots: e._u(
                                          [
                                            {
                                              key: "top",
                                              fn: function () {},
                                              proxy: !0,
                                            },
                                            {
                                              key: "item.amount",
                                              fn: function (t) {
                                                var s = t.item;
                                                return [
                                                  a("v-text-field", {
                                                    attrs: { type: "number" },
                                                    model: {
                                                      value: s.amount,
                                                      callback: function (t) {
                                                        e.$set(s, "amount", t);
                                                      },
                                                      expression: "item.amount",
                                                    },
                                                  }),
                                                ];
                                              },
                                            },
                                            {
                                              key: "item.price",
                                              fn: function (t) {
                                                var s = t.item;
                                                return [
                                                  a("v-text-field", {
                                                    attrs: { type: "number" },
                                                    model: {
                                                      value: s.price,
                                                      callback: function (t) {
                                                        e.$set(s, "price", t);
                                                      },
                                                      expression: "item.price",
                                                    },
                                                  }),
                                                ];
                                              },
                                            },
                                            {
                                              key: "item.subTotal",
                                              fn: function (t) {
                                                var a = t.item;
                                                return [
                                                  e._v(
                                                    "$ " +
                                                      e._s(a.amount * a.price)
                                                  ),
                                                ];
                                              },
                                            },
                                            {
                                              key: "item.actions",
                                              fn: function (t) {
                                                var s = t.item;
                                                return [
                                                  a(
                                                    "v-icon",
                                                    {
                                                      attrs: { small: "" },
                                                      on: {
                                                        click: function (t) {
                                                          return e.removeFromDetails(
                                                            e.editedItem
                                                              .details,
                                                            s
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [e._v("delete")]
                                                  ),
                                                ];
                                              },
                                            },
                                          ],
                                          null,
                                          !1,
                                          3165193409
                                        ),
                                      }),
                                      a("v-spacer"),
                                      a(
                                        "v-flex",
                                        { staticClass: "text-xs-right" },
                                        [
                                          a("strong", [e._v("Partial Total:")]),
                                          e._v(
                                            " $ " +
                                              e._s(
                                                (e.partialTotal = (
                                                  e.total - e.taxTotal
                                                ).toFixed(2))
                                              ) +
                                              " "
                                          ),
                                        ]
                                      ),
                                      a(
                                        "v-flex",
                                        { staticClass: "text-xs-right" },
                                        [
                                          a("strong", [e._v("Tax Total:")]),
                                          e._v(
                                            " $ " +
                                              e._s(
                                                (e.taxTotal = (
                                                  (e.total * e.editedItem.tax) /
                                                  (1 + e.editedItem.tax)
                                                ).toFixed(2))
                                              ) +
                                              " "
                                          ),
                                        ]
                                      ),
                                      a(
                                        "v-flex",
                                        { staticClass: "text-xs-right" },
                                        [
                                          a("strong", [e._v("Total:")]),
                                          e._v(
                                            " $ " +
                                              e._s(
                                                (e.total = e.calculateTotal)
                                              ) +
                                              " "
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                              ],
                              2
                            ),
                            a(
                              "v-row",
                              [
                                a("v-spacer"),
                                a(
                                  "v-btn",
                                  {
                                    attrs: { color: "blue darken-1", text: "" },
                                    on: { click: e.close },
                                  },
                                  [e._v("Cancel")]
                                ),
                                e.edited
                                  ? e._e()
                                  : a(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "blue darken-1",
                                          text: "",
                                        },
                                        on: { click: e.save },
                                      },
                                      [e._v("Save")]
                                    ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : e._e(),
              ],
              1
            ),
          ],
          1
        );
      },
      Ue = [],
      Ge = {
        data: function () {
          return {
            dialog: !1,
            search: "",
            incomes: [],
            persons: [],
            items: [],
            proof_types: ["BOLLET", "BILL", "TICKET", "GUIDE"],
            headers: [
              { text: "User", value: "user.name", sortable: !0 },
              { text: "Provider", value: "person.name", sortable: !0 },
              { text: "Proof Type", value: "proof_type", sortable: !0 },
              { text: "Proof Serie", value: "proof_serie", sortable: !1 },
              { text: "Proof Number", value: "proof_num", sortable: !1 },
              { text: "Date", value: "createdAt", sortable: !1 },
              { text: "Tax", value: "tax", sortable: !1 },
              { text: "Total", value: "total", sortable: !1 },
              { text: "State", value: "state", sortable: !1 },
              { text: "Actions", value: "actions", sortable: !1 },
            ],
            headersDetails: [
              { text: "Item", value: "item", sortable: !1 },
              { text: "Amount", value: "amount", sortable: !1 },
              { text: "Price", value: "price", sortable: !1 },
              { text: "Sub Total", value: "subTotal", sortable: !1 },
              { text: "Actions", value: "actions", sortable: !1 },
            ],
            headersItems: [
              { text: "Code", value: "code", sortable: !1 },
              { text: "Name", value: "name", sortable: !0 },
              { text: "Category", value: "category.name", sortable: !0 },
              { text: "Stock", value: "stock", sortable: !1 },
              { text: "Price", value: "price", sortable: !1 },
              { text: "Description", value: "description", sortable: !1 },
              { text: "State", value: "state", sortable: !1 },
              { text: "Actions", value: "actions", sortable: !1 },
            ],
            edited: !1,
            code: "",
            text: "",
            errorItem: "",
            showNew: 0,
            editedItem: {
              person: "",
              proof_type: "",
              proof_serie: "",
              proof_num: "",
              tax: 0.12,
              details: [],
            },
            defaultItem: {
              person: "",
              proof_type: "",
              proof_serie: "",
              proof_num: "",
              tax: 0.12,
              details: [],
            },
            valid: !0,
            proofSerieRules: [
              function (e) {
                return !!e || "Proof serie is required";
              },
              function (e) {
                return (
                  (e && e.length <= 7) ||
                  "Proof serie must be less than 7 characters"
                );
              },
            ],
            proofNumberRules: [
              function (e) {
                return !!e || "Proof number is required";
              },
              function (e) {
                return (
                  (e && e.length <= 10) ||
                  "Proof number must be less than 10 characters"
                );
              },
            ],
            taxRules: [
              function (e) {
                return e > 0 || "Tax must be greater than 0";
              },
            ],
            modal: !1,
            partialTotal: 0,
            taxTotal: 0,
            total: 0,
            stateItem: { _id: "", name: "", action: 0 },
            stateDefaultItem: { _id: "", name: "", action: 0 },
          };
        },
        computed: {
          calculateTotal: function () {
            for (var e = 0, t = 0; t < this.editedItem.details.length; t++)
              e +=
                this.editedItem.details[t].amount *
                this.editedItem.details[t].price;
            return console.log(e), e;
          },
        },
        watch: {
          dialog: function (e) {
            e || this.closeModalItem();
          },
        },
        created: function () {
          this.getPersons(), this.initialize();
        },
        methods: {
          initialize: function () {
            var e = this,
              t = { Token: this.$store.state.token },
              a = { headers: t };
            E.a
              .get("/income/list", a)
              .then(function (t) {
                e.incomes = t.data;
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          getPersons: function () {
            var e = this,
              t = [],
              a = { Token: this.$store.state.token },
              s = { headers: a };
            E.a
              .get("/person/list-providers", s)
              .then(function (a) {
                (t = a.data),
                  t.map(function (t) {
                    e.persons.push({ text: t.name, value: t._id });
                  });
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          getItems: function () {
            var e = this;
            this.items = [];
            var t = { Token: this.$store.state.token },
              a = { headers: t };
            E.a
              .get("/item/list?value=" + this.text, a)
              .then(function (t) {
                console.log(t), (e.items = t.data);
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          getDetails: function (e) {
            var t = this;
            this.items = [];
            var a = { Token: this.$store.state.token },
              s = { headers: a };
            E.a
              .get("/income/query?_id=" + e, s)
              .then(function (e) {
                console.log(e.data.details),
                  (t.editedItem.details = e.data.details);
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          showIncome: function (e) {
            console.log(e),
              (this.editedItem.person = e.person._id),
              (this.editedItem.proof_type = e.proof_type),
              (this.editedItem.proof_serie = e.proof_serie),
              (this.editedItem.proof_num = e.proof_num),
              (this.editedItem.tax = e.tax),
              (this.edited = !0),
              console.log(this.edited),
              this.getDetails(e._id),
              this.showNewHandle();
          },
          searchCode: function () {
            var e = this;
            this.errorItem = "";
            var t = { Token: this.$store.state.token },
              a = { headers: t };
            E.a
              .get("/item/query-code?code=" + this.code, a)
              .then(function (t) {
                console.log(t.data), e.addToDetails(t.data);
              })
              .catch(function (t) {
                e.errorItem = "Item not found";
              });
          },
          addToDetails: function (e) {
            (this.errorItem = ""),
              this.findItem(e._id)
                ? (this.errorItem = "Item has already been added")
                : (this.editedItem.details.push({
                    _id: e._id,
                    item: e.name,
                    amount: 1,
                    price: e.price,
                  }),
                  (this.code = ""));
          },
          removeFromDetails: function (e, t) {
            var a = e.indexOf(t);
            -1 !== a && e.splice(a, 1);
          },
          findItem: function (e) {
            for (var t = !1, a = 0; a < this.editedItem.details.length; a++)
              this.editedItem.details[a]._id === e && (t = !0);
            return t;
          },
          showNewHandle: function () {
            this.showNew = 1;
          },
          showModalItem: function () {
            console.log("Entra a show modal item"), (this.dialog = !0);
          },
          closeModalItem: function () {
            (this.text = ""), (this.items = []), (this.dialog = !1);
          },
          close: function () {
            var e = this;
            (this.dialog = !1),
              setTimeout(function () {
                (e.editedItem = Object.assign({}, e.defaultItem)),
                  (e.total = 0),
                  (e.taxTotal = 0),
                  (e.partialTotal = 0),
                  (e.edited = !1),
                  (e.showNew = 0);
              }, 300);
          },
          save: function () {
            var e = this;
            if (((this.errorItem = ""), this.$refs.form.validate()))
              if (0 !== this.editedItem.details.length) {
                var t = { Token: this.$store.state.token },
                  a = { headers: t };
                console.log(this.editedItem),
                  E.a
                    .post(
                      "/income/add",
                      {
                        person: this.editedItem.person,
                        user: this.$store.state.user._id,
                        proof_type: this.editedItem.proof_type,
                        proof_serie: this.editedItem.proof_serie,
                        proof_num: this.editedItem.proof_num,
                        tax: this.editedItem.tax,
                        total: this.total,
                        details: this.editedItem.details,
                      },
                      a
                    )
                    .then(function (t) {
                      e.close(), e.initialize();
                    })
                    .catch(function (e) {
                      console.log(e);
                    }),
                  this.close();
              } else this.errorItem = "No item has been added";
          },
          activateDeactivate: function (e, t) {
            (this.modal = !0),
              (this.stateItem._id = t._id),
              (this.stateItem.name = t.proof_num),
              (this.stateItem.action = e);
          },
          closeModal: function () {
            var e = this;
            (this.modal = !1),
              setTimeout(function () {
                e.stateItem = Object.assign({}, e.stateDefaultItem);
              }, 300);
          },
          activate: function () {
            var e = this,
              t = { Token: this.$store.state.token },
              a = { headers: t };
            E.a
              .put("/income/activate", { _id: this.stateItem._id }, a)
              .then(function (t) {
                e.closeModal(), e.initialize();
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          deactivate: function () {
            var e = this,
              t = { Token: this.$store.state.token },
              a = { headers: t };
            E.a
              .put("/income/deactivate", { _id: this.stateItem._id }, a)
              .then(function (t) {
                e.closeModal(), e.initialize();
              })
              .catch(function (e) {
                console.log(e);
              });
          },
        },
      },
      He = Ge,
      Be = a("c6a6"),
      Ke = Object(c["a"])(He, Le, Ue, !1, null, null, null),
      We = Ke.exports;
    d()(Ke, {
      VAutocomplete: Be["a"],
      VBtn: h["a"],
      VCard: Z["a"],
      VCardActions: Y["a"],
      VCardText: Y["b"],
      VCardTitle: Y["c"],
      VCol: f["a"],
      VContainer: p["a"],
      VDataTable: ee["a"],
      VDialog: te["a"],
      VDivider: ae["a"],
      VFlex: G["a"],
      VForm: se["a"],
      VIcon: x["a"],
      VLayout: H["a"],
      VRow: ie["a"],
      VSelect: xe["a"],
      VSpacer: V["a"],
      VTextField: oe["a"],
      VToolbar: ne["a"],
      VToolbarTitle: j["a"],
    });
    var Xe = function () {
        var e = this,
          t = e.$createElement,
          a = e._self._c || t;
        return a(
          "v-layout",
          { attrs: { "align-start": "" } },
          [
            a(
              "v-flex",
              [
                0 === e.showNew
                  ? a("v-data-table", {
                      staticClass: "elevation-1",
                      attrs: {
                        headers: e.headers,
                        items: e.sales,
                        search: e.search,
                      },
                      scopedSlots: e._u(
                        [
                          {
                            key: "top",
                            fn: function () {
                              return [
                                a(
                                  "v-toolbar",
                                  { attrs: { flat: "", color: "white" } },
                                  [
                                    a("v-toolbar-title", [e._v("Sales")]),
                                    a("v-divider", {
                                      staticClass: "mx-4",
                                      attrs: { inset: "", vertical: "" },
                                    }),
                                    a("v-spacer"),
                                    0 === e.showNew
                                      ? a("v-text-field", {
                                          staticClass: "text-xs-center",
                                          attrs: {
                                            "append-icon": "search",
                                            label: "Search",
                                            "single-line": "",
                                            "hide-details": "",
                                          },
                                          model: {
                                            value: e.search,
                                            callback: function (t) {
                                              e.search = t;
                                            },
                                            expression: "search",
                                          },
                                        })
                                      : e._e(),
                                    a("v-spacer"),
                                    0 === e.showNew
                                      ? a(
                                          "v-btn",
                                          {
                                            staticClass: "mb-2",
                                            attrs: {
                                              color: "primary",
                                              dark: "",
                                            },
                                            on: {
                                              click: function (t) {
                                                return e.showNewHandle();
                                              },
                                            },
                                          },
                                          [e._v("New")]
                                        )
                                      : e._e(),
                                    a(
                                      "v-dialog",
                                      {
                                        attrs: { "max-width": "500px" },
                                        model: {
                                          value: e.modal,
                                          callback: function (t) {
                                            e.modal = t;
                                          },
                                          expression: "modal",
                                        },
                                      },
                                      [
                                        a(
                                          "v-card",
                                          [
                                            a("v-card-title", [
                                              1 === e.stateItem.action
                                                ? a(
                                                    "span",
                                                    { staticClass: "headline" },
                                                    [e._v("Activate sale")]
                                                  )
                                                : e._e(),
                                              2 === e.stateItem.action
                                                ? a(
                                                    "span",
                                                    { staticClass: "headline" },
                                                    [e._v("Deactivate sale")]
                                                  )
                                                : e._e(),
                                            ]),
                                            a("v-card-text", [
                                              e._v(" Are you sure "),
                                              1 === e.stateItem.action
                                                ? a("span", [e._v("activate")])
                                                : e._e(),
                                              2 === e.stateItem.action
                                                ? a("span", [
                                                    e._v("deactivate"),
                                                  ])
                                                : e._e(),
                                              e._v(
                                                " the sale " +
                                                  e._s(e.stateItem.name) +
                                                  " "
                                              ),
                                            ]),
                                            a(
                                              "v-card-actions",
                                              [
                                                a("v-spacer"),
                                                a(
                                                  "v-btn",
                                                  {
                                                    attrs: {
                                                      color: "grey darken-1",
                                                      text: "",
                                                    },
                                                    on: { click: e.closeModal },
                                                  },
                                                  [e._v("Cancel")]
                                                ),
                                                1 === e.stateItem.action
                                                  ? a(
                                                      "v-btn",
                                                      {
                                                        attrs: {
                                                          color: "red darken-1",
                                                          text: "",
                                                        },
                                                        on: {
                                                          click: e.activate,
                                                        },
                                                      },
                                                      [e._v("Activate")]
                                                    )
                                                  : e._e(),
                                                2 === e.stateItem.action
                                                  ? a(
                                                      "v-btn",
                                                      {
                                                        attrs: {
                                                          color: "red darken-1",
                                                          text: "",
                                                        },
                                                        on: {
                                                          click: e.deactivate,
                                                        },
                                                      },
                                                      [e._v("Deactivate")]
                                                    )
                                                  : e._e(),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                    [
                                      a(
                                        "v-dialog",
                                        {
                                          attrs: { "max-width": "1000px" },
                                          model: {
                                            value: e.proofModal,
                                            callback: function (t) {
                                              e.proofModal = t;
                                            },
                                            expression: "proofModal",
                                          },
                                        },
                                        [
                                          a(
                                            "v-card",
                                            [
                                              a(
                                                "v-card-title",
                                                [
                                                  a(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "blue darken-1",
                                                        text: "",
                                                      },
                                                      on: {
                                                        click: e.generatePDF,
                                                      },
                                                    },
                                                    [
                                                      a("v-icon", [
                                                        e._v("print"),
                                                      ]),
                                                    ],
                                                    1
                                                  ),
                                                  a(
                                                    "span",
                                                    { staticClass: "headline" },
                                                    [e._v("Sale report")]
                                                  ),
                                                ],
                                                1
                                              ),
                                              a("v-card-text", [
                                                a(
                                                  "div",
                                                  { attrs: { id: "bill" } },
                                                  [
                                                    a("header", [
                                                      a(
                                                        "div",
                                                        {
                                                          attrs: { id: "logo" },
                                                        },
                                                        [
                                                          a("img", {
                                                            attrs: {
                                                              src:
                                                                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX////tHCTsAAD84OHtEBrxY2bsCBXtDhntFh/sABDtEx34tLbsAAv70tP0iYzze37+8/P829z3rK795eb5vsD96+zwVFj5x8jzd3rzgIP5wsTwUVX70dL1k5bvPUPwWFzxZWnwSE3uLTT1mZvzhIbvOj/uLTP4sbPvQkfyb3P+9vbuNDr2oKL0j5G/lkIGAAAHyElEQVR4nO2dbXuiOhCGYYq8+1q1aqtotbW22///9xatPUeSwAxICOw196fdvRbJA8nMZDIJlsUwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMOU5rE/newHh+FisTzsJ9OXx0/TLaqPh+i7Z0NKHLg/BPH5r35yOI47r7P/J/EBXMe3FYRuDO7z+sV0I+9hDoGj0nYrMwDoHWemW1qVHqbvByeGJDLd1moQFZ5FAgzHpptbAbrCFBd2U9MNLk0phemYhNej6SaXpKRC2/bhvVvvsbTCs8aP9rqPz61oKyooPPfV08hI+1EiFx6Ef6qkMLU5wcSIgmJGCdh1KbRteG5dDLCKPbtGhal/bJnFWcLlydenMP2xhRElaka72K5doR28taanjt2rkHoV2mHcEr8xhd+5Uc0KU9/YihDnD/zXoroVpr+4NqIpwwBu2lO7QhuWRlTdsITb5tSv0LhJzQjUotCwxAFkG6NDodGO+geEtmhRaNDcTEFsih6Ftimn0RcFalNogxHXP3KlJKg2hX5sIoD7kFuvTaEdvjUvcBnL7dCn0A4a9xkraRDqVWg3PV8cKd6gXoU2NDsUE69xhc5zkwIjVR/VrNCGBtNTn25OG7QqtIPmkoyLKgp972dh9LJU6ikXFBHcU1MCx+o+WqDQdwHeT+voqT9+GPefovXpFUCOGDCg35DCXVhOoQf+ciVawtlq6UNOX8gj3DUjUOkK8xUGcMqLKl8WcVBKYkNO8Su3d8kKvQD2RfZhtIcyGv1XncJ+yfEUSoUJfKO/twalb825QxOL4fmvUFb4/Uj4wVkv/5lJL/FLh6Qs+aNQoZBIBHm2S77Fql45Cp4LGlNVoTXbUEdjqD12y/WFdym0rC21p4Luio1lkQu7Q6F1IEp0h/WJUVLYjnsUWt9EiVCbFiVSeq0+hWLyNfcmeh1GUjhZuE+htSWZGyepSYuSUfFjvlOhtSE5Da2T/YJ4hqBwPFkmu80uWU5y7OFMmRuR7qKzm26LZ7RFCtMoG2LX8X3fcdM/LZTRePEwv+L0dMmzEEtapHC1EWZKLmxU0UmPEqNqtKZyHp+mcPYMcjDrq2pmZpSXqDHHv0eMXY7CI6g7t6NYcVkT7Gmw16Zwjtg6tcICPwcD6X8TXmI416YQy5wpFS4KI1kpWb8n2FNPl8AH7PmqFCKRivQW1dl04SJd0XeE3VyhEPGgCu+Wl6q8IdblEQfYvWWFBNsohigv+CWuPHzroTgoVSqc40lvR7QbNppHDXWFpuitJYVPJPf2lL2ocAp6wbf1CPxEmysp/KCE0uFH9qKiTNDvjfRsl3osrRCLgX4vyybrKWOXksMrD95eUeGQlrUXExOv6EDUtICBB/6iQmoCLchedkLDb03Z/QnqiwWFhXm5zHVZD47HprGexVIs7pYU4o9E3WA0stAVe6MOX1R4oC6euYfMdbiP0eTy8QYLCslr3MKsHTdpwiOpC9wyCuMpdyVVRFj5xMevprQwHhIL73BDXcb2N5nr0DmM7eqpkPr33yFhHGYdcefGIcGWZmPoztlS3B8KM9PO+UO8wUG2ILtzMQ0el3pC0VLX4lLcAPjv2Su6NrfA54dizqVr80N8ji9VSnRsjk9IEbnC9paO5WmsBH0jvi9egq8leWKuzTeXa8NdvrQs1LF8Ke6J5ZC4WzlvigePxUpEpIhEKu0zum5hESyjHE8NC9eepEkCHhumkbougej64aXN0lUFb1FRnGl2/ZDyfAN5s2CUuwYsjyfDa8AEM6csd5nNFeWVIczbt45P6UK2p3JWTx9SLcbHk+L/Efyn3so2pJ7m2gClLe8Pg3M9TeiH53qaYKiMnVHfckZrPQ2pBbllWePJobfb7HqH3Joo2s/rrIlC6tquVN4O+Uara9O6OQhdBr4QbCv9eBtqE4nd1IYquTBilbDuDQnUQt7ysTGxgFZ3jTBh8nZtR9m3SK7z1n3CAj1/ti31u+2p1S/cb5GhzCFIs7f27LegZFF+G0O2Ce3aM1O070lqTkJ5jbOkXfueqA7jgkfYu/bdur1rhITtDQGsO7f/kFZufqsxfw/pqZS+5g5WIK98XvHAGU6lfcDToVOmf55pah8wNVl/y3kv93Z9vO7lPq6371B2m7Pd4F5u61S+cekYcm7246sP+EZobj++NSo3euqiwTMVrGP5fno/zZ4WNS9pI2pAWt/QC20PVq00fVRUSad4P82fSTts9i3GBs4W3NR69gyCs8EbVDuzoIpPq4YfGDlwt0JoUxUzZ+6Vm0fdJ9DYxy/2zUgEfWtNKNQM4H0C9RQiEilc4K1JoO5jIkxLNC1Qe0c120V/0GpuTBqZ/4kUW9HroSVnsqeuH/1sVTWcoCXn6p8PQdIRhseb1nwbwdJiUk0fxi4yjeud9Xtxy75RcqmZqVGgqtbGPMegSpJRhRu0xIaKjE70VbIC2vu9p5T+7m7f6MOuscx2Jaavd2n04bV1FkYi+qrcV0P46saHHlfPFVZdzqs3zw0sYdfEeAk5NaV5dPAbllFCF5nK6+R3SGdRDyDAxuTlW7JRG/07jZf93IHYDVX21T9/D9ibd/t7wBfG0SBRf9N5EHVs6BXx+fNd7uVwOFwO/rXvcjMMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzTGXxaidiHpPPEhAAAAAElFTkSuQmCC",
                                                              id: "imagen",
                                                            },
                                                          }),
                                                        ]
                                                      ),
                                                      a(
                                                        "div",
                                                        {
                                                          attrs: {
                                                            id: "datos",
                                                          },
                                                        },
                                                        [
                                                          a(
                                                            "p",
                                                            {
                                                              attrs: {
                                                                id:
                                                                  "encabezado",
                                                              },
                                                            },
                                                            [
                                                              a("b", [
                                                                e._v(
                                                                  "IncanatoIT"
                                                                ),
                                                              ]),
                                                              a("br"),
                                                              e._v(
                                                                "José Gálvez 1368, Chongoyape - Chiclayo, Perú"
                                                              ),
                                                              a("br"),
                                                              e._v(
                                                                "Telefono:(+51)931742904"
                                                              ),
                                                              a("br"),
                                                              e._v(
                                                                "Email:jcarlos.ad7@gmail.com "
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                      a(
                                                        "div",
                                                        {
                                                          attrs: { id: "fact" },
                                                        },
                                                        [
                                                          a("p", [
                                                            e._v(
                                                              " " +
                                                                e._s(
                                                                  e.editedItem
                                                                    .proof_type
                                                                )
                                                            ),
                                                            a("br"),
                                                            e._v(
                                                              " " +
                                                                e._s(
                                                                  e.editedItem
                                                                    .proof_serie
                                                                ) +
                                                                "-" +
                                                                e._s(
                                                                  e.editedItem
                                                                    .proof_num
                                                                )
                                                            ),
                                                            a("br"),
                                                            e._v(
                                                              " " +
                                                                e._s(
                                                                  e.editedItem
                                                                    .proofDate
                                                                ) +
                                                                " "
                                                            ),
                                                          ]),
                                                        ]
                                                      ),
                                                    ]),
                                                    a("br"),
                                                    a("section", [
                                                      a("div", [
                                                        a(
                                                          "table",
                                                          {
                                                            attrs: {
                                                              id: "facliente",
                                                            },
                                                          },
                                                          [
                                                            a("tbody", [
                                                              a("tr", [
                                                                a(
                                                                  "td",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "cliente",
                                                                    },
                                                                  },
                                                                  [
                                                                    a(
                                                                      "strong",
                                                                      [
                                                                        e._v(
                                                                          "Sr(a). " +
                                                                            e._s(
                                                                              e
                                                                                .editedItem
                                                                                .person
                                                                                .name
                                                                            )
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    a("br"),
                                                                    a(
                                                                      "strong",
                                                                      [
                                                                        e._v(
                                                                          "Documento:"
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    e._v(
                                                                      " " +
                                                                        e._s(
                                                                          e
                                                                            .editedItem
                                                                            .person
                                                                            .doc_num
                                                                        )
                                                                    ),
                                                                    a("br"),
                                                                    a(
                                                                      "strong",
                                                                      [
                                                                        e._v(
                                                                          "Dirección:"
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    e._v(
                                                                      " " +
                                                                        e._s(
                                                                          e
                                                                            .editedItem
                                                                            .person
                                                                            .address
                                                                        ) +
                                                                        " "
                                                                    ),
                                                                    a("br"),
                                                                    a(
                                                                      "strong",
                                                                      [
                                                                        e._v(
                                                                          "Teléfono:"
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    e._v(
                                                                      e._s(
                                                                        e
                                                                          .editedItem
                                                                          .person
                                                                          .phone
                                                                      )
                                                                    ),
                                                                    a("br"),
                                                                    a(
                                                                      "strong",
                                                                      [
                                                                        e._v(
                                                                          "Email:"
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    e._v(
                                                                      " " +
                                                                        e._s(
                                                                          e
                                                                            .editedItem
                                                                            .person
                                                                            .email
                                                                        ) +
                                                                        " "
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]),
                                                            ]),
                                                          ]
                                                        ),
                                                      ]),
                                                    ]),
                                                    a("br"),
                                                    a("section", [
                                                      a("div", [
                                                        a(
                                                          "table",
                                                          {
                                                            attrs: {
                                                              id: "facarticulo",
                                                            },
                                                          },
                                                          [
                                                            a("thead", [
                                                              a(
                                                                "tr",
                                                                {
                                                                  attrs: {
                                                                    id: "fa",
                                                                  },
                                                                },
                                                                [
                                                                  a("th", [
                                                                    e._v(
                                                                      "CANT"
                                                                    ),
                                                                  ]),
                                                                  a("th", [
                                                                    e._v(
                                                                      "DESCRIPCION"
                                                                    ),
                                                                  ]),
                                                                  a("th", [
                                                                    e._v(
                                                                      "PRECIO UNIT"
                                                                    ),
                                                                  ]),
                                                                  a("th", [
                                                                    e._v(
                                                                      "DESC."
                                                                    ),
                                                                  ]),
                                                                  a("th", [
                                                                    e._v(
                                                                      "PRECIO TOTAL"
                                                                    ),
                                                                  ]),
                                                                ]
                                                              ),
                                                            ]),
                                                            a(
                                                              "tbody",
                                                              e._l(
                                                                e.editedItem
                                                                  .details,
                                                                function (t) {
                                                                  return a(
                                                                    "tr",
                                                                    {
                                                                      key:
                                                                        t._id,
                                                                    },
                                                                    [
                                                                      a(
                                                                        "td",
                                                                        {
                                                                          staticStyle: {
                                                                            "text-align":
                                                                              "center",
                                                                          },
                                                                        },
                                                                        [
                                                                          e._v(
                                                                            " " +
                                                                              e._s(
                                                                                t.amount
                                                                              ) +
                                                                              " "
                                                                          ),
                                                                        ]
                                                                      ),
                                                                      a("td", [
                                                                        e._v(
                                                                          " " +
                                                                            e._s(
                                                                              t.item
                                                                            ) +
                                                                            " "
                                                                        ),
                                                                      ]),
                                                                      a(
                                                                        "td",
                                                                        {
                                                                          staticStyle: {
                                                                            "text-align":
                                                                              "right",
                                                                          },
                                                                        },
                                                                        [
                                                                          e._v(
                                                                            " " +
                                                                              e._s(
                                                                                t.price
                                                                              ) +
                                                                              " "
                                                                          ),
                                                                        ]
                                                                      ),
                                                                      a(
                                                                        "td",
                                                                        {
                                                                          staticStyle: {
                                                                            "text-align":
                                                                              "right",
                                                                          },
                                                                        },
                                                                        [
                                                                          e._v(
                                                                            " " +
                                                                              e._s(
                                                                                t.discount
                                                                              ) +
                                                                              " "
                                                                          ),
                                                                        ]
                                                                      ),
                                                                      a(
                                                                        "td",
                                                                        {
                                                                          staticStyle: {
                                                                            "text-align":
                                                                              "right",
                                                                          },
                                                                        },
                                                                        [
                                                                          e._v(
                                                                            " " +
                                                                              e._s(
                                                                                t.amount *
                                                                                  t.price -
                                                                                  t.discount
                                                                              ) +
                                                                              " "
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ]
                                                                  );
                                                                }
                                                              ),
                                                              0
                                                            ),
                                                            a("tfoot", [
                                                              a("tr", [
                                                                a("th"),
                                                                a("th"),
                                                                a("th"),
                                                                a(
                                                                  "th",
                                                                  {
                                                                    staticStyle: {
                                                                      "text-align":
                                                                        "right",
                                                                    },
                                                                  },
                                                                  [
                                                                    e._v(
                                                                      "SUBTOTAL"
                                                                    ),
                                                                  ]
                                                                ),
                                                                a(
                                                                  "th",
                                                                  {
                                                                    staticStyle: {
                                                                      "text-align":
                                                                        "right",
                                                                    },
                                                                  },
                                                                  [
                                                                    e._v(
                                                                      " $ " +
                                                                        e._s(
                                                                          (e.partialTotal = (
                                                                            e.total -
                                                                            e.taxTotal
                                                                          ).toFixed(
                                                                            2
                                                                          ))
                                                                        ) +
                                                                        " "
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]),
                                                              a("tr", [
                                                                a("th"),
                                                                a("th"),
                                                                a("th"),
                                                                a(
                                                                  "th",
                                                                  {
                                                                    staticStyle: {
                                                                      "text-align":
                                                                        "right",
                                                                    },
                                                                  },
                                                                  [
                                                                    e._v(
                                                                      " IVA (" +
                                                                        e._s(
                                                                          e
                                                                            .editedItem
                                                                            .tax
                                                                        ) +
                                                                        ") "
                                                                    ),
                                                                  ]
                                                                ),
                                                                a(
                                                                  "th",
                                                                  {
                                                                    staticStyle: {
                                                                      "text-align":
                                                                        "right",
                                                                    },
                                                                  },
                                                                  [
                                                                    e._v(
                                                                      " $ " +
                                                                        e._s(
                                                                          (e.taxTotal = (
                                                                            (e.total *
                                                                              e
                                                                                .editedItem
                                                                                .tax) /
                                                                            (1 +
                                                                              e
                                                                                .editedItem
                                                                                .tax)
                                                                          ).toFixed(
                                                                            2
                                                                          ))
                                                                        ) +
                                                                        " "
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]),
                                                              a("tr", [
                                                                a("th"),
                                                                a("th"),
                                                                a("th"),
                                                                a(
                                                                  "th",
                                                                  {
                                                                    staticStyle: {
                                                                      "text-align":
                                                                        "right",
                                                                    },
                                                                  },
                                                                  [
                                                                    e._v(
                                                                      "TOTAL"
                                                                    ),
                                                                  ]
                                                                ),
                                                                a(
                                                                  "th",
                                                                  {
                                                                    staticStyle: {
                                                                      "text-align":
                                                                        "right",
                                                                    },
                                                                  },
                                                                  [
                                                                    e._v(
                                                                      " $ " +
                                                                        e._s(
                                                                          (e.total =
                                                                            e.calculateTotal)
                                                                        ) +
                                                                        " "
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]),
                                                            ]),
                                                          ]
                                                        ),
                                                      ]),
                                                    ]),
                                                    a("br"),
                                                    a("br"),
                                                    a("footer", [
                                                      a(
                                                        "div",
                                                        {
                                                          attrs: {
                                                            id: "gracias",
                                                          },
                                                        },
                                                        [
                                                          a("p", [
                                                            a("b", [
                                                              e._v(
                                                                "Gracias por su compra!"
                                                              ),
                                                            ]),
                                                          ]),
                                                        ]
                                                      ),
                                                    ]),
                                                  ]
                                                ),
                                              ]),
                                              a(
                                                "v-card-actions",
                                                [
                                                  a("v-spacer"),
                                                  a(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "blue darken-1",
                                                        text: "",
                                                      },
                                                      on: {
                                                        click: e.hiddeProof,
                                                      },
                                                    },
                                                    [e._v("Cancel")]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                  ],
                                  2
                                ),
                              ];
                            },
                            proxy: !0,
                          },
                          {
                            key: "item.state",
                            fn: function (t) {
                              var s = t.item;
                              return [
                                s.state
                                  ? a("div", [
                                      a("span", { staticClass: "blue--text" }, [
                                        e._v("Accepted"),
                                      ]),
                                    ])
                                  : a("div", [
                                      a("span", { staticClass: "red--text" }, [
                                        e._v("Canceled"),
                                      ]),
                                    ]),
                              ];
                            },
                          },
                          {
                            key: "item.actions",
                            fn: function (t) {
                              var s = t.item;
                              return [
                                s.state
                                  ? [
                                      a(
                                        "v-icon",
                                        {
                                          attrs: { small: "" },
                                          on: {
                                            click: function (t) {
                                              return e.activateDeactivate(2, s);
                                            },
                                          },
                                        },
                                        [e._v("block")]
                                      ),
                                    ]
                                  : [
                                      a(
                                        "v-icon",
                                        {
                                          attrs: { small: "" },
                                          on: {
                                            click: function (t) {
                                              return e.activateDeactivate(1, s);
                                            },
                                          },
                                        },
                                        [e._v("check")]
                                      ),
                                    ],
                                [
                                  a(
                                    "v-icon",
                                    {
                                      attrs: { small: "" },
                                      on: {
                                        click: function (t) {
                                          return e.showIncome(s);
                                        },
                                      },
                                    },
                                    [e._v("tab")]
                                  ),
                                ],
                                [
                                  a(
                                    "v-icon",
                                    {
                                      staticClass: "mr-2",
                                      attrs: { small: "" },
                                      on: {
                                        click: function (t) {
                                          return e.showProof(s);
                                        },
                                      },
                                    },
                                    [e._v("print")]
                                  ),
                                ],
                              ];
                            },
                          },
                          {
                            key: "no-data",
                            fn: function () {
                              return [
                                a(
                                  "v-btn",
                                  {
                                    attrs: { color: "primary" },
                                    on: { click: e.initialize },
                                  },
                                  [e._v("Reset")]
                                ),
                              ];
                            },
                            proxy: !0,
                          },
                        ],
                        null,
                        !1,
                        1004332401
                      ),
                    })
                  : e._e(),
                e.showNew
                  ? a(
                      "v-container",
                      [
                        a(
                          "v-form",
                          {
                            ref: "form",
                            model: {
                              value: e.valid,
                              callback: function (t) {
                                e.valid = t;
                              },
                              expression: "valid",
                            },
                          },
                          [
                            a(
                              "v-row",
                              [
                                a(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "12", md: "12" } },
                                  [
                                    a("v-select", {
                                      attrs: {
                                        items: e.proof_types,
                                        rules: [
                                          function (e) {
                                            return (
                                              !!e || "Proof type is required"
                                            );
                                          },
                                        ],
                                        label: "Proof Type",
                                      },
                                      model: {
                                        value: e.editedItem.proof_type,
                                        callback: function (t) {
                                          e.$set(e.editedItem, "proof_type", t);
                                        },
                                        expression: "editedItem.proof_type",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            a(
                              "v-row",
                              [
                                a(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "12", md: "12" } },
                                  [
                                    a("v-text-field", {
                                      attrs: {
                                        counter: 7,
                                        rules: e.proofSerieRules,
                                        label: "Proof Serie",
                                        required: "",
                                      },
                                      model: {
                                        value: e.editedItem.proof_serie,
                                        callback: function (t) {
                                          e.$set(
                                            e.editedItem,
                                            "proof_serie",
                                            t
                                          );
                                        },
                                        expression: "editedItem.proof_serie",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            a(
                              "v-row",
                              [
                                a(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "12", md: "12" } },
                                  [
                                    a("v-text-field", {
                                      attrs: {
                                        counter: 10,
                                        rules: e.proofNumberRules,
                                        label: "Proof Number",
                                        required: "",
                                      },
                                      model: {
                                        value: e.editedItem.proof_num,
                                        callback: function (t) {
                                          e.$set(e.editedItem, "proof_num", t);
                                        },
                                        expression: "editedItem.proof_num",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            a(
                              "v-row",
                              [
                                a(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "12", md: "12" } },
                                  [
                                    a("v-autocomplete", {
                                      attrs: {
                                        items: e.persons,
                                        rules: [
                                          function (e) {
                                            return (
                                              !!e || "Customer is required"
                                            );
                                          },
                                        ],
                                        label: "Customer",
                                      },
                                      model: {
                                        value: e.editedItem.person,
                                        callback: function (t) {
                                          e.$set(e.editedItem, "person", t);
                                        },
                                        expression: "editedItem.person",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            a(
                              "v-row",
                              [
                                a(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "12", md: "12" } },
                                  [
                                    a("v-text-field", {
                                      attrs: {
                                        type: "number",
                                        rules: e.taxRules,
                                        label: "Tax",
                                        required: "",
                                      },
                                      model: {
                                        value: e.editedItem.tax,
                                        callback: function (t) {
                                          e.$set(e.editedItem, "tax", t);
                                        },
                                        expression: "editedItem.tax",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            a(
                              "v-row",
                              [
                                a(
                                  "v-col",
                                  { attrs: { cols: "12", sm: "12", md: "12" } },
                                  [
                                    a("v-text-field", {
                                      attrs: { label: "Code" },
                                      on: {
                                        keyup: function (t) {
                                          return !t.type.indexOf("key") &&
                                            e._k(
                                              t.keyCode,
                                              "enter",
                                              13,
                                              t.key,
                                              "Enter"
                                            )
                                            ? null
                                            : e.searchCode();
                                        },
                                      },
                                      model: {
                                        value: e.code,
                                        callback: function (t) {
                                          e.code = t;
                                        },
                                        expression: "code",
                                      },
                                    }),
                                    e.errorItem
                                      ? a(
                                          "v-flex",
                                          { staticClass: "red--text" },
                                          [e._v(e._s(e.errorItem))]
                                        )
                                      : e._e(),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            a(
                              "v-row",
                              [
                                a(
                                  "v-dialog",
                                  {
                                    attrs: { "max-width": "800px" },
                                    scopedSlots: e._u(
                                      [
                                        {
                                          key: "activator",
                                          fn: function (t) {
                                            var s = t.on;
                                            return [
                                              a(
                                                "v-btn",
                                                e._g(
                                                  {
                                                    attrs: {
                                                      small: "",
                                                      fab: "",
                                                      dark: "",
                                                      color: "teal",
                                                    },
                                                  },
                                                  s
                                                ),
                                                [
                                                  a(
                                                    "v-icon",
                                                    { attrs: { dark: "" } },
                                                    [e._v("list")]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ];
                                          },
                                        },
                                      ],
                                      null,
                                      !1,
                                      105380994
                                    ),
                                    model: {
                                      value: e.dialog,
                                      callback: function (t) {
                                        e.dialog = t;
                                      },
                                      expression: "dialog",
                                    },
                                  },
                                  [
                                    a(
                                      "v-card",
                                      [
                                        a("v-card-title", [
                                          a(
                                            "span",
                                            { staticClass: "headline" },
                                            [e._v("Select a item")]
                                          ),
                                        ]),
                                        a(
                                          "v-card-text",
                                          [
                                            a(
                                              "v-container",
                                              [
                                                a("v-text-field", {
                                                  staticClass: "text-xs-center",
                                                  attrs: {
                                                    "append-icon": "search",
                                                    label: "Search",
                                                  },
                                                  on: {
                                                    keyup: function (t) {
                                                      return !t.type.indexOf(
                                                        "key"
                                                      ) &&
                                                        e._k(
                                                          t.keyCode,
                                                          "enter",
                                                          13,
                                                          t.key,
                                                          "Enter"
                                                        )
                                                        ? null
                                                        : e.getItems();
                                                    },
                                                  },
                                                  model: {
                                                    value: e.text,
                                                    callback: function (t) {
                                                      e.text = t;
                                                    },
                                                    expression: "text",
                                                  },
                                                }),
                                                [
                                                  a(
                                                    "v-row",
                                                    [
                                                      a(
                                                        "v-col",
                                                        {
                                                          attrs: {
                                                            cols: "12",
                                                            sm: "12",
                                                            md: "12",
                                                          },
                                                        },
                                                        [
                                                          a("v-data-table", {
                                                            staticClass:
                                                              "elevation-1",
                                                            attrs: {
                                                              headers:
                                                                e.headersItems,
                                                              items: e.items,
                                                            },
                                                            scopedSlots: e._u(
                                                              [
                                                                {
                                                                  key: "top",
                                                                  fn: function () {},
                                                                  proxy: !0,
                                                                },
                                                                {
                                                                  key:
                                                                    "item.state",
                                                                  fn: function (
                                                                    t
                                                                  ) {
                                                                    var s =
                                                                      t.item;
                                                                    return [
                                                                      s.state
                                                                        ? a(
                                                                            "div",
                                                                            [
                                                                              a(
                                                                                "span",
                                                                                {
                                                                                  staticClass:
                                                                                    "blue--text",
                                                                                },
                                                                                [
                                                                                  e._v(
                                                                                    "Active"
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          )
                                                                        : a(
                                                                            "div",
                                                                            [
                                                                              a(
                                                                                "span",
                                                                                {
                                                                                  staticClass:
                                                                                    "red--text",
                                                                                },
                                                                                [
                                                                                  e._v(
                                                                                    "Inactive"
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          ),
                                                                    ];
                                                                  },
                                                                },
                                                                {
                                                                  key:
                                                                    "item.actions",
                                                                  fn: function (
                                                                    t
                                                                  ) {
                                                                    var s =
                                                                      t.item;
                                                                    return [
                                                                      a(
                                                                        "v-icon",
                                                                        {
                                                                          attrs: {
                                                                            small:
                                                                              "",
                                                                          },
                                                                          on: {
                                                                            click: function (
                                                                              t
                                                                            ) {
                                                                              return e.addToDetails(
                                                                                s
                                                                              );
                                                                            },
                                                                          },
                                                                        },
                                                                        [
                                                                          e._v(
                                                                            "add"
                                                                          ),
                                                                        ]
                                                                      ),
                                                                    ];
                                                                  },
                                                                },
                                                              ],
                                                              null,
                                                              !1,
                                                              1577150313
                                                            ),
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                              ],
                                              2
                                            ),
                                          ],
                                          1
                                        ),
                                        a(
                                          "v-card-actions",
                                          [
                                            a("v-spacer"),
                                            a(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color: "blue darken-1",
                                                  text: "",
                                                },
                                                on: {
                                                  click: function (t) {
                                                    return e.closeModalItem();
                                                  },
                                                },
                                              },
                                              [e._v("Cancel")]
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            a(
                              "v-row",
                              [
                                [
                                  a(
                                    "v-col",
                                    {
                                      attrs: { cols: "12", sm: "12", md: "12" },
                                    },
                                    [
                                      a("v-data-table", {
                                        staticClass: "elevation-1",
                                        attrs: {
                                          headers: e.headersDetails,
                                          items: e.editedItem.details,
                                          "hide-default-footer": "",
                                        },
                                        scopedSlots: e._u(
                                          [
                                            {
                                              key: "top",
                                              fn: function () {},
                                              proxy: !0,
                                            },
                                            {
                                              key: "item.amount",
                                              fn: function (t) {
                                                var s = t.item;
                                                return [
                                                  a("v-text-field", {
                                                    attrs: { type: "number" },
                                                    model: {
                                                      value: s.amount,
                                                      callback: function (t) {
                                                        e.$set(s, "amount", t);
                                                      },
                                                      expression: "item.amount",
                                                    },
                                                  }),
                                                ];
                                              },
                                            },
                                            {
                                              key: "item.price",
                                              fn: function (t) {
                                                var s = t.item;
                                                return [
                                                  a("v-text-field", {
                                                    attrs: { type: "number" },
                                                    model: {
                                                      value: s.price,
                                                      callback: function (t) {
                                                        e.$set(s, "price", t);
                                                      },
                                                      expression: "item.price",
                                                    },
                                                  }),
                                                ];
                                              },
                                            },
                                            {
                                              key: "item.discount",
                                              fn: function (t) {
                                                var s = t.item;
                                                return [
                                                  a("v-text-field", {
                                                    attrs: { type: "number" },
                                                    model: {
                                                      value: s.discount,
                                                      callback: function (t) {
                                                        e.$set(
                                                          s,
                                                          "discount",
                                                          t
                                                        );
                                                      },
                                                      expression:
                                                        "item.discount",
                                                    },
                                                  }),
                                                ];
                                              },
                                            },
                                            {
                                              key: "item.subTotal",
                                              fn: function (t) {
                                                var a = t.item;
                                                return [
                                                  e._v(
                                                    "$ " +
                                                      e._s(
                                                        a.amount * a.price -
                                                          a.discount
                                                      )
                                                  ),
                                                ];
                                              },
                                            },
                                            {
                                              key: "item.actions",
                                              fn: function (t) {
                                                var s = t.item;
                                                return [
                                                  a(
                                                    "v-icon",
                                                    {
                                                      attrs: { small: "" },
                                                      on: {
                                                        click: function (t) {
                                                          return e.removeFromDetails(
                                                            e.editedItem
                                                              .details,
                                                            s
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [e._v("delete")]
                                                  ),
                                                ];
                                              },
                                            },
                                          ],
                                          null,
                                          !1,
                                          38833170
                                        ),
                                      }),
                                      a("v-spacer"),
                                      a(
                                        "v-flex",
                                        { staticClass: "text-xs-right" },
                                        [
                                          a("strong", [e._v("Partial Total:")]),
                                          e._v(
                                            " $ " +
                                              e._s(
                                                (e.partialTotal = (
                                                  e.total - e.taxTotal
                                                ).toFixed(2))
                                              ) +
                                              " "
                                          ),
                                        ]
                                      ),
                                      a(
                                        "v-flex",
                                        { staticClass: "text-xs-right" },
                                        [
                                          a("strong", [e._v("Tax Total:")]),
                                          e._v(
                                            " $ " +
                                              e._s(
                                                (e.taxTotal = (
                                                  (e.total * e.editedItem.tax) /
                                                  (1 + e.editedItem.tax)
                                                ).toFixed(2))
                                              ) +
                                              " "
                                          ),
                                        ]
                                      ),
                                      a(
                                        "v-flex",
                                        { staticClass: "text-xs-right" },
                                        [
                                          a("strong", [e._v("Total:")]),
                                          e._v(
                                            " $ " +
                                              e._s(
                                                (e.total = e.calculateTotal)
                                              ) +
                                              " "
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                              ],
                              2
                            ),
                            a(
                              "v-row",
                              [
                                a("v-spacer"),
                                a(
                                  "v-btn",
                                  {
                                    attrs: { color: "blue darken-1", text: "" },
                                    on: { click: e.close },
                                  },
                                  [e._v("Cancel")]
                                ),
                                e.edited
                                  ? e._e()
                                  : a(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "blue darken-1",
                                          text: "",
                                        },
                                        on: { click: e.save },
                                      },
                                      [e._v("Save")]
                                    ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : e._e(),
              ],
              1
            ),
          ],
          1
        );
      },
      Je = [],
      Qe = a("c0e9"),
      Ze = a.n(Qe),
      Ye = {
        data: function () {
          return {
            dialog: !1,
            search: "",
            sales: [],
            persons: [],
            items: [],
            proof_types: ["BOLLET", "BILL", "TICKET", "GUIDE"],
            headers: [
              { text: "User", value: "user.name", sortable: !0 },
              { text: "Customer", value: "person.name", sortable: !0 },
              { text: "Proof Type", value: "proof_type", sortable: !0 },
              { text: "Proof Serie", value: "proof_serie", sortable: !1 },
              { text: "Proof Number", value: "proof_num", sortable: !1 },
              { text: "Date", value: "createdAt", sortable: !1 },
              { text: "Tax", value: "tax", sortable: !1 },
              { text: "Total", value: "total", sortable: !1 },
              { text: "State", value: "state", sortable: !1 },
              { text: "Actions", value: "actions", sortable: !1 },
            ],
            headersDetails: [
              { text: "Item", value: "item", sortable: !1 },
              { text: "Amount", value: "amount", sortable: !1 },
              { text: "Price", value: "price", sortable: !1 },
              { text: "Discount", value: "discount", sortable: !1 },
              { text: "Sub Total", value: "subTotal", sortable: !1 },
              { text: "Actions", value: "actions", sortable: !1 },
            ],
            headersItems: [
              { text: "Code", value: "code", sortable: !1 },
              { text: "Name", value: "name", sortable: !0 },
              { text: "Category", value: "category.name", sortable: !0 },
              { text: "Stock", value: "stock", sortable: !1 },
              { text: "Price", value: "price", sortable: !1 },
              { text: "Description", value: "description", sortable: !1 },
              { text: "State", value: "state", sortable: !1 },
              { text: "Actions", value: "actions", sortable: !1 },
            ],
            edited: !1,
            code: "",
            text: "",
            errorItem: "",
            showNew: 0,
            editedItem: {
              person: "",
              proof_type: "",
              proof_serie: "",
              proof_num: "",
              tax: 0.12,
              details: [],
            },
            defaultItem: {
              person: "",
              proof_type: "",
              proof_serie: "",
              proof_num: "",
              tax: 0.12,
              details: [],
            },
            valid: !0,
            proofSerieRules: [
              function (e) {
                return !!e || "Proof serie is required";
              },
              function (e) {
                return (
                  (e && e.length <= 7) ||
                  "Proof serie must be less than 7 characters"
                );
              },
            ],
            proofNumberRules: [
              function (e) {
                return !!e || "Proof number is required";
              },
              function (e) {
                return (
                  (e && e.length <= 10) ||
                  "Proof number must be less than 10 characters"
                );
              },
            ],
            taxRules: [
              function (e) {
                return e > 0 || "Tax must be greater than 0";
              },
            ],
            modal: !1,
            partialTotal: 0,
            taxTotal: 0,
            total: 0,
            stateItem: { _id: "", name: "", action: 0 },
            stateDefaultItem: { _id: "", name: "", action: 0 },
            proofModal: !1,
          };
        },
        computed: {
          calculateTotal: function () {
            for (var e = 0, t = 0; t < this.editedItem.details.length; t++)
              e =
                e +
                this.editedItem.details[t].amount *
                  this.editedItem.details[t].price -
                this.editedItem.details[t].discount;
            return console.log(e), e;
          },
        },
        watch: {
          dialog: function (e) {
            e || this.closeModalItem();
          },
        },
        created: function () {
          this.getPersons(), this.initialize();
        },
        methods: {
          initialize: function () {
            var e = this,
              t = { Token: this.$store.state.token },
              a = { headers: t };
            E.a
              .get("/sale/list", a)
              .then(function (t) {
                e.sales = t.data;
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          getPersons: function () {
            var e = this,
              t = [],
              a = { Token: this.$store.state.token },
              s = { headers: a };
            E.a
              .get("/person/list-customers", s)
              .then(function (a) {
                (t = a.data),
                  t.map(function (t) {
                    e.persons.push({ text: t.name, value: t._id });
                  });
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          getItems: function () {
            var e = this;
            this.items = [];
            var t = { Token: this.$store.state.token },
              a = { headers: t };
            E.a
              .get("/item/list?value=" + this.text, a)
              .then(function (t) {
                console.log(t), (e.items = t.data);
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          getDetails: function (e) {
            var t = this;
            this.items = [];
            var a = { Token: this.$store.state.token },
              s = { headers: a };
            E.a
              .get("/sale/query?_id=" + e, s)
              .then(function (e) {
                console.log(e.data.details),
                  (t.editedItem.details = e.data.details);
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          showIncome: function (e) {
            console.log(e),
              (this.editedItem.person = e.person._id),
              (this.editedItem.proof_type = e.proof_type),
              (this.editedItem.proof_serie = e.proof_serie),
              (this.editedItem.proof_num = e.proof_num),
              (this.editedItem.tax = e.tax),
              (this.edited = !0),
              console.log(this.edited),
              this.getDetails(e._id),
              this.showNewHandle();
          },
          searchCode: function () {
            var e = this;
            this.errorItem = "";
            var t = { Token: this.$store.state.token },
              a = { headers: t };
            E.a
              .get("/item/query-code?code=" + this.code, a)
              .then(function (t) {
                console.log(t.data), e.addToDetails(t.data);
              })
              .catch(function (t) {
                e.errorItem = "Item not found";
              });
          },
          addToDetails: function (e) {
            (this.errorItem = ""),
              this.findItem(e._id)
                ? (this.errorItem = "Item has already been added")
                : (this.editedItem.details.push({
                    _id: e._id,
                    item: e.name,
                    amount: 1,
                    price: e.price,
                    discount: 0,
                  }),
                  (this.code = ""));
          },
          removeFromDetails: function (e, t) {
            var a = e.indexOf(t);
            -1 !== a && e.splice(a, 1);
          },
          findItem: function (e) {
            for (var t = !1, a = 0; a < this.editedItem.details.length; a++)
              this.editedItem.details[a]._id === e && (t = !0);
            return t;
          },
          showNewHandle: function () {
            this.showNew = 1;
          },
          showModalItem: function () {
            console.log("Entra a show modal item"), (this.dialog = !0);
          },
          closeModalItem: function () {
            (this.text = ""), (this.items = []), (this.dialog = !1);
          },
          close: function () {
            var e = this;
            (this.dialog = !1),
              setTimeout(function () {
                (e.editedItem = Object.assign({}, e.defaultItem)),
                  (e.total = 0),
                  (e.taxTotal = 0),
                  (e.partialTotal = 0),
                  (e.edited = !1),
                  (e.showNew = 0);
              }, 300);
          },
          save: function () {
            var e = this;
            if (((this.errorItem = ""), this.$refs.form.validate()))
              if (0 !== this.editedItem.details.length) {
                var t = { Token: this.$store.state.token },
                  a = { headers: t };
                console.log(this.editedItem),
                  E.a
                    .post(
                      "/sale/add",
                      {
                        person: this.editedItem.person,
                        user: this.$store.state.user._id,
                        proof_type: this.editedItem.proof_type,
                        proof_serie: this.editedItem.proof_serie,
                        proof_num: this.editedItem.proof_num,
                        tax: this.editedItem.tax,
                        total: this.total,
                        details: this.editedItem.details,
                      },
                      a
                    )
                    .then(function (t) {
                      e.close(), e.initialize();
                    })
                    .catch(function (e) {
                      console.log(e);
                    }),
                  this.close();
              } else this.errorItem = "No item has been added";
          },
          activateDeactivate: function (e, t) {
            (this.modal = !0),
              (this.stateItem._id = t._id),
              (this.stateItem.name = t.proof_num),
              (this.stateItem.action = e);
          },
          closeModal: function () {
            var e = this;
            (this.modal = !1),
              setTimeout(function () {
                e.stateItem = Object.assign({}, e.stateDefaultItem);
              }, 300);
          },
          activate: function () {
            var e = this,
              t = { Token: this.$store.state.token },
              a = { headers: t };
            E.a
              .put("/sale/activate", { _id: this.stateItem._id }, a)
              .then(function (t) {
                e.closeModal(), e.initialize();
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          deactivate: function () {
            var e = this,
              t = { Token: this.$store.state.token },
              a = { headers: t };
            E.a
              .put("/sale/deactivate", { _id: this.stateItem._id }, a)
              .then(function (t) {
                e.closeModal(), e.initialize();
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          showProof: function (e) {
            (this.editedItem.person = e.person),
              (this.editedItem.proof_type = e.proof_type),
              (this.editedItem.proof_serie = e.proof_serie),
              (this.editedItem.proof_num = e.proof_num),
              (this.editedItem.tax = e.tax),
              (this.editedItem.proofDate = e.createdAt),
              console.log(this.edited),
              this.getDetails(e._id),
              (this.proofModal = !0);
          },
          hiddeProof: function () {
            (this.editedItem = Object.assign({}, this.defaultItem)),
              (this.proofModal = !1);
          },
          generatePDF: function () {
            var e = document.getElementById("bill");
            Ze()(e).then(function (e) {
              var t = e.toDataURL("image/png"),
                a = 210,
                s = 295,
                i = (e.height * a) / e.width,
                o = i,
                n = new Ce.a("p", "mm", "a4"),
                r = 0;
              n.addImage(t, "PNG", 0, r, a, i), (o -= s);
              while (o >= 0)
                (r = o - i),
                  n.addPage(),
                  n.addImage(t, "PNG", 0, r, a, i),
                  (o -= s);
              n.save("proofSale.pdf");
            });
          },
        },
      },
      et = Ye,
      tt = (a("3cf5"), Object(c["a"])(et, Xe, Je, !1, null, null, null)),
      at = tt.exports;
    d()(tt, {
      VAutocomplete: Be["a"],
      VBtn: h["a"],
      VCard: Z["a"],
      VCardActions: Y["a"],
      VCardText: Y["b"],
      VCardTitle: Y["c"],
      VCol: f["a"],
      VContainer: p["a"],
      VDataTable: ee["a"],
      VDialog: te["a"],
      VDivider: ae["a"],
      VFlex: G["a"],
      VForm: se["a"],
      VIcon: x["a"],
      VLayout: H["a"],
      VRow: ie["a"],
      VSelect: xe["a"],
      VSpacer: V["a"],
      VTextField: oe["a"],
      VToolbar: ne["a"],
      VToolbarTitle: j["a"],
    }),
      s["a"].use(S["a"]);
    var st = [
        {
          path: "/",
          name: "Home",
          component: K,
          meta: { admin: !0, grocer: !0, seller: !0 },
        },
        { path: "/login", name: "Login", component: he, meta: { free: !0 } },
        {
          path: "/category",
          name: "Category",
          component: ce,
          meta: { admin: !0, gorcer: !0 },
        },
        { path: "/user", name: "User", component: ge, meta: { admin: !0 } },
        {
          path: "/item",
          name: "Item",
          component: De,
          meta: { admin: !0, gorcer: !0 },
        },
        {
          path: "/customer",
          name: "Customer",
          component: Re,
          meta: { admin: !0, seller: !0 },
        },
        {
          path: "/provider",
          name: "Provider",
          component: Fe,
          meta: { admin: !0, grocer: !0 },
        },
        {
          path: "/income",
          name: "Income",
          component: We,
          meta: { admin: !0, grocer: !0 },
        },
        {
          path: "/sale",
          name: "Sale",
          component: at,
          meta: { admin: !0, seller: !0 },
        },
      ],
      it = new S["a"]({ mode: "history", base: "/", routes: st });
    it.beforeEach(function (e, t, a) {
      e.matched.some(function (e) {
        return e.meta.free;
      })
        ? a()
        : R.state.user && "Admin" === R.state.user.rol
        ? e.matched.some(function (e) {
            return e.meta.admin;
          }) && a()
        : R.state.user && "Grocer" === R.state.user.rol
        ? e.matched.some(function (e) {
            return e.meta.grocer;
          }) && a()
        : R.state.user && "Seller" === R.state.user.rol
        ? e.matched.some(function (e) {
            return e.meta.seller;
          }) && a()
        : a({ name: "Login" });
    });
    var ot = it,
      nt = (a("d1e78"), a("f309"));
    s["a"].use(nt["a"]);
    var rt = new nt["a"]({
      theme: {
        options: { customProperties: !0 },
        themes: {
          light: {
            primary: "#1976D2",
            secondary: "#424242",
            accent: "#82B1FF",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",
          },
        },
      },
      icons: { iconfont: "md" },
    });
    (s["a"].config.productionTip = !1),
      (E.a.defaults.baseURL = "https://system-sales.herokuapp.com/api/"),
      new s["a"]({
        router: ot,
        store: R,
        vuetify: rt,
        render: function (e) {
          return e(A);
        },
      }).$mount("#app");
  },
  c163: function (e, t, a) {},
});
//# sourceMappingURL=app.00742b57.js.map
