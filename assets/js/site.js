/**
 * Loads each section's Markdown file (see /content/*.md) and renders it
 * into the matching [data-md] container using marked.js. Content authors
 * edit the .md files; this script is the only thing that needs to know
 * how they turn into HTML.
 */
(function () {
  "use strict";

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

  function loadOne(el) {
    var src = el.getAttribute("data-md");
    return fetch(src)
      .then(function (res) {
        if (!res.ok) throw new Error("Kon " + src + " niet laden (" + res.status + ")");
        return res.text();
      })
      .then(function (md) {
        el.innerHTML = marked.parse(md);
        if (el.hasAttribute("data-hero-ctas")) {
          markCtaRow(el);
        }
      })
      .catch(function (err) {
        el.innerHTML = "<p><em>Kon deze tekst niet laden. Werk je lokaal? Start een lokale server " +
          "(bijvoorbeeld <code>python3 -m http.server</code>) in plaats van het bestand direct te openen.</em></p>";
        console.error(err);
      });
  }

  Promise.all(targets.map(loadOne)).then(function () {
    setupScrollReveal();
    setupNav();
  });

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
})();
