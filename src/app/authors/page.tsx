'use client'

import { AuthorsGrid } from "./componets/AuthorsGrid";

interface Props {
	params: {
		id: string;
	};
}

export default function AuthorsPage() {
	return (
		<div>
			<h1>Authors</h1>
			<AuthorsGrid />
		</div>
	);
}
