import React,{useEffect, useState} from 'react';
import { Link as RouterLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import useAutocomplete from '@mui/material/useAutocomplete';
import Divider from "@mui/material/Divider";
import Snackbar from "@mui/material/Snackbar";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';


import { EmployeeInterface } from "../interfaces/IEmployee";
import { MemberInterface } from "../interfaces/IMember";
import { ProductInterface } from "../interfaces/IProduct";
import { CartInterface } from "../interfaces/ICart";
import { OrderInterface } from "../interfaces/IOrder";

import {
  GetEmployees,
  GetMembers,
  GetProducts,
  GetCarts,
  Carts,
  Orders,
  
} from "../services/HttpClientService";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CartCreate() {
  const [members, setMembers] = useState<MemberInterface[]>([]);
  const [employees, setEmployees] = useState<EmployeeInterface>();
  const [product, setProduct] = useState<ProductInterface[]>([]);
  const [cart, setCart] = useState<CartInterface>();
  const [order, setOrder] = useState<OrderInterface>();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<{ id?: string; value: any }>
  ) => {
    const id = event.target.id as keyof typeof CartCreate;
    const { value } = event.target;
    setCart({ ...cart, [id]: value });
  };
  
  // const [ordersInBasket, setOrdersInBasket] = React.useState(ORDERS.slice(0, 3));

  // const handleAddOrder = () => {
  //   const nextHiddenItem = order.find((i) => !orderInBasket.includes(i));
  //   if (nextHiddenItem) {
  //     setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
  //   }
  // };

  



  
  
  // const handleClose = (
  //   event?: React.SyntheticEvent | Event,
  //   reason?: string
  // ) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setSuccess(false);
  //   setError(false);
  // };
  
  // const handleChange = (event: SelectChangeEvent) => {
  //   const name = event.target.name as keyof typeof product;
  //   setProduct({
  //     ...product,
  //     [name]: event.target.value,
  //   });
  // };




const getProducts = async () => {
  let res = await GetProducts();
  if (res) {
    setProduct(res);
  }
};

const GetEmployee = async () => {
  let res = await GetEmployees();
  if (res) {
    setEmployees(res);
  }
};

const getMembers = async () => {
  let res = await GetMembers();
  if (res) {
    setMembers(res);
  }
};

const getCarts = async () => {
  let res = await GetCarts();
  if (res) {
    setCart(res);
  }
};

useEffect(() => {
  getMembers();
  getProducts();
  GetEmployees();
  getCarts();
}, []);

const convertType = (data: string | number | undefined) => {
  let val = typeof data === "string" ? parseInt(data) : data;
  return val;
};



async function submit() {
  let data = {
    Telephone: cart?.Telephone??  "",
    ProductID: convertType(order?.ProductID),
    Quantity: typeof order?.Quantity === "string" ? parseInt(order?.Quantity) : 0,
  };

  let res = await Carts(data);
  if (res) {
    setSuccess(true);
  } else {
    setError(true);
  }
}

interface RenderItemOptions {
  item: string;
  handleRemoveFruit: (item: string) => void;
}


function App(){
    return(
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Farm Mart System
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="md">
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <Paper>
          <Box
            display={"flex"}
            sx={{
              marginTop:2,
              paddingX:2
            }}
          >
            <h2>
              Shopping Cart
            </h2>
          </Box>
          <hr/>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Autocomplete
                disablePortal
                id="telephon"
                options={{members.map((item: MemberInterface) => (
                  <option value={item.ID} key= {item.ID}> {item.Telephone}
                  </option>
                ))}}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="member" />}
              />
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                disablePortal
                id="telephon"
                options={{product.map((item: ProductInterface) => (
                  <option value={item.ID} key= {item.ID}> {item.Telephone}
                  </option>
                ))}}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Product" />}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <p>Quantity</p>
                <TextField
                  id="Quantity"
                  variant="outlined"
                  type="number"
                  size="medium"
                  placeholder="Please select a product price."
                  value={order?.Quantity || ""}
                  onChange={handleInputChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              {/* <Button
                variant="contained"
                disabled={fruitsInBasket.length >= FRUITS.length}
                onClick={handleAddFruit}
              >
                Add Order
              </Button>
              <TransitionGroup>
                {fruitsInBasket.map((item) => (
                  <Collapse key={item}>
                    {renderItem({ item, handleRemoveFruit })}
                  </Collapse>
                ))}
              </TransitionGroup> */}
            </Grid>
            <Grid item xs={12}>
            <p>Employee</p>
              <FormControl fullWidth variant="outlined">
                <TextField
                  id="EmployeeID"
                  variant="outlined"
                  type="number"
                  size="medium"
                  placeholder="Please select a Employee."
                  value={cart?.EmployeeID || ""}
                  onChange={handleInputChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                style={{ float: "right" }}
                onClick={submit}
                variant="contained"
                color="primary"
              >
                Check out
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
    );

}
export default CartCreate;
}
