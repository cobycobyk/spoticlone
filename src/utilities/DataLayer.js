import { createContext, useContext, useReducer} from 'react';

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children}) => (
  <DataLayerContext.Provider vlaue={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);