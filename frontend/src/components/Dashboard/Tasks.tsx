import {
    Center,
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuList,
    Text,
} from "@chakra-ui/react"
import { FiList } from "react-icons/fi";

import {userContext} from '../App/context'


const Tasks = () => {
    return (
        <userContext.Consumer>
            {({logoutUser, user}) => {
                  return (
                    <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            rounded={'full'}
                            size="md"
                            variant={'link'}
                            cursor={'pointer'}
                            icon={<FiList />}>
                        </MenuButton>
                        <MenuList alignItems={'center'}>
                            <Center>
                                <Text fontSize={16} fontWeight={500}>Tasks</Text>
                            </Center>
                            <MenuDivider />
                            <Center>
                                <Text fontStyle="italic" fontSize={12}>No tasks assigned to you</Text>
                            </Center>
                        </MenuList>
                      </Menu>
                  </Flex>                  
                  )
                }}

        </userContext.Consumer>
    )
}

export default Tasks
