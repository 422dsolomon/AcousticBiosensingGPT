import { Configuration, OpenAIApi } from 'openai'
const openaiApiKey = "Your-API-KEY"
const configuration = new Configuration({
  apiKey: openaiApiKey
})

export const openai = new OpenAIApi(configuration)