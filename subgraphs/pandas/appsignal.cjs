const { Appsignal } = require("@appsignal/nodejs");

new Appsignal({
  active: true,
  name: "pandas-fed",
  logLevel: "trace"
});
