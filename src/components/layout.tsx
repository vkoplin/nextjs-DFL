"use client";

import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}

export default Layout;
