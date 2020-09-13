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
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';



export default function Step2() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [duration, setPer] = React.useState('');

  const handleChange = (event) => {
      setPer(event.target.value);
  };
  return (
    <>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
        <TextField id="employer" fullWidth  label="Employer" />
            </Grid>
            <Grid item xs={12} sm={3}>
            <MuiPickersUtilsProvider   utils={DateFnsUtils} >
                <KeyboardDatePicker
                 margin="none"
                id="how-long"
                label="How long? "
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
            <Grid item  xs={12} sm={2}>
                <TextField id="position" fullWidth  label="Position" />
                </Grid>
                <Grid item  xs={12} sm={2}>
                <TextField id="salary" type="number" fullWidth  label="Salary" />
            </Grid>
            <Grid item  xs={12} sm={2}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Per</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={duration}
                onChange={handleChange}
                >
                <MenuItem value={'Month'}>Month</MenuItem>
                <MenuItem value={'Year'}>Year</MenuItem>
                </Select>
            </FormControl>
            </Grid>
      </Grid>

        <Grid container spacing={3}>
            <Grid item  xs={12} sm={4}>
                <TextField id="supervisor" fullWidth  label="Supervisor" />
            </Grid>
            <Grid item  xs={12} sm={4}>
                <TextField id="offwork"  fullWidth label="Off work? " />
            </Grid>
            <Grid item  xs={12} sm={4}>
            <MuiPickersUtilsProvider   utils={DateFnsUtils} >
                <KeyboardDatePicker
                    margin="none"
                    id="how-long-supervisor"
                    fullWidth
                    label=" How long?  "
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
            <TextField id="address-employment" fullWidth label="Address" />
        </Grid>
        <Grid item  xs={12}  sm={2}>
            <TextField
            id="city-employment"
            fullWidth
            label="City"
            />
        </Grid>
        <Grid item  xs={12} sm={2}>
            <TextField id="zip-employment" fullWidth label="Zip" />
        </Grid>
      </Grid>

        <Grid container spacing={3}>
        <Grid item  xs={12}  sm={5}>
        <TextField id="phoneno-employment" fullWidth label="Phone No." />           
        </Grid>
        <Grid item  xs={12} sm={2}>
        <TextField id="ext" fullWidth label="Ext." />
        </Grid>
        <Grid item  xs={12} sm={5}>
        <TextField id="socialsecurityno" fullWidth label="Social Security No." />
        </Grid>
      </Grid>





</>
    
  );

}
