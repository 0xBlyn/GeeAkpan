import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Import the external CSS file

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false,
    };
  }

  toggleSidebar = () => {
    this.props.onClose();
  };

  handleLogoClick = () => {
    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

  render() {
    const { isOpen } = this.props;
    const { isSidebarOpen } = this.state;

    return (
      <div
        className={`sidebar-container ${isOpen ? 'open' : ''}`}
      >
        <ul>
          <li>
            rose
        </li>  
        <li>
            rose
        </li>

        <li>
            rose
        </li>
        </ul>
        
      </div>
    );
  }
}

export default Sidebar;
