!function(t) {
    "use strict";
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        i = {},
        n = {},
        r = e && e.__generator || function(t, e) {
            var i,
                n,
                r,
                o,
                s = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0])
                            throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
            return o = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;
            function a(o) {
                return function(a) {
                    return function(o) {
                        if (i)
                            throw new TypeError("Generator is already executing.");
                        for (; s;)
                            try {
                                if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done)
                                    return r;
                                switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    n = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(r = s.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        s.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && s.label < r[1]) {
                                        s.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && s.label < r[2]) {
                                        s.label = r[2],
                                        s.ops.push(o);
                                        break
                                    }
                                    r[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t],
                                n = 0
                            } finally {
                                i = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, a])
                }
            }
        },
        o = e && e.__read || function(t, e) {
            var i = "function" == typeof Symbol && t[Symbol.iterator];
            if (!i)
                return t;
            var n,
                r,
                o = i.call(t),
                s = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(n = o.next()).done;)
                    s.push(n.value)
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    n && !n.done && (i = o.return) && i.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return s
        },
        s = e && e.__values || function(t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                i = e && t[e],
                n = 0;
            if (i)
                return i.call(t);
            if (t && "number" == typeof t.length)
                return {
                    next: function() {
                        return t && n >= t.length && (t = void 0), {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };
    function a(t, e) {
        return e ? [t.right, t.left] : [t.left, t.right]
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.inorder = function t(e, i) {
        var n,
            l,
            h;
        return void 0 === i && (i = !1), r(this, (function(r) {
            switch (r.label) {
            case 0:
                return e.value ? (n = o(a(e, i), 2), l = n[0], h = n[1], l ? [5, s(t(l, i))] : [3, 2]) : [2, void 0];
            case 1:
                r.sent(),
                r.label = 2;
            case 2:
                return [4, e.value];
            case 3:
                return r.sent(), h ? [5, s(t(h, i))] : [3, 5];
            case 4:
                r.sent(),
                r.label = 5;
            case 5:
                return [2]
            }
        }))
    },
    n.preorder = function t(e, i) {
        var n,
            l,
            h;
        return void 0 === i && (i = !1), r(this, (function(r) {
            switch (r.label) {
            case 0:
                return e.value ? (n = o(a(e, i), 2), l = n[0], h = n[1], [4, e.value]) : [2, void 0];
            case 1:
                return r.sent(), l ? [5, s(t(l, i))] : [3, 3];
            case 2:
                r.sent(),
                r.label = 3;
            case 3:
                return h ? [5, s(t(h, i))] : [3, 5];
            case 4:
                r.sent(),
                r.label = 5;
            case 5:
                return [2]
            }
        }))
    },
    n.postorder = function t(e, i) {
        var n,
            l,
            h;
        return void 0 === i && (i = !1), r(this, (function(r) {
            switch (r.label) {
            case 0:
                return e.value ? (n = o(a(e, i), 2), l = n[0], h = n[1], l ? [5, s(t(l, i))] : [3, 2]) : [2, void 0];
            case 1:
                r.sent(),
                r.label = 2;
            case 2:
                return h ? [5, s(t(h, i))] : [3, 4];
            case 3:
                r.sent(),
                r.label = 4;
            case 4:
                return [4, e.value];
            case 5:
                return r.sent(), [2]
            }
        }))
    };
    var l = {},
        h = e && e.__read || function(t, e) {
            var i = "function" == typeof Symbol && t[Symbol.iterator];
            if (!i)
                return t;
            var n,
                r,
                o = i.call(t),
                s = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(n = o.next()).done;)
                    s.push(n.value)
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    n && !n.done && (i = o.return) && i.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return s
        };
    function u(t) {
        return Math.floor((t - 1) / 2)
    }
    Object.defineProperty(l, "__esModule", {
        value: !0
    });
    var p = function() {
        function t(t, e) {
            void 0 === t && (t = []),
            void 0 === e && (e = function(t, e) {
                return t < e
            }),
            this.cmp = e,
            this.heap = t;
            for (var i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--)
                this.heapify(i)
        }
        return Object.defineProperty(t.prototype, "size", {
            get: function() {
                return this.heap.length
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.push = function(t) {
            for (var e = this.heap.push(t) - 1, i = !0; i;) {
                var n = u(e);
                n >= 0 && this.cmp(t, this.heap[n]) ? (this.swap(e, n), e = n) : i = !1
            }
            return this.size
        }, t.prototype.pop = function() {
            var t = this.heap.shift();
            if (void 0 === t)
                return null;
            var e = this.heap.pop();
            return e && (this.heap.unshift(e), this.heapify()), t
        }, t.prototype.contains = function(t) {
            return this.heap.indexOf(t) >= 0
        }, t.prototype.heapify = function(t) {
            var e = this;
            void 0 === t && (t = 0);
            var i,
                n = this.heap.length,
                r = t;
            (i = t, [2 * i + 1, 2 * i + 2]).forEach((function(t) {
                t < n && e.cmp(e.heap[t], e.heap[r]) && (r = t)
            })),
            r !== t && (this.swap(r, t), this.heapify(r))
        }, t.prototype.swap = function(t, e) {
            var i;
            i = h([this.heap[e], this.heap[t]], 2),
            this.heap[t] = i[0],
            this.heap[e] = i[1]
        }, t.prototype.findMin = function() {
            return this.heap[0]
        }, t.prototype.findMax = function() {
            return this.heap[0]
        }, t
    }();
    l.Heap = p;
    var f = {};
    Object.defineProperty(f, "__esModule", {
        value: !0
    });
    var d = function() {
        function t(t) {
            this.value = t
        }
        return Object.defineProperty(t.prototype, "size", {
            get: function() {
                var t = 1;
                return this.left && (t += this.left.size), this.right && (t += this.right.size), t
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.withParent = function(t) {
            return this.parent = t, this
        }, t.prototype.withoutParent = function() {
            return this.parent = void 0, this
        }, t.prototype.setLeft = function(t) {
            this.left = t.withParent(this)
        }, t.prototype.setRight = function(t) {
            this.right = t.withParent(this)
        }, Object.defineProperty(t.prototype, "isLeftChild", {
            get: function() {
                return !!this.parent && this.parent.left === this
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isRightChild", {
            get: function() {
                return !!this.parent && this.parent.right === this
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "leftmostDescendant", {
            get: function() {
                return this.left ? this.left.leftmostDescendant : this
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "rightmostDescendant", {
            get: function() {
                return this.right ? this.right.rightmostDescendant : this
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.prettyPrintValue = function() {
            return "" + this.value
        }, t.prototype.prettyPrint = function(t) {
            void 0 === t && (t = "");
            var e = t.substr(0, t.length - 1) + (this.parent ? this.isRightChild ? "├" : "└" : "") + "─┬─ " + this.prettyPrintValue() + "\n";
            return this.right ? e += this.right.prettyPrint(t + " │") : e += t + " ├─── ×\n", this.left ? e += this.left.prettyPrint(t + "  ") : e += t + " └─── ×\n", e
        }, t.prototype.toString = function() {
            return this.prettyPrint()
        }, t
    }();
    f.BinaryTree = d;
    var c = {},
        m = {};
    Object.defineProperty(m, "__esModule", {
        value: !0
    }),
    m.assert = function(t, e) {
        if (!t)
            throw new Error(e)
    };
    var g,
        v = e && e.__extends || (g = function(t, e) {
            return g = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var i in e)
                    e.hasOwnProperty(i) && (t[i] = e[i])
            }, g(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            g(t, e),
            t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        y = e && e.__read || function(t, e) {
            var i = "function" == typeof Symbol && t[Symbol.iterator];
            if (!i)
                return t;
            var n,
                r,
                o = i.call(t),
                s = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(n = o.next()).done;)
                    s.push(n.value)
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    n && !n.done && (i = o.return) && i.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return s
        };
    Object.defineProperty(c, "__esModule", {
        value: !0
    });
    var b = m,
        _ = function(t) {
            function e(e, i, n) {
                void 0 === i && (i = function(t, e) {
                    return t < e
                }),
                void 0 === n && (n = function(t, e) {
                    return t === e
                });
                var r = t.call(this, e) || this;
                return r.cmp = i, r.eq = n, r
            }
            return v(e, t), e.fromArray = function(t, i, n) {
                if (0 !== t.length) {
                    for (var r = new e(t[0], i, n), o = 1; o < t.length; o++)
                        r.insert(t[o]);
                    return r
                }
            }, e.prototype.findParentAndSideFor = function(t) {
                for (var e = this;;)
                    if (this.cmp(t, e.value)) {
                        if (!e.left)
                            return [e, "left"];
                        e = e.left
                    } else {
                        if (!e.right)
                            return [e, "right"];
                        e = e.right
                    }
            }, e.prototype.insert = function(t) {
                var i = y(this.findParentAndSideFor(t), 2),
                    n = i[0];
                return n[i[1]] = new e(t, this.cmp, this.eq).withParent(n), this
            }, e.prototype.search = function(t) {
                for (var e = this; e && void 0 !== e.value;) {
                    if (this.eq(e.value, t))
                        return e;
                    e = this.cmp(t, e.value) ? e.left : e.right
                }
            }, e.prototype.contains = function(t) {
                return Boolean(this.search(t))
            }, e.prototype.remove = function(t) {
                var i = this.search(t);
                if (!i)
                    return this;
                var n = null;
                if (i !== this || this.parent || (this.parent = new e(this.value, this.cmp, this.eq), this.parent.left = this.withParent(this.parent), n = this.parent), b.assert(void 0 !== i.parent), i.left && i.right) {
                    var r = i.right.leftmostDescendant;
                    i.value = r.value;
                    var o = r.parent;
                    o[a = o.left === r ? "left" : "right"] = r.right,
                    r.right && (r.right.parent = o)
                } else {
                    var s = i.parent,
                        a = s.left === i ? "left" : "right";
                    i.left ? (s[a] = i.left, i.left.parent = i.parent) : (s[a] = i.right, i.right && (i.right.parent = i.parent))
                }
                return n ? n.left ? n.left.withoutParent() : void 0 : this
            }, e.prototype.getPredecessor = function(t) {
                return this.getNeighbor(t, !0)
            }, e.prototype.getSuccessor = function(t) {
                return this.getNeighbor(t, !1)
            }, e.prototype.getNeighbor = function(t, e) {
                var i = this.search(t);
                if (i) {
                    var n,
                        r;
                    if (e ? (n = "left", r = "rightmostDescendant") : (n = "right", r = "leftmostDescendant"), i[n])
                        return i[n][r].value;
                    for (; i && i.parent && i.parent[n] === i;)
                        i = i.parent;
                    if (i.parent)
                        return i.parent.value
                }
            }, e
        }(f.BinaryTree);
    c.BinarySearchTree = _;
    var w = {},
        x = e && e.__extends || function() {
            var t = function(e, i) {
                return t = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e)
                        e.hasOwnProperty(i) && (t[i] = e[i])
                }, t(e, i)
            };
            return function(e, i) {
                function n() {
                    this.constructor = e
                }
                t(e, i),
                e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }
        }(),
        R = e && e.__read || function(t, e) {
            var i = "function" == typeof Symbol && t[Symbol.iterator];
            if (!i)
                return t;
            var n,
                r,
                o = i.call(t),
                s = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(n = o.next()).done;)
                    s.push(n.value)
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    n && !n.done && (i = o.return) && i.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            return s
        };
    Object.defineProperty(w, "__esModule", {
        value: !0
    });
    var S = m,
        T = function(t) {
            function e(e, i, n) {
                void 0 === i && (i = function(t, e) {
                    return t < e
                }),
                void 0 === n && (n = function(t, e) {
                    return t === e
                });
                var r = t.call(this, e, i) || this;
                return r.cmp = i, r.eq = n, r.isRed = !1, r
            }
            return x(e, t), Object.defineProperty(e.prototype, "color", {
                get: function() {
                    return this.isRed ? "red" : "black"
                },
                enumerable: !0,
                configurable: !0
            }), e.fromArray = function(t, i) {
                if (0 !== t.length) {
                    for (var n = new e(t[0], i), r = 1; r < t.length; r++)
                        n.insert(t[r]);
                    return n
                }
            }, e.prototype.prettyPrintValue = function() {
                return this.isRed ? "[31m" + this.value + "[0m" : "" + this.value
            }, e.prototype.rotateLeft = function(t) {
                S.assert(t.right);
                var e = t.value,
                    i = t.isRed,
                    n = t.right;
                t.right = n.right,
                t.right && (t.right.parent = t),
                n.right = n.left,
                n.left = t.left,
                n.left && (n.left.parent = n),
                t.left = n,
                t.value = n.value,
                n.value = e,
                t.isRed = n.isRed,
                n.isRed = i
            }, e.prototype.rotateRight = function(t) {
                S.assert(t.left);
                var e = t.value,
                    i = t.isRed,
                    n = t.left;
                t.left = n.left,
                t.left && (t.left.parent = t),
                n.left = n.right,
                n.right = t.right,
                n.right && (n.right.parent = n),
                t.right = n.withParent(t),
                t.value = n.value,
                n.value = e,
                t.isRed = n.isRed,
                n.isRed = i
            }, e.prototype.insertFixup = function(t) {
                for (var e, i = t, n = t; (null === (e = i.parent) || void 0 === e ? void 0 : e.parent) && i.parent.isRed;) {
                    var r;
                    if (i.parent.isLeftChild)
                        (null == (r = i.parent.parent.right) ? void 0 : r.isRed) ? (i.parent.isRed = !1, r.isRed = !1, i.parent.parent.isRed = !0, i = i.parent.parent) : (i.isRightChild && (i = i.parent, this.rotateLeft(i), i.left === n && (n = i), i = i.left), S.assert(i.parent), S.assert(i.parent.parent), i.parent.isRed = !1, i.parent.parent.isRed = !0, this.rotateRight(i.parent.parent), i.parent.right === n && (n = i.parent));
                    else
                        (null == (r = i.parent.parent.left) ? void 0 : r.isRed) ? (i.parent.isRed = !1, r.isRed = !1, i.parent.parent.isRed = !0, i = i.parent.parent) : (i.isLeftChild && (i = i.parent, this.rotateRight(i), i.right === n && (n = i), i = i.right), S.assert(i.parent), S.assert(i.parent.parent), i.parent.isRed = !1, i.parent.parent.isRed = !0, this.rotateLeft(i.parent.parent), i.parent.left === n && (n = i.parent))
                }
                return this.isRed = !1, n
            }, e.prototype.insert = function(t) {
                return this.insertAndReturnNode(t), this
            }, e.prototype.insertAndReturnNode = function(t) {
                var i = R(this.findParentAndSideFor(t), 2),
                    n = i[0],
                    r = i[1];
                S.assert(n instanceof e, "Mixed tree types");
                var o = new e(t, this.cmp).withParent(n);
                return o.isRed = !0, n[r] = o, this.insertFixup(o)
            }, e.prototype.transplant = function(t, e) {
                t.parent ? t.isLeftChild ? t.parent.left = null == e ? void 0 : e.withParent(t.parent) : t.parent.right = null == e ? void 0 : e.withParent(t.parent) : e && (this.isRed = e.isRed, this.value = e.value, this.left = e.left, this.right = e.right, e.parent = t.parent)
            }, e.prototype.deleteFixup = function(t, e) {
                for (var i, n, r, o, s, a, l, h = t, u = e; h && !(null === (i = h[u]) || void 0 === i ? void 0 : i.isRed);) {
                    var p;
                    if ("left" === u)
                        (null == (p = h.right) ? void 0 : p.isRed) && (p.isRed = !1, h.isRed = !0, this.rotateLeft(h), p = (h = h.left).right),
                        S.assert(p),
                        (null === (n = p.left) || void 0 === n ? void 0 : n.isRed) || (null === (r = p.right) || void 0 === r ? void 0 : r.isRed) ? ((null === (o = p.right) || void 0 === o ? void 0 : o.isRed) || (p.left && (p.left.isRed = !1), p.isRed = !0, this.rotateRight(p), p = h.right), S.assert(p), p.isRed = h.isRed, h.isRed = !1, p.right && (p.right.isRed = !1), this.rotateLeft(h), h = void 0, this.isRed = !1) : (p.isRed = !0, u = (null == h ? void 0 : h.isLeftChild) ? "left" : "right", h = h.parent);
                    else
                        (null == (p = h.left) ? void 0 : p.isRed) && (p.isRed = !1, h.isRed = !0, this.rotateRight(h), p = (h = h.right).left),
                        S.assert(p, "w must be defined"),
                        (null === (s = p.right) || void 0 === s ? void 0 : s.isRed) || (null === (a = p.left) || void 0 === a ? void 0 : a.isRed) ? ((null === (l = p.left) || void 0 === l ? void 0 : l.isRed) || (p.right && (p.right.isRed = !1), p.isRed = !0, this.rotateLeft(p), p = h.left), S.assert(p), p.isRed = h.isRed, h.isRed = !1, p.left && (p.left.isRed = !1), this.rotateRight(h), h = void 0, this.isRed = !1) : (p.isRed = !0, u = h.isLeftChild ? "left" : "right", h = h.parent)
                }
                if (h) {
                    var f = h[u];
                    f && (f.isRed = !1)
                } else
                    this.isRed = !1
            }, e.prototype.remove = function(t) {
                var i = this.search(t);
                if (!(i && i instanceof e))
                    return this;
                var n,
                    r = i.left,
                    o = i.right,
                    s = i.isRed,
                    a = i,
                    l = a.isRed,
                    h = "left";
                if (r)
                    if (o) {
                        if (l = (a = o.leftmostDescendant).isRed, n = a, h = "right", a.parent === i) {
                            var u = n[h];
                            u && (u.parent = a)
                        } else
                            this.transplant(a, a.right),
                            n = a.parent,
                            h = "left",
                            a.right = o.withParent(a);
                        this.transplant(i, a),
                        i === this ? (this.left = r.withParent(this), a.right && (this.right = a.right.withParent(this)), this.isRed = s, n === a && (n = this)) : (a.left = r.withParent(a), a.isRed = s)
                    } else
                        n = i === this ? void 0 : i,
                        h = "left",
                        this.transplant(i, r);
                else {
                    if (n = i === this ? void 0 : i, h = "right", !o && !i.parent)
                        return;
                    o || (n = i.parent, h = i.isLeftChild ? "left" : "right"),
                    this.transplant(i, o)
                }
                return l || this.deleteFixup(n, h), this
            }, e
        }(c.BinarySearchTree);
    w.RBTree = T;
    var P = {};
    Object.defineProperty(P, "__esModule", {
        value: !0
    });
    var D = w;
    function k(t) {
        var e = t.value.high;
        return t.left && (e = Math.max(e, t.left.value.max)), t.right && (e = Math.max(e, t.right.value.max)), t.value.max = e, e
    }
    var O = function() {
        function t(t) {
            void 0 === t && (t = function(t, e) {
                return t === e
            }),
            this.eq = t,
            this._size = 0,
            this.tree = void 0
        }
        return Object.defineProperty(t.prototype, "size", {
            get: function() {
                return this._size
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.insert = function(t, e, i) {
            var n = this,
                r = {
                    low: t,
                    high: e,
                    value: i,
                    max: e
                };
            if (this.tree) {
                var o = this.tree.insertAndReturnNode(r);
                for (o.left && k(o.left), o.right && k(o.right), k(o); o.parent;)
                    k(o.parent),
                    o = o.parent
            } else
                this.tree = new D.RBTree(r, (function(t, e) {
                    return t.low < e.low
                }), (function(t, e) {
                    return t.low === e.low && t.high === e.high && n.eq(t.value, e.value)
                }));
            return this._size++, this
        }, t.prototype.remove = function(t, e, i) {
            return this.tree && this.tree.remove({
                low: t,
                high: e,
                value: i,
                max: e
            }), this
        }, t.prototype.lookup = function(t) {
            if (!this.tree)
                return [];
            for (var e = [], i = [this.tree]; i.length;) {
                var n = i.pop();
                n && (n.value.low <= t && n.value.high >= t && e.push(n.value.value), n.left && n.left.value.max >= t && i.push(n.left), n.right && n.value.low <= t && n.right.value.max >= t && i.push(n.right))
            }
            return e
        }, t.prototype.overlap = function(t, e) {
            if (!this.tree)
                return [];
            for (var i = [], n = [this.tree]; n.length;) {
                var r = n.pop();
                r && (t <= r.value.high && e >= r.value.low && i.push(r.value.value), r.left && r.left.value.max >= t && n.push(r.left), r.right && r.right.value.max >= t && n.push(r.right))
            }
            return i
        }, t
    }();
    P.IntervalTree = O,
    function(t) {
        function e(e) {
            for (var i in e)
                t.hasOwnProperty(i) || (t[i] = e[i])
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        e(n),
        e(l),
        e(f),
        e(c),
        e(w),
        e(P)
    }(i),
    t.Timeline = t.GeoJSON.extend({
        times: null,
        ranges: null,
        initialize(e, n={}) {
            this.times = [],
            this.ranges = new i.IntervalTree;
            t.GeoJSON.prototype.initialize.call(this, null, n),
            t.Util.setOptions(this, {
                drawOnSetTime: !0
            }),
            t.Util.setOptions(this, n),
            this.options.getInterval && (this._getInterval = t => this.options.getInterval(t)),
            e && this._process(e)
        },
        _getInterval(t) {
            if (t.properties && "start" in t.properties && "end" in t.properties) {
                const {startExclusive: e, endExclusive: i} = t.properties;
                return {
                    start: new Date(t.properties.start).getTime(),
                    end: new Date(t.properties.end).getTime(),
                    startExclusive: !0 === e || "true" === e,
                    endExclusive: !0 === i || "true" === i
                }
            }
            return !1
        },
        _process(t) {
            if (t.features.forEach((t => {
                const e = this._getInterval(t);
                e && (this.ranges.insert(e.start + (e.startExclusive ? 1 : 0), e.end - (e.endExclusive ? 1 : 0), t), this.times.push(e.start), this.times.push(e.end))
            })), 0 === this.times.length)
                return this.start = this.options.start ?? 1 / 0, this.end = this.options.end ?? -1 / 0, void (this.time = this.start);
            this.times.sort(((t, e) => t - e)),
            this.times = this.times.reduce(((t, e, i) => {
                if (0 === i)
                    return t;
                return t[t.length - 1] !== e && t.push(e), t
            }), [this.times[0]]),
            this.start = this.options.start ?? this.times[0],
            this.end = this.options.end ?? this.times[this.times.length - 1],
            this.time = this.start
        },
        setTime(t) {
            this.time = "number" == typeof t ? t : new Date(t).getTime(),
            this.options.drawOnSetTime && this.updateDisplayedLayers(),
            this.fire("change")
        },
        updateDisplayedLayers() {
            const t = this.ranges.lookup(this.time),
                e = this.getLayers(),
                i = [];
            e.forEach((e => {
                let n = !1;
                for (let i = 0; i < t.length; i++)
                    if (e.feature === t[i]) {
                        n = !0,
                        t.splice(i, 1);
                        break
                    }
                n || i.push(e)
            })),
            i.forEach((t => this.removeLayer(t))),
            t.forEach((t => this.addData(t)))
        }
    }),
    t.timeline = (e, i) => new t.Timeline(e, i),
    t.TimelineSliderControl = t.Control.extend({
        initialize(e={}) {
            this.timelines = [],
            t.Util.setOptions(this, {
                duration: 1e4,
                enableKeyboardControls: !1,
                enablePlayback: !0,
                formatOutput: t => `${t || ""}`,
                showTicks: !0,
                waitToUpdateMap: !1,
                position: "bottomleft",
                steps: 1e3,
                autoPlay: !1
            }),
            t.Util.setOptions(this, e),
            this.start = e.start || 0,
            this.end = e.end || 0
        },
        _getTimes() {
            const t = [];
            if (this.timelines.forEach((e => {
                const i = e.times.filter((t => t >= this.start && t <= this.end));
                t.push(...i)
            })), t.length) {
                t.sort(((t, e) => t - e));
                const e = [t[0]];
                return t.reduce(((t, i) => (t !== i && e.push(i), i))), e
            }
            return t
        },
        _recalculate() {
            const t = void 0 !== this.options.start,
                e = void 0 !== this.options.end,
                i = this.options.duration;
            let n = 1 / 0,
                r = -1 / 0;
            this.timelines.forEach((t => {
                t.start < n && (n = t.start),
                t.end > r && (r = t.end)
            })),
            t || (this.start = n, this._timeSlider.min = (n === 1 / 0 ? 0 : n).toString(), this._timeSlider.value = this._timeSlider.min),
            e || (this.end = r, this._timeSlider.max = (r === -1 / 0 ? 0 : r).toString()),
            this._stepSize = Math.max(1, (this.end - this.start) / this.options.steps),
            this._stepDuration = Math.max(1, i / this.options.steps)
        },
        _nearestEventTime(t, e=1) {
            const i = this._getTimes();
            let n = !1,
                r = i[0];
            for (let o = 1; o < i.length; o++) {
                const s = i[o];
                if (n)
                    return s;
                if (s >= t) {
                    if (-1 === e)
                        return r;
                    if (s !== t)
                        return s;
                    n = !0
                }
                r = s
            }
            return r
        },
        _createDOM() {
            const e = t.DomUtil.create("div", ["leaflet-control-layers", "leaflet-control-layers-expanded", "leaflet-timeline-control"].join(" "));
            if (this.container = e, this.options.enablePlayback) {
                const i = t.DomUtil.create("div", "sldr-ctrl-container", e),
                    n = t.DomUtil.create("div", "button-container", i);
                this._makeButtons(n),
                this.options.enableKeyboardControls && this._addKeyListeners(),
                this._makeOutput(i)
            }
            this._makeSlider(e),
            this.options.showTicks && this._buildDataList(e),
            this.options.autoPlay && this._autoPlay()
        },
        _addKeyListeners() {
            this._listener = t => this._onKeydown(t),
            document.addEventListener("keydown", this._listener)
        },
        _removeKeyListeners() {
            document.removeEventListener("keydown", this._listener)
        },
        _buildDataList(e) {
            this._datalist = t.DomUtil.create("datalist", "", e);
            const i = Math.floor(1e6 * Math.random());
            this._datalist.id = `timeline-datalist-${i}`,
            this._timeSlider.setAttribute("list", this._datalist.id),
            this._rebuildDataList()
        },
        _rebuildDataList() {
            const e = this._datalist;
            if (!e)
                return;
            for (; e.firstChild;)
                e.removeChild(e.firstChild);
            const i = t.DomUtil.create("select", "", this._datalist);
            i.setAttribute("aria-label", "List of times"),
            this._getTimes().forEach((e => {
                t.DomUtil.create("option", "", i).value = e.toString()
            }))
        },
        _makeButton(e, i) {
            const n = t.DomUtil.create("button", i, e);
            n.setAttribute("aria-label", i),
            n.addEventListener("click", (() => this[i]())),
            t.DomEvent.disableClickPropagation(n)
        },
        _makeButtons(t) {
            this._makeButton(t, "prev"),
            this._makeButton(t, "play"),
            this._makeButton(t, "pause"),
            this._makeButton(t, "next")
        },
        _disableMapDragging() {
            this.map.dragging.disable()
        },
        _enableMapDragging() {
            this.map.dragging.enable()
        },
        _makeSlider(e) {
            const i = t.DomUtil.create("input", "time-slider", e);
            i.setAttribute("aria-label", "Slider"),
            i.type = "range",
            i.min = (this.start || 0).toString(),
            i.max = (this.end || 0).toString(),
            i.value = (this.start || 0).toString(),
            this._timeSlider = i,
            t.DomEvent.on(this._timeSlider, "mousedown mouseup click touchstart", t.DomEvent.stopPropagation),
            t.DomEvent.on(this._timeSlider, "change input", this._sliderChanged, this),
            t.DomEvent.on(this._timeSlider, "mouseenter", this._disableMapDragging, this),
            t.DomEvent.on(this._timeSlider, "mouseleave", this._enableMapDragging, this)
        },
        _makeOutput(e) {
            this._output = t.DomUtil.create("output", "time-text", e),
            this._output.innerHTML = this.options.formatOutput(this.start)
        },
        _onKeydown(t) {
            let e = t.target || t.srcElement;
            if (!/INPUT|TEXTAREA/.test(e.tagName)) {
                switch (t.keyCode || t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                case 32:
                    this.toggle();
                    break;
                default:
                    return
                }
                t.preventDefault()
            }
        },
        _sliderChanged(t) {
            const {target: e} = t,
                i = parseFloat(e instanceof HTMLInputElement ? e.value : "0");
            this._setTime(i, t.type)
        },
        _setTime(t, e) {
            this.time = t,
            this.options.waitToUpdateMap && "change" !== e || this.timelines.forEach((e => e.setTime(t))),
            this._output && (this._output.innerHTML = this.options.formatOutput(t))
        },
        _resetIfTimelinesChanged(t) {
            this.timelines.length !== t && (this._recalculate(), this.options.showTicks && this._rebuildDataList(), this.setTime(this.start))
        },
        _autoPlay() {
            "loading" === document.readyState ? window.addEventListener("load", (() => this._autoPlay())) : this.play()
        },
        addTimelines(...t) {
            this.pause();
            const e = this.timelines.length;
            t.forEach((t => {
                -1 === this.timelines.indexOf(t) && this.timelines.push(t)
            })),
            this._resetIfTimelinesChanged(e)
        },
        removeTimelines(...t) {
            this.pause();
            const e = this.timelines.length;
            t.forEach((t => {
                const e = this.timelines.indexOf(t);
                -1 !== e && this.timelines.splice(e, 1)
            })),
            this._resetIfTimelinesChanged(e)
        },
        toggle() {
            this._playing ? this.pause() : this.play()
        },
        prev() {
            this.pause();
            const t = this._nearestEventTime(this.time, -1);
            this._timeSlider.value = t.toString(),
            this.setTime(t)
        },
        pause(t) {
            window.clearTimeout(this._timer),
            this._playing = !1, this.container?.classList.remove("playing"),
            this.syncedControl && !t && this.syncedControl.map((function(t) {
                t.pause(!0)
            }))
        },
        play(t) {
            window.clearTimeout(this._timer),
            parseFloat(this._timeSlider.value) === this.end && (this._timeSlider.value = this.start.toString()),
            this._timeSlider.value = (parseFloat(this._timeSlider.value) + this._stepSize).toString(),
            this.setTime(+this._timeSlider.value),
            parseFloat(this._timeSlider.value) === this.end ? (this._playing = !1, this.container?.classList.remove("playing")) : (this._playing = !0, this.container?.classList.add("playing"), this._timer = window.setTimeout((() => this.play(!0)), this._stepDuration)),
            this.syncedControl && !t && this.syncedControl.map((function(t) {
                t.play(!0)
            }))
        },
        next() {
            this.pause();
            const t = this._nearestEventTime(this.time, 1);
            this._timeSlider.value = t.toString(),
            this.setTime(t)
        },
        setTime(t) {
            this._timeSlider && (this._timeSlider.value = t.toString()),
            this._setTime(t, "change")
        },
        onAdd(t) {
            return this.map = t, this._createDOM(), this.setTime(this.start), this.container
        },
        onRemove() {
            this.options.enableKeyboardControls && this._removeKeyListeners(),
            t.DomEvent.off(this._timeSlider, "change input", this._sliderChanged, this),
            t.DomEvent.off(this._timeSlider, "pointerdown mousedown touchstart", this._disableMapDragging, this),
            t.DomEvent.off(document.body, "pointerup mouseup touchend", this._enableMapDragging, this),
            this._enableMapDragging()
        },
        syncControl(t) {
            this.syncedControl || (this.syncedControl = []),
            this.syncedControl.push(t)
        }
    }),
    t.timelineSliderControl = e => new t.TimelineSliderControl(e);
    !function(t, e) {
        void 0 === e && (e = {});
        var i = e.insertAt;
        if (t && "undefined" != typeof document) {
            var n = document.head || document.getElementsByTagName("head")[0],
                r = document.createElement("style");
            r.type = "text/css",
            "top" === i && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
            r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(document.createTextNode(t))
        }
    }('.leaflet-control.leaflet-timeline-control {\n  width: 96%;\n  box-sizing: border-box;\n  margin: 2%;\n  margin-bottom: 20px;\n  text-align: center;\n}\n.leaflet-control.leaflet-timeline-control * {\n  vertical-align: middle;\n}\n.leaflet-control.leaflet-timeline-control input[type="range"] {\n  width: 80%;\n}\n.leaflet-control.leaflet-timeline-control .sldr-ctrl-container {\n  float: left;\n  width: 15%;\n  box-sizing: border-box;\n}\n.leaflet-control.leaflet-timeline-control .button-container button {\n  position: relative;\n  width: 20%;\n  height: 20px;\n}\n.leaflet-control.leaflet-timeline-control .button-container button::before,\n.leaflet-control.leaflet-timeline-control .button-container button::after {\n  content: "";\n  position: absolute;\n}\n.leaflet-control.leaflet-timeline-control\n  .button-container\n  button.play::before {\n  border: 7px solid transparent;\n  border-width: 7px 0 7px 10px;\n  border-left-color: black;\n  margin-top: -7px;\n  background: transparent;\n  margin-left: -5px;\n}\n.leaflet-control.leaflet-timeline-control .button-container button.pause {\n  display: none;\n}\n.leaflet-control.leaflet-timeline-control\n  .button-container\n  button.pause::before {\n  width: 4px;\n  height: 14px;\n  border: 4px solid black;\n  border-width: 0 4px;\n  margin-top: -7px;\n  margin-left: -6px;\n  background: transparent;\n}\n.leaflet-control.leaflet-timeline-control .button-container button.prev::before,\n.leaflet-control.leaflet-timeline-control .button-container button.prev::after {\n  margin: -8px 0 0;\n  background: black;\n}\n.leaflet-control.leaflet-timeline-control\n  .button-container\n  button.prev::before {\n  width: 2px;\n  height: 14px;\n  margin-top: -7px;\n  margin-left: -7px;\n}\n.leaflet-control.leaflet-timeline-control .button-container button.prev::after {\n  border: 7px solid transparent;\n  border-width: 7px 10px 7px 0;\n  border-right-color: black;\n  margin-top: -7px;\n  margin-left: -5px;\n  background: transparent;\n}\n.leaflet-control.leaflet-timeline-control .button-container button.next::before,\n.leaflet-control.leaflet-timeline-control .button-container button.next::after {\n  margin: -8px 0 0;\n  background: black;\n}\n.leaflet-control.leaflet-timeline-control\n  .button-container\n  button.next::before {\n  width: 2px;\n  height: 14px;\n  margin-top: -7px;\n  margin-left: 5px;\n}\n.leaflet-control.leaflet-timeline-control .button-container button.next::after {\n  border: 7px solid transparent;\n  border-width: 7px 0 7px 10px;\n  border-left-color: black;\n  margin-top: -7px;\n  margin-left: -5px;\n  background: transparent;\n}\n.leaflet-control.leaflet-timeline-control.playing button.pause {\n  display: inline-block;\n}\n.leaflet-control.leaflet-timeline-control.playing button.play {\n  display: none;\n}\n')
}(L);
