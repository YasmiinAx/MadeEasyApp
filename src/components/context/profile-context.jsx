import React, { createContext, useState, useContext } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    {/* Profile State */}
    const [profile, setProfile] = useState({
        name: "Yasmiin Abdullahi",
        email: "yasmiina@example.com",
        phone: "123-456-7890",
    });
    
    {/* Update Profile Function */}
    const updateProfile = (newProfile) => {
        setProfile((prev) => ({ ...prev, ...newProfile }));
    };
    
    return (
        <ProfileContext.Provider value={{ profile, updateProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};

{/* Custom Hook To Access Profile Context  */}
export const useProfile = () => useContext(ProfileContext);
