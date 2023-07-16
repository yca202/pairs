/**
 * CustomAlert class provides a simple way to display custom alert dialogs
 * with specified messages and buttons.
 */
class customAlert {
  constructor() {
    /**
     * Renders the custom alert dialog with the given dialog message and buttons.
     * @param {string} dialog - The message to be displayed in the alert dialog.
     * @param {string} button - The label for the primary button (usually used for confirmation).
     * @param {string} [button1] - The label for the secondary button (usually used for cancellation), optional.
     * @returns {Promise} - A Promise that resolves to true if the primary button is clicked, and false if the secondary button is clicked.
     */
    this.render = function (dialog, button, button1) {
      return new Promise(function (resolve, reject) {
        var dialogoverlay = document.getElementById("dialogoverlay");
        var dialogbox = document.getElementById("dialogbox");
        var dialogwrapper =
          document.getElementsByClassName("dialog-wrapper")[0];
        // Show the dialog overlay and dialog box
        dialogwrapper.style.display = "flex";
        dialogoverlay.style.display = "block";
        dialogbox.style.display = "block";

        // Set the dialog message
        document.getElementById("dialogboxbody").innerHTML = dialog;
        // If a secondary button label is provided, create the secondary button and add click event listener
        if (button1 != null) {
          document.getElementById("dialogboxfootL").innerHTML =
            '<button class="material-button">' + button1 + "</button>";
          document
            .getElementById("dialogboxfootL")
            .addEventListener("click", function () {
              // When the secondary button is clicked, resolve the promise with false and close the dialog
              resolve(false);
              Alert.ok();
            });
        }

        // Create the primary button and add click event listener
        document.getElementById("dialogboxfootR").innerHTML =
          '<button class="material-button">' + button + "</button>";
        document
          .getElementById("dialogboxfootR")
          .addEventListener("click", function () {
            // When the primary button is clicked, resolve the promise with true and close the dialog
            resolve(true);
            Alert.ok();
          });
      });
    };
    /**
     * Closes the custom alert dialog and hides the overlay.
     */
    this.ok = function () {
      document.getElementById("dialogbox").style.display = "none";
      document.getElementById("dialogoverlay").style.display = "none";
      document.getElementsByClassName("dialog-wrapper")[0].style.display =
        "none";
    };
  }
}
