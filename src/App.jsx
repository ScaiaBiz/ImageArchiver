import { useState } from 'react';
import './App.css';

import Photocamera from './utils/Photocamera';

function App() {
	const [imageUrl, setImageUrl] = useState(null);

	return (
		<div className='App'>
			<h1>Archivia immagini</h1>
			<Photocamera setImageUrl={setImageUrl} />
		</div>
	);
}

export default App;
