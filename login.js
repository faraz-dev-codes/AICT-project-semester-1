function showSignup(){
    loginForm.style.display="none";
    signupForm.style.display="block";
    formTitle.innerText="Sign Up";
    switchText.innerHTML='Already have an account? <span onclick="showLogin()">Log In</span>';
}

function showLogin(){
    loginForm.style.display="block";
    signupForm.style.display="none";
    formTitle.innerText="Login";
    switchText.innerHTML='Don’t have an account? <span onclick="showSignup()">Sign Up</span>';
}
