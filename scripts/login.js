function getLoggedInUser() {
  let login = localStorage.getItem("login");
  return login ? JSON.parse(login) : null;
}

function logout() {
  localStorage.removeItem("login");
  $("nav li.login").click();
}

function setupNavigation() {
  //hide all to start with
  $("nav li").hide();

  //verify if local storage is set
  let login = getLoggedInUser();
  console.log("login: ", login);
  if (login) {
    let role = login.role_id === 1 ? "admin" : "user";
    console.log("role", role);
    $(`nav li.${role},li.logout`).show();
  } else {
    $(`nav li.login`).show();
    $("nav li.login").click();
  }
}
