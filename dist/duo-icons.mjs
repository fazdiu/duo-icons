const u = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24"
}, h = (a, r = "") => {
  const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  t.innerHTML = r;
  let e = Object.assign(u, a);
  return Object.keys(e).forEach((o) => {
    t.setAttribute(o, e[o]);
  }), t;
}, y = (a) => {
  let r = {};
  return Array.from(a.attributes).forEach(({ name: t, value: e }) => {
    r[t] = e;
  }), r;
}, n = (a, r = []) => {
  let t = [];
  return typeof a == "string" && (t = a.split(" ")), a.class && typeof a.class == "string" && (t = a.class.split(" ")), t.push(...r), t.filter((e, o, l) => l.indexOf(e) == o).join(" ");
}, f = (a, r = {}, t = {}) => {
  var s;
  const e = a.getAttribute("data-duoicon");
  if (!e)
    return;
  const o = e.replace("-", "_");
  if (!r || !r.hasOwnProperty(o) || !r[o])
    return console.warn(
      `${a.outerHTML} icon name was not found in the provided icons object.`
    );
  const l = r[o], c = y(a), i = n(c, ["duo-icon", `duo-icon-${e}`]);
  c.class = n(i, t.hasOwnProperty("class") ? t.class : []);
  const p = Object.assign(t, c), d = h(p, l);
  return (s = a.parentNode) == null ? void 0 : s.replaceChild(d, a);
}, m = '<path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z" class="secondary-layer" style="opacity:.3"></path><path fill="currentColor" d="M12 7a1 1 0 0 0-.993.883L11 8v3H8a1 1 0 0 0-.117 1.993L8 13h3v3a1 1 0 0 0 1.993.117L13 16v-3h3a1 1 0 0 0 .117-1.993L16 11h-3V8a1 1 0 0 0-1-1Z" class="primary-layer"></path>', w = '<path fill="currentColor" d="M11.514 16.903a.6.6 0 0 1 .976 0l2.766 3.868a.6.6 0 0 1-.488.949H9.237a.6.6 0 0 1-.488-.949l2.765-3.868Z" class="primary-layer"></path><path fill="currentColor" d="M20 4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-3.71l-3.151-4.407a1.4 1.4 0 0 0-2.278 0L7.711 19H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16Z" class="secondary-layer" opacity=".3"></path>', b = '<path fill="currentColor" fill-rule="evenodd" d="M15.314 2a2 2 0 0 1 1.414.586l4.686 4.686A2 2 0 0 1 22 8.686v6.628a2 2 0 0 1-.586 1.414l-4.686 4.686a2 2 0 0 1-1.414.586H8.686a2 2 0 0 1-1.414-.586l-4.686-4.686A2 2 0 0 1 2 15.314V8.686a2 2 0 0 1 .586-1.414l4.686-4.686A2 2 0 0 1 8.686 2h6.628Z" class="secondary-layer" opacity=".3"></path><path fill="currentColor" fill-rule="evenodd" d="M12 6a1 1 0 0 0-.993.883L11 7v6a1 1 0 0 0 1.993.117L13 13V7a1 1 0 0 0-1-1Zm0 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" class="primary-layer"></path>', v = '<path fill="currentColor" d="m13.299 3.148 8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0Z" class="secondary-layer" opacity=".3"></path><path fill="currentColor" d="M12 8a1 1 0 0 0-.993.883L11 9v4a1 1 0 0 0 1.993.117L13 13V9a1 1 0 0 0-1-1Zm0 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" class="primary-layer"></path>', g = {
  add_circle: m,
  airplay: w,
  alert_octagon: b,
  alert_triangle: v
}, A = (a = {}) => {
  if (a = Object.assign({ icons: {}, attributes: {} }, a), typeof document == "undefined")
    throw new Error("`createIcons()` only works in a browser environment.");
  const r = document.querySelectorAll("[data-duoicon]");
  Array.from(r).forEach(
    (t) => f(t, g, a.attributes)
  );
};
export {
  A as createIcons
};
