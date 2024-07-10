import { Flex, AspectRatio, Box } from '@chakra-ui/react';


export default function YoutubeCard() {
	const link = 'https://www.youtube.com/embed/nAZuy1vmjZQ';
	return (

	
			<Flex pt={2}
			minH = {400}
			minW = {800}
			as='iframe'
			src={link}
			title="YouTube Video"
			allowFullScreen
			>
	
			</Flex>


	);
}
