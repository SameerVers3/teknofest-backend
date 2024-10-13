import { z } from 'zod';
import Team from '../models/RegistrationSchema.js';

const registerSchema = z.object({
  teamName: z.string().min(3,'Team name must be between 3 and 255 characters').max(255, 'Team name must be between 3 and 255 characters'),
  competition: z.string().min(3, 'Competition name must be between 3 and 255 characters').max(255, 'Competition name must be between 3 and 255 characters'),
  teamLead: z.string().min(3, 'Team lead name must be between 3 and 255 characters').max(255, 'Team lead name must be between 3 and 255 characters'),
  teamLeadEmail: z.string().email('Invalid email address'),
  teamLeadPhone: z.string().min(11, 'Phone number must be 11 digits').max(11, 'Phone number must be 11 digits'),
  teamLeadGender: z.string().min(4, "Invalid gender").max(6, "Invalid gender"),
  teamMembers: z.array(z.object({
    name: z.string().min(3, 'Name must be between 3 and 255 characters').max(255, 'Name must be between 3 and 255 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(11, 'Phone number must be 11 digits').max(11, 'Phone number must be 11 digits'),
    gender: z.string().min(4, "Invalid Gender").max(6, "Invalid Gender"),
    education: z.string().min(3, 'Education must be between 3 and 255 characters').max(255, 'Education must be between 3 and 255 characters'),
    institute: z.string().min(3, 'Institute name must be between 3 and 255 characters').max(255, 'Institute name must be between 3 and 255 characters'),
    degree: z.string().min(3, 'Degree name must be between 3 and 255 characters').max(255, 'Degree name must be between 3 and 255 characters'),    
  })),
});

export const register = async (req, res) => {
  try {
    console.log("Entered here");
    const parsedData = registerSchema.parse(req.body);
    const { 
      teamName, 
      competition, 
      teamLead, 
      teamLeadEmail, 
      teamLeadPhone, 
      teamLeadGender, 
      teamMembers
    } = parsedData;

    console.log("Out here");

    let team = new Team({
      teamName,
      competition,
      teamLead,
      teamLeadEmail,
      teamLeadPhone,
      teamLeadGender,
      teamMembers
    })

    console.log("Team object created");

    let res = await team.save();

    console.log("Team saved");

    res.json({
      success: true,
      message: 'Saved in DB'
    });

    return;

  } catch (error) {
    if (error instanceof z.ZodError) {
      let message = error.errors.map(err => err.message).join(', ');
      return res.status(400).json({
        success: false,
        message: message
      });
    }

    return res.json({
      success: true,
      message: 'Saved in DB'
    });
  }
};
