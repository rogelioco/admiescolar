'use strict'
const Materia = use('App/Models/Materia')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View/')} View */

/**
 * Resourceful controller for interacting with materias
 */
class MateriaController {
  /**
   * Show a list of all materias.
   * GET materias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let materias = await Materia.all();
    return view.render('materias.index',{materias: materias.toJSON()});
  }

  /**
   * Render a form to be used for creating a new materia.
   * GET materias/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render('materias.create');
  }

  /**
   * Create/save a new materia.
   * POST materias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Materia.create(request.all());
    return response.redirect('/materias/index');
  }

  /**
   * Display a single materia.
   * GET materias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let materia = await Materia.find(params.id);

    return view.render('materias.show', materia);
  }

  /**
   * Render a form to update an existing materia.
   * GET materias/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let materia = await Materia.find(params.id);

    return view.render('materias.edit', {materia:materia});
  }

  /**
   * Update materia details.
   * PUT or PATCH materias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let materia = await Materia.find(params.id);

    materia.merge(request.all());

    await materia.save();

    return response.redirect('/materias/index');
  }

  /**
   * Delete a materia with id.
   * DELETE materias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let materia = await Materia.find(params.id);

    materia.delete();

    return response.redirect('/materias/index');
  }
}

module.exports = MateriaController
