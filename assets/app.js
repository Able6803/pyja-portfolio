/* pyja.net — language toggle. RU/EN re-typeset, localStorage-persisted.
   Content synthesized from: KLiles resume suite, VMET DD2586, EPB 2023-24,
   CCAF transcript, NCS training record, RAND soft-skills study. */
(function () {
  "use strict";

  var DICT = {
    en: {
      "nav.home": "Home",
      "nav.portfolio": "Portfolio",
      "logo.tag": "Kris Liles",
      "toggle": "RU",

      "hero.eyebrow": "USAF · E6 · Target Digital Network Analyst",
      "hero.title": "Russian linguist by training. Target analyst by trade.",
      "hero.lede": "Nearly a decade of SIGINT analysis — target development, network mapping, and finished reporting, with Russian at ILR 2+/2/1+.",
      "hero.lede.ru": "The language is the entry point, not the job. Flip the toggle — this site reads in Russian.",
      "hero.cta.resume": "Jump to the résumé",
      "hero.cta.work": "See the work",
      "hero.m.dlpt": "ILR 2+ / 2 / 1+ · DLPT",
      "hero.m.sigint": "SIGINT · DNR/DNI",
      "hero.m.exp": "TDNA · 2017–present",

      "sec.about.num": "01",
      "sec.about": "About",
      "about.p1": "Nine years in signals intelligence, from apprentice to craftsman: target development, network analysis, and finished reporting across four assignments — Hawaii, Korea, Germany, and Fort Meade. Reporting releaser and targeting adjudicator. Russian tested at ILR 2+/2/1+.",
      "about.p2": "Away from the mission, the soft skills of a decade in uniform — leadership, training others, written communication, decisions under pressure — and the technical practice to match: Python, git, self-hosted infrastructure, and AI-assisted development.",

      "resume.exp.num": "02",
      "resume.exp": "Experience",
      "exp.1.t": "Target Digital Network Analyst",
      "exp.1.w": "U.S. Air Force, 41st IS — Fort Meade, MD · 2023–present",
      "exp.1.b1": "Tracked and predicted adversary weapon-system activity across multiple priority countries, producing 1,000+ tactical reports for joint command decision-makers.",
      "exp.1.b2": "Supervised a five-person multi-discipline team through a six-month crisis period, delivering 24/7 coverage of a dynamic target set.",
      "exp.1.b3": "Partnered with a development group to automate high-priority reporting, enabling near-real-time dissemination for two teams.",
      "exp.2.t": "Team Supervisor — Multi-INT Analysis & Exploitation Team",
      "exp.2.w": "U.S. Air Force, 450th IS — Germany · 2021–2023",
      "exp.2.b1": "Led a multi-discipline Analysis & Exploitation Team supporting tactical units through the Russia–Ukraine conflict.",
      "exp.2.b2": "Ran team supervision and shift operations in a multi-INT environment.",
      "exp.2.b3": "Conducted continuity-of-operations training at two additional sites.",
      "exp.3.t": "Target Digital Network Analyst & Reporter",
      "exp.3.w": "U.S. Air Force, 303d IS — Korea · 2020–2021",
      "exp.3.b1": "Team lead for target development and reporting operations.",
      "exp.3.b2": "Supported hostage recovery operations.",
      "exp.4.t": "Target Analyst Developer & Reporter",
      "exp.4.w": "U.S. Air Force, 392d IS — Hawaii · 2017–2020",
      "exp.4.b1": "Target analysis and reporting in support of the U.S. government's maximum-pressure campaign.",
      "exp.4.b2": "Cross-functional team support across joint intelligence organizations.",
      "exp.5.t": "Independent technical practice",
      "exp.5.w": "2022–present",
      "exp.5.b1": "GitHub & version control — repositories, branching and pull-request workflows, continuous deployment; this site ships from a public repo.",
      "exp.5.b2": "Python — scripting and automation for data processing, analysis workflows, and tooling.",
      "exp.5.b3": "Terminal & IDE coding with AI — Claude Code and Hermes Agent for planning, building, and operating software.",

      "sec.cred.num": "03",
      "sec.cred": "Credentials",
      "cred.edu1.k": "Education",
      "cred.edu1.v": "CCAF — A.A.S. Intelligence Studies and Technology (2023); UMGC — B.S. Cybersecurity Technology, 53 credits, in progress",
      "cred.edu1.m": "2017–present",
      "cred.train.k": "Training",
      "cred.train.v": "Military Signals Intelligence Analysis Course (2017); NCS curriculum in reporting, targeting, and network development",
      "cred.train.m": "2017+",
      "cred.cert.k": "Certifications",
      "cred.cert.v": "Network+ (2023) · [заполнить — DoD 8570/8140 IAT Level II]",
      "cred.cert.m": "[заполнить]",
      "cred.lang.k": "Languages",
      "cred.lang.v": "Russian — ILR 2+/2/1+ (DLPT) · English — native",
      "cred.lang.m": "ILR 2+/2/1+",
      "cred.awards.k": "Awards",
      "cred.awards.v": "ODNI unit citations (2020) · Air Force Commendation Medal (2023) · Joint Service Commendation Medal (2021) · Joint Service Achievement Medal ×2 (2019, 2020) · Meritorious Unit Award (2022) · ALS Distinguished Graduate (2021)",
      "cred.awards.m": "8+",

      "resume.skills.num": "04",
      "resume.skills": "Skills",
      "skills.cyber": "SIGINT & analysis",
      "skills.lang": "Language",
      "skills.infra": "Tools & infrastructure",
      "skills.ai": "Automation & AI",
      "sk.cyber.1": "DNR/DNI querying",
      "sk.cyber.2": "Target development",
      "sk.cyber.3": "Network & social-network analysis",
      "sk.cyber.4": "Metadata & OSINT fusion",
      "sk.cyber.5": "Finished reporting",
      "sk.cyber.6": "Reporting releaser & targeting adjudicator",
      "sk.lang.1": "Russian — ILR 2+/2/1+ (DLPT)",
      "sk.lang.2": "Analytic reading of Russian sources",
      "sk.lang.3": "Language-enabled reporting",
      "sk.infra.1": "ArcGIS · GeoTime · Analyst's Notebook",
      "sk.infra.2": "JupyterLab · PowerBI",
      "sk.infra.3": "Git & GitHub",
      "sk.infra.4": "Linux hardening · Docker · Cloudflare Zero Trust",
      "sk.infra.5": "Self-hosted services",
      "sk.ai.1": "Python scripting",
      "sk.ai.2": "AI-assisted development (Claude Code, Hermes Agent)",
      "sk.ai.3": "Agent workflows",
      "sk.ai.4": "Cron automation",
      "sk.ai.5": "Structured training guides",

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

      "hero.eyebrow": "ВВС США · Аналитик цифровых сетей (TDNA)",
      "hero.title": "Лингвист-русист по образованию. Аналитик целей по делу.",
      "hero.lede": "Почти десять лет анализа SIGINT: разработка целей, картографирование сетей и готовые отчёты — с русским языком на уровне ILR 2+/2/1+.",
      "hero.lede.ru": "Язык — это вход, а не сама работа. Переключите язык: этот сайт читается и по-английски.",
      "hero.cta.resume": "К резюме",
      "hero.cta.work": "Смотреть работы",
      "hero.m.dlpt": "ILR 2+ / 2 / 1+ · DLPT",
      "hero.m.sigint": "SIGINT · DNR/DNI",
      "hero.m.exp": "TDNA · 2017–н.в.",

      "sec.about.num": "01",
      "sec.about": "Обо мне",
      "about.p1": "Девять лет в радиоэлектронной разведке — от ученика до мастера: разработка целей, анализ сетей и готовая отчётность на четырёх назначениях — Гавайи, Корея, Германия, Форт-Мид. Релизер отчётности и адъюдикатор целеуказания. Русский — ILR 2+/2/1+ (DLPT).",
      "about.p2": "Вне миссии — мягкие навыки десяти лет службы: лидерство, обучение других, письменная коммуникация, решения под давлением. И техническая практика: Python, git, собственная инфраструктура и разработка с ИИ-ассистентами.",

      "resume.exp.num": "02",
      "resume.exp": "Опыт",
      "exp.1.t": "Аналитик цифровых сетей (TDNA)",
      "exp.1.w": "ВВС США, 41st IS — Форт-Мид, Мэриленд · 2023–н.в.",
      "exp.1.b1": "Отслеживание и прогнозирование активности систем вооружения противника в нескольких приоритетных странах: более 1000 тактических отчётов для командования.",
      "exp.1.b2": "Руководство междисциплинарной командой из пяти человек в шестимесячный кризисный период — круглосуточное покрытие динамичного набора целей.",
      "exp.1.b3": "Совместная с группой разработчиков автоматизация приоритетной отчётности: доставка в режиме, близком к реальному времени, для двух команд.",
      "exp.2.t": "Супервайзер команды — междисциплинарная группа анализа (AET)",
      "exp.2.w": "ВВС США, 450th IS — Германия · 2021–2023",
      "exp.2.b1": "Руководство междисциплинарной группой анализа и эксплуатации в поддержку тактических подразделений во время конфликта Россия–Украина.",
      "exp.2.b2": "Организация сменной работы команды в мультидисциплинарной среде.",
      "exp.2.b3": "Проведение учений по непрерывности операций (COOP) на двух дополнительных площадках.",
      "exp.3.t": "Аналитик цифровых сетей и составитель отчётов",
      "exp.3.w": "ВВС США, 303d IS — Корея · 2020–2021",
      "exp.3.b1": "Лидер команды разработки целей и отчётности.",
      "exp.3.b2": "Поддержка операций по освобождению заложников.",
      "exp.4.t": "Разработчик целей и составитель отчётов",
      "exp.4.w": "ВВС США, 392d IS — Гавайи · 2017–2020",
      "exp.4.b1": "Анализ целей и отчётность в поддержку кампании максимального давления правительства США.",
      "exp.4.b2": "Поддержка межфункциональных команд в совместных разведструктурах.",
      "exp.5.t": "Независимая техническая практика",
      "exp.5.w": "2022–н.в.",
      "exp.5.b1": "GitHub и контроль версий: репозитории, ветвление, pull-request-процессы, непрерывное развёртывание — этот сайт публикуется из открытого репозитория.",
      "exp.5.b2": "Python: скриптинг и автоматизация обработки данных, аналитических процессов и инструментов.",
      "exp.5.b3": "Кодирование в терминале и IDE с ИИ-ассистентами: Claude Code и Hermes Agent — для планирования, сборки и эксплуатации ПО.",

      "sec.cred.num": "03",
      "sec.cred": "Квалификация",
      "cred.edu1.k": "Образование",
      "cred.edu1.v": "CCAF — младшая степень (A.A.S.) по разведывательным исследованиям и технологиям (2023); UMGC — бакалавр (B.S.) по кибербезопасности, 53 кредита, в процессе",
      "cred.edu1.m": "2017–н.в.",
      "cred.train.k": "Подготовка",
      "cred.train.v": "Курс военного анализа SIGINT (2017); учебная программа NCS по отчётности, целеуказанию и разработке сетей",
      "cred.train.m": "2017+",
      "cred.cert.k": "Сертификаты",
      "cred.cert.v": "Network+ (2023) · [заполнить — DoD 8570/8140 IAT Level II]",
      "cred.cert.m": "[заполнить]",
      "cred.lang.k": "Языки",
      "cred.lang.v": "Русский — ILR 2+/2/1+ (DLPT) · Английский — родной",
      "cred.lang.m": "ILR 2+/2/1+",
      "cred.awards.k": "Награды",
      "cred.awards.v": "Цитаты подразделений ODNI (2020) · медаль «За похвальную службу» ВВС (2023) · JSCM (2021) · JSAM ×2 (2019, 2020) · Meritorious Unit Award (2022) · отличник ALS (2021)",
      "cred.awards.m": "8+",

      "resume.skills.num": "04",
      "resume.skills": "Навыки",
      "skills.cyber": "SIGINT и анализ",
      "skills.lang": "Язык",
      "skills.infra": "Инструменты и инфраструктура",
      "skills.ai": "Автоматизация и ИИ",
      "sk.cyber.1": "Запросы DNR/DNI",
      "sk.cyber.2": "Разработка целей",
      "sk.cyber.3": "Анализ сетей и социальных графов",
      "sk.cyber.4": "Метаданные и слияние с OSINT",
      "sk.cyber.5": "Готовая отчётность",
      "sk.cyber.6": "Выпуск отчётов и адъюдикация целеуказания",
      "sk.lang.1": "Русский — ILR 2+/2/1+ (DLPT)",
      "sk.lang.2": "Аналитическое чтение русских источников",
      "sk.lang.3": "Анализ с опорой на язык",
      "sk.infra.1": "ArcGIS · GeoTime · Analyst's Notebook",
      "sk.infra.2": "JupyterLab · PowerBI",
      "sk.infra.3": "Git и GitHub",
      "sk.infra.4": "Linux hardening · Docker · Cloudflare Zero Trust",
      "sk.infra.5": "Собственные сервисы (self-hosted)",
      "sk.ai.1": "Скриптинг на Python",
      "sk.ai.2": "Разработка с ИИ-ассистентами (Claude Code, Hermes Agent)",
      "sk.ai.3": "Агентные процессы",
      "sk.ai.4": "Автоматизация по расписанию",
      "sk.ai.5": "Структурированные учебные программы",

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
