import { Button, styled } from "@mui/material";

const Remark = () => {
  const RegButton = styled(Button)`
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
      <h1>Welcome to Remark HB Limited</h1>
      <RegButton onMouseEnter={changeColor} onMouseLeave={changeBgColor}>
        Register here
      </RegButton>
    </>
  );
};

export default Remark;
