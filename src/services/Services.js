const datasource = require('../database/models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros(where = {}) {
    return datasource[this.model].findAll({ where: { ...where } });
  }

  async pegaRegistrosPorEscopo(escopo) {
    return datasource[this.model].scope(escopo).findAll();
  }

  async pegaUmRegistroPorId(id) {
    return datasource[this.model].findByPk(id);
  }

  async pegaUmRegistro(where) {
    return datasource[this.model].findOne({ where: { ...where } });
  }

  async pegaEContaRegistros(options) {
    return datasource[this.model].findAndCountAll({
      ...options,
    });
  }

  async criaRegistro(dadosDoRegistro) {
    return datasource[this.model].create(dadosDoRegistro);
  }

  async atualizaRegistro(dadosAtualizados, where, transacao = {}) {
    const listaDeRegistrosAtualizados = await datasource[this.model].update(dadosAtualizados,
      {
        where: {
          ...where
        },
        transaction: transacao,
      }
    );
    if (listaDeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }

  async excluiRegistro(id) {
    return datasource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;