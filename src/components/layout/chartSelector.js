import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 320,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ChartSelector () {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

//   const inputLabel = useRef(null);
    // const handleChange = selectedOption => {
    //     this.setState({ selectedOption });
    //     console.log("Option selected: ", selectedOption);
    // };
    return (
        <FormControl className={classes.formControl}>
        <InputLabel  id="demo-simple-select-label">
          Select a dashboard
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
        //   onChange={handleChange}
        >
          <MenuItem value={10}>Dashboard #1</MenuItem>
          <MenuItem value={20}>Dashboard #2</MenuItem>
          <MenuItem value={30}>Dashboard #3</MenuItem>
        </Select>
      </FormControl>
            )
}