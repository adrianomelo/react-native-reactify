import React from 'react';

/**
 * Creates a tree of React components based on the object description
 * of the components.
 *
 * @param {Object} object 
 * @param {React.Component[]} componentTypes
 * @returns {React.Component}
 */
function createComponent(object, componentTypes) {
  if (typeof object === 'string') {
    return object;
  }

  if (Array.isArray(object)) {
    return object.map((item) => createComponent(item, componentTypes));
  }

  if (typeof object !== 'object' || object == undefined) {
    return null;
  }

  let {type, ...objectWithoutType} = object;
  if (!type || !componentTypes.hasOwnProperty(type)) {
    throw new Error(`Type ${type} is not defined`);
  }

  let {children} = object;
  if (children) {
    children = createComponent(children, componentTypes);
  }

  const Component = componentTypes[type];
  return (
    <Component {...objectWithoutType}>
      {children}
    </Component>
  );
}

export default createComponent;
