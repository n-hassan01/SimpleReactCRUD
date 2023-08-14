import { AppBar, Toolbar, styled } from "@mui/material";
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

const Navbar = () => {
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
      </Toolbar>
    </Header>
  );
};

export default Navbar;
