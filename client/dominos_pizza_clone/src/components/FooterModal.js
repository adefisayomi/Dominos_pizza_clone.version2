import React from 'react'
import { Link } from "react-router-dom"
import ClearIcon from "@material-ui/icons/Clear";
import "./footerModal.css"

function FooterModal({close, state}) {

    

    return (
            <div className="footer__backdrop" style = {{display : state}}>
        <div className="modal">
          <div className="modal__header">
              <button onClick = {close} ><ClearIcon className="closeIcon" /></button>
            
          </div>
          <div className="modal__body">
            <h2 className="footer__modalh2">TERMS OF USE</h2>
            <h4 className="footer__modalh4">Acceptance of Terms</h4>
            <p>
              By ticking the relevant box during the registration process the
              Guest agrees to be bound by these Terms and Conditions.{" "}
            </p>
            <p>
              <strong>
                Given the lack of human factor intervention in sending and
                receiving the order via the Internet (online), it is necessary
                to take in mind the following terms before entered your details
                and / or your order. Please read carefully!
              </strong>
            </p>
            <p>
              {" "}
              ➤ The minimum standards that must be your browsers (browsers) to
              order through our website is: Internet Explorer 7, Mozilla Firefox
              2 , Safari 4 or later enabled the performance JavaScript.{" "}
            </p>
            <p>
              ➤ Orders paid by credit card are charged directly from your bank
              account. For security reasons Domino’s Pizza Nigeria has no access
              to your credit card.
            </p>
            <p>
              ➤ changing or cancelling the order after sending is NOT accepted.{" "}
            </p>
            <p>
              ➤ In the menu list, removing any topping from the pizza does not
              change the price of the pizza but adding any topping attracts a
              fee.
            </p>
            <p>➤ Minimum order value =N=3000 for Delivery. </p>
            <p>
              ➤ The high value orders and contact information of customers who
              order for the first time may be confirmed by telephone. For this
              reason, please indicate on your online order the delivery address
              phone so we can call you back to confirm.{" "}
            </p>
            <p>
              ➤ Domino’s Pizza Nigeria cannot guarantee the uninterrupted
              operation of <Link to="/">www.dominos.ng</Link> and bears no
              responsibility for any technical failure or any other use of{" "}
              <Link to="/">www.dominos.ng</Link>
            </p>
            <h4 className="footer__modalh4">Terms deals</h4>
            <p>
              The selection of offers made through the Deals section of the site
              and may not be combined with other offers unless otherwise
              specified by the terms of the offer.
            </p>
            <h4 className="footer__modalh4">Protection of Personal Data</h4>
            <p>
              The use of the services provided by the
              <Link to="/">www.dominos.ng</Link>, including online order service
              of Domino's Pizza Nigeria products necessitates communication
              possibility with you. It is therefore necessary when you sign it
              to indicate the truth when filling in your data requested such as
              name, email address, mailing address and telephone number. By
              enrolling in <Link to="/">www.dominos.ng</Link> and the
              introduction of the requested data you consent to the collection,
              use and processing of your personal data voluntarily entered for
              the purposes disclosed below.
            </p>
            <p>
              Domino’s Pizza Nigeria collects and maintains only the personal
              information you disclose in the introduction of your requested
              information in the appropriate fields and / or responses in
              specific actions carried out by Domino's and you voluntarily
              participate.
            </p>
            <p>
              The Purpose of the collection, use and processing of your personal
              data you provide to the company, is to provide the services and
              products you request via the website, for the reception of which
              requires the use and / or processed eg online orders and the sale
              and promotion of products and services offered by the Domino's
              Pizza Nigeria, particularly through{" "}
              <Link to="/">www.dominos.ng</Link>
            </p>
            <p>
              Domino's Pizza Nigeria has the right to use the contact details
              that are known for sending information messages about products and
              services and relevant offers and / or communications.
            </p>{" "}
            <p>
              Access to personal data is permitted only to authorized persons
              who require access in order to enable the completion of the
              purpose of the collection, use and processing, as is acknowledged
              by these terms. In this context, the Domino's Pizza Nigeria
              reserves the right to provide authorized access and / or right to
              use and processing of your personal data to third legal or natural
              persons involved in the execution of the processing as assigned.
            </p>
            <p>
              Domino's Pizza Nigeria reserves the right to use the information
              which you disclose through <Link to="/">www.dominos.ng</Link> in a
              manner that does not enable the identification or disclosure of
              the person whom they concern, for statistical, promotional,
              research or promotional purposes, disclosing these and third
              parties eg research companies responsible for the completion of
              the above objectives.
            </p>
            <p>
              Domino's Pizza Nigeria reserves the right to amend these terms and
              conditions by posting them in <Link to="/">www.dominos.ng</Link>{" "}
            </p>
            <p>
              Subscribing to and / or using the services provided via{" "}
              <Link to="/">www.dominos.ng</Link> signifies an unconditional
              acceptance of these terms of use.
            </p>
          </div>
        </div>
      </div>
    )
}

export default FooterModal
