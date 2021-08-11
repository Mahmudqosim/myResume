const toggleBtn = document.querySelector(".nav__toggle")
const navMenu = document.querySelector(".nav__menu")
const navLinks = document.querySelectorAll(".nav__link")
const sections = document.querySelectorAll("section[id]")
const changeThemeBtn = document.querySelector(".change-theme")

let themeValue = JSON.parse(localStorage.getItem("fluxTheme")) || {
  theme: "light",
}

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu")
})

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
})

function activeScroll() {
  let scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    let sectionId = current.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*='${sectionId}']`)
        .classList.add("active-link")
    } else {
      document
        .querySelector(`.nav__menu a[href*='${sectionId}']`)
        .classList.remove("active-link")
    }
  })
}

window.addEventListener("scroll", activeScroll)

function scrollTop() {
  const scrollTopEl = document.querySelector(".scroll-top")

  if (this.scrollY >= 200) {
    scrollTopEl.classList.add("show-scroll")
  } else {
    scrollTopEl.classList.remove("show-scroll")
  }
}

window.addEventListener("scroll", scrollTop)

// Change Theme
window.addEventListener("load", () => {
  if (themeValue.theme === "dark") {
    document.body.classList.add("dark-theme")
  }
})

changeThemeBtn.addEventListener("click", () => {
  const darkTheme = document.body.classList.contains("dark-theme")
  if (darkTheme) {
    document.body.classList.remove("dark-theme")
    changeThemeBtn.classList.replace("bx-moon", "bx-sun")

    localStorage.setItem(
      "fluxTheme",
      JSON.stringify({
        theme: "light",
      })
    )
  } else {
    document.body.classList.add("dark-theme")
    changeThemeBtn.classList.replace("bx-sun", "bx-moon")

    localStorage.setItem(
      "fluxTheme",
      JSON.stringify({
        theme: "dark",
      })
    )
  }
})
