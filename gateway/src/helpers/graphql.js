const fs = require('fs');
const path = require('path');
const { merge } = require('lodash');
const { print } = require('graphql');

const rootDir = path.resolve(__dirname, '..');

class GraphQLHelper {
  get typeDefs() {
    const definitionsPath = `${rootDir}/definitions`;
    if (!fs.existsSync(definitionsPath)) {
      throw new Error('You did not define a type definition folder!');
    }

    let filesGraphQL = searchRecursive(definitionsPath, '.graphql');
    let filesJs = searchRecursive(definitionsPath, '.js');

    let definitions = filesGraphQL.reduce((acc, file) => {
      acc += fs.readFileSync(file, { encoding: 'utf8' }) + '\n';
      return acc;
    }, '');

    for (let key in filesJs) {
      const currentDefinitions = require(filesJs[key]);
      if (Array.isArray(currentDefinitions)) {
        definitions += currentDefinitions.reduce((acc, typeDef) => {
          acc += print(typeDef);
          return acc;
        }, '');
      } else {
        definitions += print(currentDefinitions);
      }
    }

    return definitions;
  }

  get dataSources() {
    let dataSources = {};

    const dataSourcesPath = `${rootDir}/dataSources`;
    if (fs.existsSync(dataSourcesPath)) {
      let files = searchRecursive(dataSourcesPath, '.js');
      for (let key in files) {
        const currentDataSource = require(files[key]);
        dataSources = merge(dataSources, {
          [currentDataSource.name]: new currentDataSource(),
        });
      }
    }

    return dataSources;
  }

  get resolvers() {
    let resolvers = {};

    const resolversPath = `${rootDir}/resolvers`;
    if (fs.existsSync(resolversPath)) {
      let files = searchRecursive(resolversPath, '.js');
      for (let key in files) {
        resolvers = merge(resolvers, require(files[key]));
      }
    }

    return resolvers;
  }
}

const searchRecursive = (dir, pattern) => {
  let results = [];

  fs.readdirSync(dir).forEach(dirInner => {
    dirInner = path.resolve(dir, dirInner);

    let stat = fs.statSync(dirInner);

    if (stat.isDirectory()) {
      results = results.concat(searchRecursive(dirInner, pattern));
    }

    if (stat.isFile() && dirInner.match(pattern)) {
      results.push(dirInner);
    }
  });

  return results;
};

module.exports = new GraphQLHelper();
