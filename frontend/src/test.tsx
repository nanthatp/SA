// import React,{useState} from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import Stack from '@mui/material/Stack';


// import { EmployeeInterface } from "../interfaces/IEmployee";
// import { MemberInterface } from "../interfaces/IMember";
// import { ProductInterface } from "../interfaces/IProduct";

// import {
//     GetMembers,
//     GetProducts,
//     GetEmployees,
//     Carts,
//     Orders
//     //CreateEmployee,

//   } from "../services/HttpClientService";
  


// function App(){
//   // const telephonenumbers = () => [
//   //   { label: '0891341594',name: "Lisa Kim" },
//   //   { label: '0985547553',name: "Tom William" },
//   //   { label: '0785412335',name: "Alice Barber" },
//   //   { label: '0654252198',name: "Bieber Hiddleson" },
//   //   { label: '0980952581',name: "Jaemin Na" },
//   //   { label: '0880788739',name: "Jeno Lee" },
//   //   { label: '0985941303',name: "Doyoung Kim" },
//   //   { label: '0618479484',name: "Jaehyun Jeong" },
//   //   { label: '0618866060',name: "haechan Lee" },
//   //   { label: '0935547568',name: "Robert Avery" },
//   //   { label: '0988718935',name: "Corbyn Besson" },
//   //   { label: '0854252038',name: "Zachary Herron" },
//   //   { label: '0659758198',name: "Troye Mellet" },
//   //   { label: '0820965594',name: "Taylor Swift" },
 
//   // ];
//   const options = ['member 1', 'member 2'];
//   const [value, setValue] = React.useState<string | null>(options[0]);
//   const [inputValue, setInputValue] = React.useState('');

//   const optionproducts = ['Product 1', 'Product 2'];
//   const [valueproduct, setValueproduct] = React.useState<string | null>(optionproducts[0]);
//   const [inputValueproduct, setInputValueproduct] = React.useState('');

//   const [quantity, setquantity] = useState<number>(0);
//   const [quan, setquan] = useState<number>(0);
  
  
//   return(
//     <div>
//       <Box sx={{ flexGrow: 1 }}> 
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Farm Mart System
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//       </Box> 
//     <Container maxWidth="sm">
//       <Paper>
//         <Box
//           display={"flex"}
//           sx={{
//               marginTop:2,
//               paddingX:2
//           }}
//         >
//           <h2>Shopping Cart</h2>
//         </Box>

//         <hr/>

//         <Grid container spacing={2}>
//         <Grid item xs={12}>
//         <Autocomplete
//           value={value}
//           onChange={(event: any, newValue: string | null) => {
//             setValue(newValue);
//           }}
//           inputValue={inputValue}
//           onInputChange={(event, newInputValue) => {
//             setInputValue(newInputValue);
//           }}
//           id="controllable-states-demo"
//           options={options}
//           sx={{ width: 300,
//                 marginTop:2, //ข้างนอก
//                 paddingX:15, //ข้างใน
//                 paddingY:2,
//           }}
//           renderInput={(params) => <TextField {...params} label="Telephone number" />}
//         />
//         </Grid>
//         <Grid item xs={6}>
//         <Autocomplete
//           value={valueproduct}
//           onChange={(event: any, newValue: string | null) => {
//             setValueproduct(newValue);
//           }}
//           inputValue={inputValueproduct}
//           onInputChange={(event, newInputValue) => {
//             setInputValueproduct(newInputValue);
//           }}
//           id="controllable-states-demo"
//           options={optionproducts}
//           sx={{width: 170,
//               paddingX:9,
//               marginX:2, 
//           }}
//           renderInput={(params) => <TextField {...params} label="Product" />}
//         />  
//         </Grid>
//         <Grid item xs={6}>
//         <TextField
//           id="quantity"
//           label="Quantity"
//           type="number"
//           InputProps={{inputProps:{min:1}}}
//           sx={{width: 170,
//           }}
//         />
//         </Grid>
//         <Grid item xs={12}>
//         <TextField
//           id="quantity"
//           label="Quantity"
//           type="number"
//           InputProps={{inputProps:{min:1}}}
//           sx={{width: 170,
//           }}
//         />
//         </Grid>
//         <Grid item xs={12}>
//           <Button variant="contained">Back</Button>
//           <Button variant="contained" sx={{float: 'right'}}>Check out</Button>
//         </Grid>
        
//       </Grid>

//       </Paper>

//     </Container>
//     </div>
   
//   );
  
// }

// export default App;

