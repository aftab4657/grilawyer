import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';



export default function Step1() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <MuiPickersUtilsProvider   utils={DateFnsUtils} >
            <KeyboardDatePicker
                margin="normal"
                id="date-of-acident"
                fullWidth
                label="Date of Acident"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
        </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
            <MuiPickersUtilsProvider   utils={DateFnsUtils} >
                <KeyboardDatePicker
                margin="normal"
                id="date-of-interview"
                label="Date of Interview "
                fullWidth
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
                </MuiPickersUtilsProvider>
            </Grid>
      </Grid>

        <Grid container spacing={3}>
            <Grid item  xs={12} sm={6}>
                <TextField id="clientname" fullWidth  label="Client Name" />
            </Grid>
            <Grid item  xs={12} sm={3}>
                <TextField id="age" label="Age" fullWidth type="number" />
            </Grid>
            <Grid item  xs={12} sm={3}>
            <MuiPickersUtilsProvider   utils={DateFnsUtils} >
                <KeyboardDatePicker
                    margin="none"
                    id="date-of-birth"
                    fullWidth
                    label="Date of Birth "
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                    </MuiPickersUtilsProvider>
            </Grid>
        </Grid>

      <Grid container spacing={3}>
        <Grid item  xs={12} sm={8}>
            <TextField id="address" fullWidth label="Address" />
        </Grid>
        <Grid item  xs={12}  sm={2}>
            <TextField
            id="city"
            fullWidth
            label="City"
            />
        </Grid>
        <Grid item  xs={12} sm={2}>
            <TextField id="zip" fullWidth label="Zip" />
        </Grid>
      </Grid>

        <Grid container spacing={3}>
        <Grid item  xs={12} sm={4} style={{paddingBottom: 0}}>
        <FormControl component="fieldset">
            <FormLabel component="legend">Sex</FormLabel>
            <RadioGroup row aria-label="gender" name="gender" defaultValue="male">
                <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
            </RadioGroup>
        </FormControl>
        </Grid>
        <Grid item  xs={12}  sm={3} style={{paddingBottom: 0}}>
        <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend">Marital Status</FormLabel>
            <RadioGroup row aria-label="marital-status" name="marital_status">
                <FormControlLabel value="Single" control={<Radio color="primary" />} label="Single" />
                <FormControlLabel value="Maried" control={<Radio color="primary" />} label="Maried" />
            </RadioGroup>
        </FormControl>
        </Grid>
        <Grid item  xs={12} sm={3} style={{paddingBottom: 0}}>
        <TextField id="licenseno" fullWidth label="Driver's License No." />
        </Grid>
        <Grid item  xs={12} sm={2}>
        <TextField id="cellphone" fullWidth label="Cell Phone" />    
        </Grid>
      </Grid>

        <Grid container spacing={3}>
        <Grid item  xs={12}  sm={6}>
        <TextField id="spousename" fullWidth label="Spouse's Name " />           
        </Grid>
        <Grid item  xs={12} sm={3}>
        <TextField id="spousephone" fullWidth label="Spouse's Phone" />
        </Grid>
        <Grid item  xs={12} sm={3}>
        <TextField id="homephone" fullWidth label="Home Phone" />
        </Grid>
      </Grid>

        <Grid container spacing={3}>
        <Grid item  xs={12}  sm={3}>
        <TextField id="email" fullWidth label="Email " />           
        </Grid>
        <Grid item  xs={12} sm={3}>
        <TextField id="emergencycontact" fullWidth label="Emergency Contact" />
        </Grid>
        <Grid item  xs={12} sm={6}>
        <TextField id="fax" fullWidth label="Fax" />
        </Grid>
      </Grid>

        <Grid container spacing={3}>
        <Grid item  xs={12}  sm={12}>
        <TextField id="extraactivities" fullWidth label="Extracurricular Activities " />           
        </Grid>
      </Grid>


</>
    
  );

}
