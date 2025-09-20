import { NextResponse } from "next/server"; 

const AUTHORS = [
    {
"id": "f0b1c6b4-7b6c-4a1d-9a4f-9a2a0d2e7c10",
"firstName": "Valentina",
"lastName": "Rojas",
"displayName": "Valentina Rojas",
"username": "vrojas",
"email": "valentina.rojas@example.com",
"avatarUrl": "https://example.com/avatars/vrojas.jpg",
"country": "Colombia",
"city": "Bogotá",
"bio": "Autora de ficción contemporánea y ensayos breves sobre tecnología y sociedad.",
"genres": ["Ficción", "Ensayo", "Ciencia y tecnología"],
"languages": ["es", "en"],
"website": "https://valentinarojas.example.com",
"is_alive": true,
"social": {
"twitter": "https://twitter.com/vrojas",
"instagram": "https://instagram.com/vrojas",
"linkedin": "https://linkedin.com/in/vrojas"
},
"stats": {
"booksPublished": 4,
"articles": 28,
"followers": 15400,
"rating": 4.6
},
"awards": [
{ "year": 2022, "title": "Premio Narrativa Andina" }
],
"verified": true,
"createdAt": "2023-01-12T09:24:00Z",
"updatedAt": "2025-08-30T15:10:00Z"
},
{
"id": "2a9b7e2d-0d0f-41df-9c2b-7b7f2d1c8a55",
"firstName": "Mateo",
"lastName": "García",
"displayName": "Mateo García",
"username": "mgarcia",
"email": "mateo.garcia@example.com",
"avatarUrl": "https://example.com/avatars/mgarcia.png",
"country": "Argentina",
"city": "Córdoba",
"bio": "Divulgador científico y autor de no ficción sobre IA y ética.",
"genres": ["No ficción", "Divulgación científica"],
"languages": ["es"],
"website": null,
"social": {
"twitter": "https://twitter.com/mgarcia_ai",
"github": "https://github.com/mgarcia",
"is_alive": true
},
"stats": {
"booksPublished": 2,
"articles": 54,
"followers": 8300,
"rating": 4.4
},
"awards": [],
"verified": false,
"createdAt": "2022-11-05T12:00:00Z",
"updatedAt": "2025-07-18T08:30:00Z"
},
{
"id": "c7d6f1d2-6a2c-4b1a-8c44-9f6d9e0a1b23",
"firstName": "Camila",
"lastName": "Pineda",
"displayName": "Cami Pineda",
"username": "camipineda",
"email": "camila.pineda@example.com",
"avatarUrl": "https://example.com/avatars/cpineda.jpg",
"country": "Chile",
"city": "Santiago",
"bio": "Poeta urbana; explora identidad, memoria y ciudad.",
"genres": ["Poesía"],
"languages": ["es"],
"website": "https://camipineda.example.org",
"is_alive": false,
"social": {
"instagram": "https://instagram.com/camipineda.poems"
},
"stats": {
"booksPublished": 3,
"articles": 12,
"followers": 21300,
"rating": 4.8
},
"awards": [
{ "year": 2021, "title": "Festival de Poesía del Sur" }
],
"verified": true,
"createdAt": "2021-06-21T18:45:00Z",
"updatedAt": "2025-03-10T20:12:00Z"
},
{
"id": "9f3a1b8e-5c2f-4c9f-bb4e-2c8d7f6a5e90",
"firstName": "Luis",
"lastName": "Fernández",
"displayName": "Luis A. Fernández",
"username": "luisaf",
"email": "luis.fernandez@example.com",
"avatarUrl": "https://example.com/avatars/lfernandez.jpg",
"country": "España",
"city": "Madrid",
"bio": "Novelista histórico con énfasis en la Edad Media ibérica.",
"genres": ["Novela histórica"],
"languages": ["es"],
"website": "https://luisfernandez.example.es",
"is_alive": true,
"social": {
"twitter": "https://twitter.com/luisaf_writer",
"linkedin": "https://linkedin.com/in/luisaf"
},
"stats": {
"booksPublished": 6,
"articles": 9,
"followers": 39200,
"rating": 4.5
},
"awards": [
{ "year": 2020, "title": "Premio Letras de Bronce" },
{ "year": 2024, "title": "Medalla de la Crítica" }
],
"verified": true,
"createdAt": "2020-02-10T10:10:00Z",
"updatedAt": "2025-02-27T14:00:00Z"
},
{
"id": "1b6d0a9c-3f5e-4d65-9a63-0a7c2d8f4b12",
"firstName": "Sofía",
"lastName": "López",
"displayName": "Sofía López",
"username": "sofialopez",
"email": "sofia.lopez@example.com",
"avatarUrl": "https://example.com/avatars/slopez.png",
"country": "México",
"city": "Guadalajara",
"bio": "Cuentista y guionista. Sus relatos exploran tecnología y afectos.",
"genres": ["Cuento", "Guion"],
"languages": ["es", "en"],
"website": null,
"social": {},
"stats": {
"booksPublished": 1,
"articles": 31,
"followers": 6700,
"rating": 4.1
},
"awards": [],
"verified": false,
"createdAt": "2024-04-02T07:00:00Z",
"updatedAt": "2025-08-02T19:40:00Z"
},
{
"id": "aa7d9c2e-0f5a-4b1e-9d2c-1f3e5a7c9d11",
"firstName": "Andrés",
"lastName": "Paz",
"displayName": "Andrés Paz",
"username": "andrespaz",
"email": "andres.paz@example.com",
"avatarUrl": "https://example.com/avatars/apaz.jpg",
"country": "Colombia",
"city": "Medellín",
"bio": "Autor indie de fantasía épica y worldbuilding colaborativo.",
"genres": ["Fantasía", "Aventura"],
"languages": ["es"],
"website": "https://andrespaz.example.co",
"social": {
"twitter": "https://twitter.com/andrespaz_fic"
},
"stats": {
"booksPublished": 3,
"articles": 5,
"followers": 9800,
"rating": 4.3
},
"awards": [],
"verified": false,
"createdAt": "2023-08-19T16:22:00Z",
"updatedAt": "2025-06-05T12:11:00Z"
},
{
"id": "e3b8a2c9-5d7e-4f1a-9b3d-2a7c9e5f0a66",
"firstName": "Julia",
"lastName": "Navarro",
"displayName": "Julia Navarro",
"username": "jnavarro",
"email": "julia.navarro@example.com",
"avatarUrl": "https://example.com/avatars/jnavarro.jpg",
"country": "Perú",
"city": "Lima",
"bio": "Ensayista y crítica literaria enfocada en mujeres latinoamericanas.",
"genres": ["Ensayo", "Crítica"],
"languages": ["es", "fr"],
"website": "https://jnavarro.example.pe",
"social": {
"instagram": "https://instagram.com/jnavarro.lecturas",
"linkedin": "https://linkedin.com/in/jnavarro"
},
"stats": {
"booksPublished": 2,
"articles": 72,
"followers": 12100,
"rating": 4.7
},
"awards": [
{ "year": 2023, "title": "Mejor Ensayo Hispanoamericano" }
],
"verified": true,
"createdAt": "2022-03-30T21:00:00Z",
"updatedAt": "2025-04-14T09:33:00Z"
},
{
"id": "b51a4b77-2f0c-4f0c-a9a8-4fd5b0a1c3e2",
"firstName": "Renato",
"lastName": "Silva",
"displayName": "Renato Silva",
"username": "rsilva",
"email": "renato.silva@example.com",
"avatarUrl": "https://example.com/avatars/rsilva.png",
"country": "Brasil",
"city": "São Paulo",
"bio": "Autor de cyberpunk latino, mezcla de ritmo urbano y política.",
"genres": ["Ciencia ficción", "Cyberpunk"],
"languages": ["pt", "es"],
"website": "https://renatosilva.example.br",
"social": {
"twitter": "https://twitter.com/rsilva_writer",
"github": "https://github.com/rsilva"
},
"stats": {
"booksPublished": 5,
"articles": 17,
"followers": 25800,
"rating": 4.2
},
"awards": [],
"verified": true,
"createdAt": "2019-09-12T05:55:00Z",
"updatedAt": "2025-07-01T11:20:00Z"
},
];
    
export function GET() {
    return NextResponse.json(AUTHORS);
    
}
