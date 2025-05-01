import React, { useState, useRef, useEffect } from 'react';
import '../Styles/Logoutdropdown.css'; // Import CSS file
import dummyProfile from "../assets/images/dummy-profile-picture.svg"

function LogoutDropdown () {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    const handleLogout = () => {
        // Implement your logout logic here (e.g., clear session, redirect)
        console.log('Logging out...');
        // For demonstration purposes, we'll just close the dropdown
        setIsOpen(false);
    };

    return (
        <React.Fragment>
            <img className="profile" src={dummyProfile} alt='User Profile'></img>
            <div ref={dropdownRef} className="relative inline-block">
                <div  onClick={() => setIsOpen(!isOpen)}>
                    <button className="custom-ghost-button">
                        {/* You can replace this with your user avatar or icon */}
                        Username
                    </button>
                    <div className="custom-dropdown-content" style={{ display: isOpen ? 'block' : 'none' }}>
                        <div
                            onClick={handleLogout}
                            className="custom-dropdown-item"
                        >
                            Logout
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default LogoutDropdown;

