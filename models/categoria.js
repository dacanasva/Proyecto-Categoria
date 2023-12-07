const {Schema, model } = require('mongoose')

const CategoriaSchema = ({
    nombre:{
        type: String,
        unique:true,
        required:[true, 'El nombre de categoria es requirido']
    },

    fecha: {
        type:String,
        required:[true, 'La fecha del categoria es requerida'],
    },
    informacion:{
        type: String,
        
        required:[true, 'El informacion de categoria es requirido']
    },
    requisitos:{
        type: String,
        
        required:[true, 'El requisitos de categoria es requirido']
    },

    estado: {
        type:Boolean,
        default:true
    }
  

})

module.exports = model('Categoria', CategoriaSchema)
