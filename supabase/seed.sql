INSERT INTO
  auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    invited_at,
    confirmation_token,
    confirmation_sent_at,
    recovery_token,
    recovery_sent_at,
    email_change,
    email_change_sent_at,
    last_sign_in_at,
    raw_app_meta_data,
    raw_user_meta_data,
    is_super_admin,
    created_at,
    updated_at,
    email_confirmed_at,
    email_change_token_new,
    phone_confirmed_at,
    phone_change_sent_at,
    phone,
    phone_change_token,
    email_change_token_current,
    email_change_confirm_status,
    banned_until,
    reauthentication_token,
    reauthentication_sent_at,
    is_sso_user,
    phone_change,
    deleted_at
  )
VALUES
  (
    '00000000-0000-0000-0000-000000000000',
    '21c4f581-8208-402c-a9f3-a44610f9070f',
    'authenticated',
    'authenticated',
    'howard@quantumsoft.com',
    crypt ('Welcome@123', gen_salt ('bf')),
    '2024-04-26 13:51:25.653743+00',
    '',
    '2024-04-26 13:51:25.653743+00',
    'a28349e942e28592ab429016fb7d0a2d028193024efae13d842628c2',
    '2024-04-26 13:51:25.653743+00',
    '',
    '2024-04-26 13:51:25.653743+00',
    '2024-05-08 09:24:29.832123+00',
    '{"provider":"email","providers":["email"]}',
    '{"name":"Howard Wolowitz","role":"Company","roles":"Company","is_invite":"false","invite_user":{"name":"Steve","email":"time@aglinthq.com"}}',
    false,
    '2024-04-26 13:51:24.961465+00',
    '2024-05-08 09:24:29.834477+00',
    '2024-04-26 13:51:24.966621+00',
    false,
    '2024-04-26 13:51:24.966621+00',
    '2024-04-26 13:51:24.966621+00',
    '',
    '',
    '',
    0,
    '2024-04-26 13:51:24.966621+00',
    '',
    '2024-04-26 13:51:24.966621+00',
    FALSE,
    '',
    '2024-04-26 13:51:24.966621+00'
  ),
  (
    '00000000-0000-0000-0000-000000000000',
    '05408f9e-40fc-407c-af1d-958cff24d30b',
    'authenticated',
    'authenticated',
    'stuart@quantumsoft.com',
    crypt ('Welcome@123', gen_salt ('bf')),
    '2024-04-26 14:03:40.156327+00',
    '2024-04-26 14:03:40.156327+00',
    '2024-04-26 14:03:40.156327+00',
    '5f3de9ba0dc747cdeaca40059bf9148c4fca976e9da3a654d2386d59',
    '2024-04-26 14:03:40.156327+00',
    '',
    '2024-04-26 14:03:40.156327+00',
    '2024-05-08 12:28:17.739413+00',
    '{"provider":"email","providers":["email"]}',
    '{"name":"Stuart Bloom","role":"Company","roles":"Company","is_invite":"false","invite_user":{"name":"Steve","email":"time@aglinthq.com"}}',
    false,
    '2024-04-26 14:03:39.44994+00',
    '2024-05-08 12:28:17.741155+00',
    '2024-04-26 14:03:39.454449+00',
    '',
    '2024-04-26 14:03:40.156327+00',
    '2024-04-26 14:03:40.156327+00',
    '2024-04-26 14:03:39.454449+00',
    '',
    '',
    0,
    '2024-04-26 14:03:40.156327+00',
    '',
    '2024-04-26 14:03:40.156327+00',
    FALSE,
    '',
    '2024-04-26 14:03:40.156327+00'
  ),
  (
    '00000000-0000-0000-0000-000000000000',
    '02bc9267-0a7a-4e4c-9aff-d7f949782df3',
    'authenticated',
    'authenticated',
    'leonard@quantumsoft.com',
    crypt ('Welcome@123', gen_salt ('bf')),
    '2024-04-26 13:46:30.660309+00',
    '',
    '2024-04-26 13:46:30.660309+00',
    'ef122379b9ceaecdf73086efed5974d271359082fe4d3c6347f08b40',
    '2024-04-26 13:46:30.660309+00',
    '',
    '2024-04-26 13:46:30.660309+00',
    '2024-05-08 12:26:15.963952+00',
    '{"provider":"email","providers":["email"]}',
    '{"name":"Leonard Hofstadter","role":"Company","roles":"Company","is_invite":"false","invite_user":{"name":"Steve","email":"time@aglinthq.com"}}',
    false,
    '2024-04-26 13:46:29.937672+00',
    '2024-05-08 12:26:15.978746+00',
    '2024-04-26 13:46:29.963122+00',
    '',
    '2024-04-26 13:46:30.660309+00',
    '2024-04-26 13:46:30.660309+00',
    '2024-04-26 13:46:29.963122+00',
    '',
    '',
    0,
    '2024-04-26 13:46:30.660309+00',
    '',
    '2024-04-26 13:46:30.660309+00',
    FALSE,
    '',
    '2024-04-26 13:46:30.660309+00'
  ),
  (
    '00000000-0000-0000-0000-000000000000',
    'a0e4d0db-7492-48c3-bbc9-a8f7d8340f7f',
    'authenticated',
    'authenticated',
    'time@aglinthq.com',
    crypt ('Welcome@123', gen_salt ('bf')),
    '2024-04-29 11:38:02.670319+00',
    '',
    '2024-04-29 11:38:02.670319+00',
    '1880081d954407aaffc89bb7ce125aa1f4dc99ee6ae18a9c6c73601a',
    '2024-04-29 11:38:02.670319+00',
    '',
    '2024-04-29 11:38:02.670319+00',
    '2024-05-13 08:14:22.398569+00',
    '{"provider":"email","providers":["email"]}',
    '{"role":"Company"}',
    false,
    '2024-04-10 05:25:18.683925+00',
    '2024-05-13 08:14:22.404497+00',
    '2024-04-10 05:25:18.690037+00',
    '',
    '2024-04-29 11:38:02.670319+00',
    '2024-04-29 11:38:02.670319+00',
    '2024-04-10 05:25:18.690037+00',
    '',
    '',
    0,
    '2024-04-29 11:38:02.670319+00',
    '',
    '2024-04-29 11:38:02.670319+00',
    FALSE,
    '',
    '2024-04-29 11:38:02.670319+00'
  ),
  (
    '00000000-0000-0000-0000-000000000000',
    '5d2bb73b-0e3b-4c63-bc60-920554345950',
    'authenticated',
    'authenticated',
    'penny@quantumsoft.com',
    '$2a$10$a9iTTUP1Xr8Nx5KxUlRbXO1LBY8GmoYchreDLSUHu928XNV.FSz3q',
    '2024-04-29 11:38:10.395732+00',
    '',
    '2024-04-29 11:38:10.395732+00',
    'e8211a7bf6a0ad0cd6f5782119d0c966f2974cea14a3f8b408cbc7b2',
    '2024-04-29 11:38:10.395732+00',
    '',
    '2024-04-29 11:38:10.395732+00',
    '2024-05-06 15:02:54.361462+00',
    '{"provider":"email","providers":["email"]}',
    '{"name":"Penny Hofstadter","role":"Company","roles":"Company","is_invite":"false","invite_user":{"name":"Steve","email":"time@aglinthq.com"}}',
    FALSE,
    '2024-04-26 14:02:33.624932+00',
    '2024-05-06 15:02:54.380834+00',
    '2024-04-26 14:02:33.636723+00',
    '',
    '2024-04-26 14:02:33.636723+00',
    '2024-04-26 14:02:33.636723+00',
    '2024-04-26 14:02:33.636723+00',
    '',
    '',
    0,
    '2024-04-26 14:02:33.636723+00',
    '',
    '2024-04-26 14:02:33.636723+00',
    FALSE,
    '',
    '2024-04-26 14:02:33.636723+00'
  );

