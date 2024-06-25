import classes from './sort.module.css'

export default function Sort({ options, defaultOption, value, onChange }) {
	return (
		<select
			className={classes.mySort}
			value={value}
			onChange={(evt) => {onChange(evt.target.value)}}
		>
			<option disabled value="">{defaultOption}</option>
			{options.map((option) => {
				return (
					<option key={option.value} value={option.value}>
						{option.name}
					</option>
				)
			})}
		</select>
	)
}