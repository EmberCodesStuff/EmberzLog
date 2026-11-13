const frame = document.getElementById("viewer");

export async function showMarkdown(file, cssFile, scriptFile) {
  const response = await fetch(file);
  const text = await response.text();

  // Always start with the default style
  let css = await (await fetch("engine/styles/default-post.css")).text();

  // Add the post's own CSS on top, if it has one
  if (cssFile) {
    const res = await fetch(cssFile);
    if (res.ok) css += await res.text();
  }

  let js = "";
  if (scriptFile) {
    const res = await fetch(scriptFile);
    if (res.ok) js = await res.text();
  }

  frame.srcdoc = `<style>${css}</style>` + marked.parse(text) + `<script>${js}</script>`;
}