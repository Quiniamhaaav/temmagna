function analyzeFunctionCalls(ast) {
  const dependencies = {};

  function traverse(node) {
    if (node.type === 'FunctionCall') {
      const funcName = node.name;
      const args = node.args;
      dependencies[funcName] = args;
    }
    if (node.children) {
      node.children.forEach(traverse);
    }
  }

  traverse(ast);
  return dependencies;
}
