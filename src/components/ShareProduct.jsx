import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function ShareProduct() {
	return (<>
		<div style={{ border: "solid 2px black", width:"20vh" }}>
			<AiFillFacebook className="icon-share" size={"2rem"} />
			<FaInstagramSquare className="icon-share" size={"2rem"} />
			<FaTwitterSquare className="icon-share" size={"2rem"} />

		</div>
		<a href="https://www.facebook.com/sharer/sharer.php?u=https://i.pinimg.com/564x/29/1a/1a/291a1a2e4e3707ee692dc6d9af2d2a83.jpg"></a>
	</>
	)
}

export default ShareProduct;