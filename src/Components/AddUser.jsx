import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Services/apiService";

const initialValue = {
  name: "",
  designation: "",
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, designation } = user;
  let navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    const response = await addUser(user);
    if (response.data) {
      alert(response.data);
    } else {
      alert(response);
    }
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Add Employee</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Designation</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="designation"
          value={designation}
          id="my-input"
        />
      </FormControl>

      <FormControl>
        <Button
          variant="contained"
          style={{ backgroundColor: "#00416B" }}
          onClick={() => addUserDetails()}
        >
          Add Employee
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
