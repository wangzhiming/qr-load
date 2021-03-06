webpackJsonp([0], [function (e, n, t) {
    "use strict";

    function i(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = function () {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (n, t, i) {
                return t && e(n.prototype, t), i && e(n, i), n
            }
        }(),
        r = {
            Comments_Sended: "commentSended",
            Favoriation_Sended: "FavoriationSended"
        },
        a = function () {
            function e() {
                i(this, e)
            }
            return o(e, null, [{
                key: "on",
                value: function (e, n) {
                    $(document).on(e, n)
                }
            }, {
                key: "trigger",
                value: function (e, n) {
                    $(document).trigger(e, n)
                }
            }, {
                key: "off",
                value: function (e, n) {
                    $(document).off(e, n)
                }
            }, {
                key: "EventConstant",
                get: function () {
                    return r
                }
            }]), e
        }();
    n.default = a
}, function (e, n, t) {
    "use strict";

    function i(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = function () {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (n, t, i) {
                return t && e(n.prototype, t), i && e(n, i), n
            }
        }(),
        r = function () {
            function e() {
                i(this, e)
            }
            return o(e, null, [{
                key: "prefixedEvent",
                value: function (n, t, i) {
                    for (var o = ["webkit", "moz", "MS", "o", ""], r = 0; r < o.length; r++) o[r] || (t = t.toLowerCase()), e.addEvent(n, o[r] + t, i)
                }
            }, {
                key: "addEvent",
                value: function (e, n, t) {
                    e.addEventListener && e.addEventListener(n, t, !1), e.attachEvent && e.attachEvent("on" + n, t)
                }
            }, {
                key: "screenHeight",
                value: function () {
                    return document.documentElement.clientHeight || document.body.clientHeight || window.screen.height || window.innerHeight
                }
            }]), e
        }();
    n.default = r
}, function (e, n, t) {
    e.exports = t(3)
}, function (e, n, t) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var o = t(4),
        r = i(o),
        a = t(6),
        l = i(a),
        u = t(9),
        c = i(u),
        s = t(12),
        f = i(s),
        d = t(15),
        m = i(d),
        v = t(1),
        p = i(v);
    t(17);
    var h, y;
    $(function () {
        var video = $(".comment-textbox .send-btn1")[0].textContent;
        var e = new r.default({
                id: "J_prismPlayer",
                autoplay: !0,
                isLive: !1,
                playsinline: !0,
                controlBarVisibility: "always",
                // source: "//common.qupai.me/player/qupai.mp4",
                // source: "./uploads/default.mp4",
                source: video,
                useH5Prism: !0,
                useFlashPrism: !1,
                x5_video_position: "top",
                x5_type: "h5",
                cover: "http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png"
            }),
            n = [{
                url: "https://common.qupai.me/player/qupai.mp4",
                cover: "images/cover1.png",
                title: "分享精彩生活"
            }, {
                url: "http://player.alicdn.com/video/1.mp4",
                cover: "images/cover2.png",
                title: "多力多滋"
            }, {
                url: "http://player.alicdn.com/video/11.mp4",
                cover: "images/cover3.png",
                title: "马云讲新零售"
            }];
        l.default.setup("videolist", n, e), m.default.setup();
        var t = $(".comment-list");
        h = new c.default(t), y = new f.default(t), $(".comment-textbox").show();
        ! function () {
            var e = $(".ui-tab .ui-tab-nav").offset(),
                n = p.default.screenHeight() - e.top - e.height - $(".comment-textbox").height();
            $(".ui-tab-content").height(n), $(".comment-list .comment-container").css("max-height", n)
        }()
    })
}, function (e, n, t) {
    "use strict";

    function i(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = function () {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var i = n[t];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function (n, t, i) {
            return t && e(n.prototype, t), i && e(n, i), n
        }
    }();
    t(5);
    var r = function () {
        function e(n) {
            i(this, e), this.player, this.props = n, this._setup(), this._bindEvent(), this._firstFullscreen = !0
        }
        return o(e, [{
            key: "loadByUrl",
            value: function (e) {
                this.player && this.player.loadByUrl(e)
            }
        }, {
            key: "dispose",
            value: function () {
                this.player && (this.player.dispose(), Zepto("#" + this.props.id).empty())
            }
        }, {
            key: "_setup",
            value: function () {
                this.player = new Aliplayer(this.props)
            }
        }, {
            key: "_bindEvent",
            value: function () {
                var e = this;
                this.player.on("ready", function (e) {
                    console.log("ready")
                }), this.player.on("play", function (e) {
                    console.log("play")
                }), this.player.on("ended", function (e) {
                    console.log("ended")
                }), this.player.on("pause", function (e) {
                    console.log("pause")
                }), this.player.on("requestFullScreen", function (n) {
                    var t = e.player.fullscreenService;
                    if (e._firstFullscreen) t.cancelFullScreen(), e._firstFullscreen = !1;
                    else {
                        $(e.player.el()).find("video").addClass("center")
                    }
                }), this.player.on("x5cancelFullScreen", function (n) {
                    var t = e.player.fullscreenService;
                    t.getIsFullScreen() && t.cancelFullScreen(), $(e.player.el()).removeClass("enter-x5-player")
                }), this.player.on("x5requestFullScreen", function (n) {
                    $(e.player.el()).addClass("enter-x5-player")
                }), this.player.on("cancelFullScreen", function (n) {
                    $(e.player.el()).find("video").removeClass("center")
                }), this.player.tag.addEventListener("x5videoexitfullscreen", function () {
                    WeixinJSBridge && WeixinJSBridge.call("closeWindow")
                }), $(document).on("WeixinJSBridgeReady", function () {
                    $(e.player.el()).find("video")[0].play()
                })
            }
        }, {
            key: "_unbindEvent",
            value: function () {
                var e = this;
                this.player.off("ready", function (n) {
                    $.os.ios && e._autoPlay(), console.log("ready")
                }), this.player.off("play", function (e) {
                    console.log("play")
                }), this.player.off("ended", function (e) {
                    console.log("ended")
                }), this.player.off("pause", function (e) {
                    console.log("pause")
                })
            }
        }]), e
    }();
    n.default = r
}, function (e, n) {}, function (e, n, t) {
    "use strict";

    function i(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = function () {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (n, t, i) {
                return t && e(n.prototype, t), i && e(n, i), n
            }
        }(),
        r = t(7);
    t(8);
    var a = function () {
        function e() {
            i(this, e)
        }
        return o(e, null, [{
            key: "setup",
            value: function (e, n, t) {
                var i = $("#" + e);
                n.forEach(function (e, n) {
                    var t = $(r),
                        o = t.find("img");
                    o.attr("src", e.cover), o.attr("url", e.url), t.find("p").text(e.title), i.append(t)
                }), i.click(function (e) {
                    var n = $(e.target).attr("url");
                    n && t.loadByUrl(n)
                })
            }
        }]), e
    }();
    n.default = a
}, function (e, n) {
    e.exports = "<li class='video-list-item'>\n  <img></img>\n  <p></p>\n</li>"
}, function (e, n) {}, function (e, n, t) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = function () {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (n, t, i) {
                return t && e(n.prototype, t), i && e(n, i), n
            }
        }(),
        a = t(10),
        l = i(a),
        u = t(0),
        c = i(u);
    t(11);
    var s = function () {
        function e(n, t) {
            var i = this;
            o(this, e), this.comments = [], this._wrapper = n, this.liveComment = new l.default(n, t);
            c.default.on(c.default.EventConstant.Comments_Sended, function (e, n) {
                i.add(n)
            })
        }
        return r(e, [{
            key: "clear",
            value: function () {
                this.stop(), this.liveComment.clear()
            }
        }, {
            key: "add",
            value: function (e) {
                this.isStop || (this.comments.push(e), this.isWorking || this._wake())
            }
        }, {
            key: "stop",
            value: function () {
                this.comments = [], this.isWorking = !1, this.isStop = !0, clearInterval(this.interval)
            }
        }, {
            key: "start",
            value: function () {
                this.isStop = !1
            }
        }, {
            key: "_wake",
            value: function () {
                this.isWorking = !0, this.interval = setInterval(this._handle(), 500)
            }
        }, {
            key: "_handle",
            value: function () {
                var e = this;
                return function () {
                    if (e.comments.length > 0) {
                        e.liveComment.isFull() && e.liveComment.send("");
                        var n = e.comments.shift();
                        e.liveComment.send(n), e._wrapper.scrollTop(e._wrapper[0].scrollHeight)
                    } else e.isWorking = !1, clearInterval(e.interval)
                }
            }
        }]), e
    }();
    n.default = s
}, function (e, n, t) {
    "use strict";

    function i(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = function () {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (n, t, i) {
                return t && e(n.prototype, t), i && e(n, i), n
            }
        }(),
        r = function () {
            function e(n) {
                i(this, e), this.createEl(n), this._setupComment(), this.maxTopRow = null, this.colorIndex = 1
            }
            return o(e, [{
                key: "createEl",
                value: function (e) {
                    this.comments = e, this.container = this.comments.find(".comment-container")
                }
            }, {
                key: "clear",
                value: function () {
                    this.comments.empty()
                }
            }, {
                key: "isFull",
                value: function () {
                    return 0 == this.comments.find(".empty-comment-row").length
                }
            }, {
                key: "send",
                value: function (e) {
                    var n = this.comments.children(".comment-row"),
                        t = void 0;
                    e && (t = n.length > 0 ? $(n[0]) : this._createEmptyRow(), this._assignValues(t, e), this._move(t))
                }
            }, {
                key: "_move",
                value: function (e) {
                    e.show();
                    var n = this.comments.height(),
                        t = this.container.height();
                    e.height();
                    this.container.append(e);
                    var i = this.container.children().first();
                    t - n > i.height() && (this._removeClass(i.find(".comment-right")), i.hide(), this.comments.append(i))
                }
            }, {
                key: "_assignValues",
                value: function (e, n) {
                    e.find(".comment-left").text(n.name);
                    var t = e.find(".comment-right");
                    t.html(n.comment), t.addClass(this._getClass())
                }
            }, {
                key: "_createEmptyRow",
                value: function () {
                    var e = $('<div class="comment-row"><span class="comment-left"></span><span class="comment-right"></div>');
                    return e.hide(), this.comments.append(e), e
                }
            }, {
                key: "_setupComment",
                value: function () {
                    for (var e = 0; e < 20; e++) this._createEmptyRow()
                }
            }, {
                key: "_getClass",
                value: function (e) {
                    this.colorIndex > 4 && (this.colorIndex = 1);
                    var n = "comment-color" + this.colorIndex;
                    return this.colorIndex++, n
                }
            }, {
                key: "_removeClass",
                value: function (e) {
                    e.removeClass("comment-color1"), e.removeClass("comment-color2"), e.removeClass("comment-color3"), e.removeClass("comment-color4")
                }
            }]), e
        }();
    n.default = r
}, function (e, n) {}, function (e, n, t) {
    "use strict";

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function o(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = function () {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (n, t, i) {
                return t && e(n.prototype, t), i && e(n, i), n
            }
        }(),
        a = t(1),
        l = i(a),
        u = t(0),
        c = i(u);
    t(13);
    var s = t(14),
        f = function () {
            function e(n) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["xin.png", "xin.png", "xin.png", "xin.png", "xin.png", "xin.png"];
                o(this, e), this.animateContainer = $(s), n.append(this.animateContainer), this.imgNames = t, this.index = 0;
                var i = this;
                c.default.on(c.default.EventConstant.Favoriation_Sended, function () {
                    i.favoriate()
                })
            }
            return r(e, [{
                key: "favoriate",
                value: function () {
                    var e = this.imgNames.length;
                    this.index = this.index < e ? this.index : 0, name = this.imgNames[this.index];
                    var n = $('<img src="./images/' + name + '" class="favorite-animation">');
                    this.animateContainer.append(n), this.index++, l.default.prefixedEvent(n[0], "animationend", function () {
                        n.remove()
                    })
                }
            }]), e
        }();
    n.default = f
}, function (e, n) {}, function (e, n) {
    e.exports = '<div class="favorite-animation-container">\n</div>'
}, function (e, n, t) {
    "use strict";

    function i(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = function () {
            function e(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (n, t, i) {
                return t && e(n.prototype, t), i && e(n, i), n
            }
        }(),
        r = t(0),
        a = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r);
    t(16);
    var l = function () {
        function e() {
            i(this, e)
        }
        return o(e, null, [{
            key: "setup",
            value: function () {
                $(".comment-textbox .send-btn").click(function () {
                    var e = $(".comment-textbox .send-txt"),
                        n = e.val();
                    a.default.trigger(a.default.EventConstant.Comments_Sended, {
                        name: "小鱼儿",
                        comment: n
                    }), e.val("")
                }), $(".comment-textbox .favoriate-send").click(function () {
                    a.default.trigger(a.default.EventConstant.Favoriation_Sended)
                })
            }
        }]), e
    }();
    n.default = l
}, function (e, n) {}, function (e, n) {}], [2]);