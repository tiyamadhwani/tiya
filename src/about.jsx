import { useState } from "react";

const About = () =>{
{
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  const updateColor = (color) => {
    setCar(previousState => {
      return { ...previousState, color: color }
    });
  }
    const UpdateBrand = (brand) => {
    setCar(previousState => {
      return { ...previousState, brand: brand }
    });
  }
  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={() => updateColor('Blue')}
      >Blue</button>
      <button
        type="button"
        onClick={() => updateColor('Red')}
      >Red</button>
      <button
        type="button"
        onClick={() => UpdateBrand('BMW')}
      >BMW</button>
       <button
        type="button"
        onClick={() => UpdateBrand('Skoda')}
      >Skoda</button>

    </>
  )
}
}
export default About
