import React from 'react'
import { ResultPane, ResultsContainer, Container } from './styled'
import Link from 'next/link'

function Operas({ data }) {
	return (
		<Container>
			<ResultsContainer>
				{data.map(({ last_name, opera_id, opera }) => (
					<ResultPane key={opera_id}>
						<Link href={`/operas/${opera_id}`}>{opera}</Link>
					</ResultPane>
				))}
			</ResultsContainer>
		</Container>
	);
}

export default Operas;