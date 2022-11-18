import React, { Component } from "react"
import './StyleSearch.scss'
import './CartaPokemon.css'
import Filtros from "./Filtros";
export default class BuscarPokemon extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            img: "#",
            type: "",
            weight: "",
            id: "",
            height: "",
            hp: "",
            show:false
        }
    }
    fetchApi = async()=>{
        let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
        let data = await resp.json();
        console.log(data.sprites.front_default);
        this.setState({
          img: data.sprites.other["official-artwork"].front_default,
        id: data.id,
         height: data.height,
         weight: data.weight,
         type: data.types[0].type.name,
         hp: data.stats[0].base_stat,
         xp: data.base_experience
        })
    }


    handlerName = event=>{
        this.setState({
            name: event.target.value.toLowerCase()
        })

    }
    handlerSubmit = event=>{
        let aux = this.state.name;
        console.log(aux);
        event.preventDefault();
        this.fetchApi();
    }
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.setState({show:!this.state.show})
        }
      }
      
      
    render(){
        return(
            <div>
          <div className="search__container">
          <form onSubmit={this.handlerSubmit}>
              <input 
              className="search__input" 
              type="text" 
              placeholder="Ingrese el nombre de su pokemon"
              value={this.state.name}
              onChange={this.handlerName} onKeyDown={this._handleKeyDown}></input>
              <br />
              
              </form>
          </div>
          {this.state.show? <div className="pkmn__card">
    <div className="pkmn__container">
			<div className="pkmn__picture" >
				<div className="pkmn__cp">XP<span>{this.state.xp}</span></div>
				<img className="pkmn__png"  src={this.state.img} alt=""/>				
			</div>
			<div className="pkmn__info">
					<div className="pkmn__name">{this.state.name}<p className="size-medium">HP {this.state.hp}/{this.state.hp}</p></div>
					<div className="pkmn__data">
						<div className="pkmn__type">{this.state.type}<p className="text--small">Tipo</p></div>
						<div className="pkmn__weight">{this.state.weight}kg<p className="text--small">Peso</p></div>
						<div className="pkmn__height">{this.state.height}m<p className="text--small">Altura</p></div>
					</div>
				</div>
		</div></div>:null}
      </div>
        )
    }
}