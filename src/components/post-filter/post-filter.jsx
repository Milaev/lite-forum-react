import React from 'react'
import MyInput from '../UI/my-input/my-input';
import Sort from '../UI/sort/sort';

const PostFilter = ({filter, setFilter}) => {
	return (
		<div>
			<MyInput
				value={filter.query}
				onChange={(evt) => setFilter({...filter, query: evt.target.value})}
				placeholder="Поиск поста по теме"
			/>
			<Sort
				value={filter.sort}
				onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
				defaultOption="Сортировка по"
				options={[
					{ value: "title", name: "По темам" },
					{ value: "body", name: "По описанию" }
				]}
			/>
		</div>
	)
}

export default PostFilter
