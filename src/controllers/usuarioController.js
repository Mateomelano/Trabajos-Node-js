const Libro = require("../models/usuarioModel");

exports.getAllUsuarios = async (req, res) => {
  try {
    const Usuario = await Usuario.find();
    res.status(200).json(Usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

exports.getUsuarioById = async (req, res) => {
  try {
    const Usuario = await Usuario.findById(req.params.id);
    if (!Usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json(Usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el Usuario" });
  }
};

exports.createUsuario = async (req, res) => {
  try {
    const nuevoUsuario = await Libro.create(req.body);
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el Usuario" });
  }
};

exports.updateUsuario = async (req, res) => {
  try {
    const Usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!Usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json(libro);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el Usuario" });
  }
};

exports.deleteUsuario = async (req, res) => {
  try {
    const UsuarioId = req.params.id;

    const UsuarioEliminado = await Usuario.findByIdAndRemove(UsuarioId);

    res.status(200).json(UsuarioEliminado);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el Usuario" });
  }
};
