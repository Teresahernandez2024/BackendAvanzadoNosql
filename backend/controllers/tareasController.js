const asyncHandler = require ('express-async-handler')

const getTareas = asyncHandler(async (req, res)=> {      
    res.status(200).json({mensaje :'Get tareas'})
})

const createTareas = asyncHandler(async (req, res)=> {   
    if(!req.body.descripcion)  {
     res.status(400)
     throw new Error ('Por favor teclea una descripcion')
}
     res.status(201).json({mensaje:'create Tareas'})
})


const updateTareas = asyncHandler(async (req, res)=> {      
    res.status(200).json({mensaje :`Modificar la Tarea con id ${req.params.id}`})
})

const deleteTareas = asyncHandler(async (req, res)=> {      
    res.status(200).json({id:req.params.id})
})



module.exports = {
    getTareas,createTareas,updateTareas,deleteTareas
}