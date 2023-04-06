document.addEventListener("click", ({ target }) => {
  const aside = document.querySelector(".l-aside")

  if (target.dataset.toggle === "profile") target.classList.toggle("active")

  if (target.dataset.toggle === "aside") aside.classList.add("active")

  if (target.classList.contains("l-dashboard")) aside.classList.remove("active")
})
