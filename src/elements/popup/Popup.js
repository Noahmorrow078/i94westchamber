import React, { useState, useEffect } from "react";

const PopupNewsletter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({
    message: "",
    isError: false,
    isSubmitting: false
  });

  useEffect(() => {
    const checkPopupStatus = () => {
      const popupClosedTime = localStorage.getItem('newsletterPopupClosed');
      if (popupClosedTime) {
        const oneWeek = 7 * 24 * 60 * 60 * 1000;
        const hasWeekPassed = Date.now() - parseInt(popupClosedTime) > oneWeek;
        
        if (!hasWeekPassed) {
          setIsVisible(false);
          return;
        }
      }
      
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    };

    checkPopupStatus();
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('newsletterPopupClosed', Date.now().toString());
  };

  // New handler for background clicks
  const handleBackgroundClick = (e) => {
    // Only close if the actual background was clicked
    if (e.target.classList.contains('modal')) {
      handleClose();
    }
  };

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
      
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      setStatus({
        message: "An unexpected error has occurred.",
        isError: true,
        isSubmitting: false
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="modal show d-block"  onClick={handleBackgroundClick}  style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title" style={{
                "color":"black",
                "text-align":"center",
                "width":"100%"
            }}>Stay Updated!</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={handleClose}
              aria-label="Close"
            ></button>
          </div>

          {/* Body */}
          <div className="modal-body">
            <div className="text-center mb-4">
              <p className="text-muted">
                Subscribe to our newsletter for updates from the chamber and business community.
              </p>
            </div>

            <form onSubmit={onSubmit} style={{
                "max-width":"300px",
                "margin":"auto"
            }}>
              <div className="mb-3">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-control"
                  style={{
                    "border":"2px solid lightgray",
                    "height":"40px"
                  }}
                />
              </div>

              {status.message && (
                <div 
                  className={`alert ${status.isError ? 'alert-danger' : 'alert-success'} py-2`}
                  role="alert"
                >
                  {status.message}
                </div>
              )}

              <button 
                type="submit"
                disabled={status.isSubmitting}
                className="btn-default btn-icon m--auto "
                style={{"fontSize":"14px",
                    "margin":"auto",
                    "display":"block",
                    "padding":"10px 15px",
                    "height":"auto",
                    "lineHeight":"1"
                }}
              >



                {status.isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Subscribing...
                  </>
                ) : (
                  'Subscribe Now'
                )}
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="modal-footer justify-content-center">
            <small className="text-muted">
              By subscribing, you agree to receive our newsletter. You can unsubscribe at any time.
            </small>
          </div>
        </div>
      </div>

      {/* Optional: Add fade-in animation */}
      <style>{`
        .modal.show {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default PopupNewsletter;