INSERT INTO
  auth.identities (
    id,
    user_id,
    identity_data,
    provider,
    last_sign_in_at,
    created_at,
    updated_at,
    provider_id
  )
VALUES
  (
    '3ec8e332-9e14-48f6-a512-4382558589db',
    '21c4f581-8208-402c-a9f3-a44610f9070f',
    '{"sub":"21c4f581-8208-402c-a9f3-a44610f9070f","email":"ravi+howard@aglinthq.com","email_verified":false,"phone_verified":false}',
    'email',
    '2024-04-26 13:51:24.96441+00',
    '2024-04-26 13:51:24.964462+00',
    '2024-04-26 13:51:24.964462+00',
    '21c4f581-8208-402c-a9f3-a44610f9070f'
  ),
  (
    '10d353d4-1c7b-4c76-ae37-f65ca2d11aba',
    'a0e4d0db-7492-48c3-bbc9-a8f7d8340f7f',
    '{"sub":"a0e4d0db-7492-48c3-bbc9-a8f7d8340f7f","email":"time@aglinthq.com","email_verified":false,"phone_verified":false}',
    'email',
    '2024-04-10 05:25:18.686431+00',
    '2024-04-10 05:25:18.686482+00',
    '2024-04-10 05:25:18.686482+00',
    'a0e4d0db-7492-48c3-bbc9-a8f7d8340f7f'
  ),
  (
    '42b6e2b0-4d36-412c-9d89-b2ef2aea0161',
    '05408f9e-40fc-407c-af1d-958cff24d30b',
    '{"sub":"05408f9e-40fc-407c-af1d-958cff24d30b","email":"ravi+stuart@aglinthq.com","email_verified":false,"phone_verified":false}',
    'email',
    '2024-04-26 14:03:39.451015+00',
    '2024-04-26 14:03:39.451069+00',
    '2024-04-26 14:03:39.451069+00',
    '05408f9e-40fc-407c-af1d-958cff24d30b'
  ),
  (
    '473100b3-2578-4f53-b68a-31ec4ccd9924',
    '02bc9267-0a7a-4e4c-9aff-d7f949782df3',
    '{"sub":"02bc9267-0a7a-4e4c-9aff-d7f949782df3","email":"ravi+leonard@aglinthq.com","email_verified":false,"phone_verified":false}',
    'email',
    '2024-04-26 13:46:29.949156+00',
    '2024-04-26 13:46:29.949228+00',
    '2024-04-26 13:46:29.949228+00',
    '02bc9267-0a7a-4e4c-9aff-d7f949782df3'
  ),
  (
    '959c660d-3a46-47b3-bc32-a2f8dc482f9a',
    '5d2bb73b-0e3b-4c63-bc60-920554345950',
    '{"sub":"5d2bb73b-0e3b-4c63-bc60-920554345950","email":"ravi+penny@aglinthq.com","email_verified":false,"phone_verified":false}',
    'email',
    '2024-04-26 14:02:33.632438+00',
    '2024-04-26 14:02:33.632493+00',
    '2024-04-26 14:02:33.632493+00',
    '5d2bb73b-0e3b-4c63-bc60-920554345950'
  );

