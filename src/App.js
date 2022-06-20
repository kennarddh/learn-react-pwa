import React from 'react'

import Counter from 'Components/Counter'

const App = () => {
	const SendNotification = () => {
		Notification.requestPermission().then(result => {
			if (result === 'granted') {
				new Notification('Hello!', { body: 'Hello world!' })
			}
		})
	}

	return (
		<>
			<button onClick={SendNotification}>Send Notification</button>
			<Counter />
		</>
	)
}

export default App
