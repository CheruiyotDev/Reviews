const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error('No item selected try again with the correct selection');
};

export default getElement;
