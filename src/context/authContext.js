import React from "react";

export const AuthContext = React.createContext({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});

AuthContext.displayName = AuthContext;
