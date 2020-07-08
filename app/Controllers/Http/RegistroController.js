'use strict'
const Materia = use('App/Models/Materia');
const Alumno = use('App/Models/Alumno');
const Registro = use('App/Models/Registro');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with registros
 */
class RegistroController {
  /**
   * Show a list of all registros.
   * GET registros
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let registros = await Registro.query().with('alumno').with('materia').fetch();
    return view.render('registros.index',{registros:registros.toJSON()});
  }

  /**
   * Render a form to be used for creating a new registro.
   * GET registros/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    let materias = await Materia.all();
    let alumnos = await Alumno.all();

    return view.render('registros.create',{materias:materias.toJSON(), alumnos:alumnos.toJSON()});
  }

  /**
   * Create/save a new registro.
   * POST registros
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Registro.create(request.all());
    return response.redirect('/registros/index');
  }

  /**
   * Display a single registro.
   * GET registros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing registro.
   * GET registros/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let registro = await Registro.find(params.id);
    let materias = await Materia.all();
    let alumnos = await Alumno.all();

    return view.render('registros.edit', {registro:registro , materias:materias.toJSON(), alumnos:alumnos.toJSON()});
  }

  /**
   * Update registro details.
   * PUT or PATCH registros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let registro = await Registro.find(params.id);
    registro.merge(request.all());
    
    await registro.save();

    return response.redirect('/registros/index');
  }

  /**
   * Delete a registro with id.
   * DELETE registros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let registro = await Registro.find(params.id);
    registro.delete();

    return response.redirect('/registros/index');
  }
}

module.exports = RegistroController
