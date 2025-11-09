function logout() {
  const confirmLogout = confirm("Are you sure you want to log out?");
  if (confirmLogout) {
    alert("You have logged out successfully.");
    window.location.href = "login.html";
  }
}
