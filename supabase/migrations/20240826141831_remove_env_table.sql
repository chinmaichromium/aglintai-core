revoke delete on table "public"."env" from "anon";

revoke insert on table "public"."env" from "anon";

revoke references on table "public"."env" from "anon";

revoke select on table "public"."env" from "anon";

revoke trigger on table "public"."env" from "anon";

revoke truncate on table "public"."env" from "anon";

revoke update on table "public"."env" from "anon";

revoke delete on table "public"."env" from "authenticated";

revoke insert on table "public"."env" from "authenticated";

revoke references on table "public"."env" from "authenticated";

revoke select on table "public"."env" from "authenticated";

revoke trigger on table "public"."env" from "authenticated";

revoke truncate on table "public"."env" from "authenticated";

revoke update on table "public"."env" from "authenticated";

revoke delete on table "public"."env" from "service_role";

revoke insert on table "public"."env" from "service_role";

revoke references on table "public"."env" from "service_role";

revoke select on table "public"."env" from "service_role";

revoke trigger on table "public"."env" from "service_role";

revoke truncate on table "public"."env" from "service_role";

revoke update on table "public"."env" from "service_role";

alter table "public"."env" drop constraint "env_pkey";

drop index if exists "public"."env_pkey";

drop table "public"."env";



