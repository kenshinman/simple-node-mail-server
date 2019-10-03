const partials = require("./partials");

const bookingMail = ({
  name,
  email,
  website,
  phone,
  organizationType,
  venue,
  state,
  country,
  typeOfEvent,
  eventDate,
  altDate,
  description
}) => {
  return `
  ${partials.header()}
    <section class="details">
      <div class="detail">
        <h4>Name</h4>
        <p>${name}</p>
      </div>
      <div class="detail">
        <h4>Email </h4>
        <p>${email}</p>
      </div>
      <div class="detail">
        <h4>Website</h4>
        <p>${website}</p>
      </div>
      <div class="detail">
        <h4>Phone</h4>
        <p>${phone}</p>
      </div>
      <div class="detail">
        <h4>Type of Organization</h4>
        <p>${organizationType}</p>
      </div>
      <div class="detail">
        <h4>Venue for Event</h4>
        <p>${venue}</p>
      </div>
      <div class="detail">
        <h4>State</h4>
        <p>${state}</p>
      </div>
      <div class="detail">
        <h4>Country</h4>
        <p>${country}</p>
      </div>
      <div class="detail">
        <h4>Nature of Event</h4>
        <p>${typeOfEvent}</p>
      </div>
      <div class="detail">
        <h4>Proposed Date for Event (YYYY/MM/DD)</h4>
        <p>${eventDate}</p>
      </div>
      <div class="detail">
        <h4>Alternative Date (YYYY/MM/DD)</h4>
        <p>${altDate}</p>
      </div>
      <div class="detail">
        <h4>Event Description</h4>
        <p>${description}</p>
      </div>
    </section>
    ${partials.footer()}
  `;
};

module.exports = bookingMail;
