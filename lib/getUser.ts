export default async function getUser(userId: string) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${userId}`, {next: {revalidate:60}}
	);
	if (!response.ok) return undefined;
	return await response.json();
}
