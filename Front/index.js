const API_URL = "http://localhost:3000";
const USE_MOCK = true; // switch to false when the backend is ready

let mockData = [{ id: 1, name: "Test item" }];

async function getItems() {
  if (USE_MOCK) return mockData;
  const res = await fetch(`${API_URL}/items`);
  return res.json();
}

async function addItem(name) {
  if (USE_MOCK) { mockData.push({ id: Date.now(), name }); return; }
  await fetch(`${API_URL}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  });
}

async function render() {
  const list = document.getElementById("item-list");
  const items = await getItems();
  list.innerHTML = items.map(i => `<li>${i.name}</li>`).join("");
}

document.getElementById("item-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = document.getElementById("name");
  await addItem(input.value);
  input.value = "";
  render();
});

render();