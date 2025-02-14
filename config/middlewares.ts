export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ["https://ayna-assignment-frontend-tan.vercel.app"], // ✅ No trailing slash
      headers: ["Content-Type", "Authorization"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
