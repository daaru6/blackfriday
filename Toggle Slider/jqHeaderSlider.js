window.header_slider = function (t, e = {}) {
  let n = t.find("h1, h2, h3, h4, h5, h6"),
    i = { color: "#3c7dff", closed_by_default: !1 };
  for (let t in e) i[t] = e[t];
  let l = {
    child_headers: function (t, e, n) {
      let i = [];
      for (let l = t + 1; l < n.length; l++) {
        let t = n[l];
        if (!(e < t.tagName.split("H")[1])) break;
        i.push(t);
      }
      return i;
    },
    neighbor_header: function (t, e, n) {
      let i = null;
      for (let l = t + 1; l < n.length; l++) {
        let t = n[l];
        if (t.tagName.split("H")[1] <= e) {
          i = t;
          break;
        }
      }
      return i;
    },
    toggle_slide: function (t, e = null) {
      let n = e ? t.nextUntil(e) : t.nextAll();
      t.attr("slide")
        ? (t.removeAttr("slide"), n.slideDown())
        : (t.attr("slide", 1), n.slideUp());
    },
  };
  n.each(function (t, e) {
    let r = { index: t, size: this.tagName.split("H")[1], dom: e, jq: $(this) };
    var o, s, d, a, g;
    r.jq
      .addClass("c-pointer")
      .css({
        color:
          ((o = i.color),
          (s = -15 * r.size),
          (d = parseInt(o.substring(1, 3), 16)),
          (a = parseInt(o.substring(3, 5), 16)),
          (g = parseInt(o.substring(5, 7), 16)),
          (d = parseInt((d * (100 + s)) / 100)),
          (a = (a = parseInt((a * (100 + s)) / 100)) < 255 ? a : 255),
          (g = (g = parseInt((g * (100 + s)) / 100)) < 255 ? g : 255),
          "#" +
            (1 == (d = d < 255 ? d : 255).toString(16).length
              ? "0" + d.toString(16)
              : d.toString(16)) +
            (1 == a.toString(16).length
              ? "0" + a.toString(16)
              : a.toString(16)) +
            (1 == g.toString(16).length
              ? "0" + g.toString(16)
              : g.toString(16))),
      }),
      r.jq.on("click", function () {
        !(function (t) {
          let e = l.child_headers(t.index, t.size, n),
            i = l.neighbor_header(t.index, t.size, n);
          l.toggle_slide(t.jq, i),
            $(e).each(function (t, e) {
              $(e).removeAttr("slide");
            });
        })(r);
      }),
      i.closed_by_default && r.jq.click();
  });
};
