(function () {
  if (window.__spasuTracking) return;
  window.__spasuTracking = true;

  var PRECOS = {
    "Massagem Terapêutica": 167,
    "Massagem Relaxante": 157,
    "Escalda-Pés": 90,
    "Head Spa Simples": 187,
    "Head Spa Completo": 197,
    "Terapia Capilar": 117,
    "Revitalização Facial": 107,
    "Ritual Iluminar Relaxante": 197,
    "Ritual Iluminar Terapêutico": 209,
    "Caminhos de Luz": 117,
    "Foco & Luz": 97,
    "Pontos de Luz": 77,
    "Uma Luz no Caminho": 37
  };

  function preco(servico) {
    var alvo = (servico || "").toLowerCase();
    for (var k in PRECOS) if (k.toLowerCase() === alvo) return PRECOS[k];
    return 0;
  }

  var ORIGEM = location.hostname.indexOf("su.") === 0 ? "LP" : "Site";
  var WA = 'a[href*="wa.me"], a[href*="api.whatsapp.com"], a[href^="whatsapp:"]';

  function evId(nome) {
    return nome + "." + Date.now() + "." + Math.random().toString(36).slice(2, 10);
  }

  function enviar(tipo, nome, dados) {
    if (!window.fbq) return;
    window.fbq(tipo, nome, dados, { eventID: evId(nome) });
  }

  var APELIDOS = {
    "healing massage": "Massagem Terapêutica",
    "sopro de alma": "Massagem Relaxante"
  };

  function padronizar(servico) {
    var s = (servico || "").trim();
    return APELIDOS[s.toLowerCase()] || s;
  }

  function servicoDoLink(href) {
    try {
      var texto = (new URL(href, location.href).searchParams.get("text") || "")
        .replace(/\s*\[[^\]]*\]\s*$/, "");
      if (/ritual/i.test(texto)) {
        return /relaxante/i.test(texto) ? "Ritual Iluminar Relaxante" : "Ritual Iluminar Terapêutico";
      }
      var m = texto.match(/sobre (?:(?:a|o) )?(.+?)\.?$/i);
      if (!m || /^(os|as) /i.test(m[1])) return "Geral";
      return padronizar(m[1]);
    } catch (e) {
      return "Geral";
    }
  }

  function categoria(servico) {
    if (/head spa|capilar/i.test(servico)) return "Head Spa";
    if (/massagem|escalda|ritual/i.test(servico)) return "Massagem";
    if (/facial/i.test(servico)) return "Estética";
    if (/tar[oô]|luz/i.test(servico)) return "Tarô";
    return "Geral";
  }

  function dadosServico(servico) {
    var d = {
      content_name: servico,
      content_category: categoria(servico),
      content_type: "service",
      origem: ORIGEM
    };
    var v = preco(servico);
    if (v) {
      d.value = v;
      d.currency = "BRL";
    }
    return d;
  }

  var REF_KEY = "spasu_ref";
  function lerRef() {
    try {
      var r = JSON.parse(localStorage.getItem(REF_KEY) || "null");
      if (r && Date.now() - r.t < 7 * 864e5) return r.v;
    } catch (e) {}
    return null;
  }

  (function gravarRef() {
    try {
      var p = new URLSearchParams(location.search);
      var veioDeAnuncio = p.get("fbclid") || p.get("utm_source") || p.get("utm_campaign");
      if (!veioDeAnuncio) return;
      var conteudo = (p.get("utm_content") || "").normalize("NFD").replace(/[̀-ͯ]/g, "")
        .replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 24);
      localStorage.setItem(REF_KEY, JSON.stringify({
        v: conteudo ? "AD:" + conteudo : "AD",
        t: Date.now()
      }));
    } catch (e) {}
  })();

  function marcarRef(a) {
    var ref = lerRef();
    if (!ref) return;
    try {
      var u = new URL(a.href, location.href);
      var texto = u.searchParams.get("text") || "";
      if (texto.indexOf("[" + ref + "]") !== -1) return;
      u.searchParams.set("text", (texto ? texto + " " : "") + "[" + ref + "]");
      a.href = u.toString();
    } catch (e) {}
  }

  document.addEventListener("click", function (ev) {
    var a = ev.target.closest && ev.target.closest(WA);
    if (!a) return;
    var servico = servicoDoLink(a.href);
    marcarRef(a);
    enviar("track", "Contact", dadosServico(servico));
  }, true);

  var vistos = {};
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (itens) {
    itens.forEach(function (it) {
      if (!it.isIntersecting) return;
      var el = it.target;
      var servico = padronizar(el.getAttribute("data-servico")) || servicoDoLink(el.href || "");
      if (!servico || servico === "Geral" || vistos[servico]) return;
      vistos[servico] = true;
      io.unobserve(el);
      enviar("track", "ViewContent", dadosServico(servico));
    });
  }, { threshold: 0.6 }) : null;

  function observar() {
    if (!io) return;
    document.querySelectorAll("[data-servico], " + WA).forEach(function (el) {
      if (el.__spasuObs) return;
      el.__spasuObs = true;
      io.observe(el);
    });
  }

  observar();
  new MutationObserver(observar).observe(document.documentElement, { childList: true, subtree: true });

  var engajou = false;
  function engajamento(gatilho) {
    if (engajou) return;
    engajou = true;
    enviar("trackCustom", "EngajamentoPagina", { gatilho: gatilho, origem: ORIGEM });
  }

  window.addEventListener("scroll", function () {
    var h = document.documentElement;
    var lido = (window.scrollY + window.innerHeight) / Math.max(h.scrollHeight, 1);
    if (lido >= 0.75) engajamento("scroll75");
  }, { passive: true });

  var segundos = 0;
  var timer = setInterval(function () {
    if (document.visibilityState === "visible") segundos += 1;
    if (segundos >= 45) {
      clearInterval(timer);
      engajamento("tempo45s");
    }
  }, 1000);
})();
