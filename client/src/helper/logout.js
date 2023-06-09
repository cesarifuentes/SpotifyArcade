const logout = () => {
  console.log("button clicked");
  window.localStorage.clear();
  window.location = "/";
};

export default logout;
