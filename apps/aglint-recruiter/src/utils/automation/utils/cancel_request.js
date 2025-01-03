export const cancelReschdule = async (setting, supabase) => {
  const request_rel = (
    await supabase
      .from('request_relation')
      .select('session_id')
      .eq('request_id', setting.request_id)
  ).data;

  const payload = {
    application_id: setting.application_id,
    session_ids: request_rel.map((rel) => rel.session_id),
    type: 'declined',
  };

  try {
    await fetch(
      `${process.env.NEXT_PUBLIC_HOST_NAME}/api/request/candidate-request`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      },
    ).catch((e) => {
      throw new Error(e.message);
    });
  } catch (e) {
    throw new Error(e.message);
  }
};
