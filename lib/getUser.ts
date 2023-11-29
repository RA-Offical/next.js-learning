export default async function getUser(userId: string) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${userId}`
	);
	if (!response.ok) throw new Error("Error in fetching user");
	return await response.json();
}
