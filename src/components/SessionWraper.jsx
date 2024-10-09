"use client";
import SessionProvider from "next-auth";
const SessionWrapper = ({ children }) => {
  <SessionProvider>{children}</SessionProvider>;
};
export default SessionWrapper;
