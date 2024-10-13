import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  gender: { type: String,  enum: ['male', 'female'], required: true },
  education: { type: String, enum: ['intermediate', 'graduation', 'master', 'completed'], required: true },
  isTeamLead: { type: Boolean },
  institute: {type: String, required: true},
  degree: {type: String, required: true},
})

const teamSchema = new mongoose.Schema({
  competition: { type: String, required: true },
  teamName: { type: String, required: true },
  teamMembers: [memberSchema],
  teamLead: { type: String, required: true },
  teamLeadEmail: { type: String, required: true },
  teamLeadPhone: { type: Number, required: true },
  teamLeadGender: { type: String, enum: ['male', 'female'] }
}, { timestamps: true });

export default mongoose.model('Team', teamSchema);
