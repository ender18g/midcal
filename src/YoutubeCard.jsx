import { Flex, Box } from '@chakra-ui/react';


export default function YoutubeCard() {
	const link = 'https://www.youtube.com/embed/nAZuy1vmjZQ';
	return (

	
			<Flex p={2}
				w={'800px'}
				h={'400px'}
				as='iframe'
				src={link}
				title="YouTube Video"
				allowFullScreen
			>
	
			</Flex>

	);
}
