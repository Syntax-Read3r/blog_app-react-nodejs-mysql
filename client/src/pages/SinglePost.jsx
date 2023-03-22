import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";

const SinglePost = () => {
	return (
		<div className="single">
			<div className="content">
				<img src="https://loremflickr.com/640/360" alt="" />
				<div className="user">
					<img
						src="https://loremflickr.com/640/460
"
						alt=""
					/>

					<div className="info">
						<span>John</span>
						<p>Posted 2 days ago</p>
					</div>

					<div className="edit">
						<Link to={`/write?edit=2`}>
							<img src={Edit} alt="" />
						</Link>
						<img src={Delete} alt="" />
					</div>
				</div>

				<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>

				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos porro
					excepturi magni eligendi aspernatur, fugiat eaque facere voluptatem
					autem deserunt dolore non iusto quis! A velit pariatur asperiores
					soluta minus.
					<br />
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
					ratione asperiores, fugit iste ea accusamus. Nisi iste illum,
					architecto repudiandae fugit molestiae doloribus quae blanditiis
					facere libero! Hic, blanditiis ipsum?
					<br />
					<br />
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
					expedita recusandae tenetur at earum dolorem deleniti eaque architecto
					saepe possimus. Eveniet dolorem consectetur molestiae. Eaque quis
					facere eligendi at praesentium.
				</p>
			</div>

			<div className="menu">
				<Menu />
			</div>
		</div>
	);
};

export default SinglePost;
