import { generateDays, semesterDays } from "./data";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";


export default function DayJSON() {
    const today = new Date();
    // date in format yyyy-mm-dd
    const dateString = today.toISOString().split('T')[0];
    const [startDate, setStartDate] = useState(dateString);
    const [endDate, setEndDate] = useState(dateString);

    const dayArray = generateDays(startDate, endDate);

    return (
        <Flex justify={'center'} m='3'>
            <Box maxW={'800px'} bg={'gray.100'} borderRadius={'md'} p='4' textAlign={'center'} >
                <Heading size='md' fontWeight={'500'}>Current Schedule Array</Heading>
                <Box>
                    {/* map over semesterDays */}
                    {semesterDays.map((day, i) => (
                        <Box key={i}>
                            {JSON.stringify(day)},
                        </Box>
                    ))}

                </Box>
            </Box>


            <Box maxW={'800px'} bg={'teal.100'} borderRadius={'md'} p='4' textAlign={'center'} >
                <Heading size='md' fontWeight={'500'}>Create New Schedule Array</Heading>
                <Flex justify={'space-between'} m='3'>
                    {/* Date input */}
                    <input type='date' value={startDate} onChange={(e) => {
                        setStartDate(e.target.value)
                        //console.log(e.target.value)
                    }} ></input>
                    <input type='date' value={endDate} onChange={(e) => {
                        setEndDate(e.target.value)
                        //console.log(e.target.value)
                    }} ></input>
                </Flex>

                {/* JSON output */}
                <Box>
                    {/* map over day list and print out json */}
                    {dayArray.map((day, i) => (
                        <Box key={i}>
                            {JSON.stringify(day)},
                        </Box>
                    ))}
                </Box>
            </Box>

        </Flex>
    )
}
