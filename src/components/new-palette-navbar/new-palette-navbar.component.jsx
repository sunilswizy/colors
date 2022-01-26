import React from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

import PaletteMetaForm from "../palette-meta-form/palette-meta-form.component";

import { useNavigate } from "react-router-dom";
import { DRAWER_WIDTH } from "../constants/constants";

const drawerWidth = DRAWER_WIDTH;

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	flexDirection: "row",
	justifyContent: "space-between",
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Root = styled("div")(({ theme }) => ({
	display: "flex",
}));

const ValidationFormContainer = styled("div")(({ theme }) => ({
	margin: "0 10px",
	display: "flex",
	justifyContent: "space-between",
	gap: "10px",
	alignItems: "center",
}));

const NewPaletteNavbar = ({
	open,
	handleDrawerOpen,
	handeleSavePalette,
	newPalette,
}) => {
	const navigate = useNavigate();

	const [formShowing, setFormShowing] = React.useState("");

	return (
		<Root>
			<CssBaseline />
			<AppBar position='fixed' open={open} color='default'>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						sx={{ mr: 2, ...(open && { display: "none" }) }}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap component='div'>
						Create your own Palette!
					</Typography>
				</Toolbar>
				<ValidationFormContainer>
					<Button variant='contained' onClick={() => setFormShowing("form")}>
						Save Palette
					</Button>
					<Button
						variant='contained'
						color='error'
						onClick={() => navigate("/")}>
						Go Back
					</Button>
				</ValidationFormContainer>
			</AppBar>
			{formShowing && (
				<PaletteMetaForm
					handeleSavePalette={handeleSavePalette}
					newPalette={newPalette}
					open={formShowing}
					setOpen={setFormShowing}
				/>
			)}
		</Root>
	);
};

export default NewPaletteNavbar;
