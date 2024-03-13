// Template ID: template_dgdoiwx
// Service ID:  service_n4pxlp8
// Public Key: G9RaHBiXg7f572G1Y
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX;
  const y = event.clientY;

  for (let i = 0; i < shapes.length; ++i) {
    shapes[i].style = "translate(${x * oddInteger}px, ${y * oddInteger}px)";
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_n4pxlp8",
      "template_dgdoiwx",
      event.target,
      "G9RaHBiXg7f572G1Y"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove(" modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at omarmata27@gmail.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = !isModalOpen;
  document.body.classList += " modal--open";
}
