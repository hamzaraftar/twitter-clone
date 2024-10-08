"use client";
import { SessionProvider } from "next-auth/react";
const SessionWrapper = ({ children }) => {
  <SessionProvider>{children}</SessionProvider>;
};
export default SessionWrapper;
