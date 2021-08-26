### Instrucciones

1. Crear rutas	
	* /home vamos a cargar la listaPersonaje
	* characters/:idCharacter carga la vista individual de personaje
2. Crear modelo y servicios asociados a los characters
3. Crear un componente para la card(thumbnail del personahe y pasarle la informacion necesaria desde el componente que se cargue (donde se debe cargar este componente, necesita ruta?)
4. Hacer peticiones de todos los personajes y pintarlos en el componente listaPersonajes
5. Boton de Ver Personaje que me lleve a la ruta correspondiente y pida al servidor los datos de ese personaje

6. Buscador por nombre en el header
7. buscador por categoria (ojo el selector debe llenarse de los datos de la api) 

8. Montar una paginacion, solo para la vista completa (no apra busquedas). Quiero mostrar de 10 en 10 personajes
	Pistas: getAll me devuelve el total de personajes, con eso puedo calcular el nro de paginas, por lo tanto el numero de botones. Cada boton hara una consulta en el servicio paginando.