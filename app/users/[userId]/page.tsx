import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type {Metadata} from "next";
import getAllUsers from "@/lib/getAllUsers";
import {notFound} from "next/navigation"

type Params = {
	params: {
		userId: string;
	};
};


export async function generateMetadata({params :{userId}}:Params):Promise<Metadata>{

	const userData : Promise<User> = getUser(userId);
	const user: User = await userData;

	if (!user) return {title:"User not found"}
	
	return {
		title: user.name,
		description: `This is the data of ${user.name}`,
	}
	
}

export default async function User({ params: { userId } }: Params) {
	const userData: Promise<User> = getUser(userId);
	const userPosts: Promise<Post[]> = getUserPosts(userId);

	// const [data, posts] = await Promise.all([userData, userPosts]);
	const data: User = await userData;
	if (!data) {
		notFound();
	}

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


export async function generateStaticParams(){
	const users : Promise<User[]>= getAllUsers()
	const usersData : User[] = await users;

	return usersData.map((user)=>{
		return {
			userId: user.id.toString()
		}
	})
}