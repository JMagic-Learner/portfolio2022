import logo from './logo.svg';
import { Typography } from '@mui/material';
import './App.css';
import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Box } from '@mui/system';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ButtonAppBar from './components/ButtonAppbar';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Bio from './pages/Bio';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

//MERN STACK IMPORTS
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  cache: new InMemoryCache(),
});
// const theme = createTheme({
//   palette: {
//     primary: {
//       light: '#fafafa',
//       main: '#ffb300',
//       dark: '#fafafa',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });


function App() {
  return (
    <ApolloProvider client={client}>
    <Box>
      <ButtonAppBar/>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home/>}> </Route>
        <Route exact path="Contact" element={<Contact/>}> </Route>
        <Route exact path="Bio" element={ <Bio />}> </Route>
        <Route exact path="Projects" element={<Projects/>}></Route>
        <Route exact path="Resume" element={<Resume/>}></Route> 
        </Routes>
        </ BrowserRouter>
      </Box>
       </ApolloProvider>

  )
}


// export default App;



// function App() {
//   return (
//     <div className="App">
       
//      <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <ButtonAppBar/>
//        <Typography> THis is a test</Typography>
//         <p>
//            Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// } 

export default App;
