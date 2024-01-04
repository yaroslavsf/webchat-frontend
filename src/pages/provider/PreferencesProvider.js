import { createContext, useContext, useState } from 'react';

const PreferencesContext = createContext();

export const PreferencesProvider = ({ children }) => {
    const [userPreferences, setUserPreferences] = useState({});

    const updatePreferences = (newPreferences) => {
        setUserPreferences((prevPreferences) => ({
            ...prevPreferences,
            ...newPreferences,
        }));
    };

    return (
        <PreferencesContext.Provider value={{ userPreferences, updatePreferences }}>
            {children}
        </PreferencesContext.Provider>
    );
};

export const usePreferences = () => {
    return useContext(PreferencesContext);
};
