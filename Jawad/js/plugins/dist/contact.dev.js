"use strict";

function sendmail() {
  var parm = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };
  emailjs.send("service_19t3wr8", "template_8e02dwl", parm).then(alert("Message sent successfully 😄🎉"));
}
//# sourceMappingURL=contact.dev.js.map
