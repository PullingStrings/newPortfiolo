import axios from "axios";
import fs from "fs";

const username = "PullingStrings";
// eslint-disable-next-line no-undef
const token = process.env.VITE_GITHUB_TOKEN;
const headers = { Authorization: `token ${token}` };

// --- Fetch repos you own (private + public) ---
const fetchOwnedRepos = async () => {
  const res = await axios.get("https://api.github.com/user/repos", {
    headers,
    params: { per_page: 100, sort: "updated", type: "public" }
  });
  return res.data.map(r => ({
    name: r.name,
    description: r.description,
    url: r.html_url,
    language: r.language,
    homepage: r.homepage || null,
    updated_at: r.updated_at,
    type: "github",
    visibility: r.private ? "private" : "public",
  }));
};

// --- Merge with manual projects ---
const mergeWithManual = (githubProjects) => {
  let manualProjects = [];
  try {
    manualProjects = JSON.parse(fs.readFileSync("./public/manualProjects.json", "utf8"));
  } catch (e) {
    console.warn("No manualProjects.json found — skipping manual merge.");
  }
  return [...manualProjects, ...githubProjects];
};

const fetchProjects = async () => {
  try {
    const githubProjects = await fetchOwnedRepos();
    const combined = mergeWithManual(githubProjects);

    // Sort by updated date (manual projects get current date if missing)
    combined.sort((a, b) => new Date(b.updated_at || Date.now()) - new Date(a.updated_at || Date.now()));

    fs.writeFileSync("./public/projects.json", JSON.stringify(combined, null, 2));
    console.log(`✅ Saved ${combined.length} projects to public/projects.json`);
  } catch (err) {
    console.error("❌ Error fetching repos:", err.message);
  }
};

fetchProjects();
