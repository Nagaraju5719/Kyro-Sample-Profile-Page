import React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import axios from "axios";
import { API_URL } from "./Constants/Constants";
import { useNavigate } from "react-router-dom";

function List() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(API_URL);
    setData(response.data);
    setKeys(Object.keys(response.data[0]));
  };

  const deleteUser = (id) => {
    axios.delete(`${API_URL}/${+id}`);
    setTimeout(() => {
      fetchData();
    }, 500);
  };

  const editUser = (id) => {
    const userData = data.find((item) => item.id === id);
    navigate("/", {
      state: { userId: id, isUpdateMode: true, singleUser: userData },
    });
  };

  return (
    <>
      <TableContainer sx={{ mb: "30px",padding:"20px" }} component={Paper}>
        <Table
          sx={{ minWidth: "100%" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead sx={{backgroundColor:"#414142",}}>
            <TableRow>
              {keys.map((head) => (
                <TableCell
                  sx={{ fontWeight: "bold",color:"white",fontSize:"16px",textTransform:"uppercase" }}
                  key={head}
                  align="center"
                >
                  {head}
                </TableCell>
              ))}
              <TableCell  sx={{ fontWeight: "bold",color:"white" }} align="center">
                UPDATE
              </TableCell>
              <TableCell sx={{ fontWeight: "bold",color:"white" }} align="center">
                DELETE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                {keys.map((value) => (
                  <TableCell key={value} align="center">
                    {row[value]}
                  </TableCell>
                ))}
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => editUser(row.id)}
                  >
                    UPDATE
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteUser(row.id)}
                  >
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          navigate("/");
        }}
      >
        Back To Home
      </Button>
    </>
  );
}

export default List;
