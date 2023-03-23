// Importing necessary dependencies
import React, { useState } from "react";
import ReactQuill from "react-quill"; // Importing a text editor package
import "react-quill/dist/quill.snow.css"; //Importing the CSS file for the text editor theme

// Creating a component named "Write"
const Write = () => {
	// Using the `useState` hook to declare a state variable 'value' and initialize it with empty value ""
	const [value, setValue] = useState("");

	// Rendering the JSX
	return (
		<div className="write-add">
			<div className="content">
				{/* Creating an input field for Title */}
				<input type="text" name="" id="" placeholder="Title" />
				{/* Creating the Quill Text Editor container */}
				<div className="editorContainer">
					{/* Using the imported 'ReactQuill' component and setting its props */}
					<ReactQuill
						className="editor"
						theme="snow"
						value={value}
						onChange={setValue}
					/>
				</div>
			</div>

			{/* Creating the menu section */}
			<div className="menu">
				{/* NOTE: Item One */}
				<div className="item">
					<h1>Publish</h1>
					{/* Displaying the Status of the blog post */}
					<span>
						<b>Status: </b> Draft
					</span>
					{/* Displaying the Visibility of the blog post */}
					<span>
						<b>Visibility: </b> Public
					</span>
					{/* Creating a hidden input field to upload image and a label referencing that input */}
					<input
						style={{ display: "none" }}
						type="file"
						name="file"
						id="file"
					/>
					<label className="file" htmlFor="file">
						Upload Image
					</label>
					{/* Creating some buttons to Save or Update the blog post*/}
					<div className="buttons">
						<button>Save as a draft</button>
						<button>Update</button>
					</div>
				</div>

				{/* Instead of the button, we can use this space for more content */}
				{/* NOTE: Item Two */}
				<div className="item">
					<h1>Category</h1>
					<div className="cat">
						<input type="radio" name="cat" value="art" id="art" />
						<label htmlFor="art">Art</label>
					</div>

					<div className="cat">
						<input type="radio" name="cat" value="science" id="science" />
						<label htmlFor="science">Science</label>
					</div>

					<div className="cat">
						<input type="radio" name="cat" value="technology" id="technology" />
						<label htmlFor="technology">Technology</label>
					</div>

					<div className="cat">
						<input type="radio" name="cat" value="cinema" id="cinema" />
						<label htmlFor="cinema">Cinema</label>
					</div>

					<div className="cat">
						<input type="radio" name="cat" value="Design" id="Design" />
						<label htmlFor="Design">Design</label>
					</div>

					<div className="cat">
						<input type="radio" name="cat" value="Food" id="Food" />
						<label htmlFor="Food">Food</label>
					</div>
				</div>
			</div>
		</div>
	);
};

// Exporting the `Write` component so that other components can import it.
export default Write;
