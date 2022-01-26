import React, { useEffect, useState } from "react";
import { ChromePicker } from "react-color";
import { Button } from "@mui/material";
import { withStyles } from "@material-ui/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import styles from "../styles/coloroicker-form.styles";

const ColorPickerForm = ({ isPaletteFull, handleSubmit, color, classes }) => {
	const [cureentColor, setCurrentColor] = useState("skyblue");
	const [newColor, setNewColor] = React.useState("");

	const handleSubmitForm = () => {
		const newCol = {
			color: cureentColor,
			name: newColor,
		};
		handleSubmit(newCol);
		setNewColor("");
	};

	useEffect(() => {
		ValidatorForm.addValidationRule("isColorNameUnique", value => {
			let check = color.map(el => el.name !== value.toLowerCase());
			return check.every(el => el === true);
		});
		ValidatorForm.addValidationRule("isColorUnique", value => {
			let check = color.map(el => el.color !== cureentColor);
			return check.every(el => el === true);
		});
	}, [newColor, cureentColor, color]);

	return (
		<>
			<ChromePicker
				onChangeComplete={color => setCurrentColor(color.hex)}
				color={cureentColor}
				className={classes.picker}
			/>
			<ValidatorForm onSubmit={handleSubmitForm} autoComplete='off'>
				<TextValidator
					value={newColor}
					placeholder='Color Name...'
					onChange={e => setNewColor(e.target.value)}
					variant='filled'
					validators={["required", "isColorNameUnique", "isColorUnique"]}
					errorMessages={[
						"name is required",
						"Color name is already used!",
						"Color is already used!",
					]}
					className={classes.textfield}
				/>
				<Button
					variant='contained'
					color='error'
					style={{
						backgroundColor: `${isPaletteFull ? "grey" : cureentColor}`,
					}}
					type='submit'
					disabled={isPaletteFull}
					className={classes.Buttons}>
					{isPaletteFull ? "Palette Full!" : "Add Color"}
				</Button>
			</ValidatorForm>
		</>
	);
};

export default withStyles(styles)(ColorPickerForm);
