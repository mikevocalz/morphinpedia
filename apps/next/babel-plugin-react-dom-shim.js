// File: /apps/next/babel-plugin-react-dom-shim.js
module.exports = function() {
  return {
    visitor: {
      ImportDeclaration(path) {
        // Replace imports from react-dom with imports from react-dom/client
        if (path.node.source.value === 'react-dom') {
          const specifiers = path.node.specifiers;
          
          // Check if importing hydrate or unmountComponentAtNode
          for (let i = 0; i < specifiers.length; i++) {
            const specifier = specifiers[i];
            
            if (specifier.imported && 
                (specifier.imported.name === 'hydrate' || 
                 specifier.imported.name === 'render' ||
                 specifier.imported.name === 'unmountComponentAtNode')) {
              
              // Create new import from react-dom/client
              const newImport = path.scope.generateUidIdentifier('reactDOMClient');
              
              // Add the new import
              path.insertBefore(
                t.importDeclaration(
                  [t.importSpecifier(newImport, t.identifier('createRoot'))],
                  t.stringLiteral('react-dom/client')
                )
              );
              
              // Replace the old import
              path.remove();
              
              // Create shim implementations
              path.insertAfter(
                t.variableDeclaration('const', [
                  t.variableDeclarator(
                    t.identifier('hydrate'),
                    t.arrowFunctionExpression(
                      [t.identifier('element'), t.identifier('container'), t.identifier('callback')],
                      t.blockStatement([
                        t.variableDeclaration('const', [
                          t.variableDeclarator(
                            t.identifier('root'),
                            t.callExpression(t.identifier('hydrateRoot'), [
                              t.identifier('container'),
                              t.identifier('element')
                            ])
                          )
                        ]),
                        t.ifStatement(
                          t.identifier('callback'),
                          t.expressionStatement(
                            t.callExpression(t.identifier('callback'), [])
                          )
                        ),
                        t.returnStatement(
                          t.objectExpression([
                            t.objectProperty(
                              t.identifier('unmount'),
                              t.arrowFunctionExpression(
                                [],
                                t.callExpression(
                                  t.memberExpression(t.identifier('root'), t.identifier('unmount')),
                                  []
                                )
                              )
                            )
                          ])
                        )
                      ])
                    )
                  )
                ])
              );
            }
          }
        }
      }
    }
  };
};