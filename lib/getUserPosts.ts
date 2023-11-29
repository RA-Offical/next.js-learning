export default async function getUserPosts(userId: string) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
	);
	if (!response.ok) throw new Error("Could not find user posts");
	return await response.json();
}
