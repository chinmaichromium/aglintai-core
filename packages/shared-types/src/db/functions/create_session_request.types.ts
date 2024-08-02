import { Database } from "../schema.types";
import { Type } from "../utils.types";
import { CustomRequestPayload } from "./common.types";
import type { FunctionType } from "./index.types";

export type CustomCreateSessionRequest = FunctionType<
  "create_session_request",
  Type<
    Database["public"]["Functions"]["create_session_request"]["Args"],
    {
      request?: CustomRequestPayload;
    }
  >,
  {}
>;
