import { IoClose } from "react-icons/io5";
import "./leadspopup.css";

const LeadsPopup = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalBox" onClick={(e) => e.stopPropagation()}>

        <div className="modalHeader">
          <div>
            <h3>Leads Generated</h3>
            <p>Leads received by Rajesh Kumar through the platform</p>
          </div>
          <IoClose className="closeIcon" onClick={onClose} />
        </div>
        <div className="modalBody">

          <div className="leadCard">
            <div className="leadLeft">
              <h4>Suresh Nair <span className="badge new">new</span></h4>
              <p>📧 suresh@example.com</p>
              <p>📞 +91 98765 12345</p>
              <span className="interest">Interested in: <b>2BHK Apartment</b></span>
            </div>
            <span className="leadDate">28/1/2024</span>
          </div>

          <div className="leadCard">
            <div className="leadLeft">
              <h4>Meera Shah <span className="badge contacted">contacted</span></h4>
              <p>📧 meera@example.com</p>
              <p>📞 +91 98765 12346</p>
              <span className="interest">Interested in: <b>Vintage Watch</b></span>
            </div>
            <span className="leadDate">27/1/2024</span>
          </div>

          <div className="leadCard">
            <div className="leadLeft">
              <h4>Karan Johar <span className="badge qualified">qualified</span></h4>
              <p>📧 karan@example.com</p>
              <p>📞 +91 98765 12347</p>
              <span className="interest">Interested in: <b>2BHK Apartment</b></span>
            </div>
            <span className="leadDate">26/1/2024</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeadsPopup;
