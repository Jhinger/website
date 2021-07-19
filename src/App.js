import { useState, useEffect } from 'react';
import Introduction from './components/Introduction';
import Main from './components/Main'
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const App = () => {
	const [isMobile, setIsMobile] = useState(false)

	// TODO
	useEffect(() => {
		window.innerWidth <= 760 ? setIsMobile(true) : setIsMobile(false)
	}, [])

	return (
		<Wrapper>
			<Introduction />
			<Main />
		</Wrapper>
	)
}

export default App;
