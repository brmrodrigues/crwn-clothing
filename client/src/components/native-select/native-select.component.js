import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 170,
	},
}));

const NativeSelects = ({ }) => {
	const classes = useStyles();
	const [state, setState] = useState({
		status: 'Preparando',
	});

	const inputLabel = useRef(null);
	const [labelWidth, setLabelWidth] = useState(0);
	useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth);
	}, []);

	const handleChange = name => event => {
		setState({
			...state,
			[name]: event.target.value,
		});
	};

	return (
		<div className={classes.root}>
			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
					Status
        </InputLabel>
				<Select
					native
					value={state.status}
					onChange={handleChange('status')}
					labelWidth={labelWidth}
					inputProps={{
						name: 'status',
						id: 'outlined-age-native-simple',
					}}
				>
					<option value={1}>Preparando</option>
					<option value={2}>Saiu para entrega</option>
					<option value={3}>Entregue</option>
				</Select>
			</FormControl>
		</div>
	);
}

export default NativeSelects;
