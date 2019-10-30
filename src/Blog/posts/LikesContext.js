import React, {useContext} from 'react';
const saved = {}
saved.likes =  JSON.parse(localStorage.getItem("k2BlogLikes")) || [];
saved.add = function(id){
    this.likes.push(id)
    localStorage.setItem("k2BlogLikes", JSON.stringify(this.likes));

}
saved.remove = function(id){
    this.likes.splice(this.likes.indexOf(id), 1);
    localStorage.setItem("k2BlogLikes", JSON.stringify(this.likes));
}
const LikesContext = React.createContext(saved);

export const LikesProvider = LikesContext.Provider;
export const LikesConsumer = LikesContext.Consumer;
export default LikesContext;
