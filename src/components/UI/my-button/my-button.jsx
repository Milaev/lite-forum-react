import classes from './my-button.module.css'

export default function MyButton({children, ...props}) {
	return (
		<button
			{...props}
			className={classes.myBtn}
		>
			{children}
		</button>
	)
}