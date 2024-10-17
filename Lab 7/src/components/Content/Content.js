import React, { Component } from 'react';
import ListElements from "../ListElement";
import Paragraph from '../Paragraph';
import Image from '../Image/Image';
import Button from '../Button/Button';
import './Content.css';
import { paragraphs, hobbies, books, cities } from "../data";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstElementStyle: {},
            secondElementStyle: {},
            images: [
                { 
                    id: Date.now(), 
                    size: 500,
                    initialSize: 500,
                }
            ],
        };
    }

    toggleFirstElementStyle = () => {
        this.setState((prevState) => ({
            firstElementStyle: {
                backgroundColor: prevState.firstElementStyle.backgroundColor === "blue" ? "greenyellow" : "blue",
                color: prevState.firstElementStyle.color === "yellow" ? "purple" : "yellow",
            },
        }));
    };

    toggleSecondElementStyle = () => {
        this.setState((prevState) => ({
            secondElementStyle: {
                backgroundColor: prevState.secondElementStyle.backgroundColor === "greenyellow" ? "blue" : "greenyellow",
                color: prevState.secondElementStyle.color === "purple" ? "yellow" : "purple",
            },
        }));
    };

    addImage = () => {
        const newImage = { id: Date.now(), size: 500, initialSize: 500 };
        this.setState((prevState) => ({
            images: [...prevState.images, newImage],
        }));
    };    
    
    increaseSize = (id) => {
        this.setState((prevState) => ({
            images: prevState.images.map((img) =>
                img.id === id 
                ? { ...img, size: img.size + img.initialSize * 0.05 }
                : img
            ),
        }));
    };
    
    decreaseSize = (id) => {
        this.setState((prevState) => ({
            images: prevState.images.map((img) =>
                img.id === id && img.size > img.initialSize * 0.1 
                ? { ...img, size: img.size - img.initialSize * 0.05 }
                : img
            ),
        }));
    };
    
    removeImage = (id) => {
        this.setState((prevState) => ({
            images: prevState.images.filter((img) => img.id !== id),
        }));
    };

    render() {
        return (
            <div>
                {paragraphs.slice(0, paragraphs.length - 1).map((paragraph) => (
                    <Paragraph key={paragraph.text} {...paragraph} />
                ))}

                <ul>
                    <ListElements {... hobbies[0]} />
                    <ListElements 
                        {...hobbies[1]} 
                        style={this.state.firstElementStyle} 
                        onClick={this.toggleFirstElementStyle} 
                    />
                    <ListElements 
                        {...hobbies[2]} 
                        style={this.state.secondElementStyle} 
                        onClick={this.toggleSecondElementStyle} 
                    />
                    <ListElements {... hobbies[3]} />
                </ul>

                <Paragraph {... paragraphs[4]} />
                <ol>
                    {books.map((book) => (
                        <ListElements key={book.text} {... book} />
                    ))}
                </ol>

                {cities.map((city) => (
                    <Paragraph key={city.text} {...city} />
                ))}

                {this.state.images.map((img) => (
                    <Image
                        key={img.id}
                        img={img}
                        increaseSize={this.increaseSize}
                        decreaseSize={this.decreaseSize}
                        removeImage={this.removeImage}
                    />
                ))}

                <Button onClick={this.addImage}>Додати зображення</Button>
            </div>

        );
    }
}

export default Content;