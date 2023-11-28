export default async function () {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	if (!response.ok) throw new Error(response.statusText);

	return await response.json();
}
