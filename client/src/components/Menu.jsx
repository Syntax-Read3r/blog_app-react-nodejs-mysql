import React from "react";


function Menu() {
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
		<div>
			<h1>Other posts you may like</h1>
			{posts.map((post) => (
				<div className="post" key={post.id}>
					<img src={post.img} alt="" />
					<h2>{post.title}</h2>
					<button>Read More</button>
				</div>
			))}
		</div>
	);
}

export default Menu;
