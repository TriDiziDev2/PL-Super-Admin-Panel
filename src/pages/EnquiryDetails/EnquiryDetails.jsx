import { FaArrowLeft } from "react-icons/fa";
import "./EnquiryDetails.css";
import { LuMessageSquare } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { RiTelegram2Line } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router-dom";





export default function EnquiryDetails() {

    const navigate = useNavigate();

  return (
    <div className="enquirypagecontainer">
        <div className="enquiryleadheader">
            <div className="lead-header-left">
                <button className="back-btn" onClick={() => navigate("/enquiries")}>
                    <FaArrowLeft />
                  </button>
        
                <div>
                    <h1 className="enquirynameheader">Property Listing Enquiry</h1>
                    <div className="lead-meta">
                      <span className="badge">new</span>
                      <span className="lead-id">Enquiry #1</span>
                    </div>
                </div>
            </div>
         </div>
        <div className="enquirydetailssection">
            <div className="enquirydetailsleft">
                <div className="originalenquiry">
                    <div className="originalenquiryheader">
                        <span className="originalenquirytitle"><LuMessageSquare className="originalenquiryicon"/>Original Enquiry</span>
                        <p className="originalenquirydate"><CiCalendar />2024-01-28 10:30 AM</p>
                    </div>
                        <p className="originalenquirymessage">
                            I'm interested in listing a luxury villa in Goa. Could you please provide more details about the Pro package and its benefits?
                        </p>
                </div>
                <div className="originalenquiry">
                    <div className="originalenquiryheader">
                        <span className="originalenquirytitle"><LuMessageSquare className="conversationheadicon"/>Conversation Thread</span>
                        <p className="originalenquirydate">Previous responses</p>
                    </div>
                    <div className="originalenquirynote">
                        <div className="threadheader">
                            <div className="threadheaderleft"><FiUser className="conversationicon" /> Admin </div>
                            <p className="originalenquirydate"><CiCalendar />2024-01-28 02:15 PM</p>
                        </div>
                        <p className="conversationmessage">
                            I'm interested in listing a luxury villa in Goa. Could you please provide more details about the Pro package and its benefits?
                        </p>
                    </div>
                </div>
                <div className="originalenquiry1">
                    <div className="sendenquiryheader">
                        <span className="originalenquirytitle"><RiTelegram2Line className="originalenquiryicon "/>Send Reply</span>
                        <p className="originalenquirydate">Respond to this enquiry</p>
                    </div>
                    <h2 className="sendenquirytitle">Your Response</h2>
                    <input className="enquiryplaceholder" type="text" placeholder="Type your response here..."/>
                    <button className="sendreply"><RiTelegram2Line />Send Reply</button>
                </div>
            </div>
            <div className="enquirydetailsright">
                <div className="enquirycontactinfo">
                    <div className="enquirycontactheader">Contact Information</div>
                    <div className="enquirycontactname">
                        <div className="enquirycontacticon"><FiUser className="contactusericon" /></div>
                        <div className="enquirycontactdetails">
                            <h3 className="enquirycontacttitle">NAME</h3>
                            <p className="enquirycontactvalue">Rahul Kapoor</p>
                        </div>
                    </div>
                    <div className="enquirycontactname">
                        <div className="enquirycontacticon"><MdOutlineEmail className="contactusericon1" /></div>
                        <div className="enquirycontactdetails">
                            <h3 className="enquirycontacttitle">EMAIL</h3>
                            <p className="enquirycontactvalue">rahul@example.com</p>
                        </div>
                    </div>
                    <div className="enquirycontactname">
                        <div className="enquirycontacticon"><FiPhone  className="contactusericon2" /></div>
                        <div className="enquirycontactdetails">
                            <h3 className="enquirycontacttitle">PHONE</h3>
                            <p className="enquirycontactvalue">+91 98765 43210</p>
                        </div>
                    </div>
                </div>
                <div className="enquirystatusinfo">
                    <div className="enquirystatusheader">
                    <span className="enquirystatustitle">Enquiry Status</span>
                    <p className="originalenquirydate">Update Status</p></div>
                    <h2 className="currentstatustitle">Current Status</h2>
                    <select className="currentstatusdropdown">
                        <option>New</option>
                        <option>In Progress</option>
                        <option>Resolved</option>
                        <option>Closed</option>
                    </select>
                    <p className="updatestatus">Update Status</p>
                </div>
                <div className="enquirycontactinfo">
                    <div className="enquirycontactheader">Enquiry Details</div>
                    <div className="enquirycontactname1">
                        <div className="enquirycontactdetails">
                            <h3 className="enquirycontacttitle1">NAME</h3>
                            <p className="enquirycontactvalue">Rahul Kapoor</p>
                        </div>
                    </div>
                    <div className="enquirycontactname2">
                        <div className="enquirycontactdetails">
                            <h3 className="enquirycontacttitle2">EMAIL</h3>
                            <p className="enquirycontactvalue">rahul@example.com</p>
                        </div>
                    </div>
                    <div className="enquirycontactname3">
                        <div className="enquirycontactdetails">
                            <h3 className="enquirycontacttitle3">PHONE</h3>
                            <p className="enquirycontactvalue">+91 98765 43210</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
