const { Appsignal } = require("@appsignal/nodejs");

new Appsignal({
  active: true,
  name: "gateway-fed",
  disableDefaultInstrumentations: ["@opentelemetry/instrumentation-graphql"],
  logLevel: "trace"
});
