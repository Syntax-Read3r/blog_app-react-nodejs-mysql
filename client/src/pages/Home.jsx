import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	const posts = [
		{
			id: 1,
			title:
				" Lorem ipsum dolor sit amet consectetur harum accusantium nemo placeat rem.",
			desc: "Lorem ipsum  vitae eaque amet odit. Quia, praesentium. Cumque.",
			img: "https://loremflickr.com/460/460",
		},
		
			{
				id: 2,
				title:
					" Lorem ipsum dolor sit amet consectetur harum accusantium nemo placeat rem.",
				desc: "Lorem ipsum  vitae eaque amet odit. Quia, praesentium. Cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci incidunt facere excepturi, molestias quo. Fugit voluptates alias expedita iste beatae! Commodi eum id animi error earum cupiditate deleniti? Libero.",
				img: "https://loremflickr.com/460/560",
			},
			{
				id: 3,
				title:
					" Lorem ipsum dolor sit amet consectetur harum accusantium nemo placeat rem.",
				desc: "Lorem ipsum  vitae eaque amet odit. Quia, praesentium. Cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci incidunt facere excepturi, molestias quo. Fugit voluptates alias expedita iste beatae! Commodi eum id animi error earum cupiditate deleniti? Libero.",
				img: "https://loremflickr.com/460/760",
			},
	];

	return (
		<div className="home">
			{/* Wrapper for all blog posts */}
			<div className="posts">
				{/* Loop through each post and render a single one */}
				{posts.map((post) => (
					<div className="post" key={post.id}>
						{/* The image for the post */}
						<div className="img">
							<img src={post.img} alt="" />
						</div>
						{/* The content of the post */}
						<div className="content">
							{/* Link to full post page */}
							<Link to={`/post/${post.id}`} className="link">
								<h1>{post.title}</h1>
							</Link>
							{/* Short description of the post */}
							<p>{post.desc}</p>
							{/* Button to read the full post */}
							<button>Read More</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
