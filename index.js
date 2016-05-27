// ESLint config for Bitmatica's Javascript style guide
// https://github.com/bitmatica/javascript-style-guide
//
// Based on Airbnb's Javascript style guide and ESLint config
// https://github.com/airbnb/javascript

module.exports = {
  "extends": "airbnb",
  
  "rules": {
    // Whitespace
    // ----------
    
    // Switch cases should be indented in switch block.
    "indent": [2, 2, {"SwitchCase": 1}],
    
    // We've decided to keep block indentation on blank lines.
    // Trailing whitespace on code or comment lines is still prohibited, though.
    "no-trailing-spaces": [2, {"skipBlankLines": true}],
    
    // Prohibit multiple consecutive spaces except in variable declaration.
    // Sometimes aligning variable values aids visual grouping/comparison. Use your judgement.
    "no-multi-spaces": [2, {exceptions: {"VariableDeclarator": true}}],
    
    // For single line object literals, there must 0 spaces before and 1 space after colon.
    // For multi-line object literals, there must 0 spaces before and 1 or more after colon.
    // This allows (but does not require) aligning values of a multi-line object literal.
    "key-spacing": [2, {
      "singleLine": {"beforeColon": false, "afterColon": true, "mode": "strict"},
      "multiLine":  {"beforeColon": false, "afterColon": true, "mode": "minimum"},
    }],
    
    // Prohibit spaces inside object literals.
    // This is consistent with no spaces inside paretheses or square brackets.
    "object-curly-spacing": [2, "never"],
    "react/jsx-curly-spacing": [2, "never"],
    
    
    // Misc
    // ----
    
    // Allow function use before definition.
    // This is okay because definition is hoisted.
    "no-use-before-define": [2, "nofunc"],
    
    // Prohibit unused variables except for function arguments.
    // When overriding a function or implementing a callback, it can be nice to
    // list all of the arguments, even if not all are used.
    "no-unused-vars": [2, {"args": "none"}],
    
    // Allow functions to return values in some cases and nothing in other cases.
    "consistent-return": 0,
    
    // Allow return in else blocks.
    // While a return in an else block can technically be moved out that block,
    // leaving it inside can be more explict and, potentially, consistent with if block.
    "no-else-return": 0,
    
    // Require double quotes, not single quotes, in both Javascript and JSX.
    // Using single quotes is allowed when it avoids an escape, i.e. 'he said "hi"'.
    // We chose double quotes because, while they aren't popular in Javascript,
    // they are popular -- if not mandatory -- almost everywhere else.
    "quotes": [2, "double", "avoid-escape"],
    "jsx-quotes": [2, "prefer-double"],
    
    // Limit lines to 100 characters except in JSX/HTML.
    "max-len": [2, 100, {ignorePattern: "<.+>"}],
    
    // Allow leading/trailing underscores in identifiers.
    // There is a common convention of indicating that certain object methods
    // or attributes are "private" by starting their name with a single underscore.
    // We occasionally use this convention.
    "no-underscore-dangle": 0,
    
    // Don't require a radix when using parseInt().
    // Before ES5, parseInt would attempt to "intelligently" autodetect the
    // radix -- for example, assuming base 8 when a leading 0 was provided.
    // Since ES5, however, base 10 is always applied when no radix is provided.
    // Because we have no plans to target pre-ES5 environments, no radix is needed.
    "radix": 0,
    
    
    // ES6 Features
    // ----------
    
    // Allow string concatenation.
    // While template strings are generally preferable, occasionally string
    // concatenation is simpler/shorter.
    "prefer-template": 0,
    
    // Allow use of `arguments`.
    // Using `arguments` can be handy when you want to declare each function
    // argument in the paramater list but still use the combined arguments
    // as an array in the same function.
    "prefer-rest-params": 0,
    
    // Allow multiple import statements from the same file.
    // Desirable when importing default value in one statement and named values in another.
    "import/no-duplicates": 0,
    "no-duplicate-imports": 0,
    
    
    // React and JSX
    // -------------
    
    // Don't require React components be defined with ES6 class extend statements.
    // ES6 classes don't yet support nice features like statics, mixins, and autobinding.
    "react/prefer-es6-class": 0,
    
    // Don't require simple React components be defined as stateless functions.
    // For consistency, all our React components are currently defined with createClass.
    "react/prefer-stateless-function": 0,
    
    // Allow multiple components to be defined in the same file.
    // If a sub-component is only ever used by one parent parent component, then
    // it can make sense to include it in the same file as the parent.
    "react/no-multi-comp": 0,
    
    // Require JSX boolean attributes always include the boolean literal.
    // <Comp disabled={true} /> is more explicit and obvious than <Comp disabled />
    "react/jsx-boolean-value": [2, "always"],
    
    // Enforce standard order of React component methods and attributes.
    // The order is:
    //   - static methods
    //   - lifecycle methods and attributes (in default rule order, see below)
    //   - miscellaneous helper methods and attributes
    //   - event handler methods (starting with "on", e.g. "onClick")
    //   - render helper methods (starting with "render", e.g. "renderHeader")
    //   - render
    //
    // Read more about this rule and see the order of lifecycle properties at
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    "react/sort-comp": [2, {
      order: [
        "static-methods",
        "lifecycle",
        "everything-else",
        "/^on.+$/",
        "/^render.+$/",
        "render"
      ],
    }],
  },
};
