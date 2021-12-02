const databaseConnection= require("../../config/database");

const renderHome = (req,res)=>{
    
    /*hablando a la BD, pidiendo la info que guardo*/
    databaseConnection.query("SELECT * FROM categorias",(error,data)=>{
        if(error){
            console.log(error)
        }else{
    
    /*mandé esa info al archivo index para mostrarlo en el sitio*/
    res.render("pages/index",{
        data
       })
}
    });
};



const getAllProducts =(req,res)=>{
    databaseConnection.query("SELECT * FROM productos",(error,data)=>{
        if(error){
            console.log(error)
        }else{
            res.render("pages/productos",{data})
        }
    })    
    
};

const getForm= (req,res)=>{

    res.render("pages/formulario");
};

const addnewProduct =(req,res)=>{

    const {producto,categoria,descripcion,precio}= req.body;
  
         databaseConnection.query('INSERT INTO productos(producto,categoria,imagen,descripcion,precio)VALUES(?,?,"/imagenes/estilo-madera.png",?,?)',[producto,categoria,descripcion,parseInt(precio)],(error,data)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect("/productos")
        }
    });

  
    
    


    /*
    const producto = contenido de producto;
    const categoria = contenido de categoria del formulario;
    */
};

module.exports={
    renderHome,
    getAllProducts,
    getForm,
    addnewProduct
};
