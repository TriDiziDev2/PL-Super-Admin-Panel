import './Settings.css';
import { useState } from "react";
import { IoCameraOutline } from "react-icons/io5";


const Settings = () => {

  const [activeTab, setActiveTab] = useState("approvals");

  return <div className='settingscontainer'>
    <div className="enquiries-header">
        <h1>Settings</h1>
        <p>Platform and profile settings</p>
    </div>
    <ul className='activitycat1'>
        <li className={`catmenu4 ${activeTab === "platform" ? "active-allenquiries" : ""}`}onClick={() => setActiveTab("platform")}>Platform</li>
        <li className={`catmenu4 ${activeTab === "profile" ? "active-chatsystem" : ""}`}onClick={() => setActiveTab("profile")}>Profile</li>
        <li className={`catmenu4 ${activeTab === "security" ? "active-formsubmissions" : ""}`}onClick={() => setActiveTab("security")}>Security</li>
    </ul>
    {activeTab === "platform" && (<div>
      <div className='platforminformation'>
        <div className='platforminfoheader'>
          <h2>Platform Information</h2>
          <p>Update your platform details and branding</p>
          <div className='platforminfoinput'>
            <h3>Platform Name</h3>
            <input type='text' placeholder='Billionaire Auction'></input>
          </div>
          <div className='platforminfoinput'>
            <h3>Tagline</h3>
            <input type='text' placeholder='Luxury Items for the Elite'></input>
          </div>
          <div className='platforminfoinput1'>
            <h3>About Platform</h3>
            <input type='text' className='platformaboutinfo'></input>
          </div>
          <div className='platformcontactinfo'>
          <div className='platforminfoinput2'>
            <h3>Contact Email</h3>
            <input type='text' placeholder='contact@billionaire.com'></input></div>
          <div className='platforminfoinput3'>
            <h3>Support Phone</h3>
          <input type='text' placeholder='+91 22 1234 5678'></input></div>
          </div>
          <div className='platforminfoinput1'>
            <h3>Address</h3>
            <input type='text' className='platformaboutinfo'></input>
          </div>
          <button className='sendreply1'>Save Changes</button>
        </div>
      </div>
    </div>)}
    {activeTab === "profile" && (<div>
      <div className='adminprofile'>
        <div className='platforminfoheader'>
          <h2>Admin Profile</h2>
          <p>Manage your personal information</p></div>
        <div className='adminprofilehead'>
          <div className='adminprofilepic'>SA
            <div className='cameraicon'><IoCameraOutline /></div>
          </div>
          <div className='adminprofileinfo'>
            <h3>Profile Picture</h3>
            <p>Upload a new profile picture</p>
            <span>Change Photo</span>
          </div>
        </div>
        <div className='platformcontactinfo1'>
          <div className='platforminfoinput2'>
            <h3>First Name</h3>
            <input type='text' placeholder='Super'></input></div>
          <div className='platforminfoinput3'>
            <h3>Last Name</h3>
          <input type='text' placeholder='Admin'></input></div>
          </div>
          <div className='platformcontactinfo1'>
          <div className='platforminfoinput2'>
            <h3>Email</h3>
            <input type='text' placeholder='admin@billionaire.com'></input></div>
          <div className='platforminfoinput3'>
            <h3>Phone</h3>
          <input type='text' placeholder='+91 98765 00000'></input></div>
          </div>
          <button className='sendreply2'>Update Profile</button>
      </div>
    </div>)}
    {activeTab === "security" && (<div>
      <div className='securityinfo'>
        <div className='platforminfoheader'>
          <h2>Change Password</h2>
          <p>Update your account Password</p></div>
        <div className='platforminfoinput'>
            <h3>Current Password</h3>
            <input type='text' placeholder='Enter current password'></input>
        </div>
        <div className='platforminfoinput4'>
            <h3 className='platforminputtitle'>New Password</h3>
            <input type='text' placeholder='Enter new password'></input>
        </div>
        <div className='platforminfoinput4'>
            <h3>Confirm New Password</h3>
            <input type='text' placeholder='Confirm new password'></input>
        </div>
        <button className='sendreply2'>Update Password</button>
      </div>
    </div>)}
  </div>;
};

export default Settings;
