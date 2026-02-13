import { IoClose } from "react-icons/io5";
import './productpopup.css';



const PublishedProductsPopup = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalBox" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modalHeader">
          <div>
            <h3>Published Products</h3>
            <p>Products listed by Rajesh Kumar</p>
          </div>
          <IoClose className="closeIcon" onClick={onClose} />
        </div>

        {/* Body */}
        <div className="modalBody">
          <div className="productCard">
            <div>
              <h4>
                2BHK Apartment <span className="tag">Properties</span>
              </h4>
              <span className="location">📍 Andheri, Mumbai</span>
            </div>
            <div className="rightBlock">
              <span className="price">₹1.2Cr</span>
              <span className="status active">active</span>
            </div>
          </div>

          <div className="productCard">
            <div>
              <h4>
                Vintage Watch <span className="tag">Jewellery & Watches</span>
              </h4>
              <span className="location">📍 Mumbai</span>
            </div>
            <div className="rightBlock">
              <span className="price">₹15L</span>
              <span className="status active">active</span>
            </div>
          </div>

          <div className="productCard">
            <div>
              <h4>
                Antique Chair <span className="tag">Furniture</span>
              </h4>
              <span className="location">📍 Mumbai</span>
            </div>
            <div className="rightBlock">
              <span className="price">₹8L</span>
              <span className="status sold">sold</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishedProductsPopup;
