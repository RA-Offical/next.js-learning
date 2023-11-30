export default async function getUserPosts(userId: string) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
	);
	if (!response.ok) return undefined;
	return await response.json();
}
