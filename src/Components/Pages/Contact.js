import emailjs from 'emailjs-com';

const Contact = () => {

  function sendMessage() {
      console.log("hello");
  }

  function sendEmail() {
    let templateParams = {
        to_name: 'Chasity Savella, Eric Anderson, Chiharu Akiyama',
        from_name: 'CryptoDash App',
        fullname: fullname,
        email: email,
        message: message
    };
    emailjs.send('csfrontend', 'template_xwnwtxf', templateParams, 'user_7mBuykiL1mjdR966UDCWz')
    .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
    }, (error) => {
        console.log('FAILED...', error);
    });
}

  return (
    <div class="rsvp">
      <div class="row rsvpform z-depth-1">
        <div class="col">
          <div class="col-md-auto">
            <form>
              <div class="form-group fname">
                <input
                  id="fullname"
                  name="fullname"
                  className="form-control"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div class="form-group emailaddress">
                <input
                  type="email"
                  className="form-control"
                  id="emailaddress"
                  name="emailaddress"
                  placeholder="Email"
                  required
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="message">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="3"
                ></textarea>
              </div>
              <button
                type="submit"
                class="btn btn-dark btn-block rsvpsubmit"
                onClick={sendMessage()}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
