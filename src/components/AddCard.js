import { useState } from "react";
import CardService from "../services/CardService";


const AddCard = () => {
    const initialCardState = {
        id: null,
        nombre: '',
        tipo_de_carta: '',
        atributo: '',
        tipo: '',
        nivel_rango: 0,
        escala: 0,
        rareza: '',
        limitacion: 0
    };

    const [carta, setCarta] = useState(initialCardState)
    const [submitted, setSubmitted] = useState(false)

    const handleInputChange = event =>{
        const {name,value} = event.target;
        setCarta({...carta, [name]: value});
    }

    const saveCard = () => {
        let data = {
            nombre: carta.nombre,
            tipo_de_carta: carta.tipo_de_carta,
            atributo: carta.atributo,
            tipo: carta.tipo,
            nivel_rango: carta.nivel_rango,
            escala: carta.escala,
            rareza: carta.rareza,
            limitacion: carta.limitacion
        }

        CardService.create(data)
        .then(response => {
            setCarta({
                id: response.data.id,
                nombre: carta.nombre,
                tipo_de_carta: carta.tipo_de_carta,
                atributo: carta.atributo,
                tipo: carta.tipo,
                nivel_rango: carta.nivel_rango,
                escala: carta.escala,
                rareza: carta.rareza,
                limitacion: carta.limitacion
            });
                setSubmitted(true);
                console.log(carta);
        });

    }

    const newCard = () => {
        setCarta(initialCardState);
        setSubmitted(false);
    }
    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>Has creado la carta exitosamente</h4>
                    <button className="btn btn-primary" onClick={newCard}>Crear otra carta</button>
                </div>
            ): (
                <div>
                    <div className="form-group">
                                <label>Nombre de carta</label>
                                    <input type="text" className="form-control" id="nombre" required value={carta.carta} onChange={handleInputChange} name="nombre" placeholder="Ingresa nombre de carta..."/>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                    <label>Tipo de carta</label>
                                    <select className="form-control" id="tipo_de_carta" required value={carta.tipo_de_carta} onChange={handleInputChange} name="tipo_de_carta">
                                        <option value="normal">Normal</option>
                                        <option value="ritual">Rital</option>
                                        <option value="sincronia">Sincronía</option>
                                        <option value="pendulo">Péndulo</option>
                                        <option value="efecto">Efecto</option>
                                        <option value="fusion">Fusión</option>
                                        <option value="xyz">Xyz</option>
                                        <option value="link">Link</option>
                                    </select>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                    <label>Atributo</label>
                                    <select className="form-control" id="atributo" required value={carta.atributo} onChange={handleInputChange} name="atributo">
                                        <option value="luz">LUZ</option>
                                        <option value="oscuridad">OSCURIDAD</option>
                                        <option value="agua">AGUA</option>
                                        <option value="fuego">FUEGO</option>
                                        <option value="tierra">TIERRA</option>
                                        <option value="viento">VIENTO</option>
                                        <option value="divinidad">DIVINIDAD</option>
                                    </select>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                    <label>Tipo</label> 
                                    <select className="form-control" id="tipo" required value={carta.tipo} onChange={handleInputChange} name="tipo">
                                        <option value="dragon">Dragón</option>
                                        <option value="zombi">Zombi</option>
                                        <option value="demonio">Demonio</option>
                                        <option value="piro">Piro</option>
                                        <option value="serpiente marina">Serpiente Marina</option>
                                        <option value="roca">Roca</option>
                                        <option value="maquina">Máquina</option>
                                        <option value="pez">Pez</option>
                                        <option value="dinosaurio">Dinosaurio</option>
                                        <option value="insecto">Insecto</option>
                                        <option value="bestia">Bestia</option>
                                        <option value="guerrero-bestia">Guerrero-Bestia</option>
                                        <option value="planta">Planta</option>
                                        <option value="aqua">Aqua</option>
                                        <option value="guerrero">Guerrero</option>
                                        <option value="bestia alada">Bestia Alada</option>
                                        <option value="hada">Hada</option>
                                        <option value="lanzador de conjuros">Lanzador de Conjuros</option>
                                        <option value="trueno">Trueno</option>
                                        <option value="reptil">Reptil</option>
                                        <option value="psiquico">Psíquico</option>
                                        <option value="wyrm">Wyrm</option>
                                        <option value="ciberso">Ciberso</option>
                                        <option value="bestia divina">Bestia Divina</option>
                                    </select>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                    <label>Nivel/Rango</label>
                                    <input type="number" className="form-control" id="nivel_rango" required value={carta.nivel_rango} onChange={handleInputChange} name="nivel_rango" />
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                    <label>Escala de Péndulo</label>
                                    <input type="number" className="form-control" id="escala" required value={carta.escala} onChange={handleInputChange} name="escala" />
                                    </div>
                                    <br/>
                 
                                    <div>
                                    <label>Rareza</label>
                                    <input type="text" className="form-control" id="rareza" required value={carta.rareza} onChange={handleInputChange} name="rareza" />  
                                    </div>
                                    <br/>

                                    <div>
                                    <label>Limitacion</label>
                                    <input type="number" className="form-control" id="limitacion" required value={carta.limitacion} onChange={handleInputChange} name="limitacion" />
                                    </div>
                                <button onClick={saveCard} className="brn brn-success">
                                    Guardar carta
                                </button>
                </div>
            )}
        </div>
    )
}

export default AddCard; 