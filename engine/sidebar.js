import posts from "../posts/index.js";
import { showMarkdown } from "./render.js"

const list = document.getElementById("post-list");

for (const post of posts) {
  const item = document.createElement("li");
  item.className = "sidebar-item";
  item.id = post.slug;

  item.textContent = post.title;

  item.addEventListener("click", () => {
    window.location.hash = post.slug;
    showMarkdown(post.file);
  });

  list.appendChild(item);
}

// If the URL already has a hash, load that post
const slug = window.location.hash.slice(1);
const match = posts.find((p) => p.slug === slug);
if (match) showMarkdown(match.file);