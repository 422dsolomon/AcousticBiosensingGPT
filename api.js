import { Configuration, OpenAIApi } from 'openai'
const openaiApiKey = "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"
const configuration = new Configuration({
  apiKey: openaiApiKey
})

export const openai = new OpenAIApi(configuration)