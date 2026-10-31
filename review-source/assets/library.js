"use strict";
(() => {
  const tools = document.getElementById("library-tools");
  const input = document.getElementById("topic-search");
  const toggle = document.getElementById("library-toggle");
  const count = document.getElementById("library-result-count");
  const empty = document.getElementById("library-empty");
  const groups = [...document.querySelectorAll("#library-topic-groups > section")];
  if (!tools || !input || !toggle || !count || !empty || !groups.length) return;
  let expanded = false;
  const normalize = value => value.normalize("NFKC").toLocaleLowerCase().trim();
  const total = groups.reduce((sum, group) => sum + group.querySelectorAll(".topiclist li").length, 0);
  function render() {
    const query = normalize(input.value);
    let matched = 0, shown = 0;
    for (const group of groups) {
      let groupMatches = 0;
      for (const item of group.querySelectorAll(".topiclist li")) {
        const match = !query || normalize(item.textContent).includes(query);
        if (match) { matched++; groupMatches++; }
        item.hidden = !match || (!query && !expanded && groupMatches > 5);
        if (!item.hidden) shown++;
      }
      group.hidden = groupMatches === 0;
    }
    count.textContent = query ? `${matched} of ${total} topics match your search.` : `${shown} of ${total} topics shown. Browse a section or show the full library.`;
    empty.hidden = matched !== 0;
    toggle.hidden = Boolean(query);
    toggle.textContent = expanded ? "Show fewer topics" : `Show all ${total} topics`;
    toggle.setAttribute("aria-expanded", String(expanded));
  }
  tools.hidden = false;
  input.addEventListener("input", render);
  toggle.addEventListener("click", () => { expanded = !expanded; render(); });
  render();
})();
