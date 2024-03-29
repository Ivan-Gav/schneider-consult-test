function handleTextExpand() {
  const btn = document.getElementsByClassName("sale__expand-btn")[0];
  const txt = document.getElementsByClassName("sale__text")[0];
  if (btn && txt) {
    if (txt.classList.contains("expanded")) {
      txt.classList.remove("expanded");
      btn.textContent = "раскрыть";
    } else {
      txt.classList.add("expanded");
      btn.textContent = "свернуть";
    }
  } else {
    console.log("shit!");
  }
}

function changePaginationOnLoad() {
  const today = new Date();
  const monday = new Date();
  if (today.getDay() && today.getDay() !== 1) {
    monday.setDate(today.getDate() + 8 - today.getDay());
  } else {
    monday.setDate(today.getDate() + 1);
  }

  const mString = monday.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const pagination = document.getElementsByClassName("pagination");
  if (!pagination || !pagination[0]) {
    return;
  }
  const links = pagination[0].getElementsByClassName("links");
  if (!links || !links.length) {
    return;
  }
  links[0].childNodes[0].textContent = mString;
  links[0].childNodes.forEach((link, i) => {
    if (i > 0 && Number.isInteger(Number(link.textContent))) {
      link.textContent *= 2;
    }
  });
}

document.addEventListener("DOMContentLoaded", changePaginationOnLoad);
