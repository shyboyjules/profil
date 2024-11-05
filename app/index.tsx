import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './StyleSheet';
import { Text,} from 'react-native';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function Index() {
  return (
    <SafeAreaView>
  <Box sx={{ 
          bgcolor: '#EDEDED',
          height: '100%',
          paddingTop: 10,
          paddingBottom: 40,
          
            }}>

        <Box  sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
        }}>
        <Text style={styles.header}>LOGIN</Text>
        </Box>
    <Box
      component="form"
      sx={{  display: 'flex', flexDirection: 'column', alignItems: 'center', '& > :not(style)': { m: 1, width: '25ch'} }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Username" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
    </Box>
    

    <Box  sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}>
    <ButtonGroup variant="text" aria-label="Basic button group">
  <Button>Register</Button>
  <Button>Forgot Password</Button>
</ButtonGroup>
    </Box>


    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
    <Button variant="contained" color="primary">
      Login
    </Button>
    </Box>
    </Box>
    </SafeAreaView>
  );
}
