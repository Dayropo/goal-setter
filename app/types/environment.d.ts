namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    MONGODB_URI: string
    GOOGLE_ID: string
    GOOGLE_SECRET: string
    NEXTAUTH_SECRET: string
  }
}
