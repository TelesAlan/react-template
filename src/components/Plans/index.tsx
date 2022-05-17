import SectionTitle from "../SectionTitle";

import "./style.scss";

const plans: PlanCardProps[] = [
	{
		"type": "Standard",
		"sign": "$",
		"amount": 500,
		"amountLocale": "en-US",
		"timeCourse": "year",
		"description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
		"benefits": [
			"Amet minim mollit non deserunt",
			"Amet minim mollit non deserunt",
			"Amet minim mollit non deserunt",
			"Amet minim mollit non deserunt"
		]
	}, {
		"active": true,
		"type": "Premium",
		"subTitle": "Most recommended",
		"sign": "$",
		"amount": 1500,
		"amountLocale": "en-US",
		"timeCourse": "year",
		"description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
		"benefits": [
			"Amet minim mollit non deserunt",
			"Amet minim mollit non deserunt",
			"Amet minim mollit non deserunt",
			"Amet minim mollit non deserunt"
		]
	}, {
		"type": "Enterprise",
		"subTitle": "Best Seller",
		"sign": "$",
		"amount": 1000,
		"amountLocale": "en-US",
		"timeCourse": "year",
		"description": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
		"benefits": [
			"Amet minim mollit non deserunt",
			"Amet minim mollit non deserunt",
			"Amet minim mollit non deserunt",
			"Amet minim mollit non deserunt"
		]
	}
]
export default function Plans() {
	return (
		<section id="plans" className="container">
			<SectionTitle
				title="Plans"
				subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
			/>

			<div className="row-plan-cards mt-5">
				{plans.map(plan => <PlanCardComponent {...plan} /> )}
			</div>
		</section>
	);
}

type PlanCardProps = {
	"active"?: boolean
	"type": "Standard"|"Premium"|"Enterprise"
	"subTitle"?: string
	"sign": "$"|"R$"
	"amount": number
	"amountLocale": "en-US"|"pt-BR"
	"timeCourse": "month"|"year"
	"description": string
	"benefits": string[]
}
function PlanCardComponent({ active, type, subTitle, sign, amount, amountLocale, timeCourse, description, benefits }: PlanCardProps) {
	function formatMoney(number:number, type:string) {
		return new Intl.NumberFormat(type, { maximumSignificantDigits: 3 }).format(number);
	}

	return (
		<div className={`plan-card ${active ? "active" : ""}`}>
			<div className="content">
				<div className="text-align-center mb-5">
					<h1>{type}</h1>
					{subTitle && <h3 className="text-primary-gradient">{subTitle}</h3>}
				</div>

				<div className="amount-container mb-5">
					<h4 className="bold">{sign}</h4>
					<h1 className="bold">{formatMoney(amount, amountLocale)}</h1>
					<h3 className="bold">/{timeCourse}</h3>
				</div>

				<p className="mb-4">{description}</p>

				<ul className="text-align-center mb-5">
					{benefits.map(benefit => <li>{benefit}</li>)}
				</ul>

				<div className="text-align-center">
					<button type="button" className="w-75">Buy</button>
				</div>
			</div>
		</div>
	);
}