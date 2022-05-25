const CORS_CONFIGURATION = Object.freeze({
    origin: ["*"],
    methods: ["POST", "GET", "OPTIONS"],
    allowedHeaders: ["content-type", "access-control-allow-credentials"],
    credentials: true,
    // preflightContinue: true,
});

export default CORS_CONFIGURATION;
