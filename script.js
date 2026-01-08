function bookTicket() {

  let name = document.getElementById("name").value;
  let eventName = document.getElementById("event").value;
  let tickets = document.getElementById("tickets").value;

  if (name === "" || tickets <= 0) {
    document.getElementById("result").innerText =
      "Please enter valid details.";
    return;
  }

  document.getElementById("result").innerText =
    `✔ Ticket Booked Successfully!
     Name: ${name}
     Event: ${eventName}
     Tickets: ${tickets}`;
}