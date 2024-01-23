import React, { useEffect, useState } from "react";

interface SlideProps {
	// show/hide divs
	isOpen: boolean;
	// amount of divs
	amount: number;
	// milliseconds between each div's transition
	time: number;
	// RGB increment for adjusting the gradient
	gradientIncrement: number;
	// change slide direction
	slideDirection: string;
}

let rows: number[] = [];
let divs: any[] = [];

const SlideScreen: React.FC<SlideProps> = (props: SlideProps) => {
	const [divAmount, updateDivAmount] = useState(0);

	useEffect(() => {
		// limit number of divs to 1000 for performance
		props.amount > 1000 ? updateDivAmount(1000) : updateDivAmount(props.amount);

		// clear array
		rows = [];

		// fill empty array with numbers according to amount passed in props
		for (let i = 0; i < divAmount; i++) {
			rows.push(i);
		}

		// create divs
		divs = rows.map((row) => {
			return (
				<div
					id={`slide-div-${row}`}
					key={row}
					className={`w-screen relative flex-1 transition-all ${
						props.slideDirection === "left"
							? props.isOpen
								? "left-[100%]"
								: "left-[0%]"
							: props.isOpen
							? "right-[100%]"
							: "right-[0%]"
					}`}
				/>
			);
		});

		for (let i = 0; i < rows.length; i++) {
			let slideDiv: any = document.querySelector(`#slide-div-${i}`);
			if (slideDiv) {
				slideDiv.style.backgroundColor = `rgb(120,${
					i * props.gradientIncrement
				},212)`;
				slideDiv.style.transitionDuration = `${(i + 1) * props.time}ms`;
			}
		}
	}, [props]);

	return (
		<div
			id="test-div"
			className={`w-screen h-screen z-10 fixed top-50 flex transition-all flex-col ${
				props.slideDirection === "left"
					? props.isOpen
						? "left-[0%]"
						: "left-[100%]"
					: props.isOpen
					? "right-[0%]"
					: "right-[100%]"
			}`}
		>
			{divs}
		</div>
	);
};

export default SlideScreen;
