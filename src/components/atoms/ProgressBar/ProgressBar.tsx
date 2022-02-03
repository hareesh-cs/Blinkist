/* eslint-disable operator-linebreak */
import styled from '@emotion/styled';

export interface ProgressBarProps {
  progress?: number;
}

function ProgressBar({ progress }: ProgressBarProps) {
  const StyledDiv = styled('div')({
    width: '100%',
    height: '15px',
    backgroundColor: '#f1f6f4',
    padding: 0,
    marginTop: 0,
    border: '1px',
    boxSizing: 'border-box',
    borderRadius: '0px 0px 8px 8px',
  });
  const progressed =
    progress !== undefined && progress !== null ? `${progress}%` : '30%';

  const InnerDiv = styled('div')({
    width: progressed,
    height: '15px',
    marginTop: 0,
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
