import React from 'react';

function createComponent(json, options = {}) {
  const {types = {}} = options;
  if (typeof json === 'string') {
    return json;
  }

  if (Array.isArray(json)) {
    return json.map((item) => createComponent(item, options));
  }

  if (typeof json !== 'object' || json == undefined) {
    return null;
  }

  let {type, children, props} = json;
  if (!type || !types.hasOwnProperty(type)) {
    throw new Error(`Type ${type} is not defined`);
  }

  if (children) {
    children = createComponent(children, options);
  }

  const Component = types[type];
  return (
    <Component {...props}>
      {children}
    </Component>
  );
}

export default createComponent;
