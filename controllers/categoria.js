const { response } = require('express');

const Categoria = require('../models/categoria');

const getCategoria = async (req, res) => {
    try {
        const categorias = await Categoria.find(); // Corrected method name
        res.json({
            msg: categorias
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Internal Server Error',
            error: error.message
        });
    }
};

const postCategoria = async (req, res) => {
    const datos = req.body; // Capturar datos de la url-postman
    let mensaje = 'Inserción exitosa';
    try {
        const categoria = new Categoria(datos); // Instanciar el objeto
        await categoria.save(); // Guardar en la base de datos
        console.log(categoria);
    } catch (error) {
        mensaje = error;
        console.log(error);
    }
    res.json({
        msg: mensaje
    });
};

const putCategoria = async (req, res) => {
    const { nombre, fecha, informacion, requisitos, estado} = req.body; // Desestructurar
    let mensaje = '';
    try {
        const categoria = await Categoria.findOneAndUpdate(
            { nombre: nombre },
            {fecha: fecha, informacion: informacion, requisitos: requisitos, estado: estado }
        );
        mensaje = 'Actualización exitosa';
    } catch (error) {
        mensaje = error;
    }
    res.json({
        msg: mensaje
    });
};

const deleteCategoria = async (req, res) => {
    const { nombre } = req.body; // Desestructurar
    let mensaje = '';
    try {
        const categoria = await Categoria.findOneAndDelete({ nombre: nombre });
        mensaje = 'Eliminación exitosa';
    } catch (error) {
        mensaje = error;
    }
    res.json({
        msg: mensaje
    });
};

module.exports = {
    getCategoria,
    postCategoria,
    putCategoria,
    deleteCategoria
};
