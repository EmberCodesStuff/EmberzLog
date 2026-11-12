const frame = document.getElementById("viewer");

export async function showMarkdown(file) {
  console.log("clicked, loading:", file);
  const response = await fetch(file);
  const text = await response.text();
  frame.srcdoc = marked.parse(text);
}