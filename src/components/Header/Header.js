import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Header = ({ setFlashcards, setLoading, setHeaderLoading }) => {
	const [categories, setCategories] = useState([]);

	const categoryEl = useRef();
	const amountEl = useRef();

	useEffect(() => {
		axios.get('https://opentdb.com/api_category.php').then((res) => {
			setCategories(res.data.trivia_categories);
		});
		setHeaderLoading(false);
	}, []);

	const decodeString = (str) => {
		const textArea = document.createElement('textarea');
		textArea.innerHTML = str;
		return textArea.value;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		axios
			.get('https://opentdb.com/api.php?amount=10', {
				params: {
					amount: amountEl.current.value,
					category: categoryEl.current.value,
				},
			})
			.then((res) => {
				setFlashcards(
					res.data.results.map((questionItem, index) => {
						const answer = decodeString(questionItem.correct_answer);
						const options = [
							...questionItem.incorrect_answers.map((ans) => decodeString(ans)),
							answer,
						];
						return {
							id: `${index}-${Date.now()}`,
							question: decodeString(questionItem.question),
							answer: answer,
							options: options.sort(() => Math.random() - 0.5),
						};
					})
				);
				setLoading(false);
			});
	};

	return (
		<form className='header' onSubmit={handleSubmit}>
			<div className='input-container'>
				<div className='form-group'>
					<label htmlFor='category'>Category</label>
					<select id='category' ref={categoryEl}>
						{categories.map((category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</select>
				</div>
				<div className='form-group'>
					<label htmlFor='amount'>Number Of Questions</label>
					<input
						type='number'
						id='amount'
						defaultValue={10}
						step='1'
						min='1'
						ref={amountEl}
					/>
				</div>
			</div>
			<div className='form-group'>
				<button className='button'>Generate</button>
			</div>
		</form>
	);
};

export default Header;
