// Forked by lopeax at https://github.com/lopeax/microlight to replace styling via css selectors

// var microlight=document.querySelectorAll('.microlight');
// for(var i=0;i<microlight.length;i++){
	// microlight[i].innerHTML=microlight[i].innerHTML.replace(/&/g, '&amp;').replace(/</g, '&lt;')
// }



! function(a, b) {
    "function" == typeof define && define.amd ? define(["exports"], b) : b("undefined" != typeof exports ? exports : a.microlight = {})
}(this, function(a) {
    var f, b = window,
        c = document,
        d = "appendChild",
        e = "test",
        g = c.getElementsByClassName("microlight"),
        h = function(a) {
						console.log(g.innerHTML);
            for (a = 0; f = g[a++];) {
                var l, m, p, q, r, h = f.textContent,
                    i = 0,
                    j = h[0],
                    k = 1,
                    n = f.innerHTML = "",
                    o = 0,
                    s = /(\d*\, \d*\, \d*)(, ([.\d]*))?/g.exec(b.getComputedStyle(f).color);
                for ("px rgba(" + s[1] + ",", s[3] || 1; m = l, l = 7 > o && "\\" == l ? 1 : k;) {
                    if (k = j, j = h[++i], q = n.length > 1, !k || o > 8 && "\n" == k || [/\S/ [e](k), 1, 1, !/[$\w]/ [e](k), ("/" == l || "\n" == l) && q, '"' == l && q, "'" == l && q, h[i - 4] + m + l == "-->", m + l == "*/"][o])
                        for (n && (f[d](r = c.createElement("span")).setAttribute("data_microlight_type", ["not-formatted", "keywords", "punctuation", "strings-regex", "comments"][o ? 3 > o ? 2 : o > 6 ? 4 : o > 3 ? 3 : +/^(a(bstract|lias|nd|rguments|rray|s(m|sert)?|uto)|b(ase|egin|ool(ean)?|reak|yte)|c(ase|atch|har|hecked|lass|lone|ompl|onst|ontinue)|de(bugger|cimal|clare|f(ault|er)?|init|l(egate|ete)?)|do|double|e(cho|ls?if|lse(if)?|nd|nsure|num|vent|x(cept|ec|p(licit|ort)|te(nds|nsion|rn)))|f(allthrough|alse|inal(ly)?|ixed|loat|or(each)?|riend|rom|unc(tion)?)|global|goto|guard|i(f|mp(lements|licit|ort)|n(it|clude(_once)?|line|out|stanceof|t(erface|ernal)?)?|s)|l(ambda|et|ock|ong)|m(icrolight|odule|utable)|NaN|n(amespace|ative|ext|ew|il|ot|ull)|o(bject|perator|r|ut|verride)|p(ackage|arams|rivate|rotected|rotocol|ublic)|r(aise|e(adonly|do|f|gister|peat|quire(_once)?|scue|strict|try|turn))|s(byte|ealed|elf|hort|igned|izeof|tatic|tring|truct|ubscript|uper|ynchronized|witch)|t(emplate|hen|his|hrows?|ransient|rue|ry|ype(alias|def|id|name|of))|u(n(checked|def(ined)?|ion|less|signed|til)|se|sing)|v(ar|irtual|oid|olatile)|w(char_t|hen|here|hile|ith)|xor|yield)$/ [e](n) : 0]), r[d](c.createTextNode(n))), p = o && 7 > o ? o : p, n = "", o = 11; ![1, /[\/{}[(\-+*=<>:;|\\.,?!&@~]/ [e](k), /[\])]/ [e](k), /[$\w]/ [e](k), "/" == k && 2 > p && "<" != l, '"' == k, "'" == k, k + j + h[i + 1] + h[i + 2] == "<!--", k + j == "/*", k + j == "//", "#" == k][--o];);
                    n += k
                }
            }
        };
    a.reset = h, "complete" == c.readyState ? h() : b.addEventListener("load", h, 0)
});