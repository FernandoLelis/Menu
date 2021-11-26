import React, { useState } from "react";

const categorias = [
    {
        "nome" : "Celulares e SmartFones",
        "tipo" : ["classico", "premium"]
    },
    {
        "nome" : "Suplementos",
        "tipo" : ["classico", "premium"]
    }
]



function Menu() {

    const [idTipo, setIdTipo] = useState(-1);

    const handlerCarregarTipo = function (e) {
        const opcao = e.target.value;

        setIdTipo(opcao);
    }





    return(
        <div className="row">
            <div className="col-6">
                <h3>Categorias</h3>
                <select name="categorias" id="selCategorias" onClick={handlerCarregarTipo}>
                    <option value={-1}>Selecione</option>
                    {
                        categorias.map((item, i) => (
                            <option key={"categoria" + i} value={i}>{item.nome}</option>
                        ) )
                    }
                </select>
            </div>
            <div className="col-6">
                <h3>Artígos</h3>
                <select name="tipo" id="selTipo">
                    {
                       idTipo > -1 && 
                        (
                            categorias[idTipo].tipo.map((item, i) => (
                                <option key ={"tipo" + i} value="">{item}</option>
                            ))
                        )
                        
                    }
                </select>
            </div>
            
        
            {idTipo}
        </div>
    )
}

export default Menu;

