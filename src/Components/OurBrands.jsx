import { Button, styled } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useState } from "react";
import { addBrands } from "../Services/apiService";
import BrandsCard from "./BrandsCard";

const initialValue = {
  title: "",
  description: "",
  logo: "",
  url: "",
  logoname: "",
};

const OurBrands = () => {
  const [brand, setBrand] = useState(initialValue);
  const { title, description, logo, url, logoname } = brand;
  const [file, setFile] = useState();

  const onValueChange = (e) => {
    console.log("file upload");
    console.log(e.target.value.type);
    setBrand({ ...brand, [e.target.name]: e.target.value });
    console.log("brands");
    console.log(brand);
  };

  const [open, setOpen] = React.useState(false);

  const addBrand = async () => {
    let response = await addBrands(brand);
    alert(response);
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AddButton = styled(Button)`
    background-color: rgb(0, 65, 107);
    color: white;
    padding: 10px;
    min-width: 150px;
  `;

  function changeColor(e) {
    e.target.style.color = "rgb(0, 65, 107)";
  }

  function changeBgColor(e) {
    e.target.style.color = "white";
  }

  return (
    <>
      <h1>Our Brands</h1>
      <p>
        Each of Remark’s brands are born with a purpose- to bring Greatness to
        every family & home. We are continuously pushing to make life a little
        easier for our consumers.
      </p>
      <AddButton
        onMouseEnter={changeColor}
        onMouseLeave={changeBgColor}
        onClick={handleClickOpen}
      >
        Add Brands
      </AddButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Brands</DialogTitle>
        <DialogContent>
          <TextField
            required
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            name="title"
            onChange={(e) => onValueChange(e)}
            value={title}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Description"
            fullWidth
            name="description"
            onChange={(e) => onValueChange(e)}
            value={description}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Logo"
            fullWidth
            name="logo"
            onChange={(e) => onValueChange(e)}
            value={logo}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            label="Website url"
            fullWidth
            name="url"
            onChange={(e) => onValueChange(e)}
            value={url}
            variant="standard"
          />

          <FormControl>
            <input
              name="logoname"
              type="file"
              value={logoname}
              onChange={(e) => {
                setFile(e.target.files[0]);
                onValueChange(e);
              }}
            />
            <button type="button" onClick={console.log(file)}>
              Upload
            </button>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={addBrand}>Add</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <div
        style={{
          display: "flex",
          margin: "20px",
          justifyContent: "space-around",
        }}
      >
        <BrandsCard />
        <BrandsCard />
        <BrandsCard />
        <BrandsCard />
        <BrandsCard />
      </div>
    </>
  );
};

export default OurBrands;
