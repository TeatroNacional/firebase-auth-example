import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const facebookButton = document.querySelector('#facebookLogin');

facebookButton.addEventListener('click', async e => {
  e.preventDefault();

  const provider = new FacebookAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("facebook sign in");
    
    // Close the login modal
    const modal = bootstrap.Modal.getInstance(facebookButton.closest('.modal'));
    modal.hide();

    // show welcome message
    showMessage("Bienvenid@" + credentials.user.displayName);
  } catch (error) {
    if(error.code === 'auth/account-exists-with-different-credential'){
      showMessage("el correo con el que se registro en Facebook ya tiene acceso intente con otra opcion","error")
    }
  }

})