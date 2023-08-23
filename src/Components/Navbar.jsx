import { AppBar, Button, Toolbar, styled } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

const Header = styled(AppBar)`
  background: #d71921;
`;

const Tabs = styled(NavLink)`
  color: white;
  margin-right: 20px;
  text-decoration: none;
  font-size: 20px;
`;

const LogoutButton = styled(Button)`
  position: absolute;
  right: 20px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgb(0, 65, 107);
  color: white;
`;

const Navbar = () => {
  let navigate = useNavigate();
  function valueChanged() {
    window.authorized = false;
    navigate("/");
  }
  const authButtonDisplay = window.authorized ? "block" : "none";

  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="./" exact>
          REMARK HB
        </Tabs>
        <Tabs to="all" exact>
          All Employees
        </Tabs>
        <Tabs to="add" exact>
          Add Employee
        </Tabs>
        <LogoutButton
          style={{ display: authButtonDisplay }}
          onClick={() => valueChanged()}
        >
          logout
        </LogoutButton>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
