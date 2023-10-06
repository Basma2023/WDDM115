
function duplicateMe() {
    const buttonToDuplicate = document.getElementById('duplicateMe');

    if (buttonToDuplicate) {
        // Create a copy of the button
        const clonedButton = buttonToDuplicate.cloneNode(true);

        // Optional: Give the cloned button a new ID or remove the ID to avoid duplicate IDs
        clonedButton.removeAttribute('id');

        // Append the cloned button after the original button
        buttonToDuplicate.parentNode.insertBefore(clonedButton, buttonToDuplicate.nextSibling);
    }
}