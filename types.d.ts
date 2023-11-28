type User = {
	id: number;
	name: String;
	Stringtring;
	email: String;
	address: {
		street: String;
		suite: String;
		city: String;
		zipcode: String;
		geo: {
			lat: String;
			lng: String;
		};
	};
	phone: String;
	website: String;
	company: {
		name: String;
		catchPhrase: String;
		bs: String;
	};
};
