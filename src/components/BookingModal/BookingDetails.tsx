import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookingData } from "./types";

type BookingDetailsProps = {
  formData: BookingData;
  setFormData: React.Dispatch<React.SetStateAction<BookingData>>;
};

const BookingDetails: React.FC<BookingDetailsProps> = ({
  formData,
  setFormData,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[#005657] font-medium">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-[#005657] font-medium">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-[#005657] font-medium">
            Age
          </Label>
          <Input
            id="phone"
            name="phone"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="name" className="text-[#005657] font-medium">
            Place
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full Place"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[#005657] font-medium">
            Age
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your Age"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#005657] font-medium">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email address"
            required
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-[#B6E5DF]/20 rounded-md">
          <h4 className="font-medium text-[#005657] mb-1">What to expect:</h4>
          <p className="text-sm text-[#005657]/80">
            After providing your information, you will be able to select from
            available consultation times. We will send a confirmation to your
            email with details about your appointment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
