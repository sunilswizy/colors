import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

const PaletteMetaForm = ({ handeleSavePalette, newPalette, open, setOpen }) => {
	const [paleteeName, setPaleteeName] = React.useState("");

	React.useEffect(() => {
		ValidatorForm.addValidationRule("isPaltteNameUnique", value => {
			let check = newPalette.map(
				el => el.paletteName.toLowerCase() !== value.toLowerCase()
			);
			return check.every(el => el === true);
		});
	});

	const handleClose = () => {
		setOpen("");
	};

	const showEmoji = () => {
		setOpen("emoji");
	};

	const handleSubmit = ({ native }) => {
		handeleSavePalette(paleteeName, native);
	};

	return (
		<div>
			<Dialog open={open === "emoji"} onClose={handleClose}>
				<DialogTitle>Choose A Palette Emoji!</DialogTitle>
				<DialogContent>
					<Picker title='Pick a Palette Emoji!' onSelect={handleSubmit} />
				</DialogContent>
			</Dialog>

			<Dialog open={open === "form"} onClose={handleClose}>
				<DialogTitle>Choose a Palette Name!</DialogTitle>
				<ValidatorForm onSubmit={showEmoji}>
					<DialogContent>
						<DialogContentText marginBottom='1rem'>
							Please enter a name for your new beautiful palette. Make sure its
							unique!
						</DialogContentText>

						<TextValidator
							label='Palette-Name'
							value={paleteeName}
							onChange={e => setPaleteeName(e.target.value)}
							validators={["required", "isPaltteNameUnique"]}
							errorMessages={[
								"palette name is required",
								"Palette name is already used!",
							]}
							fullWidth
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Cancel</Button>
						<Button type='submit' variant='contained' color='error'>
							Save Palette
						</Button>
					</DialogActions>
				</ValidatorForm>
			</Dialog>
		</div>
	);
};

export default PaletteMetaForm;
