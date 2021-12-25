import React from 'react';
import { SpinnerInfinity } from 'spinners-react';

const BodyLoading = () => {
	return (
		<div className='body-loading'>
			<SpinnerInfinity size={150} />
		</div>
	);
};

export default BodyLoading;
