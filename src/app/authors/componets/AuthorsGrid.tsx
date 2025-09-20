'use client';

import { useEffect, useState } from "react";
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


export const AuthorsGrid = () => {

    const [authors, setAuthors] = useState<Authors[]>([]);
    useEffect(() => {
        getAuthors();
        
    /* return (
        <div>
            <h2>Authors Grid Component</h2>
        </div> */
    
} , [])

const getAuthors = async () => {
    const response = await fetch('/api/authors');
    const authors = await response.json();
    setAuthors(authors);
}

    return (<div>
            <h2>AuthorsGrid</h2>
            {
            authors.map(author => (
                <div key={author.id}>
                    <h3>{author.firstName}</h3>
                    <h4>{author.lastName}</h4>
            
                
                </div>
            ) )
                
                }

    </div>
        )
}