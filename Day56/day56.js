const flower = document.querySelector(".flower");
for (let i = 1; i <= 16; i++) {
  const leaf = document.createElement("div");
  leaf.classList.add("leaf");
  leaf.classList.add("leaf-" + i);
  flower.appendChild(leaf);
}

const dot = document.createElement('div');
dot.classList.add('dot')
flower.appendChild(dot);

