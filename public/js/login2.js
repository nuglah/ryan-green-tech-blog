const login = async (event) => {
  event.preventDefault();
  document.location.replace("/login");
};
document.querySelector("#login").addEventListener("click", login);
