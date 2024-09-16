import { NextResponse } from 'next/server';

export const createPostRoute = (schema: any, func: any) => {
  const Post = async (req: Request) => {
    try {
      const { payload } = await req.json();
      let parsed_body = schema.parse(payload);
      if (schema) {
        parsed_body = schema.parse(payload);
      } else {
        parsed_body = payload;
      }
      const response = await func(parsed_body);
      return NextResponse.json(response, {
        status: 200,
      });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  };

  return Post;
};
