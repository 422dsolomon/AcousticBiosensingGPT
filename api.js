import { Configuration, OpenAIApi } from 'openai'
const openaiApiKey = "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"
const configuration = new Configuration({
  apiKey: openaiApiKey
})

export const openai = new OpenAIApi(configuration)