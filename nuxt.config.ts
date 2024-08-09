// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      stripePublicKey: process.env.STRIPE_PUBLIC_KEY,
      MY_ENV_VARIABLE: process.env.MY_ENV_VARIABLE
    },
    private: {
      stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    },
}
})
