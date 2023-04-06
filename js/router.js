const routes = {
  404: "/pages/404.html",
  "/": "/pages/member-list.html",
  "/member-list": "/pages/member-list.html",
  "/index.html": "/pages/member-list.html",
  "/register": "/pages/register.html",
  "/view": "/pages/view.html"
}

const dispatchRoute = (event) => {
  event.preventDefault()
  if (event.target.href) {
    window.history.pushState({}, "", event.target.href)
    handleLocation()
  }
}

const handleLocation = async () => {
  const path = window.location.pathname

  if (path === "/index.html") window.location.href = "/"

  const route = routes[path] || routes[404]
  const html = await fetch(route).then((data) => data.text())
  document.getElementById("outlet").innerHTML = html
}

window.addEventListener("popstate", handleLocation)
window.addEventListener("DOMContentLoaded", handleLocation)
window.addEventListener("click", dispatchRoute)
