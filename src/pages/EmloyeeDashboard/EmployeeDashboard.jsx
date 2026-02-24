import './EmployeeDashboard.css';

import { TbActivityHeartbeat } from 'react-icons/tb';
import { BsStars } from 'react-icons/bs';
import { BsBoxSeam } from 'react-icons/bs';
import { TbArrowUpRight } from 'react-icons/tb';
import { GoPeople } from 'react-icons/go';
import { LuTarget } from 'react-icons/lu';
import { GoPerson } from 'react-icons/go';
import { FiPhone } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { RiErrorWarningLine } from 'react-icons/ri';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { IoMdTime } from 'react-icons/io';
import { FaRegStar } from 'react-icons/fa';

const EmployeeDashboard = () => {
  return (
    <div className='employee-dashboard-container'>
      <div className='employee-dashboard-header'>
        <h1 className='employee-dashboard-heading'>
          <TbActivityHeartbeat /> Employee Dashboard{' '}
          <BsStars className='star-icon' />
        </h1>
        <p className='employee-dashboard-text'>
          Your personalized workspace with assigned leads and tasks
        </p>
      </div>
      <div className='employee-dashboard-grid-container'>
        <div className='employee-dashboard-item1'>
          <div className='employee-dashboard-item-header'>
            <p className='employee-dashboard-item-text'>Total Products</p>
            <div className='item1-icon-container'>
              <BsBoxSeam />
            </div>
          </div>
          <h2 className='employee-dashboard-item-heading'>16,234</h2>
          <p className='employee-dashboard-item-percent'>
            <TbArrowUpRight /> +18.2% from last month
          </p>
        </div>
        <div className='employee-dashboard-item2'>
          <div className='employee-dashboard-item-header'>
            <p className='employee-dashboard-item-text'>Total Products</p>
            <div className='item2-icon-container'>
              <GoPeople />
            </div>
          </div>
          <h2 className='employee-dashboard-item-heading'>8,956</h2>
          <p className='employee-dashboard-item-percent'>
            <TbArrowUpRight /> +14.8% from last month
          </p>
        </div>
        <div className='employee-dashboard-item3'>
          <div className='employee-dashboard-item-header'>
            <p className='employee-dashboard-item-text'>Total Products</p>
            <div className='item3-icon-container'>
              <LuTarget />
            </div>
          </div>
          <h2 className='employee-dashboard-item-heading'>1,456</h2>
          <p className='employee-dashboard-item-percent'>
            <TbArrowUpRight /> +26.4% from last month
          </p>
        </div>
        <div className='employee-dashboard-item4'>
          <div className='employee-dashboard-item-header'>
            <p className='employee-dashboard-item-text'>Total Products</p>
            <div className='item4-icon-container'>
              <GoPerson />
            </div>
          </div>
          <h2 className='employee-dashboard-item-heading'>47</h2>
          <p className='employee-dashboard-item-percent'>
            <TbArrowUpRight /> +12 from last month
          </p>
        </div>
      </div>
      <div className='assigned-leads-container'>
        <div className='assigned-leads-header'>
          <div className='assigned-leads-content'>
            <h2 className='assigned-leads-heading'>
              <GoPerson className='leads-icon' /> My Assigned Leads
            </h2>
            <p className='assigned-leads-text'>
              Leads currently assigned to you for follow-up
            </p>
          </div>
          <div className='leads-tag'>4 Active</div>
        </div>
        <div className='assigned-leads-grid-container'>
          <div className='assigned-leads-item1'>
            <div className='assigned-leads-item-header'>
              <div className='assigned-leads-item-content'>
                <div className='leads-tag-container'>
                  <div className='lead-number-tag'>L-2845</div>
                  <div className='category-tag'>High</div>
                </div>
                <h3 className='item-name'>Rajesh Sharma</h3>
                <p className='address'>3BHK Apartment - Bandra West</p>
              </div>
              <div className='progress-tag'>In Progress</div>
            </div>
            <div className='contact-detials-container'>
              <div className='contact-number'>
                <FiPhone className='assigned-leads-icon' /> +91 98765 43210
              </div>
              <div className='contact-number'>
                <FiMail className='assigned-leads-icon' />{' '}
                rajesh.sharma@email.com
              </div>
              <div className='contact-number'>
                <GrLocation className='assigned-leads-icon' /> Mumbai
              </div>
              <div className='contact-number'>
                <MdOutlineCalendarToday className='assigned-leads-icon' />{' '}
                Assigned: 12 Feb 2026
              </div>
            </div>
            <div className='assigned-leads-btns'>
              <button className='call-btn'>
                <FiPhone /> Call
              </button>
              <button className='view-btn'>View Details</button>
            </div>
          </div>
          <div className='assigned-leads-item1'>
            <div className='assigned-leads-item-header'>
              <div className='assigned-leads-item-content'>
                <div className='leads-tag-container'>
                  <div className='lead-number-tag'>L-2831</div>
                  <div className='medium-tag'>Medium</div>
                </div>
                <h3 className='item-name'>Priya Patel</h3>
                <p className='address'>BMW 5 Series 2023</p>
              </div>
              <div className='new-tag'>New</div>
            </div>
            <div className='contact-detials-container'>
              <div className='contact-number'>
                <FiPhone className='assigned-leads-icon' /> +91 98234 56789
              </div>
              <div className='contact-number'>
                <FiMail className='assigned-leads-icon' /> priya.patel@email.com
              </div>
              <div className='contact-number'>
                <GrLocation className='assigned-leads-icon' /> Ahmedabad
              </div>
              <div className='contact-number'>
                <MdOutlineCalendarToday className='assigned-leads-icon' />{' '}
                Assigned: 11 Feb 2026
              </div>
            </div>
            <div className='assigned-leads-btns'>
              <button className='call-btn'>
                <FiPhone /> Call
              </button>
              <button className='view-btn'>View Details</button>
            </div>
          </div>
          <div className='assigned-leads-item1'>
            <div className='assigned-leads-item-header'>
              <div className='assigned-leads-item-content'>
                <div className='leads-tag-container'>
                  <div className='lead-number-tag'>L-2819</div>
                  <div className='category-tag'>High</div>
                </div>
                <h3 className='item-name'>Amit Kumar</h3>
                <p className='address'>Villa in Whitefield</p>
              </div>
              <div className='follow-tag'>Follow-up</div>
            </div>
            <div className='contact-detials-container'>
              <div className='contact-number'>
                <FiPhone className='assigned-leads-icon' /> +91 99887 76543
              </div>
              <div className='contact-number'>
                <FiMail className='assigned-leads-icon' /> amit.kumar@email.com
              </div>
              <div className='contact-number'>
                <GrLocation className='assigned-leads-icon' /> Bangalore
              </div>
              <div className='contact-number'>
                <MdOutlineCalendarToday className='assigned-leads-icon' />{' '}
                Assigned: 10 Feb 2026
              </div>
            </div>
            <div className='assigned-leads-btns'>
              <button className='call-btn'>
                <FiPhone /> Call
              </button>
              <button className='view-btn'>View Details</button>
            </div>
          </div>
          <div className='assigned-leads-item1'>
            <div className='assigned-leads-item-header'>
              <div className='assigned-leads-item-content'>
                <div className='leads-tag-container'>
                  <div className='lead-number-tag'>L-2845</div>
                  <div className='low-tag'>Low</div>
                </div>
                <h3 className='item-name'>Sneha Reddy</h3>
                <p className='address'>Luxury Watch Collection</p>
              </div>
              <div className='progress-tag'>In Progress</div>
            </div>
            <div className='contact-detials-container'>
              <div className='contact-number'>
                <FiPhone className='assigned-leads-icon' /> +91 97654 32109
              </div>
              <div className='contact-number'>
                <FiMail className='assigned-leads-icon' /> sneha.reddy@email.com
              </div>
              <div className='contact-number'>
                <GrLocation className='assigned-leads-icon' /> Hyderabad
              </div>
              <div className='contact-number'>
                <MdOutlineCalendarToday className='assigned-leads-icon' />{' '}
                Assigned: 09 Feb 2026
              </div>
            </div>
            <div className='assigned-leads-btns'>
              <button className='call-btn'>
                <FiPhone /> Call
              </button>
              <button className='view-btn'>View Details</button>
            </div>
          </div>
        </div>
      </div>
      <div className='pending-leads-container'>
        <div className='pending-leads-header'>
          <div className='pending-leads-header-content'>
            <h2 className='pending-leads-heading'>
              <RiErrorWarningLine className='warning-icon' /> Pending Leads
            </h2>
            <p className='pending-leads-text'>
              New leads waiting to be assigned or actioned
            </p>
          </div>
          <div className='pending-tag'>3 Pending</div>
        </div>
        <div className='pending-leads-grid-container'>
          <div className='pending-leads-item'>
            <div className='pending-leads-item-header'>
              <div className='pending-leads-header-item-content'>
                <div className='lead-number-tag'>L-2897</div>
                <h3 className='item-name'>Vikram Singh</h3>
                <p className='address'>Penthouse - South Delhi</p>
              </div>
              <div className='category-tag'>Urgent</div>
            </div>
            <div className='contact-detials-container'>
              <div className='contact-number'>
                <FiPhone className='pending-leads-icon' /> +91 98123 45678
              </div>
              <div className='contact-number'>
                <GrLocation className='pending-leads-icon' /> Delhi
              </div>
              <div className='contact-number'>
                <MdOutlineCalendarToday className='pending-leads-icon' /> 14 Feb
                2026
              </div>
            </div>
            <button className='accept-btn'>
              <FaRegCircleCheck /> Accept Lead
            </button>
          </div>
          <div className='pending-leads-item'>
            <div className='pending-leads-item-header'>
              <div className='pending-leads-header-item-content'>
                <div className='lead-number-tag'>L-2889</div>
                <h3 className='item-name'>Ananya Iyer</h3>
                <p className='address'>Mercedes S-Class 2024</p>
              </div>
              <div className='category-tag'>High</div>
            </div>
            <div className='contact-detials-container'>
              <div className='contact-number'>
                <FiPhone className='pending-leads-icon' /> +91 97234 56789
              </div>
              <div className='contact-number'>
                <GrLocation className='pending-leads-icon' /> Chennai
              </div>
              <div className='contact-number'>
                <MdOutlineCalendarToday className='pending-leads-icon' /> 14 Feb
                2026
              </div>
            </div>
            <button className='accept-btn'>
              <FaRegCircleCheck /> Accept Lead
            </button>
          </div>
          <div className='pending-leads-item'>
            <div className='pending-leads-item-header'>
              <div className='pending-leads-header-item-content'>
                <div className='lead-number-tag'>L-2874</div>
                <h3 className='item-name'>Rohan Mehta</h3>
                <p className='address'>Antique Furniture Set</p>
              </div>
              <div className='medium-tag'>Medium</div>
            </div>
            <div className='contact-detials-container'>
              <div className='contact-number'>
                <FiPhone className='pending-leads-icon' /> +91 96543 21098
              </div>
              <div className='contact-number'>
                <GrLocation className='pending-leads-icon' /> Pune
              </div>
              <div className='contact-number'>
                <MdOutlineCalendarToday className='pending-leads-icon' /> 13 Feb
                2026
              </div>
            </div>
            <button className='accept-btn'>
              <FaRegCircleCheck /> Accept Lead
            </button>
          </div>
        </div>
      </div>
      <div className='employee-dashboard-footer-grid-container'>
        <div className='employee-footer-item1'>
          <p className='employee-footer-text'>Today's Follow-ups</p>
          <h2 className='employee-footer-heading'>
            12 <IoMdTime className='timer-icon' />
          </h2>
          <p className='employee-footer-tag'>5 completed • 7 pending</p>
        </div>
        <div className='employee-footer-item1'>
          <p className='employee-footer-text'>Completed This Week</p>
          <h2 className='employee-footer-heading'>
            28 <FaRegCircleCheck className='check-icon' />
          </h2>
          <p className='employee-dashboard-item-percent'>
            <TbArrowUpRight /> +15% from last week
          </p>
        </div>
        <div className='employee-footer-item2'>
          <p className='employee-footer-text'>Completed This Week</p>
          <h2 className='employee-footer-heading'>
            64 <FaRegStar className='footer-star-icon' />
          </h2>
          <p className='employee-dashboard-item-percent'>
            <TbArrowUpRight /> Above target
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