INSERT INTO recruiter (
    ats_familiar,
    ashby_last_synced,
    zoom_auth,
    created_at,
    scheduling_reason,
    recruiter_type,
    name,
    email,
    company_website,
    industry,
    logo,
    phone_number,
    primary_contact,
    hr_contact,
    company_overview,
    e_o_statement,
    application_process,
    m_v_statement,
    company_values,
    benefits,
    employee_size,
    lever_key,
    id,
    employment_type,
    workplace_type,
    socials,
    google_workspace_domain,
    email_template,
    office_locations,
    technology_score,
    use_of_purpose,
    ai_avatar,
    ashby_key,
    recruiter_active,
    greenhouse_key,
    scheduling_settings,
    ashby_sync_token,
    service_json,
    audio_avatar_id,
    video_assessment,
    domain_admin_email,
    assistant_id,
    available_roles,
    departments
) VALUES (
    'Recruiterflow',
        '2024-04-10 05:25:20.335335+00',
    '',
    '2024-04-10 05:25:20.335335+00',
    '{}',
    'Company',
    'Quantum Soft',
    'time@aglinthq.com',
    'http://www. quantumsoft.com',
    'Technology and Innovation',
    'https://plionpfmgvenmdwwjzac.supabase.co/storage/v1/object/public/company-logo/public/a0e4d0db-7492-48c3-bbc9-a8f7d8340f7f?t=2024-04-26T15:45:43.900Z',
    '+91 9880201998',
    '{}',
    '{}',
    '',
    '',
    '',
    '',
    '',
    '',
    '5 - 50',
    '',
    '523ac2a1-d536-4a84-962c-60179a8bbc48',
    '{"contract":true,"fulltime":true,"parttime":true,"temporary":true,"volunteer":true,"internship":true}',
    '{"hybrid":true,"onsite":true,"offsite":true}',
    '{"custom":{},"twitter":"","youtube":"","facebook":"","linkedin":"","instagram":""}',
    'aglinthq.com',
    '{}',
    '{}',
    '{}',
    '{}',
    null,
    '{}',
    TRUE,
    '7ce80675fec46cc1b3ccc857b8cb6d06338f357e3974e123f2efe76e18a0f801cb3b79e61873de3e0d665b69ca803987',
    '{"timeZone":{"utc":"+05:30","name":"(GMT+05:30) Mumbai, Delhi, Bengaluru, Kolkata, Chennai","label":"Asia/Calcutta (GMT+05:30)","tzCode":"Asia/Calcutta"},"break_hour":{"end_time":"14:00","start_time":"13:30"},"totalDaysOff":[{"date":"01 Jan 2024","event_name":"New Year Day"},{"date":"16 Jan 2024","event_name":"Martin Luther King Jr. Day"},{"date":"19 Feb 2024","event_name":"Presidents Day"},{"date":"09 May 2024","event_name":"Google"},{"date":"10 May 2024","event_name":"asdasd"},{"date":"11 May 2024","event_name":"google.com"},{"date":"27 May 2024","event_name":"Memorial Day"},{"date":"19 Jun 2024","event_name":"Juneteenth National Independence Day"},{"date":"04 Jul 2024","event_name":"Independence Day"},{"date":"02 Sep 2024","event_name":"Labor Day"},{"date":"14 Oct 2024","event_name":"Columbus Day"},{"date":"11 Nov 2024","event_name":"Veterans Day"},{"date":"28 Nov 2024","event_name":"Thanksgiving Day"},{"date":"25 Dec 2024","event_name":"Christmas Day"}],"workingHours":[{"day":"sunday","isWorkDay":false,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"monday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"tuesday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"wednesday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"thursday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"friday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"saturday","isWorkDay":false,"timeRange":{"endTime":"17:00","startTime":"09:00"}}],"interviewLoad":{"dailyLimit":{"type":"Interviews","value":4},"weeklyLimit":{"type":"Interviews","value":20}},"schedulingKeyWords":{"free":["Play","Personal Time","Break","Team Lunch","Networking Event","Office Hours","Casual Meetup"],"outOfOffice":["OO"],"SoftConflicts":["Daily Standup","Sync Up","Sprint Planning","Strategy Session","Team Briefing"],"recruitingBlocks":["Hiring"]}}',
    '',
    '9a247e62cac5917a4d4c1ac2be20716b87ba5e8d03fd26d1918573321fbffa51302030c48ad2832af29850fbfd47402fe63f77f8aed11b6f08ea37a308da32fc83468ce02099463eebd1d79fcdc848fced4b80080707be650a4ed4661b99ef4887d6358f0b262b9b9cadb3f1bcd937045afa09111085d16b074767137ee13d22ef0f179893e4edbbea4684142f3edf45246dfeac7fb152d183ca648fe150af92f56bc6a371d246c72989b430bae4dfba1f509d8eda83d2175d4c884df97f8ef995d4c30dbf61ba595f60fb7e76c8549e5bd891db716cff152f21c82ed38958900f3047505a4864e4356d8079453173fef712fef9bb32d3db7465855e8b2947694a61a3968a9c55a9963e629bae47c34420cb57296131aa2a6ad85fd28af42be6aa395492c5a6b2137bf8ea5c7c64e7df66f77ff6353d64fc00ecb40ffea951035661ef53855ef137ee06621b063b91611431f541f9c717483146815b0546f2ba0e1fd7f1f51ac781e263332e658795f673ddf231dcca92acf53911fce2b15d7f5ad45413e6aa0fe289e20edda1600ed99ffe48f371cd53b7ada2e6dbcd6bed4544cdb4a3e0c5ee36209eb84b3c2c5bb20a6b7a9b8a7ef79c4659df388666d6209006cbd4b46840158893ae5e4250c11a50981f104e5d25894033a5df43236793d57c998f508491ab7864fe228c4b70ad70737c3ffb28cafc6fa9063b0d5ed36b33e18153bdf1142dc5d35a94063107ae6ff2fe8696fc61252c9e0676a69d08670c16dd4c47d0bddf6b2918de2a20324d3f851a45740bebc11f5fcb6782a5893d92c78a227ed01eca408bf46370d509d3a90ba65a8398d41ac078f6d5ce92f3c92e338d95976d07e25a63df19a6be3edb0aaf6961c930989c36fd58f4b0dd97e69ca992e7be9fcb8219f2f101b25d8fc0da5415cf528efcda0514516f959e7a4dbc5e57352982a8e77c6c70aab9a5df0e9a59bc0c5c7da62dff4c1f0dc98c5b2c63075aae5a1f1fe2863e41369dddb44dcd5367465f2d1ed596eaa625884bb14261b8d232b92c40e472264fc7420586df976324bf4ef6060224af55c0c00356af92f6445416ab9332b5820fbfcc32ef60267861b9e09aff8bd920e1aca3425c1a4f9eaa564404f9de7bbcb33de73bba28ecf831fd8f79b82bfd73d4278f49ba66aa658446b518c2055c58de2c5f7f9977481e939864eefd614f0560445d7a24486cbb5a3547160148419abad72ecf0b52abcb2c26d0638bed0aa2c945247e5b0e100956c4fb934ecdf72b07a8fa7ae747050174456d8e9db09530ac24f8526b7de46c94842e694a1ac011287e8a3fdefa5f0a0f15fb6b380d3e4ad2cfc75ab34077b18a4cf4214b729a7179b2522a5794bf41cb35ee50d925caa9b0ef841d0026426b7004999f85730cf0d5ae64cac67560a26f721a71368e395c8e13933ba268d136fe46720903fc13f6fc611b84af14c6618c6848e109af6d0422aa8968d43a4a162912166dd6b881e156399b76eafc35dea106712b995b65c5123c6156a205e005a2378f974086019a92be6b7ef1c44988d7bbd0439d14f508952d202b831ce8469268bc8f410101d76727bf94fcb241f1b9652123c96d2380eb22b8daa78aa9a98c7f36fc30eb4da1669a2a509adb927e9db00bd5cb34267ef1a4d3c2e1d4649904b95428b7ca27254c28dd55d090eec5477c8415529deae3b989f435521e8754231be250e1de542bab2b0a9c4f9a8d50f708bbc1a2c0a092c61f2c154ffe7a5ca78d4e6cdcf19cd4e1bba4f95afb4c34075a11ae123eab839521bf76e49c9ff70346f2ff202db60fd9cd2221c45e91b7717430fc6ed3d9774cd446396db2c510da77158ffc0afe575c0e02dcd630d5b947c0a8f803c7765e52772782652d409a90b2d1bc5c488f889ed4202e2189e9374de5b5a998863c7526e375e11cd3269d06061f3286d979f1f5ee6b5f44db2ed25589340b705d74429710dfc593869d68d95dffef809a0f5b860e93df3cf973586665c2af902d0fc1629bc87df98cfb5ec44af52183226c54a2f22c6cc2fcc768808fdfc58779fba586ccb13ba0e61c36a3efdf72dcf5f2ce834613b379e89b79920d1ab77776245c1288ff142239fc3a8a1d7fe6184011cec5d502654117b0fd8c96c03d96d0e63f9199bdacc76ecd28255b163684182bcec21f1965d08ed84a9f9d28c00c0271fdfd3b25040e4c136cb8ec38ee5a7caee7cea1ea8033e1c33e2cc0c618f9fdf329030c3a243013e4024aae70b11b2acd9441a1508e3ef259c7465f363b05f3c409677bd5f345e422e9a24609ad78c32f7db4cd1b087b71daf3057b86ef3ea9a1be6440042dd138220608d0dbd5c7d63e7b5894a2b0be82531b3bb751edfbe5b7e06361c3557f16b3a3307b98b8e4bc8724ef1481396d9220fc6700efa9007668be0b358a3c211e0fb9cf157e6530094ea51e0ea3d42387c0e1efd4f916cfa12de3264b5ad630cd9f57e1bbed03c381fe1b0b8afe85cf11128c9f39441b0a2acbaebe50dc093e3e82565963a5aa536e6e5af7fc584eff855a4f4ea54b7b85790b9a1ad4ddc709c68df8d0735d5f0473b22e30e36f5cc16f11ebf499962ae1f210970a58c8fb2932ba75443603904fa3f23242526cabc20f3d0e891abacde677e86b76f4b462eb10a0a1b97eff03c5f8500755ed701e066034e04408b9029628e15e10ac68545bb466980065fd6390e96e3636c9f2ceb045fae548e6b8b028b75742fdf0777157d3648191511978a34fccdfee1c1457508d6ad8cc7835edad51b6b892be8dfecb367596b2b14cc9fb41565cb0374d9bdf12f97a1ce7f2720024afa4f28f674939396a9078d7a2af5a83f84c2553a53c5eaef0f2bdbca310f1ea1dceade01e30bcf4eaf85e3c1717da5f69c2793d772837046fd9c64628d15e8832cc1d748d0a8fcad23e0870bb4c1f3c3e4eb5251046fbaf5360c4c86410f5149da75f11a529ec890978714874450a88b92a96243689c702e91f6f99a1d58d62f2867b0bd59db298fca6fed1662fbc294cf02b1855648916a491e0f9d04c10c9986689d26499036df9fb3914e87d896755c6623a404198f0954e090383db8d6eabc0be1dcb5e52dc7f6fc6cc9bfabb99ddb0d21a1adf6aea195755039543e49f2bb1d30e2c0f5b31f8d0dfed8c74bda80a40f5ca973668255faf999c62262413730b243a46df92c8cc0d36dfbf3d6707ca93dd913e70f4836a98c28b90542edf24d0b18e5ca2f02e42f8119b2e5bcb5245b2032102416e70578a818c2d2c516d07896ee0edd6496ab8b6d4dcb58c911ca4368611d63224270286d58f61197ddabbcf5e2ae7e94b9c678fbfb2cf4945063cdc12f973a0163a31055dd71d34a3fd132895bfb6178b99',
    0,
    FALSE,
    'ravi@aglinthq.com',
    '',
    '{}',
    '{}'
);

