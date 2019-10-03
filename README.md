### Config File

Add a `config.js` file to the root of the project with the following code.

```
module.exports = config = {
  to: "to@email.com",
  user: "user@email.net",
  pass: "password",
  host: "host.domain.com"
};
```

Then import the module in the `index.js` file.
