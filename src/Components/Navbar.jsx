import { AppBar, Button, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

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
  function valueChanged() {
    window.authorized = false;
  }

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
        <LogoutButton onClick={() => valueChanged()}>Logout</LogoutButton>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
