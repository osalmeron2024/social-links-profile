const containerRadioButton = document.querySelector(".containerRadio");
const darkMode = document.querySelector(".darkMode");
const lightMode = document.querySelector(".lightMode");

const defaultColorScheme = () => {
  // Detectamos si el usuario tiene habilitado el modo oscuro
  const getScheme = window.matchMedia("(prefers-color-scheme: dark)");

  //Con localStorage.setItem guardo el color scheme a aplicar y sea presistente.
  getScheme.matches === true
    ? localStorage.setItem("colorScheme", "darkMode")
    : localStorage.setItem("colorScheme", "lightMode");

  //Preguntamos que color scheme tiene configurado el usuario dark o light
  const themeActive = localStorage.getItem("colorScheme");
  //Agregamos el color scheme al elemento html
  document.documentElement.classList.toggle(themeActive);
  document.body.classList.remove(document.body.classList[0]);

  getScheme.matches === true
    ? darkMode.setAttribute("checked", "true")
    : lightMode.setAttribute("checked", "true");
};

defaultColorScheme();

const activateColorsScheme = (e) => {
  if (!e.target.matches(".containerRadio")) {
    if (e.target.matches(".darkMode") || e.target.matches(".lblDarkMode")) {
      localStorage.setItem("colorScheme", "darkMode");
      document.documentElement.className = localStorage.getItem("colorScheme");
    } else if (e.target.matches(".lightMode" || e.target.matches(".lblLightMode"))) {
      localStorage.setItem("colorScheme", "lightMode");
      document.documentElement.className = localStorage.getItem("colorScheme");
    } else if(e.target.matches(".redMode") || e.target.matches(".lblRedMode")) {
      localStorage.setItem("colorScheme", "redMode");
      document.documentElement.className = localStorage.getItem("colorScheme");
    }
  }
};

containerRadioButton.addEventListener("click", activateColorsScheme);
