const CORS_CONFIGURATION = Object.freeze({
  origin: ["http://localhost:4000"],
  methods: ["POST", "GET", "OPTIONS"],
  allowedHeaders: ["content-type", "access-control-allow-credentials"],
  credentials: true,
  preflightContinue: true,
});

export default CORS_CONFIGURATION;
