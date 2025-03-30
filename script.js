let currentValue = "";
document.querySelector("#display").value = currentValue;
let btn = document.querySelectorAll(".btn");
btn.forEach((button) => {
    let value = button.textContent;
    button.addEventListener("click", () => {
        if (value === "C") {
            currentValue = "";
            document.querySelector("#display").value = currentValue;
        } else if (value === "=") {
            try {
                currentValue = eval(currentValue);
                document.querySelector("#display").value = currentValue;
            } catch (error) {
                document.querySelector("#display").value = "Error";
                setTimeout(() => {
                    document.querySelector("#display").value = "";
                    currentValue = "";
                }, 2000);
            }
        } else {
            currentValue += value;
            document.querySelector("#display").value = currentValue;
        }
    });
});

