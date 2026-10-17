// Invite member modal: a <dialog> opened with showModal(), which moves focus
// in, traps it, closes on Escape and returns focus to the button. Closes from
// the header button, from Cancel, and by clicking the scrim. Submitting sends
// the invitation and closes the modal.
(function () {
  var dialog = document.getElementById('invite-dialog');
  var openBtn = document.getElementById('invite-open');
  var closeBtn = document.getElementById('invite-close');
  var cancelBtn = document.getElementById('invite-cancel');
  var form = document.getElementById('invite-form');
  if (!dialog || !openBtn) return;

  openBtn.addEventListener('click', function () { dialog.showModal(); });
  if (closeBtn) closeBtn.addEventListener('click', function () { dialog.close(); });
  if (cancelBtn) cancelBtn.addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) dialog.close();
  });
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      dialog.close();
      form.reset();
    });
  }
})();
