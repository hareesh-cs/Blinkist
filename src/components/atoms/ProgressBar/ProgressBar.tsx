/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from '@emotion/styled';

function ProgressBar(): any {
  const StyledDiv = styled('div')({
    width: '100%',
    height: '15px',
    backgroundColor: '#f1f6f4',
    padding: 0,
    margin: 0,
  });
  const InnerDiv = styled('div')({
    width: '30%',
    height: '15px',
    margin: 0,
    padding: 0,
    backgroundColor: '#E1ECFC',
  });
  return (
    <StyledDiv data-testid="div">
      <InnerDiv data-testid="div" />
    </StyledDiv>
  );
}
export default ProgressBar;
