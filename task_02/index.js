window.addEventListener("click", (e) => {
  let div = document.createElement("div");
  let randomWidthHeight = parseInt(Math.random() * 100 + 1);
  console.log(randomWidthHeight);
  div.style.top = `${e.clientY - 25}px`;
  div.style.left = `${e.clientX - 25}px`;
  div.style.width = `${randomWidthHeight}px`;
  div.style.height = `${randomWidthHeight}px`;
  div.style.backgroundColor = "red";
  div.style.borderRadius = "50%";
  div.style.position = "absolute";
  document.body.appendChild(div);
});
