function reviewOrder() {
    const items = document.querySelectorAll('.order-item');
    const list = document.getElementById("summaryList");
    list.innerHTML = "";
    let total = 0;
    let valid = false;

    items.forEach(item => {
        const cb = item.querySelector('input[type="checkbox"]');
        const qty = item.querySelector('input[type="number"]');

        if (cb.checked) {
            if (!qty.value || qty.value <= 0) {
                alert("Please enter quantity for " + cb.dataset.name);
                valid = false;
                return;
            }
            valid = true;
            const li = document.createElement("li");
            li.textContent = `${cb.dataset.name} × ${qty.value} = Rs ${cb.dataset.price * qty.value}`;
            list.appendChild(li);
            total += cb.dataset.price * qty.value;
        }
    });

    if (!valid) {
        alert("Please select at least one dish.");
        return;
    }

    document.getElementById("totalAmount").innerText = total;
    document.getElementById("orderSummary").style.display = "block";
}

function confirmOrder() {
    const name = document.getElementById("custName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    if (name === "" || phone === "" || address === "") {
        alert("Please fill Name, Phone Number, and Address.");
        return;
    }

    alert(
        "Order Confirmed!\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Total Bill: Rs " +
        document.getElementById("totalAmount").innerText +
        "\nThank you for ordering 😊"
    );

    document.getElementById("orderSummary").style.display = "none";

    // Refresh page after order
    location.reload();
}
