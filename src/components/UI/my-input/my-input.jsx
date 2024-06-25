import React from 'react'
import classes from './my-input.module.css'

export default function MyInput(props) {
	return (
		<input
			className={classes.myInput}
			{...props}
		/>
	)
}