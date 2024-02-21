import React from 'react';
import * as _Builtin from './_Builtin';
import { QuestionCard } from './QuestionCard';
import { QuestionCardLoader } from './QuestionCardLoader';
import { QuestionsEmpty } from './QuestionsEmpty';
import { AssessmentQuestionDetail } from './AssessmentQuestionDetail';
import { RecommendedQuestionCard } from './RecommendedQuestionCard';
import { RecommendedCardLoader } from './RecommendedCardLoader';
import * as _utils from './utils';
import _styles from './AssessmentDetailBody.module.css';

export function AssessmentDetailBody({
  as: _Component = _Builtin.Block,
  slotDuration,
  slotQuestionCards,
  onClickAddQuestion = {},
  textQuestionNumber = '5 Questions',
  slotQuestionDetail,
  slotRecommendedQuestions,
  isQuestionTopBar = true,
}) {
  return (
    <_Component className={_utils.cx(_styles, 'assessment_detail')} tag='div'>
      <_Builtin.Block
        className={_utils.cx(_styles, 'slot_assesment_questions')}
        id={_utils.cx(
          _styles,
          'w-node-c57b9ec5-caab-87a6-2cc9-a31ddff8edae-dff8edad',
        )}
        tag='div'
      >
        <_Builtin.Block
          className={_utils.cx(_styles, 'slot_question_list')}
          id={_utils.cx(
            _styles,
            'w-node-c57b9ec5-caab-87a6-2cc9-a31ddff8edaf-dff8edad',
          )}
          tag='div'
        >
          {isQuestionTopBar ? (
            <_Builtin.Block
              className={_utils.cx(_styles, 'question_list_top')}
              tag='div'
            >
              <_Builtin.Block
                className={_utils.cx(_styles, 'question_count_dutation')}
                tag='div'
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, 'fw-semibold')}
                  tag='div'
                >
                  {textQuestionNumber}
                </_Builtin.Block>
                <_Builtin.Block tag='div'>{slotDuration}</_Builtin.Block>
              </_Builtin.Block>
              {isQuestionTopBar ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, 'button_text', 'relative_2')}
                  tag='div'
                  {...onClickAddQuestion}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, 'embed_flex')}
                    value='%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M9.75%204.875V8.25H13.125C13.3438%208.25%2013.5234%208.32031%2013.6641%208.46094C13.8047%208.60156%2013.875%208.78125%2013.875%209C13.875%209.21875%2013.8047%209.39844%2013.6641%209.53906C13.5234%209.67969%2013.3438%209.75%2013.125%209.75H9.75V13.125C9.75%2013.3438%209.67969%2013.5234%209.53906%2013.6641C9.39844%2013.8047%209.21875%2013.875%209%2013.875C8.78125%2013.875%208.60156%2013.8047%208.46094%2013.6641C8.32031%2013.5234%208.25%2013.3438%208.25%2013.125V9.75H4.875C4.65625%209.75%204.47656%209.67969%204.33594%209.53906C4.19531%209.39844%204.125%209.21875%204.125%209C4.125%208.78125%204.19531%208.60156%204.33594%208.46094C4.47656%208.32031%204.65625%208.25%204.875%208.25H8.25V4.875C8.25%204.65625%208.32031%204.47656%208.46094%204.33594C8.60156%204.19531%208.78125%204.125%209%204.125C9.21875%204.125%209.39844%204.19531%209.53906%204.33594C9.67969%204.47656%209.75%204.65625%209.75%204.875Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E'
                  />
                  <_Builtin.Block tag='div'>{'Add Question'}</_Builtin.Block>
                </_Builtin.Block>
              ) : null}
              <_Builtin.Block
                className={_utils.cx(_styles, 'overlay_gradient')}
                tag='div'
              />
            </_Builtin.Block>
          ) : null}
          <_Builtin.Block
            className={_utils.cx(_styles, 'slot_question_cards', 'is_flex')}
            tag='div'
          >
            {slotQuestionCards ?? (
              <>
                <QuestionCard />
                <QuestionCardLoader />
                <QuestionsEmpty />
              </>
            )}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, 'slot_question_detaill')}
          id={_utils.cx(
            _styles,
            'w-node-_7fe8426e-1514-f541-9b8a-038b21b7f4cf-dff8edad',
          )}
          tag='div'
        >
          {slotQuestionDetail ?? <AssessmentQuestionDetail />}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, 'slot_recommended_questions')}
        id={_utils.cx(
          _styles,
          'w-node-c57b9ec5-caab-87a6-2cc9-a31ddff8edb1-dff8edad',
        )}
        tag='div'
      >
        <_Builtin.Block
          className={_utils.cx(_styles, 'question_list_top')}
          tag='div'
        >
          <_Builtin.Block
            className={_utils.cx(_styles, 'fw-semibold', 'relative_2')}
            tag='div'
          >
            {'Recommended Questions'}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, 'overlay_gradient', 'gray')}
            tag='div'
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, 'slot_question_cards')}
          tag='div'
        >
          {slotRecommendedQuestions ?? (
            <>
              <RecommendedQuestionCard />
              <RecommendedQuestionCard />
              <RecommendedQuestionCard />
              <RecommendedCardLoader />
              <RecommendedCardLoader />
            </>
          )}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, 'embed_css')}
        id={_utils.cx(
          _styles,
          'w-node-_741c411d-7584-1207-bdc5-4375ba990d8c-dff8edad',
        )}
        value='%3Cstyle%3E%0A%5Bclass*%3D%22AssessmentDetailBody_slot_question_list__%22%5D%7B%0Aheight%3A%20calc(100vh%20-%2060px)%3B%0A%7D%0A%5Bclass*%3D%22AssessmentDetailBody_slot_recommended_questions__%22%5D%7B%0Aheight%3A%20calc(100vh%20-%2060px)%3B%0A%7D%0A%3C%2Fstyle%3E'
      />
    </_Component>
  );
}
