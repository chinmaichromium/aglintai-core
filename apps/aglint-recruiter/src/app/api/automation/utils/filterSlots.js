function getRandomSlots(slots, count) {
  const availableSlots = slots.filter((slot) => slot.is_slot_available);
  const shuffledSlots = availableSlots.sort(() => 0.5 - Math.random());
  return shuffledSlots.slice(0, count);
}

export async function fetchAndFilterAvailabilitySlots(
  recruiterId,
  candidateTz,
  availReqId,
  currRound,
  numberOfDays,
  numberOfSlots,
) {
  try {
    const availabilityUrl =
      'https://dev.aglinthq.com/api/scheduling/v1/cand_req_available_slots';
    const response = await fetch(availabilityUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        recruiter_id: recruiterId,
        candidate_tz: candidateTz,
        avail_req_id: availReqId,
        curr_round: currRound,
      }),
    });

    if (!response.ok) {
      throw new Error(
        'Error fetching availability data from the external service',
      );
    }

    const slotsResponse = await response.json();
    return slotsResponse.slice(0, numberOfDays * 2).map((day) => {
      return { ...day, slots: getRandomSlots(day.slots, numberOfSlots * 2) };
    });
  } catch (e) {
    throw new Error(e.message);
  }
}
