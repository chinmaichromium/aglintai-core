export const STATE_LEVER_DIALOG = {
  INITIAL: 'INITIAL',
  FETCHING: 'FETCHING',
  API: 'API',
  LISTJOBS: 'LISTJOBS',
  IMPORTING: 'IMPORTING',
  ERROR: 'ERROR',
};

export const STATE_GREENHOUSE_DIALOG = {
  INITIAL: 'INITIAL',
  FETCHING: 'FETCHING',
  API: 'API',
  LISTJOBS: 'LISTJOBS',
  IMPORTING: 'IMPORTING',
  ERROR: 'ERROR',
};

export const initialState = {
  lever: { open: false, step: STATE_LEVER_DIALOG.INITIAL },
  greenhouse: { open: false, step: STATE_GREENHOUSE_DIALOG.INITIAL },
};


