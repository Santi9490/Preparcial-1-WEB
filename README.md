## Guia de estudio 
Extensiones
[NEXTJS: https://marketplace.visualstudio.com/items?itemName=yuzu.snippets-next-13]
[REACT] https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

# Analizar API endpoint
crear tipado 
tipos number, string, boolean 
export para consumir en varios archivos 

``` 
ejemplo 
{
"albumId": 1,
"id": 1,
"title": "accusamus beatae ad facilis cum similique qui sunt",
"url": "https://via.placeholder.com/600/92c952",
"thumbnailUrl": "https://via.placeholder.com/150/92c952"
},

export interface Photo {
  albumId:number;
  id:number;
  title: string;
  url:string;
  thumbnailUrl:string;
}

```

# Consumir Endpoint

```

    const response = await fetch(URL_ENDPOINT)
    const photos:Photo[] = await response.json() // CONVERTIR A JSON LA RESPUESTA
```
tener en cuenta la estructura, si el endpoint retorna el arreglo o
si esta dentro de una propiedad. 

# Renderizar listas

Para este caso vamos a usar una lista que renderiza componentes PhotoCard en el cliente porque tienen interacción 

```
{
        imagePhotos.map(photo => (
          <PhotoCard key={photo.id}/> 
        ))
      }

Photocard Nuevo component que será cliente

```
```
componente cliente de la card, agregar valores
reales a través de parámetro

'use client' primera linea


```