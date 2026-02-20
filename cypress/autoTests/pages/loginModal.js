class LoginModal {

  // Define elents in the login page
  usernameField() {
    return cy.get('#login-username');
  }

  passwordField() {
    return cy.get('#login-password');
  }

  loginButton() {
    return cy.get('form button[type="submit"]').first();
  }

  // Define methods and actions for the login page

  /**
   * Logs into the application using the provided credentials.
   * 
   * @param {string} username - The username to enter.
   * @param {string} password - The password to enter.
   */
  login(username, password) {
    this.usernameField().type(username);
    this.passwordField().type(password);
    this.loginButton().click();
  }

  /**
   * Logs into the application using credentials stored in cypress.env.json.
   * 
   * @param {string} usernameKey - The environment key for the username.
   * @param {string} passwordKey - The environment key for the password.
   */
  loginWithEnv(usernameKey, passwordKey) {
  cy.env([usernameKey, passwordKey]).then((env) => {
    this.login(env[usernameKey], env[passwordKey]);
  });
}
}

export default new LoginModal();