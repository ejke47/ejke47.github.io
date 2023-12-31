
let myButton = document.getElementById("user");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (myName === null) {
      return;
    }
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Hello, ${myName}`;
    }
  }


if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome Back, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };