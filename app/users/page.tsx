import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Users",
};

export default async function Users() {
	const usersData: Promise<User[]> = getAllUsers();

	const users = await usersData;

	return (
		<section>
			<h2 className="mb-2">
				<Link href="/">Back to home</Link>
			</h2>

			{users.map((user) => {
				return (
					<div key={user.id}>
						<p>
							<Link href={`/users/${user.id}`}>{user.name}</Link>
						</p>
						<br />
					</div>
				);
			})}
		</section>
	);
}
