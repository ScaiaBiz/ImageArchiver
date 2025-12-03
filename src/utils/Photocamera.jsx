import React, { useState, useEffect } from 'react';

import classes from './Photocamera.module.css';

function Photocamera({ setImageUrl, saveUrl = null, folder, otherData }) {
	const [image, setImage] = useState(null);
	const [fileMetadata, setFileMetadata] = useState(null);

	const previewImage = e => {
		const fileInput = e.target;
		const file = fileInput.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = function (e) {
				// if (saveUrl) {
				setFileMetadata(file);
				setImage(e.target.result);
				// }
			};

			reader.readAsDataURL(file);
		}
	};

	// useEffect(() => {
	// 	if (image && fileMetadata) {
	// 		savePicture();
	// 	}
	// }, [image, fileMetadata]);

	const savePicture = async () => {
		const formData = new FormData();
		formData.append('file', fileMetadata);
		// const data = {
		// 	lastModified: fileMetadata.lastModified,
		// 	lastModifiedDate: fileMetadata.lastModifiedDate,
		// 	name: fileMetadata.name,
		// 	size: fileMetadata.size,
		// 	type: fileMetadata.type,
		// 	folder: folder,
		// };

		console.log(formData);
		console.log(fileMetadata);

		// setImageUrl(pic.url + '?' + Date.now());
	};

	return (
		<React.Fragment>
			<div className={classes.wrapper}>
				<div id='fileInputContainer'>
					<label
						className={classes.button}
						htmlFor='fileInput'
						id='customButton'
					>
						<div className='button'>Scatta</div>
					</label>
					<input
						type='file'
						accept='image/*'
						capture='camera'
						id='fileInput'
						onChange={previewImage}
						style={{ display: 'none' }}
					/>
				</div>
				<div id='fileLoadContainer'>
					<label className={classes.button} htmlFor='fileLoad' id='customLoad'>
						<div className='button'>Carica</div>
					</label>
					<input
						type='file'
						accept='image/*'
						multiple={false}
						id='fileLoad'
						onChange={previewImage}
						style={{ display: 'none' }}
					/>
				</div>
			</div>
			{image && (
				<>
					<div className={classes.preview}>
						<img src={image} alt='preview' style={{ maxWidth: '100%' }} />
					</div>
					<div className={'button'} onClick={savePicture}>
						Salva
					</div>
				</>
			)}
		</React.Fragment>
	);
}

export default Photocamera;