INSERT INTO recruiter_user (
    position,
    user_id,
    first_name,
    last_name,
    email,
    profile_image,
    phone,
    created_at,
    joined_at,
    join_status,
    department,
    interview_location,
    scheduling_settings,
    is_suspended,
    linked_in
)
VALUES
(
    'CEO',
    'a0e4d0db-7492-48c3-bbc9-a8f7d8340f7f',
    'Shelly',
    'Cooper',
    'time@aglinthq.com',
    'https://plionpfmgvenmdwwjzac.supabase.co/storage/v1/object/public/recruiter-user/public/a0e4d0db-7492-48c3-bbc9-a8f7d8340f7f?t=2024-05-01T18:12:16.192Z',
    '+1 (408) 887-3921',
    '2024-04-10 05:25:20.071059+00',
    '2024-04-10 05:25:20.071059+00',
    'joined',
    'Executive team',
    'Mountain View, California, USA',
    '{"timeZone":{"utc":"-08:00","name":"(GMT-08:00) Los Angeles, San Diego, San Jose, San Francisco, Seattle","label":"America/Los_Angeles (GMT-08:00)","tzCode":"America/Los_Angeles"},"break_hour":{"break_at":"13:00","break_time":"60"},"totalDaysOff":[{"date":"01 Jan 2024","event_name":"New Year Day"},{"date":"16 Jan 2024","event_name":"Martin Luther King Jr. Day"},{"date":"19 Feb 2024","event_name":"Presidents Day"},{"date":"27 May 2024","event_name":"Memorial Day"},{"date":"19 Jun 2024","event_name":"Juneteenth National Independence Day"},{"date":"04 Jul 2024","event_name":"Independence Day"},{"date":"02 Sep 2024","event_name":"Labor Day"},{"date":"14 Oct 2024","event_name":"Columbus Day"},{"date":"11 Nov 2024","event_name":"Veterans Day"},{"date":"28 Nov 2024","event_name":"Thanksgiving Day"},{"date":"25 Dec 2024","event_name":"Christmas Day"}],"workingHours":[{"day":"sunday","isWorkDay":false,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"monday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"tuesday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"wednesday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"thursday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"friday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"saturday","isWorkDay":false,"timeRange":{"endTime":"17:00","startTime":"09:00"}}],"interviewLoad":{"dailyLimit":{"type":"Hours","value":4},"weeklyLimit":{"type":"Hours","value":20}},"schedulingKeyWords":{"free":["Personal Time","Break","Team Lunch","Networking Event","Office Hours","Casual Meetup"],"SoftConflicts":["Daily Standup","Sync Up","Project Review","Sprint Planning","Strategy Session","Team Briefing"]},"isAutomaticTimeZone":false}',
    FALSE,
    'https://www.linkedin.com/in/sheldon'
),
(
    'Lead Developer',
    '21c4f581-8208-402c-a9f3-a44610f9070f',
    'Howard',
    'Wolowitz',
    'howard@quantumsoft.com',
    'https://plionpfmgvenmdwwjzac.supabase.co/storage/v1/object/public/recruiter-user/public/21c4f581-8208-402c-a9f3-a44610f9070f?t=2024-04-26T13:55:15.148Z',
    NULL,
    '2024-04-26 13:51:25.083894+00',
    '2024-04-26 13:51:25.083894+00',
    'joined',
    'Product development',
    'Mountain View, California, USA',
    '{"timeZone":{"utc":"-08:00","name":"(GMT-08:00) Los Angeles, San Diego, San Jose, San Francisco, Seattle","label":"America/Los_Angeles (GMT-08:00)","tzCode":"America/Los_Angeles"},"break_hour":{"end_time":"13:30","start_time":"13:00"},"totalDaysOff":[{"date":"01 Jan 2024","event_name":"New Year Day"},{"date":"16 Jan 2024","event_name":"Martin Luther King Jr. Day"},{"date":"19 Feb 2024","event_name":"Presidents Day"},{"date":"27 May 2024","event_name":"Memorial Day"},{"date":"19 Jun 2024","event_name":"Juneteenth National Independence Day"},{"date":"04 Jul 2024","event_name":"Independence Day"},{"date":"02 Sep 2024","event_name":"Labor Day"},{"date":"14 Oct 2024","event_name":"Columbus Day"},{"date":"11 Nov 2024","event_name":"Veterans Day"},{"date":"28 Nov 2024","event_name":"Thanksgiving Day"},{"date":"25 Dec 2024","event_name":"Christmas Day"}],"workingHours":[{"day":"sunday","isWorkDay":false,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"monday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"tuesday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"wednesday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"thursday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"friday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"saturday","isWorkDay":false,"timeRange":{"endTime":"17:00","startTime":"09:00"}}],"interviewLoad":{"dailyLimit":{"type":"Hours","value":4},"weeklyLimit":{"type":"Hours","value":20}},"schedulingKeyWords":{"free":["Personal Time","Break","Team Lunch","Networking Event","Office Hours","Casual Meetup"],"SoftConflicts":["Daily Standup","Sync Up","Project Review","Sprint Planning","Strategy Session","Team Briefing"]},"isAutomaticTimeZone":false}',
    FALSE,
    'https://linkedin.com/in/harword'
),
(
    'HR Manager',
    '05408f9e-40fc-407c-af1d-958cff24d30b',
    'Stuart',
    'Bloom',
    'stuart@quantumsoft.com',
    'https://plionpfmgvenmdwwjzac.supabase.co/storage/v1/object/public/recruiter-user/public/05408f9e-40fc-407c-af1d-958cff24d30b?t=2024-04-26T15:07:55.200Z',
    NULL,
    '2024-04-26 14:03:39.719482+00',
    '2024-04-26 14:03:39.719482+00',
    'joined',
    'Operations and hr',
    'Mountain View, California, USA',
    '{"timeZone":{"utc":"+05:30","name":"(GMT+05:30) Mumbai, Delhi, Bengaluru, Kolkata, Chennai","label":"Asia/Calcutta (GMT+05:30)","tzCode":"Asia/Calcutta"},"totalDaysOff":[{"date":"01 Jan 2024","event_name":"New Year Day"},{"date":"16 Jan 2024","event_name":"Martin Luther King Jr. Day"},{"date":"19 Feb 2024","event_name":"Presidents Day"},{"date":"27 May 2024","event_name":"Memorial Day"},{"date":"19 Jun 2024","event_name":"Juneteenth National Independence Day"},{"date":"04 Jul 2024","event_name":"Independence Day"},{"date":"02 Sep 2024","event_name":"Labor Day"},{"date":"14 Oct 2024","event_name":"Columbus Day"},{"date":"11 Nov 2024","event_name":"Veterans Day"},{"date":"28 Nov 2024","event_name":"Thanksgiving Day"},{"date":"25 Dec 2024","event_name":"Christmas Day"}],"workingHours":[{"day":"sunday","isWorkDay":false,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"monday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"tuesday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"wednesday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"thursday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"friday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"saturday","isWorkDay":false,"timeRange":{"endTime":"17:00","startTime":"09:00"}}],"interviewLoad":{"dailyLimit":{"type":"Hours","value":4},"weeklyLimit":{"type":"Hours","value":20}},"schedulingKeyWords":{"free":["Personal Time","Break","Team Lunch","Networking Event","Office Hours","Casual Meetup"],"SoftConflicts":["Daily Standup","Sync Up","Project Review","Sprint Planning","Strategy Session","Team Briefing"],"recruitingBlocks":[]}}',
    FALSE,
    'https://linkedin.com/in/sturat'
),
(
    'CTO',
    '02bc9267-0a7a-4e4c-9aff-d7f949782df3',
    'Leonard',
    'Hofstadter',
    'leonard@quantumsoft.com',
    'https://plionpfmgvenmdwwjzac.supabase.co/storage/v1/object/public/recruiter-user/public/02bc9267-0a7a-4e4c-9aff-d7f949782df3?t=2024-04-26T18:44:32.444Z',
    NULL,
    '2024-04-26 13:46:30.08778+00',
    '2024-04-26 13:46:30.08778+00',
    'joined',
    'Executive team',
    'Mountain View, California, USA',
    '{"timeZone":{"utc":"-08:00","name":"(GMT-08:00) Los Angeles, San Diego, San Jose, San Francisco, Seattle","label":"America/Los_Angeles (GMT-08:00)","tzCode":"America/Los_Angeles"},"break_hour":{"end_time":"13:30","start_time":"13:00"},"totalDaysOff":[{"date":"01 Jan 2024","event_name":"New Year Day"},{"date":"16 Jan 2024","event_name":"Martin Luther King Jr. Day"},{"date":"19 Feb 2024","event_name":"Presidents Day"},{"date":"27 May 2024","event_name":"Memorial Day"},{"date":"19 Jun 2024","event_name":"Juneteenth National Independence Day"},{"date":"04 Jul 2024","event_name":"Independence Day"},{"date":"02 Sep 2024","event_name":"Labor Day"},{"date":"14 Oct 2024","event_name":"Columbus Day"},{"date":"11 Nov 2024","event_name":"Veterans Day"},{"date":"28 Nov 2024","event_name":"Thanksgiving Day"},{"date":"25 Dec 2024","event_name":"Christmas Day"}],"workingHours":[{"day":"sunday","isWorkDay":false,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"monday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"tuesday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"wednesday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"thursday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"friday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"saturday","isWorkDay":false,"timeRange":{"endTime":"17:00","startTime":"09:00"}}],"interviewLoad":{"dailyLimit":{"type":"Hours","value":4},"weeklyLimit":{"type":"Hours","value":20}},"schedulingKeyWords":{"free":["Personal Time","Break","Team Lunch","Networking Event","Office Hours","Casual Meetup"],"SoftConflicts":["Daily Standup","Sync Up","Project Review","Sprint Planning","Strategy Session","Team Briefing"]},"isAutomaticTimeZone":false}',
    FALSE,
    'https://linkedin.com/in/lenord'
),
(
    'Marketing Director',
    '5d2bb73b-0e3b-4c63-bc60-920554345950',
    'Penny',
    'Hofstadter',
    'penny@quantumsoft.com',
    'https://plionpfmgvenmdwwjzac.supabase.co/storage/v1/object/public/recruiter-user/public/5d2bb73b-0e3b-4c63-bc60-920554345950?t=2024-04-26T15:03:39.413Z',
    NULL,
    '2024-04-26 14:02:33.892027+00',
    '2024-04-26 14:02:33.892027+00',
    'joined',
    'Marketing',
    'New York, New York, USA',
    '{"timeZone":{"utc":"-08:00","name":"(GMT-08:00) Los Angeles, San Diego, San Jose, San Francisco, Seattle","label":"America/Los_Angeles (GMT-08:00)","tzCode":"America/Los_Angeles"},"break_hour":{"end_time":"13:30","start_time":"13:00"},"totalDaysOff":[{"date":"01 Jan 2024","event_name":"New Year Day"},{"date":"16 Jan 2024","event_name":"Martin Luther King Jr. Day"},{"date":"19 Feb 2024","event_name":"Presidents Day"},{"date":"27 May 2024","event_name":"Memorial Day"},{"date":"19 Jun 2024","event_name":"Juneteenth National Independence Day"},{"date":"04 Jul 2024","event_name":"Independence Day"},{"date":"02 Sep 2024","event_name":"Labor Day"},{"date":"14 Oct 2024","event_name":"Columbus Day"},{"date":"11 Nov 2024","event_name":"Veterans Day"},{"date":"28 Nov 2024","event_name":"Thanksgiving Day"},{"date":"25 Dec 2024","event_name":"Christmas Day"}],"workingHours":[{"day":"sunday","isWorkDay":false,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"monday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"tuesday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"wednesday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"thursday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"friday","isWorkDay":true,"timeRange":{"endTime":"17:00","startTime":"09:00"}},{"day":"saturday","isWorkDay":false,"timeRange":{"endTime":"17:00","startTime":"09:00"}}],"interviewLoad":{"dailyLimit":{"type":"Hours","value":4},"weeklyLimit":{"type":"Hours","value":20}},"schedulingKeyWords":{"free":["Personal Time","Break","Team Lunch","Networking Event","Office Hours","Casual Meetup"],"SoftConflicts":["Daily Standup","Sync Up","Project Review","Sprint Planning","Strategy Session","Team Briefing"]},"isAutomaticTimeZone":false}',
    FALSE,
    'https://linkedin.com/in/penny'
);

