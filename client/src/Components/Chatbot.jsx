import React, { useState } from 'react';
import './Chatbot.css';
import stringSimilarity from 'string-similarity';

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  // Predefined questions and answers related to recycling
  const predefinedResponses = {
    "what is recycling": "Recycling is the process of converting waste materials into new materials and objects.",
    "how to recycle": "Sort recyclables into different categories, like paper, glass, aluminum, and plastic. Each material is recycled differently,tell me the type to item you want to recycle.",
    "recycle":"Recycling is the process of converting waste materials into new materials and objects.",
    "why should i recycle": "Recycling helps to reduce pollution, conserve resources, and lower energy consumption.",
    "can i recycle plastic": "Yes, most plastics can be recycled. Check with your local recycling guidelines for specific types.",
    "how do i recycle electronics": "You can recycle electronics by taking them to a dedicated e-waste recycling facility or returning them to a store that accepts electronics for recycling.",
    "what materials can be recycled": "Common recyclable materials include paper, cardboard, plastic, glass, and metals like aluminum and steel.",
    "where can i recycle": "You can recycle at your local recycling center. Many cities offer curbside recycling programs.",
    "how does recycling work": "Recycling works by collecting used materials, processing them, and turning them into new products.",
    "hello": "Hi! How can I help you today?",
    "help": "I can help you with recycling-related questions. Just ask me anything!",
    "who am i": "You are Tawab.",
    "can i recycle glass bottles": "Yes, glass bottles are recyclable. Make sure to clean them before recycling.",
    "can aluminum cans be recycled": "Yes, aluminum cans are 100% recyclable and can be reused to make new products.",
  "what is e-waste recycling": "E-waste recycling refers to the process of recycling electronic devices like phones, computers, and TVs.",
  "what are the benefits of recycling": "Recycling reduces the need for raw materials, saves energy, reduces pollution, and conserves natural resources.",
  "how to recycle batteries": "Used batteries can be recycled at special battery collection centers or stores that accept them.",
  "can i recycle food waste": "Food waste can often be composted, but it depends on your local recycling program. Check with them for specifics.",
  "what is composting": "Composting is a natural process of recycling organic matter, such as leaves and food scraps, into a valuable fertilizer.",
"can i recycle pizza boxes": "Pizza boxes can be recycled only if they are free from grease and food residue. Otherwise, it's best to compost them.",
"can i recycle styrofoam": "Styrofoam is not widely recyclable. Check with your local recycling center for specific rules in your area.",
"what do recycling symbols mean": "Recycling symbols usually indicate the type of material. Numbers within the triangle symbol tell you which type of plastic it is.",
"can i recycle shredded paper": "Shredded paper is often not accepted by curbside recycling programs, but you can take it to special recycling facilities or compost it.",
"what is e-waste": "E-waste refers to discarded electronic devices like phones, computers, and TVs. These items should be taken to e-waste recycling centers.",
"can i recycle glass jars": "Yes, clean glass jars can be recycled. Make sure to remove any lids before recycling.",
"can clothes be recycled": "Yes, many textiles and clothes can be recycled or donated. Some facilities turn old clothes into new fabric.",
"what are recycling drop-off points": "Recycling drop-off points are locations where you can take recyclables that aren't accepted in regular curbside programs.",
"can i recycle batteries": "Batteries should be taken to a special recycling facility or a store that accepts used batteries for safe disposal.",
"what are the benefits of composting": "Composting reduces waste, enriches soil, and reduces the need for chemical fertilizers.",
"can i recycle metal cans": "Yes, both aluminum and steel cans can be recycled. Make sure they are clean and dry before recycling.",
"what happens if i don’t recycle": "If you don’t recycle, items may end up in landfills, contributing to pollution, wasted resources, and increased greenhouse gas emissions.",
"what can’t be recycled": "Items like plastic bags, greasy food containers, ceramics, and certain electronics may not be accepted by curbside recycling programs.",
"what is upcycling": "Upcycling is the process of transforming waste materials or unwanted products into new materials or items of higher quality or value.",
"can i recycle light bulbs": "Compact fluorescent light bulbs (CFLs) and LEDs can often be recycled at special drop-off points or stores that accept them.",
"can i recycle plastic bags": "Plastic bags are not typically accepted in curbside recycling programs but can be returned to grocery stores for recycling.",
"why do i need to clean recyclables": "Cleaning recyclables helps prevent contamination, ensuring that the materials can be properly processed and recycled.",
"can i recycle tin foil": "Yes, tin foil can be recycled as long as it is clean and free of food residue.",
"how can i recycle old clothes": "You can donate old clothes to charity or take them to textile recycling centers where they can be repurposed.",
"can i recycle cartons": "Yes, cartons like those for milk and juice are often recyclable. Check with your local recycling guidelines.",
"what is zero waste": "Zero waste is a philosophy that encourages redesigning resource life cycles so that all products are reused and no trash is sent to landfills.",
"can i recycle broken glass": "Broken glass should not be put in your recycling bin as it can be dangerous. Contact your local recycling center for proper disposal.",
"how do i recycle printer cartridges": "Printer cartridges can be recycled by returning them to the manufacturer or taking them to specific drop-off points at office supply stores.",
"can i recycle magazines": "Yes, magazines made of glossy paper can be recycled in most curbside programs.",
"what are the 3 r's of recycling": "The 3 R's stand for Reduce, Reuse, and Recycle, which are the core principles of minimizing waste.",
"can i recycle food wrappers": "Most food wrappers, especially those with foil or plastic layers, are not recyclable. Check for specific disposal guidelines.",
"how do i recycle plastic bottles": "Plastic bottles should be emptied, rinsed, and have the caps removed before placing them in your recycling bin.",
"can i recycle cardboard boxes": "Yes, cardboard boxes can be recycled. Break them down to save space in your bin and ensure they are free from food contamination.",
"can i recycle paper towels": "Paper towels are not recyclable due to contamination from food or liquids, but they can be composted if they are clean and made from natural fibers.",
"how do i recycle old electronics": "Old electronics can be recycled at e-waste centers or returned to stores that offer recycling programs for electronics.",
"can i recycle tupperware": "Plastic food containers like Tupperware can often be recycled if they are clean and have recycling symbols on them.",
"can i recycle cds and dvds": "CDs and DVDs are not typically accepted in curbside programs, but there are specialized facilities that recycle them.",
"how do i recycle newspapers": "Newspapers can be placed in your curbside recycling bin. Ensure they are dry and free from food waste.",
"can i recycle shoes": "Some shoe brands and recycling centers accept old shoes for recycling or donation. Check for local shoe recycling programs.",
"what is biodegradable": "Biodegradable materials are those that can be broken down by bacteria or other organisms, typically leading to minimal environmental impact.",
"can i recycle wine corks": "Natural corks can sometimes be recycled or composted. Synthetic corks should be checked with local facilities.",
"can i recycle toothpaste tubes": "Most toothpaste tubes are not recyclable due to the mixed materials. Some brands offer recycling programs for their packaging.",
"what is downcycling": "Downcycling refers to the process of recycling a material into a product of lower quality or value than the original item.",
"can i recycle aerosol cans": "Empty aerosol cans are often recyclable. Make sure they are completely empty before placing them in the recycling bin.",
"can i recycle wrapping paper": "Yes, but only non-metallic wrapping paper without glitter or plastic. Remove any tape before recycling.",
"can i recycle egg cartons": "Cardboard egg cartons are usually recyclable, while foam ones are not. Some cities accept plastic egg cartons.",
"how do i recycle milk jugs": "Rinse milk jugs thoroughly and remove the cap before placing them in your recycling bin.",
"can i recycle plastic utensils": "Plastic utensils are typically not recyclable due to their small size. Consider using reusable options instead.",
"what is a recycling contamination": "Contamination occurs when non-recyclable items or dirty recyclables are placed in the recycling bin, making it harder to process.",
"how do i recycle ink cartridges": "You can recycle ink cartridges by sending them back to the manufacturer or dropping them off at office supply stores.",
"can i recycle clothes hangers": "Metal hangers can often be recycled at scrap metal facilities, while plastic ones may not be accepted in curbside recycling.",
"can i recycle drink cartons": "Yes, many drink cartons, such as those for milk and juice, can be recycled. Check local guidelines for specific rules.",
"can i recycle hardcover books": "Hardcover books can be recycled if the covers are removed. Some recycling programs only accept the paper pages.",
"how do i recycle christmas trees": "Many cities have special recycling programs for Christmas trees, turning them into mulch or compost.",
"can i recycle pens": "Most pens are not recyclable, but some companies offer special recycling programs for writing instruments.",
"can i recycle bread bags": "Plastic bread bags are often recyclable at plastic film drop-off points at grocery stores, but not in curbside bins.",
"how do i recycle plastic straws": "Plastic straws are typically not recyclable due to their small size and type of plastic. Consider reusable straws as an alternative.",
"can i recycle glass light bulbs": "Incandescent and halogen light bulbs are not recyclable. CFL and LED bulbs can be recycled at specific drop-off locations.",
"can i recycle greeting cards": "Yes, most paper-based greeting cards are recyclable, but avoid cards with glitter, foil, or embellishments.",
"what is single-stream recycling": "Single-stream recycling means that all recyclable materials are placed in a single bin, making it more convenient for households.",
"can i recycle bubble wrap": "Bubble wrap can be recycled, but not in curbside bins. Take it to a plastic film recycling drop-off at grocery stores.",
"can i recycle plastic bottle caps": "Most plastic bottle caps are recyclable, but it’s best to check with your local recycling program. Some places ask you to remove the caps before recycling.",
"what should i do with old paint cans": "Empty paint cans can be recycled as scrap metal, but if they contain paint, check with your local hazardous waste disposal program.",
"can i recycle plastic toys": "Plastic toys are often made of mixed materials and are not accepted in curbside recycling. Consider donating them or checking for specialized recycling programs.",
"how do i recycle appliances": "Old appliances should be taken to a special recycling center or appliance recycling program to safely dispose of them.",
"can i recycle aluminum foil": "Clean aluminum foil can be recycled. If it’s covered in food, try cleaning it or reuse it if possible.",
"how do i recycle prescription bottles": "Empty, clean prescription bottles are sometimes recyclable, but check with your local recycling program for specific rules.",
"cds and dvds": "CDs and DVDs are not accepted in most curbside programs. Check for specialized recycling programs or e-waste facilities.",
"what is the recycling symbol for plastic": "The recycling symbol for plastic usually includes a number inside a triangle. The number tells you what type of plastic it is and whether it's recyclable.",
"how do i recycle cooking oil": "Used cooking oil should not be poured down the drain. Some cities have collection points, or you can look for local programs that recycle used oil into biofuel.",
"can i recycle envelopes with windows": "Yes, most curbside recycling programs accept envelopes with plastic windows. The sorting process usually separates the paper from the plastic.",
"can i recycle bubble mailers": "Bubble mailers made of mixed materials (plastic and paper) are not typically recyclable. If it’s made entirely of plastic, it may be accepted at plastic film recycling drop-offs.",
"can i recycle chip bags": "Most chip bags are made of mixed materials (plastic and foil), making them non-recyclable in curbside programs.",
"what should i do with old furniture": "Old furniture can be donated, upcycled, or taken to a special recycling facility. Some cities offer bulky item pick-up services for large pieces.",
"how do i recycle old textbooks": "Textbooks can be recycled by removing the hardcovers and placing the paper pages in your recycling bin.",
"can i recycle plastic containers with food residue": "Plastic containers with food residue should be rinsed clean before recycling to avoid contamination.",
"what do the numbers on plastic mean": "The numbers on plastic containers indicate the type of plastic. Numbers 1 and 2 are commonly recyclable, while others may require specialized programs.",
"can i recycle coffee cups": "Most disposable coffee cups are not recyclable due to their plastic lining. The lids may be recyclable, so check with your local program.",
"how do i recycle plant pots": "Plastic plant pots are often accepted in recycling programs if they are clean. Some garden centers also take them back for recycling.",
"can i recycle used tissues": "Used tissues are not recyclable due to contamination, but they can be composted if they are made of natural materials.",
"how do i recycle toothbrushes": "Toothbrushes are not recyclable in regular curbside programs, but some companies offer mail-in recycling for oral care products.",
"can i recycle dirty aluminum cans": "Aluminum cans should be rinsed clean before recycling to avoid contamination in the recycling stream.",
"what happens to recycling after it's collected": "Once collected, recyclables are sorted, cleaned, and processed into raw materials to be used in manufacturing new products.",
"how do i recycle cereal boxes": "Cereal boxes made of cardboard can be recycled. Be sure to flatten the box and remove any plastic liners before recycling.",

//general question aprat from recycling
"hi": "Hello! How can I assist you today?",
"hey": "Hey! How can I help you?",
"how are you": "I'm just a bot, but I'm here to help! How can I assist you?",
"good morning": "Good morning! How can I assist you today?",
"good afternoon": "Good afternoon! How can I help with your recycling questions?",
"good evening": "Good evening! How can I assist you?",
"thank you": "You're welcome! Feel free to ask if you have more questions.",
"thanks": "No problem! I'm happy to help.",
"what’s up": "Not much! I'm here to help you with recycling information.",
"bye": "Goodbye! Feel free to come back if you have more questions.",
"see you": "See you later! Don’t hesitate to ask if you need more assistance.",
"goodbye": "Goodbye! Take care and recycle responsibly!",
"can you help me": "Absolutely! What would you like to know about recycling?",
"what can you do": "I can help answer questions related to recycling and provide information on how to recycle properly.",
"who are you": "I'm a recycling chatbot, here to help you with any questions you have about recycling!",
"nice to meet you": "Nice to meet you too! How can I assist you today?",
"how do you work": "Just ask me a question, and I'll do my best to provide a helpful answer!",

  };

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, isBot: false };
      setMessages([...messages, userMessage]);

      const botResponse = getBotResponse(input);
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: botResponse, isBot: true }]);
      }, 1000);

      setInput("");
    }
  };

  // Get bot's response based on fuzzy sentence matching
  const getBotResponse = (message) => {
    const cleanedMessage = message.toLowerCase().trim();

    // Use string-similarity to find the closest matching predefined question
    const matches = stringSimilarity.findBestMatch(cleanedMessage, Object.keys(predefinedResponses));

    // If similarity rating is higher than a threshold (e.g., 0.6), use the closest match
    if (matches.bestMatch.rating > 0.6) {
      return predefinedResponses[matches.bestMatch.target];
    } else {
      return "Sorry, I didn't understand that. Could you please rephrase?";
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        <div className="chat-header">Recycling Chatbot</div>
        <div className="chat-body">
          {messages.map((msg, index) => (
            <div key={index} className={msg.isBot ? "bot-message" : "user-message"}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
