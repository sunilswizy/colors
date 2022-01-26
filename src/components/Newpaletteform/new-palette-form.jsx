import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button } from "@mui/material";
import DraggableList from "../Draggable-list/draggable.list.component";
import { useNavigate } from "react-router-dom";
import { arrayMoveImmutable } from "array-move";
import NewPaletteNavbar from "../new-palette-navbar/new-palette-navbar.component";
import ColorPickerForm from "../colorpicker-form/colorpicker-form.component";
import { DRAWER_WIDTH } from "../constants/constants";

const drawerWidth = DRAWER_WIDTH;
const maxLength = 20;

const Main = styled("main", { shouldForwardProp: prop => prop !== "open" })(
	({ theme, open }) => ({
		height: "calc(100vh - 64px)",
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

const DrawerContainer = styled("div")(({ theme }) => ({
	width: "100%",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
}));

const ButtonContainer = styled("div")(({ theme }) => ({
	width: "100%",
	display: "flex",
	justifyContent: "center",
	gap: "10px",
	marginTop: "0.4rem",
}));

const NewPaletteForm = ({ savePalette, newPalette }) => {
	const [open, setOpen] = React.useState(false);
	const [color, setColor] = React.useState(newPalette[0].colors);
	const isPaletteFull = color.length >= maxLength;

	const navigate = useNavigate();

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleSubmit = newCol => {
		setColor(prev => {
			return [...prev, newCol];
		});
	};

	const handleDelete = id => {
		setColor(color.filter(el => el.name !== id));
	};

	const handeleSavePalette = (paletteName, emoji) => {
		const palette = {
			paletteName,
			id: paletteName.toLowerCase().replace(/ /g, "-"),
			emoji,
			colors: color,
		};
		savePalette(palette);
		navigate("/");
	};

	const clearPaletee = () => {
		setColor([]);
	};

	const handleRandomColor = () => {
		const newColor = newPalette.map(el => el.colors).flat();
		setColor([...color, newColor[Math.floor(Math.random() * newColor.length)]]);
	};

	const onSortEnd = ({ oldIndex, newIndex }) => {
		setColor(arrayMoveImmutable(color, oldIndex, newIndex));
	};

	return (
		<Box sx={{ display: "flex" }} s>
			<NewPaletteNavbar
				open={open}
				handleDrawerOpen={handleDrawerOpen}
				handeleSavePalette={handeleSavePalette}
				newPalette={newPalette}
			/>

			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant='persistent'
				anchor='left'
				open={open}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</DrawerHeader>
				<Divider />

				<DrawerContainer>
					<Typography variant='h5' align='center' gutterBottom>
						Design Your Palette
					</Typography>
					<ButtonContainer>
						<Button
							variant='contained'
							color='secondary'
							onClick={clearPaletee}>
							Clear Palette
						</Button>
						<Button
							variant='contained'
							color='primary'
							onClick={handleRandomColor}
							disabled={isPaletteFull}>
							Random Color
						</Button>
					</ButtonContainer>

					<ColorPickerForm
						isPaletteFull={isPaletteFull}
						handleSubmit={handleSubmit}
						color={color}
					/>
				</DrawerContainer>
			</Drawer>
			<Main open={open}>
				<DrawerHeader />
				<DraggableList
					color={color}
					handleDelete={handleDelete}
					onSortEnd={onSortEnd}
					axis='xy'
				/>
			</Main>
		</Box>
	);
};
export default NewPaletteForm;
