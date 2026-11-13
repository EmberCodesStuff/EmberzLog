import posts from "../posts/index.js";
import { showMarkdown } from "./render.js"

const list = document.getElementById("post-list");

for (const post of posts) {
  const item = document.createElement("li");
  item.className = "sidebar-item";
  item.id = post.slug;

  item.textContent = post.title;

  item.addEventListener("click", () => {
     history.replaceState(null, "", "#" + post.slug);
    showMarkdown(post.file, post.css, post.script);
  });

  list.appendChild(item);
}

// If the URL already has a hash, load that post
const slug = window.location.hash.slice(1);
const match = posts.find((p) => p.slug === slug);
if (match) showMarkdown(match.file, match.css, match.script);

// toggle button

const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});