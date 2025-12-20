"use client";

import React, { useState } from "react";
// import { usePasskeyAuth } from "@lazorkit/wallet"; // enable once Lazorkit exposes it

export const PasskeyLoginButton = () => {
  const [status, setStatus] = useState("idle");

  const handlePasskeyLogin = async () => {
    setStatus("authenticating");

    try {
      // await passkeyLogin();
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <button
      onClick={handlePasskeyLogin}
      disabled={status === "authenticating"}
      style={{
        padding: "12px 24px",
        background: "#6366f1",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "1rem",
        cursor: "pointer",
        fontWeight: "bold",
        marginTop: "1rem",
      }}
    >
      {status === "authenticating" ? "Authenticating..." : "Login with Passkey"}
    </button>
  );
};