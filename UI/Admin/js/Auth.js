function checkAuth() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
      redirect("/html/log.html");
    }
  });
}
checkAuth();
