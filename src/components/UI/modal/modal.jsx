import React from 'react'
import classes from './modal.module.css'

const Modal = ({children, visible, setVisible}) => {

	const rootClasses = [classes.myModal];
	if (visible) {
		rootClasses.push(classes.active);
	}

	return (
		<div 
			className={rootClasses.join(' ')}
			onClick={() => setVisible(false)}
		>
			<div 
				className={classes.myModal__content}
				onClick={(evt) => evt.stopPropagation()}
			>
					{children}
			</div>
		</div>
	)
}

export default Modal
