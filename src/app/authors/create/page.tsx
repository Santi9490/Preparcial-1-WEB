

import { AuthorForm } from "../componets/AuthorFrom";


interface Authors {
    id: number,
    firstName: string,
    lastName: string,
    displayName: string,
    username: string,
    email: string,
    avatarUrl: string,
    country: string,
    city: string,
    bio: string,
}



export default function CreateAuthorPage() {

    
    return (
        <div>
            <h1>Create Author</h1>
            <AuthorForm />
        </div>
    );
}