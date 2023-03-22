import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	const posts = [
		{
			id: 1,
			title:
				" Lorem ipsum dolor sit amet consectetur harum accusantium nemo placeat rem.",
			desc: "Lorem ipsum  vitae eaque amet odit. Quia, praesentium. Cumque.",
			img: "https://www.vecteezy.com/photo/9711199-sumatran-tiger-on-log",
		},
		{
			id: 2,
			title:
				" Lorem ipsum dolor sit amet consectetur adipisicing elit.  consectetur, omnis magnam harum accusantium nemo placeat rem.",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. eaque amet odit. Quia, praesentium. Cumque.",
			img: "https://www.vecteezy.com/photo/16274193-eurasian-lynx-in-winter",
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
