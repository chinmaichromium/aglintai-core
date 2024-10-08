drop function if exists "public"."update_user"(first_name text, last_name text, employment text, "position" text, phone text, scheduling_settings json, user_id uuid, recruiter_id uuid, department_id integer, manager_id uuid, role_id uuid, office_location_id integer, linked_in text, profile_image text);

alter table "public"."recruiter" alter column "scheduling_settings" set default '{"timeZone": {"utc": "+05:30", "name": "(GMT+05:30) Mumbai, Delhi, Bengaluru, Kolkata, Chennai", "label": "Asia/Calcutta (GMT+05:30)", "tzCode": "Asia/Calcutta"}, "break_hour": {"end_time": "13:00", "start_time": "12:00"}, "totalDaysOff": [{"date": "01 Jan 2024", "event_name": "New Year Day"}, {"date": "16 Jan 2024", "event_name": "Martin Luther King Jr. Day"}, {"date": "19 Feb 2024", "event_name": "Presidents Day"}, {"date": "27 May 2024", "event_name": "Memorial Day"}, {"date": "19 Jun 2024", "event_name": "National Independence Day"}, {"date": "04 Jul 2024", "event_name": "Independence Day"}, {"date": "02 Sep 2024", "event_name": "Labor Day"}, {"date": "14 Oct 2024", "event_name": "Columbus Day"}, {"date": "11 Nov 2024", "event_name": "Veterans Day"}, {"date": "28 Nov 2024", "event_name": "Thanksgiving Day"}, {"date": "25 Dec 2024", "event_name": "Christmas Day"}], "workingHours": [{"day": "sunday", "isWorkDay": false, "timeRange": {"endTime": "17:00", "startTime": "09:00"}}, {"day": "monday", "isWorkDay": true, "timeRange": {"endTime": "17:00", "startTime": "09:00"}}, {"day": "tuesday", "isWorkDay": true, "timeRange": {"endTime": "17:00", "startTime": "09:00"}}, {"day": "wednesday", "isWorkDay": true, "timeRange": {"endTime": "17:00", "startTime": "09:00"}}, {"day": "thursday", "isWorkDay": true, "timeRange": {"endTime": "17:00", "startTime": "09:00"}}, {"day": "friday", "isWorkDay": true, "timeRange": {"endTime": "17:00", "startTime": "09:00"}}, {"day": "saturday", "isWorkDay": false, "timeRange": {"endTime": "17:00", "startTime": "09:00"}}], "interviewLoad": {"dailyLimit": {"type": "Interviews", "value": 8}, "weeklyLimit": {"type": "Interviews", "value": 41}}, "debrief_defaults": {"sourcer": false, "recruiter": false, "hiring_manager": true, "previous_interviewers": false, "recruiting_coordinator": false}, "schedulingKeyWords": {"free": ["Personal Time", "Break", "Team Lunch", "Networking Event", "Office Hours", "Casual Meetup"], "outOfOffice": ["Maternity Leave", "Vacation", "PTO", "Out of Office"], "SoftConflicts": ["Daily Standup", "Project Review", "Sprint Planning", "Strategy Session", "Team Briefing"], "recruitingBlocks": ["Dedicated Recruiting", "Recruiting Block"]}}'::jsonb;

alter table "public"."recruiter_user" alter column "scheduling_settings" set default '{"timeZone": {"utc": "-08:00", "name": "(GMT-08:00) Los Angeles, San Diego, San Jose, San Francisco, Seattle", "label": "America/Los_Angeles (GMT-08:00)", "tzCode": "America/Los_Angeles"}, "break_hour": {"end_time": "13:30", "start_time": "13:00"}, "totalDaysOff": [{"date": "01 Jan 2024", "event_name": "New Year Day"}, {"date": "16 Jan 2024", "event_name": "Martin Luther King Jr. Day"}, {"date": "19 Feb 2024", "event_name": "Presidents Day"}, {"date": "27 May 2024", "event_name": "Memorial Day"}, {"date": "19 Jun 2024", "event_name": "Juneteenth National Independence Day"}, {"date": "04 Jul 2024", "event_name": "Independence Day"}, {"date": "02 Sep 2024", "event_name": "Labor Day"}, {"date": "14 Oct 2024", "event_name": "Columbus Day"}, {"date": "11 Nov 2024", "event_name": "Veterans Day"}, {"date": "28 Nov 2024", "event_name": "Thanksgiving Day"}, {"date": "25 Dec 2024", "event_name": "Christmas Day"}], "workingHours": [{"day": "sunday", "isWorkDay": false, "timeRange": {"endTime": "17:00", "startTime": "09:00"}}, {"day": "monday", "isWorkDay": true, "timeRange": {"endTime": "17:00", "startTime": "09:00"}}, {"day": "tuesday", "isWorkDay": true, "timeRange": {"endTime": "17:00", "startTime": "09:00"}}, {"day": "wednesday", "isWorkDay": true, "timeRange": {"endTime": "17:00", "startTime": "09:00"}}, {"day": "thursday", "isWorkDay": true, "timeRange": {"endTime": "17:00", "startTime": "09:00"}}, {"day": "friday", "isWorkDay": true, "timeRange": {"endTime": "17:00", "startTime": "09:00"}}, {"day": "saturday", "isWorkDay": false, "timeRange": {"endTime": "17:00", "startTime": "09:00"}}], "interviewLoad": {"dailyLimit": {"type": "Hours", "value": 4}, "weeklyLimit": {"type": "Hours", "value": 20}}, "schedulingKeyWords": {"free": ["Personal Time", "Break", "Team Lunch", "Networking Event", "Office Hours", "Casual Meetup"], "outOfOffice": ["Maternity leave", "vacation", "pto", "out of office", "ooo"], "SoftConflicts": ["Daily Standup", "Sync Up", "Project Review", "Sprint Planning", "Strategy Session", "Team Briefing"], "recruitingBlocks": ["dedicated recruiting", "Recruiting Block"]}}'::jsonb;


