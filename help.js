const modalWindow = document.querySelector(".modal-window");

document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input1 = document.getElementById("first_name");
  const input2 = document.getElementById("last_name");
  const input3 = document.getElementById("email");
  const input4 = document.getElementById("phone");
  const input5 = document.getElementById("age");

  if (
    input1.value.trim() === "" ||
    input2.value.trim() === "" ||
    input3.value.trim() === "" ||
    input4.value.trim() === "" ||
    input5.value.trim() === ""
  ) {
    alert("Будь ласка, заповніть всі поля вводу.");
  } else if (!isValidEmail(input3.value)) {
    console.log(1);
    alert("Будь ласка, введіть коректну електронну адресу.");
  } else {
    openModal(
      input1.value,
      input2.value,
      input3.value,
      input4.value,
      input5.value
    );
  }
});

function openModal(firstName, lastName, email, phone, age) {
  const fields = document.querySelectorAll(".form-text");
  fields[0].innerHTML = "Ім'я: " + firstName;
  fields[1].innerHTML = "Прізвище " + lastName;
  fields[2].innerHTML = "Пошта: " + email;
  fields[3].innerHTML = "Телефон: " + phone;
  fields[4].innerHTML = "Вік: " + age;

  modalWindow.classList.add("active");
  document.body.style.overflow = "hidden";
}

const closeModal = () => {
  modalWindow.classList.remove("active");
  document.body.style.overflow = "auto";
};

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  return emailPattern.test(email);
}
