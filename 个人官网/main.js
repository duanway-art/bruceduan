(function () {
  "use strict";

  document.documentElement.classList.add("js");

  /* ---------------- content ---------------- */

  var APPS = [
    {
      id: "noor", store: "6761876263", site: "https://noor.nonoor.com", ver: "1.5.0",
      name: { zh: "Noor", en: "Noor" }, alt: { zh: "古兰经与礼拜", en: "Quran & Prayer" },
      pitch: { zh: "古兰经阅读、礼拜时间与朝向，安静的礼拜伴侣。", en: "Quran, prayer times, and Qibla — a calm companion for worship." },
      tags: { zh: ["古兰经", "礼拜时间", "Apple Watch", "小组件"], en: ["Quran", "Prayer times", "Apple Watch", "Widgets"] }
    },
    {
      id: "moku", store: "6774033552", site: "https://moku.nonoor.com", ver: "1.4.0",
      name: { zh: "敲了么", en: "Moku" }, alt: { zh: "Moku", en: "敲了么" },
      pitch: { zh: "口袋里的电子木鱼，轻敲一下，让心静下来。", en: "A pocket wooden fish. Tap to pause, focus, and keep a simple habit." },
      tags: { zh: ["电子木鱼", "Apple Watch", "小组件"], en: ["Wooden fish", "Apple Watch", "Widgets"] }
    },
    {
      id: "whenly", store: "6791524162", site: "https://whenly.nonoor.com", ver: "1.4.0",
      name: { zh: "时笺", en: "Whenly" }, alt: { zh: "Whenly", en: "时笺" },
      pitch: { zh: "写一封给未来的信，到约定那天才能拆开。", en: "Write a letter to the future. It opens on the day you choose." },
      tags: { zh: ["时间胶囊", "iCloud 同步", "小组件"], en: ["Time capsule", "iCloud sync", "Widgets"] }
    },
    {
      id: "filmmate", store: "6794249397", site: "https://filmmate.nonoor.com", ver: "1.3.1",
      name: { zh: "胶片助手", en: "FilmMate" }, alt: { zh: "FilmMate", en: "胶片助手" },
      pitch: { zh: "给胶片相机用的实时测光，光圈、快门、片速一次算清。", en: "Real-time metering for film cameras — aperture, shutter, and ISO sorted." },
      tags: { zh: ["测光表", "Sunny 16", "ND 补偿"], en: ["Light meter", "Sunny 16", "ND filters"] }
    },
    {
      id: "closet", store: "6805789139", site: "https://mycloset.nonoor.com", ver: "1.3.0",
      name: { zh: "电子衣橱", en: "My Closet" }, alt: { zh: "My Closet", en: "电子衣橱" },
      pitch: { zh: "衣橱、每日穿搭和心愿单，收在同一个安静的地方。", en: "Wardrobe, daily outfits, and wishlist — in one calm place." },
      tags: { zh: ["穿搭", "心愿单", "小组件"], en: ["Outfits", "Wishlist", "Widgets"] }
    },
    {
      id: "stash", store: "6808518038", site: "https://stash.nonoor.com", ver: "1.1.0",
      name: { zh: "瓶瓶罐罐", en: "Stash" }, alt: { zh: "Stash", en: "瓶瓶罐罐" },
      pitch: { zh: "冰箱、化妆台和药箱里的保质期，临期前提醒你用掉。", en: "Expiry dates for your fridge, vanity, and medicine cabinet — with a nudge before they lapse." },
      tags: { zh: ["保质期", "开封后期限", "提醒"], en: ["Expiry dates", "After opening", "Reminders"] }
    },
    {
      id: "giftlog", store: "6814110656", site: "https://daysake.nonoor.com", ver: "1.1.0",
      name: { zh: "随礼记", en: "Gift Log" }, alt: { zh: "Gift Log", en: "随礼记" },
      pitch: { zh: "生日纪念日倒数提醒，礼金往来一笔笔记清楚。", en: "Count down to birthdays and anniversaries, and keep track of every gift given and received." },
      tags: { zh: ["纪念日", "农历生日", "人情往来"], en: ["Anniversaries", "Lunar birthdays", "Gift ledger"] }
    },
    {
      id: "cangshuge", site: "https://cangshuge.nonoor.com", ver: "1.0.0", soon: true, shotLangs: ["zh"],
      name: { zh: "藏书阁", en: "Cangshuge" }, alt: { zh: "古籍阅读", en: "藏书阁" },
      pitch: {
        zh: "六十四部经史子集全部内置，纵排右起、乌丝界栏、朱点句读，生僻古字完整显示。",
        en: "Sixty-four Chinese classics built in, typeset vertically, right to left, with vermilion punctuation."
      },
      tags: { zh: ["古籍", "竖排", "iPad", "小组件"], en: ["Chinese classics", "Vertical type", "iPad", "Widgets"] }
    }
  ];

  var ACCENTS = {
    noor: "#2E6B4F", moku: "#A8692E", whenly: "#C9783A", filmmate: "#8A6A44",
    closet: "#A06A80", stash: "#3E8E7E", giftlog: "#9C7A4E", cangshuge: "#B23A2E"
  };

  var FRAMES = {
    zh: [
      ["念头", "一个我自己也想用的小场景。"],
      ["掂量", "先看市场与竞品：值不值得做，和别人哪里不一样。"],
      ["原型", "SwiftUI 搭出第一版，能跑起来再说。"],
      ["真机", "闪退、卡在“正在准备相机”……真机上才见真章。"],
      ["打磨", "深色模式、字体、间距，一处一处地抠。"],
      ["图标", "浅色、深色、透明、着色，四种模式都要好看。"],
      ["多语言", "标题、描述、关键词，一种语言一种语言地写。"],
      ["市场图", "字要够大，截图要居中，外壳圆角要和 iPhone 一致。"],
      ["上架", "提交审核，等那封 Ready for Sale。"],
      ["看数据", "看下载、看留存、看哪里流失——然后回到第一格。"]
    ],
    en: [
      ["Idea", "A small moment I'd want a tool for myself."],
      ["Weigh it", "Market, competitors, and the honest question: is it worth building?"],
      ["Prototype", "A first SwiftUI build. Make it run, then make it right."],
      ["On device", "Crashes, a camera stuck on “Preparing”… the truth lives on real hardware."],
      ["Polish", "Dark mode, type, spacing — one pixel at a time."],
      ["Icon", "Light, dark, clear, and tinted. All four have to look right."],
      ["Languages", "Titles, descriptions, keywords — written language by language."],
      ["Screenshots", "Big type, centered shots, device corners that match the real iPhone."],
      ["Ship", "Submit for review. Wait for “Ready for Sale”."],
      ["Read the data", "Downloads, retention, where people drop off — then back to frame one."]
    ]
  };

  var RULES = {
    zh: [
      ["先想清楚值不值得做", "动手之前先算前景、看竞品、找真正的痛点。胶片助手不该只是第三十个测光表。"],
      ["不要账号，不要广告", "数据只留在你的 iPhone 和你自己的 iCloud 里。我不想知道你写了什么信。"],
      ["一个像素也要对齐", "市场图逐张检查，截图和文字必须居中；图标的深色、透明、着色模式都要单独画好。"],
      ["说你的语言", "最多 27 种语言。不只翻界面，标题、描述、关键词和市场图一并本地化。"],
      ["让数据说话", "每个版本开工前先看 App Store 数据：哪里流失，就先改哪里。"],
      ["与 AI 结对", "我负责判断和品味，AI 负责速度。这个网站也是这样一起做出来的。"]
    ],
    en: [
      ["Decide if it's worth it", "Before writing code: the market, the competition, the real pain. FilmMate shouldn't be the thirtieth light meter."],
      ["No accounts. No ads.", "Your data stays on your iPhone and in your own iCloud. I don't want to read your letters."],
      ["Align every pixel", "Every screenshot checked one by one. Icons drawn properly for dark, clear, and tinted modes."],
      ["Speak your language", "Up to 27 languages — not just the UI, but titles, descriptions, keywords, and screenshots."],
      ["Let the data talk", "Each version starts with App Store numbers: fix wherever people leave first."],
      ["Pair with AI", "I bring judgment and taste; AI brings speed. This site was made the same way."]
    ]
  };

  var NUMS = { zh: ["壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖", "拾"], en: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"] };
  var RULE_NUMS = { zh: ["一", "二", "三", "四", "五", "六"], en: ["01", "02", "03", "04", "05", "06"] };

  var T = {
    zh: {
      "doc.title": "nonoor · 一个人的 App 作坊",
      "nav.works": "作品", "nav.craft": "手艺", "nav.letter": "来信", "nav.contact": "联系",
      "theme.night": "夜", "theme.day": "昼",
      "hero.eyebrow": "独立 iOS 开发 · nonoor 作坊",
      "hero.title": "一个人，<br>做一些<em>安静</em>的 App。",
      "hero.lede": "写一封要等很久才能拆的信，敲一下口袋里的木鱼，竖着读一本古书，给胶片相机测一次光，记下谁的生日、谁的礼金。我把日子里这些细小的仪式，做成手机里的工具。",
      "hero.cta": "翻阅作品", "hero.mail": "写信给我",
      "hero.vertical": "慢工出细活　一人一作坊",
      "fish.hint": "敲一下", "fish.merit": "功德", "fish.plus": "功德 +1",
      "stat.live": "款已上架", "stat.wip": "款即将刊行", "stat.lang": "种语言", "stat.one": "个人",
      "works.vol": "卷一", "works.title": "作品", "works.sub": "八件作品，按开工先后排列。点截图可放大。",
      "works.store": "App Store 下载", "works.site": "官网", "works.soon": "即将刊行",
      "strip.vol": "卷二", "strip.title": "一个 App 的一卷胶片", "strip.sub": "从一个念头到下一个版本，每次都这样走一遍。", "strip.hint": "← 拖动胶片 →",
      "craft.vol": "卷三", "craft.title": "作坊规制", "craft.sub": "六条给自己定的规矩。",
      "letter.vol": "卷四", "letter.title": "一封给你的信", "letter.sub": "学时笺的规矩：先封好，等你来拆。",
      "letter.to": "致 · 读到这里的你", "letter.open": "点击拆封",
      "letter.p0": "你好，",
      "letter.p1": "谢谢你一路翻到这里。",
      "letter.p2": "我做的 App 都很小：一封要等很久才能拆的信，一只敲了会响的木鱼，一本竖着读的古书。它们改变不了世界，只想在你某个安静的时刻，刚好有用。",
      "letter.p3": "如果你用过其中某一个——喜欢也好，吐槽也好——都欢迎写信给我。每一封，我都会读。",
      "letter.sign": "nonoor 作坊　丙午年秋",
      "colo.title": "版　权　页", "colo.studio": "作坊", "colo.stack": "技术", "colo.tools": "工具", "colo.mail": "来信",
      "colo.note": "本页以宋体排印，以耐心装订。"
    },
    en: {
      "doc.title": "nonoor — a one-person app workshop",
      "nav.works": "Works", "nav.craft": "Craft", "nav.letter": "Letter", "nav.contact": "Contact",
      "theme.night": "☾", "theme.day": "☀",
      "hero.eyebrow": "Independent iOS apps · nonoor workshop",
      "hero.title": "One person.<br>A handful of <em>quiet</em> apps.",
      "hero.lede": "A letter you can't open for years. A wooden fish in your pocket. A classic read top to bottom. A light reading for a film camera. A note of whose birthday, and whose gift. I turn the small rituals of everyday life into tools for your phone.",
      "hero.cta": "Browse the works", "hero.mail": "Write to me",
      "hero.vertical": "slow work · fine work",
      "fish.hint": "Tap it", "fish.merit": "merit", "fish.plus": "merit +1",
      "stat.live": "apps live", "stat.wip": "coming soon", "stat.lang": "languages", "stat.one": "person",
      "works.vol": "Vol. I", "works.title": "The Works", "works.sub": "Eight pieces, in the order they were begun. Tap a screenshot to enlarge.",
      "works.store": "Get on the App Store", "works.site": "Website", "works.soon": "Coming soon",
      "strip.vol": "Vol. II", "strip.title": "One roll of film per app", "strip.sub": "From a first idea to the next version — the same ten frames, every time.", "strip.hint": "← drag the film →",
      "craft.vol": "Vol. III", "craft.title": "Workshop Rules", "craft.sub": "Six rules I hold myself to.",
      "letter.vol": "Vol. IV", "letter.title": "A letter for you", "letter.sub": "Whenly's rule: sealed first, opened by you.",
      "letter.to": "To · whoever reads this far", "letter.open": "Break the seal",
      "letter.p0": "Hello,",
      "letter.p1": "Thank you for reading all the way down here.",
      "letter.p2": "The apps I make are small: a letter that takes years to open, a wooden fish that knocks when tapped, an old book you read top to bottom. They won't change the world. I only hope one of them turns out useful in some quiet moment of yours.",
      "letter.p3": "If you've used any of them — love or complaints, both welcome — write to me. I read every one.",
      "letter.sign": "nonoor workshop · Autumn 2026",
      "colo.title": "COLOPHON", "colo.studio": "Studio", "colo.stack": "Stack", "colo.tools": "Tools", "colo.mail": "Mail",
      "colo.note": "Set in Song and old-style serifs, bound with patience."
    }
  };

  /* ---------------- helpers ---------------- */

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  var lang = (function () {
    var saved = localStorage.getItem("lang");
    if (saved === "zh" || saved === "en") return saved;
    return /^zh/i.test(navigator.language || "") ? "zh" : "en";
  })();

  /* ---------------- render ---------------- */

  function renderSpreads() {
    var t = T[lang], wrap = document.getElementById("spreads");
    wrap.innerHTML = "";
    APPS.forEach(function (a, i) {
      var shotLang = (a.shotLangs || ["zh", "en"]).indexOf(lang) >= 0 ? lang : (a.shotLangs || ["zh"])[0];
      var links = a.store
        ? '<a class="btn btn--ink" href="https://apps.apple.com/app/id' + a.store + '" target="_blank" rel="noopener">' + t["works.store"] + "</a>"
        : '<span class="spread__soon">' + t["works.soon"] + "</span>";
      if (a.site) links += '<a class="btn btn--line" href="' + a.site + '" target="_blank" rel="noopener">' + t["works.site"] + "</a>";

      var shots = [1, 2, 3].map(function (n) {
        var src = "assets/shots/" + a.id + "/" + shotLang + "-" + n + ".jpg";
        return '<button class="phone" type="button" data-src="' + src + '" aria-label="' + a.name[lang] + " " + n + '">' +
          '<img src="' + src + '" alt="" width="600" height="1300" loading="lazy"></button>';
      }).join("");

      var art = el("article", "spread reveal" + (i % 2 ? " spread--flip" : ""));
      art.style.setProperty("--accent", ACCENTS[a.id]);
      art.innerHTML =
        '<div class="spread__text">' +
          '<span class="spread__idx">' + NUMS[lang][i] + "</span>" +
          '<div class="spread__title"><img class="spread__icon" src="assets/icons/' + a.id + '.png" alt="" width="88" height="88" loading="lazy">' +
            '<div><h3>' + a.name[lang] + '</h3><p class="spread__alt">' + a.alt[lang] + ' <span class="spread__ver">v' + a.ver + "</span></p></div></div>" +
          '<p class="spread__pitch">' + a.pitch[lang] + "</p>" +
          '<ul class="tags">' + a.tags[lang].map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>" +
          '<div class="spread__links">' + links + "</div>" +
        "</div>" +
        '<div class="spread__stage">' + shots + "</div>";
      wrap.appendChild(art);
    });
  }

  function renderStrip() {
    var strip = document.getElementById("strip");
    strip.innerHTML = "";
    FRAMES[lang].forEach(function (f, i) {
      var n = String(i + 1).padStart(2, "0");
      var fr = el("div", "frame");
      fr.innerHTML = '<span class="frame__no">' + n + "A</span><h4>" + f[0] + "</h4><p>" + f[1] + "</p>";
      strip.appendChild(fr);
    });
    var hint = document.querySelector(".strip__hint");
    if (!hint) {
      hint = el("p", "strip__hint");
      strip.after(hint);
    }
    hint.textContent = T[lang]["strip.hint"];
  }

  function renderRules() {
    var ol = document.getElementById("rules");
    ol.innerHTML = "";
    RULES[lang].forEach(function (r, i) {
      var li = el("li", "rule reveal");
      li.innerHTML = '<span class="rule__num">' + RULE_NUMS[lang][i] + "</span><h4>" + r[0] + "</h4><p>" + r[1] + "</p>";
      ol.appendChild(li);
    });
  }

  var CN_DIGITS = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
  function cnNumber(n) {
    if (n <= 10) return CN_DIGITS[n];
    if (n < 20) return "十" + CN_DIGITS[n - 10];
    return CN_DIGITS[Math.floor(n / 10)] + "十" + (n % 10 ? CN_DIGITS[n % 10] : "");
  }

  function renderDate() {
    var d = new Date(), y = d.getFullYear();
    var stems = "甲乙丙丁戊己庚辛壬癸", branches = "子丑寅卯辰巳午未申酉戌亥";
    var animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
    var k = ((y - 4) % 60 + 60) % 60;
    var out = lang === "zh"
      ? stems[k % 10] + branches[k % 12] + "年　" + cnNumber(d.getMonth() + 1) + "月" + cnNumber(d.getDate()) + "日"
      : d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) + " · Year of the " + animals[k % 12];
    document.getElementById("ganzhi").textContent = out;
    document.getElementById("year").textContent = y;
  }

  function applyLang() {
    var t = T[lang];
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
    document.title = t["doc.title"];
    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      var v = t[n.dataset.i18n];
      if (v != null) n.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (n) {
      var v = t[n.dataset.i18nHtml];
      if (v != null) n.innerHTML = v;
    });
    document.getElementById("langToggle").textContent = lang === "zh" ? "EN" : "中";
    renderSpreads();
    renderStrip();
    renderRules();
    renderDate();
    syncThemeLabel();
    observeReveals();
  }

  /* ---------------- theme ---------------- */

  function isDark() {
    var t = document.documentElement.dataset.theme;
    if (t) return t === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function syncThemeLabel() {
    var label = document.querySelector("#themeToggle span");
    label.dataset.i18n = isDark() ? "theme.day" : "theme.night";
    label.textContent = T[lang][label.dataset.i18n];
  }

  document.getElementById("themeToggle").addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    syncThemeLabel();
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", syncThemeLabel);

  document.getElementById("langToggle").addEventListener("click", function () {
    lang = lang === "zh" ? "en" : "zh";
    localStorage.setItem("lang", lang);
    applyLang();
  });

  /* ---------------- reveal on scroll ---------------- */

  var io = "IntersectionObserver" in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      }, { rootMargin: "0px 0px -8% 0px" })
    : null;

  function observeReveals() {
    document.querySelectorAll(".reveal:not(.is-in)").forEach(function (n, i) {
      if (!io) { n.classList.add("is-in"); return; }
      n.style.transitionDelay = (n.closest(".rules") ? (i % 6) * 60 : 0) + "ms";
      io.observe(n);
    });
  }

  /* ---------------- masthead ---------------- */

  var masthead = document.querySelector(".masthead");
  window.addEventListener("scroll", function () {
    masthead.classList.toggle("is-scrolled", window.scrollY > 8);
  }, { passive: true });

  /* ---------------- ledger count-up ---------------- */

  (function () {
    var nums = document.querySelectorAll(".ledger [data-count]");
    if (!io || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var counter = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        counter.unobserve(e.target);
        var end = +e.target.dataset.count, start = performance.now();
        (function tick(now) {
          var p = Math.min(1, (now - start) / 1100);
          e.target.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(tick);
        })(start);
      });
    }, { threshold: 0.6 });
    nums.forEach(function (n) { n.textContent = "0"; counter.observe(n); });
  })();

  /* ---------------- wooden fish ---------------- */

  (function () {
    var btn = document.getElementById("fishBtn");
    var countEl = document.getElementById("fishCount");
    var merit = +(localStorage.getItem("merit") || 0);
    var ctx = null;
    countEl.textContent = merit;

    function knock() {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      ctx = ctx || new AC();
      var t = ctx.currentTime;

      var body = ctx.createOscillator(), bodyGain = ctx.createGain();
      body.type = "sine";
      body.frequency.setValueAtTime(820, t);
      body.frequency.exponentialRampToValueAtTime(560, t + 0.12);
      bodyGain.gain.setValueAtTime(0.0001, t);
      bodyGain.gain.exponentialRampToValueAtTime(0.55, t + 0.004);
      bodyGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
      body.connect(bodyGain).connect(ctx.destination);
      body.start(t); body.stop(t + 0.25);

      var len = Math.floor(ctx.sampleRate * 0.03), buf = ctx.createBuffer(1, len, ctx.sampleRate), data = buf.getChannelData(0);
      for (var i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
      var click = ctx.createBufferSource(), band = ctx.createBiquadFilter(), clickGain = ctx.createGain();
      click.buffer = buf;
      band.type = "bandpass"; band.frequency.value = 2400; band.Q.value = 1.4;
      clickGain.gain.value = 0.35;
      click.connect(band).connect(clickGain).connect(ctx.destination);
      click.start(t);
    }

    btn.addEventListener("click", function () {
      merit += 1;
      localStorage.setItem("merit", merit);
      countEl.textContent = merit;
      knock();

      btn.classList.remove("is-hit");
      void btn.offsetWidth;
      btn.classList.add("is-hit");
      setTimeout(function () { btn.classList.remove("is-hit"); }, 120);

      var tip = el("span", "merit", T[lang]["fish.plus"]);
      btn.appendChild(tip);
      setTimeout(function () { tip.remove(); }, 1000);
    });
  })();

  /* ---------------- film strip drag ---------------- */

  (function () {
    var strip = document.getElementById("strip");
    var down = false, startX = 0, startScroll = 0;
    strip.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse") return;
      down = true; startX = e.clientX; startScroll = strip.scrollLeft;
      strip.style.scrollSnapType = "none";
    });
    window.addEventListener("pointermove", function (e) {
      if (down) strip.scrollLeft = startScroll - (e.clientX - startX);
    });
    window.addEventListener("pointerup", function () {
      if (!down) return;
      down = false;
      strip.style.scrollSnapType = "";
    });
  })();

  /* ---------------- letter ---------------- */

  (function () {
    var env = document.getElementById("envelope");
    var btn = document.getElementById("envelopeBtn");
    var body = document.getElementById("letterBody");
    btn.addEventListener("click", function () {
      env.classList.add("is-opening");
      setTimeout(function () {
        btn.hidden = true;
        body.hidden = false;
      }, 750);
    });
  })();

  /* ---------------- screenshot lightbox ---------------- */

  (function () {
    var box = document.getElementById("lightbox");
    var img = box.querySelector("img");
    function close() { box.hidden = true; img.removeAttribute("src"); document.body.style.overflow = ""; }
    document.getElementById("spreads").addEventListener("click", function (e) {
      var phone = e.target.closest(".phone");
      if (!phone) return;
      img.src = phone.dataset.src;
      box.hidden = false;
      document.body.style.overflow = "hidden";
    });
    box.addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !box.hidden) close(); });
  })();

  applyLang();
})();
