import Link from "next/link";
import React from "react";

export default function page() {
	return (
		<div>
			<h2 className="text-center text-3xl my-5">
				Welcome to Next.js practice
			</h2>

			<Link
				href={"/users"}
				className="block text-center text-blue-600 hover:underline"
			>
				Users
			</Link>
		</div>
	);
}
