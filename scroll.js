// scroll hacia abajo, esconde la navbar
const navbar = document.getElementById("navbar");
let prevScrollPos = window.scrollY;

const handleScroll = () => {
  const currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos)
    navbar.style.transform = "translateY(0)";
  else navbar.style.transform = `translateY(-${navbar.offsetHeight}px)`;
  prevScrollPos = currentScrollPos;
};
// Asigna la función de control de scroll al evento 'scroll'
window.addEventListener("scroll", handleScroll);
