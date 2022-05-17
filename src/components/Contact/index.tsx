import SectionTitle from './../SectionTitle';
import SocialNetwork from "./SocialNetwork"
import FormContact from './FormContact';

import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationArrow } from "react-icons/fa";

import "./style.scss";
export default function Contact(){
	return (
		<footer id="contact" className="container">
			<SectionTitle
				title="Contact"
				subTitle={<>Any problems or questions<b className="color-primary">?</b></>}
			/>

			<p className="my-5 color-medium">Send us a message to our team and we will help you!</p>
			<div className="d-flex justify-content-between flex-wrap">
				<div className="w-auto mb-5">
					<p className="mb-3">
						<BsFillTelephoneFill
							size={"2.5rem"}
							className="vertical-align-middle color-primary mr-1"
						/> (00) 00000-0000
					</p>
					<p className="mb-3">
						<HiOutlineMail
							size={"2.5rem"}
							className="vertical-align-middle color-primary mr-1"
						/>
						<a className="color-secondary" href="mailto: alan.teles12@outlook.com">
							alan.teles12@outlook.com
						</a>
					</p>
					<p className="mb-3">
						<FaLocationArrow
							size={"2.5rem"}
							className="vertical-align-middle color-primary mr-1"
						/> São Paulo, Brazil
					</p>

					<SocialNetwork />
				</div>

				<FormContact />
			</div>

			<div className="text-align-center">
				<small className="color-medium">Alan Teles | Todos os direitos reservados | 2022 ©</small>
			</div>
		</footer>
	);
}