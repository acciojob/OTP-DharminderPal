//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".code");

    inputs.forEach((input, index) => {
        input.addEventListener("input", function() {
            if (this.value.length === 1 && index < inputs.length - 1) {
                // Focus next input if current input has one character
                inputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", function(event) {
            if (event.key === "Backspace" && this.value === "") {
                // Focus previous input if backspace is pressed and the input is empty
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });
    });

    // Focus the first input initially
    inputs[0].focus();
});
