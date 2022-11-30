import React, { ReactNode } from "react";
import "./Layout.scss";
import {Header, MenuPanel} from "../index";

interface ILayoutProps {
  children?: ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="Layout">
        <MenuPanel />
        <Header />
      <div className="Layout-Container">{children}</div>
    </div>
  );
};
