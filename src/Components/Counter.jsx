import React, { useState } from 'react'

const Counter = () => {
	let [Count, SetCount] = useState(0)

	const Increment = () => {
		SetCount(count => count + 1)
	}

	const Decrement = () => {
		SetCount(count => count - 1)
	}

	return (
		<div style={{ textAlign: 'center' }}>
			<h3>Counter App</h3>
			<div>
				<button onClick={Increment}>+</button>
				<span> {Count} </span>
				<button onClick={Decrement}>-</button>
			</div>
		</div>
	)
}

export default Counter