INSERT INTO recruiter_relation (created_by, id, created_at, recruiter_id, user_id, is_active, role, manager_id)
VALUES
('a0e4d0db-7492-48c3-bbc9-a8f7d8340f7f', 726, '2024-04-10 05:25:20.583246+00', '523ac2a1-d536-4a84-962c-60179a8bbc48', 'a0e4d0db-7492-48c3-bbc9-a8f7d8340f7f', TRUE, 'admin', NULL),
('a0e4d0db-7492-48c3-bbc9-a8f7d8340f7f', 742, '2024-04-26 13:51:25.39408+00', '523ac2a1-d536-4a84-962c-60179a8bbc48', '21c4f581-8208-402c-a9f3-a44610f9070f', TRUE, 'admin', '02bc9267-0a7a-4e4c-9aff-d7f949782df3'),
('a0e4d0db-7492-48c3-bbc9-a8f7d8340f7f', 744, '2024-04-26 14:03:40.024422+00', '523ac2a1-d536-4a84-962c-60179a8bbc48', '05408f9e-40fc-407c-af1d-958cff24d30b', TRUE, 'recruiter', 'a0e4d0db-7492-48c3-bbc9-a8f7d8340f7f'),
('a0e4d0db-7492-48c3-bbc9-a8f7d8340f7f', 741, '2024-04-26 13:46:30.351664+00', '523ac2a1-d536-4a84-962c-60179a8bbc48', '02bc9267-0a7a-4e4c-9aff-d7f949782df3', TRUE, 'hiring_manager', 'a0e4d0db-7492-48c3-bbc9-a8f7d8340f7f'),
('a0e4d0db-7492-48c3-bbc9-a8f7d8340f7f', 743, '2024-04-26 14:02:34.191224+00', '523ac2a1-d536-4a84-962c-60179a8bbc48', '5d2bb73b-0e3b-4c63-bc60-920554345950', TRUE, 'interviewer', 'a0e4d0db-7492-48c3-bbc9-a8f7d8340f7f');
