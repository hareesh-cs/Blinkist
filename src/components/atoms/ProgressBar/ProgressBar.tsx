/* eslint-disable operator-linebreak */
import styled from '@emotion/styled';

export interface ProgressBarProps {
  percentComplete?: number;
}

function ProgressBar({ percentComplete }: ProgressBarProps) {
  const StyledDiv = styled('div')({
    width: '100%',
    height: '15px',
    backgroundColor: '#f1f6f4',
    padding: 0,
    margin: 0,
  });
  const percentCompleted =
    percentComplete !== undefined && percentComplete !== null
      ? `${percentComplete}%`
      : '30%';
  const InnerDiv = styled('div')({
    width: percentCompleted,
    height: '15px',
    margin: 0,
    padding: 0,
    backgroundColor: '#E1ECFC',
  });
  return (
    <StyledDiv>
      <InnerDiv />
    </StyledDiv>
  );
}
export default ProgressBar;
