import React, { Component } from "react"
import Input from '../presentation/Input.jsx';
import Board from './Board.js';


class FormContainer extends Component {
    constructor() {
        super();

        this.state = {
            item:'',
            seo_title: []
        }
        this.handleChange=this.handleChange.bind(this);
        this.addItem=this.addItem.bind(this);
        this.renderList=this.renderList.bind(this);
    }

    handleChange(event) {
        this.setState({ item: event.target.value })
    }
    
    addItem() {
        let lst=this.state.seo_title;
        lst.push(this.state.item);
        this.setState({ seo_title: lst, item:'' });
        event.preventDefault();
    }

    renderList(){
        let lst=this.state.seo_title;
        let liList= lst.map((item)=>{
            return <li>{item}</li>
        });
        return liList;
    }

    render() {
        return (
            <Board></Board>
            // <form id="article-form">
            // <ul>{this.renderList()}</ul>            
            //     <Input
            //         text="Item"
            //         label="SEO_title"
            //         type="text"
            //         id="item"
            //         value={this.state.item}
            //         placeholder="type"
            //         onChange={this.handleChange}
            //     />
            //     <button onClick={this.addItem}>
            //         add item
            //     </button>
               
            // </form>
        )
    }
}

export default FormContainer;