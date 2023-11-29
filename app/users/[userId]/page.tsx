import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";

type Params = {
	params: {
		userId: string;
	};
};

export default async function User({ params: { userId } }: Params) {
	const userData: Promise<User> = getUser(userId);
	const userPosts: Promise<Post[]> = getUserPosts(userId);

	// const [data, posts] = await Promise.all([userData, userPosts]);
	const data = await userData;

	return (
		<div>
			<h2 className="text-3xl text-blue-500 font-medium mb-3 mt-8">
				{data.name}
			</h2>

			<Suspense fallback={<p>Loading...</p>}>
				<UserPosts promise={userPosts} />
			</Suspense>
		</div>
	);
}
