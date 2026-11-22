
const billingToggle = document.getElementById("billingToggle");

const prices = document.querySelectorAll(".price");

billingToggle.addEventListener("change", function () {

    prices.forEach(function (price) {

        const monthlyPrice = price.getAttribute("data-monthly");
        const yearlyPrice = price.getAttribute("data-yearly");

        if (billingToggle.checked) {

            price.innerHTML = "$" + yearlyPrice +
                '<span>/year</span>';

        } else {

            price.innerHTML = "$" + monthlyPrice +
                '<span>/month</span>';
        }

    });

});
