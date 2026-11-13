const frame = document.getElementById("viewer");

export async function showMarkdown(file, cssFile = "engine/styles/default-post.css", scriptFile) {
  const response = await fetch(file);
  const text = await response.text();

  const css = await (await fetch(cssFile)).text();

  // No script for this post? Then js stays empty and nothing is added
  let js = "";
  if (scriptFile) {
    const res = await fetch(scriptFile);
    if (res.ok) js = await res.text();
  }

  frame.srcdoc = `<style>${css}</style>` + marked.parse(text) + `<script>${js}</script>`;
}