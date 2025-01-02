import React, { useState } from "react";

const FooterMailchimp = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({
    message: "",
    isError: false,
    isSubmitting: false
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "", isError: false, isSubmitting: true });

    const urlEncodedData = new URLSearchParams({
      EMAIL: email,
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
      
      setEmail("");
    } catch (error) {
      setStatus({
        message: "An unexpected error has occurred.",
        isError: true,
        isSubmitting: false
      });
    }
  };

  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
      <div className="rn-footer-widget">
        <h4 className="title">Join The Newsletter</h4>
        <div className="inner footer-form">
          <form onSubmit={onSubmit} className="mailchimp-form">
            <input
              type="email"
              name="EMAIL"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
            
            {status.message && (
              <div 
                className={`newsletter-message ${status.isError ? 'error' : 'success'}`}
                style={{
                  fontSize: '0.8rem',
                  marginTop: '0.5rem',
                  color: status.isError ? '#dc3545' : '#28a745'
                }}
              >
                {status.message}
              </div>
            )}

            <button 
              type="submit"
              disabled={status.isSubmitting}
              className="subscribe-btn"
            >
              {status.isSubmitting ? 'Sending...' : 'Subscribe!'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FooterMailchimp;