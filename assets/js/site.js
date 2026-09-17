/**
 * Loads each section's Markdown file (see /content/nl/*.md and
 * /content/en/*.md) and renders it into the matching [data-md] container
 * using marked.js. Content authors edit the .md files per language; this
 * script is the only thing that needs to know how they turn into HTML and
 * how the language switch works.
 */
(function () {
  "use strict";

  var LOCALES = ["nl", "en"];
  var DEFAULT_LOCALE = "nl";
  var STORAGE_KEY = "wibt-lang";

  // Static UI strings that live outside the content/*.md files (nav labels,
  // aria labels, page title/description, the hero image's alt text). Keep
  // content/README.md's pointer to this object in sync if you rename keys.
  var UI = {
    nl: {
      skipLink: "Ga naar de inhoud",
      brandPrefix: "Wetenschap in ",
      brandHighlight: "begrijpelijke",
      brandSuffix: " taal",
      menuOpen: "Menu openen",
      navMotivatie: "Motivatie",
      navAanpak: "Aanpak",
      navResultaten: "Resultaten",
      navTeam: "Team",
      navContact: "Contact",
      partnersHidden: "Samenwerkingspartners",
      heroImageAlt: "Infographic: wetenschap in begrijpelijke taal. Het probleem: een barrière voor kennis door vakjargon. De oplossing: AI als intelligente tolk, met leesbaarheids- en feitelijkheidscontrole door experts",
      editLink: "Deze teksten bewerken op GitHub",
      pageTitle: "Wetenschap in begrijpelijke taal",
      metaDescription: "Open, toetsbare AI zet wetenschappelijke open-accessartikelen om in betrouwbare Nederlandstalige samenvattingen voor zorgprofessionals en beleidsmakers. Een samenwerking van KB, VU en SURF.",
      langSwitchLabel: "Taal"
    },
    en: {
      skipLink: "Skip to content",
      brandPrefix: "Science in ",
      brandHighlight: "plain",
      brandSuffix: " language",
      menuOpen: "Open menu",
      navMotivatie: "Motivation",
      navAanpak: "Approach",
      navResultaten: "Results",
      navTeam: "Team",
      navContact: "Contact",
      partnersHidden: "Partner organizations",
      heroImageAlt: "Infographic: science in plain language. The problem: a barrier to knowledge caused by jargon. The solution: AI as an intelligent translator, with readability and factuality checks by experts",
      editLink: "Edit this text on GitHub",
      pageTitle: "Science in Plain Language",
      metaDescription: "Open, auditable AI turns open-access scientific articles into reliable, plain-language summaries for healthcare professionals and policymakers. A collaboration between KB, VU and SURF.",
      langSwitchLabel: "Language"
    }
  };

  var targets = Array.prototype.slice.call(document.querySelectorAll("[data-md]"));

  function markCtaRow(container) {
    var paragraphs = container.querySelectorAll(":scope > p");
    var last = paragraphs[paragraphs.length - 1];
    if (!last) return;
    var links = last.querySelectorAll("a");
    if (links.length === 0) return;
    var onlyLinks = Array.prototype.every.call(last.childNodes, function (node) {
      if (node.nodeType === Node.TEXT_NODE) return node.textContent.trim() === "";
      return node.nodeType === Node.ELEMENT_NODE && node.tagName === "A";
    });
    if (!onlyLinks) return;
    last.classList.add("hero-ctas");
    links.forEach(function (a, i) {
      a.classList.add("btn", i === 0 ? "btn-primary" : "btn-secondary");
    });
  }

  function loadOne(el, lang) {
    var file = el.getAttribute("data-md");
    var src = "content/" + lang + "/" + file;
    return fetch(src)
      .then(function (res) {
        if (!res.ok) throw new Error("Could not load " + src + " (" + res.status + ")");
        return res.text();
      })
      .then(function (md) {
        el.innerHTML = marked.parse(md);
        if (el.hasAttribute("data-hero-ctas")) {
          markCtaRow(el);
        }
      })
      .catch(function (err) {
        el.innerHTML = "<p><em>Could not load this text. Working locally? Start a local server " +
          "(e.g. <code>python3 -m http.server</code>) instead of opening the file directly.</em></p>";
        console.error(err);
      });
  }

  function loadContentFor(lang) {
    return Promise.all(targets.map(function (el) {
      return loadOne(el, lang);
    }));
  }

  function applyLocale(lang) {
    var strings = UI[lang] || UI[DEFAULT_LOCALE];

    document.documentElement.lang = lang;
    document.title = strings.pageTitle;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", strings.metaDescription);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (strings[key] != null) el.textContent = strings[key];
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        var bits = pair.split(":");
        var attr = bits[0].trim();
        var key = bits[1].trim();
        if (strings[key] != null) el.setAttribute(attr, strings[key]);
      });
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", active ? "true" : "false");
      btn.classList.toggle("is-active", active);
    });
  }

  function detectInitialLocale() {
    // Always defaults to Dutch (the project's primary language) unless the
    // visitor has explicitly switched before. Deliberately not inferring
    // from navigator.language: this is a Dutch project first, and an
    // unpredictable auto-switch would be more surprising than helpful.
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (LOCALES.indexOf(stored) !== -1) return stored;
    } catch (e) {
      // localStorage unavailable (private mode, blocked storage) - ignore.
    }
    return DEFAULT_LOCALE;
  }

  function switchLocale(lang) {
    if (LOCALES.indexOf(lang) === -1) lang = DEFAULT_LOCALE;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // Ignore: the switch still works for this page view.
    }
    applyLocale(lang);
    loadContentFor(lang);
  }

  function setupLangSwitch() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        switchLocale(btn.getAttribute("data-lang"));
      });
    });
  }

  function setupScrollReveal() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      observer.observe(el);
    });
  }

  function setupNav() {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (!toggle || !links) return;
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var initialLocale = detectInitialLocale();
  applyLocale(initialLocale);
  setupLangSwitch();
  setupScrollReveal();
  setupNav();
  loadContentFor(initialLocale);
})();
