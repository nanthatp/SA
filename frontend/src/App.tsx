// import React,{useState} from 'react';
// import { Link as RouterLink } from "react-router-dom";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import MuiAlert, { AlertProps } from "@mui/material/Alert";
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';
// import { MemberInterface } from './interfaces/IMember';
// import useAutocomplete from '@mui/material/useAutocomplete';

// import {
//   GetEmployees,
//   GetMembers,
//   GetCarts,
//   GetOrders,
//   GetProducts,
//   //GetPlaylistByUID,
//   CreateEmployee,
//   Carts,
//   Orders,
// } from "../services/HttpClientService";

// const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
//   props,
//   ref
// ) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// function MemberCreate() {
//   // const [employees, setEmployees] = useState<EmployeesInterface[]>([]);
//   // const [genders, setGenders] = useState<GendersInterface[]>([]);
//   // const [provinces, setProvinces] = useState<ProvinceInterface[]>([]);
//   const [member, setMember] = useState<MemberInterface[]>([]);
  

// function App(){
//     return(
//     <div>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               Farm Mart System
//             </Typography>
//             <Button color="inherit">Login</Button>
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <Container maxWidth="md">
//         {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
//         <Paper>
//           <Box
//             display={"flex"}
//             sx={{
//               marginTop:2,
//               paddingX:2
//             }}
//           >
//             <h2>
//               Shopping Cart
//             </h2>
//           </Box>
//           <hr/>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <Autocomplete
//               disablePortal
//               id="combo-box-demo"
//               options={{member.map((item: MemberInterface) => (
//                 <option value={item.ID} key= {item.ID}> {item.Telephone}
//                 </option>
//               ))}}
//               sx={{ width: 300 }}
//               renderInput={(params) => <TextField {...params} label="Movie" />}
//               />
//             </Grid>
//             <Grid item xs={6}>
          
//             </Grid>
//             <Grid item xs={6}>
          
//             </Grid>
//             <Grid item xs={8}>
          
//             </Grid>
//             <Grid item xs={12}>
             
//             </Grid>
//           </Grid>
//         </Paper>
//       </Container>
//     </div>
//     );

// }
// export default App;