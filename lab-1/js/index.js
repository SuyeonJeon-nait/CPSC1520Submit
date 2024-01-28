// Reference Variables
const callToactionbutton = document.querySelector("#open-modal");
const dialog = document.querySelector("#email-dialog");
const closeButton = document.querySelector("#close-modal");

// call-to-action button
callToactionbutton.addEventListener("click", onOpendialog);

// close dialog button
closeButton.addEventListener("click", onCloseDialog);

// call-to-action button
function onOpendialog(e) {
    dialog.showModal();
    }
// close dialog button
function onCloseDialog(e) {
    dialog.close();
    }