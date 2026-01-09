document.getElementById("generateBtn").onclick = function () {
  const length = parseInt(document.getElementById("length").value);

  if (length < 4) {
    alert("Hasło musi mieć co najmniej 4 znaki");
    return;
  }

  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (useNumbers) chars += "0123456789";
  if (useSymbols) chars += "!@#$%^&*";

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  document.getElementById("password").innerText =
    "Wygenerowane hasło: " + password;
};
