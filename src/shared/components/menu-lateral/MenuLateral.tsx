import { Avatar, Button, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import { Box, width } from "@mui/system";
import { useAppThemeContext } from "../../contexts";

interface IMenuLateral{
    children?: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateral> = ({ children }) => {
    const theme = useTheme();
    const { toogleTheme, themeName } = useAppThemeContext();

    return(
        <>
            <Drawer variant="permanent">
                <Box width={theme.spacing(28)} display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar
                            sx={{ height: theme.spacing(8), width: theme.spacing(8)} }
                        />  
                    </Box>
                </Box>

                <Divider/>

                <Box flex={1}>
                    <List component="nav">
                        <ListItemButton>
                            <ListItemIcon>
                                <Icon>list</Icon>
                            </ListItemIcon>
                            <ListItemText>Serie A</ListItemText>
                        </ListItemButton>
                        <Button variant='contained' color='primary' onClick={toogleTheme}>{themeName}</Button>
                    </List>
                </Box>
            </Drawer>

            <Box height="100vh" marginLeft={theme.spacing(28)}>
               {children}
            </Box>
        </>
        
    );
}