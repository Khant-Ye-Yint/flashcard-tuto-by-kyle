import React, { useState, useRef, useEffect } from 'react';

const Card = ({ question, options, answer }) => {
	const [flip, setFlip] = useState(false);
	const [height, setHeight] = useState('initial');
	const frontEl = useRef();
	const backEl = useRef();

	const setMaxHeight = () => {
		const frontHeight = frontEl.current.getBoundingClientRect().height;
		const backHeight = backEl.current.getBoundingClientRect().height;
		setHeight(Math.max(frontHeight, backHeight, 100));
	};

	useEffect(() => {
		setMaxHeight();
	}, [question, options, answer]);

	useEffect(() => {
		window.addEventListener('resize', setMaxHeight);
		return () => window.removeEventListener('resize');
	}, []);

	return (
		<div
			className={`card ${flip ? 'flip' : ''}`}
			onClick={() => setFlip(!flip)}
			style={{
				height: height,
			}}
		>
			<div className='front' ref={frontEl}>
				<div
					className='question'
					// style={{
					// 	fontWeight: 'semi-bold',
					// 	fontSize: '1.25rem',
					// }}
				>
					{question}
				</div>
				<div className='card-options'>
					{options.map((option) => (
						<span className='card-option' key={option}>
							{option}
						</span>
					))}
				</div>
			</div>
			<div className='back' ref={backEl}>
				{answer}
			</div>
		</div>
	);
};

export default Card;
