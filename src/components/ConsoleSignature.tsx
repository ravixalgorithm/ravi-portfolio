"use client";

import { useEffect } from "react";

export const ConsoleSignature = () => {
    useEffect(() => {
        console.clear();
        const style = "background: #0a0a0a; color: #14b8a6; padding: 6px 10px; border: 1px solid #14b8a6; border-radius: 4px; font-family: monospace; font-size: 10px; font-weight: bold;";
        console.log("%c Developed by Ravi Pratap Singh | 🚀 Ready to Deploy ", style);
        console.log("%c https://github.com/ravixalgorithm ", "color: #525252; font-family: monospace; font-size: 10px; margin-top: 4px;");
    }, []);

    return null;
};
