import React from 'react';
import Card from './Card';

const CardList = ({ flashcards }) => {
	return (
		<div>
			{flashcards.length === 0 ? (
				<div className='prompt-container'>
					<h1 className='prompt-text'>Generate to start quiz</h1>
				</div>
			) : (
				<div className='card-list'>
					{' '}
					{flashcards.map((chunk) => (
						<Card
							key={chunk.id}
							question={chunk.question}
							options={chunk.options}
							answer={chunk.answer}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default CardList;
