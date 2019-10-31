import React, {useContext} from 'react';

const LikesContext = React.createContext([]);

export const LikesProvider = LikesContext.Provider;
export const LikesConsumer = LikesContext.Consumer;
export default LikesContext;
