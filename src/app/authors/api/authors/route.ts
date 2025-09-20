import { NextResponse } from "next/server";

const AUTHORS = [
  {
    "id": 1,
    "first_name": "Gabriel",
    "last_name": "García Márquez",
    "email": "gabriel.garcia@example.com",
    "country": "Colombia",
    "birth_year": 1927,
    "is_alive": false
  },
  {
    "id": 2,
    "first_name": "Isabel",
    "last_name": "Allende",
    "email": "isabel.allende@example.com",
    "country": "Chile",
    "birth_year": 1942,
    "is_alive": true
  },
  {
    "id": 3,
    "first_name": "Jorge Luis",
    "last_name": "Borges",
    "email": "jorge.borges@example.com",
    "country": "Argentina",
    "birth_year": 1899,
    "is_alive": false
  },
  {
    "id": 4,
    "first_name": "Mario",
    "last_name": "Vargas Llosa",
    "email": "mario.vargas@example.com",
    "country": "Peru",
    "birth_year": 1936,
    "is_alive": true
  },
  {
    "id": 5,
    "first_name": "Laura",
    "last_name": "Esquivel",
    "email": "laura.esquivel@example.com",
    "country": "Mexico",
    "birth_year": 1950,
    "is_alive": true
  },
  {
    "id": 6,
    "first_name": "Carlos",
    "last_name": "Fuentes",
    "email": "carlos.fuentes@example.com",
    "country": "Mexico",
    "birth_year": 1928,
    "is_alive": false
  },
  {
    "id": 7,
    "first_name": "Julia",
    "last_name": "Álvarez",
    "email": "julia.alvarez@example.com",
    "country": "Dominican Republic",
    "birth_year": 1950,
    "is_alive": true
  },
  {
    "id": 8,
    "first_name": "Roberto",
    "last_name": "Bolaño",
    "email": "roberto.bolano@example.com",
    "country": "Chile",
    "birth_year": 1953,
    "is_alive": false
  },
  {
    "id": 9,
    "first_name": "Octavio",
    "last_name": "Paz",
    "email": "octavio.paz@example.com",
    "country": "Mexico",
    "birth_year": 1914,
    "is_alive": false
  },
  {
    "id": 10,
    "first_name": "Clarice",
    "last_name": "Lispector",
    "email": "clarice.lispector@example.com",
    "country": "Brazil",
    "birth_year": 1920,
    "is_alive": false
  }
]


export function GET(){
  return NextResponse.json(AUTHORS) 
}