const path = require('path');

module.exports = {
  template: (variables, { tpl }) => {
    const componentName = `${variables.componentName}`.replace('Svg', '');
    return tpl`
${variables.imports};

${variables.interfaces};

export const ${`${componentName}Icon`} = (${variables.props}) => (
  ${variables.jsx}
);`;
  },
  indexTemplate: (filePaths) => {
    const exportEntries = filePaths.map((filePath) => {
      const basename = path.basename(filePath, path.extname(filePath));
      return `export * from './${basename}'`;
    });
    return exportEntries.join('\n');
  },
};
