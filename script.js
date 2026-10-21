document.getElementById("bookingForm").addEventListener("submit", function(event) {
event.preventDefault();

```
const name = document.getElementById("name").value.trim();
const phone = document.getElementById("phone").value.trim();
const service = document.getElementById("service").value;
const message = document.getElementById("message");

if (!name || !phone || !service) {
    message.textContent = "Please fill in all fields.";
    return;
}

message.textContent = "Thank you, " + name + "! Your " + service +
    " booking request has been submitted successfully.";

document.getElementById("bookingForm").reset();
```

});
