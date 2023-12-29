import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaMapLocation } from "react-icons/fa6";
type Props = {};

export default function SearchSection({}: Props) {
	return (
		<>
			{/* Container for the search section with padding, border, and rounded corners. */}
			<div className="p-2 md:p-6 border-[2px] rounded-xl">
				{/* Title for the search section with a bold font. */}
				<p className="text-[20px] font-bold">Get a ride</p>

				{/* Input field for the pickup location with an associated icon. */}
				<InputItem placeholder={"Pickup Location"} Icon={FaLocationDot} />

				{/* Input field for the destination location with an associated icon. */}
				<InputItem placeholder={"Destination Location"} Icon={FaMapLocation} />

				{/* Button to trigger the search action. */}
				<button className="p-3 bg-black w-full mt-5 text-white rounded-lg">
					Search
				</button>
			</div>
		</>
	);
}

// This is a separate component for an input item with an icon.
function InputItem({ placeholder, Icon }: { placeholder: string; Icon: any }) {
	return (
		<>
			{/* Container for the input item with a background color, padding, and rounded corners. */}
			<div className="bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4 ">
				{/* Icon associated with the input item. */}
				<Icon className="text-black w-7 h-7" />

				{/* Input field with a transparent background and an outline. */}
				<input
					className="bg-transparent flex-1 outline-none"
					type="text"
					placeholder={placeholder}
				/>
			</div>
		</>
	);
}
