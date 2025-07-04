"use client";
import { createContext, useContext, useState, ReactNode } from 'react';
import { OpenContextType } from '../../types/Hamburger.type';

const OpenContext = createContext<OpenContextType | undefined>(undefined);

export const OpenProvider = ({children}: { children: ReactNode}) => {
    const [isOpen, setOpen] = useState<boolean>(false);

    const toggleOpen = () => setOpen(prev => !prev);

    return (
        <OpenContext.Provider value={{ isOpen, setOpen, toggleOpen }}>
            {children}
        </OpenContext.Provider>
    );
};

export const useOpen = (): OpenContextType => {
    const context = useContext(OpenContext);
    if (!context){
        throw new Error(`Some error occured with OpenProvider`);
    }
    return context;
}