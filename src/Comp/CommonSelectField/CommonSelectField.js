"use client";
import React from "react";
import { TextField, MenuItem } from "@mui/material";

const CommonSelectField = ({
    label = "",
    placeholder = "Select an option",
    options = [],
    value = "",
    onChange = () => { },
    error = false,
    helperText = "",
    size = "small",
}) => {
    return (
        <TextField
            select
            fullWidth
            label={label}
            variant="outlined"
            size={size}
            value={value}
            onChange={onChange}
            error={error}
            helperText={helperText}
            SelectProps={{
                displayEmpty: true,
                renderValue: (selected) => {
                    if (!selected) {
                        return (
                            <span
                                style={{
                                    color: "#555",
                                    opacity: 0.8,
                                    fontFamily: "Poppins, sans-serif",
                                }}
                            >
                                {placeholder}
                            </span>
                        );
                    }
                    return selected;
                },
            }}
            InputProps={{
                sx: {
                    py: 0.5,
                    px: 0.5,
                    backgroundColor: "#F5F5F5",
                    borderRadius: "8px",
                    fontFamily: "Poppins, sans-serif",
                    transition: "all 0.2s ease",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: error ? "#f87171" : "#d1d5dc", // red-400 or gray-300
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: error ? "#f87171" : "#d1d5dc",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: error ? "#f87171" : "#facc15", // yellow-400
                        boxShadow: error
                            ? "0 0 0 2px rgba(248, 113, 113, 0.3)" // red ring
                            : "0 0 0 2px rgba(250, 204, 21, 0.4)", // yellow ring
                    },
                    "& .MuiSelect-select": {
                        fontFamily: "Poppins, sans-serif",
                    },
                },
            }}
            FormHelperTextProps={{
                sx: { marginLeft: 0, color: "#d32f2f", fontSize: "0.75rem" },
            }}
        >
            {options.map((opt, index) => (
                <MenuItem key={index} value={opt}>
                    {opt}
                </MenuItem>
            ))}
        </TextField>
    );
};

export default CommonSelectField;
