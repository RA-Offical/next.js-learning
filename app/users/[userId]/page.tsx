type Params = {
	params: {
		userId: string;
	};
};

export default function User({ params: { userId } }: Params) {
	return <div>User</div>;
}
