/* pyja.net — language toggle. RU/EN re-typeset, localStorage-persisted.
   Content mapped to real TDNA + cryptologic language analyst job postings. */
(function () {
  "use strict";

  var DICT = {
    en: {
      "nav.home": "Home",
      "nav.resume": "Résumé",
      "nav.portfolio": "Portfolio",
      "nav.contact": "Contact",
      "logo.tag": "Kris Liles",
      "toggle": "RU",

      "hero.eyebrow": "USAF · E6 · Language-enabled analyst",
      "hero.title": "Russian linguist by training. Target analyst by trade.",
      "hero.lede": "Language-enabled SIGINT analysis — target development, network mapping, and finished reporting, in Russian and English.",
      "hero.lede.ru": "Язык — это вход, а не сама работа. Переключите язык: этот сайт читается по-русски.",
      "hero.cta.resume": "Read the résumé",
      "hero.cta.work": "See the work",
      "hero.m.dlpt": "ILR 2+ / 2 / 1+ · DLPT",
      "hero.m.sigint": "SIGINT · DNR/DNI",
      "hero.m.infra": "Self-hosted · Oracle ARM",

      "sec.about.num": "01",
      "sec.about": "About",
      "about.p1": "Trained as a cryptologic language analyst, working the technical side of the trade: target development, network topology, and the analysis that turns collection into reporting. Russian is the instrument, not the job description.",
      "about.p2": "I also build and defend my own infrastructure — this site, my media stack, my archives, my automation. Analysis and operations on the same desk.",

      "sec.instr.num": "02",
      "sec.instr": "Instruments",
      "instr.analysis.k": "Analysis",
      "instr.analysis.v": "SIGINT target development — DNR/DNI querying, network topology, metadata, OSINT fusion, finished reporting.",
      "instr.analysis.m": "TDNA track",
      "instr.lang.k": "Language",
      "instr.lang.v": "Russian to idiomatic English — gisting, transcription, full translation. Tested at ILR 2+/2/1+.",
      "instr.lang.m": "ILR 2+/2/1+",
      "instr.infra.k": "Infrastructure",
      "instr.infra.v": "Self-hosted Linux, Docker, Cloudflare Zero Trust. I run the lab I analyze with.",
      "instr.infra.m": "24/7",

      "sec.feat.num": "03",
      "sec.feat": "Featured work",
      "feat.lead": "Proof of work, mapped to the job description.",
      "feat.link": "Go to portfolio →",
      "foot.left": "© 2026 Kris Liles",
      "foot.right": "Сделано с расчётом · Built with intent",

      "resume.title": "Résumé",
      "resume.eyebrow": "Kris Liles — USAF E6 · Language-enabled SIGINT",
      "resume.download": "PDF — soon",
      "resume.download.note": "A downloadable PDF will replace this button.",
      "resume.summary.num": "00",
      "resume.summary": "Profile",
      "resume.summary.b": "Cryptologic language analyst (Russian) moving deliberately toward target development. ILR 2+/2/1+ Russian; hands-on with network infrastructure; proven written-output discipline across analytic and research products.",

      "resume.exp.num": "01",
      "resume.exp": "Experience",
      "resume.exp.1.t": "Russian Cryptologic Language Analyst",
      "resume.exp.1.w": "U.S. Air Force — [заполнить]",
      "resume.exp.1.b": "Language operations in Russian with deliverables in idiomatic English: gisting, transcription, and full translation in support of SIGINT collection operations. Product dissemination across intelligence consumers.",
      "resume.exp.2.t": "Target Digital Network Analyst — in development",
      "resume.exp.2.w": "U.S. Air Force — [заполнить]",
      "resume.exp.2.b": "Target development against digital networks: DNR/DNI querying, network topology mapping, metadata analysis, and open-source fusion toward cyber intelligence assessments.",
      "resume.exp.3.t": "[заполнить]",
      "resume.exp.3.w": "—",
      "resume.exp.3.b": "Placeholder for your next entry.",

      "resume.edu.num": "02",
      "resume.edu": "Education",
      "resume.edu.1.t": "Defense Language Institute",
      "resume.edu.1.w": "Monterey, CA — Russian Basic Course",
      "resume.edu.1.b": "Full-time immersion; graduated with DLPT 2+/2/1+ in Russian.",

      "resume.cert.num": "03",
      "resume.cert": "Certifications",
      "resume.cert.list": "[заполнить — DoD 8570/8140 IAT Level II, e.g. Security+]",

      "resume.lang.num": "04",
      "resume.lang": "Languages",
      "resume.lang.list": "Russian — ILR 2+/2/1+ (DLPT) · English — native",

      "resume.skills.num": "05",
      "resume.skills": "Skills",
      "skills.cyber": "SIGINT & analysis",
      "skills.lang": "Language",
      "skills.infra": "Infrastructure",
      "skills.ai": "Automation & AI",
      "sk.cyber.1": "DNR/DNI querying",
      "sk.cyber.2": "Target development",
      "sk.cyber.3": "Network topology analysis",
      "sk.cyber.4": "Metadata & OSINT fusion",
      "sk.cyber.5": "Finished reporting",
      "sk.lang.1": "Russian — ILR 2+/2/1+",
      "sk.lang.2": "Gisting & transcription",
      "sk.lang.3": "Translation to idiomatic English",
      "sk.lang.4": "Product dissemination",
      "sk.infra.1": "Linux hardening",
      "sk.infra.2": "Docker & Compose",
      "sk.infra.3": "Cloudflare Zero Trust",
      "sk.infra.4": "Self-hosted services",
      "sk.ai.1": "Agent workflows",
      "sk.ai.2": "Cron automation",
      "sk.ai.3": "Scripting & tooling",
      "sk.ai.4": "Skill engineering",

      "portfolio.title": "Portfolio",
      "portfolio.eyebrow": "Built things · Построенные вещи",
      "portfolio.lead": "Four tracks, each mapped to a line in the job description.",

      "pf.1.cat": "Инфраструктура",
      "pf.1.t": "Self-hosted operations lab",
      "pf.1.d": "Oracle ARM free tier running media and document services behind a Cloudflare Zero Trust tunnel: default-deny firewall, fail2ban, unattended upgrades, zero inbound exposure beyond SSH. Direct evidence for the network-infrastructure line in every TDNA posting.",
      "pf.1.tags": "docker · cloudflare · linux hardening",
      "pf.1.status": "In production",

      "pf.2.cat": "Язык",
      "pf.2.t": "Russian language tooling",
      "pf.2.d": "DLPT-style practice engine and a Gloss→Anki pipeline that turns military glossaries into drill decks. The bilingual toggle on this site is the same discipline: language as working infrastructure.",
      "pf.2.tags": "html/js · anki · instructional design",
      "pf.2.status": "In use",

      "pf.3.cat": "Исследование",
      "pf.3.t": "Genealogical research archive",
      "pf.3.d": "Multi-line family reconstruction with citation-grade sourcing — 89 ancestor cards, 276 source links, interactive visual tree. Written-evidence discipline applied outside the job.",
      "pf.3.tags": "research · citations · html/js",
      "pf.3.status": "In progress",

      "pf.4.cat": "ИИ",
      "pf.4.t": "AI agent operations",
      "pf.4.d": "Persistent agent deployments: scheduled financial and security monitoring, multi-agent research operations, and skill engineering for repeatable workflows. The analytic-modernization line, demonstrated.",
      "pf.4.tags": "agents · cron · automation",
      "pf.4.status": "In use",

      "contact.title": "Contact",
      "contact.eyebrow": "Связь",
      "contact.lead": "The fastest path is email. This address routes to me directly.",
      "contact.email": "Email",
      "contact.github": "GitHub",
      "contact.linkedin": "LinkedIn",
      "contact.linkedin.v": "— will add later",
      "contact.note": "No recruiters? That's fine. Direct messages get answered faster."
    },

    ru: {
      "nav.home": "Главная",
      "nav.resume": "Резюме",
      "nav.portfolio": "Портфолио",
      "nav.contact": "Контакты",
      "logo.tag": "Крис Лайлз",
      "toggle": "EN",

      "hero.eyebrow": "ВВС США · Языковой аналитик",
      "hero.title": "Лингвист-русист по образованию. Аналитик целей по делу.",
      "hero.lede": "Анализ SIGINT с опорой на язык: разработка целей, картографирование сетей и готовые отчёты — на русском и английском.",
      "hero.lede.ru": "Язык — это вход, а не сама работа. Переключите язык: этот сайт читается и по-английски.",
      "hero.cta.resume": "Читать резюме",
      "hero.cta.work": "Смотреть работы",
      "hero.m.dlpt": "ILR 2+ / 2 / 1+ · DLPT",
      "hero.m.sigint": "SIGINT · DNR/DNI",
      "hero.m.infra": "Свой сервер · Oracle ARM",

      "sec.about.num": "01",
      "sec.about": "Обо мне",
      "about.p1": "Учился как криптологический лингвист, работаю на технической стороне ремесла: разработка целей, топология сетей и анализ, превращающий сбор в отчётность. Русский — инструмент, а не должностная инструкция.",
      "about.p2": "Собственную инфраструктуру строю и защищаю сам: этот сайт, медиатека, архивы, автоматизация. Анализ и эксплуатация — за одним столом.",

      "sec.instr.num": "02",
      "sec.instr": "Инструменты",
      "instr.analysis.k": "Анализ",
      "instr.analysis.v": "Разработка целей в SIGINT: запросы DNR/DNI, топология сетей, метаданные, слияние с OSINT, готовая отчётность.",
      "instr.analysis.m": "трек TDNA",
      "instr.lang.k": "Язык",
      "instr.lang.v": "Русский → идиоматичный английский: гистинг, транскрипция, полный перевод. Проверено: ILR 2+/2/1+.",
      "instr.lang.m": "ILR 2+/2/1+",
      "instr.infra.k": "Инфраструктура",
      "instr.infra.v": "Self-hosted Linux, Docker, Cloudflare Zero Trust. Лабораторию, в которой анализирую, обслуживаю сам.",
      "instr.infra.m": "24/7",

      "sec.feat.num": "03",
      "sec.feat": "Избранные работы",
      "feat.lead": "Доказательства работы — в соответствии с вакансией.",
      "feat.link": "Перейти к портфолио →",
      "foot.left": "© 2026 Крис Лайлз",
      "foot.right": "Сделано с расчётом · Built with intent",

      "resume.title": "Резюме",
      "resume.eyebrow": "Крис Лайлз — ВВС США · SIGINT с опорой на язык",
      "resume.download": "PDF — скоро",
      "resume.download.note": "На этом месте появится ссылка на PDF-версию.",
      "resume.summary.num": "00",
      "resume.summary": "Профиль",
      "resume.summary.b": "Криптологический лингвист (русский), целенаправленно развивающийся в разработку целей. Русский — ILR 2+/2/1+; практический опыт работы с сетевой инфраструктурой; подтверждённая дисциплина письменных продуктов — от аналитических отчётов до исследований.",

      "resume.exp.num": "01",
      "resume.exp": "Опыт",
      "resume.exp.1.t": "Криптологический лингвист (русский)",
      "resume.exp.1.w": "ВВС США — [заполнить]",
      "resume.exp.1.b": "Языковые операции на русском с результатом на идиоматичном английском: гистинг, транскрипция и полный перевод в поддержку операций сбора SIGINT. Доведение продукции до потребителей развединформации.",
      "resume.exp.2.t": "Аналитик цифровых сетей (TDNA) — в развитии",
      "resume.exp.2.w": "ВВС США — [заполнить]",
      "resume.exp.2.b": "Разработка целей в цифровых сетях: запросы DNR/DNI, картографирование топологии, анализ метаданных и слияние с открытыми источниками — вплоть до киберразведывательных оценок.",
      "resume.exp.3.t": "[заполнить]",
      "resume.exp.3.w": "—",
      "resume.exp.3.b": "Место для следующей записи.",

      "resume.edu.num": "02",
      "resume.edu": "Образование",
      "resume.edu.1.t": "Институт иностранных языков МО (DLI)",
      "resume.edu.1.w": "Монтерей, Калифорния — базовый курс русского языка",
      "resume.edu.1.b": "Очная программа с полным погружением; выпуск с DLPT 2+/2/1+ по русскому.",

      "resume.cert.num": "03",
      "resume.cert": "Сертификаты",
      "resume.cert.list": "[заполнить — DoD 8570/8140 IAT Level II, напр. Security+]",

      "resume.lang.num": "04",
      "resume.lang": "Языки",
      "resume.lang.list": "Русский — ILR 2+/2/1+ (DLPT) · Английский — родной",

      "resume.skills.num": "05",
      "resume.skills": "Навыки",
      "skills.cyber": "SIGINT и анализ",
      "skills.lang": "Язык",
      "skills.infra": "Инфраструктура",
      "skills.ai": "Автоматизация и ИИ",
      "sk.cyber.1": "Запросы DNR/DNI",
      "sk.cyber.2": "Разработка целей",
      "sk.cyber.3": "Анализ топологии сетей",
      "sk.cyber.4": "Метаданные и слияние с OSINT",
      "sk.cyber.5": "Готовая отчётность",
      "sk.lang.1": "Русский — ILR 2+/2/1+",
      "sk.lang.2": "Гистинг и транскрипция",
      "sk.lang.3": "Перевод на идиоматичный английский",
      "sk.lang.4": "Доведение продукции",
      "sk.infra.1": "Укрепление Linux",
      "sk.infra.2": "Docker и Compose",
      "sk.infra.3": "Cloudflare Zero Trust",
      "sk.infra.4": "Self-hosted сервисы",
      "sk.ai.1": "Агентные процессы",
      "sk.ai.2": "Автоматизация по расписанию",
      "sk.ai.3": "Скриптинг и инструменты",
      "sk.ai.4": "Инженерия навыков",

      "portfolio.title": "Портфолио",
      "portfolio.eyebrow": "Built things · Построенные вещи",
      "portfolio.lead": "Четыре направления — каждое привязано к строке в описании вакансии.",

      "pf.1.cat": "Инфраструктура",
      "pf.1.t": "Собственная операционная лаборатория",
      "pf.1.d": "Бесплатный сервер Oracle ARM с медиа- и документальными сервисами за туннелем Cloudflare Zero Trust: фаервол по умолчанию — запрет, fail2ban, автообновления; единственный внешний порт — SSH. Прямое доказательство строки «сетевая инфраструктура» в каждой вакансии TDNA.",
      "pf.1.tags": "docker · cloudflare · linux hardening",
      "pf.1.status": "В проде",

      "pf.2.cat": "Язык",
      "pf.2.t": "Инструменты русского языка",
      "pf.2.d": "Тренажёр в стиле DLPT и пайплайн Gloss→Anki: военные глоссарии превращаются в колоды для заучивания. Языковой переключатель этого сайта — та же дисциплина: язык как рабочая инфраструктура.",
      "pf.2.tags": "html/js · anki · учебный дизайн",
      "pf.2.status": "Используется",

      "pf.3.cat": "Исследование",
      "pf.3.t": "Генеалогический архив",
      "pf.3.d": "Реконструкция нескольких семейных линий со ссылками на источники: 89 карточек предков, 276 ссылок, интерактивное визуальное древо. Дисциплина письменных доказательств — вне службы.",
      "pf.3.tags": "исследования · цитирование · html/js",
      "pf.3.status": "В работе",

      "pf.4.cat": "ИИ",
      "pf.4.t": "Операции ИИ-агентов",
      "pf.4.d": "Постоянные развёртывания агентов: плановый финансовый мониторинг и мониторинг безопасности, многозадачные исследовательские операции, инженерия навыков для повторяемых процессов. Строка «инструменты аналитической модернизации» — наглядно.",
      "pf.4.tags": "агенты · cron · автоматизация",
      "pf.4.status": "Используется",

      "contact.title": "Контакты",
      "contact.eyebrow": "Связь",
      "contact.lead": "Самый быстрый путь — почта. Этот адрес ведёт прямо ко мне.",
      "contact.email": "Почта",
      "contact.github": "GitHub",
      "contact.linkedin": "LinkedIn",
      "contact.linkedin.v": "— добавлю позже",
      "contact.note": "Рекрутеров нет? Ничего страшного. На прямые сообщения отвечаю быстрее."
    }
  };

  var saved = null;
  try { saved = localStorage.getItem("pyja-lang"); } catch (e) {}
  var lang = (saved === "ru" || saved === "en") ? saved : "en";

  function apply(l, instant) {
    var d = DICT[l];
    if (instant) { document.body.classList.add("switching"); }
    setTimeout(function () {
      Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (el) {
        var k = el.getAttribute("data-i18n");
        if (d[k]) { el.textContent = d[k]; }
      });
      document.documentElement.setAttribute("lang", l);
      var t = document.querySelector(".lang-toggle");
      if (t) { t.textContent = d["toggle"]; }
      document.body.classList.remove("switching");
    }, instant ? 110 : 0);
    try { localStorage.setItem("pyja-lang", l); } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(lang, false);
    var t = document.querySelector(".lang-toggle");
    if (t) {
      t.addEventListener("click", function () {
        lang = (lang === "en") ? "ru" : "en";
        apply(lang, true);
      });
    }
  });
})();
