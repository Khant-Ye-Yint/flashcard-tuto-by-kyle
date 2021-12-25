import React, { useState } from 'react';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import BodyLoading from './components/Loading/BodyLoading';

const App = () => {
	const [flashcards, setFlashcards] = useState([]);
	const [headerLoading, setHeaderLoading] = useState(true);
	const [loading, setLoading] = useState(false);

	return (
		<div>
			{headerLoading && <Loading />}
			<div className='container'>
				<Header
					setFlashcards={setFlashcards}
					setLoading={setLoading}
					setHeaderLoading={setHeaderLoading}
				/>{' '}
				{loading ? (
					<BodyLoading />
				) : (
					<CardList flashcards={flashcards} loading={loading} />
				)}
			</div>
		</div>
	);
};

export default App;
