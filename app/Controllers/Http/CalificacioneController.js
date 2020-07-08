'use strict'
const Calificacion = use('App/Models/Calificacion');
const Materia = use('App/Models/Materia');
const Alumno = use('App/Models/Alumno');
const Registro = use('App/Models/Registro');


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with calificaciones
 */
class CalificacioneController {
  /**
   * Show a list of all calificaciones.
   * GET calificaciones
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let calificaciones = await Calificacion.query().with('alumno').with('materia').orderBy('idMateria', 'asc').fetch();
    return view.render('calificaciones.index', {calificaciones:calificaciones.toJSON()});
  }

  /**
   * Render a form to be used for creating a new calificacione.
   * GET calificaciones/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let materias = await Materia.all();
    let registros = await Registro.query().with('alumno').with('materia').fetch();
    return view.render('calificaciones.create',{materias:materias.toJSON(), registros:registros.toJSON()});
  }

  async test ({ params, request, response, view }) {
    let registros = await Registro.query().with('alumno').with('materia').where('idMateria',params.id).fetch();
    let materia = await Materia.find(params.id);
    
    return view.render('calificaciones.createM',{registros:registros.toJSON(), materia});
  }
  
  /**
   * Create/save a new calificacione.
   * POST calificaciones
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Calificacion.create(request.all());
    return response.redirect('/calificaciones/index');
  }

  /**
   * Display a single calificacione.
   * GET calificaciones/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing calificacione.
   * GET calificaciones/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let calificacion = await Calificacion.find(params.id);
    let registros = await Registro.query().with('alumno').with('materia').fetch();

    return view.render('calificaciones.edit', {calificacion, registros:registros.toJSON()});
    
  }

  /**
   * Update calificacione details.
   * PUT or PATCH calificaciones/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let calificacion = await Calificacion.find(params.id);

    calificacion.merge(request.all());

    await calificacion.save();

    return response.redirect('/calificaciones/index');
  }

  /**
   * Delete a calificacione with id.
   * DELETE calificaciones/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let calificacion = await Calificacion.find(params.id);
    calificacion.delete();

    return response.redirect('/calificaciones/index');
  }
}

module.exports = CalificacioneController
