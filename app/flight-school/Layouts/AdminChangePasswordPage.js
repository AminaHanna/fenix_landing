import { toast } from "keep-react";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

import './AdminChangePasswordPage.css'; // Import the CSS file for animations
import { SERVER_URL, studentOptions } from "../../../api/baseUrl";
import { usePost } from "../../../admin/custom-hooks/custom-post";
import { adminResetToken, setLocalStorage, studentResetToken } from "../../../api/localStorage";

function AdminChangePasswordPage() {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [loader, setLoader] = useState(false);
  const [option, setOption] = useState(null); // Control which option is selected

  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Toggle for new password visibility
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false); // Toggle for confirm new password visibility

  const { data:responseForForgotPassword,postData: forgotPassword } = usePost(`${SERVER_URL}/student/get-otp/`, studentOptions);
  const { postData: knowPassword,error:knowPasswordError } = usePost(`${SERVER_URL}/student/change-password/`, studentOptions);

  const handleSaveClick = async () => {
    try {
      if (!newPassword) return toast.error('New password is required');
      if (!confirmNewPassword) return toast.error('Confirm new password is required');
      if (newPassword.length < 8) return toast.error('Passwords must be at least 8 characters long');
      if (newPassword !== confirmNewPassword) return toast.error('Passwords do not match');
      if (option === 'know' && !oldPassword) return toast.error('Old password is required');

      setLoader(true);
      const data = {
        oldPassword: option === 'know' ? oldPassword : undefined,
        newPassword,
        option
      };

      if (option === 'know') {
        await knowPassword(data); // Send data to the server
        toast.success("Password changed successfully!");
        setNewPassword('');
        setConfirmNewPassword('');
        setOldPassword('');
        setOption(null);
        // console.log('first')
      } else if (option === 'forgot') {
        // console.log('first')
        await forgotPassword(data); // Send data to the server
        toast.success('Mail sended to the connected mail ');
      }


    } catch (error) {
      toast.error(error?.response?.data?.message || error?.message || "Failed to change password");
    } finally {
      setLoader(false);
    }
  };

  useEffect(()=>{

    if(responseForForgotPassword){
        setLocalStorage(studentResetToken,responseForForgotPassword.token);
        navigate('/student/otp-verification',{state:{status:true}});

    }
  },[responseForForgotPassword]);

  const handlePaste = (e) => {
    e.preventDefault(); // Prevent paste
    toast.error('Copy-paste is not allowed for passwords.');
  };

  return (
    <>
      <div className="flex font-fritz-regular mb-4 gap-2 text-sm text-[#a8a5a6]">
        <button onClick={() => navigate('/admin/settings')} className="mb-2 capitalize">Settings</button>
      </div>

      <div className="flex flex-col max-w-[400px] w-full gap-4 mb-6">
        <div
          onClick={() => setOption('know')}
          className={`flex my-3 justify-between items-center cursor-default bg-[#29221d] h-16 text-base rounded-lg px-6 transition-all duration-300 ease-in-out ${option === 'know' ? 'border border-[#D79B2A]' : ''}`}
        >
          <label>Know Old Password</label>
          <label className="text-xl cursor-pointer">&rarr;</label>
        </div>
        <div
          onClick={() => setOption('forgot')}
          className={`flex my-3 justify-between items-center cursor-default bg-[#29221d] h-16 text-base rounded-lg px-6 transition-all duration-300 ease-in-out ${option === 'forgot' ? 'border border-[#D79B2A]' : ''}`}
        >
          <label>Forgot Old Password</label>
          <label className="text-xl cursor-pointer">&rarr;</label>
        </div>
      </div>

      <div className="bg-[#29221d] max-w-[400px] w-full rounded-[12px] p-[24px]">
        <div className="gap-3 mt-4 flex flex-col">
          <CSSTransition in={option === 'know'} timeout={300} classNames="fade" unmountOnExit>
            <input
              value={oldPassword}
              type={isPasswordVisible ? 'text' : 'password'}
              onChange={(e) => setOldPassword(e.target.value)}
              onPaste={handlePaste}
              className="p-[10px] focus:outline-none focus-within:border-[#D79B2A] cursor-text mb-[15px] border-[#ccc] border bg-[#453f3aa3] rounded-[8px] text-white"
              placeholder="Old Password"
            />
          </CSSTransition>

          <div className="relative">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              onPaste={handlePaste}
              className="p-[10px] focus:outline-none focus-within:border-[#D79B2A] cursor-text mb-[15px] border-[#ccc] border bg-[#453f3aa3] rounded-[8px] text-white w-full"
              placeholder="New Password"
            />
            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="absolute right-4 top-6 transform -translate-y-1/2 text-white"
            >
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="relative">
            <input
              value={confirmNewPassword}
              type={isConfirmPasswordVisible ? 'text' : 'password'}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              onPaste={handlePaste}
              className="p-[10px] focus:outline-none focus-within:border-[#D79B2A] cursor-text mb-[15px] border-[#ccc] border bg-[#453f3aa3] rounded-[8px] text-white w-full"
              placeholder="Confirm New Password"
            />
            <button
              type="button"
              onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
              className="absolute right-4  top-6     transform -translate-y-1/2 text-white"
            >
              {isConfirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            onClick={handleSaveClick}
            disabled={loader}
            className="px-4 py-2 bg-[#D79B2A] rounded text-white"
          >
            {loader ? 'Uploading...' : 'Save'}
          </button>
        </div>
      </div>
    </>
  );
}

export default AdminChangePasswordPage;
