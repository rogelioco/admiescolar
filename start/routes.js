'use strict'
//const Materias = use('App/Models/Materia')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')



/*Route.get('materia', async({response})=> {
    const materias = await Materias.all();
    response.send(materias);
})
*/
Route.on('/').render('welcome')
Route.on('/m/i').render('materias.index');

//Materias
Route.get('materias/index', 'MateriaController.index');
Route.get('materias/show/:id', 'MateriaController.show');
Route.get('materias/create', 'MateriaController.create');
Route.post('materias/store', 'MateriaController.store');
Route.get('materias/edit/:id','MateriaController.edit');
Route.post('materias/update/:id','MateriaController.update');
Route.get('materias/destroy/:id','MateriaController.destroy');

//Alumnos
Route.get('alumnos/index', 'AlumnoController.index');
Route.get('alumnos/show/:id', 'AlumnoController.show');
Route.get('alumnos/create', 'AlumnoController.create');
Route.post('alumnos/store', 'AlumnoController.store');
Route.get('alumnos/edit/:id','AlumnoController.edit');
Route.post('alumnos/update/:id','AlumnoController.update');
Route.get('alumnos/destroy/:id','AlumnoController.destroy');


//Registros
Route.get('registros/index', 'RegistroController.index');
Route.get('registros/create', 'RegistroController.create');
Route.post('registros/store', 'RegistroController.store');
Route.get('registros/edit/:id', 'RegistroController.edit');
Route.post('registros/update/:id','RegistroController.update');
Route.get('registros/destroy/:id','RegistroController.destroy');

//Calificaciones
Route.get('calificaciones/index', 'CalificacioneController.index');
Route.get('calificaciones/create', 'CalificacioneController.create');
Route.get('calificaciones/create/:id', 'CalificacioneController.test');
Route.post('calificaciones/store', 'CalificacioneController.store');
Route.get('calificaciones/edit/:id', 'CalificacioneController.edit');
Route.post('calificaciones/update/:id','CalificacioneController.update');
Route.get('calificaciones/destroy/:id','CalificacioneController.destroy');