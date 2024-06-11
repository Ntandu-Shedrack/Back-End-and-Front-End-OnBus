import React, { useState, createContext, useContext } from 'react';
import { ChevronLast, ChevronFirst } from 'lucide-react';
import { MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={`sidebar ${expanded ? '' : 'collapsed'}`}>
      <nav className="nav-container">
        <div className="nav-header">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`logo ${expanded ? '' : 'hide'}`}
            alt="Logo"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="toggle-button"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="nav-list">{children}</ul>
        </SidebarContext.Provider>

        <div className="nav-footer">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="Avatar"
            className="avatar"
          />
          <div className={`user-info ${expanded ? 'show' : ''}`}>
            <div className="user-details">
              <h4 className="user-name">Janeth Doe</h4>
              <span className="user-email">janethdoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, to, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li className={`sidebar-item ${active ? 'active' : ''}`}>
      <Link to={to} className="sidebar-link">
        {icon}
        <span className={`item-text ${expanded ? '' : 'hide'}`}>{text}</span>
        {alert && <div className="alert-dot" />}
      </Link>
      {!expanded && (
        <div className="tooltip">{text}</div>
      )}
    </li>
  );
}
