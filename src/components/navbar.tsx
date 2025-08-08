import { Button, Menu } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {

    const navigate = useNavigate();

    return (
    <Menu fixed="top" size="huge">
      <Menu.Item as={Link} to="/" style={{ fontSize: "1.5rem" }}>
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/vinyls" style={{ fontSize: "1.5rem" }}>
        Vinyls
      </Menu.Item>
    </Menu>
    )
}