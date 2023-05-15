import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


function ShareProduct({id}) {
	return (<>
		<div style={{ border: "solid 2px black", width:"20vh" }}>
			<AiFillFacebook className="icon-share" size={"2rem"} />
			<FaInstagramSquare className="icon-share" size={"2rem"} />
			<FaTwitterSquare className="icon-share" size={"2rem"} />

		</div>
		<a href={"https://www.facebook.com/sharer/sharer.php?u="+"https://dummyjson.com/products/"+{id}}><AiFillFacebook className="icon-share" size={"2rem"} /></a>
	</>
	)
}

export default ShareProduct;