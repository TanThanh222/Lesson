import { Input } from "antd";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="frame-home">
        <div className="navbar">
          <div className="logo">Anonime</div>

          <div className="menu">
            <div className="menu-item">Home</div>
            <div className="menu-item">List anime</div>
          </div>

          <div className="search-wrapper">
            <Input
              placeholder="Search anime or movie"
            />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  background: #192026;
  color: #ffffff;
  padding: 15px 0 0 0;

  .navbar {
    display: flex;
    align-items: center;
    height: 48px;
    justify-content: space-between;
  }

  .logo {
    font-weight: 700;   
    font-size: 36px;   
    line-height: 32px;
    letter-spacing: 0.07em;
  }

  .menu {
    display: flex;
    gap: 141px; 
  }

  .menu-item {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #868686;    
    cursor: pointer;
    transition: 0.2s;
  }

  .menu-item:hover {
    color: #ffffff;
  }

  .search-wrapper {
    background: #374151;
    border-radius: 37px;
    padding: 8px 100px 8px 18px;
    display: flex;
    align-items: center;
    width: 374px;   
  }

  .ant-input,
  .ant-input-search .ant-input {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    color: #ffffff;
    font-size: 14px;
  }

  .ant-input::placeholder {
    color: #9ca3af;
  }
`;
