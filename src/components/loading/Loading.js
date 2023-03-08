import React from 'react';
import { useEffect } from 'react';

import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {

	useEffect(() => {
		return ()=> {
			console.log('La lista ya se cargo');
		};
	});

	return (
		<div className='spinnerContainer' >
			<Spinner className='spinner' animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>

		</div>
	);
}

export default Loading;