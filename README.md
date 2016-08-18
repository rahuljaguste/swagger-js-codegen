This project is not production-quality code.

I found two relevant projects on Github. First one generated API objects only. Second one generated only Models. And they did not work with React native.

I glued together those two projects adjusted them to work with react native. Because of this usage is a little bit awkward. I'm going to unify code in the future.

This is mostly for my use. But I'm sharing anyways - it might be usefull for some people.

# Generating APIs

```
var fs = require('fs');
var CodeGen = require('swagger-js-react-native-codegen').CodeGen;

var file = './swagger-codegen/swagger.json';
var swagger = JSON.parse(fs.readFileSync(file, 'UTF-8'));
var nodejsSourceCode = CodeGen.getNodeCode({ className: 'Api', swagger: swagger });

fs.writeFile("./swagger-codegen/Api.js", nodejsSourceCode);
```

# Generating models

Check `swagger-codegen-models/README.md` file