import React from 'react';
import { SpinnerInfinity } from 'spinners-react';

const Loading = () => {
	return (
		<div className='loading'>
			<SpinnerInfinity size={150} />
		</div>
	);
};

export default Loading;
