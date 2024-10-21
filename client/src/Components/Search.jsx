import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import axios from "axios";
import "./Search.css"; 
const suggestions =[
  "Aerosols",
  "Animal Bedding",
  "Animal Waste",
  "Asbestos",
  "Bathroom Suites - Toilets, Sinks And Baths",
  "Batteries",
  "Bicycles",
  "Black Plastic Packaging",
  "Books",
  "Bubble Wrap",
  "Building Materials",
  "Buttons",
  "Car Batteries",
  "Cardboard",
  "Carpet And Rugs",
  "Cars",
  "Christmas Tree Lights",
  "Christmas Trees",
  "Cling Film",
  "Clothes Hangers",
  "Clothing And Textiles",
  "Coal Ash",
  "Coffee Pods And Capsules",
  "Coins",
  "Compostable Plastics",
  "Computers (PCs), Laptops, Tablets And Monitors",
  "Cooking Oil And Fats",
  "Corks",
  "Corporate Workwear And Uniforms",
  "Cotton Buds",
  "Cotton Wool",
  "Crisp Packets",
  "Crockery",
  "Cutlery",
  "Diesel, Petrol, Brake And Anti-Freeze Fluid",
  "Disposable Nappies",
  "Drinking Glasses",
  "Duvets And Pillows",
  "DVDs & CDs",
  "Electrical Items",
  "Engine Oil",
  "Fire Extinguishers",
  "Foil",
  "Food And Drink Cartons",
  "Food And Drink Pouches",
  "Food Tins And Drink Cans",
  "Food Waste",
  "Furniture",
  "Garden Waste",
  "Gas Bottles",
  "Gift And Toy Packaging",
  "Glass Bottles And Jars",
  "Greeting Cards",
  "Hand And Garden Tools",
  "Hazardous Waste",
  "Hearing Aids",
  "Inhalers",
  "Ironing Boards",
  "Jewellery And Watches",
  "Keys",
  "Kitchen Towels",
  "Lawnmowers",
  "Light Bulbs",
  "Make-Up Packaging",
  "Medicines",
  "Mobile Phones",
  "Musical Instruments",
  "Paint",
  "Paint Tins",
  "Paper",
  "Paper Coffee Cups",
  "Photographs",
  "Pizza Boxes",
  "Plastic Bags And Wrapping",
  "Plastic Bottles",
  "Plastic Plant Pots",
  "Plastic Pots, Tubs And Trays",
  "Plastic PVC Packaging",
  "Plastic Straws",
  "Plastic Tubes",
  "Polystyrene",
  "Printer Cartridges",
  "Pyrex",
  "Saucepans",
  "School Uniforms",
  "Shoes And Boots",
  "Spectacles",
  "Stamps",
  "Sticky Tape",
  "Tea Bags",
  "Tiles - Floor And Wall",
  "Tissues",
  "Toothpaste Tubes",
  "Toys And Games",
  "Tyres",
  "Vapes",
  "Walking Aids",
  "Water Filters",
  "Wet Wipes",
  "White Goods - Fridges, Freezers, Cookers, Washing Machines, Tumble Dryers And Dishwashers",
  "Wood And Timber",
  "Wood Ash",
  "Wool",
  "Wrapping Paper"
];


const Search = () => {
  const [inputValue, setInputValue] = useState(""); // Input value state
  const [filteredSuggestions, setFilteredSuggestions] = useState([]); // Suggestions to show
  const [showSuggestions, setShowSuggestions] = useState(false); // Control visibility of suggestions
  const navigate = useNavigate(); // Initialize the navigation

  // Handle input change event
  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);

    if (userInput) {
      // Filter suggestions based on user input
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().startsWith(userInput.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true); // Show suggestion box
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false); // Hide suggestion box if input is empty
    }
  };

  // Handle selecting a suggestion
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion); // Set input to clicked suggestion
    setShowSuggestions(false); // Hide suggestion box after selection
  };

  // Handle search button click
  const handleSearchClick = () => {
    if (!inputValue) return; // Do nothing if input is empty
  
    // Send a GET request to the backend
    axios
      .get(`http://localhost:3001/display`, { 
        params: { search: inputValue }, 
        withCredentials: true // If required
      })
      .then((response) => {
        const searchResult = response.data; // Directly use response.data
  
        console.log("Search result from backend:", searchResult); // Log to check if it's correct
  
        // Save searchResult in localStorage
        localStorage.setItem('searchResult', JSON.stringify(searchResult));
  
        // Navigate to the Display page
        navigate('/display'); // Navigate to display without state
      })
      .catch((error) => {
        console.error("Error during search:", error);
      });
  };
  

  return (
    <div className="wrapper">
      <div className="search-input">
        <input
          type="text"
          placeholder="Type to search..."
          value={inputValue}
          onChange={handleInputChange} // Update input value as user types
        />
        {showSuggestions && (
          <ul className="autocom-box">
            {filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </li>
              ))
            ) : (
              <li>{inputValue}</li> // Show the typed input if no suggestions
            )}
          </ul>
        )}
        <div className="icon" onClick={handleSearchClick}>
          <i className="fas fa-search"></i>
        </div>
      </div>
    </div>
  );
};

export default Search;