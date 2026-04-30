(function () {
  const KEY = 'wf_logged_in';

  function isLoggedIn() {
    return localStorage.getItem(KEY) === '1';
  }

  function login() {
    localStorage.setItem(KEY, '1');
  }

  function logout() {
    localStorage.removeItem(KEY);
    localStorage.removeItem('pendingTransfer');
    window.location.href = 'index.html';
  }

  function requireAuth() {
    if (!isLoggedIn()) {
      window.location.replace('index.html');
    }
  }

  window.wfAuth = { isLoggedIn, login, logout, requireAuth };
})();
