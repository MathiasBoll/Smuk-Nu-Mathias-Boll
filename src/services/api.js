// src/services/api.js

const BASE_URL = "https://smuknu-vomg9.ondigitalocean.app";

// generel helper
async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API-fejl ved ${path}: ${res.status}`);
  }

  return res.json();
}

/* ---------- GET ---------- */

export async function getProducts() {
  const json = await request("/products");
  return json.data ?? json;
}

export async function getProductById(id) {
  const json = await request(`/products/${id}`);
  return json.data ?? json;
}

export async function getReviews() {
  const json = await request("/reviews");
  return json.data ?? json;
}

export async function getQas() {
  const json = await request("/qas");
  return json.data ?? json;
}

export async function getMembers() {
  const json = await request("/members");
  return json.data ?? json;
}

/* ---------- POST ---------- */

export async function createMember({ name, email, content }) {
  const json = await request("/member", {
    method: "POST",
    body: JSON.stringify({ name, email, content }),
  });
  return json;
}
