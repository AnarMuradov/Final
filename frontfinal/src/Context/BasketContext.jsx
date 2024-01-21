import React, { createContext } from "react";
import useLocalStorage from "use-local-storage";
export const BasketContext = createContext();
const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage("basket", []);

  function addbasket(item) {
    const elementindex = basket.findIndex((x) => x._id === item._id);
    if (elementindex === -1) {
      setBasket([...basket, { ...item, count: 1 }]);
      return;
    }
    removebasket(item);
  }
  function removebasket(item) {
    setBasket(basket.filter((x) => x._id !== item._id));
  }
  function increase(item) {
    const elementindex = basket.findIndex((x) => x._id === item._id);
    basket[elementindex].count++;
    setBasket([...basket]);
  }
  function decrease(item) {
    const elementindex = basket.findIndex((x) => x._id === item._id);
    if (basket[elementindex].count === 1) {
      return;
    }

    basket[elementindex].count--;
    setBasket([...basket]);
  }
  function isbasket(item) {
    return basket.findIndex((x) => x._id === item._id) === -1 ? false : true;
  }
  return (
    <BasketContext.Provider
      value={{ basket, addbasket, removebasket, increase, decrease, isbasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
