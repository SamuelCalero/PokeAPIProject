import React from 'react'
import { useState} from 'react'
import Carta from './Carta';
export default function Filtros({pokemon}) {
    const[tipoSeleccionado, setTipoSeleccionado]=useState({
        fire:false,
        grass:false,
        normal:false,
        ground:false,
        electric:false,
        water:false,
        fighting:false,
        groud:false,
        poison:false,
        fairy:false
    });
    let pokeArray = [];
    pokemon.map((value)=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${value.name}`)
        .then(response => response.json())
        .then(data => {pokeArray.push(data)})
    })
    console.log(pokeArray);
    const [datosFiltrados, setdatosFiltrados] = useState([])
    const handleOnCheckbox = e =>{{
        setTipoSeleccionado({
            ...tipoSeleccionado,
            [e.target.value]:e.target.checked,

        });
        if(e.target.checked){
            const resultadoTipo = pokeArray.filter(item=> item.name ===e.target.value)
            setdatosFiltrados([
                ...datosFiltrados,
                ...resultadoTipo
            ])
        }else{
            const resultadoTipo = datosFiltrados.filter( item=> item.name !==e.target.value)
            setdatosFiltrados([...resultadoTipo])
        }
    }
    }
  return (
    <main>
    <div className='container'>
    <div className='form-check form-check-inline'>
            <input onChange={handleOnCheckbox}
            type="checkbox" name='tipos' value='electric' id='electric' className='form-check-input'/>
            <label htmlFor="electric" className='form-check-label'>Electrico</label>
        </div>
        <div className='form-check form-check-inline'>
            <input onChange={handleOnCheckbox}
            type="checkbox" name='tipos' value='fire' id='fire' className='form-check-input'/>
            <label htmlFor="fire" className='form-check-label'>Fuego</label>
        </div>
        <div className='form-check form-check-inline'>
            <input onChange={handleOnCheckbox}
            type="checkbox" name='tipos' value='water' id='water' className='form-check-input'/>
            <label htmlFor="water" className='form-check-label'>Agua</label>
        </div>
        <div className='form-check form-check-inline'>
            <input onChange={handleOnCheckbox}
            type="checkbox" name='tipos' value='ground' id='ground' className='form-check-input'/>
            <label htmlFor="ground" className='form-check-label'>Roca</label>
        </div>
        <div className='form-check form-check-inline'>
            <input onChange={handleOnCheckbox}
            type="checkbox" name='tipos' value='normal' id='normal' className='form-check-input'/>
            <label htmlFor="normal" className='form-check-label'>Normal</label>
        </div>
        <div className='form-check form-check-inline'>
            <input onChange={handleOnCheckbox}
            type="checkbox" name='tipos' value='grass' id='grass' className='form-check-input'/>
            <label htmlFor="grass" className='form-check-label'>Grass</label>
        </div>
        <div className='form-check form-check-inline'>
            <input onChange={handleOnCheckbox}
            type="checkbox" name='tipos' value='fairy' id='fairy' className='form-check-input'/>
            <label htmlFor="fairy" className='form-check-label'>Hada</label>
        </div>
        <div className='form-check form-check-inline'>
            <input onChange={handleOnCheckbox}
            type="checkbox" name='tipos' value='poison' id='poison' className='form-check-input'/>
            <label htmlFor="poison" className='form-check-label'>Veneno</label>
        </div>
        <div className='form-check form-check-inline'>
            <input onChange={handleOnCheckbox}
            type="checkbox" name='tipos' value='fighting' id='fighting' className='form-check-input'/>
            <label htmlFor="fighting" className='form-check-label'>Lucha</label>
        </div>
        <div className='form-check form-check-inline'>
            <input onChange={handleOnCheckbox}
            type="checkbox" name='tipos' value='flying' id='flying' className='form-check-input'/>
            <label htmlFor="flying" className='form-check-label'>Volador</label>
        </div>
        <div className='form-check form-check-inline'>
            <input onChange={handleOnCheckbox}
            type="checkbox" name='tipos' value='bug' id='bug' className='form-check-input'/>
            <label htmlFor="bug" className='form-check-label'>Bicho</label>
        </div>
        <div className='form-check form-check-inline'>
            <input onChange={handleOnCheckbox}
            type="checkbox" name='tipos' value='psysic' id='psysic' className='form-check-input'/>
            <label htmlFor="psysic" className='form-check-label'>Psiquico</label>
        </div>

    </div>
    <div className='container-info-selected'>
    
            {
                datosFiltrados.map(item=>
                    <Carta key={item.id}{...item}/>)
            }
    </div>
    </main>
  )
}
