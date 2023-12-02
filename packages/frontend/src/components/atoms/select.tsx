import React from "react";
import { styled } from "@stitches/react";
import { violet, blackA } from "@radix-ui/colors";
import { CheckIcon } from "@radix-ui/react-icons";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
	all: "unset",
	backgroundColor: "#222222",
	width: 25,
	height: 25,
	borderRadius: 4,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	boxShadow: `0 2px 10px ${blackA.blackA7}`,
	"&:hover": { backgroundColor: "#333333" },
	"&:focus": { boxShadow: `0 0 0 2px black` },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
	color: "#b178ff",
});

// Exports
export const Checkbox = StyledCheckbox;
export const CheckboxIndicator = StyledIndicator;

// Your app...
const Flex = styled("div", { display: "flex" });
const Label = styled("label", {
	color: "#ebebeb",
	fontSize: 14,
	lineHeight: 1.6,
	userSelect: "none",
});

export const CheckboxPrimitive1 = ({ label }) => (
	<Flex css={{ alignItems: "center" }}>
		<Checkbox defaultChecked id="c1">
			<CheckboxIndicator>
				<CheckIcon />
			</CheckboxIndicator>
		</Checkbox>
		<Label css={{ paddingLeft: 15 }} htmlFor="c1">
			{label}
		</Label>
	</Flex>
);

export const CheckboxDemo = ({ label }) => (
	<Flex css={{ alignItems: "center", marginBottom: "29px" }}>
		<Checkbox defaultChecked id="c1">
			<CheckboxIndicator>
				<CheckIcon />
			</CheckboxIndicator>
		</Checkbox>
		<Label css={{ paddingLeft: 15 }} htmlFor="c1">
			{label}
		</Label>
	</Flex>
);
export default CheckboxDemo;
