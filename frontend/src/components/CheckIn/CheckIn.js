import { useState } from 'react';
import useAuth from '../../utils/useAuth';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import CheckIcon from '@material-ui/icons/Check';
import useCalendar from '../../hooks/useCalendar';
import './checkin.scss';

const CheckIn = () => {
	const { user } = useAuth();
	const [done, setDone] = useState(false);
	// TODO; logic for checking if done already
	// logic for incrementing days sober
	// logic for
	const { datesSober, setDatesSober, daysSober, setDaysSober, year, month } =
		useCalendar();

	const handleSubmit = async () => {
		setDatesSober(
			datesSober.concat(new Date(year, month, new Date().getDate()))
		);
		setDaysSober(daysSober + 1);
		const res = await fetch('http://localhost:5000/api/date', {
			method: 'POST',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-type': 'application/json',
				'x-auth-token': user,
			},
			body: JSON.stringify({
				date: new Date(year, month, new Date().getDate()),
			}),
		});

		const payload = await res.json();
		console.log('Payload: ', payload);
		setDone(true);
	};

	return (
		<div className="checkin">
			<Typography variant="h2" align="center" gutterBottom>
				Daily Check In
			</Typography>
			{done ? (
				<Typography align="center">
					<CheckIcon fontSize="large" />
				</Typography>
			) : (
				<div className="buttons flex jc-sb">
					<Button variant="contained" color="primary" onClick={handleSubmit}>
						Success
					</Button>
					<Button
						variant="contained"
						color="secondary"
						onClick={() => {
							setDone(true);
							setDaysSober(0);
						}}
					>
						Relapse
					</Button>
				</div>
			)}
		</div>
	);
};

export default CheckIn;
