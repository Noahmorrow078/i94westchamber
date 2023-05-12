import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import jsonp from "jsonp";

const SocialTwo = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState(""); 
    const [errormessage, setErrorMessage] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://i94westchamber.us3.list-manage.com/subscribe/post-json?u=316c10e2bd35b1a092de997e0&amp;id=f4fb8bbfe0&amp;f_id=0052bbe3f0";
    jsonp(`${url}&FNAME=${firstName}&LNAME=${lastName}&EMAIL=${email}`, { param: "c" }, (_, data) => {
      const { msg, result } = data;

      setErrorMessage(msg);
      console.log(firstName)
    });
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
                action=""
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="validate mailchimp-form"
                onSubmit={onSubmit}
                required
              >
                <div id="mc_embed_signup_scroll">
                  <div class="mc-field-group">
                    <label for="mce-FNAME">First Name </label>
                    <input
                    type="text"
                    name="FNAME"
                    class=""
                    id="mce-FNAME"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}

                    />
                    <span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-LNAME">Last Name </label>
                    <input
                      type="text"
                     
                      name="LNAME"
                      class=""
                      id="mce-LNAME"
                      value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                    <span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-EMAIL">
                      Email Address <span class="asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      name="EMAIL"
                      class="required email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="mce-EMAIL"
                      
                    />
                    <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
                  </div>
                  <div id="mce-responses" class="clear">
                    <div
                      class="response"
                      id="mce-error-response"
                    >{errormessage}</div>
                    <div
                      class="response"
                      id="mce-success-response"
                    ></div>
                  </div>
                  
                  <div class="clear">
                  <button type="submit">Subscribe!</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialTwo;
