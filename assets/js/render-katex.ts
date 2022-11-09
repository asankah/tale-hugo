import katex, { KatexOptions } from 'katex';

function renderMath() {
  if (document.readyState != "complete") {
    return;
  }
  
  // https://katex.org/docs/options.html
  let inlineOptions : KatexOptions = {
    throwOnError: false,
    trust: true
  }

  let displayOptions : KatexOptions = {
    throwOnError: false,
    trust: true,
    displayMode: true
  }

  for (let e of document.getElementsByClassName("math")) {
    if (!(e instanceof HTMLElement)) {
      continue;
    }
    if (e.classList.contains("display")) {
      katex.render(e.textContent || "", e, displayOptions);
    } else {
      katex.render(e.textContent || "", e, inlineOptions)
    }
  }
}

document.addEventListener("readystatechange", renderMath)

