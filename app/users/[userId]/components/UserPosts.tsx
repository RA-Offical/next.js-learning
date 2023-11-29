type Props = {
	promise: Promise<Post[]>;
};

export default async function UserPosts({ promise }: Props) {
	const posts = await promise;

	return (
		<div className="mt-3">
			{posts.map((post) => {
				return (
					<div key={post.id} className="py-2">
						<h3 className="font-medium text-blue-400">
							{post.title}{" "}
						</h3>
						<p>{post.body}</p>
					</div>
				);
			})}
		</div>
	);
}
