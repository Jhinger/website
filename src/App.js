import Introduction from './components/Introduction';
import Main from './components/Main'
import styled from 'styled-components';

const Wrapper = styled.div`
	
`;

const App = () => {
	return (
		<Wrapper>
			<Introduction />
			<Main />
		</Wrapper>
	)
}

export default App;
