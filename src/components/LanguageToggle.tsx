import { useEffect, useState } from "react";
import { ar } from "@/data/arabic";

type Lang = "en" | "ar";
const KEY = "site-lang";
const originals = new WeakMap<Node, string>();
const originalPlaceholders = new WeakMap<Element, string>();

const norm = (s: string) => s.replace(/\s+/g, " ").trim();

function translateNode(node: Node, lang: Lang) {
  if (node.nodeType === Node.TEXT_NODE) {
    const parent = node.parentElement;
    if (!parent || parent.closest("script,style,[data-no-translate]")) return;
    const current = node.nodeValue ?? "";
    if (lang === "ar") {
      const source = originals.get(node) ?? current;
      const hit = ar[norm(source)];
      if (hit) {
        if (!originals.has(node)) originals.set(node, current);
        const lead = source.match(/^\s*/)![0];
        const trail = source.match(/\s*$/)![0];
        const next = lead + hit + trail;
        if (current !== next) node.nodeValue = next;
      }
    } else if (originals.has(node)) {
      node.nodeValue = originals.get(node)!;
      originals.delete(node);
    }
    return;
  }
  if (node instanceof Element) {
    const ph = node.getAttribute("placeholder");
    if (ph !== null) {
      if (lang === "ar") {
        const src = originalPlaceholders.get(node) ?? ph;
        if (ar[norm(src)]) {
          originalPlaceholders.set(node, src);
          node.setAttribute("placeholder", ar[norm(src)]);
        }
      } else if (originalPlaceholders.has(node)) {
        node.setAttribute("placeholder", originalPlaceholders.get(node)!);
        originalPlaceholders.delete(node);
      }
    }
    node.childNodes.forEach((c) => translateNode(c, lang));
  }
}

export function LanguageToggle() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    if (localStorage.getItem(KEY) === "ar") setLang("ar");
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem(KEY, lang);
    translateNode(document.body, lang);
    if (lang !== "ar") return;
    const observer = new MutationObserver((records) => {
      observer.disconnect();
      records.forEach((r) => {
        if (r.type === "characterData") translateNode(r.target, "ar");
        r.addedNodes.forEach((n) => translateNode(n, "ar"));
      });
      observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [lang]);

  return (
    <button
      type="button"
      data-no-translate
      onClick={() => setLang(lang === "en" ? "ar" : "en")}
      className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold transition-colors hover:border-brand-accent hover:text-brand-accent"
      aria-label={lang === "en" ? "التبديل إلى العربية" : "Switch to English"}
    >
      {lang === "en" ? "عربي" : "EN"}
    </button>
  );
}
