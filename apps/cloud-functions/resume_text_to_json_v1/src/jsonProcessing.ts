import { zodToJsonSchema } from "zod-to-json-schema";

import { ChatOpenAI } from "langchain/chat_models/openai";
import { PromptTemplate } from "langchain/prompts";
import { JsonOutputFunctionsParser } from "langchain/output_parsers";
import { schema } from "./schema";
import LoggerV2 from "./logger";

const TEMPLATE = `Extract the requested fields from the input text only.
Do not add or generate extra information use only given text.
The field "entity" refers to the first mentioned entity in the input.
Input:

{input}`;

export const parseJson = async (
  currentMessageContent: string,
  logger: LoggerV2
) => {
  let totalCompletionTokens = 0;
  let totalPromptTokens = 0;
  let totalExecutionTokens = 0;
  logger.createLog({
    message: "calling openai for resume json",
    subProcess: "parseJson",
  });
  const prompt = PromptTemplate.fromTemplate(TEMPLATE);
  const model = new ChatOpenAI({
    callbacks: [
      {
        handleLLMEnd: (output, runId, parentRunId?, tags?) => {
          const { completionTokens, promptTokens, totalTokens } =
            output.llmOutput?.tokenUsage;
          totalCompletionTokens += completionTokens ?? 0;
          totalPromptTokens += promptTokens ?? 0;
          totalExecutionTokens += totalTokens ?? 0;
        },
      },
    ],
    temperature: 0.5,
    modelName: "gpt-3.5-turbo-1106",
    // tokens.length < 1000 ? "gpt-3.5-turbo-0613" : "gpt-3.5-turbo-16k-0613",
    // verbose: true,
    timeout: 100 * 1000, //30sec
  });
  const functionCallingModel = model.bind({
    functions: [
      {
        name: "output_formatter",
        description: "Should always be used to properly format output",
        parameters: zodToJsonSchema(schema),
      },
    ],
    function_call: { name: "output_formatter" },
  });

  /**
   * Returns a chain with the function calling model.
   */
  const chain = prompt
    .pipe(functionCallingModel)
    .pipe((data) => {
      // JSON.parse(data.lc_kwargs.additional_kwargs.function_call);
      return data;
    })
    .pipe(new JsonOutputFunctionsParser());

  const result = await chain.invoke({
    input: currentMessageContent,
  });
  return {
    result,
    token: { totalCompletionTokens, totalPromptTokens, totalExecutionTokens },
  };
};
