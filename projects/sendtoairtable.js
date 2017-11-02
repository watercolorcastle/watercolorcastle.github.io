var form = document.querySelector("#voting-form");
var select = document.querySelector("#emoji_choice");

// When the form is submitted...
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // POST the data
  axios.post(airtable_write_endpoint, {
    "fields": {
      "Emoji Choice": select.options[select.selectedIndex].value
    }
  });

});
