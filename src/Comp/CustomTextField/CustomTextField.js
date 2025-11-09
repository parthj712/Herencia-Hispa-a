import React from "react";
import { TextField } from "@mui/material";

const CommonTextField = ({
    label = "",
    placeholder = "Enter text",
    value = "",
    onChange = () => { },
    error = false,
    helperText = "",
    size = "small",
    type = "text",
}) => {
    return (
        <TextField
            fullWidth
            label={label}
            variant="outlined"
            placeholder={placeholder}
            size={size}
            value={value}
            onChange={onChange}
            error={error}
            helperText={helperText}
            type={type}
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
                        borderColor: error ? "#f87171" : "#facc15", // yellow-400 on focus
                        boxShadow: error
                            ? "0 0 0 2px rgba(248, 113, 113, 0.3)" // red ring
                            : "0 0 0 2px rgba(250, 204, 21, 0.4)", // yellow ring
                    },
                    "& input::placeholder": {
                        color: "#555",
                        opacity: value ? 0 : 0.8,
                        transition: "opacity 0.3s ease",
                        fontFamily: "Poppins, sans-serif",
                    },
                },
            }}
            FormHelperTextProps={{
                sx: { marginLeft: 0, color: "#d32f2f", fontSize: "0.75rem" },
            }}
        />
    );
};

export default CommonTextField;
