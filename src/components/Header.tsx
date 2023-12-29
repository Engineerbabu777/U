import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

type Props = {};

const headerMenu = [
	{ id: 1, name: "ride", icon: "/taxi.png" },
	{ id: 1, name: "box", icon: "/box.png" },
];
export default function Header({}: Props) {
	return (
		<>
			<div className="p-4 pb-3 pl-10 border-b-[4px] border-gray-200 flex items-center justify-between">
				<div className="flex gap-24 items-center">
					<h1 className="text-2xl font-bold text-black">Logo</h1>

					<div className="flex gap-6 items-center">
						{headerMenu.map((item) => (
							<>
								<div className="flex gap-2 items-center">
									<Image src={item.icon} alt="texting" width={ item?.name=== 'box' ? 24:17} height={17} />
                                    <h2 className="text-[14px] font-medium">{item?.name}</h2>
								</div>
							</>
						))}
					</div>
				</div>
                <UserButton />
			</div>
		</>
	);
}
