// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import CardList from "./CardList.js";

const monsters = [
  {
    name: "Snallygaster",
    img: "https://merriam-webster.com/assets/mw/images/gallery/gal-wap-slideshow-slide/monster-snallygaster-photo-1183@2x.jpg",
    description: `a mythical nocturnal creature that is reported chiefly from rural Maryland, is reputed to be part reptile and part bird, and is said to prey on poultry and children`,
  },
  {
    name: "Dybbuk",
    img: "https://merriam-webster.com/assets/mw/images/gallery/gal-wap-slideshow-slide/dybbuk-illustration-1571@2x.jpg",
    description: `"A dybbuk is the wandering soul of a dead person. You don't want to make the mistake of inviting one into your home. You don't have to be Jewish to figure that out." — Roger Ebert, review of the film A Serious Man, October 7, 2009`,
  },
  {
    name: "Werewolf",
    img: "https://merriam-webster.com/assets/mw/images/gallery/gal-wap-slideshow-slide/monster-werewolf-photo-1184@2x.jpg",
    description: `a person transformed temporarily or permanently into a wolf or capable of assuming a wolf's form : lycanthrope

    Are there werewolves where there aren’t wolves?
    
    Lycanthropy, the delusion that you have turned into a wolf or another beast, has some ancient roots, and belief in werewolves can be found around the world. Other dangerous animals — such as bears, tigers, or hyenas — have historically filled the wolf's role in lycanthropy in countries where wolves are not common.`,
  },
  {
    name: "Hodag",
    img: "https://merriam-webster.com/assets/mw/images/gallery/gal-wap-slideshow-slide/monster-hodag-photo-1186@2x.jpg",
    description: `a mythical animal reported chiefly from Wisconsin and Minnesota, noted for its ugliness, lateral horns, and hooked tail, and reputed to be outstanding in both ferocity and melancholy`,
  },
];

const App = () => {
  return (
    <div>
      <CardList monsters={monsters}/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
