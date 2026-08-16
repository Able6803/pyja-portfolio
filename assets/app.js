/* pyja.net — language toggle. RU/EN re-typeset, localStorage-persisted.
   Two pages: Home (about + résumé + contact), Portfolio (placeholder examples). */
(function () {
  "use strict";

  var DICT = {
    en: {
      "nav.home": "Home",
      "nav.portfolio": "Portfolio",
      "logo.tag": "Kris Liles",
      "toggle": "RU",

      "hero.eyebrow": "USAF · E6 · Language-enabled analyst",
      "hero.title": "Russian linguist by training. Target analyst by trade.",
      "hero.lede": "Language-enabled SIGINT analysis — target development, network mapping, and finished reporting, in Russian and English.",
      "hero.lede.ru": "Язык — это вход, а не сама работа. Переключите язык: этот сайт читается по-русски.",
      "hero.cta.resume": "Jump to the résumé",
      "hero.cta.work": "See the work",
      "hero.m.dlpt": "ILR 2+ / 2 / 1+ · DLPT",
      "hero.m.sigint": "SIGINT · DNR/DNI",
      "hero.m.infra": "Self-hosted · Oracle ARM",

      "sec.about.num": "01",
      "sec.about": "About",
      "about.p1": "Trained as a cryptologic language analyst, working the technical side of the trade: target development, network topology, and the analysis that turns collection into reporting. Russian is the instrument, not the job description.",
      "about.p2": "I also build and defend my own infrastructure — this site, my media stack, my archives, my automation. Analysis and operations on the same desk.",

      "resume.exp.num": "02",
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

      "sec.cred.num": "03",
      "sec.cred": "Credentials",
      "cred.edu.k": "Education",
      "cred.edu.v": "Defense Language Institute — Russian Basic Course, full-time immersion. Graduated DLPT 2+/2/1+.",
      "cred.edu.m": "Monterey, CA",
      "cred.cert.k": "Certifications",
      "cred.cert.v": "[заполнить — DoD 8570/8140 IAT Level II, e.g. Security+]",
      "cred.cert.m": "[заполнить]",
      "cred.lang.k": "Languages",
      "cred.lang.v": "Russian — ILR 2+/2/1+ (DLPT) · English — native",
      "cred.lang.m": "ILR 2+/2/1+",

      "resume.skills.num": "04",
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

      "sec.contact.num": "05",
      "sec.contact": "Contact",
      "contact.lead": "The fastest path is email. This address routes to me directly.",
      "contact.email": "Email",
      "contact.github": "GitHub",
      "contact.linkedin": "LinkedIn",
      "contact.linkedin.v": "— will add later",
      "contact.note": "No recruiters? That's fine. Direct messages get answered faster.",
      "foot.left": "© 2026 Kris Liles",
      "foot.right": "Сделано с расчётом · Built with intent",

      "portfolio.title": "Portfolio",
      "portfolio.eyebrow": "Built things · Построенные вещи",
      "portfolio.lead": "Placeholder examples — each one maps to a line in the job description. Real projects replace these as they ship.",

      "pf.1.cat": "Язык",
      "pf.1.t": "Russian text-analysis pipeline",
      "pf.1.d": "A small NLP pipeline for Russian-language material: corpus ingestion, tokenization, frequency and concordance extraction. Demonstrates language processing as a technical skill — not just reading proficiency.",
      "pf.1.tags": "python · nlp · russian",
      "pf.1.status": "In development",

      "pf.2.cat": "Сети",
      "pf.2.t": "Synthetic network graph lab",
      "pf.2.d": "Node-link visualization and topology analysis over synthetic datasets — degree distribution, bridges, communities. Demonstrates network-analysis thinking without touching real data.",
      "pf.2.tags": "graphs · visualization · analysis",
      "pf.2.status": "In development",

      "pf.3.cat": "OSINT",
      "pf.3.t": "Open-source collection workflow",
      "pf.3.d": "A documented collection methodology: query-syntax library, source-evaluation checklist, and a repeatable capture-to-product workflow. Demonstrates disciplined collection and sourcing.",
      "pf.3.tags": "osint · methodology · sourcing",
      "pf.3.status": "In development",

      "pf.4.cat": "Отчётность",
      "pf.4.t": "Automated reporting pipeline",
      "pf.4.d": "Scheduled data collection feeding a templated intelligence product — the collection-to-report loop, automated. Demonstrates finished reporting and the tooling behind it.",
      "pf.4.tags": "automation · reporting · cron",
      "pf.4.status": "In development"
    },

    ru: {
      "nav.home": "Главная",
      "nav.portfolio": "Портфолио",
      "logo.tag": "Крис Лайлз",
      "toggle": "EN",

      "hero.eyebrow": "ВВС США · Языковой аналитик",
      "hero.title": "Лингвист-русист по образованию. Аналитик целей по делу.",
      "hero.lede": "Анализ SIGINT с опорой на язык: разработка целей, картографирование сетей и готовые отчёты — на русском и английском.",
      "hero.lede.ru": "Язык — это вход, а не сама работа. Переключите язык: этот сайт читается и по-английски.",
      "hero.cta.resume": "К резюме",
      "hero.cta.work": "Смотреть работы",
      "hero.m.dlpt": "ILR 2+ / 2 / 1+ · DLPT",
      "hero.m.sigint": "SIGINT · DNR/DNI",
      "hero.m.infra": "Свой сервер · Oracle ARM",

      "sec.about.num": "01",
      "sec.about": "Обо мне",
      "about.p1": "Учился как криптологический лингвист, работаю на технической стороне ремесла: разработка целей, топология сетей и анализ, превращающий сбор в отчётность. Русский — инструмент, а не должностная инструкция.",
      "about.p2": "Собственную инфраструктуру строю и защищаю сам: этот сайт, медиатека, архивы, автоматизация. Анализ и эксплуатация — за одним столом.",

      "resume.exp.num": "02",
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

      "sec.cred.num": "03",
      "sec.cred": "Квалификация",
      "cred.edu.k": "Образование",
      "cred.edu.v": "Институт иностранных языков МО (DLI) — базовый курс русского языка, очное погружение. Выпуск: DLPT 2+/2/1+.",
      "cred.edu.m": "Монтерей, Калифорния",
      "cred.cert.k": "Сертификаты",
      "cred.cert.v": "[заполнить — DoD 8570/8140 IAT Level II, напр. Security+]",
      "cred.cert.m": "[заполнить]",
      "cred.lang.k": "Языки",
      "cred.lang.v": "Русский — ILR 2+/2/1+ (DLPT) · Английский — родной",
      "cred.lang.m": "ILR 2+/2/1+",

      "resume.skills.num": "04",
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

      "sec.contact.num": "05",
      "sec.contact": "Контакты",
      "contact.lead": "Самый быстрый путь — почта. Этот адрес ведёт прямо ко мне.",
      "contact.email": "Почта",
      "contact.github": "GitHub",
      "contact.linkedin": "LinkedIn",
      "contact.linkedin.v": "— добавлю позже",
      "contact.note": "Рекрутеров нет? Ничего страшного. На прямые сообщения отвечаю быстрее.",
      "foot.left": "© 2026 Крис Лайлз",
      "foot.right": "Сделано с расчётом · Built with intent",

      "portfolio.title": "Портфолио",
      "portfolio.eyebrow": "Built things · Построенные вещи",
      "portfolio.lead": "Примеры-заготовки — каждый привязан к строке в описании вакансии. По мере готовности их заменят реальные проекты.",

      "pf.1.cat": "Язык",
      "pf.1.t": "Пайплайн анализа русскоязычных текстов",
      "pf.1.d": "Компактный NLP-пайплайн для русскоязычных материалов: загрузка корпуса, токенизация, частотный и конкордансный анализ. Языковая обработка как технический навык, а не просто чтение.",
      "pf.1.tags": "python · nlp · russian",
      "pf.1.status": "В разработке",

      "pf.2.cat": "Сети",
      "pf.2.t": "Лаборатория графов синтетических сетей",
      "pf.2.d": "Визуализация связей и анализ топологии на синтетических данных: распределение степеней, мосты, сообщества. Сетевое мышление — без реальных данных.",
      "pf.2.tags": "графы · визуализация · анализ",
      "pf.2.status": "В разработке",

      "pf.3.cat": "OSINT",
      "pf.3.t": "Процесс сбора из открытых источников",
      "pf.3.d": "Документированная методология сбора: библиотека поисковых запросов, чек-лист оценки источников, повторяемый процесс от сбора до продукта.",
      "pf.3.tags": "osint · методология · источники",
      "pf.3.status": "В разработке",

      "pf.4.cat": "Отчётность",
      "pf.4.t": "Автоматизированный пайплайн отчётности",
      "pf.4.d": "Плановый сбор данных, питающий шаблонный разведпродукт: цикл «сбор → отчёт» автоматизирован. Готовая отчётность и инструменты за ней.",
      "pf.4.tags": "автоматизация · отчётность · cron",
      "pf.4.status": "В разработке"
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
