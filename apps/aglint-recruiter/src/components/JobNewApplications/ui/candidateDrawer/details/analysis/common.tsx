/* eslint-disable security/detect-object-injection */
import { JdAnalysisItem } from '@/devlink/JdAnalysisItem';
import { useApplication } from '@/src/context/ApplicationContext';
import { Application } from '@/src/context/ApplicationContext/type';

const AnalysisItem = ({
  type,
}: {
  type: keyof Application['score_json']['scores'];
}) => {
  const {
    application: { data, status },
  } = useApplication();
  if (status === 'pending') return <>Loading...</>;
  const scores = data?.score_json?.scores;
  const reasoning = data?.score_json?.reasoning;
  if (!(scores && reasoning && scores[type] && reasoning[type])) return <></>;
  const tier = getScoreTier(scores[type]);
  return (
    <JdAnalysisItem
      textAnalysis={reasoning[type]}
      textBadge={`${tier} -  ${scores[type]}`}
      isHigh={tier === 'High'}
      isMedium={tier === 'Medium'}
      isPoor={tier === 'Low'}
    />
  );
};

export { AnalysisItem };

const getScoreTier = (score: number): 'High' | 'Medium' | 'Low' => {
  return score > 66 ? 'High' : score > 33 ? 'Medium' : 'Low';
};
