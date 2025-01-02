import React, { useState } from "react";

const SocialTwo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });
  const [status, setStatus] = useState({
    message: "",
    isError: false,
    isSubmitting: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "", isError: false, isSubmitting: true });

    const urlEncodedData = new URLSearchParams({
      FNAME: formData.firstName,
      LNAME: formData.lastName,
      EMAIL: formData.email,
      u: "316c10e2bd35b1a092de997e0",
      id: "f4fb8bbfe0",
      f_id: "0052bbe3f0"
    }).toString();

    const submitUrl = `https://i94westchamber.us3.list-manage.com/subscribe/post?${urlEncodedData}`;

    try {
      const response = await fetch(submitUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      setStatus({
        message: "Thank you for subscribing!",
        isError: false,
        isSubmitting: false
      });
      
      setFormData({
        firstName: "",
        lastName: "",
        email: ""
      });
    } catch (error) {
      setStatus({
        message: "There was an error subscribing. Please try again.",
        isError: true,
        isSubmitting: false
      });
    }
  };

  return (
    <div className="rwt-about-area rn-section-gap">
      <div className="container">
        <div className="row row--30 align-items-start">
          <div className="col-lg-6 col-sm-12">
            <div className="thumbnail">
              <a href="https://www.facebook.com/I94West">
                <img className="mag" src="./images/about/social1.png" alt=" " />
              </a>
            </div>
          </div>

          <div className="col-lg-6 mt_md--30 mt_sm--30 col-sm-12">
            <div className="thumbnail">
              <h3>Join Our Mailing list</h3>
              <p>
                Subscribe to our weekly email newsletter for important updates
                from the chamber and business community.
              </p>
              <form
                onSubmit={onSubmit}
                className="validate mailchimp-form"
              >
                <div className="mc-field-group">
                  <label htmlFor="mce-FNAME">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="mce-FNAME"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                
                <div className="mc-field-group">
                  <label htmlFor="mce-LNAME">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="mce-LNAME"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Email Address <span className="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="mce-EMAIL"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  />
                </div>

                {status.message && (
                  <div className={`alert ${status.isError ? 'alert-danger' : 'alert-success'}`}>
                    {status.message}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status.isSubmitting}
                  className="btn btn-primary mt-4"
                >
                  {status.isSubmitting ? 'Subscribing...' : 'Subscribe!'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialTwo;