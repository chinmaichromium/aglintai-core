alter table "public"."candidate_request_availability" add column "user_timezone" text;
alter table "public"."candidate_request_availability" add column "booking_confirmed" boolean not null default false;