"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, Box, useTheme, useMediaQuery } from "@mui/material";
import CommonTextField from "../CustomTextField/CustomTextField";
import CommonSelectField from "../CommonSelectField/CommonSelectField";
import { motion } from "framer-motion";
import { Country, City } from "country-state-city";
import API from "@/server/api";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // Form Data
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
  });

  const [dropdown, setDropdown] = useState({
    country: "",
    city: "",
  });

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const [errors, setErrors] = useState({});

  // Load countries once
  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  // Load cities dynamically
  useEffect(() => {
    if (dropdown.country) {
      setCities(City.getCitiesOfCountry(dropdown.country));
    } else {
      setCities([]);
    }
  }, [dropdown.country]);

  // Handle input change
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // Handle dropdown change
  const handleDropdownChange = (field, value) => {
    setDropdown((prev) => ({
      ...prev,
      [field]: value,
      ...(field === "country" ? { city: "" } : {}),
    }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // Validation
  const validate = () => {
    let e = {};
    if (!formData.fullName.trim()) e.fullName = "Full Name is required";
    if (!formData.mobile.trim()) e.mobile = "Mobile Number is required";
    else if (!/^[0-9]{10}$/.test(formData.mobile))
      e.mobile = "Enter a valid 10-digit number";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Enter a valid email";

    if (!dropdown.country) e.country = "Please select your country";
    if (!dropdown.city) e.city = "Please select your city";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `
*| New Enquiry Received |*

• *Full Name:* ${formData.fullName}
• *Mobile Number:* ${formData.mobile}
• *Email:* ${formData.email}
• *Country:* ${dropdown.country}
• *City:* ${dropdown.city}

_Sent via Website Contact Form_
`;

    const payload = {
      fullName: formData.fullName,
      phone: formData.mobile,
      email: formData.email,
      country: dropdown.country,
      city: dropdown.city,
    };

    try {
      await API.post("/users", payload);
      const phoneNumber = "918767010062";
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
      alert("Form submitted successfully!");
      setFormData({
        fullName: "",
        mobile: "",
        email: "",
      });

      setDropdown({
        country: "",
        city: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <Box className="w-full flex flex-col">
      <div className="flex flex-col items-center justify-center py-12">
        {/* Title Bar */}
        <Box
          className="w-full px-10 lg:px-36 md:px-14 py-4 text-white font-semibold text-lg mb-10"
          sx={{
            background: "linear-gradient(90deg, #3b0ca3 0%, #7026e2 100%)",
          }}
        >
          <p className="text-white">Contact Us</p>
        </Box>

        <div className="px-8 lg:px-4 md:px-0 w-full max-w-4xl lg:max-w-7xl md:max-w-2xl flex flex-col lg:flex-row md:flex-col items-center gap-4 lg:gap-16 md:gap-10">
          {/* Contact Cards */}
          <Box
            display={"flex"}
            flexDirection={isTablet ? "row" : "column"}
            gap={isMobile ? 2 : isTablet ? 4 : 6}
            alignItems={"center"}
            className="w-full lg:w-[1000px] md:w-[670px]"
          >
            <Card
              onClick={() =>
                (window.location.href = "mailto:prabhudesaiamey95@gmail.com")
              }
              className="shadow-md rounded-xl bg-gray-50 h-full flex w-full hover:cursor-pointer"
            >
              <CardContent className="flex flex-col items-start w-full">
                <span className="text-[34px]">📧</span>
                <div className="text-left px-2">
                  <p className="font-semibold text-xl">Mail To</p>
                  <p>prabhudesaiamey95@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card
              onClick={() => (window.location.href = "tel:+918767010062")}
              className="shadow-md rounded-xl bg-gray-50 h-full flex w-full hover:cursor-pointer"
            >
              <CardContent className="flex flex-col items-start w-full">
                <span className="text-[34px]">📞</span>
                <div className="text-left px-2">
                  <p className="font-semibold text-xl">Phone Number</p>
                  <p>+91 8767010062</p>
                </div>
              </CardContent>
            </Card>
          </Box>

          {/* Enquiry Form */}
          <div className="flex flex-col w-full py-4">
            <p className="text-black font-semibold text-center mb-6 text-3xl">
              Enquire Now
            </p>

            <form
              className="w-full flex flex-col gap-3"
              onSubmit={handleSubmit}
            >
              {/* Inputs */}
              <CommonTextField
                placeholder="Enter Full Name"
                value={formData.fullName} 
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                error={Boolean(errors.fullName)}
                helperText={errors.fullName}
              />

              <CommonTextField
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={(e) => handleInputChange("mobile", e.target.value)}
                error={Boolean(errors.mobile)}
                helperText={errors.mobile}
              />

              <CommonTextField
                placeholder="Email Id"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />

              {/* Country Select */}
              <CommonSelectField
                placeholder="Select Country"
                options={countries.map((c) => ({
                  label: c.name,
                  value: c.isoCode,
                }))}
                value={dropdown.country}
                onChange={(e) =>
                  handleDropdownChange("country", e.target.value)
                }
                error={Boolean(errors.country)}
                helperText={errors.country}
              />

              {/* City Select */}
              <CommonSelectField
                placeholder="Select City"
                options={cities.map((city) => city.name)}
                value={dropdown.city}
                onChange={(e) => handleDropdownChange("city", e.target.value)}
                disabled={!dropdown.country}
                error={Boolean(errors.city)}
                helperText={errors.city}
              />

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <motion.button
                  type="submit"
                  className="hover:cursor-pointer relative overflow-hidden text-black font-semibold px-6 py-3 rounded-[10px] shadow-md hover:opacity-90 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 z-0 rounded-[10px]"
                    style={{
                      background:
                        "linear-gradient(270deg, #FDB900, #FFD563, #FDB900)",
                      backgroundSize: "300% 300%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 4,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  />
                  <span className="relative z-10 text-[18px]">Submit</span>
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Contact;
